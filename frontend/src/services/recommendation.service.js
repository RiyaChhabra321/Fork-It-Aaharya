import api from "./api";

export const getRecommendations = async ({ mood, craving }) => {
  const res = await api.post("/recommendations", {
    mood,
    craving,
  });

  return res.data;
};
