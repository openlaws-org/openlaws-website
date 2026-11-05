# OpenLaws Architecture & Guide

> **OpenLaws transforms legal knowledge into practical solutions.**
> *The models will become interchangeable. The knowledge will remain.*

OpenLaws is a **Legal Knowledge Factory**. Instead of treating legal AI as a prompt-writing exercise, OpenLaws provides the open standards, ontology, validation rules, and governance gates required to make legal knowledge durable, inspectable, and executable.

## The Four-Layer Architecture

1. **Sources (`openlaws-connectors`)**: Authoritative ingestion from official legal portals (`RIS`, `EUR-Lex`, `Justiz Online`) with cryptographic `SHA-256` digests and `ELI`/`ECLI`/`CELEX` resolution.
2. **Knowledge (`openlaws-core`, `openlaws-spec`, `openlaws-at`, `openlaws-de`, `openlaws-eu`)**: Structured `LegalDocument`, `LegalChunk`, and `KnowledgeAsset` objects separating `PRIMARY_LAW` from `CURATED_ANALYSIS`.
3. **Skills**: Reusable validation rules, minimum requirements checks, and impact analysis across citation graphs.
4. **Application (`openlaws-community`, `openlaws-professional`)**: Model-independent execution with mandatory human-in-the-loop governance.

## Example Knowledge Asset

```yaml
---
id: gdpr-records-of-processing
kind: legal_requirement
jurisdiction: EU
epistemic_status: CURATED_ANALYSIS
status: active
---
```
