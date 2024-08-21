import { postJSON } from "../api.js";
import { endpointLogin } from "../api.js";

export const login = async (username, password) => {
    try {
        const response = await postJSON(`${endpointLogin}`, {
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        if (response.ok) {
            localStorage.setItem("authToken", result.token);
            localStorage.setItem("nama", result.nama);
            return result;
        } else {
            throw new Error(result.message || "Login failed");
        }
    } catch (error) {
        console.error("Error during Login:", error);
        throw new Error("Login failed");
    }
};
