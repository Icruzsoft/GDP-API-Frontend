import axios from "axios";

export const requestOTP = async (email, isReset) => {
    const data = {
        email: email,
        isReset: isReset
    };

    try {
        const response = await axios.post('http://localhost:5153/api/User/requestOtp', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export const loginOtp = async (email, otp) => {
    const data = {
        email: email,
        password: otp
    };

    try {
        const response = await axios.post('http://localhost:5153/api/User/login?otp=true', data);
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const resetPassword = async (newPassword, confirmPassword, token) => {
    const data = {
        newPassword: newPassword,
        confirmPassword: confirmPassword
    };
    const config = {
        headers: { Authorization: `bearer ${token}` }
    };

    try {
        const response = await axios.post('http://localhost:5153/api/User/resetPassword', data, config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};




