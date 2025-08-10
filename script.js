// Toggle Login/Register button for mobile and show modal
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Login/Register text for mobile button
    const authToggleBtn = document.getElementById('authToggleBtn');
    const authToggleText = document.getElementById('authToggleText');
    let isLogin = true;
    if (authToggleBtn && authToggleText) {
        authToggleBtn.addEventListener('click', () => {
            isLogin = !isLogin;
            authToggleText.textContent = isLogin ? 'Login' : 'Register';
        });
    }
    // Functionality for age box selection
    const ageBoxes = document.querySelectorAll('.age-box');
    ageBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Remove 'active' class from all boxes
            ageBoxes.forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked box
            box.classList.add('active');
        });
    });

    // Functionality for time filter selection
    const timeFilters = document.querySelectorAll('.time-filter-box');
    timeFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove 'active' class from all filters
            timeFilters.forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked filter
            filter.classList.add('active');
        });
    });
});