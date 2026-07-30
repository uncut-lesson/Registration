const SHEET_NAME = "Registrations";
const ADMIN_EMAIL = "a.mistri2004@gmail.com";

function doPost(e) {
  try {
    const sheet = getSheet();
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();

    sheet.appendRow([
      timestamp,
      data.course || "",
      data.name || "",
      data.gmail || "",
      data.whatsapp || "",
      data.state || "",
      data.city || "",
      data.qualification || "",
    ]);

    sendRegistrationEmail(data, timestamp);

    return createResponse({ status: "success" });
  } catch (error) {
    return createResponse({ status: "error", message: error.message });
  }
}

function sendRegistrationEmail(data, timestamp) {
  const subject = "New Course Registration";
  const body = [
    "New registration received.",
    "",
    "Timestamp: " + timestamp,
    "Course: " + (data.course || ""),
    "Name: " + (data.name || ""),
    "Gmail: " + (data.gmail || ""),
    "WhatsApp Number: " + (data.whatsapp || ""),
    "State: " + (data.state || ""),
    "City: " + (data.city || ""),
    "Qualification: " + (data.qualification || ""),
  ].join("\n");

  MailApp.sendEmail(ADMIN_EMAIL, subject, body);
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Course",
      "Name",
      "Gmail",
      "WhatsApp Number",
      "State",
      "City",
      "Qualification",
    ]);
  }

  return sheet;
}

function createResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
