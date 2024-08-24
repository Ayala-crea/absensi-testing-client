import { login } from "./auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLogin');
    const submitData = document.getElementById('submit-data');

    const toggleSubmitButton = () => {
        submitData.disabled = !form.checkValidity();
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const username = form.elements.username.value;
        const password = form.elements.password.value;

        try {
            await login(username, password);
            console.log('Login successful');
            form.reset();
            Swal.fire({
                title: 'Success!',
                text: 'Login was successful.',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.href = '../../../admin/admin.html';
            });
        } catch (error) {
            console.error('Login failed:', error);
            form.reset();
            Swal.fire({
                title: 'Error!',
                text: 'Login failed. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.href = 'login.html';
            });
        }
    };

    form.addEventListener('input', toggleSubmitButton);
    form.addEventListener('submit', handleFormSubmit);
});
