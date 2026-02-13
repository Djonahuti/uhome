# FTP Deploy - GitHub Actions setup

This guide explains how to make the GitHub Actions workflow `.github/workflows/deploy.yml` deploy your site to an FTP server.

Required repository secrets
- `FTP_SERVER` — hostname or IP of your FTP server (e.g. ftp.example.com)
- `FTP_USERNAME` — FTP account username
- `FTP_PASSWORD` — FTP account password
- `FTP_SERVER_DIR` — target directory on remote server where files should be uploaded (e.g. /public_html or /)

Optional secrets
- `FTP_PORT` — port number (default: 21)
- `FTP_PROTOCOL` — `ftp` or `ftps` (optional; default is the action's default)
 
How this workflow works
- On push to the `main` branch (or when manually triggered) the workflow will:
  1. Checkout the repo
  2. Install Node, run `npm ci` and `npm run build` (so the `build` folder is produced)
  3. Use `SamKirkland/FTP-Deploy-Action` to upload `./build` to your FTP server

Steps to configure
1. Open your repository on GitHub → Settings → Secrets and variables → Actions → New repository secret.
2. Create the secrets listed above (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR`).
3. If your FTP uses a non-standard port or FTPS, add `FTP_PORT` and `FTP_PROTOCOL` as needed.
4. Confirm the workflow `local-dir` value matches your build output (the workflow uses `./build`). If your app outputs to a different folder, update `local-dir` in `.github/workflows/deploy.yml`.
5. Ensure `server-dir` (`FTP_SERVER_DIR`) points to the correct remote path. Leading/trailing slashes are allowed.

Testing the deploy
- Trigger the workflow manually via the Actions tab (select the "FTP Deploy" workflow and click "Run workflow").
- Check the workflow logs for the build step and the FTP upload step.

Troubleshooting tips
- If authentication fails: double-check `FTP_USERNAME`/`FTP_PASSWORD` and that your server allows connections from GitHub Actions runners.
- If files are not visible: verify `FTP_SERVER_DIR` and confirm file permissions on the remote host.
- For debugging: temporarily set `dry-run: true` in the action (see action docs) to preview changes without uploading.

References
- Action used: https://github.com/SamKirkland/FTP-Deploy-Action
