import axios from 'axios';

const API_KEY = '9yJNQ3wCwDQTX1xpNuFmpDNEoMMkTT3ev6HmCltr5pR1HM7PtqravsWq';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
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
  return response.data;
};
