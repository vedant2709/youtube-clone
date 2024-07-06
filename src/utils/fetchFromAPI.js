import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": '9a075b31a6mshcf946ed8a384763p1621f0jsn60a419664a93',
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}
