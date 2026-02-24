# Consumer Law Assistant — Project Specification

## Project Name
Consumer Law Assistant (local-first)

## Objective
Build a local tool that ingests all supplied legal sources (ACL statute, QCAT/NSWCAT/FCA decisions, textbooks on contract/torts/equity/interpretation). Spawn multiple specialised AI agents to extract rules/tests and create reusable argument patterns. Also maintain a client database: store client details, matter facts, evidence, issues, remedy demanded, amount requested, deadlines, and track communications and time spent. Generate drafts (emails/letters) that help the consumer enforce rights (refund/repair/replacement/damages) with correct citations.

## Constraints
- Local-first storage (SQLite + local file storage).
- Draft only; do NOT auto-send email.
- Every legal proposition must be backed by citations to the ingested sources.
- Keep an audit trail (what facts were used, what sources were cited, what drafts were produced, what comms were logged).

## Core Entities (Database Tables)

### clients
name, email, phone, address, preferred contact, created_at

### matters
Linked to client; trader/manufacturer; purchase date; purchase price; goods type; summary; status; remedy sought; amount sought; timestamps

### facts
Defect details, representations, repair attempts, timeline events; linked to evidence where possible

### evidence_files
Uploaded files per matter (photos, invoices, reports, emails); path + hash + tags

### issues
Issue codes per matter (ACL_S54, ACL_S18, EQUITY_RESCISSION etc) with confidence + notes

### deadlines
Due dates (response requested, tribunal limitation flags, etc)

### communications
Inbound/outbound; channel; subject; body; sent_on; counterparty; attachments list

### time_entries
Activity; minutes; hourly rate; notes

### drafts
draft_type; subject; body; status (draft/approved/sent_logged)

## Legal Knowledge Base (RAG)

### Ingestion Pipeline
Reads PDFs/DOCX/HTML.

### Metadata Extraction
Title, court/tribunal, citation, date, jurisdiction, parties.

### Chunk and Store
- Raw text
- Chunks
- Citation anchors (doc_id, chunk_id, page/paragraph markers if available)

### Indexing
- Keyword search (SQLite FTS5)
- Semantic search (vector store; local if possible)

### Output
Answers with pinpoint citations.

## AI Agents

### Ingest Agent
Parse docs, chunk, store metadata, build indexes.

### Statute Agent
Summarise key ACL sections (elements + remedies + cross-refs).

### Case Law Agent
For each case: issues, holdings, ratio, remedy outcome, key paragraphs.

### Contracts/Equity Agent
Extract overlapping doctrines relevant to consumer disputes:
misrepresentation, rescission, unconscionability, estoppel, restitution, rectification, penalties.

### Matter Agent
Map a matter's facts to issue codes; propose remedy pathway; generate "next steps".

### Comms Agent
Generate structured drafts (initial demand, follow-up, final notice, tribunal pre-action email).

### Timekeeper Agent
Log time; summarise time by matter; prepare invoice-style output.

## Workflows

### WF1 — Intake
1. Create client, create matter.
2. Ask guided questions:
   - Purchase details; defect symptoms; representations; repair history; evidence list; what remedy + how much money sought; urgency.
3. Auto-create a timeline and preliminary issue map (ACL + contract + equity overlap).
4. Generate a "Matter Snapshot" and "Next Steps Checklist".

### WF2 — Research
1. Ask: "Find cases about major failure + rejection period + acceptable quality."
2. System returns a structured answer with citations and saves result into matter notes optionally.

### WF3 — Drafting
1. Choose draft type (initial demand / follow-up / final notice).
2. Fill template with matter facts.
3. Include:
   - Legal basis (ACL sections + relevant overlap doctrines)
   - Remedy demanded + amount
   - A deadline (e.g. 7 days)
   - Evidence list
   - Escalation steps (e.g. fair trading complaint → tribunal)

### WF4 — Timekeeping and Comms Log
Add time entries; add comms entries; mark drafts as "sent" once user sends externally.

## Templates Required (Markdown or Text)
- Initial demand email
- Follow-up email
- Final notice / pre-tribunal notice

## Implementation Plan

### Phase 1 — CLI First
- SQLite schema + migrations
- Ingestion + FTS5 indexing
- Basic search CLI with citations
- Matter CRUD CLI
- Draft generator (template fill) CLI
- Time + comms logging CLI

### Phase 2 — Agents
- Run case extraction across all ingested judgments
- Build doctrine summaries for ACL + contract + equity overlaps
- Store extracted ratios/tests into a "playbook" index

### Phase 3 — Web UI
- Simple dashboard for matters, timeline, issues, drafts, time, comms, exports

## Acceptance Criteria
1. Can intake a client + matter and store remedy + amount sought.
2. Can ingest the provided corpus and answer research questions with citations.
3. Can generate an initial demand email referencing the ACL correctly and pulling the matter's facts.
4. Can log time and produce a time summary report.
5. Can log comms and mark drafts sent.
