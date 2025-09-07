// JavaScript to fetch FAQ data and populate the page
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.getElementById('faq-container');
  
    // Fetch the JSON data
    fetch('json/faq.json')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          // Create the FAQ question element
          const faqElement = document.createElement('div');
          faqElement.classList.add('faq');
  
          const questionElement = document.createElement('div');
          questionElement.classList.add('faq-question');
          questionElement.innerHTML = `
            <span>${item.question}</span>
            <span class="plus">+</span>
          `;
  
          const answerElement = document.createElement('div');
          answerElement.classList.add('faq-answer');
          answerElement.innerHTML = `<p>${item.answer}</p>`;
  
          // Append question and answer to the FAQ element
          faqElement.appendChild(questionElement);
          faqElement.appendChild(answerElement);
  
          // Append the FAQ element to the container
          faqContainer.appendChild(faqElement);
  
          // Add click event to toggle the answer visibility
          questionElement.addEventListener('click', () => {
            answerElement.classList.toggle('open');
            const plusIcon = questionElement.querySelector('.plus');
            plusIcon.textContent = answerElement.classList.contains('open') ? '-' : '+';
          });
        });
      })
      .catch((error) => console.error('Error fetching FAQ data:', error));
  });
  