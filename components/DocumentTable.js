import React from 'react';
import htm from 'htm';
import { TrashIcon } from './Icons.js';

const html = htm.bind(React.createElement);

const { useState, useRef, useEffect } = React;

const DocumentTableRow = ({ item, onUpdateItem, onDeleteItem, visibleColumns }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onUpdateItem({ ...item, [name]: value });
        if (e.target.tagName.toLowerCase() === 'textarea') {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
        }
    };

    const statuses = ['Draft', 'Under Review', 'Approved', 'Obsolete'];
    const approvalStatuses = ['Approved', 'Pending', 'Rejected'];
    const yesNoOptions = ['Yes', 'No'];
    const sensitivityOptions = ['Internal', 'Confidential', 'Public'];

    return html`
        <tr className="audit-item-row">
            ${visibleColumns.id && html`<td><textarea name="id" rows="1" value=${item.id} onInput=${handleInputChange} className="form-control" placeholder="ID" aria-label=${`ID for ${item.id}`}></textarea></td>`}
            ${visibleColumns.name && html`<td><textarea name="name" rows="1" value=${item.name} onInput=${handleInputChange} className="form-control" placeholder="Document Name" aria-label=${`Document Name for ${item.id}`}></textarea></td>`}
            ${visibleColumns.documentNumber && html`<td><textarea name="documentNumber" rows="1" value=${item.documentNumber} onInput=${handleInputChange} className="form-control" placeholder="Document Number" aria-label=${`Document Number for ${item.id}`}></textarea></td>`}
            ${visibleColumns.version && html`<td><textarea name="version" rows="1" value=${item.version} onInput=${handleInputChange} className="form-control" placeholder="1.0" aria-label=${`Version for ${item.id}`}></textarea></td>`}
            ${visibleColumns.effectiveDate && html`<td><input type="date" name="effectiveDate" value=${item.effectiveDate} onInput=${handleInputChange} className="form-control" aria-label=${`Effective Date for ${item.id}`} /></td>`}
            ${visibleColumns.reviewDate && html`<td><input type="date" name="reviewDate" value=${item.reviewDate} onInput=${handleInputChange} className="form-control" aria-label=${`Review Date for ${item.id}`} /></td>`}
            ${visibleColumns.status && html`<td>
                <select name="status" value=${item.status} onChange=${handleInputChange} className="form-control" aria-label=${`Status for ${item.id}`}>
                    ${statuses.map(status => html`<option key=${status} value=${status}>${status}</option>`)}
                </select>
            </td>`}
            ${visibleColumns.createdBy && html`<td><textarea name="createdBy" rows="1" value=${item.createdBy} onInput=${handleInputChange} className="form-control" placeholder="Created By" aria-label=${`Created By for ${item.id}`}></textarea></td>`}
            ${visibleColumns.department && html`<td><textarea name="department" rows="1" value=${item.department} onInput=${handleInputChange} className="form-control" placeholder="Department" aria-label=${`Department for ${item.id}`}></textarea></td>`}
            ${visibleColumns.category && html`<td><textarea name="category" rows="1" value=${item.category} onInput=${handleInputChange} className="form-control" placeholder="Category" aria-label=${`Category for ${item.id}`}></textarea></td>`}
            ${visibleColumns.location && html`<td><textarea name="location" rows="1" value=${item.location} onInput=${handleInputChange} className="form-control" placeholder="Location" aria-label=${`Location for ${item.id}`}></textarea></td>`}
            ${visibleColumns.notes && html`<td><textarea name="notes" value=${item.notes} onInput=${handleInputChange} className="form-control" rows="1" placeholder="Notes..." aria-label=${`Notes for ${item.id}`}></textarea></td>`}
            ${visibleColumns.approvalStatus && html`<td>
                <select name="approvalStatus" value=${item.approvalStatus} onChange=${handleInputChange} className="form-control" aria-label=${`Approval Status for ${item.id}`}>
                    ${approvalStatuses.map(status => html`<option key=${status} value=${status}>${status}</option>`)}
                </select>
            </td>`}
            ${visibleColumns.region && html`<td><textarea name="region" rows="1" value=${item.region} onInput=${handleInputChange} className="form-control" placeholder="Region" aria-label=${`Region for ${item.id}`}></textarea></td>`}
            ${visibleColumns.system && html`<td><textarea name="system" rows="1" value=${item.system} onInput=${handleInputChange} className="form-control" placeholder="System" aria-label=${`System for ${item.id}`}></textarea></td>`}
            ${visibleColumns.documentType && html`<td><textarea name="documentType" rows="1" value=${item.documentType} onInput=${handleInputChange} className="form-control" placeholder="Document Type" aria-label=${`Document Type for ${item.id}`}></textarea></td>`}
            ${visibleColumns.documentTitle && html`<td><textarea name="documentTitle" rows="1" value=${item.documentTitle} onInput=${handleInputChange} className="form-control" placeholder="Document Title" aria-label=${`Document Title for ${item.id}`}></textarea></td>`}
            ${visibleColumns.customer && html`<td><textarea name="customer" rows="1" value=${item.customer} onInput=${handleInputChange} className="form-control" placeholder="Customer" aria-label=${`Customer for ${item.id}`}></textarea></td>`}
            ${visibleColumns.topic && html`<td><textarea name="topic" rows="1" value=${item.topic} onInput=${handleInputChange} className="form-control" placeholder="Topic" aria-label=${`Topic for ${item.id}`}></textarea></td>`}
            ${visibleColumns.isoScope && html`<td><textarea name="isoScope" rows="1" value=${item.isoScope} onInput=${handleInputChange} className="form-control" placeholder="ISO Scope" aria-label=${`ISO Scope for ${item.id}`}></textarea></td>`}
            ${visibleColumns.revisedDate && html`<td><input type="date" name="revisedDate" value=${item.revisedDate} onInput=${handleInputChange} className="form-control" aria-label=${`Revised Date for ${item.id}`} /></td>`}
            ${visibleColumns.author && html`<td><textarea name="author" rows="1" value=${item.author} onInput=${handleInputChange} className="form-control" placeholder="Author" aria-label=${`Author for ${item.id}`}></textarea></td>`}
            ${visibleColumns.approver && html`<td><textarea name="approver" rows="1" value=${item.approver} onInput=${handleInputChange} className="form-control" placeholder="Approver" aria-label=${`Approver for ${item.id}`}></textarea></td>`}
            ${visibleColumns.validated && html`<td>
                <select name="validated" value=${item.validated} onChange=${handleInputChange} className="form-control" aria-label=${`Validated for ${item.id}`}>
                    ${yesNoOptions.map(option => html`<option key=${option} value=${option}>${option}</option>`)}
                </select>
            </td>`}
            ${visibleColumns.modifiedBy && html`<td><textarea name="modifiedBy" rows="1" value=${item.modifiedBy} onInput=${handleInputChange} className="form-control" placeholder="Modified By" aria-label=${`Modified By for ${item.id}`}></textarea></td>`}
            ${visibleColumns.isoCritical && html`<td>
                <select name="isoCritical" value=${item.isoCritical} onChange=${handleInputChange} className="form-control" aria-label=${`ISO Critical for ${item.id}`}>
                    ${yesNoOptions.map(option => html`<option key=${option} value=${option}>${option}</option>`)}
                </select>
            </td>`}
            ${visibleColumns.workStream && html`<td><textarea name="workStream" rows="1" value=${item.workStream} onInput=${handleInputChange} className="form-control" placeholder="Work Stream" aria-label=${`Work Stream for ${item.id}`}></textarea></td>`}
            ${visibleColumns.expiryDate && html`<td><input type="date" name="expiryDate" value=${item.expiryDate} onInput=${handleInputChange} className="form-control" aria-label=${`Expiry Date for ${item.id}`} /></td>`}
            ${visibleColumns.revision && html`<td><textarea name="revision" rows="1" value=${item.revision} onInput=${handleInputChange} className="form-control" placeholder="Revision" aria-label=${`Revision for ${item.id}`}></textarea></td>`}
            ${visibleColumns.language && html`<td><textarea name="language" rows="1" value=${item.language} onInput=${handleInputChange} className="form-control" placeholder="Language" aria-label=${`Language for ${item.id}`}></textarea></td>`}
            ${visibleColumns.processScope && html`<td><textarea name="processScope" rows="1" value=${item.processScope} onInput=${handleInputChange} className="form-control" placeholder="Process Scope" aria-label=${`Process Scope for ${item.id}`}></textarea></td>`}
            ${visibleColumns.documentNumberLegacy && html`<td><textarea name="documentNumberLegacy" rows="1" value=${item.documentNumberLegacy} onInput=${handleInputChange} className="form-control" placeholder="Legacy Doc No." aria-label=${`Legacy Document Number for ${item.id}`}></textarea></td>`}
            ${visibleColumns.comment && html`<td><textarea name="comment" rows="1" value=${item.comment} onInput=${handleInputChange} className="form-control" placeholder="Comment" aria-label=${`Comment for ${item.id}`}></textarea></td>`}
            ${visibleColumns.description && html`<td><textarea name="description" rows="1" value=${item.description} onInput=${handleInputChange} className="form-control" placeholder="Description" aria-label=${`Description for ${item.id}`}></textarea></td>`}
            ${visibleColumns.complianceAssetId && html`<td><textarea name="complianceAssetId" rows="1" value=${item.complianceAssetId} onInput=${handleInputChange} className="form-control" placeholder="Compliance Asset ID" aria-label=${`Compliance Asset ID for ${item.id}`}></textarea></td>`}
            ${visibleColumns.approvalProcess && html`<td><textarea name="approvalProcess" rows="1" value=${item.approvalProcess} onInput=${handleInputChange} className="form-control" placeholder="Approval Process" aria-label=${`Approval Process for ${item.id}`}></textarea></td>`}
            ${visibleColumns.contentType && html`<td><textarea name="contentType" rows="1" value=${item.contentType} onInput=${handleInputChange} className="form-control" placeholder="Content Type" aria-label=${`Content Type for ${item.id}`}></textarea></td>`}
            ${visibleColumns.fileSize && html`<td><textarea name="fileSize" rows="1" value=${item.fileSize} onInput=${handleInputChange} className="form-control" placeholder="File Size" aria-label=${`File Size for ${item.id}`}></textarea></td>`}
            ${visibleColumns.itemChildCount && html`<td><textarea name="itemChildCount" rows="1" value=${item.itemChildCount} onInput=${handleInputChange} className="form-control" placeholder="Item Child Count" aria-label=${`Item Child Count for ${item.id}`}></textarea></td>`}
            ${visibleColumns.retentionLabel && html`<td><textarea name="retentionLabel" rows="1" value=${item.retentionLabel} onInput=${handleInputChange} className="form-control" placeholder="Retention Label" aria-label=${`Retention Label for ${item.id}`}></textarea></td>`}
            ${visibleColumns.likeCount && html`<td><textarea name="likeCount" rows="1" value=${item.likeCount} onInput=${handleInputChange} className="form-control" placeholder="Like Count" aria-label=${`Like Count for ${item.id}`}></textarea></td>`}
            ${visibleColumns.sensitivity && html`<td>
                <select name="sensitivity" value=${item.sensitivity} onChange=${handleInputChange} className="form-control" aria-label=${`Sensitivity for ${item.id}`}>
                    ${sensitivityOptions.map(option => html`<option key=${option} value=${option}>${option}</option>`)}
                </select>
            </td>`}
            ${visibleColumns.folderChildCount && html`<td><textarea name="folderChildCount" rows="1" value=${item.folderChildCount} onInput=${handleInputChange} className="form-control" placeholder="Folder Child Count" aria-label=${`Folder Child Count for ${item.id}`}></textarea></td>`}
            ${visibleColumns.labelSetting && html`<td><textarea name="labelSetting" rows="1" value=${item.labelSetting} onInput=${handleInputChange} className="form-control" placeholder="Label Setting" aria-label=${`Label Setting for ${item.id}`}></textarea></td>`}
            ${visibleColumns.retentionLabelApplied && html`<td><input type="date" name="retentionLabelApplied" value=${item.retentionLabelApplied} onInput=${handleInputChange} className="form-control" aria-label=${`Retention Label Applied for ${item.id}`} /></td>`}
            ${visibleColumns.labelAppliedBy && html`<td><textarea name="labelAppliedBy" rows="1" value=${item.labelAppliedBy} onInput=${handleInputChange} className="form-control" placeholder="Label Applied By" aria-label=${`Label Applied By for ${item.id}`}></textarea></td>`}
            ${visibleColumns.owner && html`<td><textarea name="owner" rows="1" value=${item.owner} onInput=${handleInputChange} className="form-control" placeholder="Owner" aria-label=${`Owner for ${item.id}`}></textarea></td>`}
            ${visibleColumns.nextReviewDate && html`<td><input type="date" name="nextReviewDate" value=${item.nextReviewDate} onInput=${handleInputChange} className="form-control" aria-label=${`Next Review Date for ${item.id}`} /></td>`}
            ${visibleColumns.itemType && html`<td><textarea name="itemType" rows="1" value=${item.itemType} onInput=${handleInputChange} className="form-control" placeholder="Item Type" aria-label=${`Item Type for ${item.id}`}></textarea></td>`}
            ${visibleColumns.path && html`<td><textarea name="path" rows="1" value=${item.path} onInput=${handleInputChange} className="form-control" placeholder="Path" aria-label=${`Path for ${item.id}`}></textarea></td>`}

            <td>
                <button type="button" className="delete-item-btn" onClick=${() => onDeleteItem(item.id)} aria-label=${`Delete document ${item.documentName}`}>
                    <${TrashIcon} />
                </button>
            </td>
        </tr>
    `;
};

