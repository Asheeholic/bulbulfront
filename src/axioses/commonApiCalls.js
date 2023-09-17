import globalAPIAddress from "@/axioses/globalAPIAddress";
import axios from "axios";

/**
 * API 호출을 위한 것
 * @param token : token String
 * @param url : url String (ex: /members/test)
 * @param method : method String (ex: get, post)
 * @param data : data Object (ex: {id: "test", pw: "test"})
 * @returns {Promise<boolean>}
 */
const apiCall = async (token, url, method, data) => {

    let result = false;

    if (token == null || !token) {
        console.log("false when token is not available")
        return false;
    }

    const bearerAccessToken = "Bearer " + token;

    if (method === "get") {
        await axios.get(globalAPIAddress + url, {
            headers: {
                'Authorization': bearerAccessToken,
            }
        }).then((res) => {
            result = res.data;
        })

    } else if (method === "post") {
        const contentType = data === null ? 'application/json' : 'multipart/form-data';
        await axios.post(globalAPIAddress + url, data, {
            headers: {
                'Authorization': bearerAccessToken,
                'Content-Type': contentType
            }
        }).then((res) => {
            if (res.data === "success") {
                // console.log("success");
                result = true;
            } else {
                // console.log("fail");
                result = false;
            }
        })
    }

    return result;
}

export default apiCall;