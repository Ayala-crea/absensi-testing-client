import { getBearerJSON } from "../api.js";
import { endpointGetAllData } from "../api.js";

export const getAllData = async () => {
    try {
        const response = await getBearerJSON(endpointGetAllData, {
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