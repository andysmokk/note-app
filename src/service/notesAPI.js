import axios from "axios";

axios.defaults.baseURL = "https://quintadb.com.ua/apps/";

const NOTES_ID = process.env.REACT_APP_QUINTADB_NOTES_ID;
const API_KEY = process.env.REACT_APP_QUINTADB_API_KEY;

async function getNotes() {
  try {
    const response = await axios.get(
      `${NOTES_ID}/dtypes/entity/cDW5uIW75mW47dKCo4WRiU.json?rest_api_key=${API_KEY}&amp;view=`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.records);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

const api = { getNotes };

export default api;
