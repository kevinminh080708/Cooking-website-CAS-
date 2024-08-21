// JavaScript code to inject HTML content into the existing page

// Function to inject HTML content
function injectHtmlContent() {
    // Define the HTML content you want to inject
    const newContent = `
    <div class="topbar">
                <a href="/Public/index.html">Home</a>
                <a href="/Html/catergories.html">Catergories</a>
                <a href="/Html/specificrecipe.html">Specific Recipe</a>
                <a href="/Html/about.html">About</a>
                <a href="/Html/faq.html">FaQ</a>
                <a href="/Html/helpandservice.html">Help service</a>
             </div>
    `;

    // Find the placeholder element in the document
    const contentPlaceholder = document.getElementById('toolbar');

    // Inject the new HTML content into the placeholder
    contentPlaceholder.innerHTML = newContent;
}

// Run the function after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', injectHtmlContent);
