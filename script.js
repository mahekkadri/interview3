
const searchInput = document.querySelector(".filters input");
const rows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    rows.forEach(function (row) {
        const studentName = row.cells[1].textContent.toLowerCase();

        if (studentName.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

const deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const row = this.closest("tr");

        const studentName = row.cells[1].textContent;

        const confirmDelete = confirm(
            "Do you want to delete " + studentName + "?"
        );

        if (confirmDelete) {
            row.remove();
        }

    });

});

const editButtons = document.querySelectorAll(".edit");

editButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const row = this.closest("tr");

        const studentName = row.cells[1].textContent;
        const rollNo = row.cells[0].textContent;
        const course = row.cells[2].textContent;
        const math = row.cells[3].textContent;
        const science = row.cells[4].textContent;
        const english = row.cells[5].textContent;

        document.querySelectorAll(".form-box input")[0].value = studentName;
        document.querySelectorAll(".form-box input")[1].value = rollNo;

        document.querySelector(".form-box select").value = course;

        document.querySelectorAll(".marks input")[0].value = math;
        document.querySelectorAll(".marks input")[1].value = science;
        document.querySelectorAll(".marks input")[2].value = english;

        alert("Student data loaded for editing.");

    });

});