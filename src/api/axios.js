import axios from "axios";

export default axios.create({
    baseURL: 'https://giropay.xyz/api/v1/giro-app/'
})