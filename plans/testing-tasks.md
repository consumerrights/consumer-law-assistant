# Testing Tasks — Consumer Law Assistant

## Test Infrastructure Setup

- [ ] Set up testing framework for backend (pytest/Jest/Mocha)
- [ ] Set up testing framework for frontend (Vitest/Jest/Cypress)
- [ ] Configure test database (separate SQLite instance)
- [ ] Set up code coverage reporting (Istanbul/Coverage.py)
- [ ] Configure CI/CD pipeline for automated testing
- [ ] Set up test data factories and fixtures
- [ ] Create mock data generators
- [ ] Configure test environment variables

## Backend Unit Tests

### Database & Models

- [ ] Test database schema creation and migrations
- [ ] Test CRUD operations for each entity:
  - Clients (create, read, update, delete)
  - Matters (create, read, update, delete)
  - Facts (create, read, update, delete)
  - Evidence files (create, read, update, delete)
  - Issues (create, read, update, delete)
  - Deadlines (create, read, update, delete)
  - Communications (create, read, update, delete)
  - Time entries (create, read, update, delete)
  - Drafts (create, read, update, delete)

- [ ] Test foreign key relationships and cascading deletes
- [ ] Test database indexes and query performance
- [ ] Test data validation constraints
- [ ] Test database backup and restore functionality

### Legal Knowledge Base (RAG)

- [ ] Test document ingestion:
  - PDF parsing accuracy
  - DOCX parsing accuracy
  - HTML parsing accuracy
  - Metadata extraction correctness

- [ ] Test chunking strategy:
  - Chunk size consistency
  - Citation anchor preservation
  - Text splitting at semantic boundaries

- [ ] Test indexing systems:
  - FTS5 keyword search accuracy
  - Vector store semantic search relevance
  - Citation lookup correctness

- [ ] Test RAG query interface:
  - Query processing accuracy
  - Context retrieval relevance
  - Citation extraction and formatting
  - Answer generation quality

### AI Agents

- [ ] Test Ingest Agent:
  - Document parsing completeness
  - Metadata extraction accuracy
  - Index building correctness

- [ ] Test Statute Agent:
  - ACL section summarization accuracy
  - Elements extraction correctness
  - Cross-reference identification

- [ ] Test Case Law Agent:
  - Issue identification accuracy
  - Holdings extraction correctness
  - Ratio decidendi identification
  - Key paragraph selection

- [ ] Test Contracts/Equity Agent:
  - Doctrine extraction completeness
  - Relevant case identification
  - Application to consumer disputes

- [ ] Test Matter Agent:
  - Fact-to-issue mapping accuracy
  - Remedy pathway recommendations
  - Next steps generation relevance

- [ ] Test Comms Agent:
  - Draft generation quality
  - Template variable substitution
  - Citation formatting correctness
  - Tone and language appropriateness

- [ ] Test Timekeeper Agent:
  - Time logging accuracy
  - Summarization correctness
  - Invoice generation formatting

### API Endpoints

- [ ] Test Client Management endpoints:
  - POST /api/clients (validation, success, errors)
  - GET /api/clients (filtering, pagination)
  - GET /api/clients/:id (existing, non-existing)
  - PUT /api/clients/:id (validation, updates)
  - DELETE /api/clients/:id (cascading effects)

- [ ] Test Matter Management endpoints:
  - All CRUD operations with various inputs
  - Timeline generation accuracy
  - Filtering and search functionality

- [ ] Test Facts & Evidence endpoints:
  - File upload with various formats
  - File hash verification
  - Evidence retrieval and deletion

- [ ] Test Issues & Deadlines endpoints:
  - Issue code validation
  - Deadline date handling
  - Filtering and sorting

- [ ] Test Communications & Drafts endpoints:
  - Communication logging with attachments
  - Draft status transitions
  - Template-based draft generation

- [ ] Test Time Tracking endpoints:
  - Time entry validation
  - Summary calculations
  - Date range filtering

- [ ] Test Research & Search endpoints:
  - Query processing
  - Result relevance
  - Citation formatting
  - Document ingestion triggers

### Workflow Testing

- [ ] Test WF1 — Intake Workflow:
  - Complete intake process end-to-end
  - Timeline auto-generation
  - Issue map creation
  - Matter snapshot generation
  - Next steps checklist creation

- [ ] Test WF2 — Research Workflow:
  - Natural language query processing
  - Answer generation with citations
  - Saving results to matter notes

- [ ] Test WF3 — Drafting Workflow:
  - Template selection and loading
  - Variable substitution accuracy
  - Legal basis inclusion
  - Remedy and amount insertion
  - Evidence list attachment
  - Escalation steps formatting

