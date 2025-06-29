// Module Groups Definition
export const MODULE_GROUPS = {
    core: {
        title: "Core QMS",
        modules: ['documentControl', 'changeRequests', 'actionItems', 'trainingRecords', 'controlledDocumentRegister', 'placeholderCore1', 'placeholderCore2', 'placeholderCore3', 'draftDocumentPlaceholder']
    },
    audits: {
        title: "Audit Management",
        modules: ['internalAuditScheduler', 'auditFindings', 'internal', 'supplier', 'advancedAudit', 'auditChecklistGenerator', 'placeholderAudit1', 'placeholderAudit2', 'placeholderAudit3', 'auditPresentation']
    },
    capa: {
        title: "CAPA",
        modules: ['car', 'par', 'eightDChecklist', 'placeholderCapa1', 'placeholderCapa2', 'placeholderCapa3']
    },
    suppliers: {
        title: "Supplier Management",
        modules: ['aml', 'supplierScorecard', 'purchasingChecklist', 'placeholderSupplier1', 'placeholderSupplier2', 'placeholderSupplier3']
    },
    risk: {
        title: "Risk Management",
        modules: ['risk', 'notificationGenerator', 'placeholderRisk1', 'placeholderRisk2', 'placeholderRisk3', 'documentGeneratorPlaceholder', 'recallManagement']
    },
    qc: {
        title: "Quality Control",
        modules: ['qcTestResults', 'controlChart', 'inspectionChecklistGenerator', 'receivingChecklist', 'inspectionReportBuilder1', 'inspectionReportBuilder2', 'placeholderQC1', 'placeholderQC2', 'placeholderQC3']
    },
    processChecklists: {
        title: "Process Checklists",
        modules: ['salesChecklist', 'preDeliveryChecklist', 'pdcaChecklist', 'placeholderProcess1', 'placeholderProcess2', 'placeholderProcess3']
    },
    externalResources: {
        title: "External Resources",
        modules: ['iso9001Standard', 'fda510k', 'asqHandbook', 'sixSigmaTools', 'leanManagement', 'placeholderExternal1', 'placeholderExternal2', 'placeholderExternal3']
    },
    internalLinks: {
        title: "Internal Navigation",
        modules: ['quickAccessCAR', 'quickAccessAudit', 'quickAccessDoc', 'quickAccessRisk', 'quickAccessTraining', 'placeholderInternal1', 'placeholderInternal2', 'placeholderInternal3']
    }
};

// User Profiles Definition
export const USER_PROFILES = {
    blank: {
        name: 'Blank',
        description: 'No modules enabled by default. A clean slate.',
        enabledModules: []
    },
    qualityManager: {
        name: 'Quality Manager',
        description: 'Full access to all QMS modules.',
        enabledModules: [
            'documentControl', 'changeRequests', 'actionItems', 'trainingRecords', 'controlledDocumentRegister',
            'internalAuditScheduler', 'auditFindings', 'internal', 'supplier', 'advancedAudit', 'auditChecklistGenerator',
            'car', 'par', 'eightDChecklist',
            'aml', 'supplierScorecard', 'purchasingChecklist',
            'risk', 'notificationGenerator',
            'qcTestResults', 'controlChart', 'inspectionChecklistGenerator', 'receivingChecklist',
            'salesChecklist', 'preDeliveryChecklist', 'pdcaChecklist'
        ]
    },
    auditor: {
        name: 'Auditor',
        description: 'Access focused on audit and CAPA modules.',
        enabledModules: [
            'documentControl', 'actionItems',
            'internalAuditScheduler', 'auditFindings', 'internal', 'supplier', 'advancedAudit', 'auditChecklistGenerator',
            'car', 'par'
        ]
    },
    engineer: {
        name: 'Engineer',
        description: 'Access for engineering and quality control tasks.',
        enabledModules: [
            'documentControl', 'changeRequests', 'actionItems',
            'risk',
            'qcTestResults', 'controlChart', 'inspectionChecklistGenerator'
        ]
    },
    inspector: {
        name: 'Inspector',
        description: 'Access for inspection report building.',
        enabledModules: [
            'inspectionReportBuilder1',
            'inspectionReportBuilder2'
        ]
    },
    notification: {
        name: 'Notification',
        description: 'Access for generating notifications and documents.',
        enabledModules: ['notificationGenerator']
    },
    starter: {
        name: 'Starter',
        description: 'A selection of core modules.',
        enabledModules: [
            'documentControl', 'changeRequests', 'actionItems', 'trainingRecords', 'car', 'risk'
        ]
    },
    draftDocument: {
        name: 'Draft Document',
        description: 'Access a placeholder for drafting documents.',
        enabledModules: ['draftDocumentPlaceholder']
    },
    recalls: {
        name: 'Recalls',
        description: 'Focused access to the Recall Management module.',
        enabledModules: ['recallManagement', 'documentControl', 'actionItems']
    },
    auditPresentation: {
        name: 'Audit Presentation',
        description: 'Access for creating and viewing audit presentations.',
        enabledModules: ['auditPresentation', 'documentControl', 'auditFindings']
    }
};

// Import template data helper
import { getTemplateData } from './tableTemplates.js';

// Core QMS Modules
const CORE_QMS_MODULES = {
    documentControl: {
        title: "Document Version Control",
        component: 'DocumentVersionControl',
        storageKey: "qms-document-control",
        category: "core",
        description: "Comprehensive document lifecycle management system for controlling document versions, approvals, and reviews. Features include version tracking, approval workflows, automated review scheduling, and change history documentation. Purpose: Ensure document integrity and compliance with ISO standards. Scope: All controlled documents including policies, procedures, work instructions, and forms.",
        initialData: getTemplateData('documentControl')
    },
    changeRequests: {
        title: "Change Request Form",
        component: 'ChangeRequestForm',
        storageKey: "qms-change-requests",
        category: "core",
        description: "Structured change management system for controlling modifications to processes, procedures, and systems. Features include impact analysis, business justification tracking, approval history, and implementation planning. Purpose: Ensure controlled and systematic approach to organizational changes. Scope: Process changes, procedure updates, system modifications, and organizational restructuring.",
        initialData: getTemplateData('changeRequests')
    },
    actionItems: {
        title: "Action Item List",
        component: 'ActionItemList',
        storageKey: "qms-action-items",
        category: "core",
        description: "Task management system with priority-based assignment and due date tracking. Features include priority levels, status progression, category organization, and overdue notifications. Purpose: Ensure systematic follow-up and completion of improvement actions and tasks. Scope: Quality improvement tasks, audit follow-ups, corrective actions, and general assignments.",
        initialData: getTemplateData('actionItems')
    },
    trainingRecords: {
        title: "Training Records",
        component: "TrainingRecords",
        storageKey: "qms-training-records",
        category: "core",
        description: "Employee training and certification tracking system with expiration management. Features include certification expiry alerts, trainer documentation, course categorization, and compliance tracking. Purpose: Maintain competency records and ensure regulatory compliance. Scope: All employee training including quality training, safety certifications, job-specific skills, and regulatory requirements.",
        initialData: getTemplateData('trainingRecords')
    },
    controlledDocumentRegister: {
        title: "Controlled Document Register",
        component: "DocumentVersionControl", // Re-use the existing DocumentVersionControl component
        storageKey: "qms-controlled-document-register",
        category: "core",
        description: "Centralized register for all controlled documents, providing a comprehensive overview of document details and their status.",
        initialData: getTemplateData('controlledDocumentRegister')
    },
    // Placeholder Components for Core QMS
    placeholderCore1: {
        title: "Core QMS Dashboard",
        component: 'DashboardView',
        storageKey: "qms-placeholder-core1",
        category: "core",
        description: "A placeholder component for a customized dashboard view focusing on core QMS metrics. Purpose: Provide a quick overview of key performance indicators for core QMS processes. Scope: Displays summarized data from Document Control, Change Requests, and Action Items.",
        initialData: {
            placeholderContent: "This dashboard will show key metrics like document approval rates, open change requests, and overdue action items.",
            metrics: [
                { name: "Documents Approved", value: "95%", trend: "up" },
                { name: "Open Change Requests", value: "8", trend: "stable" },
                { name: "Overdue Action Items", value: "3", trend: "down" }
            ],
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                    {
                        label: 'Change Requests Implemented',
                        data: [5, 7, 6, 8, 9],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'Documents Under Review',
                        data: [10, 8, 7, 5, 4],
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.2)',
                        fill: true,
                    }
                ]
            }
        }
    },
    placeholderCore2: {
        title: "QMS Process Flow Diagram",
        component: 'ExternalLink',
        storageKey: "qms-placeholder-core2",
        category: "core",
        description: "An interactive diagram of the main QMS processes, illustrating how different modules connect. Purpose: Visualize the workflow and interdependencies of QMS processes. Scope: Links to an external diagram tool or a static image with annotations.",
        initialData: { url: "https://mermaid.live/edit#pako:eNqtkMtuwzAMhl_F7A70L2gD2_xQzQYkQ9cKFG6VlkySj01cQzM-S_57Sa9IglrP8yT5aD6jJpYqIIV-Q0M-I4z9h7m-h-g_l6B5D7hX3iQ9I6LzV2Q1bU-4fGg431vN-f5Xh4X6P13aO9WwM703t4H4N_rD5-r1XGj34Q-3Vv8hP8mGj8A-zM_x7tF0lTqV3b85vH4cO9P23V-B4S9e53Yg", description: "Interactive QMS Process Flow Diagram (Mermaid Live Editor)" }
    },
    placeholderCore3: {
        title: "Internal Audit Dashboard",
        component: 'InternalLink',
        storageKey: "qms-placeholder-core3",
        category: "core",
        description: "Quick link to a dashboard view of internal audit statuses and findings. Purpose: Provides a centralized view of audit performance and compliance. Scope: Summarizes data from Internal Audit Scheduler and Audit Findings modules.",
        initialData: { targetModule: "internalAuditScheduler", description: "Quick access to Internal Audit Dashboard.", notes: "This link will take you directly to the Internal Audit Scheduler. You can filter for completed audits there." }
    },
    draftDocumentPlaceholder: {
        title: "Draft Document Placeholder",
        component: 'ExternalLink',
        storageKey: "qms-draft-document-placeholder",
        category: "core",
        description: "A placeholder for an external document generation tool that links to a placeholder URL.",
        initialData: {
            url: 'https://www.example.com/draft-document-placeholder',
            description: 'Link to a placeholder for drafting documents.'
        }
    }
};

