document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');

    toggleButton.addEventListener('click', function() {
        if (sidebar.classList.contains('narrow')) {
            sidebar.classList.remove('narrow');
            // Delay the addition of text and other elements to allow width to transition first
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


    document.addEventListener('DOMContentLoaded', function () {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    
        function togglePasswordVisibility(toggleId, inputId) {
            const toggle = document.getElementById(toggleId);
            const input = document.getElementById(inputId);
            
            toggle.addEventListener('click', function () {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
                this.classList.toggle('active');
            });
        }
    
        togglePasswordVisibility('toggleConsumerKey', 'consumerKey');
        togglePasswordVisibility('toggleConsumerSecret', 'consumerSecret');
    
        // Form validation
        const form = document.getElementById('projectForm');
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });