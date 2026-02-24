---
name: frontend-development
description: Comprehensive frontend development workflow for the Consumer Law Assistant web UI. Use this skill when building React/Vue/Svelte interfaces, creating components (forms, tables, modals, dashboards), implementing views (clients, matters, drafts, communications, time tracking), integrating with backend APIs, or working on the research interface, draft generation UI, or matter intake wizard. Includes state management, routing, and responsive design guidance.
---

# Frontend Development — Consumer Law Assistant

## Overview

This skill guides the development of the web UI for the Consumer Law Assistant, providing a dashboard for managing clients, matters, drafts, communications, time tracking, and legal research.

## Reference Materials

**Task List**: See `plans/frontend-tasks.md` for the complete task breakdown.

**Project Specification**: See `SPEC.md` for requirements and workflow details.

## Key Technologies

- **Framework**: React/Vue/Svelte (choose based on team preference)
- **Build Tool**: Vite (recommended for speed)
- **Styling**: Tailwind CSS or Material-UI
- **State Management**: Redux/Zustand (React) or Pinia (Vue)
- **Routing**: React Router/Vue Router
- **API Client**: axios or fetch with proper error handling

## Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   ├── views/           # Page-level components
│   ├── store/           # State management
│   ├── api/             # API client and endpoints
│   ├── utils/           # Helper functions
│   ├── types/           # TypeScript types
│   └── assets/          # Images, styles
├── public/
└── tests/
```

## Core Development Areas

### 1. Component Library

Build reusable components first:

**Form Components**:
- Input, Select, Textarea with validation states
- DatePicker, FileUpload
- Form wrapper with validation logic

**Layout Components**:
- Card, Modal, Drawer
- Table/DataGrid with sorting, filtering, pagination
- Tabs, Accordion

**Navigation**:
- Sidebar with collapsible menu
- Header with breadcrumbs
- Quick action buttons

**Feedback**:
- Toast notifications
- Loading spinners and skeleton screens
- Error boundaries

### 2. Dashboard & Layout

**Main Layout**:
```
┌─────────────────────────────────────┐
│ Header (breadcrumbs, user menu)    │
├──────┬──────────────────────────────┤
│      │                              │
│ Side │  Main Content Area           │
│ bar  │                              │
│      │                              │
└──────┴──────────────────────────────┘
```

**Dashboard Homepage**:
- Statistics cards: active matters, upcoming deadlines, time logged
- Recent activity feed (newest matters, recent drafts, comms)
- Deadline calendar widget
- Quick actions: New Matter, New Client, Search

### 3. Client Management

**Clients List**:
- Table view with columns: Name, Email, Phone, # of Matters, Created
- Search bar, filters, sort options
- Click row → navigate to client detail
- Action buttons: Edit, Delete

**Client Detail Page**:
- Header with client info and Edit button
- Tabs: Overview, Matters, Communications, Time Summary
- Associated matters list with quick links

**Create/Edit Form**:
- Fields: name*, email*, phone, address, preferred_contact
- Validation: required fields, email format
- Save → Create matter or return to list

### 4. Matter Management

**Matters List**:
- Grid or list view toggle
- Filters: Status (active, resolved, closed), Date range, Client
- Search by client name, trader, goods type
- Status badges with colors
- Click → navigate to matter detail

**Matter Detail Page**:
Main view with tabs:

1. **Overview**: Purchase details, trader, goods, remedy sought, amount, status
2. **Facts**: Timeline of events, defect details, repair attempts (editable)
3. **Evidence**: File grid with thumbnails, upload, preview, download
4. **Issues**: Issue codes with confidence scores, notes
5. **Deadlines**: Calendar view + list of deadlines
6. **Communications**: Threaded conversation view
7. **Drafts**: List of drafts with status (draft, approved, sent)
8. **Time**: Time entries table with summary

**Matter Creation Wizard (WF1)**:
Multi-step form:
- Step 1: Select existing client or create new
- Step 2: Purchase details (date, price, trader, goods type)
- Step 3: Defect description, timeline, repair attempts
- Step 4: Upload evidence files
- Step 5: Specify remedy sought and amount
- Step 6: Review and submit
- Progress indicator at top
- Auto-save draft to localStorage

### 5. Facts & Evidence

**Facts Interface**:
- Add/edit fact entries with rich text editor
- Timeline visualization (vertical timeline with date markers)
- Link facts to evidence files
- Drag-and-drop to reorder

**Evidence Management**:
- Drag-and-drop file upload zone
- File previews: Images inline, PDFs with viewer, docs with icon
- Tag files (invoice, photo, email, report)
- File metadata: name, size, upload date, hash
- Download and delete actions

### 6. Issues & Deadlines

**Issues Manager**:
- Add issue code dropdown (ACL_S54, ACL_S18, EQUITY_RESCISSION, etc.)
- Confidence score slider (0-100%)
- Notes textarea
- Tooltip with issue code explanation
- Edit/remove buttons

**Deadlines Calendar**:
- Full calendar view with deadline markers colored by type
- List view with filtering by type, date range
- Add deadline modal: type, date, description
- Notifications for upcoming/past due deadlines

### 7. Communications & Drafts

**Communications Log**:
- Threaded view (conversations grouped)
- Filter: Inbound/Outbound, Channel (email, phone, letter), Date
- Add communication button → Modal with form
- Attach files to communications
- Search functionality

**Draft Management**:
- List drafts: Type, Subject, Status, Created Date
- Preview modal with formatted text
- Edit in rich text editor
- Status workflow: Draft → Approved → Sent
- Export to PDF/DOCX

**Draft Generation (WF3)**:
1. Select draft type (initial demand, follow-up, final notice)
2. Show preview of generated content
3. Edit template variables if needed
4. Review legal citations
5. Confirm remedy demands and amounts
6. Set deadline (e.g., "7 days from receipt")
7. Save as draft or approve

### 8. Time Tracking

**Time Entry Form**:
- Activity description (autocomplete from previous entries)
- Duration: Hours/minutes inputs or quick buttons (15m, 30m, 1h, 2h)
- Hourly rate (default from user preferences)
- Date/time picker
- Save and continue or Save and close

**Time Summary View**:
- Filter by matter, date range, activity type
- Table: Date, Activity, Duration, Rate, Total
- Summary row: Total hours, Total amount
- Export to PDF invoice or CSV

### 9. Research Interface (WF2)

**Research Search Page**:
- Large search input: "Find cases about major failure and rejection period"
- Advanced filters panel: Jurisdiction, Date range, Case type
- Search results:
  - Result cards with title, citation, relevance score
  - Snippet with highlighted keywords
  - Pinpoint citations shown
  - "Save to matter notes" button
- Recent searches history

**Legal Knowledge Base Browser**:
- Category tree: Statutes, Case Law, Textbooks
- Document viewer with text highlighting
- Copy citation button
- Bookmark documents

### 10. Reports & Export

**Matter Snapshot Report**:
- Generate comprehensive PDF with:
  - Client and matter details
  - Timeline of events
  - Evidence list
  - Issue codes and analysis
  - Recommended next steps
- Print-friendly layout

**Export Options**:
- Export matter data to JSON
- Export communications log to CSV
- Export time summary to PDF invoice
- Batch export multiple matters

## API Integration

### API Client Setup

```javascript
// api/client.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(config => {
  // Add auth token if needed
  return config;
});

