import axios from "axios";

import type { Job } from "@/api/types";

const getJobs = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const { data } = await axios.get<Job[]>(`${baseUrl}/jobs`);
  return data;
};

export default getJobs;
