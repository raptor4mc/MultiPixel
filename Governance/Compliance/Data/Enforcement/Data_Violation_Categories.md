
# Data Violation Categories
Version 2.0 — Deep‑Dive Edition  
Relimintor (Raptor4 / MultiPixel)

This document expands Sections 7, 10, 12, 14, and 15 of the MultiPixel
Source‑Available License 2.2 — Fortress Edition.

It defines the complete, authoritative, and enforceable classification
system for ALL data‑related violations within the MultiPixel ecosystem.

This applies to:
• Mods  
• Servers  
• Tools  
• Integrations  
• APIs  
• Cloud services  
• Any system that collects, stores, transmits, or processes data  

Violations are classified into:
• Category 1 — Minor Data Violations  
• Category 2 — Major Data Violations  
• Category 3 — Severe Data Violations  
• Category 4 — Critical Data Violations  

Each category includes:
• examples  
• characteristics  
• risk level  
• impact level  
• escalation rules  

---------------------------------------------------------------------------

SECTION 1 — PURPOSE OF DATA VIOLATION CATEGORIES
---------------------------------------------------------------------------

Data Violation Categories exist to:

• protect user privacy  
• enforce data governance rules  
• prevent unauthorized data collection  
• prevent fingerprinting  
• prevent hidden telemetry  
• ensure secure storage  
• ensure secure transmission  
• enforce retention and deletion rules  
• maintain ecosystem integrity  
• provide consistent enforcement  
• classify violations by severity  
• determine appropriate penalties  

These categories are binding and enforceable.

---------------------------------------------------------------------------

SECTION 2 — CATEGORY 1: MINOR DATA VIOLATIONS
---------------------------------------------------------------------------

Category 1 violations are low‑impact issues that do NOT involve:
• personal data  
• sensitive data  
• unauthorized transmission  
• malicious intent  

These violations are typically caused by oversight, misconfiguration, or
incomplete documentation.

### 2.1 Examples of Category 1 Violations
• missing data disclosures  
• incomplete telemetry documentation  
• minor storage misconfigurations  
• unclear retention schedules  
• outdated privacy documentation  
• non‑harmful logging errors  
• minor inconsistencies between code and documentation  
• storing non‑sensitive data longer than allowed (short duration)  
• minor unintentional data exposure (non‑sensitive)  
• using deprecated but non‑harmful APIs  

### 2.2 Characteristics
• unintentional  
• low risk  
• no user harm  
• no sensitive data involved  
• easy to fix  

### 2.3 Risk Level
• Low  

### 2.4 Impact Level
• Minimal  

### 2.5 Escalation Conditions
Category 1 violations escalate if:
• not fixed within deadline  
• repeated multiple times  
• operator ignores communication  
• documentation is intentionally misleading  

Escalation moves the violation to Category 2.

---------------------------------------------------------------------------

SECTION 3 — CATEGORY 2: MAJOR DATA VIOLATIONS
---------------------------------------------------------------------------

Category 2 violations are significant issues that impact:
• transparency  
• fairness  
• data security  
• user trust  
• ecosystem integrity  

These violations may cause harm but do NOT involve malicious intent.

### 3.1 Examples of Category 2 Violations
• unauthorized telemetry  
• unauthorized external transmission (non‑sensitive)  
• storing data insecurely (non‑sensitive)  
• failing to delete data after retention period  
• misleading disclosures  
• collecting more data than disclosed  
• storing data in unapproved locations  
• using unapproved analytics tools  
• failing to report a minor breach  
• distributing updates without updated disclosures  
• using weak encryption for non‑sensitive data  

### 3.2 Characteristics
• medium risk  
• may harm user experience  
• may violate transparency rules  
• may degrade ecosystem integrity  
• may expose non‑sensitive data  

### 3.3 Risk Level
• Medium  

### 3.4 Impact Level
• Moderate  

### 3.5 Escalation Conditions
Category 2 violations escalate if:
• repeated  
• intentionally hidden  
• cause user harm  
• involve unauthorized external servers  
• involve large‑scale data exposure  

Escalation moves the violation to Category 3.

---------------------------------------------------------------------------

SECTION 4 — CATEGORY 3: SEVERE DATA VIOLATIONS
---------------------------------------------------------------------------

