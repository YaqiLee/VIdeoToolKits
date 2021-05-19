import axios from "../config/axios.config";

export const getStreams = (url) => {
  return axios.get("/probe/streams", {
    params: {
      url,
    },
  });
};

export const startTransform = (url) => {
  return axios.get("/video/transform", {
    params: {
      url,
    },
  });
};

export const endTransform = () => {
  return axios.get("/video/transformend");
}