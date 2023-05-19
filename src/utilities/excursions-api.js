import sendRequest from "./send-request";
const BASE_URL = '/api/excursions';

export async function getAllExcursions() {
  return sendRequest(BASE_URL);
}