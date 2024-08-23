import { postBearerJSON } from "../api.js";
import { endpointUploadDataExcel } from "../api.js";

export const uploadData = async (file) => {
    const formData = new FormData();
    formData.append("file", file);  // Pastikan 'file' adalah nama field yang diharapkan server

    try {
        const response = await postBearerJSON(endpointUploadDataExcel, {
            body: formData,  // Jangan tetapkan Content-Type, fetch akan mengatur ini secara otomatis
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error uploading file", error);
        throw new Error("Error uploading file");
    }
};
