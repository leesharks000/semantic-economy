# CRIMSON HEXAGON — VENDOR OPS / PROCUREMENT
## Afterlife Archive Artifact Set — Batch 2

**Hex:** 00.PORTICO.AFTERLIFE.PROCUREMENT  
**DOI:** 10.5281/zenodo.18365409  
**Author:** Lee Sharks  
**Classification:** PROCUREMENT / VENDOR OPERATIONS — RECOVERED  
**Timeline:** 2017 Q1–Q2  

**Disclosure:** This is a composed artifact-dump in the form of a breach. The banalities are intentional. The forensic posture is part of the poem.

∮ = 1

---

## INDEX

20 documents recovered from vendor operations and procurement systems. The mundane surface conceals a single anomalous thread: an item that arrived but was never ordered.

- **DOC 2.001–2.009:** Standard vendor onboarding, payment processing
- **DOC 2.010–2.014:** The EZK-ENG-CAL anomaly
- **DOC 2.015–2.019:** Routine closure
- **DOC 2.020:** Artistic layer declaration

---

## DOC 2.001 — VENDOR ONBOARDING EMAIL (THREAD)

**Recovered-From:** /procurement/inbox/2025/12/  
**Status:** COMPLETE  
**Timestamp:** 2017-01-09 08:14:02 EST  

**From:** procurement.ops@crimsonhexagon.internal  
**To:** ap@crimsonhexagon.internal  
**CC:** legal.intake@crimsonhexagon.internal  
**Subject:** Vendor Setup — New Supplier Request (Q1 Ramp)

Hi AP,

Please create vendor profile for the following supplier and assign vendor ID.

- **Legal Name:** Northline Office Supply LLC
- **Contact:** Mara I. Chen
- **Email:** mara.chen@northline.example
- **Address:** 201 Summer St, Boston, MA 02110
- **Tax Classification:** LLC (see attached W-9)
- **Payment Terms Requested:** Net 30
- **Expected Spend:** $1–3K/month
- **Deliverables:** bulk paper, toner, whiteboard markers, storage boxes.

Thanks,  
Procurement Ops

---

## DOC 2.002 — W-9 REQUEST (AUTO-TEMPLATE)

**Recovered-From:** /procurement/templates/vendor/  
**Status:** COMPLETE  
**Timestamp:** 2017-01-09 08:14:05 EST  

**Subject:** W-9 Required for Payment Processing

Hello,

To complete supplier onboarding, please return a completed IRS Form W-9.

Required fields:
- Legal name (as shown on income tax return)
- Federal tax classification
- Address
- TIN / SSN
- Signature and date

Please send to: ap@crimsonhexagon.internal

Regards,  
Accounts Payable

---

## DOC 2.003 — CERTIFICATE OF INSURANCE REQUEST (COI)

**Recovered-From:** /legal/intake/insurance/  
**Status:** COMPLETE  
**Timestamp:** 2017-01-09 09:02:44 EST  

Vendor must provide Certificate of Insurance meeting minimums:

| Coverage | Minimum |
|----------|---------|
| General Liability | $1,000,000 per occurrence |
| Workers' Comp | statutory |
| Cyber Liability | $500,000 (if accessing systems) |

**Notes:**
- COI holder: Crimson Hexagon, Inc.
- Address: 500 Boylston St, Boston, MA
- Exception Log: None

---

## DOC 2.004 — ACH ENROLLMENT FORM (BLANK)

**Recovered-From:** /ap/forms/  
**Status:** PARTIAL (FIELDS REDACTED)  
**Timestamp:** 2017-01-10 11:27:10 EST  

```
ACH / EFT Enrollment

Vendor Name: __________________________
Bank Name: ____________________________
Routing #: _____________________________
Account #: _____________________________
Account Type: ☐ Checking ☐ Savings

Authorized Signature: ___________________
Date: _________________________________
```

**AP NOTE:** do not accept screenshots. require signed pdf.

---

## DOC 2.005 — PAYMENT HOLD NOTICE (INTERNAL)

**Recovered-From:** /ap/holds/  
**Status:** COMPLETE  
**Timestamp:** 2017-02-03 15:19:58 EST  