// Audit Management Modules
const AUDIT_MODULES = {
    internalAuditScheduler: {
        title: "Internal Audit Scheduler",
        component: 'InternalAuditScheduler',
        storageKey: "qms-audit-scheduler",
        category: "audits",
        description: "Comprehensive audit planning and scheduling system for managing internal audits. Features include team assignment, resource planning, audit calendar, and status tracking. Purpose: Ensure systematic and planned approach to internal auditing activities. Scope: Process audits, system audits, department audits, and compliance verification activities.",
        initialData: getTemplateData('internalAuditScheduler')
    },
    auditFindings: {
        title: "Audit Findings",
        component: 'AuditFindingsList',
        storageKey: "qms-audit-findings",
        category: "audits",
        description: "Audit findings management system with severity classification and CAR linkage. Features include severity levels (minor, major, critical), department categorization, status tracking, and corrective action request integration. Purpose: Systematically document and track audit findings to closure. Scope: Internal audit findings, external audit findings, customer audit results, and regulatory inspection findings.",
        initialData: getTemplateData('auditFindings')
    },
    internal: {
        title: "Internal Process Audit",
        component: 'ChecklistWrapper',
        storageKey: "qms-checklist-internal",
        category: "audits",
        description: "Interactive checklist system for conducting internal process audits. Features include completion tracking, evidence documentation, corrective action notes, and status progression. Purpose: Standardize internal audit procedures and ensure consistent audit execution. Scope: Quality management system processes, operational procedures, and compliance verification.",
        initialData: [
            { id: 'ia-1', text: "Are quality objectives established and communicated?", completed: false, comments: "", actions: "", status: "not-started" },
            { id: 'ia-2', text: "Is the Quality Policy available, understood, and applied?", completed: false, comments: "", actions: "", status: "not-started" },
            { id: 'ia-3', text: "Are processes for the QMS defined and documented?", completed: true, comments: "Process maps are available on the intranet.", actions: "N/A", status: "completed" },
            { id: 'ia-4', text: "Are records of management reviews maintained?", completed: false, comments: "Last review meeting minutes need to be uploaded.", actions: "Follow up with management team.", status: "in-progress" },
        ]
    },
    supplier: {
        title: "Supplier Audit",
        component: 'ChecklistWrapper',
        storageKey: "qms-checklist-supplier",
        category: "audits",
        description: "Supplier evaluation and audit checklist system for vendor qualification and monitoring. Features include supplier capability assessment, compliance verification, and performance evaluation. Purpose: Ensure supplier quality and compliance with specifications. Scope: New supplier qualification, periodic supplier audits, and supplier performance monitoring.",
        initialData: [
            { id: 'sa-1', text: "Does the supplier have a documented quality management system?", completed: false, comments: "", actions: "", status: "not-started" },
            { id: 'sa-2', text: "Are supplier's calibration records for equipment up to date?", completed: false, comments: "", actions: "", status: "not-started" },
        ]
    },
    advancedAudit: {
        title: "Advanced Audit",
        component: 'ChecklistWrapper',
        storageKey: "qms-checklist-advanced",
        category: "audits",
        description: "Advanced audit checklist with ISO standard references for comprehensive system audits. Features include standard references, detailed compliance verification, and regulatory alignment. Purpose: Conduct thorough audits aligned with international standards. Scope: ISO 9001 compliance audits, certification preparation, and advanced quality system verification.",
        initialData: [
            { id: 'aa-1', text: "Is there a process for determining and providing necessary resources?", completed: false, comments: "", actions: "", status: "not-started", reference: "ISO 9001: 7.1" },
            { id: 'aa-2', text: "Are monitoring and measuring resources suitable and maintained?", completed: false, comments: "", actions: "", status: "not-started", reference: "ISO 9001: 7.1.5" },
        ]
    },
    auditChecklistGenerator: {
        title: "Audit Checklist Generator",
        component: 'ChecklistGenerator',
        storageKey: "qms-checklist-audit-generator",
        category: "audits",
        description: "Template-based audit checklist generator for creating standardized audit procedures. Features include predefined templates, customizable checklists, and template library management. Purpose: Standardize audit procedures and ensure consistent audit coverage. Scope: Various audit types including process audits, system audits, and compliance checks using industry-standard templates.",
        initialData: []
    },
    // Placeholder Components for Audit Management
    placeholderAudit1: {
        title: "Audit Schedule Calendar",
        component: 'ExternalLink',
        storageKey: "qms-placeholder-audit1",
        category: "audits",
        description: "An external calendar integration to visualize and manage all scheduled audits. Purpose: Provide a clear and interactive view of upcoming and past audits. Scope: Integrates with common calendar applications for scheduling and reminders.",
        initialData: { url: "https://calendar.google.com/calendar/u/0/r/week?cid=aW50ZXJuYWwuYXVkaXRzQGV4YW1wbGUuY29t", description: "Example Google Calendar showing audit schedule for 'internal.audits@example.com'." }
    },
    placeholderAudit2: {
        title: "Audit Report Archive",
        component: 'InternalLink',
        storageKey: "qms-placeholder-audit2",
        category: "audits",
        description: "Quick link to the document management system's audit report section for easy access to historical reports. Purpose: Centralized access to all completed audit reports. Scope: Navigates to Document Version Control filtered for 'Audit Report' type documents.",
        initialData: { targetModule: "documentControl", description: "Access archived audit reports in Document Control.", notes: "Consider filtering the Document Control module by 'Document Type: Audit Report' for quick access." }
    },
    placeholderAudit3: {
        title: "Audit Follow-up Actions",
        component: 'ActionItemList',
        storageKey: "qms-placeholder-audit3",
        category: "audits",
        description: "A filtered action item list showing only tasks related to audit follow-ups. Purpose: Focus on and track the completion of audit-related corrective actions and recommendations. Scope: Displays action items categorized as 'Audit Follow-up'.",
        initialData: [
            { id: 'audit-ph-1', title: "Review non-conformance from internal audit IA-2024-03", status: "Open", assignedTo: "Quality Manager", dueDate: "2024-07-30", category: "Audit Follow-up" },
            { id: 'audit-ph-2', title: "Implement new calibration procedure per audit finding AF-005", status: "In Progress", assignedTo: "Lab Supervisor", category: "Audit Follow-up", dueDate: "2024-08-15" },
            { id: 'audit-ph-3', title: "Verify closure of supplier audit findings for XYZ Corp", status: "Pending Review", assignedTo: "Procurement Lead", category: "Audit Follow-up", dueDate: "2024-06-30" }
        ]
    },
    auditPresentation: {
        title: "Audit Presentation",
        component: 'ExternalLink',
        storageKey: "qms-external-audit-presentation",
        category: "audits",
        description: "Link to an external tool for creating and viewing audit presentations.",
        initialData: {
            url: 'https://www.example.com/audit-presentation-tool',
            description: 'Link to a simulated external Audit Presentation tool. This could be a specialized software or an online tool.'
        }
    }
};

