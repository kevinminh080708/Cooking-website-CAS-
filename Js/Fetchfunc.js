// /Js/fetchfunc.js
import { db } from '/Js/firebase-config.js'; // Import the Firestore instance
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

async function fetchArticles() {
    const articlesContainer = document.getElementById('articlesContainer');
    articlesContainer.innerHTML = ''; // Clear the container before fetching new articles

    try {
        const querySnapshot = await getDocs(collection(db, "articles")); // Fetch articles from Firestore
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                const article = doc.data(); // Get article data
                const articleItem = document.createElement('div');
                articleItem.className = 'article-item'; // Add a class for styling

                // Set inner HTML with article data
                articleItem.innerHTML = `
                    <a href="${article.link}" class="card" target="_blank">
                        <div class="thumb" style="background-image: url(${article.image});"></div>
                        <article>
                            <h1>${article.title}</h1>
                            <p>${article.description || 'No description available.'}</p>
                            <span>Author: ${article.author}</span>
                        </article>
                    </a>
                `;
                articlesContainer.appendChild(articleItem); // Append the article item to the container
            });
        } else {
            articlesContainer.innerHTML = '<p>No articles found.</p>'; // Handle no articles
        }
    } catch (error) {
        console.error('Error fetching articles:', error); // Log any errors
    }
}

// Fetch articles on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchArticles);
