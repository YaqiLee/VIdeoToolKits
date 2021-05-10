import axios from "../config/axios.config";

export const getStreams = (url) => {
  return axios.get("/probe/streams", {
    params: {
      url
    }
  })
}