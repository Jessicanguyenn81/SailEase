import sendRequest from "./send-request";
const BASE_URL = '/api/restaurants';

export async function getAllRestaurants() {
  return sendRequest(BASE_URL);
}