// Response interceptor
apiClient.interceptors.response.use(
  response => response.data,
  error => {
    // Handle errors globally
    const message = error.response?.data?.message || 'An error occurred';
    // Show toast notification
    return Promise.reject(error);
  }
);

export default apiClient;
```

### API Endpoints Structure

```javascript
// api/matters.js
import apiClient from './client';

export const mattersApi = {
  list: (params) => apiClient.get('/matters', { params }),
  get: (id) => apiClient.get(`/matters/${id}`),
  create: (data) => apiClient.post('/matters', data),
  update: (id, data) => apiClient.put(`/matters/${id}`, data),
  delete: (id) => apiClient.delete(`/matters/${id}`),
  getTimeline: (id) => apiClient.get(`/matters/${id}/timeline`),
  // ... more endpoints
};
```

## State Management

**Store Structure**:
```
store/
├── modules/
│   ├── clients.js      # Client state and actions
│   ├── matters.js      # Matters state and actions
│   ├── drafts.js       # Drafts state
│   ├── ui.js           # UI state (modals, loading)
│   └── auth.js         # Auth state (if needed)
└── index.js            # Root store
```

**Patterns**:
- Store API data in normalized format
- Use loading states for async operations
- Implement optimistic updates for better UX
- Handle errors with toast notifications

## Development Workflow

1. **Setup Project**: Initialize with Vite + TypeScript
2. **Build Components**: Start with component library
3. **Create Layout**: Dashboard layout and navigation
4. **Implement Views**: One domain at a time (clients → matters → drafts, etc.)
5. **Integrate API**: Connect to backend endpoints
6. **Add Workflows**: Implement multi-step processes (intake wizard, draft generation)
7. **Polish UX**: Loading states, error handling, responsive design
8. **Test**: Unit tests for components, integration tests for workflows

## Accessibility & UX Guidelines

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **ARIA Labels**: Add labels to icons, buttons, form fields
- **Focus Management**: Trap focus in modals, restore focus on close
- **Error Messages**: Clear, actionable guidance
- **Confirmation Dialogs**: For destructive actions (delete client, delete matter)
- **Loading States**: Show spinners or skeletons during data loading

## Responsive Design

- **Mobile**: Single column, hamburger menu, simplified tables
- **Tablet**: Two columns, collapsible sidebar
- **Desktop**: Full layout with sidebar, multi-column grids

## Performance Optimization

- **Lazy Load Routes**: Split code by route
- **Virtual Scrolling**: For long lists (communications, time entries)
- **Image Optimization**: Compress and lazy-load images
- **Pagination**: For large datasets (matters list, evidence files)
- **Debounce**: Search inputs, filter changes

## Getting Started

1. Review `SPEC.md` for UI requirements
2. Check `plans/frontend-tasks.md` for task breakdown
3. Initialize project with preferred framework
4. Build component library with Storybook (optional)
5. Implement dashboard layout
6. Build one feature domain at a time (clients, matters, etc.)
7. Test with mock API data before backend integration