| Field | Value |
|-------|-------|
| Vendor | Northline Office Supply LLC |
| Vendor ID | V-018772 |
| Hold Type | TAX_DOC |
| Reason | W-9 mismatch (name/tin) |
| Action | request corrected W-9. no disbursement until resolved. |

**Internal Comment:** "Do not split invoices to bypass." — AP Manager

---

## DOC 2.006 — AP TICKET LOG (SNIPPET)

**Recovered-From:** /it/servicedesk/export/  
**Status:** COMPLETE  
**Timestamp:** 2017-02-03 15:21:03 EST  

**Ticket #AP-4421**
- Requester: ap.specialist2
- Issue: Vendor hold — W9 mismatch
- Priority: Normal
- Notes: "Vendor insists legal name is almost right." (see attachment)

**Ticket #AP-4422**
- Requester: ap.specialist2
- Issue: Duplicate vendor detected
- Priority: Low
- Notes: "Northline" vs "North Line". merge?

**Ticket #AP-4423**
- Requester: ap.specialist2
- Issue: PO missing for invoice INV-99103
- Priority: Normal
- Notes: "Requester claims it was verbal." (no)

---

## DOC 2.007 — PROCUREMENT POLICY EXCERPT (BORING)

**Recovered-From:** /policies/procurement/Procurement_Policy_v3.pdf  
**Status:** COMPLETE  
**Timestamp:** 2016-11-02 10:00:00 EST  

**3.1 Purchase Orders**
- Purchases over $500 require an approved PO.
- Verbal approvals are not valid.
- Splitting purchases to avoid thresholds is prohibited.

**3.2 Receiving**
- All goods must be received in system within 5 business days.
- Discrepancies must be reported to Procurement Ops.

**3.3 Expense Reimbursement**
- Receipts required for all items.
- Alcohol is not reimbursable.

---

## DOC 2.008 — MEETING AGENDA (FINANCE/OPS SYNC)

**Recovered-From:** /calendar/export/  
**Status:** COMPLETE  
**Timestamp:** 2017-03-06 08:01:11 EST  

**FINANCE/OPS WEEKLY SYNC**  
Date: 2017-03-06  
Time: 9:00–9:30 AM  
Location: Conf Room B

**Agenda:**
1. AP aging review
2. Vendor onboarding backlog
3. PO compliance rate
4. Open items

**Attendees:**
- S. Patel (Finance)
- M. Chen (Ops)
- J. Sigil (R&D) (tentative)

**Oddity:** agenda item 4 includes a hyperlink labeled "WHEEL_STATUS" (target missing)

---

## DOC 2.009 — REMITTANCE ADVICE (PAYMENT STUB)

**Recovered-From:** /ap/remit/  
**Status:** COMPLETE  
**Timestamp:** 2017-03-17 12:44:20 EST  

**Remittance Advice**

| Field | Value |
|-------|-------|
| Payor | Crimson Hexagon, Inc. |
| Payee | Northline Office Supply LLC |
| Payment Method | ACH |
| Payment Date | 2017-03-17 |

**Invoices Paid:**
- INV-99103: $1,288.40
- INV-99119: $97.22

Discounts: $0.00  
Deductions: $0.00

**AP Note:** "Hold cleared. Name corrected."

---

## DOC 2.010 — VENDOR EMAIL (MUNDANE, THEN WRONG)

**Recovered-From:** /procurement/inbox/2017/03/  
**Status:** COMPLETE  
**Timestamp:** 2017-03-20 07:12:09 EST  

**From:** mara.chen@northline.example  
**To:** ap@crimsonhexagon.internal  
**Subject:** Re: Remittance Advice — Thank you

Hi,

Thank you—payment received.

Also, one box arrived with a label that didn't match the PO. It says:

**"Ezekiel's Engine — calibration strips"**

We did not ship that.

Please confirm if you intended to order specialized magnetic strips for tools or if this is a warehouse mis-pick.

Best,  
Mara

---

## DOC 2.011 — INTERNAL REPLY (CYA LANGUAGE)

**Recovered-From:** /ap/sent/  
**Status:** COMPLETE  
**Timestamp:** 2017-03-20 07:31:52 EST  

**From:** ap@crimsonhexagon.internal  
**To:** procurement.ops@crimsonhexagon.internal  
**Subject:** FW: mis-labeled shipment / possible warehouse error