const sortData = (data, sortColumn, sortDirection) => {
    if (!sortColumn) return data;
    
    return [...data].sort((a, b) => {
        let aVal = a[sortColumn];
        let bVal = b[sortColumn];
        
        // Handle date fields
        const dateFields = ['effectiveDate', 'reviewDate', 'revisedDate', 'expiryDate', 'retentionLabelApplied', 'nextReviewDate'];
        if (dateFields.includes(sortColumn)) {
            aVal = aVal ? new Date(aVal) : new Date('1900-01-01');
            bVal = bVal ? new Date(bVal) : new Date('1900-01-01');
        } else if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
};

export const DocumentTable = ({ documents, onUpdateItem, onDeleteItem, tableView = 'dense', visibleColumns, onToggleColumn }) => {
    const tableRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeData, setResizeData] = useState(null);
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isResizing || !resizeData) return;
            
            const { startX, startWidth, columnIndex } = resizeData;
            const diff = e.clientX - startX;
            const newWidth = Math.max(80, startWidth + diff);
            
            const table = tableRef.current;
            if (table) {
                const headers = table.querySelectorAll('th');
                if (headers[columnIndex]) {
                    headers[columnIndex].style.width = `${newWidth}px`;
                }
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            setResizeData(null);
            if (tableRef.current) {
                tableRef.current.classList.remove('resizing');
            }
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, resizeData]);

    const handleMouseDown = (e, columnIndex) => {
        const rect = e.target.getBoundingClientRect();
        const isNearRightEdge = e.clientX > rect.right - 10;
        
        if (isNearRightEdge) {
            e.preventDefault();
            const startX = e.clientX;
            const startWidth = e.target.offsetWidth;
            
            setIsResizing(true);
            setResizeData({ startX, startWidth, columnIndex });
            
            if (tableRef.current) {
                tableRef.current.classList.add('resizing');
            }
        }
    };

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const getSortIcon = (column) => {
        if (sortColumn !== column) return ' ↕️';
        return sortDirection === 'asc' ? ' ↑' : ' ↓';
    };

    const columnDefinitions = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'documentNumber', label: 'Document Number' },
        { key: 'version', label: 'Version' },
        { key: 'effectiveDate', label: 'Effective Date' },
        { key: 'reviewDate', label: 'Review Date' },
        { key: 'status', label: 'Status' },
        { key: 'createdBy', label: 'Created By' },
        { key: 'department', label: 'Department' },
        { key: 'category', label: 'Category' },
        { key: 'location', label: 'Location' },
        { key: 'notes', label: 'Notes' },
        { key: 'approvalStatus', label: 'Approval Status' },
        { key: 'region', label: 'Region' },
        { key: 'system', label: 'System' },
        { key: 'documentType', label: 'Document Type' },
        { key: 'documentTitle', label: 'Document Title' },
        { key: 'customer', label: 'Customer' },
        { key: 'topic', label: 'Topic' },
        { key: 'isoScope', label: 'ISO Scope' },
        { key: 'revisedDate', label: 'Revised Date' },
        { key: 'author', label: 'Author' },
        { key: 'approver', label: 'Approver' },
        { key: 'validated', label: 'Validated' },
        { key: 'modifiedBy', label: 'Modified By' },
        { key: 'isoCritical', label: 'ISO Critical' },
        { key: 'workStream', label: 'Work Stream' },
        { key: 'expiryDate', label: 'Expiry Date' },
        { key: 'revision', label: 'Revision' },
        { key: 'language', label: 'Language' },
        { key: 'processScope', label: 'Process Scope' },
        { key: 'documentNumberLegacy', label: 'Document Number (legacy)' },
        { key: 'comment', label: 'Comment' },
        { key: 'description', label: 'Description' },
        { key: 'complianceAssetId', label: 'Compliance Asset Id' },
        { key: 'approvalProcess', label: 'Approval Process' },
        { key: 'contentType', label: 'Content Type' },
        { key: 'fileSize', label: 'File Size' },
        { key: 'itemChildCount', label: 'Item Child Count' },
        { key: 'retentionLabel', label: 'Retention Label' },
        { key: 'likeCount', label: 'Like Count' },
        { key: 'sensitivity', label: 'Sensitivity' },
        { key: 'folderChildCount', label: 'Folder Child Count' },
        { key: 'labelSetting', label: 'Label Setting' },
        { key: 'retentionLabelApplied', label: 'Retention Label Applied' },
        { key: 'labelAppliedBy', label: 'Label Applied By' },
        { key: 'owner', label: 'Owner' },
        { key: 'nextReviewDate', label: 'Next Review Date' },
        { key: 'itemType', label: 'Item Type' },
        { key: 'path', label: 'Path' }
    ];

    if (!documents || documents.length === 0) {
        return html`
            <div className="empty-state">
                <h4>No Documents Found</h4>
                <p>Add a new document or adjust your filters.</p>
            </div>
        `;
    }

    const sortedItems = sortData(documents, sortColumn, sortDirection);

    return html`
        <div>
            <div className="audit-table-container">
                <table className=${`audit-table table-view-${tableView}`} ref=${tableRef}>
                    <thead>
                        <tr>
                            ${columnDefinitions.map((col, index) => visibleColumns[col.key] && html`
                                <th onMouseDown=${(e) => handleMouseDown(e, index)} onClick=${() => handleSort(col.key)} className="sortable-header">${col.label}${getSortIcon(col.key)}</th>
                            `)}
                            <th onMouseDown=${(e) => handleMouseDown(e, columnDefinitions.length)}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sortedItems.map(item => html`
                            <${DocumentTableRow}
                                key=${item.id}
                                item=${item}
                                onUpdateItem=${onUpdateItem}
                                onDeleteItem=${onDeleteItem}
                                visibleColumns=${visibleColumns}
                            />
                        `)}
                    </tbody>
                </table>
            </div>
        </div>
    `;
};