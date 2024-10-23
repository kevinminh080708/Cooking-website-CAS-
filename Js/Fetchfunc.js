// /Js/Fetchfunc.js
import { db } from './firebase-config.js'; // Ensure this is correctly pointing to your Firebase config
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async () => {
    const articlesContainer = document.getElementById('articlesContainer');
    try {
        const articlesSnapshot = await getDocs(collection(db, 'articles'));

        articlesSnapshot.forEach(doc => {
            const article = doc.data();
            const articleItem = document.createElement('div');
            articleItem.className = `item-${articlesContainer.children.length + 1}`;

            articleItem.innerHTML = `
                <a href="${article.link}" class="card">
                    <div class="thumb" style="background-image: url(${article.image});"></div>
                    <article>
                        <h1>${article.title}</h1>
                        <p>${article.description ? article.description : 'No description available.'}</p>
                        <span>${article.author}</span>
                    </article>
                </a>
            `;
            articlesContainer.appendChild(articleItem);
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
});
