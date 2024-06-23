document.addEventListener("DOMContentLoaded", function() {
    // Sidebar toggle functionality
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');

    toggleButton.addEventListener('click', function() {
        if (sidebar.classList.contains('narrow')) {
            sidebar.classList.remove('narrow');
            setTimeout(() => {
                sidebar.classList.add('expand');
            }, 300); // Adjust timing as needed
        } else {
            sidebar.classList.remove('expand');
            setTimeout(() => {
                sidebar.classList.add('narrow');
            }, 100); // Delay to start collapsing after other transitions have begun
        }
    });
});
