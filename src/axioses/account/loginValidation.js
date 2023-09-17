import apiCall from "@/axioses/commonApiCalls";

const validation = async (token) => {
    let result = false;
    console.log("validation")
    result = await apiCall(
        token,
        '/members/test',
        'post',
        null
    );

    return result;
}

export default validation;


// import globalAPIAddress from "@/axioses/globalAPIAddress";
// // import axios from "axios";
// //
// // const validation = async (token) => {
// //
// //     // console.log("validation");
// //     let result = false;
// //
// //     if (token == null || !token) {
// //         console.log("false when token is not available")
// //         return false;
// //     }
// //
// //     const bearerAccessToken = "Bearer " + token;
// //
// //     await axios.post(globalAPIAddress + '/members/test', null, {
// //         headers: {
// //             'Authorization': bearerAccessToken,
// //         }
// //     }).then((res) => {
// //         if (res.data === "success") {
// //             // console.log("success");
// //             result = true;
// //         } else {
// //             // console.log("fail");
// //             result = false;
// //         }
// //     })
// //
// //     return result;
// // }
