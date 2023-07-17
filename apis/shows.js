import instance from ".";

const getShows = async () => {
  const res = await instance.get("web?date=2023-07-10&country=US");
  return res.data;
};

export { getShows };
