import type { Degree } from "@/api/types";

const createDegree = (degree: Partial<Degree> = {}): Degree => ({
  id: 1,
  degree: "Master's",
  ...degree,
});

export default createDegree;
