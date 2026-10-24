# Security / 安全说明

This repository is an early historical Electron application prototype and has not completed a production security audit.

- Do not use this repository's historical client-side authentication or licensing constants as production secrets.
- Never reuse legacy credentials, salts, or authorization parameters in any active or paid deployment.
- The current Electron prototype allows Node.js integration in the renderer and disables context isolation. This configuration requires hardening before use with untrusted content.
- Do not commit actual assessment projects, personal information, secrets, API keys, or customer files.
- Avoid using the prototype with sensitive real-world data until the security model has been reviewed.

If you discover a security issue, please **do not** post exploit details or credential values in a public GitHub Issue. Contact the maintainer privately through their GitHub profile or use GitHub private vulnerability reporting if enabled.

Historical leaked credentials require rotation in active deployments. Editing a file in a new commit does not erase its old versions from Git history.
