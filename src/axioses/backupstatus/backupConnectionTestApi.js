import globalAPIAddress from "@/axioses/globalAPIAddress";
import axios from "axios";

/**
 * backup Job API 호출 자바스크립트
 * @param token : string
 * @returns {Promise<boolean>}
 */
const backupJobsApi = async (token) => {

    console.log("backupStatusApi");
    let result = "";

    if (token == null || !token) {
        console.log("false when token is not available")
        return false;
    }

    const bearerAccessToken = "Bearer " + token;

    // Job List Get
    await axios.get(globalAPIAddress + '/backup-reports/test', {
        headers: {
            'Authorization': bearerAccessToken,
        }
    }).then((res) => {
        if (res.data !== null) {
            result = res.data;
        } else {
            console.log("fail");
        }
    })

    return result;
}

export default backupJobsApi;