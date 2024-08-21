import { register } from "./auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const submitButton = document.getElementById('sign-up-button');

    const toggleSubmitButton = () => {
        submitButton.disabled = !form.checkValidity();
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const id_role = ''; // Can be set dynamically if needed
        const id_penginputan = ''; // Can be set dynamically if needed
        const nama = `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const phone_number = document.getElementById('phone-number').value;
        const IsActive = document.getElementById('agree').checked.toString();

        console.log('Collected Data:', {
            id_role,
            id_penginputan,
            nama,
            username,
            password,
            email,
            phone_number,
            IsActive
        });

        try {
            const result = await register(id_role, id_penginputan, nama, username, password, email, phone_number, IsActive);
            console.log('Registration successful:', result);
            form.reset();

            Swal.fire({
                title: 'Success!',
                text: 'Registration was successful.',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.href = 'index.html'
            });
        } catch (error) {
            console.error('Registration failed:', error);

            Swal.fire({
                title: 'Error!',
                text: 'Registration failed. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    form.addEventListener('input', toggleSubmitButton);
    form.addEventListener('submit', handleFormSubmit);
});
