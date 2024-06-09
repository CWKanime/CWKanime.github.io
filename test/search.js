document.addEventListener("DOMContentLoaded", function() {
    const mobileSearchIcon = document.getElementById('mobile-search-icon');
    const mobileSearchPopup = document.getElementById('mobile-search-popup');
    const mobileSearchInput = document.getElementById('mobile-search-input');
    const mobileSearchIconInner = document.getElementById('mobile-search-icon-inner');
    const semiTransparentContent = document.getElementById('semi-transparent-content');

    const desktopSearchIcon = document.getElementById('desktop-search-icon');
    const desktopSearchInput = document.getElementById('desktop-search-input');


    mobileSearchIcon.addEventListener('click', function() {
        mobileSearchPopup.style.display = 'block';
        mobileSearchInput.focus();
    });


    mobileSearchPopup.addEventListener('click', function(event) {
        if (event.target === mobileSearchPopup || event.target === semiTransparentContent) {
            mobileSearchPopup.style.display = 'none';
        }
    });


    mobileSearchIconInner.addEventListener('click', function() {
        performSearch(mobileSearchInput.value);
    });


    mobileSearchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch(mobileSearchInput.value);
        }
    });


    desktopSearchIcon.addEventListener('click', function() {
        performSearch(desktopSearchInput.value);
    });


    desktopSearchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch(desktopSearchInput.value);
        }
    });


    function performSearch(query) {
        window.location.href = '/test/shop.html';
    
        if (mobileSearchPopup.style.display === 'block') {
            mobileSearchPopup.style.display = 'none';
        }
    }
    
});
