import sendRequest from "./send-request";
const BASE_URL = '/api/goldenspoons';

export async function getAllGoldenspoons() {
  return sendRequest(BASE_URL);
}