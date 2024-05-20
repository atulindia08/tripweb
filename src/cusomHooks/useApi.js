import axios from 'axios'

export const useApi = (url, body)=>{

    return axios.post(url, body)

}