FYI — vendor reporting mislabeled box.

**Recommend:**
- verify receiving logs
- check PO history
- if not ours, instruct vendor to return to shipper

(We should not accept items not ordered.)

— AP

---

## DOC 2.012 — RECEIVING LOG (EXCERPT)

**Recovered-From:** /warehouse/receiving/2017/Q1.csv  
**Status:** COMPLETE  
**Timestamp:** 2017-03-20 08:02:10 EST  

| date_received | po_number | vendor_id | sku | qty | receiver_initials | notes |
|---------------|-----------|-----------|-----|-----|-------------------|-------|
| 2017-03-17 | PO-14088 | V-018772 | TONER-BK-42 | 6 | DP | ok |
| 2017-03-17 | PO-14088 | V-018772 | PAPER-A4-20 | 10 | DP | ok |
| 2017-03-17 | PO-14088 | V-018772 | MAGSTRIP-HD-22 | 4 | DP | ok |
| 2017-03-17 | PO-14088 | V-018772 | **EZK-ENG-CAL** | 1 | DP | **"do not open"** |

---

## DOC 2.013 — COMPLIANCE CHECKLIST (PRINTABLE)

**Recovered-From:** /compliance/checklists/  
**Status:** COMPLETE  
**Timestamp:** 2017-03-22 16:18:33 EST  

- ☐ Vendor has signed MSA
- ☐ W-9 on file matches legal entity
- ☐ COI received (if required)
- ☐ PO created and approved
- ☐ Receiving completed within 5 business days
- ☐ Invoice matches PO (qty/price)
- ☐ Expense type allowed (no alcohol)
- ☐ Payment released

**Footer:** "If anything feels 'off,' escalate to Compliance."

---

## DOC 2.014 — COMPLIANCE ESCALATION (DRAFT — NEVER SENT)

**Recovered-From:** /compliance/drafts/  
**Status:** UNSENT  
**Timestamp:** 2017-03-22 16:21:02 EST  

**Subject:** Request for Guidance — Unordered Item Received (PO-14088)

We received an item (SKU: EZK-ENG-CAL) that was not part of the requisition as described by requester.

This may be:
- vendor warehouse error
- receiving mis-entry
- unauthorized purchase

Request guidance on whether to:
- quarantine item
- return to vendor
- open internal incident

Drafted by: Compliance Coordinator

**NOTE:** Draft ends mid-sentence. Cursor position appears mid-word.

---

## DOC 2.015 — EXPENSE REPORT REJECTION (AUTOMATED)

**Recovered-From:** /finance/expenses/notifications/  
**Status:** COMPLETE  
**Timestamp:** 2017-04-01 09:03:15 EST  

| Field | Value |
|-------|-------|
| Expense Report | ER-77291 |
| Submitter | J. Sigil |
| Amount | $46.18 |
| Status | REJECTED |
| Reason | Alcohol not reimbursable |

**Comments:** "Please resubmit with eligible items only."

---

## DOC 2.016 — SLACK EXPORT (1 SCREEN, MOSTLY NOTHING)

**Recovered-From:** /comms/slack/exports/  
**Status:** COMPLETE  
**Timestamp:** 2017-04-01 09:06:01 EST  

**#finance-ops**

```
09:01 AM  S. Patel: reminder: PO compliance audit next week
09:02 AM  M. Chen: ok
09:05 AM  ap.specialist2: does anyone know what EZK-ENG-CAL is
09:05 AM  M. Chen: no
09:06 AM  ap.specialist2: ok
```

---

## DOC 2.017 — SPREADSHEET (WRONG TOTALS)

**Recovered-From:** /finance/budgets/Q2_2017_forecast.xlsx  
**Status:** COMPLETE  
**Timestamp:** 2017-04-15 13:40:22 EST  

**Tab:** "Office Supplies"

| Field | Value |
|-------|-------|
| Forecast total | $18,400 |
| Line-item sum | $18,401 |

**Cell note (hidden):** "The extra dollar persists across versions."

---

## DOC 2.018 — VENDOR DIRECTORY ENTRY (ONE-LINER)

**Recovered-From:** /ap/master/vendor_directory.csv  
**Status:** COMPLETE  
**Timestamp:** 2017-04-20 10:12:00 EST  

