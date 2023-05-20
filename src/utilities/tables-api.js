import sendRequest from "./send-request";
const BASE_URL = '/api/tables';

export async function getAllTables() {
  return sendRequest(BASE_URL);
}