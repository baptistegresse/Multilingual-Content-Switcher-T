document.getElementById("languageSelect").addEventListener("change", function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

function changeLanguage(lang) {
    fetch(`translate/translate_${lang}.json`)
        .then(response => response.json())
        .then(data => updateContent(data));
}

function updateContent(data) {
    const contentElement = document.getElementById("content");
    contentElement.textContent = data.content;
}