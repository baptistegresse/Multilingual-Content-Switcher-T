# Multilingual Content Switcher

This project enables users to easily switch between different languages on a webpage and dynamically update content. The primary focus is on organizing translations in JSON files, where each key represents the ID of a text element on the webpage, and the values are the corresponding translations in each language.

## Usage:

1. Open `index.html` in a web browser.

2. The webpage will automatically detect the language previously selected by the user. If none is found, it defaults to the browser's language or the first language in the list of supported languages.

3. Use the "Language" dropdown to change the language.

4. The content on the page will update dynamically based on the selected language.

## Files:

### 1. index.html

- The main HTML file containing the structure of the webpage.
- Includes a dropdown for language selection and an empty content paragraph.

### 2. language.js

- A JavaScript file linked to the HTML.
- Listens for changes in the language dropdown.
- Fetches language-specific content from JSON files using the `changeLanguage` function.
- Dynamically updates the content on the webpage with the retrieved data using the `updateContent` function.

### 3. localStorageHandler.js

- A JavaScript file linked to the HTML.
- Detects the previously selected language from localStorage.
- If none is found, defaults to the browser's language or the first language in the list of supported languages.
- Initializes the page with the detected or default language.

### 4. translate_en.json, translate_es.json, translate_fr.json

- JSON files containing language-specific content.
- The structure of each file is like:

    ```json
    {
        "content": "Life is a dream, make it a reality."
    }
    ```

    Replace the values with translations for the corresponding IDs on your webpage.

### 5. Update `updateContent` Function:

- In the `updateContent` function within `language.js`, utilize `getElementById` for each text element on your page.
- Update content for each element based on retrieved data from the JSON file.

  ```javascript
  function updateContent(data) {
      const contentElement = document.getElementById("content");
      contentElement.textContent = data.content;
  }```

Add more lines for additional text elements on your page.

This project is designed for straightforward scalability. Create new IDs for text elements, update JSON files, and add corresponding getElementById lines in the updateContent function for seamless integration of new translations.
