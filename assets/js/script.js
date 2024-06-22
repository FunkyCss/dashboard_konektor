document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.sidebar-toggle').addEventListener('click', function () {
        const sidebar = document.querySelector('#sidebar');
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            sidebar.style.width = '250px';
        } else {
            sidebar.style.width = '50px';
        }
    });
});
