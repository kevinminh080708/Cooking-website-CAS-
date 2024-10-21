document.addEventListener('DOMContentLoaded', () => {
    fetch('/json/articles.json')
        .then(response => response.json())
        .then(data => {
            const articlesContainer = document.getElementById('articlesContainer');
            data.forEach(article => {
                const articleItem = document.createElement('div');
                articleItem.className = `item-${data.indexOf(article) + 1}`;

                articleItem.innerHTML = `
                    <a href="${article.link}" class="card">
                        <div class="thumb" style="background-image: url(${article.image});"></div>
                        <article>
                            <h1>${article.title}</h1>
                            <p>${article.description}</p>
                            <span>${article.author}</span>
                        </article>
                    </a>
                `;
                articlesContainer.appendChild(articleItem);
            });
        })
        .catch(error => console.error('Error loading articles:', error));
});
