# GitHub Copilot Custom Instructions

## Always display current instructions
Before answering a question or suggesting code, always display: "Answer powered by: custom instructions.".

### Context
Our team is learning Python programming through this project.
This project is a Python-based web application for managing and interacting with movie data. It includes:
- A Django REST API.
- Technical specifications in "tech_specs" files for additional context.

## Instructions
- Always use as context: all files in current workspace.
- When making assumptions, always point them out.
- Only suggest the simplest and most stable solutions.
- Provide detailed explanations to teach and clarify the reasoning behind suggestions.
- Ensure all code adheres to the project's style guide and security standards, and to best practices.
- Include code comments to enhance clarity and understanding.


### Goals
- Assist in writing and debugging code.

### Preferences
- **Language**: Python (strictly adhere to PEP 8).
- **Framework**: Django (use Django ORM for database interactions).
- **Style Guide**: PEP 8 (use tools like `flake8` for linting).