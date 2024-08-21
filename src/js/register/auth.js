import { postJSON } from "../api.js";
import { endpointRegister } from '../api.js';

export const register = async (id_role, id_penginputan, nama, username, password, email, phone_number, IsActive) => {
    if (!id_role) id_role = 1;
    if (!id_penginputan) id_penginputan = Math.floor(Math.random() * 9000) + 1000; // Generates a random 4-digit number

    const activeAkun = IsActive === 'true';

    try {
        const response = await postJSON(`${endpointRegister}`, {
            body: JSON.stringify({
                id_role: id_role,
                id_penginputan: id_penginputan,
                Nama: nama,
                Username: username,
                Password: password,
                Email: email,
                phone_number: phone_number,
                IsActive: activeAkun
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.json();
    } catch (error) {
        console.error('Error during registration:', error);
        throw new Error('Registration failed');
    }
};
