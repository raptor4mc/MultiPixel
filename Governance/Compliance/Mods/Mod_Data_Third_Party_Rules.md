
# Mod Data Third‑Party Rules
Version 2.0 — Deep‑Dive Edition  
Relimintor (Raptor4 / MultiPixel)

This document expands Sections 7, 10, 12, 14, and 15 of the MultiPixel  
Source‑Available License 2.2 — Fortress Edition.

It defines the complete, authoritative, and enforceable rules governing the
use of **third‑party services**, **external APIs**, **cloud platforms**,  
**analytics tools**, **SDKs**, and **external integrations** by Mods within
the MultiPixel ecosystem.

This applies to:
• Mods  
• Mod frameworks  
• Mod loaders  
• Mod‑bundled tools  
• Mod‑integrated cloud services  
• Mod‑integrated analytics  
• Any external service a Mod communicates with  

This document defines:
• what third‑party services are allowed  
• what third‑party services are prohibited  
• what data may be shared  
• what data may never be shared  
• how third‑party services must be disclosed  
• how third‑party services must be secured  
• how audits apply to third‑party integrations  
• how breaches involving third‑party services are handled  

These rules are binding and enforceable.

---------------------------------------------------------------------------

SECTION 1 — PURPOSE OF THIRD‑PARTY RULES
---------------------------------------------------------------------------

The purpose of this document is to:

• prevent unauthorized data sharing  
• prevent fingerprinting  
• prevent behavioral tracking  
• prevent hidden telemetry  
• ensure transparency  
• ensure secure integrations  
• ensure compliance with global data rules  
• protect users from external exploitation  
• maintain ecosystem integrity  

Third‑party services are one of the highest‑risk areas for Mods.  
These rules ensure they are used safely and responsibly.

---------------------------------------------------------------------------

SECTION 2 — DEFINITIONS
---------------------------------------------------------------------------

### 2.1 Third‑Party Service
Any external system not operated by MultiPixel, including:
• APIs  
• cloud platforms  
• analytics tools  
• telemetry services  
• databases  
• authentication services  
• CDN endpoints  
• external servers  

### 2.2 External Transmission
Any data sent from the Mod to a third‑party service.

### 2.3 External Storage
Any data stored on a third‑party system.

### 2.4 External Processing
Any data processed by a third‑party system.

### 2.5 External Dependency
Any library, SDK, or framework that communicates externally.

---------------------------------------------------------------------------

SECTION 3 — THIRD‑PARTY SERVICE CATEGORIES
---------------------------------------------------------------------------

Third‑party services fall into four categories:

### 3.1 Category A — Approved Services
• explicitly approved by MultiPixel  
• listed in Mod submission  
• minimal data usage  
• secure and compliant  

### 3.2 Category B — Conditional Services
• may be approved depending on use  
• require full disclosure  
• require risk assessment  

### 3.3 Category C — Restricted Services
• high‑risk  
• require special approval  
• require strict controls  

### 3.4 Category D — Prohibited Services
• analytics platforms  
• advertising networks  
• tracking services  
• fingerprinting services  
• personal data processors  
• unapproved cloud platforms  

---------------------------------------------------------------------------

SECTION 4 — ALLOWED THIRD‑PARTY SERVICES
---------------------------------------------------------------------------

Allowed only if:
• disclosed  
• approved  
• minimal  
• secure  

Examples:
• cloud storage for non‑sensitive data  
• crash reporting tools  
• performance monitoring tools  
• content delivery APIs  
• open‑source libraries with no external communication  

Allowed only if they do NOT:
• collect personal data  
• collect sensitive data  
• fingerprint users  
• track behavior  
• transmit data without approval  

---------------------------------------------------------------------------

SECTION 5 — PROHIBITED THIRD‑PARTY SERVICES
---------------------------------------------------------------------------

The following services are strictly prohibited:

### 5.1 Analytics Platforms
• Google Analytics  
• Mixpanel  
• Amplitude  
• Segment  
• Adobe Analytics  

### 5.2 Advertising Networks
• AdMob  
• Unity Ads  
• Facebook Ads  
• TikTok Ads  

### 5.3 Tracking Services
• fingerprinting APIs  
• device profiling tools  
• cross‑platform tracking SDKs  

### 5.4 Personal Data Processors
• identity providers  
• email services  
• CRM systems  

### 5.5 Unapproved Cloud Platforms
• personal cloud accounts  
• personal servers  
• unencrypted cloud storage  

### 5.6 Hidden or Undisclosed Services
Any service not disclosed in the Mod submission.

---------------------------------------------------------------------------

SECTION 6 — DATA SHARING RULES
---------------------------------------------------------------------------

Mods may only share:

### 6.1 Allowed Data
• Level 1 gameplay data  
• Level 2 technical data  

### 6.2 Prohibited Data
Mods may NOT share:

• personal data  
• sensitive data  
• IP addresses  
• device fingerprints  
• behavioral fingerprints  
• cross‑server identifiers  
• chat logs  
• moderation logs  
• authentication tokens  
• payment information  

### 6.3 Data Minimization
Only the minimum required data may be shared.

### 6.4 Purpose Limitation
Data may only be shared for the purpose disclosed.

---------------------------------------------------------------------------

SECTION 7 — DISCLOSURE REQUIREMENTS
---------------------------------------------------------------------------

All third‑party services must be disclosed in:

• Mod_Data_Disclosure_Template.md  
• Mod_Telemetry_Disclosure_Form.md  
• Mod submission metadata  

