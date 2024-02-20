
function confirmDelete(event) {
    // Show the modal when the delete button is clicked
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Close modal when the close button is clicked
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Handle confirm delete button click
    const confirmBtn = document.getElementById("confirmDeleteBtn");
    confirmBtn.addEventListener("click", function() {
        const columnToDelete = event.target.closest('.gb-grid-column');
        if (columnToDelete) {
            columnToDelete.remove();
            console.log("Project deletion confirmed.");
        }
        modal.style.display = "none";
    });

    // Handle cancel delete button click
    const cancelBtn = document.getElementById("cancelDeleteBtn");
    cancelBtn.addEventListener("click", function() {
        modal.style.display = "none";
        console.log("Project deletion canceled.");
    });
}

// Get all elements with the class name "gb-button"
const deleteButtons = document.querySelectorAll(".gb-button");

// Add event listener to each delete button
deleteButtons.forEach(button => {
    button.addEventListener("click", confirmDelete);
});

