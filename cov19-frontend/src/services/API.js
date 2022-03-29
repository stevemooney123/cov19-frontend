import axios from 'axios'
import configData from "../config/config.json";

export default axios.create({
    baseURL: configData.BASE_URL
});