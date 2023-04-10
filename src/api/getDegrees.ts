import axios from "axios";

import type { Degree } from "@/api/types";

const getDegrees = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const { data } = await axios.get<Degree[]>(`${baseUrl}/degrees`);
  return data;
};

export default getDegrees;
