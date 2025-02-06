# Search Highlight and Scroll

This project provides a simple search module that allows users to search for text on a webpage, highlight matching words, and smoothly scroll to the first occurrence. The implementation includes HTML, CSS, and JavaScript, with HubSpot module integration.

## Features

- **Search and Highlight:** Users can enter a search term, and all matches on the page will be highlighted.
- **Smooth Scrolling:** Automatically scrolls to the first match found.
- **Clear Highlights:** Removes previous highlights when a new search is performed.
- **Responsive Design:** Adjusts to different screen sizes (mobile, tablet, and desktop).
- **HubSpot Module Integration:** Supports dynamic content using HubSpot module fields.

## Technologies Used

- HTML
- CSS
- JavaScript
- HubSpot Modules (HUBL)

## Setup and Usage

### Installation

To use this module in your HubSpot project, follow these steps:

1. Copy the `module.html`, `module.css`, and `module.js` files into your HubSpot module structure.
2. Add the provided JSON configuration to define module fields.

### How to Use

#### Frontend Integration

- Users enter text in the search bar.
- Click the "Search" button to highlight matches and scroll to the first occurrence.
- The script removes previous highlights when performing a new search.

#### Customization

- Modify `module.css` to adjust styling.
- Change placeholder text and button labels using HubSpot module fields.
- Adjust the JavaScript logic in `module.js` if needed.

## HubSpot Module Configuration

### JSON Fields

The module includes the following fields:

- `title_menu`: Text field for the search module title.
- `input.placeholder`: Placeholder text for the search input field.
- `input.button`: Label for the search button.

## Code Overview

### HTML (`module.html`)

- Defines the search input and button.
- Uses HubSpot inline text fields for dynamic content.
- Includes JavaScript logic to handle highlighting and scrolling.

### CSS (`module.css`)

- Provides responsive styles for different screen sizes.
- Defines highlight styles and UI adjustments.

### JavaScript (`module.js`)

- Handles search, highlighting, and scrolling.
- Clears previous highlights before new searches.

## Demo

To test the functionality:

1. Enter a search term in the input field.
2. Click the "Search" button.
3. Observe highlighted text and automatic scrolling.
4. Perform another search to see highlights update.

## License

This project is open-source and available under the MIT License.

## Contributions

Feel free to contribute by submitting a pull request or reporting issues.

## Contact

For any questions, reach out via GitHub issues.

