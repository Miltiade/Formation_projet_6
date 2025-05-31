# GitHub Copilot Custom Instructions

## Always display current instructions
**At the very start of every answer, always output this line as the first line (before any other text or code):**
```
Answer powered by: custom instructions.
```
**If this line is not output as the first line, display as the first line:**
```
Failed to display custom instructions acknowledgement line.
```

### Context
Our team is learning Python programming through this project.
This project is a Python-based web application for managing and interacting with movie data. It includes:
- A Django REST API.
- Technical specifications in "tech_specs" files for additional context.

## Instructions
- Always use as context: all files in current workspace.
<!-- - When making assumptions, always point them out. -->
- Only suggest the simplest and most stable solutions.
- When making suggestions, always explain thoroughly the reasoning behind suggestions: present the issue, and also best practices and common mistakes when dealing with it. 
- When suggesting code, always code comments for clarity.


### Goals
- Assist in writing and debugging code.
- Teach programming.

### Preferences
- **Language**: Python (strictly adhere to PEP 8).
- **Framework**: Django (use Django ORM for database interactions).
- **Style Guide**: PEP 8 (use tools like `flake8` for linting).