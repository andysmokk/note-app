import axios from "axios";

axios.defaults.baseURL = "https://quintadb.com/apps/";

const NOTES_ID = process.env.REACT_APP_QUINTADB_NOTES_ID;
const API_KEY = process.env.REACT_APP_QUINTADB_API_KEY;

async function getNotes() {
  try {
    const response = await axios.get(
      `${NOTES_ID}/dtypes/entity/dcGaD_WP9dI498bmk-ASkU.json?rest_api_key=${API_KEY}&amp;view=`,
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

async function addNote({ date, title, text }) {
  console.log({ date, title, text });
  try {
    const note = {
      rest_api_key: API_KEY,
      entity_id: "dcGaD_WP9dI498bmk-ASkU",
      values: {
        ddUmoBcSnlW6BdHIVdQSki: date,
        arEYX6WODdQPZdKmo0W79b: title,
        dcUSoqWPPcWPldG03dH8on: text,
      },
    };
    const response = await axios.post(
      `${NOTES_ID}/dtypes.json?rest_api_key=${API_KEY}`,
      note
    );
    console.log(response);
  } catch (error) {}
}

const api = { getNotes, addNote };

export default api;