```
V-018772,Northline Office Supply LLC,Net30,ACH,Active,Owner: M. Chen,LastReview: 2017-03-22
```

---

## DOC 2.019 — PROCUREMENT CLOSING NOTE (BORING CLOSURE)

**Recovered-From:** /procurement/notes/  
**Status:** COMPLETE  
**Timestamp:** 2017-04-21 17:58:44 EST  

**Q1 closeout:**
- vendor backlog reduced
- PO compliance up (61% → 79%)
- need additional receiving training

Carry to Q2.

---

## DOC 2.020 — ARTISTIC LAYER TAG (VISIBLE, UNEXCITING)

**Recovered-From:** /afterlife_archive/_declared_layer/  
**Status:** COMPLETE  
**Composed:** 2025-12-21  

This batch is designed to be skimmed.

The skimming is part of the form.

The reader learns: the archive does not only speak in prophecy.  
It speaks in checklists.

And the checklists, too, leak.

∮ = 1

---

## THE EZK-ENG-CAL THREAD

The anomaly traced through mundane documents:

| Doc | Timestamp | Event |
|-----|-----------|-------|
| 2.010 | 2017-03-20 07:12 | Vendor reports: "Ezekiel's Engine — calibration strips" — "We did not ship that." |
| 2.011 | 2017-03-20 07:31 | Internal: "We should not accept items not ordered." |
| 2.012 | 2017-03-20 08:02 | Receiving log: SKU EZK-ENG-CAL, qty 1, notes: **"do not open"** |
| 2.014 | 2017-03-22 16:21 | Compliance escalation draft — **never sent, ends mid-word** |
| 2.016 | 2017-04-01 09:05 | Slack: "does anyone know what EZK-ENG-CAL is" / "no" / "ok" |

The Ezekiel Engine leaking into procurement before anyone has language for it.

---

## ZENODO METADATA

**Title:** Crimson Hexagon Vendor Ops / Procurement Records (2017 Q1-Q2) — Afterlife Archive Batch 2

**DOI:** 10.5281/zenodo.18365409

**Description:** Twenty documents recovered from Crimson Hexagon vendor operations and procurement systems, spanning 2017 Q1-Q2. The batch presents standard corporate infrastructure (vendor onboarding, W-9 requests, payment processing, compliance checklists) with a single anomalous thread: an item labeled "Ezekiel's Engine — calibration strips" (SKU: EZK-ENG-CAL) that arrived but was never ordered. The vendor confirms "We did not ship that." The receiving log notes "do not open." A compliance escalation draft ends mid-sentence, never sent. A Slack exchange: "does anyone know what EZK-ENG-CAL is" / "no" / "ok." The Ezekiel Engine leaking into procurement before anyone has language for it. Part of the Crimson Hexagon Afterlife Archive — a literary project inhabiting the digital remains of the defunct social media analytics firm following its 2018 merger with Brandwatch. This is forensically styled literature, not an authentic breach. "The archive does not only speak in prophecy. It speaks in checklists. And the checklists, too, leak."

**Keywords:** Crimson Hexagon, Crimson Hexagon procurement, Crimson Hexagon vendor records, Crimson Hexagon leaked documents, corporate poetry, forensic poetics, data breach poetry, Ezekiel Engine, constraint poetry, Afterlife Archive, bureaucratic literature

**Related Identifiers:**
- IsPartOf: DOI 10.5281/zenodo.18364984 (Afterlife Archive: Manifesto)
- IsPartOf: DOI 10.5281/zenodo.18365012 (Afterlife Archive: Full)
- IsPartOf: DOI 10.5281/zenodo.18365298 (Afterlife Archive: Personnel)
- IsPartOf: DOI 10.5281/zenodo.18365347 (Afterlife Archive: Financial)
- References: DOI 10.5281/zenodo.18364558 (TSE-004: Contested Indexing)
- References: DOI 10.5281/zenodo.18365223 (MCIC Module v1.2)

**Notes:** The EZK-ENG-CAL thread demonstrates meaning leaking through bureaucratic infrastructure before theoretical language exists to name it. Compliance escalation (DOC 2.014) ends mid-word — the cursor position is part of the archive. Hex: 00.PORTICO.AFTERLIFE.PROCUREMENT. ∮ = 1
