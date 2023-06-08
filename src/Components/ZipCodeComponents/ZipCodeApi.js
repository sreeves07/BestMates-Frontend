import axios from "axios"; //search for city and state that matches zipcode entered by roommate

const Url = "//api.zippopotam.us/us/";

const ZipApi = {
  /**
   * @param {String} zipCode
   * @return {Object}
   */
  search: async zipCode => {
    return axios
      .get(Url + zipCode)
      .then(res => {
        return res.data;
      })
      .catch(() => {
        return null;
      });
  }
};

export default ZipApi;
