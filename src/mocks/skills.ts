import type {SkillList} from "../app/apiSlice";

export const skills: SkillList = {
    data: [
        {
            tag: "tech",
            category: "Most Recent + Significant",
            styling: "primary",
            details: [
                "AWS",
                "EC2",
                "S3",
                "Cloudformation",
                "ASG",
                "Openshift",
                "Jenkins pipeline",
                "Groovy",
                "Ansible",
                "Python",
                "ReactJs + Redux",
                "Cypress",
                "Devops"
            ]
        },
        {
            tag: "tech",
            category: "Primary Expertise",
            styling: "success",
            details: ["Java", "Spring Boot", "JPA + Hibernate", "SQL", "Javascript"]
        },
        {
            tag: "tech",
            category: "Databases",
            styling: "success",
            details: ["Sybase15", "SQL Server 2008", "Oracle10g", "DB2v8", "MarkLogic8"]
        },
        {
            tag: "tech",
            category: "Misc",
            styling: "warning",
            details: ["Maven", "Gradle", "Git", "Npm", "Unix Scripting", "Splunk"]
        },
        {
            tag: "tech",
            category: "Archived Skills",
            styling: "danger",
            details: [
                "Vaadin",
                "ExtJS",
                "Jquery",
                "Bootstrap",
                "Struts",
                "CXF",
                "Axis",
                "JasperReports",
                "iText",
                "POI",
                "Java Comms API (POS epay)",
                "Sailpoint IIQ",
                "Actimize RCM",
                "IRESS",
                "Reuters Datascope",
                "FT Interactive",
                "Ingenium",
                "CVS",
                "SVN",
                "Remedy",
                "Control-M",
                "Ant"
            ]
        },
        {
            tag: "business",
            category: "General Insurance",
            styling: "primary",
            details: ["motor", "home", "business", "insurance quote apps"]
        },
        {
            tag: "business",
            category: "Risk Management",
            styling: "success",
            details: [
                "tracking conflict of interest",
                "securities research and disclosures",
                "trade restrictions",
                "trade surveillance",
                "chinese walls"
            ]
        },
        {
            tag: "business",
            category: "Regulatory",
            styling: "success",
            details: [
                "long position reporting",
                "short position reporting",
                "antimoney-laundering (AML)",
                "counterterrorism financing(/CTF)"
            ]
        },
        {
            tag: "business",
            category: "Market Data",
            styling: "warning",
            details: [
                "equity (via Reuters) processing",
                "issued capital (via FT Interactive) processing"
            ]
        },
        {
            tag: "business",
            category: "Identity Access Mgt",
            styling: "danger",
            details: [
                "access aggregation",
                "automated certifications",
                "policy management",
                "provisioning"
            ]
        },
        {
            tag: "business",
            category: "Life Insurance",
            styling: "danger",
            details: [
                "application entry",
                "underwriting",
                "policy contracts",
                "billing",
                "e-premium pay(POS portal)"
            ]
        }
    ]
};
