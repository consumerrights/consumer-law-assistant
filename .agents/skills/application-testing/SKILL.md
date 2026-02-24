---
name: application-testing
description: Comprehensive testing strategy for the Consumer Law Assistant application. Use this skill when writing unit tests, integration tests, end-to-end tests, or setting up test infrastructure. Covers backend testing (database, API, RAG system, AI agents), frontend testing (components, views, state management), E2E testing (user workflows), performance testing, security testing, and acceptance criteria validation.
---

# Application Testing — Consumer Law Assistant

See plans/testing-tasks.md for complete task breakdown and SPEC.md for acceptance criteria.

## Test Infrastructure

**Backend**: pytest (Python) or Jest (Node.js) with separate test database
**Frontend**: Vitest/Jest + React Testing Library
**E2E**: Playwright or Cypress

## Key Testing Areas

1. **Database & Models**: CRUD operations, relationships, cascading deletes
2. **RAG System**: Document ingestion, chunking, search accuracy, citations
3. **AI Agents**: Each agent's functionality with proper inputs/outputs
4. **API Endpoints**: All CRUD operations, validation, error handling
5. **Workflows**: WF1 (Intake), WF2 (Research), WF3 (Drafting), WF4 (Timekeeping)
6. **Frontend Components**: UI components, forms, validation
7. **Frontend Views**: Page rendering, data loading, user interactions
8. **E2E**: Complete user journeys from intake to draft generation
9. **Performance**: Load testing API endpoints and RAG search
10. **Security**: Input validation, SQL injection prevention, file upload security

## Acceptance Criteria Tests

From SPEC.md, verify:
1. Can intake client + matter with remedy + amount
2. Can ingest corpus and answer research questions with citations
3. Can generate initial demand email with ACL references and matter facts
4. Can log time and produce time summary report
5. Can log comms and mark drafts sent

## Best Practices

- Write tests first (TDD) for critical functionality
- Use fixtures for reusable test data
- Mock external dependencies
- Test edge cases and error conditions
- Maintain test database separate from production
- Aim for 80%+ code coverage
- Run tests in CI/CD pipeline
