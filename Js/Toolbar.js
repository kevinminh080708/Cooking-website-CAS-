// JavaScript code to inject HTML content into the existing page

// Function to inject HTML content
function injectHtmlContent() {
    // Define the HTML content you want to inject
    const newContent = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>search</title>
    <link rel="stylesheet" href="/Css/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body>
</head>
<body>
    <div class="topbar">
                <a href="/Public/index.html">Home</a>
                <a href="/Html/catergories.html">Catergories</a>
                <a href="/Html/specificrecipe.html">Specific Recipe</a>
                <a href="/Html/about.html">About</a>
                <a href="/Html/faq.html">FaQ</a>
                <a href="/Html/helpandservice.html">Help service</a>               
                <img class="logo " src="../picture/weblogo.png" alt="logo">
                <div class="search">
                    <form>
                        <input type="text" name="" placeholder="Search. . . ">
                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>

             </div>
    </body>
</html>
    `;

    // Find the placeholder element in the document
    const contentPlaceholder = document.getElementById('toolbar');

    // Inject the new HTML content into the placeholder
    contentPlaceholder.innerHTML = newContent;
}

// Run the function after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', injectHtmlContent);
