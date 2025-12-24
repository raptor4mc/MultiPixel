
# Data Storage Requirements
Version 2.0 — Deep‑Dive Edition  
Relimintor (Raptor4 / MultiPixel)

This document expands Sections 7, 10, 12, and 14 of the MultiPixel
Source‑Available License 2.2 — Fortress Edition.

It defines the complete, authoritative, and enforceable rules for data
storage, encryption, access control, backup management, and lifecycle
security across the entire MultiPixel ecosystem.

This applies to:
• Mods  
• Servers  
• Tools  
• Integrations  
• APIs  
• Cloud services  
• Any system that collects, stores, transmits, or processes data  

This document defines:
• what data may be stored  
• what data may never be stored  
• how data must be stored  
• where data may be stored  
• how long data may be stored  
• how data must be protected  
• how backups must be handled  
• how access must be controlled  
• how storage failures must be handled  

Storage rules are binding and enforceable.

---------------------------------------------------------------------------

SECTION 1 — PURPOSE OF THIS DOCUMENT
---------------------------------------------------------------------------

The purpose of this document is to:

• protect user privacy  
• prevent unauthorized data storage  
• prevent fingerprinting  
• prevent long‑term tracking  
• enforce secure storage practices  
• enforce encryption requirements  
• enforce access control  
• prevent data leaks  
• prevent insecure backups  
• maintain ecosystem integrity  

This document is mandatory for all operators.

---------------------------------------------------------------------------

SECTION 2 — STORAGE PRINCIPLES
---------------------------------------------------------------------------

All systems must follow these principles:

### 2.1 Minimal Storage
Store only the minimum data required for functionality.

### 2.2 Purpose Limitation
Data may only be stored for the purpose disclosed.

### 2.3 Security by Default
All stored data must be protected by secure defaults.

### 2.4 Encryption Requirement
All stored data must be encrypted unless explicitly exempt.

### 2.5 Access Restriction
Stored data must be accessible only to authorized components.

### 2.6 Retention Limitation
Data must not be stored longer than necessary.

### 2.7 Prohibition of Sensitive and Personal Data
Level 3 and Level 4 data may NOT be stored under ANY circumstances.

---------------------------------------------------------------------------

SECTION 3 — ALLOWED STORAGE LOCATIONS
---------------------------------------------------------------------------

Data may only be stored in approved locations.

### 3.1 Local Storage (Client)
Allowed for:
• gameplay data  
• technical data  
• mod configuration  

Requirements:
• encrypted  
• isolated  
• not shared between users  
• not accessible by other applications  

### 3.2 Local Storage (Server)
Allowed for:
• server logs  
• moderation logs  
• gameplay data  
• technical data  

Requirements:
• encrypted  
• access‑controlled  
• protected by OS permissions  

### 3.3 Cloud Storage
Allowed only if:
• encrypted  
• access‑controlled  
• region‑locked  
• approved by MultiPixel  

### 3.4 Temporary Storage
Allowed for:
• caching  
• temporary logs  
• session data  

Requirements:
• must be deleted automatically  
• must not persist across sessions  

---------------------------------------------------------------------------

SECTION 4 — PROHIBITED STORAGE LOCATIONS
---------------------------------------------------------------------------

The following locations may NOT be used:

### 4.1 Public Storage
• public cloud buckets  
• public file servers  
• public URLs  
• CDN endpoints  

### 4.2 Shared Storage
• shared folders  
• shared drives  
• shared user profiles  

### 4.3 Unencrypted Storage
• plaintext files  
• unencrypted databases  
• unencrypted logs  

### 4.4 External Storage
• third‑party analytics  
• unapproved cloud services  
• personal servers  
• external APIs  

### 4.5 Hidden Storage
• hidden directories  
• obfuscated storage  
• disguised files  

---------------------------------------------------------------------------

SECTION 5 — STORAGE RULES BY DATA CLASSIFICATION LEVEL
---------------------------------------------------------------------------

### 5.1 Level 0 — No Data
Storage:
• none allowed  

### 5.2 Level 1 — Gameplay Data
Storage:
• allowed  
• must be encrypted  
• must follow retention rules  

### 5.3 Level 2 — Technical Data
Storage:
• allowed  
• must be encrypted  
• must follow retention rules  

### 5.4 Level 3 — Sensitive Data (Prohibited)
Storage:
• strictly prohibited  

### 5.5 Level 4 — Personal Data (Strictly Prohibited)
Storage:
• strictly prohibited  

---------------------------------------------------------------------------

SECTION 6 — ENCRYPTION REQUIREMENTS
---------------------------------------------------------------------------

All stored data must be encrypted using:

### 6.1 Encryption Standards
• AES‑256 or stronger  
• RSA‑2048 or stronger  
• TLS 1.3 for transmission  

