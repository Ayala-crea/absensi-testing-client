import { getBearerJSON } from "../api.js";
import { endpointGetDataByIdAdmin } from "../api.js";

export const getAllData = async () => {
    try {
        const response = await getBearerJSON(endpointGetDataByIdAdmin, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error getting data", error);
        throw new Error("Error getting data");
    }
}