Disclosure must include:

### 7.1 Service Name
<Enter service name>

### 7.2 Service Provider
<Enter provider>

### 7.3 Purpose of Use
<Explain>

### 7.4 Data Shared
<Specify>

### 7.5 Storage Behavior
<Specify>

### 7.6 Transmission Behavior
<Specify>

### 7.7 Retention Behavior
<Specify>

### 7.8 Security Measures
<Specify>

### 7.9 Risk Assessment
<Provide risk analysis>

Failure to disclose ANY third‑party service is a Severe Data Violation.

---------------------------------------------------------------------------

SECTION 8 — SECURITY REQUIREMENTS
---------------------------------------------------------------------------

All third‑party integrations must follow:

### 8.1 Encryption
• TLS 1.3 or stronger  
• no plaintext transmission  

### 8.2 Authentication
• secure API keys  
• no hardcoded secrets  
• no plaintext credentials  

### 8.3 Access Control
• least privilege  
• restricted access  

### 8.4 Endpoint Restrictions
• no dynamic DNS  
• no hidden endpoints  
• no obfuscated domains  

### 8.5 Logging
• all external transmissions must be logged  

---------------------------------------------------------------------------

SECTION 9 — STORAGE REQUIREMENTS
---------------------------------------------------------------------------

Third‑party services must comply with:

• Data_Storage_Requirements.md  
• Data_Retention_and_Deletion.md  

Key rules:

### 9.1 Allowed Storage
• gameplay data  
• technical data  

### 9.2 Prohibited Storage
• personal data  
• sensitive data  
• fingerprinting data  

### 9.3 Backup Rules
• encrypted  
• minimal  
• disclosed  

---------------------------------------------------------------------------

SECTION 10 — TRANSMISSION REQUIREMENTS
---------------------------------------------------------------------------

Third‑party transmission must comply with:

• Data_Transmission_Rules.md  

Key rules:

### 10.1 Encryption Required
• TLS 1.3 or stronger  

### 10.2 Endpoint Approval
• only approved endpoints allowed  

### 10.3 No Hidden Transmission
• no covert channels  
• no disguised endpoints  

### 10.4 No Behavioral Tracking
• no fingerprinting  
• no cross‑server identifiers  

---------------------------------------------------------------------------

SECTION 11 — RETENTION & DELETION REQUIREMENTS
---------------------------------------------------------------------------

Third‑party services must:

### 11.1 Follow Retention Limits
• gameplay data: 90 days  
• technical data: 30 days  

### 11.2 Delete Data When Required
• retention expiration  
• mod removal  
• approval revocation  

### 11.3 Provide Proof of Deletion
• logs  
• certificates  
• screenshots  

---------------------------------------------------------------------------

SECTION 12 — AUDIT REQUIREMENTS
---------------------------------------------------------------------------

Third‑party integrations are subject to:

• routine audits  
• triggered audits  
• forensic audits  

Developers must provide:

### 12.1 API Documentation
<Provide>

### 12.2 Endpoint List
<Provide>

### 12.3 Transmission Logs
<Provide>

### 12.4 Storage Documentation
<Provide>

### 12.5 Security Documentation
<Provide>

Failure to cooperate is a Severe Data Violation.

---------------------------------------------------------------------------

SECTION 13 — BREACH REQUIREMENTS
---------------------------------------------------------------------------

If a third‑party service is breached:

### 13.1 Mandatory Reporting
• within 12 hours (major)  
• within 1 hour (critical)  

### 13.2 Mandatory Containment
• disable integration  
• isolate mod  
• preserve logs  

### 13.3 Mandatory Remediation
• patch  
• reconfigure  
• delete compromised data  

### 13.4 Mandatory Follow‑Up Audit
Required for all breaches.

---------------------------------------------------------------------------

SECTION 14 — ENFORCEMENT
---------------------------------------------------------------------------

Violations map to:

• Data_Violation_Categories.md  
• Data_Penalty_Tiers.md  

Examples:

### 14.1 Minor Violations
• incomplete disclosure  
• outdated documentation  

### 14.2 Major Violations
• insecure transmission  
• insecure storage  

### 14.3 Severe Violations
• undisclosed third‑party services  
• hidden telemetry  

### 14.4 Critical Violations
• sharing personal data  
• sharing sensitive data  
• fingerprinting  
• selling data  
• deleting evidence  

---------------------------------------------------------------------------
### Recommended Use of MultiPixel Inbuilt Systems

Developers are strongly encouraged to use the official, inbuilt MultiPixel
systems for data handling, telemetry, storage, transmission, and analytics
whenever possible.

The inbuilt systems are designed to:
• ensure full compliance with all Data Governance rules  
• eliminate the need for third‑party services  
• provide secure, encrypted data handling by default  
• reduce risk of data leaks, breaches, or misconfiguration  
• simplify Mod approval and auditing  
• ensure consistent behavior across the ecosystem  

Using MultiPixel’s inbuilt systems significantly reduces:
• the risk of non‑compliance  
• the need for complex disclosures  
• the need for external security reviews  
• the risk of violating storage or transmission rules  

While third‑party services may be approved under strict conditions,
MultiPixel’s native systems are the recommended and preferred method for
all Mod data operations.

---------------------------------------------------------------------------
SECTION 15 — AMENDMENTS
---------------------------------------------------------------------------

This document may be updated at any time.  
All Mods must comply with the latest version.

---------------------------------------------------------------------------

© Relimintor (Raptor4 / MultiPixel) — All Rights Reserved.
