# Backend Tasks — Consumer Law Assistant

## Database & Schema

- [ ] Design SQLite database schema for all core entities:
  - `clients` table (name, email, phone, address, preferred_contact, created_at)
  - `matters` table (client_id FK, trader, manufacturer, purchase_date, purchase_price, goods_type, summary, status, remedy_sought, amount_sought, timestamps)
  - `facts` table (matter_id FK, defect_details, representations, repair_attempts, timeline_events, evidence_id FK)
  - `evidence_files` table (matter_id FK, file_path, file_hash, tags, uploaded_at)
  - `issues` table (matter_id FK, issue_code, confidence_score, notes)
  - `deadlines` table (matter_id FK, deadline_type, due_date, notes)
  - `communications` table (matter_id FK, direction, channel, subject, body, sent_on, counterparty, attachments)
  - `time_entries` table (matter_id FK, activity, minutes, hourly_rate, notes, logged_at)
  - `drafts` table (matter_id FK, draft_type, subject, body, status, created_at, updated_at)

- [ ] Create database migration scripts
- [ ] Implement database initialization and seeding utilities
- [ ] Add database indexes for common queries
- [ ] Implement database backup and restore functionality

## Legal Knowledge Base (RAG System)

- [ ] Build document ingestion pipeline:
  - PDF parser integration
  - DOCX parser integration
  - HTML parser integration
  - Extract metadata (title, court, citation, date, jurisdiction, parties)

- [ ] Implement chunking strategy:
  - Split documents into semantic chunks
  - Preserve citation anchors (doc_id, chunk_id, page/paragraph markers)
  - Store raw text and processed chunks

- [ ] Set up indexing systems:
  - Implement SQLite FTS5 for keyword search
  - Integrate local vector store for semantic search
  - Create citation lookup system

- [ ] Build RAG query interface:
  - Query processing with context retrieval
  - Citation extraction and formatting
  - Answer generation with source references

## AI Agents

- [ ] **Ingest Agent**: Parse documents, chunk content, extract metadata, build indexes
- [ ] **Statute Agent**: Analyze and summarize ACL sections (elements, remedies, cross-references)
- [ ] **Case Law Agent**: Extract issues, holdings, ratio, remedy outcomes, key paragraphs from cases
- [ ] **Contracts/Equity Agent**: Extract doctrines (misrepresentation, rescission, unconscionability, estoppel, restitution, rectification, penalties)
- [ ] **Matter Agent**: Map matter facts to issue codes, propose remedy pathways, generate next steps
- [ ] **Comms Agent**: Generate structured drafts (initial demand, follow-up, final notice, pre-action emails)
- [ ] **Timekeeper Agent**: Log time entries, summarize time by matter, prepare invoice-style outputs

## Core API Endpoints

- [ ] **Client Management**:
  - POST /api/clients (create)
  - GET /api/clients (list)
  - GET /api/clients/:id (read)
  - PUT /api/clients/:id (update)
  - DELETE /api/clients/:id (delete)

- [ ] **Matter Management**:
  - POST /api/matters (create)
  - GET /api/matters (list with filters)
  - GET /api/matters/:id (read)
  - PUT /api/matters/:id (update)
  - DELETE /api/matters/:id (delete)
  - GET /api/matters/:id/timeline (get matter timeline)

- [ ] **Facts & Evidence**:
  - POST /api/matters/:id/facts (add fact)
  - POST /api/matters/:id/evidence (upload evidence file)
  - GET /api/matters/:id/evidence (list evidence)
  - DELETE /api/evidence/:id (delete evidence)

- [ ] **Issues & Deadlines**:
  - POST /api/matters/:id/issues (add issue)
  - GET /api/matters/:id/issues (list issues)
  - POST /api/matters/:id/deadlines (add deadline)
  - GET /api/matters/:id/deadlines (list deadlines)

- [ ] **Communications & Drafts**:
  - POST /api/matters/:id/communications (log communication)
  - GET /api/matters/:id/communications (list communications)
  - POST /api/matters/:id/drafts (create draft)
  - GET /api/matters/:id/drafts (list drafts)
  - PUT /api/drafts/:id (update draft)
  - PUT /api/drafts/:id/status (mark as sent/approved)

- [ ] **Time Tracking**:
  - POST /api/matters/:id/time-entries (log time)
  - GET /api/matters/:id/time-entries (list entries)
  - GET /api/matters/:id/time-summary (get time summary)

- [ ] **Research & Search**:
  - POST /api/research/search (semantic + keyword search)
  - GET /api/research/sources (list ingested sources)
  - POST /api/research/ingest (trigger document ingestion)

## Workflow Implementations

- [ ] **WF1 — Intake Workflow**:
  - Guided intake form API
  - Auto-generate timeline from matter facts
  - Generate preliminary issue map
  - Create "Matter Snapshot" report
  - Generate "Next Steps Checklist"

- [ ] **WF2 — Research Workflow**:
  - Natural language research query processing
  - Structured answer generation with citations
  - Save research results to matter notes

- [ ] **WF3 — Drafting Workflow**:
  - Template management system
  - Draft generation from templates
  - Populate with matter facts and legal basis
  - Include remedy demands, amounts, deadlines
  - Attach evidence list and escalation steps

- [ ] **WF4 — Timekeeping & Comms Log Workflow**:
  - Batch time entry logging
  - Communication logging with attachments
  - Draft status management (draft → approved → sent)

## Templates & Document Generation

- [ ] Create template system for:
  - Initial demand email template
  - Follow-up email template
  - Final notice / pre-tribunal notice template
  - Matter snapshot report template
  - Time summary invoice template

- [ ] Implement template variable substitution
- [ ] Add citation formatting helpers
- [ ] Create template preview functionality

## CLI Tools (Phase 1)

- [ ] Build CLI commands:
  - `client` - CRUD operations for clients
  - `matter` - CRUD operations for matters
  - `search` - Search legal knowledge base
  - `draft` - Generate drafts from templates
  - `time` - Log time entries
  - `comms` - Log communications
  - `ingest` - Ingest legal documents
  - `export` - Export matter data

## API Server & Configuration

- [ ] Set up REST API server (Express/FastAPI/similar)
- [ ] Implement request validation and error handling
- [ ] Add logging and monitoring
- [ ] Configure CORS for local frontend access
- [ ] Create configuration management (environment variables, config files)
- [ ] Implement audit trail logging system
- [ ] Add data export functionality (CSV, PDF, JSON)

## Security & Data Management

- [ ] Implement local file storage with proper permissions
- [ ] Add file hash verification for evidence files
- [ ] Create data validation layer
- [ ] Implement cascading delete rules
- [ ] Add data anonymization utilities (for testing/demos)
- [ ] Create backup automation scripts
