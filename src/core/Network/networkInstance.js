import axios from "axios";

const networkInstance = axios.create({
    baseURL: "https://travelstore-5048a.firebaseio.com",
    timeout: 10000
    // headers: {"X-Custom-Header": "foobar"}
});

export default networkInstance;