### 6.2 Encryption at Rest
Required for:
• gameplay data  
• technical data  
• logs  
• backups  
• cloud storage  

### 6.3 Encryption in Transit
Required for:
• all network communication  
• all API calls  
• all cloud interactions  

### 6.4 Key Management
Keys must:
• be rotated regularly  
• be stored securely  
• never be hardcoded  
• never be transmitted in plaintext  

---------------------------------------------------------------------------

SECTION 7 — ACCESS CONTROL REQUIREMENTS
---------------------------------------------------------------------------

Stored data must be protected by strict access controls.

### 7.1 Role‑Based Access Control (RBAC)
Access must be limited to:
• essential processes  
• essential services  
• essential administrators  

### 7.2 Least Privilege Principle
Systems must:
• grant minimal permissions  
• restrict access by default  
• isolate data between users  

### 7.3 Authentication Requirements
Access must require:
• secure authentication  
• unique credentials  
• no shared accounts  

### 7.4 Logging of Access
All access must be logged:
• who accessed  
• when accessed  
• what was accessed  

---------------------------------------------------------------------------

SECTION 8 — BACKUP REQUIREMENTS
---------------------------------------------------------------------------

Backups must follow strict rules.

### 8.1 Allowed Backups
Allowed for:
• gameplay data  
• technical data  
• server logs  

### 8.2 Prohibited Backups
Prohibited for:
• sensitive data  
• personal data  
• fingerprinting data  

### 8.3 Backup Encryption
Backups must be:
• encrypted  
• access‑controlled  
• stored securely  

### 8.4 Backup Retention
Backups must:
• follow retention rules  
• be deleted when expired  

### 8.5 Backup Restoration
Restoration must:
• not expose data  
• not bypass security  
• be logged  

---------------------------------------------------------------------------

SECTION 9 — LOG STORAGE REQUIREMENTS
---------------------------------------------------------------------------

Logs must follow strict rules.

### 9.1 Allowed Logs
• error logs  
• crash logs  
• performance logs  
• join/leave logs  
• moderation logs (approved servers only)  

### 9.2 Prohibited Logs
• IP addresses  
• device fingerprints  
• personal data  
• sensitive data  
• behavioral tracking  

### 9.3 Log Encryption
All logs must be encrypted.

### 9.4 Log Retention
Logs must follow retention rules.

### 9.5 Log Deletion
Logs must be securely deleted.

---------------------------------------------------------------------------

SECTION 10 — STORAGE FAILURE HANDLING
---------------------------------------------------------------------------

If storage fails, operators must:

### 10.1 Detect Failure
Systems must detect:
• corruption  
• unauthorized access  
• failed encryption  
• failed backups  

### 10.2 Contain Failure
Operators must:
• isolate affected storage  
• prevent further writes  
• prevent further reads  

### 10.3 Report Failure
Operators must:
• notify MultiPixel  
• provide logs  
• provide evidence  

### 10.4 Remediate Failure
Operators must:
• repair storage  
• restore backups  
• re‑encrypt data  

---------------------------------------------------------------------------

SECTION 11 — STORAGE AUDIT REQUIREMENTS
---------------------------------------------------------------------------

Storage is subject to:

• routine audits  
• triggered audits  
• forensic audits  

Audits may require:

• storage snapshots  
• encryption verification  
• access logs  
• backup logs  
• deletion proof  

---------------------------------------------------------------------------

SECTION 12 — PROHIBITED STORAGE PRACTICES
---------------------------------------------------------------------------

The following practices are strictly prohibited:

• storing personal data  
• storing sensitive data  
• storing IP addresses  
• storing device fingerprints  
• storing cross‑server identifiers  
• storing data indefinitely  
• storing data unencrypted  
• storing data in public locations  
• storing data in hidden locations  
• storing data without disclosure  
• storing data without approval  

---------------------------------------------------------------------------

SECTION 13 — ENFORCEMENT
---------------------------------------------------------------------------

Violations map to:

• Data_Violation_Categories.md  
• Data_Penalty_Tiers.md  

Examples:

### 13.1 Minor Violations
• storing gameplay data too long  
• storing logs unencrypted  

### 13.2 Major Violations
• storing technical data insecurely  
• storing data in unapproved locations  

### 13.3 Severe Violations
• storing sensitive data  
• storing fingerprinting data  

### 13.4 Critical Violations
• storing personal data  
• hiding stored data  
• deleting evidence  

---------------------------------------------------------------------------

SECTION 14 — AMENDMENTS
---------------------------------------------------------------------------

This document may be updated at any time.  
All systems must comply with the latest version.

---------------------------------------------------------------------------

© Relimintor (Raptor4 / MultiPixel) — All Rights Reserved.