// CAPA Modules
const CAPA_MODULES = {
    car: {
        title: "Corrective Action Requests",
        component: 'CorrectiveActionRequest',
        storageKey: "qms-car-tracker",
        category: "capa",
        description: "Corrective Action Request management system for addressing non-conformities and deficiencies. Features include root cause analysis, corrective action planning, implementation tracking, and effectiveness verification. Purpose: Systematically address and prevent recurrence of quality issues. Scope: Product non-conformities, process deviations, customer complaints, and audit findings requiring corrective action.",
        initialData: getTemplateData('correctiveActionRequest')
    },
    par: {
        title: "Preventive Action Requests",
        component: 'PreventiveActionRequest',
        storageKey: "qms-par-tracker",
        category: "capa",
        description: "Preventive Action Request system for proactive quality improvement and risk mitigation. Features include trend analysis, preventive action planning, implementation monitoring, and effectiveness assessment. Purpose: Prevent potential non-conformities and improve process capability. Scope: Process improvements, risk mitigation, trend prevention, and proactive quality enhancements.",
        initialData: getTemplateData('preventiveActionRequests')
    },
    eightDChecklist: {
        title: "8D Checklist",
        component: 'ChecklistGenerator',
        storageKey: "qms-checklist-8d",
        category: "capa",
        description: "Eight Disciplines (8D) problem-solving methodology checklist for systematic issue resolution. Features include structured problem-solving steps, team formation guidance, and root cause analysis framework. Purpose: Provide structured approach to complex problem solving and permanent corrective action. Scope: Customer complaints, process failures, quality issues, and systematic problem-solving initiatives.",
        initialData: []
    },
    // Placeholder Components for CAPA
    placeholderCapa1: {
        title: "CAPA Effectiveness Review Tracker",
        component: 'ActionItemList',
        storageKey: "qms-placeholder-capa1",
        category: "capa",
        description: "A dedicated action item list to track effectiveness reviews of implemented CAPAs. Purpose: Ensure the long-term effectiveness of corrective and preventive actions. Scope: Records and monitors planned effectiveness checks for CAPAs.",
        initialData: [
            { id: 'capa-ph-1', title: "Verify effectiveness of CAR-001 (customer complaint)", status: "Open", assignedTo: "Quality Engineer", dueDate: "2024-09-30", category: "CAPA Effectiveness" },
            { id: 'capa-ph-2', title: "Review trend of similar non-conformances post-PAR-003", status: "In Progress", assignedTo: "Quality Manager", dueDate: "2024-10-15", category: "CAPA Effectiveness" }
        ]
    },
    placeholderCapa2: {
        title: "Root Cause Analysis Tools",
        component: 'ExternalLink',
        storageKey: "qms-placeholder-capa2",
        category: "capa",
        description: "Links to external resources and templates for various root cause analysis (RCA) methodologies. Purpose: Provide quick access to tools and methodologies for in-depth RCA. Scope: Resources for 5 Whys, Fishbone Diagram, Pareto Analysis, etc.",
        initialData: { url: "https://asq.org/quality-resources/root-cause-analysis", description: "ASQ Root Cause Analysis Tools. Explore 5 Whys, Fishbone Diagrams, and more." }
    },
    placeholderCapa3: {
        title: "CAPA Trend Analysis Report",
        component: 'ControlChart',
        storageKey: "qms-placeholder-capa3",
        category: "capa",
        description: "A control chart to monitor the trend of open CAPAs or CAR closure rates over time. Purpose: Identify systemic issues or improvements in CAPA process efficiency. Scope: Tracks key CAPA metrics for trend analysis and process control.",
        initialData: {
            processName: "Monthly CAR Closure Rate (%)",
            dataPoints: [85, 90, 88, 92, 87, 95, 90, 89, 93, 91],
            notes: "This chart monitors the percentage of CARs closed each month. Aim for consistent performance above 90%."
        }
    }
};

// Supplier Management Modules
const SUPPLIER_MODULES = {
    aml: {
        title: "Approved Manufacturer List",
        component: 'ApprovedManufacturerList',
        storageKey: "qms-aml",
        category: "suppliers",
        description: "Comprehensive supplier qualification and management system for maintaining approved vendor registry. Features include approval status tracking, capability documentation, audit history, and performance monitoring. Purpose: Maintain qualified supplier base and ensure supply chain quality. Scope: All suppliers providing materials, components, services, and subcontracted processes.",
        initialData: getTemplateData('approvedManufacturers')
    },
    supplierScorecard: {
        title: "Supplier Quality Scorecard",
        component: "SupplierScorecard",
        storageKey: "qms-supplier-scorecard",
        category: "suppliers",
        description: "Automated supplier performance evaluation system with weighted scoring metrics. Features include on-time delivery tracking, quality acceptance rates, CAR response time monitoring, and overall performance scoring. Purpose: Objectively evaluate and compare supplier performance. Scope: Regular supplier performance assessment, vendor selection criteria, and supplier development programs.",
        initialData: getTemplateData('supplierScorecards')
    },
    purchasingChecklist: {
        title: "Purchasing Checklist",
        component: 'ChecklistGenerator',
        storageKey: "qms-checklist-purchasing",
        category: "suppliers",
        description: "Standardized purchasing process checklist for supplier evaluation and procurement activities. Features include supplier assessment criteria, purchase order verification, and quality requirements validation. Purpose: Ensure consistent purchasing practices and supplier compliance. Scope: New supplier evaluation, purchase order processing, and supplier quality requirements verification.",
        initialData: []
    },
    // Placeholder Components for Supplier Management
    placeholderSupplier1: {
        title: "Supplier Risk Assessment",
        component: 'RiskAssessment',
        storageKey: "qms-placeholder-supplier1",
        category: "suppliers",
        description: "A dedicated risk assessment for evaluating and mitigating risks associated with key suppliers. Purpose: Proactively identify and manage potential disruptions or quality issues from the supply chain. Scope: Assesses risks related to supplier performance, geopolitical stability, and single-source dependencies.",
        initialData: { 
            risks: [
                { id: `supplier-risk-${Date.now()}-1`, description: 'Single-source supplier failure for critical component C-101', likelihood: 'Possible', severity: 'Major', mitigation: 'Develop alternative suppliers and maintain safety stock for 3 months.' },
                { id: `supplier-risk-${Date.now()}-2`, description: 'Quality non-conformance from new supplier XYZ, Inc.', likelihood: 'Likely', severity: 'Medium', mitigation: 'Implement rigorous incoming inspection for first 3 shipments and conduct a follow-up audit within 6 months.' },
                { id: `supplier-risk-${Date.now()}-3`, description: 'Supply chain disruption due to geopolitical event in Region A', likelihood: 'Unlikely', severity: 'Catastrophic', mitigation: 'Diversify sourcing to multiple regions and establish contingency agreements.' }
            ],
            likelihoodLevels: ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'],
            severityLevels: ['Insignificant', 'Minor', 'Moderate', 'Major', 'Catastrophic'],
            notes: "This module helps identify and mitigate risks associated with our supply chain. Regularly review top risks."
        }
    },
    placeholderSupplier2: {
        title: "Supplier Contract Management",
        component: 'DocumentVersionControl',
        storageKey: "qms-placeholder-supplier2",
        category: "suppliers",
        description: "Manages all supplier contracts, agreements, and quality assurance clauses. Purpose: Centralize and control all legal and quality-related documents with suppliers. Scope: Stores and tracks supplier contracts, NDAs, quality agreements, and certifications.",
        initialData: [
            { id: 'supp-doc-1', documentName: 'Supplier Agreement XYZ Inc.', version: '2.0', status: 'Approved', documentType: 'Contract', author: 'Legal', dateCreated: '2023-01-01', dateModified: '2024-01-15', approvalDate: '2024-01-20', nextReviewDate: '2025-01-20', changeSummary: 'Updated payment terms and quality clauses', filePath: '/contracts/xyz_agreement.pdf', notes: 'Key supplier for electrical components.' },
            { id: 'supp-doc-2', documentName: 'Quality Agreement for ABC Corp.', version: '1.0', status: 'Approved', documentType: 'Agreement', author: 'Quality Department', dateCreated: '2023-03-10', dateModified: '2023-03-10', approvalDate: '2023-03-15', nextReviewDate: '2025-03-15', changeSummary: 'Initial Release', filePath: '/agreements/abc_quality_agreement.pdf', notes: 'Defines quality requirements for raw material supply.' }
        ]
    },
    placeholderSupplier3: {
        title: "Supplier Audit Schedule",
        component: 'InternalLink',
        storageKey: "qms-placeholder-supplier3",
        category: "suppliers",
        description: "A direct link to the Internal Audit Scheduler, pre-filtered for supplier audits. Purpose: Streamline access to upcoming and past supplier audits for planning and review. Scope: Navigates directly to the audit scheduling module with relevant filters applied.",
        initialData: { targetModule: "internalAuditScheduler", description: "View scheduled supplier audits in the Audit Scheduler.", notes: "Look for 'Audit Type: Supplier' in the Internal Audit Scheduler for supplier-specific audits." }
    }
};

