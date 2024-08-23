import { uploadData } from "./upload.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("upload-form");
    const input = document.getElementById("file-input");
    const message = document.getElementById("message"); // Pastikan ID ini ada jika ingin digunakan
    
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
    
        const file = input.files[0];
        if (!file) {
            alert("Please select a file");
            return;
        }
    
        try {
            alert("Uploading file...");
            const data = await uploadData(file);
            Swal.fire({
                title: 'Success!',
                text: 'File uploaded successfully.',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.href = 'form-data.html';
            });
        } catch (error) {
            console.error('Uploading failed:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Uploading failed. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    });
});
