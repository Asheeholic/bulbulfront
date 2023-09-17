import globalAPIAddress from "@/axioses/globalAPIAddress";
import axios from "axios";

/**
 * backup API 호출 자바스크립트
 * @param token : string
 * @param data : FormData 형태
 * @returns {Promise<boolean>}
 */
const backupApi = async (token, data) => {

    console.log("backupApi");
    let result = false;

    if (token == null || !token) {
        console.log("false when token is not available")
        return false;
    }

    const bearerAccessToken = "Bearer " + token;

    await axios.post(globalAPIAddress + '/backup-files/upload', data, {
        headers: {
            'Authorization': bearerAccessToken,
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        if (res.data === "success") {
            console.log("success");
            result = true;
        } else {
            console.log("fail");
        }
    })

    return result;
}

export default backupApi;