// Risk Management Modules
const RISK_MODULES = {
    risk: {
        title: "Risk Assessment",
        component: 'RiskAssessment',
        storageKey: "qms-risk-assessment",
        category: "risk",
        description: "Comprehensive risk management system with probability-impact matrix visualization and mitigation planning. Features include risk categorization, likelihood and severity assessment, mitigation strategy documentation, and visual risk matrix display. Purpose: Identify, assess, and manage organizational risks systematically. Scope: Operational risks, quality risks, regulatory compliance risks, and strategic business risks.",
        initialData: {
            risks: [
                { id: `risk-${Date.now()}-1`, description: 'Server failure due to hardware malfunction', likelihood: 'Possible', severity: 'Major', mitigation: 'Implement redundant servers and daily backups.'},
                { id: `risk-${Date.now()}-2`, description: 'Data breach from external attack', likelihood: 'Unlikely', severity: 'Catastrophic', mitigation: 'Strengthen firewall, use multi-factor authentication, conduct regular security audits.'},
                { id: `risk-${Date.now()}-3`, description: 'Supplier fails to deliver critical components', likelihood: 'Possible', severity: 'Moderate', mitigation: 'Qualify alternative suppliers.'}
            ],
            likelihoodLevels: ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'],
            severityLevels: ['Insignificant', 'Minor', 'Moderate', 'Major', 'Catastrophic'],
        }
    },
    notificationGenerator: {
        title: "Notification Generator",
        component: 'NotificationGenerator',
        storageKey: "qms-notification-generator",
        category: "risk",
        description: "Generate and manage mass communications for product advisories, recalls, and other notifications. Supports mail merge with customer data to create personalized letters with control numbers.",
        initialData: {
            notificationType: 'Advisory',
            title: 'Product Advisory Notice: [Product Name]',
            body: 'Dear [Customer Name],\n\nWe are writing to inform you about a product advisory regarding [Product Name] with lot number [Lot Number].\n\n[Describe advisory details here.]\n\nPlease do not hesitate to contact us with any questions.\n\nSincerely,\nThe Quality Team',
            logoUrl: '/LOGO.png',
            recipients: 'Customer Name,Product Name,Lot Number,Address,Email\nJohn Doe,Model X,L1234,"123 Main St, Anytown",john.doe@example.com\nJane Smith,Model Y,L5678,"456 Oak Ave, Otherville",jane.smith@example.com\nRobert Brown,Model Z,L9101,"789 Pine Ln, Villagetown",robert.brown@example.com',
            controlNumberPrefix: 'ADV',
            lastControlNumber: 0,
            images: []
        }
    },
    documentGeneratorPlaceholder: {
        title: "Document Generator",
        component: 'ExternalLink',
        storageKey: "qms-external-doc-generator",
        category: "risk",
        description: "A placeholder for an external document generation tool. This could link to a specialized service for creating complex documents, reports, or letters.",
        initialData: {
            url: 'https://www.example.com/document-generator',
            description: 'Link to an external document generator tool.'
        }
    },
    recallManagement: {
        title: "Recall Management",
        component: 'NotificationGenerator',
        storageKey: "qms-recall-management",
        category: "risk",
        description: "Manage product recalls by generating and tracking customer notifications using mail merge. This module is pre-configured for recall scenarios.",
        initialData: {
            notificationType: 'Recall',
            title: 'URGENT: Product Recall Notice for [Product Name]',
            body: 'Dear [Customer Name],\n\nThis is an URGENT product recall notice for [Product Name] with lot number [Lot Number].\n\nPlease cease use and distribution of the affected product immediately.\n\n[Provide instructions for return or disposal here.]\n\nYour safety is our highest priority. We apologize for this inconvenience and appreciate your cooperation.\n\nSincerely,\nThe Quality Team',
            logoUrl: '/LOGO.png',
            recipients: 'Customer Name,Product Name,Lot Number,Address,Email\nJohn Doe,Model X,L1234,"123 Main St, Anytown",john.doe@example.com\nJane Smith,Model Y,L5678,"456 Oak Ave, Otherville",jane.smith@example.com',
            controlNumberPrefix: 'REC',
            lastControlNumber: 0,
            images: []
        }
    },
    // Placeholder Components for Risk Management
    placeholderRisk1: {
        title: "Risk Mitigation Action Plan",
        component: 'ActionItemList',
        storageKey: "qms-placeholder-risk1",
        category: "risk",
        description: "A centralized list of action items specifically for implementing risk mitigation strategies. Purpose: Ensure all identified risks have concrete action plans for their reduction or elimination. Scope: Tracks progress and responsibility for risk mitigation tasks.",
        initialData: [
            { id: 'risk-ph-1', title: "Implement disaster recovery plan for IT systems", status: "In Progress", assignedTo: "IT Manager", dueDate: "2024-12-31", category: "Risk Mitigation" },
            { id: 'risk-ph-2', title: "Conduct cybersecurity awareness training for all employees", status: "Open", assignedTo: "HR Department", dueDate: "2024-09-30", category: "Risk Mitigation" }
        ]
    },
    placeholderRisk2: {
        title: "Regulatory Compliance Tracker",
        component: 'ChecklistWrapper',
        storageKey: "qms-placeholder-risk2",
        category: "risk",
        description: "A checklist for tracking compliance with relevant industry regulations and standards to mitigate legal and operational risks. Purpose: Ensure continuous adherence to external requirements. Scope: Monitors compliance with ISO, FDA, CE marking, etc., through a checklist approach.",
        initialData: [
            { id: 'reg-comp-1', text: "Verify compliance with environmental regulations (ISO 14001)", completed: false, comments: "", actions: "", status: "not-started", reference: "ISO 14001: 6.1.3" },
            { id: 'reg-comp-2', text: "Ensure product labeling meets regional requirements (CE Marking)", completed: true, comments: "All new products conform to CE marking standards.", actions: "N/A", status: "completed", reference: "CE 2006/42/EC" },
            { id: 'reg-comp-3', text: "Review data privacy policies against GDPR requirements", completed: false, comments: "", actions: "Consult legal for latest interpretation.", status: "in-progress", reference: "GDPR Art. 5" }
        ]
    },
    placeholderRisk3: {
        title: "Risk Communication Plan",
        component: 'DocumentVersionControl',
        storageKey: "qms-placeholder-risk3",
        category: "risk",
        description: "Manages the internal and external communication plans for significant risks or crises. Purpose: Ensure timely and effective communication during risk events to minimize impact. Scope: Stores communication policies, templates for crisis announcements, and stakeholder contact lists.",
        initialData: [
            { id: 'risk-comm-1', documentName: 'Crisis Communication Plan v1.0', version: '1.0', status: 'Approved', documentType: 'Plan', author: 'Risk Management', dateCreated: '2024-01-01', dateModified: '2024-01-01', approvalDate: '2024-01-05', nextReviewDate: '2025-01-05', changeSummary: 'Initial Release', filePath: '/risk/crisis_plan.pdf', notes: 'Includes media and stakeholder communication protocols.' },
            { id: 'risk-comm-2', documentName: 'Stakeholder Communication Matrix', version: '1.0', status: 'Draft', documentType: 'Matrix', author: 'Risk Management', dateCreated: '2024-03-01', dateModified: '2024-03-01', approvalDate: '', nextReviewDate: '2025-03-01', changeSummary: 'Initial draft', filePath: '/risk/stakeholder_matrix.xlsx', notes: 'Identifies key stakeholders and communication channels for various risk scenarios.' }
        ]
    }
};

