# Frontend Tasks — Consumer Law Assistant

## Project Setup

- [ ] Initialize frontend project with appropriate framework (React/Vue/Svelte)
- [ ] Set up build tooling (Vite/Webpack/similar)
- [ ] Configure TypeScript for type safety
- [ ] Set up CSS framework/styling solution (Tailwind/Material-UI/similar)
- [ ] Configure environment variables for API endpoints
- [ ] Set up routing library (React Router/Vue Router/similar)
- [ ] Configure ESLint and Prettier for code formatting

## Core UI Components

- [ ] Create reusable component library:
  - Button, Input, Select, Textarea
  - Modal/Dialog components
  - Form components with validation
  - Table/DataGrid with sorting and filtering
  - Card layouts
  - Navigation components (sidebar, header, tabs)
  - Loading indicators and skeletons
  - Toast/notification system
  - Date picker and date range selector
  - File upload component
  - Dropdown menus and action buttons

## Dashboard & Layout

- [ ] Build main dashboard layout:
  - Top navigation bar
  - Sidebar navigation menu
  - Main content area
  - Responsive layout for mobile/tablet/desktop

- [ ] Implement dashboard homepage:
  - Statistics overview (active matters, deadlines, time logged)
  - Recent activity feed
  - Upcoming deadlines widget
  - Quick action buttons
  - Matter status summary charts

## Client Management Views

- [ ] **Clients List Page**:
  - Table view with search/filter
  - Sort by name, date created, number of matters
  - Quick actions (view, edit, delete)
  - Pagination

- [ ] **Client Detail Page**:
  - Client information display
  - Edit client form
  - List of associated matters
  - Communication history
  - Time summary

- [ ] **Create/Edit Client Form**:
  - Name, email, phone, address fields
  - Preferred contact method selector
  - Form validation
  - Save/cancel actions

## Matter Management Views

- [ ] **Matters List Page**:
  - Grid/list view toggle
  - Filter by status, remedy sought, date range
  - Search by client name, trader, goods type
  - Status badges (new, active, resolved, closed)
  - Sort options
  - Quick view preview

- [ ] **Matter Detail Page**:
  - Matter summary section
  - Timeline visualization
  - Tabbed interface for:
    - Overview (key details, status, remedy)
    - Facts (defect details, timeline events)
    - Evidence (file list with preview)
    - Issues (ACL codes, confidence scores)
    - Deadlines (calendar view)
    - Communications (threaded view)
    - Drafts (list with status)
    - Time entries (table with summary)

- [ ] **Matter Creation Wizard (WF1 — Intake)**:
  - Step 1: Client selection or creation
  - Step 2: Purchase details form
  - Step 3: Defect and timeline entry
  - Step 4: Evidence upload
  - Step 5: Remedy and amount specification
  - Step 6: Review and submit
  - Progress indicator
  - Auto-save drafts

## Facts & Evidence Management

- [ ] **Facts Entry Interface**:
  - Add/edit fact entries
  - Link facts to evidence
  - Timeline visualization
  - Drag-and-drop ordering
  - Rich text editor for descriptions

- [ ] **Evidence Management**:
  - File upload with drag-and-drop
  - Preview images, PDFs, documents
  - Tagging system
  - Download/delete actions
  - File metadata display (upload date, size, hash)

## Issues & Deadlines

- [ ] **Issues Manager**:
  - Add issue codes (ACL_S54, ACL_S18, etc.)
  - Confidence score slider
  - Notes field
  - Issue code reference guide/tooltip
  - Remove/edit issues

- [ ] **Deadlines Calendar**:
  - Calendar view with deadline markers
  - List view with filtering
  - Add deadline form
  - Reminder notifications
  - Past due highlighting
  - Deadline type categorization

## Communications & Drafts

- [ ] **Communications Log**:
  - Threaded conversation view
  - Filter by inbound/outbound, channel, date
  - Add new communication entry
  - Attach files to communications
  - Search through communications
  - Mark as read/unread

- [ ] **Draft Management**:
  - List drafts by type and status
  - Draft preview with formatting
  - Edit draft in rich text editor
  - Generate draft from template (WF3)
  - Approve draft action
  - Mark as sent with confirmation
  - Export draft to PDF/DOCX

- [ ] **Draft Generation Interface (WF3)**:
  - Select draft type (initial demand, follow-up, final notice)
  - Preview generated content
  - Edit template variables
  - Review legal citations
  - Preview remedy demands and amounts
  - Customize deadline and escalation steps

## Time Tracking

- [ ] **Time Entry Form**:
  - Activity description field
  - Duration input (hours/minutes)
  - Hourly rate field
  - Date/time selector
  - Quick entry buttons (15min, 30min, 1hr)

- [ ] **Time Summary View**:
  - Total time by matter
  - Time breakdown by activity type
  - Date range filtering
  - Invoice-style report preview
  - Export to PDF/CSV

## Research Interface (WF2)

- [ ] **Research Search Page**:
  - Natural language query input
  - Advanced search filters (jurisdiction, date range, case type)
  - Search results with relevance scores
  - Citation display with pinpoint references
  - Save search results to matter notes
  - Recent searches history

- [ ] **Legal Knowledge Base Browser**:
  - Browse ingested documents by category
  - Document viewer with highlighting
  - Citation copy functionality
  - Bookmarking system

## Reports & Export

- [ ] **Matter Snapshot Report**:
  - Generate comprehensive matter summary
  - Include timeline, facts, issues, evidence
  - Export to PDF with formatting
  - Print-friendly layout

- [ ] **Next Steps Checklist**:
  - Auto-generated action items
  - Checkbox completion tracking
  - Priority indicators
  - Due date assignments

- [ ] **Export Functionality**:
  - Export matter data to JSON
  - Export communications log to CSV
  - Export time summary to PDF invoice
  - Batch export multiple matters

## Settings & Configuration

- [ ] **User Preferences**:
  - Default hourly rate
  - Preferred date/time format
  - Theme selection (light/dark mode)
  - Notification preferences

- [ ] **Template Management**:
  - View/edit email templates
  - Preview template with sample data
  - Restore default templates
  - Create custom templates

- [ ] **System Configuration**:
  - API connection settings
  - Database backup triggers
  - Data retention policies

## State Management & API Integration

- [ ] Set up state management (Redux/Zustand/Pinia/similar)
- [ ] Create API client with axios or fetch
- [ ] Implement request/response interceptors
- [ ] Add error handling and retry logic
- [ ] Create loading states for async operations
- [ ] Implement optimistic UI updates
- [ ] Add offline support with local caching (optional)

## Accessibility & UX

- [ ] Ensure keyboard navigation support
- [ ] Add ARIA labels and roles
- [ ] Implement focus management
- [ ] Test with screen readers
- [ ] Add error messages with clear guidance
- [ ] Implement form validation feedback
- [ ] Add confirmation dialogs for destructive actions

## Performance Optimization

- [ ] Implement lazy loading for routes
- [ ] Optimize images and assets
- [ ] Add pagination for large data sets
- [ ] Implement virtual scrolling for long lists
- [ ] Minimize bundle size
- [ ] Add caching strategies for API calls

## Testing & Quality Assurance

- [ ] Set up component testing (Vitest/Jest)
- [ ] Write unit tests for utility functions
- [ ] Add integration tests for key workflows
- [ ] Test responsive layouts on multiple devices
- [ ] Browser compatibility testing
- [ ] Performance benchmarking
