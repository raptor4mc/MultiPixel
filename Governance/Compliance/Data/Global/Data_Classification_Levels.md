
# Data Classification Levels
Version 2.0 — Deep‑Dive Edition  
Relimintor (Raptor4 / MultiPixel)

This document expands Sections 7, 10, 12, and 14 of the MultiPixel
Source‑Available License 2.2 — Fortress Edition.

It defines the complete, authoritative, and enforceable classification
system for ALL data handled within the MultiPixel ecosystem.

This applies to:
• Mods  
• Servers  
• Tools  
• Integrations  
• APIs  
• Cloud services  
• Any system that collects, stores, transmits, or processes data  

Data is classified into:
• Level 0 — No Data  
• Level 1 — Gameplay Data  
• Level 2 — Technical Data  
• Level 3 — Sensitive Data (Prohibited)  
• Level 4 — Personal Data (Strictly Prohibited)  

Each level includes:
• definitions  
• examples  
• allowed uses  
• prohibited uses  
• storage rules  
• transmission rules  
• retention rules  
• escalation rules  

---------------------------------------------------------------------------

SECTION 1 — PURPOSE OF DATA CLASSIFICATION
---------------------------------------------------------------------------

The Data Classification System exists to:

• protect user privacy  
• prevent unauthorized data collection  
• prevent fingerprinting  
• prevent hidden telemetry  
• ensure secure storage  
• ensure secure transmission  
• enforce retention and deletion rules  
• maintain ecosystem integrity  
• provide consistent enforcement  
• define what data is allowed  
• define what data is prohibited  

This classification system is binding and enforceable.

---------------------------------------------------------------------------

SECTION 2 — LEVEL 0: NO DATA
---------------------------------------------------------------------------

Level 0 data includes:
• no data collected  
• no data stored  
• no data transmitted  

This is the safest and most compliant category.

### 2.1 Examples
• cosmetic-only Mods  
• UI-only Mods  
• local-only Mods  
• offline tools  
• Mods with no telemetry  
• Mods with no logs  

### 2.2 Allowed Uses
• fully unrestricted  
• no disclosures required  
• no audits required (unless triggered)  

### 2.3 Prohibited Uses
None — Level 0 is always compliant.

### 2.4 Storage Rules
• no storage allowed (by definition)  

### 2.5 Transmission Rules
• no transmission allowed (by definition)  

### 2.6 Retention Rules
• no retention allowed (by definition)  

---------------------------------------------------------------------------

SECTION 3 — LEVEL 1: GAMEPLAY DATA
---------------------------------------------------------------------------

Level 1 data includes non-sensitive, non-identifying gameplay information.

### 3.1 Examples
• in-game item usage  
• in-game progression  
• in-game statistics  
• mod-specific settings  
• world generation parameters  
• block placement counts  
• combat statistics  
• crafting statistics  
• achievement progress  

### 3.2 Allowed Uses
• gameplay balancing  
• feature usage analytics  
• mod improvement  
• bug fixing  
• compatibility analysis  

### 3.3 Prohibited Uses
• tracking users across servers  
• linking gameplay data to identity  
• selling gameplay data  
• transmitting gameplay data without approval  

### 3.4 Storage Rules
• must be stored securely  
• must not be stored indefinitely  
• must follow retention rules  

### 3.5 Transmission Rules
• must be disclosed  
• must be approved  
• must use secure connections  

### 3.6 Retention Rules
• minimal retention  
• deletion required after purpose is fulfilled  

---------------------------------------------------------------------------

SECTION 4 — LEVEL 2: TECHNICAL DATA
---------------------------------------------------------------------------

Level 2 data includes non-sensitive technical information used for
debugging, performance analysis, or compatibility.

### 4.1 Examples
• crash logs  
• error logs  
• performance metrics  
• mod configuration states  
• compatibility information  
• API usage logs  
• engine version data  
• mod version data  
• server tick rate  
• memory usage statistics  

### 4.2 Allowed Uses
• debugging  
• performance optimization  
• compatibility improvements  
• stability analysis  

### 4.3 Prohibited Uses
• fingerprinting  
• tracking users  
• linking technical data to identity  
• transmitting technical data without approval  

