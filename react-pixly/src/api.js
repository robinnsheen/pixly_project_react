import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class PixlyApi {
  static async getPictures() {
    let res = await axios.get(`${BASE_URL}/pictures`);
    return res.pictures;
  }

  static async addPicture(data) {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    let res = await axios.post(`${BASE_URL}/upload`, data, config);
    return res;
  }
}


export default PixlyApi;