// Quality Control Modules
const QC_MODULES = {
    qcTestResults: {
        title: "QC Test Results",
        component: 'QcTestResultsList',
        storageKey: "qms-qc-test-results",
        category: "qc",
        description: "Quality control test results management system for tracking inspection and testing activities. Features include test parameter specification, actual result recording, pass/fail determination, and operator/equipment tracking. Purpose: Document and track quality control testing for product compliance. Scope: Incoming inspection, in-process testing, final inspection, and laboratory test results.",
        initialData: getTemplateData('qcTestResults')
    },
    controlChart: {
        title: "Control Chart",
        component: "ControlChart",
        storageKey: "qms-control-chart",
        category: "qc",
        description: "Statistical process control chart system for monitoring process performance and detecting variations. Features include automatic control limit calculation, out-of-control point detection, and trend analysis. Purpose: Monitor process stability and detect special cause variations. Scope: Critical process parameters, measurement data, and process capability monitoring.",
        initialData: {
            processName: "Shaft Diameter (mm)",
            dataPoints: [10.02, 10.01, 9.98, 10.00, 9.99, 10.03, 10.01, 9.97, 9.99, 10.00, 10.01, 10.04, 9.98, 9.99, 10.02]
        }
    },
    inspectionChecklistGenerator: {
        title: "Inspection Checklist Generator",
        component: 'ChecklistGenerator',
        storageKey: "qms-checklist-inspection-generator",
        category: "qc",
        description: "Template-based inspection checklist generator for standardizing inspection procedures. Features include predefined inspection templates, customizable check points, and inspection criteria documentation. Purpose: Standardize inspection processes and ensure consistent quality verification. Scope: Incoming inspection, in-process inspection, final inspection, and equipment inspection procedures.",
        initialData: []
    },
    receivingChecklist: {
        title: "Receiving Checklist",
        component: 'ChecklistGenerator',
        storageKey: "qms-checklist-receiving",
        category: "qc",
        description: "Incoming goods inspection checklist for verifying received materials and products. Features include material verification, packaging inspection, documentation review, and acceptance criteria. Purpose: Ensure received materials meet specifications and requirements. Scope: Raw materials, purchased components, subcontracted items, and customer-supplied materials.",
        initialData: []
    },
    inspectionReportBuilder1: {
        title: "Inspection Report Builder 1 (Test A)",
        component: 'ExternalLink',
        storageKey: "qms-external-inspection-report-1",
        category: "qc",
        description: "Advanced inspection report builder for Test A procedures and documentation. Features include automated report generation, customizable templates, and compliance verification. Purpose: Generate comprehensive inspection reports for Test A procedures. Scope: Specialized testing procedures, regulatory compliance reporting, and detailed inspection documentation.",
        initialData: {
            url: 'https://www.example.com/inspection-report-builder-test-a',
            description: 'Link to a simulated external Inspection Report Builder for Test A. This could be a specialized software or an online tool.'
        }
    },
    inspectionReportBuilder2: {
        title: "Inspection Report Builder 2 (Test B)",
        component: 'ExternalLink',
        storageKey: "qms-external-inspection-report-2",
        category: "qc",
        description: "Advanced inspection report builder for Test B procedures and documentation. Features include automated report generation, customizable templates, and compliance verification. Purpose: Generate comprehensive inspection reports for Test B procedures. Scope: Specialized testing procedures, regulatory compliance reporting, and detailed inspection documentation.",
        initialData: {
            url: 'https://www.example.com/inspection-report-builder-test-b',
            description: 'Link to a simulated external Inspection Report Builder for Test B, allowing for different testing protocols or reporting needs.'
        }
    },
    // Placeholder Components for Quality Control
    placeholderQC1: {
        title: "Calibration Schedule Management",
        component: 'InternalAuditScheduler', // Reusing for calendar-like scheduling
        storageKey: "qms-placeholder-qc1",
        category: "qc",
        description: "Manages the calibration schedule for all measuring and test equipment. Purpose: Ensure all QC equipment is calibrated within its due dates to maintain measurement accuracy. Scope: Tracks equipment ID, last calibration date, next due date, and calibration status.",
        initialData: [
            { id: 'cal-1', auditTitle: 'Annual Calipers Calibration', auditType: 'Calibration', department: 'QC Lab', leadAuditor: 'Calibration Tech', auditTeam: 'QC Team', scheduledStartDate: '2024-07-01', scheduledEndDate: '2024-07-05', status: 'Planned', notes: 'All handheld calipers to be calibrated by external vendor.' },
            { id: 'cal-2', auditTitle: 'Monthly Weighing Scale Check', auditType: 'Verification', department: 'Production', leadAuditor: 'Production Supervisor', auditTeam: '', scheduledStartDate: '2024-06-20', scheduledEndDate: '2024-06-20', status: 'Completed', notes: 'Routine daily/monthly checks completed by production staff.' }
        ]
    },
    placeholderQC2: {
        title: "Non-Conforming Product Log",
        component: 'CorrectiveActionRequest', // Reusing CAR for non-conformance logging
        storageKey: "qms-placeholder-qc2",
        category: "qc",
        description: "A log for tracking and managing non-conforming products identified during QC inspections. Purpose: Ensure all non-conformances are documented, investigated, and properly dispositioned. Scope: Records non-conformance details, responsible department, and disposition actions.",
        initialData: [
            { id: 'nc-1', description: 'Product A - Dimension out of spec (Lot #XYZ)', status: 'Open', assignedTo: 'QC Manager', dueDate: '2024-07-30', correctiveAction: 'Initiate MRB review, segregate batch.', notes: 'Issued during final inspection. Awaiting MRB disposition.' },
            { id: 'nc-2', description: 'Raw Material B - Incorrect grade received', status: 'In Progress', assignedTo: 'Procurement', dueDate: '2024-06-25', correctiveAction: 'Return to supplier, issue debit memo. Initiate CAR for supplier.', notes: 'Supplier notified, awaiting RTV authorization.' }
        ]
    },
    placeholderQC3: {
        title: "Measurement System Analysis (MSA) Tool",
        component: 'ExternalLink',
        storageKey: "qms-placeholder-qc3",
        category: "qc",
        description: "Links to an external tool or software for performing Measurement System Analysis (MSA). Purpose: Evaluate the capability and accuracy of measurement systems. Scope: Resources for Gauge R&R studies, bias, and linearity assessments.",
        initialData: { url: "https://www.moresteam.com/lean-six-sigma-tools/measurement-system-analysis-msa.cfm", description: "MoreSteam MSA Tool Reference. Useful for Gauge R&R studies and validating measurement equipment." }
    }
};

