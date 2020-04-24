import api from '../../../public/config.js';

const apiBaseUrl = (api.apiBaseUrl.includes("localhost")) ? api.apiBaseUrl.replace("localhost", location.host) : api.apiBaseUrl;

const apiEndPoints = {
    host_url: apiBaseUrl.replace("api/", ""),
    login: apiBaseUrl + "login",
    logout: apiBaseUrl + "logout",
    sign_up: apiBaseUrl + "users/create",
    get_categories: apiBaseUrl + "categories"
}

export default apiEndPoints;