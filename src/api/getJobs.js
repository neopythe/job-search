import axios from "axios";

const getJobs = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const { data } = await axios.get(`${baseUrl}/jobs`);
  return data;
};

export default getJobs;
