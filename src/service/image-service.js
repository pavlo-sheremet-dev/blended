import axios from 'axios';

const API_KEY = '9yJNQ3wCwDQTX1xpNuFmpDNEoMMkTT3ev6HmCltr5pR1HM7PtqravsWq';
axios.defaults.baseURL = 'https://api.pexels.com/v1/search';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.headers = {
  Authorization: API_KEY,
  Accept: '*/*',
};
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page = 1) => {
  const response = await axios.get('', {
    params: {
      query,
      page,
    },
  });
  console.log(response.data.photos);
  return response.data.photos;
};
