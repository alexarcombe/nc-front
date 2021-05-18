import axios from "axios"

export function submit(url, data) {
  return axios.post(url, data)
}
