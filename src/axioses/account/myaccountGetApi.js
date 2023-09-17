import apiCall from "@/axioses/commonApiCalls";

const getUserInfo = async (token) => {
    let result = false;
    console.log("get-user-info")
    result = await apiCall(
        token,
        '/members/get-user-info',
        'get',
        null
    );

    return result;
}

export default getUserInfo;
