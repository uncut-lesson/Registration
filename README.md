# Free Basic Course Registration

Static registration website for GitHub Pages with Google Sheets storage.

## Files

- `index.html` - main webpage and registration form
- `style.css` - page design
- `script.js` - form validation and submit logic
- `google-apps-script.js` - paste this code into Google Apps Script
- `assets/Logo.png` - place your logo image here

## Setup Google Sheets Storage

1. Create a new Google Sheet.
2. Rename the first sheet to `Registrations`.
3. Add this header row:

   `Timestamp | Course | Name | Gmail | WhatsApp Number | State | City | Qualification`

4. In the Google Sheet, go to `Extensions > Apps Script`.
5. Delete the default code and paste all code from `google-apps-script.js`.
6. Click `Save`.
7. Click `Deploy > New deployment`.
8. Select type: `Web app`.
9. Set:
   - Execute as: `Me`
   - Who has access: `Anyone`
10. Click `Deploy`.
11. Google may ask for permission because the script saves data and sends email.
    Approve access using the Gmail account that owns the Sheet.
12. Copy the Web app URL.
13. Open `script.js` and replace:

   `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`

   with your copied Web app URL.

Every successful registration will also send an email to
`a.mistri2004@gmail.com`.

## Upload To GitHub Pages

1. Push these files to your GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings > Pages`.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Click `Save`.
6. GitHub will show your website link after deployment.

## Test

Open your GitHub Pages link, submit the form, then check the Google Sheet.

## After Form Changes

If you already deployed Apps Script before adding `Course` or `Qualification`,
paste the latest `google-apps-script.js` code again and deploy a new version from
`Deploy > Manage deployments > Edit > Version > New version > Deploy`.

The city dropdown is grouped by Indian state/union territory and includes an
`Other` option so students can still register if their exact city is missing.

## Logo

Create or copy your logo image into the `assets` folder and name it exactly:

`Logo.png`