- [ ] Test WF4 — Timekeeping & Comms Log Workflow:
  - Batch time entry processing
  - Communication logging
  - Draft status management transitions

## Backend Integration Tests

- [ ] Test complete matter lifecycle:
  - Create client → Create matter → Add facts → Upload evidence → Generate issues → Create drafts → Log time → Mark sent

- [ ] Test data consistency across related entities
- [ ] Test concurrent access and race conditions
- [ ] Test error handling and rollback scenarios
- [ ] Test audit trail logging completeness
- [ ] Test export functionality for all data types
- [ ] Test API authentication and authorization (if implemented)

## Frontend Unit Tests

### Component Tests

- [ ] Test all UI components in isolation:
  - Button, Input, Select, Textarea
  - Modal/Dialog
  - Form components with validation
  - Table/DataGrid
  - Cards, navigation components
  - File upload component

- [ ] Test form validation logic
- [ ] Test component state management
- [ ] Test component event handlers
- [ ] Test conditional rendering

### Page/View Tests

- [ ] Test Dashboard page:
  - Statistics display
  - Recent activity rendering
  - Quick actions functionality

- [ ] Test Clients pages:
  - List rendering and filtering
  - Detail page data display
  - Create/edit form validation

- [ ] Test Matters pages:
  - List filtering and search
  - Detail page tabs and data
  - Creation wizard steps

- [ ] Test Facts, Evidence, Issues, Deadlines pages
- [ ] Test Communications and Drafts pages
- [ ] Test Time Tracking pages
- [ ] Test Research Interface

### State Management Tests

- [ ] Test state updates on API success
- [ ] Test state updates on API errors
- [ ] Test optimistic UI updates
- [ ] Test state persistence (if applicable)

## Frontend Integration Tests

- [ ] Test user flows end-to-end:
  - Complete intake workflow (WF1)
  - Research and save results (WF2)
  - Generate and send draft (WF3)
  - Log time and communications (WF4)

- [ ] Test navigation between pages
- [ ] Test API integration with mock server
- [ ] Test error handling and user feedback
- [ ] Test loading states during async operations

## End-to-End (E2E) Tests

- [ ] Set up E2E testing framework (Playwright/Cypress)
- [ ] Test complete user journeys:
  - New user creates client and matter
  - User uploads evidence and generates draft
  - User conducts research and logs time
  - User exports matter data

- [ ] Test critical paths:
  - Matter intake to draft generation
  - Research to draft citation inclusion
  - Time logging to invoice generation

- [ ] Test cross-browser compatibility
- [ ] Test responsive layouts on different screen sizes

## Performance Testing

- [ ] Load test API endpoints:
  - Measure response times under load
  - Test concurrent user scenarios
  - Identify bottlenecks

- [ ] Test database query performance:
  - Measure query execution times
  - Test with large datasets
  - Optimize slow queries

- [ ] Test RAG system performance:
  - Measure search query latency
  - Test with large document corpus
  - Evaluate vector search efficiency

- [ ] Frontend performance:
  - Measure page load times
  - Test bundle size impact
  - Evaluate rendering performance

## Security Testing

- [ ] Test input validation and sanitization
- [ ] Test SQL injection prevention
- [ ] Test file upload security (type validation, size limits)
- [ ] Test XSS prevention in user-generated content
- [ ] Test CSRF protection (if applicable)
- [ ] Test data access controls
- [ ] Test sensitive data exposure in logs/errors

## Acceptance Testing

- [ ] Verify Acceptance Criteria from SPEC.md:
  1. Can intake a client + matter and store remedy + amount sought
  2. Can ingest the provided corpus and answer research questions with citations
  3. Can generate an initial demand email referencing the ACL correctly and pulling the matter's facts
  4. Can log time and produce a time summary report
  5. Can log comms and mark drafts sent

- [ ] Test against real-world scenarios:
  - Sample consumer law cases
  - Typical user workflows
  - Edge cases and error scenarios

## Regression Testing

- [ ] Create regression test suite for critical functionality
- [ ] Automate regression tests in CI/CD pipeline
- [ ] Test backward compatibility with existing data
- [ ] Test database migration scripts

## Test Documentation

- [ ] Document test coverage reports
- [ ] Create testing guidelines for contributors
- [ ] Document known issues and workarounds
- [ ] Maintain test data documentation
- [ ] Create troubleshooting guide for common test failures

## Quality Metrics

- [ ] Achieve minimum code coverage targets (e.g., 80%)
- [ ] Monitor test execution time and optimize slow tests
- [ ] Track test failure rates and investigate flaky tests
- [ ] Document test coverage gaps and prioritize filling them
