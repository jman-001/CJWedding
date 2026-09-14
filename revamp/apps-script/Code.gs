// ======================================================
// Wedding RSVP — Apps Script Web App
// Pegar este código completo en Extensiones > Apps Script
// del Sheet
//
// UNA sola hoja llamada "Invitados" con columnas:
// A: Código | B: Invitado | C: Asistencia | D: Welcome
// Cocktail | E: Recepción | F: Menú | G: Bus de regreso |
// H: Cóctel | I: Enviado | J: Fecha envío
//
// Las columnas C-J empiezan vacías; se llenan/actualizan
// cuando el invitado confirma sus respuestas.
// ======================================================

const SHEET_NAME = "Invitados";

const RESPONSE_COLUMNS = [
  "attendance",
  "welcomeCocktail",
  "reception",
  "meal",
  "returnBus",
  "cocktail"
];

// Primera columna de respuestas (C = 3), y cuántas ocupa
const FIRST_RESPONSE_COL = 3;
const RESPONSE_COL_COUNT = RESPONSE_COLUMNS.length; // 6 => C..H
const SUBMITTED_COL = FIRST_RESPONSE_COL + RESPONSE_COL_COUNT; // I = 9
const SUBMITTED_AT_COL = SUBMITTED_COL + 1;                    // J = 10


// ------------------------------------------------------
// GET: devuelve los invitados de un código, con sus
// respuestas ya guardadas si las hay (para poder recargar
// una invitación ya contestada).
// ------------------------------------------------------

function doGet(e) {

  const code = (e.parameter.code || "").trim().toUpperCase();

  if (!code) {

    return jsonResponse({ found: false });

  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  if (!sheet) {

    return jsonResponse({ found: false });

  }

  const rows = sheet.getDataRange().getValues();

  const guests = [];

  for (let i = 1; i < rows.length; i++) {

    const row = rows[i];

    if (String(row[0]).trim().toUpperCase() !== code) {

      continue;

    }

    const responses = {};

    RESPONSE_COLUMNS.forEach(function (key, index) {

      responses[key] = parseCell(row[FIRST_RESPONSE_COL - 1 + index]);

    });

    guests.push({
      name: row[1],
      responses: responses,
      submitted: row[SUBMITTED_COL - 1] === true
    });

  }

  if (guests.length === 0) {

    return jsonResponse({ found: false });

  }

  const submitted = guests.some(function (guest) {

    return guest.submitted;

  });

  return jsonResponse({ found: true, code: code, guests: guests, submitted: submitted });

}


// ------------------------------------------------------
// POST: actualiza (no agrega) la fila de cada invitado con
// sus respuestas confirmadas.
// ------------------------------------------------------

function doPost(e) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  if (!sheet) {

    return jsonResponse({ result: "error", message: "Sheet 'Invitados' not found" });

  }

  const data = JSON.parse(e.postData.contents);

  const rows = sheet.getDataRange().getValues();

  data.guests.forEach(function (guest) {

    const rowIndex = findGuestRow(rows, data.invitationCode, guest.name);

    if (rowIndex === -1) {

      // Invitado no está en la lista maestra: se ignora
      // (evita que cualquiera invente nombres nuevos)
      return;

    }

    const sheetRow = rowIndex + 1; // getRange es 1-based

    const values = RESPONSE_COLUMNS.map(function (key) {

      return guest.responses[key];

    });

    sheet.getRange(sheetRow, FIRST_RESPONSE_COL, 1, RESPONSE_COL_COUNT)
      .setValues([values]);

    sheet.getRange(sheetRow, SUBMITTED_COL, 1, 2)
      .setValues([[true, new Date()]]);

  });

  return jsonResponse({ result: "success" });

}


// ------------------------------------------------------
// Helpers
// ------------------------------------------------------

function findGuestRow(rows, code, name) {

  for (let i = 1; i < rows.length; i++) {

    const rowCode = String(rows[i][0]).trim().toUpperCase();
    const rowName = String(rows[i][1]).trim();

    if (rowCode === code && rowName === name.trim()) {

      return i;

    }

  }

  return -1;

}

function parseCell(value) {

  return value === "" ? null : value;

}

function jsonResponse(obj) {

  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);

}