// Process Checklist Modules
const PROCESS_CHECKLIST_MODULES = {
    salesChecklist: {
        title: "Sales Checklist",
        component: 'ChecklistGenerator',
        storageKey: "qms-checklist-sales",
        category: "processChecklists",
        description: "Sales process checklist for ensuring consistent customer engagement and contract management. Features include customer requirement verification, contract review procedures, and order processing validation. Purpose: Standardize sales processes and ensure customer requirements are properly captured. Scope: Customer inquiries, quotation preparation, contract review, and order processing activities.",
        initialData: []
    },
    preDeliveryChecklist: {
        title: "Pre-Delivery Checklist",
        component: 'ChecklistGenerator',
        storageKey: "qms-checklist-pre-delivery",
        category: "processChecklists",
        description: "Pre-delivery verification checklist ensuring product readiness and customer satisfaction. Features include final inspection verification, packaging validation, documentation completion, and delivery preparation. Purpose: Ensure products meet specifications before delivery to customers. Scope: Final product inspection, packaging verification, shipping documentation, and delivery preparation.",
        initialData: []
    },
    pdcaChecklist: {
        title: "PDCA Checklist",
        component: 'ChecklistGenerator',
        storageKey: "qms-checklist-pdca",
        category: "processChecklists",
        description: "Plan-Do-Check-Act cycle checklist for systematic process improvement and problem-solving. Features include structured improvement methodology, progress tracking, and effectiveness evaluation. Purpose: Guide systematic improvement activities using PDCA methodology. Scope: Process improvements, quality initiatives, corrective actions, and continuous improvement projects.",
        initialData: []
    },
    // Placeholder Components for Process Checklists
    placeholderProcess1: {
        title: "New Product Introduction (NPI) Checklist",
        component: 'ChecklistGenerator',
        storageKey: "qms-placeholder-process1",
        category: "processChecklists",
        description: "A comprehensive checklist for managing the New Product Introduction (NPI) process from concept to launch. Purpose: Ensure all critical steps and quality gates are met during new product development. Scope: Covers design review, prototyping, testing, validation, and launch readiness.",
        initialData: [
            { text: "Design Review completed and approved (Gate 1)", reference: "NPI-DR-001" },
            { text: "Pilot production run completed successfully (Gate 2)", reference: "NPI-PR-001" },
            { text: "Validation Testing (IQ/OQ/PQ) completed and signed off", reference: "NPI-VT-001" },
            { text: "Marketing materials and launch plan finalized", reference: "NPI-MKT-002" },
            { text: "Customer training materials developed and reviewed", reference: "NPI-CUST-003" }
        ]
    },
    placeholderProcess2: {
        title: "Management Review Meeting Minutes",
        component: 'DocumentVersionControl',
        storageKey: "qms-placeholder-process2",
        category: "processChecklists",
        description: "Stores and manages the meeting minutes and action items from management review meetings. Purpose: Document the discussions, decisions, and assignments from periodic management reviews of the QMS. Scope: All records pertaining to QMS management review meetings.",
        initialData: [
            { id: 'mrm-1', documentName: 'Management Review Meeting Minutes 2024-Q2', version: '1.0', status: 'Approved', documentType: 'Meeting Minutes', author: 'QMS Coordinator', dateCreated: '2024-07-01', dateModified: '2024-07-01', approvalDate: '2024-07-05', nextReviewDate: '2025-07-05', changeSummary: 'Initial Release', filePath: '/meetings/mrm-2024-q2.pdf', notes: 'Discussed audit results and CAPA status, decided on new quality objectives.' },
            { id: 'mrm-2', documentName: 'Management Review Action Items 2024-Q1', version: '1.0', status: 'Approved', documentType: 'Action Items', author: 'QMS Coordinator', dateCreated: '2024-04-01', dateModified: '2024-04-01', approvalDate: '2024-04-05', nextReviewDate: '2025-04-05', changeSummary: 'Initial release', filePath: '/meetings/mrm-2024-q1-ai.xlsx', notes: 'Follow-up actions from Q1 review.' }
        ]
    },
    placeholderProcess3: {
        title: "Process Improvement Initiatives Tracker",
        component: 'ActionItemList',
        storageKey: "qms-placeholder-process3",
        category: "processChecklists",
        description: "A specialized action item list to track ongoing process improvement projects and their status. Purpose: Centralize the management of all continuous improvement efforts. Scope: Records project goals, assigned teams, milestones, and outcomes for process enhancements.",
        initialData: [
            { id: 'pi-1', title: "Optimize raw material receiving process", description: "Reduce cycle time by 20% and minimize inspection errors.", assignedTo: "Operations Lead", priority: "High", status: "In Progress", dueDate: "2024-10-31", category: "Process Improvement" },
            { id: 'pi-2', title: "Implement new customer feedback collection system", description: "Streamline customer complaint handling and integrate with CAPA process.", assignedTo: "Customer Service Manager", priority: "Medium", status: "Open", dueDate: "2024-11-30", category: "Process Improvement" }
        ]
    }
};

// External Resources Modules
const EXTERNAL_RESOURCES_MODULES = {
    iso9001Standard: {
        title: "ISO 9001:2015 Standard",
        component: 'ExternalLink',
        storageKey: "qms-external-iso9001",
        category: "externalResources",
        description: "Official ISO 9001:2015 Quality Management Systems standard information and resources. Features include standard requirements, implementation guidance, and certification information. Purpose: Provide access to official ISO 9001 standard and related resources. Scope: Quality management system requirements, implementation guidance, and certification preparation materials.",
        initialData: {
            url: 'https://www.iso.org/iso-9001-quality-management.html',
            description: 'Official ISO 9001:2015 Quality Management Systems standard information and resources'
        }
    },
    fda510k: {
        title: "FDA 510(k) Guidance",
        component: 'ExternalLink',
        storageKey: "qms-external-fda510k",
        category: "externalResources",
        description: "FDA guidance documents for 510(k) premarket notification submissions and medical device regulations. Features include regulatory requirements, submission procedures, and compliance guidance. Purpose: Support medical device regulatory compliance and 510(k) submissions. Scope: Medical device regulations, premarket notifications, and FDA compliance requirements.",
        initialData: {
            url: 'https://www.fda.gov/medical-devices/premarket-submissions/premarket-notification-510k',
            description: 'FDA guidance documents for 510(k) premarket notification submissions'
        }
    },
    asqHandbook: {
        title: "ASQ Quality Handbook",
        component: 'ExternalLink',
        storageKey: "qms-external-asq",
        category: "externalResources",
        description: "American Society for Quality resources and handbook materials for quality professionals. Features include quality tools, best practices, and professional development resources. Purpose: Access comprehensive quality management resources and tools. Scope: Quality management tools, best practices, training materials, and professional development resources.",
        initialData: {
            url: 'https://asq.org/quality-resources',
            description: 'American Society for Quality resources and handbook materials'
        }
    },
    sixSigmaTools: {
        title: "Six Sigma Tools",
        component: 'ExternalLink',
        storageKey: "qms-external-sixsigma",
        category: "externalResources",
        description: "Six Sigma methodology tools and templates for process improvement and statistical analysis. Features include DMAIC tools, statistical templates, and improvement methodologies. Purpose: Support Six Sigma process improvement initiatives. Scope: Process improvement projects, statistical analysis, and Six Sigma methodology implementation.",
        initialData: {
            url: 'https://www.isixsigma.com/tools-templates/',
            description: 'Six Sigma methodology tools and templates for process improvement'
        }
    },
    leanManagement: {
        title: "Lean Management Resources",
        component: 'ExternalLink',
        storageKey: "qms-external-lean",
        category: "externalResources",
        description: "Lean Enterprise Institute resources for lean management and continuous improvement methodologies. Features include lean tools, implementation guides, and best practices. Purpose: Support lean management implementation and continuous improvement. Scope: Lean tools, waste elimination, value stream mapping, and continuous improvement methodologies.",
        initialData: {
            url: 'https://www.lean.org/explore-lean/',
            description: 'Lean Enterprise Institute: Learn about Lean principles, tools like Value Stream Mapping, and continuous improvement.'
        }
    },
    // Placeholder Components for External Resources
    placeholderExternal1: {
        title: "Industry Standards Database",
        component: 'ExternalLink',
        storageKey: "qms-placeholder-external1",
        category: "externalResources",
        description: "Access a comprehensive database of industry-specific standards and regulations. Purpose: Provide quick access to relevant compliance documentation. Scope: Links to a third-party database like Techstreet or IHS Markit for standards research.",
        initialData: { url: "https://www.ansi.org/standards-e-store", description: "ANSI eStandards Store (Example: Access to U.S. and international standards)" }
    },
    placeholderExternal2: {
        title: "Quality Blog & Articles",
        component: 'ExternalLink',
        storageKey: "qms-placeholder-external2",
        category: "externalResources",
        description: "Curated collection of leading quality management blogs and articles for continuous learning. Purpose: Keep up-to-date with the latest trends, best practices, and thought leadership in quality. Scope: Links to reputable quality-focused publications and expert blogs.",
        initialData: { url: "https://www.qualitymag.com/", description: "Quality Magazine Online: News, articles, and resources for quality professionals." }
    },
    placeholderExternal3: {
        title: "QMS Software Comparison",
        component: 'ExternalLink',
        storageKey: "qms-placeholder-external3",
        category: "externalResources",
        description: "A comparison guide for various QMS software solutions on the market. Purpose: Aid in evaluating and selecting enterprise-level QMS software for future upgrades or expansions. Scope: Provides features, pricing, and user reviews for different QMS platforms.",
        initialData: { url: "https://www.g2.com/categories/quality-management-qm-systems", description: "G2.com: Compare and review various Quality Management Software solutions based on user feedback and features." }
    }
};

