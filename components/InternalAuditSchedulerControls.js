import React from 'react';
import htm from 'htm';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { downloadFile, getLogoDataUrl } from '../utils/fileDownload.js';
import { jsonToXML } from '../utils/xmlExport.js';

const html = htm.bind(React.createElement);
const { useState, useRef } = React;

/**
 * InternalAuditSchedulerControls Component
 * Provides UI for adding, filtering, importing, and exporting audit schedules.
 */
export const InternalAuditSchedulerControls = ({ onAddItem, onImport, onExport, onClearData, filters, setFilters, title, tableView, setTableView }) => {
    const [showFilters, setShowFilters] = useState(false);
    const importInputRef = useRef(null);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };
    
    const handleFileImport = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const fileContent = event.target.result;
                let data;
                if (file.name.endsWith('.json')) {
                    data = JSON.parse(fileContent);
                } else if (file.name.endsWith('.csv')) {
                     Papa.parse(fileContent, {
                        header: true,
                        skipEmptyLines: true,
                        complete: (results) => {
                            if (results.errors.length > 0) {
                                console.error("CSV parsing errors:", results.errors);
                                alert(`Error parsing CSV file: ${results.errors[0].message}`);
                                return;
                            }
                            data = results.data.map((item, index) => ({
                                id: item.id || `ias-${Date.now()}-${index}`,
                                auditTitle: item.auditTitle || 'Imported Audit',
                                auditType: item.auditType || '',
                                department: item.department || '',
                                leadAuditor: item.leadAuditor || '',
                                auditTeam: item.auditTeam || '',
                                scheduledStartDate: item.scheduledStartDate || '',
                                scheduledEndDate: item.scheduledEndDate || '',
                                status: item.status || 'Planned',
                                notes: item.notes || '',
                            }));
                            onImport(data);
                        },
                        error: (error) => {
                            console.error("CSV parsing error:", error);
                            alert("Error parsing the CSV file.");
                        }
                    });
                    return; // PapaParse is async
                } else {
                    alert('Unsupported file type. Please import a .json or .csv file.');
                    return;
                }
                onImport(data);
            } catch (error) {
                console.error("Failed to parse file", error);
                alert("Error reading or parsing the file.");
            }
        };
        reader.readAsText(file);
        e.target.value = null;
    };

    const triggerFileImport = () => {
        importInputRef.current.click();
    };
    
    const exportItems = async (format) => {
        const items = onExport();
        if (items.length === 0) {
            alert("No data to export.");
            return;
        }

        switch (format) {
            case 'json':
                downloadFile(JSON.stringify(items, null, 2), `${title}.json`, 'application/json');
                break;
            case 'csv':
                const csvContent = Papa.unparse(items);
                downloadFile(csvContent, `${title}.csv`, 'text/csv');
                break;
            case 'xlsx':
                const worksheet = XLSX.utils.json_to_sheet(items);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "AuditSchedules");
                XLSX.writeFile(workbook, `${title}.xlsx`);
                break;
            case 'pdf': {
                const doc = new jsPDF();
                const logoDataUrl = await getLogoDataUrl();
                if (logoDataUrl) {
                    try {
                        const imgProps = doc.getImageProperties(logoDataUrl);
                        const logoHeight = 10;
                        const logoWidth = (imgProps.width * logoHeight) / imgProps.height;
                        doc.addImage(logoDataUrl, 'PNG', 14, 10, logoWidth, logoHeight);
                    } catch (e) { console.error("Error adding logo to PDF:", e); }
                }
                doc.text(title, 14, 25);
                autoTable(doc, {
                    startY: 30,
                    head: [['Title', 'Type', 'Department', 'Lead Auditor', 'Start Date', 'Status']],
                    body: items.map(i => [i.auditTitle, i.auditType, i.department, i.leadAuditor, i.scheduledStartDate, i.status]),
                    styles: { fontSize: 8 },
                    headStyles: { fillColor: [41, 128, 185] },
                });
                doc.save(`${title}.pdf`);
                break;
            }
            case 'xml':
                const xmlString = jsonToXML(items, 'InternalAuditSchedules', 'AuditSchedule');
                downloadFile(xmlString, `${title}.xml`, 'application/xml');
                break;
        }
    };

    return html`
        <div className="controls-container manufacturer-controls">
            <div className="main-controls">
                <button type="button" className="control-btn" onClick=${onAddItem}>Add Audit</button>
                <button type="button" className="control-btn" onClick=${() => setShowFilters(!showFilters)}>
                    ${showFilters ? 'Hide' : 'Show'} Filters
                </button>
                <div className="table-view-controls">
                    <label className="view-label">Table View:</label>
                    <select value=${tableView} onChange=${(e) => setTableView(e.target.value)} className="form-control view-select">
                        <option value="compact">Compact</option>
                        <option value="standard">Standard</option>
                        <option value="expanded">Expanded</option>
                        <option value="dense">Dense</option>
                    </select>
                </div>
                <div className="export-controls">
                    <input type="file" ref=${importInputRef} onChange=${handleFileImport} style=${{ display: 'none' }} accept=".json,.csv" />
                    <button className="control-btn" onClick=${triggerFileImport}>Import</button>
                    <button className="control-btn" onClick=${() => exportItems('json')}>JSON</button>
                    <button className="control-btn" onClick=${() => exportItems('csv')}>CSV</button>
                    <button className="control-btn" onClick=${() => exportItems('xlsx')}>XLSX</button>
                    <button className="control-btn" onClick=${() => exportItems('pdf')}>PDF</button>
                    <button className="control-btn" onClick=${() => exportItems('xml')}>XML</button>
                    <button className="control-btn clear-data-btn" onClick=${onClearData}>Clear Data</button>
                </div>
            </div>
            ${showFilters && html`
                <div className="filter-grid">
                    <input type="text" name="auditTitle" placeholder="Filter by Title..." value=${filters.auditTitle || ''} onInput=${handleFilterChange} className="form-control" aria-label="Filter by Title" />
                    <input type="text" name="department" placeholder="Filter by Department..." value=${filters.department || ''} onInput=${handleFilterChange} className="form-control" aria-label="Filter by Department" />
                    <input type="text" name="leadAuditor" placeholder="Filter by Lead Auditor..." value=${filters.leadAuditor || ''} onInput=${handleFilterChange} className="form-control" aria-label="Filter by Lead Auditor" />
                    <select name="status" value=${filters.status || ''} onChange=${handleFilterChange} className="form-control" aria-label="Filter by Status">
                        <option value="">All Statuses</option>
                        <option value="Planned">Planned</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Postponed">Postponed</option>
                    </select>
                    <button type="button" className="control-btn" onClick=${() => setFilters({})}>Clear Filters</button>
                </div>
            `}
        </div>
    `;
};