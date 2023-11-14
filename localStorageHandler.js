document.addEventListener('DOMContentLoaded', function () {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedLanguage) {
        document.getElementById('languageSelect').value = savedLanguage;
        changeLanguage(savedLanguage);
    }
});
