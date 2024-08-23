import { getAllData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".data-table tbody");
    const message = document.getElementById("message"); // Pastikan ID ini ada jika ingin digunakan
    const paginationControls = document.getElementById("pagination-controls");

    const rowsPerPage = 10;  // Jumlah data per halaman
    let currentPage = 1;
    let data = [];

    const renderTable = (dataSubset) => {
        table.innerHTML = ""; // Kosongkan tabel sebelum render ulang

        dataSubset.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1 + (currentPage - 1) * rowsPerPage}</td>
                <td>${item.full_name}</td>
                <td>${item.status}</td>
                <td>${item.class}</td>
                <td>${item.npk_or_npm}</td>
                <td>${item.phone_number}</td>
                <td>${new Date(item.created_at).toLocaleDateString()}</td>
                <td>${item.is_active ? "Aktif" : "Tidak Aktif"}</td>
                <td>
                    <button class="edit-button" data-id="${item.id}">Edit</button>
                    <button class="delete-button" data-id="${item.id}">Delete</button>
                </td>
            `;
            table.appendChild(row);
        });
    };

    const setupPagination = (totalRows) => {
        paginationControls.innerHTML = "";  // Kosongkan kontrol pagination sebelum render ulang
        const totalPages = Math.ceil(totalRows / rowsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.className = `page-button ${i === currentPage ? "active" : ""}`;
            pageButton.addEventListener("click", () => {
                currentPage = i;
                updateTable();
            });
            paginationControls.appendChild(pageButton);
        }
    };

    const updateTable = () => {
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const dataSubset = data.slice(start, end);
        renderTable(dataSubset);
    };

    const fetchData = async () => {
        try {
            data = await getAllData();
            setupPagination(data.length);
            updateTable();
        } catch (error) {
            console.error("Fetching data failed:", error);
            message.innerHTML = "Fetching data failed. Please try again.";
        }
    };

    fetchData();
});
