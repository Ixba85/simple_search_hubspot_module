function searchAndHighlight(event) {
    // Prevent the default behavior (in case the button is inside a form)
    if (event) event.preventDefault();

    const searchInput = document.getElementById('searchInput').value;

    // If the search input is empty, alert the user
    if (searchInput.trim() === "") {
        alert("Please enter a search query.");
        return;
    }

    // Clear previous highlights before performing a new search
    clearHighlights();

    // Create a regular expression to match the search query (case-insensitive)
    const regExp = new RegExp(searchInput, "gi");

    // Call the highlightMatches function to highlight text in the body of the document
    highlightMatches(document.body, regExp);
}

function clearHighlights() {
    const highlights = document.querySelectorAll('mark.highlight');
    highlights.forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
    });
}

function highlightMatches(element, regExp) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(child => highlightMatches(child, regExp)); // Recursive call for each child
    } else if (element.nodeType === Text.TEXT_NODE) {
        const parent = element.parentNode;
        const replacedText = element.textContent.replace(regExp, match => `<mark class="highlight">${match}</mark>`);
        const newElement = document.createElement("span");
        newElement.innerHTML = replacedText;
        parent.replaceChild(newElement, element);
    }
}

// Ensure the click event is handled properly without jumping
document.getElementById('searchBtn').addEventListener('click', function(event) {
    searchAndHighlight(event);
});