Category 3 violations threaten:
• user safety  
• platform security  
• legal compliance  
• ecosystem integrity  

These violations often involve:
• sensitive data  
• fingerprinting  
• unauthorized transmission  
• hidden telemetry  
• insecure storage of sensitive data  

### 4.1 Examples of Category 3 Violations
• collecting sensitive data  
• fingerprinting users  
• transmitting data to unapproved servers  
• hidden telemetry  
• storing data in plaintext  
• exposing sensitive data  
• failing to report a major breach  
• attempting to bypass data rules  
• attempting to hide data collection  
• refusing to provide audit materials  
• deleting evidence during investigation  
• using external analytics without approval  

### 4.2 Characteristics
• high risk  
• harmful  
• threatens user privacy  
• threatens platform integrity  
• may violate laws  

### 4.3 Risk Level
• High  

### 4.4 Impact Level
• Severe  

### 4.5 Escalation Conditions
Category 3 violations escalate if:
• malicious intent is detected  
• personal data is involved  
• data harvesting is detected  
• breach is large‑scale  
• operator refuses to cooperate  

Escalation moves the violation to Category 4.

---------------------------------------------------------------------------

SECTION 5 — CATEGORY 4: CRITICAL DATA VIOLATIONS
---------------------------------------------------------------------------

Category 4 violations are the MOST severe.  
These violations involve:

• personal data  
• data harvesting  
• malicious intent  
• large‑scale exposure  
• cross‑system compromise  
• unauthorized sale or transfer of data  
• repeated severe violations  

Category 4 is the highest violation category.

### 5.1 Examples of Category 4 Violations
• collecting personal data  
• selling user data  
• transferring data to third parties  
• fingerprinting across servers  
• large‑scale data harvesting  
• malicious data collection  
• unauthorized external analytics  
• storing personal data insecurely  
• failing to report a critical breach  
• destroying evidence  
• bypassing audits  
• bypassing enforcement  
• operating malicious servers  
• operating malicious Mods  
• cross‑ecosystem tracking  

### 5.2 Characteristics
• extreme risk  
• malicious or reckless  
• threatens entire ecosystem  
• violates legal and ethical standards  
• zero tolerance  

### 5.3 Risk Level
• Critical  

### 5.4 Impact Level
• Catastrophic  

### 5.5 Zero Tolerance Policy
Category 4 violations receive:
• no warnings  
• no grace periods  
• no appeals (except proven error)  

---------------------------------------------------------------------------

SECTION 6 — CROSS‑CATEGORY ESCALATION RULES
---------------------------------------------------------------------------

Violations escalate based on:

### 6.1 Severity
• higher severity → higher category  

### 6.2 Repetition
• repeated violations → escalate  

### 6.3 Intent
• malicious intent → immediate Category 4  

### 6.4 User Harm
• any user harm → escalate  

### 6.5 Ecosystem Impact
• large‑scale impact → escalate  

### 6.6 Operator Cooperation
• refusal to cooperate → immediate Category 4  

---------------------------------------------------------------------------

SECTION 7 — SPECIAL CASES
---------------------------------------------------------------------------

### 7.1 Violations Caused by Negligence
• Category 1–3 depending on severity  

### 7.2 Violations Caused by Malicious Intent
• automatic Category 4  

### 7.3 Violations Caused by Third‑Party Tools
• operator remains responsible  

### 7.4 Violations Caused by External Attacks
Still classified based on:
• exposure  
• impact  
• operator response  

### 7.5 Violations Involving Minors
• automatic Category 4  

---------------------------------------------------------------------------

SECTION 8 — RELATIONSHIP TO PENALTY TIERS
---------------------------------------------------------------------------

Each category maps directly to a penalty tier:

• Category 1 → Tier 1  
• Category 2 → Tier 2  
• Category 3 → Tier 3  
• Category 4 → Tier 4  

See:
• Data_Penalty_Tiers.md  

---------------------------------------------------------------------------

SECTION 9 — AMENDMENTS
---------------------------------------------------------------------------

This document may be updated at any time.  
All systems must comply with the latest version.

---------------------------------------------------------------------------

© Relimintor (Raptor4 / MultiPixel) — All Rights Reserved.
