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

export const ControlChartControls = ({ onAddPoint, onImport, onExport, onClearData, title }) => {
    const [newPoint, setNewPoint] = useState('');
    const importInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPoint.trim()) {
            onAddPoint(newPoint.trim());
            setNewPoint('');
        }
    };
    
    const handleFileImport = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const fileContent = event.target.result;
                if (file.name.endsWith('.json')) {
                    const importedData = JSON.parse(fileContent);
                    onImport(importedData);
                } else if (file.name.endsWith('.csv')) {
                    Papa.parse(fileContent, {
                        header: true,
                        skipEmptyLines: true,
                        complete: (results) => {
                            if (results.errors.length > 0) {
                                alert(`Error parsing CSV file: ${results.errors[0].message}`);
                                return;
                            }
                            onImport(results.data);
                        },
                         error: (error) => {
                            alert("Error parsing the CSV file.");
                        }
                    });
                } else {
                    alert('Unsupported file type. Please import a .json or .csv file.');
                }
            } catch (error) {
                alert("Error reading or parsing the file.");
            }
        };
        reader.readAsText(file);
        e.target.value = null;
    };
    
    const triggerFileImport = () => {
        importInputRef.current.click();
    };
    
    const exportData = async (format) => {
        const data = onExport();
        const dataToExport = data.dataPoints.map((value, index) => ({ sample: index + 1, value }));

        if (format === 'json') {
            downloadFile(JSON.stringify(data, null, 2), `${title}.json`, 'application/json');
        } else if (format === 'csv') {
            const csvContent = Papa.unparse(dataToExport);
            downloadFile(csvContent, `${title}.csv`, 'text/csv');
        } else if (format === 'pdf') {
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
                head: [['Sample', 'Value']],
                body: dataToExport.map(i => [i.sample, i.value]),
                styles: { fontSize: 8 },
                headStyles: { fillColor: [41, 128, 185] },
            });
            doc.save(`${title}.pdf`);
        } else if (format === 'xlsx') {
            const worksheet = XLSX.utils.json_to_sheet(dataToExport);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "DataPoints");
            XLSX.writeFile(workbook, `${title}.xlsx`);
        } else if (format === 'xml') {
            const xmlString = jsonToXML(dataToExport, 'ControlChartData', 'DataPoint');
            downloadFile(xmlString, `${title}.xml`, 'application/xml');
        }
    };

    return html`
        <div className="controls-container">
             <form onSubmit=${handleSubmit} className="add-item-form">
                <input
                    type="number"
                    step="any"
                    className="form-control"
                    value=${newPoint}
                    onInput=${e => setNewPoint(e.target.value)}
                    placeholder="Add new data point..."
                    aria-label="New data point"
                />
                <button type="submit" className="btn">Add Point</button>
            </form>
            <div className="export-controls">
                <input type="file" ref=${importInputRef} onChange=${handleFileImport} style=${{ display: 'none' }} accept=".json,.csv" />
                <button className="control-btn" onClick=${triggerFileImport}>Import</button>
                <button className="control-btn" onClick=${() => exportData('json')}>JSON</button>
                <button className="control-btn" onClick=${() => exportData('csv')}>CSV</button>
                <button className="control-btn" onClick=${() => exportData('pdf')}>PDF</button>
                <button className="control-btn" onClick=${() => exportData('xlsx')}>XLSX</button>
                <button className="control-btn" onClick=${() => exportData('xml')}>XML</button>
                <button className="control-btn clear-data-btn" onClick=${onClearData}>Clear Data</button>
            </div>
        </div>
    `;
};