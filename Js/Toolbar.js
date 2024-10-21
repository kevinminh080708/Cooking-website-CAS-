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
</head>
<body>
    <nav>
        <ul class="topbar">
                <li onclick=showsidebar()><a href="menu"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#faebd7"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></svg></a></li>
                <a href="/Public/index.html" class="hideonmobile">Home</a>
                <a href="/Html/catergories.html" class="hideonmobile">Catergories</a>
            
                <a href="/Html/about.html" class="hideonmobile">About</a>
                <a href="/Html/faq.html" class="hideonmobile">FaQ</a>
                    
                <img class="logo " src="../picture/weblogo.png" alt="logo">
                <div class="search">
                    <form>
                        <input type="text" name="" placeholder="Search. . . ">
                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
        </ul>
        <ul class="sidebar">
                <li onclick=hidesidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#010d1c"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <a href="/Public/index.html">Home</a>
                <a href="/Html/catergories.html">Catergories</a>
                <a href="/Html/specificrecipe.html">Specific Recipe</a>
                <a href="/Html/about.html">About</a>
                <a href="/Html/faq.html">FaQ</a>
                <a href="/Html/helpandservice.html">Help service</a>
        </ul>
    </nav>
    <script>
         function showsidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flew'
        }
        function hidesidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }
    </script>
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