### 4.4 Storage Rules
• must be encrypted if stored  
• must not be stored indefinitely  
• must follow retention rules  

### 4.5 Transmission Rules
• must be disclosed  
• must be approved  
• must use secure connections  

### 4.6 Retention Rules
• minimal retention  
• deletion required after purpose is fulfilled  

---------------------------------------------------------------------------

SECTION 5 — LEVEL 3: SENSITIVE DATA (PROHIBITED)
---------------------------------------------------------------------------

Level 3 data includes ANY information that could harm users if exposed.

This data is **strictly prohibited** from being collected, stored, or
transmitted by ANY system in the MultiPixel ecosystem.

### 5.1 Examples
• age  
• gender  
• political views  
• religious beliefs  
• biometric data  
• financial information  
• health information  
• location data  
• IP addresses  
• device fingerprints  
• cross-server identifiers  
• behavioral fingerprints  
• moderation history  
• chat logs (unless server-approved)  

### 5.2 Allowed Uses
None — Level 3 data is prohibited.

### 5.3 Prohibited Uses
• collection  
• storage  
• transmission  
• analysis  
• retention  
• sale  
• transfer  

### 5.4 Storage Rules
• storage is prohibited  

### 5.5 Transmission Rules
• transmission is prohibited  

### 5.6 Retention Rules
• retention is prohibited  

### 5.7 Escalation
Collecting Level 3 data is a **Severe Data Violation**.

---------------------------------------------------------------------------

SECTION 6 — LEVEL 4: PERSONAL DATA (STRICTLY PROHIBITED)
---------------------------------------------------------------------------

Level 4 data includes ANY information that can identify a real person.

This data is **strictly prohibited** from being collected, stored, or
transmitted by ANY system in the MultiPixel ecosystem.

### 6.1 Examples
• names  
• email addresses  
• phone numbers  
• physical addresses  
• social media accounts  
• real-world identity information  
• payment information  
• credit card numbers  
• bank information  
• authentication tokens  
• account passwords  

### 6.2 Allowed Uses
None — Level 4 data is strictly prohibited.

### 6.3 Prohibited Uses
• collection  
• storage  
• transmission  
• analysis  
• retention  
• sale  
• transfer  

### 6.4 Storage Rules
• storage is strictly prohibited  

### 6.5 Transmission Rules
• transmission is strictly prohibited  

### 6.6 Retention Rules
• retention is strictly prohibited  

### 6.7 Escalation
Collecting Level 4 data is a **Critical Data Violation**.

---------------------------------------------------------------------------

SECTION 7 — CROSS‑LEVEL RULES
---------------------------------------------------------------------------

### 7.1 Level 0 → Level 1 Escalation
If ANY data is collected, the system becomes Level 1.

### 7.2 Level 1 → Level 2 Escalation
If ANY technical data is collected, the system becomes Level 2.

### 7.3 Level 2 → Level 3 Escalation
If ANY sensitive data is collected, the system becomes Level 3.

### 7.4 Level 3 → Level 4 Escalation
If ANY personal data is collected, the system becomes Level 4.

### 7.5 Multi‑Level Systems
If a system collects multiple levels of data:
• the highest level applies  
• the strictest rules apply  

---------------------------------------------------------------------------

SECTION 8 — RELATIONSHIP TO OTHER DOCUMENTS
---------------------------------------------------------------------------

This document integrates with:

• Global_Data_Governance.md  
• Data_Transmission_Rules.md  
• Data_Storage_Requirements.md  
• Data_Retention_and_Deletion.md  
• Telemetry_Standards.md  
• Server_Data_Requirements.md  
• Data_Violation_Categories.md  
• Data_Penalty_Tiers.md  
• Data_Audit_Procedure.md  
• Data_Breach_Response.md  

---------------------------------------------------------------------------

SECTION 9 — AMENDMENTS
---------------------------------------------------------------------------

This document may be updated at any time.  
All systems must comply with the latest version.

---------------------------------------------------------------------------

© Relimintor (Raptor4 / MultiPixel) — All Rights Reserved.
