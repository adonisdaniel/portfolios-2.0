import { type APISpaceXResponse, type Doc } from "../types/api";

export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          data_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  const { docs: launches } = (await res.json()) as APISpaceXResponse;

  console.log("data", launches);
  return launches;
};

export const getLaunchById = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await res.json()) as Doc;

  console.log("data", launch);
  return launch;
};