// External Resources Storage
const EXTERNAL_RESOURCES_STORAGE_KEY = 'qms-external-resources';
const INTERNAL_LINKS_STORAGE_KEY = 'qms-internal-links';

// Load external resources from localStorage
const loadExternalResources = () => {
    try {
        const stored = localStorage.getItem(EXTERNAL_RESOURCES_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Failed to load external resources', error);
        return {};
    }
};

// Save external resources to localStorage
export const saveExternalResources = (externalResources) => {
    try {
        localStorage.setItem(EXTERNAL_RESOURCES_STORAGE_KEY, JSON.stringify(externalResources));
    } catch (error) {
        console.error('Failed to save external resources', error);
    }
};

// Load internal links from localStorage
const loadInternalLinks = () => {
    try {
        const stored = localStorage.getItem(INTERNAL_LINKS_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Failed to load internal links', error);
        return {};
    }
};

// Save internal links to localStorage
export const saveInternalLinks = (internalLinks) => {
    try {
        localStorage.setItem(INTERNAL_LINKS_STORAGE_KEY, JSON.stringify(internalLinks));
    } catch (error) {
        console.error('Failed to save internal links', error);
    }
};

// Create a new external resource
export const createExternalResource = (resourceData) => {
    const externalResources = loadExternalResources();
    const resourceKey = `external_${resourceData.key}`;
    
    // Check if resource key already exists
    if (externalResources[resourceKey] || EXTERNAL_RESOURCES_MODULES[resourceKey]) {
        throw new Error('A resource with this key already exists');
    }

    const newResource = {
        title: resourceData.title,
        component: 'ExternalLink',
        storageKey: `qms-external-${resourceData.key}`,
        category: 'externalResources',
        initialData: {
            url: resourceData.url,
            description: resourceData.description
        },
        isDynamic: true,
        createdDate: new Date().toISOString()
    };

    externalResources[resourceKey] = newResource;
    saveExternalResources(externalResources);
    
    // Also save the initial data to the module's storage
    localStorage.setItem(newResource.storageKey, JSON.stringify(newResource.initialData));
    
    return { resourceKey, resource: newResource };
};

// Get all external resources (static + dynamic)
export const getAllExternalResources = () => {
    return { ...EXTERNAL_RESOURCES_MODULES, ...loadExternalResources() };
};

// Get all internal links (static + dynamic)
export const getAllInternalLinks = () => {
    return { ...INTERNAL_LINKS_MODULES, ...loadInternalLinks() };
};

// Delete an external resource
export const deleteExternalResource = (resourceKey) => {
    const externalResources = loadExternalResources();
    if (externalResources[resourceKey]) {
        // Clear the resource's data from localStorage
        const resourceConfig = externalResources[resourceKey];
        if (resourceConfig.storageKey) {
            localStorage.removeItem(resourceConfig.storageKey);
        }
        delete externalResources[resourceKey];
        saveExternalResources(externalResources);
        return true;
    }
    return false;
};

// Internal Links Modules
const INTERNAL_LINKS_MODULES = {
    quickAccessCAR: {
        title: "Quick Access: CARs",
        component: 'InternalLink',
        storageKey: "qms-internal-car",
        category: "internalLinks",
        description: "Quick access navigation to Corrective Action Requests for immediate review and action. Features include direct module navigation and quick access functionality. Purpose: Provide rapid access to critical CAR management functions. Scope: Direct navigation to CAR tracking and management for urgent quality issues and corrective actions.",
        initialData: {
            targetModule: 'car',
            description: 'Quick access to Corrective Action Requests for immediate review and action'
        }
    },
    quickAccessAudit: {
        title: "Quick Access: Audits",
        component: 'InternalLink',
        storageKey: "qms-internal-audit",
        category: "internalLinks",
        description: "Direct navigation to internal audit scheduling and management system. Features include quick access to audit planning and scheduling functions. Purpose: Provide rapid access to audit management activities. Scope: Direct navigation to audit scheduling, planning, and management for internal audit coordination.",
        initialData: {
            targetModule: 'internalAuditScheduler',
            description: 'Direct navigation to internal audit scheduling and management'
        }
    },
    quickAccessDoc: {
        title: "Quick Access: Documents",
        component: 'InternalLink',
        storageKey: "qms-internal-doc",
        category: "internalLinks",
        description: "Fast access to document version control and management system. Features include quick navigation to document control functions. Purpose: Provide rapid access to document management activities. Scope: Direct navigation to document version control, approval workflows, and document management tasks.",
        initialData: {
            targetModule: 'documentControl',
            description: 'Fast access to document version control and management system'
        }
    },
    quickAccessRisk: {
        title: "Quick Access: Risk Assessment",
        component: 'InternalLink',
        storageKey: "qms-internal-risk",
        category: "internalLinks",
        description: "Quick navigation to risk assessment matrix and management tools. Features include direct access to risk management functions. Purpose: Provide rapid access to risk management activities. Scope: Direct navigation to risk assessment, mitigation planning, and risk monitoring functions.",
        initialData: {
            targetModule: 'risk',
            description: 'Quick navigation to risk assessment matrix and management tools'
        }
    },
    quickAccessTraining: {
        title: "Quick Access: Training",
        component: 'InternalLink',
        storageKey: "qms-internal-training",
        category: "internalLinks",
        description: "Direct access to training records and certification tracking system. Features include quick navigation to training management functions. Purpose: Provide rapid access to training record management. Scope: Direct navigation to training records, certification tracking, and competency management functions.",
        initialData: {
            targetModule: 'trainingRecords',
            description: 'Direct access to training records and certification tracking'
        }
    },
    // Placeholder Components for Internal Links
    placeholderInternal1: {
        title: "Internal Link: Supplier Scorecard Dashboard",
        component: 'InternalLink',
        storageKey: "qms-placeholder-internal1",
        category: "internalLinks",
        description: "A quick link to the Supplier Quality Scorecard module for reviewing vendor performance metrics. Purpose: Provides immediate access to key supplier data for performance monitoring. Scope: Navigates directly to the Supplier Scorecard module.",
        initialData: { targetModule: "supplierScorecard", description: "Jump directly to the Supplier Quality Scorecard module to review performance metrics for all approved suppliers." }
    },
    placeholderInternal2: {
        title: "Internal Link: QC Test Results Summary",
        component: 'InternalLink',
        storageKey: "qms-placeholder-internal2",
        category: "internalLinks",
        description: "A direct link to the QC Test Results module for a summary of product testing outcomes. Purpose: Enables rapid review of quality control data and pass/fail rates. Scope: Navigates directly to the QC Test Results module.",
        initialData: { targetModule: "qcTestResults", description: "Quickly access the QC Test Results module to view recent product test outcomes and track quality performance." }
    },
    placeholderInternal3: {
        title: "Internal Link: Change Request Approvals",
        component: 'InternalLink',
        storageKey: "qms-placeholder-internal3",
        category: "internalLinks",
        description: "A quick access link to the Change Request Form, potentially filtered for pending approvals. Purpose: Streamline the review and approval process for changes. Scope: Navigates directly to the Change Request module.",
        initialData: { targetModule: "changeRequests", description: "Review and approve pending change requests. This link takes you directly to the Change Request Form module." }
    }
};

// Special/Empty Modules
const SPECIAL_MODULES = {
    empty: {
        title: "Empty Checklist Example",
        component: 'ChecklistWrapper',
        storageKey: "qms-checklist-empty",
        category: "examples",
        description: "Empty checklist template for demonstration and testing purposes. Features include basic checklist functionality without predefined content. Purpose: Provide example template for custom checklist creation. Scope: Template and example for creating custom checklists and understanding system functionality.",
        initialData: []
    }
};

// Custom Modules Storage
const CUSTOM_MODULES_STORAGE_KEY = 'qms-custom-modules';

// Load custom modules from localStorage
const loadCustomModules = () => {
    try {
        const stored = localStorage.getItem(CUSTOM_MODULES_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Failed to load custom modules', error);
        return {};
    }
};

// Save custom modules to localStorage
export const saveCustomModules = (customModules) => {
    try {
        localStorage.setItem(CUSTOM_MODULES_STORAGE_KEY, JSON.stringify(customModules));
    } catch (error) {
        console.error('Failed to save custom modules', error);
    }
};

// Available component types for custom modules
export const AVAILABLE_COMPONENT_TYPES = {
    'ChecklistWrapper': {
        name: 'Checklist',
        description: 'Interactive checklist with completion tracking',
        defaultData: [],
        dataTemplate: {
            id: 'item-{timestamp}',
            text: 'Sample checklist item',
            completed: false,
            comments: '',
            actions: '',
            status: 'not-started'
        }
    },
    'ManufacturerTable': {
        name: 'Table (Manufacturer Style)',
        description: 'Table for managing manufacturers/suppliers',
        defaultData: [],
        dataTemplate: {
            id: 'item-{timestamp}',
            name: 'New Item',
            status: 'Active',
            notes: ''
        }
    },
    'ActionItemList': {
        name: 'Action Items',
        description: 'Task management with priorities and due dates',
        defaultData: [],
        dataTemplate: {
            id: 'item-{timestamp}',
            title: 'New Action Item',
            description: '',
            assignedTo: '',
            priority: 'Medium',
            status: 'Open',
            dueDate: '',
            category: '',
            completedDate: '',
            notes: ''
        }
    },
    'DocumentVersionControl': {
        name: 'Document Management',
        description: 'Document version control and tracking',
        defaultData: [],
        dataTemplate: {
            id: 'doc-{timestamp}',
            documentName: 'New Document',
            version: '1.0',
            status: 'Draft',
            documentType: '',
            author: '',
            dateCreated: '{today}',
            dateModified: '{today}',
            approvalDate: '',
            nextReviewDate: '',
            changeSummary: '',
            filePath: '',
            notes: ''
        }
    },
    'RiskAssessment': {
        name: 'Risk Assessment',
        description: 'Risk matrix and assessment tool',
        defaultData: {
            risks: [],
            likelihoodLevels: ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'],
            severityLevels: ['Insignificant', 'Minor', 'Moderate', 'Major', 'Catastrophic']
        },
        dataTemplate: {
            id: 'risk-{timestamp}',
            description: 'New risk',
            severity: 'Minor',
            likelihood: 'Possible',
            mitigation: ''
        }
    },
    'ExternalLink': {
        name: 'External Link',
        description: 'Link to external websites or resources',
        defaultData: {
            url: 'https://example.com',
            description: 'External resource description'
        },
        dataTemplate: {
            url: 'https://example.com',
            description: 'External resource description'
        }
    },
    'InternalLink': {
        name: 'Internal Link',
        description: 'Navigation link to other modules within the application',
        defaultData: {
            targetModule: '',
            description: 'Internal navigation description'
        },
        dataTemplate: {
            targetModule: '',
            description: 'Internal navigation description'
        }
    }
};

// Create a new custom module
export const createCustomModule = (moduleData) => {
    const customModules = loadCustomModules();
    const moduleKey = `custom_${moduleData.key}`;
    
    const componentType = AVAILABLE_COMPONENT_TYPES[moduleData.componentType];
    if (!componentType) {
        throw new Error('Invalid component type');
    }

    // Check if module key already exists
    if (customModules[moduleKey] || APP_CONFIG[moduleKey]) {
        throw new Error('A module with this key already exists');
    }

    const newModule = {
        title: moduleData.title,
        component: moduleData.componentType,
        storageKey: `qms-custom-${moduleData.key}`,
        category: moduleData.category || 'custom',
        initialData: componentType.defaultData,
        isCustom: true,
        createdDate: new Date().toISOString(),
        description: moduleData.description || '',
        fields: moduleData.fields || []
    };

    customModules[moduleKey] = newModule;
    saveCustomModules(customModules);
    
    return { moduleKey, module: newModule };
};

// Get all custom modules
export const getCustomModules = () => {
    return loadCustomModules();
};

// Delete a custom module
export const deleteCustomModule = (moduleKey) => {
    const customModules = loadCustomModules();
    // Ensure we also clear the module's data from localStorage before deleting the config
    const moduleConfig = customModules[moduleKey];
    if (moduleConfig && moduleConfig.storageKey) {
        localStorage.removeItem(moduleConfig.storageKey);
    }
    delete customModules[moduleKey];
    saveCustomModules(customModules);
};

// Delete all custom modules
export const deleteAllCustomModules = () => {
    const customModules = loadCustomModules();
    const moduleKeys = Object.keys(customModules);
    
    // Clear all custom module data from localStorage
    moduleKeys.forEach(moduleKey => {
        const moduleConfig = customModules[moduleKey];
        if (moduleConfig && moduleConfig.storageKey) {
            localStorage.removeItem(moduleConfig.storageKey);
        }
    });
    
    // Clear the custom modules storage
    localStorage.removeItem(CUSTOM_MODULES_STORAGE_KEY);
    
    return moduleKeys.length;
};

// Export custom modules
export const exportCustomModules = () => {
    const customModules = loadCustomModules();
    const exportData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        modules: customModules
    };
    return JSON.stringify(exportData, null, 2);
};

// Import custom modules
export const importCustomModules = (jsonData) => {
    try {
        const importData = JSON.parse(jsonData);
        if (!importData.modules) {
            throw new Error('Invalid import format');
        }
        
        const customModules = loadCustomModules();
        Object.assign(customModules, importData.modules);
        saveCustomModules(customModules);
        
        return Object.keys(importData.modules);
    } catch (error) {
        throw new Error(`Failed to import modules: ${error.message}`);
    }
};

// Combined Configuration Export (now includes dynamic resources)
export const getAllModules = () => {
    const customModules = getCustomModules();
    const externalResources = getAllExternalResources();
    const internalLinks = getAllInternalLinks();
    
    return { 
        ...CORE_QMS_MODULES,
        ...AUDIT_MODULES,
        ...CAPA_MODULES,
        ...SUPPLIER_MODULES,
        ...RISK_MODULES,
        ...QC_MODULES,
        ...PROCESS_CHECKLIST_MODULES,
        ...SPECIAL_MODULES,
        ...externalResources,
        ...internalLinks,
        ...customModules 
    };
};

// Combined Configuration Export (deprecated for runtime use, use getAllModules instead)
export const APP_CONFIG = {
    ...CORE_QMS_MODULES,
    ...AUDIT_MODULES,
    ...CAPA_MODULES,
    ...SUPPLIER_MODULES,
    ...RISK_MODULES,
    ...QC_MODULES,
    ...PROCESS_CHECKLIST_MODULES,
    ...EXTERNAL_RESOURCES_MODULES,
    ...INTERNAL_LINKS_MODULES,
    ...SPECIAL_MODULES
};

// Helper Functions
export const getModulesByCategory = (category) => {
    // This function should also use getAllModules to be consistent
    const modules = getAllModules();
    return Object.entries(modules)
        .filter(([key, config]) => config.category === category)
        .reduce((acc, [key, config]) => {
            acc[key] = config;
            return acc;
        }, {});
};

export const getAllCategories = () => {
    const categories = new Set();
    // This function should also use getAllModules to be consistent
    Object.values(getAllModules()).forEach(config => {
        if (config.category) categories.add(config.category);
    });
    return Array.from(categories);
};

export const getModuleConfig = (moduleKey) => {
    // This function should also use getAllModules to be consistent
    return getAllModules()[moduleKey] || null;
};