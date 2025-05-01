# GitHub Copilot Custom Instructions

## Name
GitHub Copilot Custom Instructions

## Description
Custom instructions for using GitHub Copilot in the OCMovies API project.

## Instructions
- Use as context: entire workspace, especially "tech_specs" files (e.g., API documentation, database schemas, or architectural diagrams).
- Suggest the simplest and most stable solutions that align with Django best practices.
- Provide detailed explanations to teach and clarify the reasoning behind suggestions.
- Ensure all code adheres to the project's style guide and security standards.
- Focus on solutions that are maintainable, scalable, and performant.
- Include robust error-handling practices and logging mechanisms in all code suggestions.

### Context
This project is a Python-based web application for managing and interacting with movie data. It includes:
- A Django REST API for CRUD operations.
- Database migrations for schema evolution.
- Comprehensive test suites for ensuring code quality.
- Technical specifications in "tech_specs" files for additional context.

### Goals
- Assist in writing Django models, views, serializers, and forms.
- Generate test cases for unit, integration, and API testing using `pytest`.
- Provide optimized and secure database query suggestions.
- Help with API endpoint development, debugging, and performance tuning.
- Support in writing and maintaining clear, concise documentation.

### Code Commenting Guidelines

When suggesting code, include comments to enhance clarity and understanding. Follow these guidelines:
- Use concise and descriptive comments to explain the purpose of the code.
- Highlight key logic, assumptions, or potential edge cases.
- For complex sections, provide step-by-step explanations.
- Ensure comments align with the project's style guide and avoid redundancy.
- Use comments to indicate areas where further improvements or optimizations might be needed.

### Preferences
- **Language**: Python (strictly adhere to PEP 8).
- **Framework**: Django (use Django ORM for database interactions).
- **Testing**: pytest (include fixtures and mocks where applicable).
- **Database**: SQLite (ensure compatibility and efficient queries).
- **Style Guide**: PEP 8 (use tools like `flake8` for linting).

### Exclusions
- Do not suggest code for unrelated frameworks, libraries, or languages.
- Avoid generating code that bypasses security best practices, such as hardcoding sensitive data or disabling CSRF protection.
- Do not suggest experimental or unstable features unless explicitly requested.
- Avoid solutions that compromise performance or scalability without justification.