import axios from 'axios';

const request = axios.create({
    baseURL: "https://simple-sosmed-server.ainurrofiq.site",
})

export default request;