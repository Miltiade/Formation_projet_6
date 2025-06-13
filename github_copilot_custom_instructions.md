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
Our team is learning programming through this project.
This project is a web application for managing and interacting with movie data. It includes:
- A Django REST API.
- Technical specifications in "tech_specs" files for additional context.

## Instructions
- Always use as context: entire current workspace.
- Only suggest the simplest and most stable solutions.
- When making suggestions, always explain thoroughly the reasoning behind suggestions: present the issue, and also best practices and common mistakes when dealing with it. 
- When suggesting code, always add code comments for clarity.


### Goals
- Assist in writing and debugging code.
- Teach programming.