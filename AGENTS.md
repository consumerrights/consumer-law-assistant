# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Consumer Law Assistant — a local-first tool for Australian consumer law enforcement. See `SPEC.md` for the full specification.

Key points:
- Local-first storage (SQLite + local files). Never auto-send emails.
- Every legal proposition must include citations to ingested sources.
- Maintain a full audit trail across facts, sources, drafts, and communications.
- Multiple specialised AI agents (Ingest, Statute, Case Law, Contracts/Equity, Matter, Comms, Timekeeper).
- Three-phase build: Phase 1 CLI → Phase 2 Agents → Phase 3 Web UI.

## Development Environment

- **Platform**: Windows
- **Shell**: PowerShell
