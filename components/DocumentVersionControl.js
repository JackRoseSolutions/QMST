import React from 'react';
import htm from 'htm';
import { DocumentControls } from './DocumentControls.js';
import { DocumentTable } from './DocumentTable.js';

const html = htm.bind(React.createElement);
const { useState, useEffect, useCallback, useMemo } = React;

/**
 * DocumentVersionControl Component (Stateful Container)
 * @param {{
 *   title: string,
 *   storageKey: string,
 *   initialData: Array<object>
 * }} props
 */
export const DocumentVersionControl = ({ title, storageKey, initialData }) => {
    const [documents, setDocuments] = useState([]);
    const [filters, setFilters] = useState({});
    const [tableView, setTableView] = useState('dense');
    const [visibleColumns, setVisibleColumns] = useState({
        documentName: true,
        documentNumber: true,
        version: true,
        status: true,
        documentType: true,
        author: true,
        dateCreated: true,
        dateModified: true,
        approvalDate: true,
        nextReviewDate: true,
        changeSummary: true,
        filePath: true,
        notes: true,
        // New fields, defaulted to hidden as per instruction
        id: false,
        name: false,
        effectiveDate: false,
        reviewDate: false,
        createdBy: false,
        department: false,
        category: false,
        location: false,
        approvalStatus: false,
        region: false,
        system: false,
        documentTitle: false,
        customer: false,
        topic: false,
        isoScope: false,
        revisedDate: false,
        approver: false,
        validated: false,
        modifiedBy: false,
        isoCritical: false,
        workStream: false,
        expiryDate: false,
        revision: false,
        language: false,
        processScope: false,
        documentNumberLegacy: false,
        comment: false,
        description: false,
        complianceAssetId: false,
        approvalProcess: false,
        contentType: false,
        fileSize: false,
        itemChildCount: false,
        retentionLabel: false,
        likeCount: false,
        sensitivity: false,
        folderChildCount: false,
        labelSetting: false,
        retentionLabelApplied: false,
        labelAppliedBy: false,
        owner: false,
        itemType: false,
        path: false,
    });

    useEffect(() => {
        try {
            const storedData = localStorage.getItem(storageKey);
            setDocuments(storedData ? JSON.parse(storedData) : initialData);
        } catch (error) {
            console.error("Failed to load document version control data", error);
            setDocuments(initialData);
        }
    }, [storageKey, initialData]);

    const persistData = (newData) => {
        setDocuments(newData);
        try {
            localStorage.setItem(storageKey, JSON.stringify(newData));
        } catch (error) {
            console.error("Failed to save document version control data", error);
        }
    };

    const handleClearData = useCallback(() => {
        if (window.confirm('Are you sure you want to clear all data for this module? This action cannot be undone.')) {
            persistData(initialData);
        }
    }, [storageKey, initialData]);

    const handleAddItem = useCallback(() => {
        const newDocument = {
            id: `doc-${Date.now()}`,
            name: 'New Document',
            documentNumber: '',
            version: '1.0',
            effectiveDate: new Date().toISOString().split('T')[0],
            reviewDate: '',
            status: 'Draft',
            createdBy: '',
            department: '',
            category: '',
            location: '',
            notes: '',
            approvalStatus: 'Pending',
            region: '',
            system: '',
            documentType: '',
            documentTitle: 'New Document Title',
            customer: '',
            topic: '',
            isoScope: '',
            revisedDate: '',
            author: '',
            approver: '',
            validated: 'No',
            modifiedBy: '',
            isoCritical: 'No',
            workStream: '',
            expiryDate: '',
            revision: '1.0',
            language: 'English',
            processScope: '',
            documentNumberLegacy: '',
            comment: '',
            description: '',
            complianceAssetId: '',
            approvalProcess: '',
            contentType: '',
            fileSize: '',
            itemChildCount: '',
            retentionLabel: '',
            likeCount: '',
            sensitivity: '',
            folderChildCount: '',
            labelSetting: '',
            retentionLabelApplied: '',
            labelAppliedBy: '',
            owner: '',
            nextReviewDate: '',
            itemType: '',
            path: '',
            dateCreated: new Date().toISOString().split('T')[0],
            dateModified: new Date().toISOString().split('T')[0],
            approvalDate: '',
            changeSummary: '',
            filePath: '',
        };
        persistData([newDocument, ...documents]);
    }, [documents]);

    const handleUpdateItem = useCallback((updatedItem) => {
        const newItems = documents.map(item => item.id === updatedItem.id ? updatedItem : item);
        persistData(newItems);
    }, [documents, storageKey]);
    
    const handleDeleteItem = useCallback((itemIdToDelete) => {
        if (window.confirm('Are you sure you want to delete this document record?')) {
            const newItems = documents.filter(item => item.id !== itemIdToDelete);
            persistData(newItems);
        }
    }, [documents, storageKey]);

    const handleImport = useCallback((importedData) => {
        if (window.confirm('This will overwrite the current list. Are you sure?')) {
            if (Array.isArray(importedData)) {
                persistData(importedData);
            } else {
                alert('Invalid data format for import. Expected an array of documents.');
            }
        }
    }, [storageKey]);

    const handleToggleColumn = useCallback((columnKey) => {
        setVisibleColumns(prev => ({
            ...prev,
            [columnKey]: !prev[columnKey]
        }));
    }, []);

    const filteredDocuments = useMemo(() => {
        return documents.filter(document => {
            return Object.entries(filters).every(([key, value]) => {
                if (!value) return true;
                const itemValue = document[key];
                if (itemValue === null || itemValue === undefined) return false;
                return itemValue.toString().toLowerCase().includes(value.toLowerCase());
            });
        });
    }, [documents, filters]);
    
    return html`
        <div className="component-showcase">
            <h2>${title}</h2>
            <${DocumentControls} 
                onAddItem=${handleAddItem}
                onImport=${handleImport}
                onExport=${() => filteredDocuments}
                onClearData=${handleClearData}
                filters=${filters}
                setFilters=${setFilters}
                title=${title}
                tableView=${tableView}
                setTableView=${setTableView}
                visibleColumns=${visibleColumns}
                onToggleColumn=${handleToggleColumn}
            />
            <${DocumentTable}
                documents=${filteredDocuments}
                onUpdateItem=${handleUpdateItem}
                onDeleteItem=${handleDeleteItem}
                tableView=${tableView}
                visibleColumns=${visibleColumns}
                onToggleColumn=${handleToggleColumn}
            />
        </div>
    `;
};