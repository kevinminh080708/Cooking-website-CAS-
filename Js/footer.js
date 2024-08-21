const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
          <li class="social-icon__item"><a class="social-icon__link" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a></li>
        </ul>
        <ul class="menu">
          <li class="menu__item"><a class="menu__link" href="/codeiseasyweb/public/index.html">Home</a></li>
          <li class="menu__item"><a class="menu__link" href="/codeiseasyweb/public/about.html">Catergories</a></li>
          <li class="menu__item"><a class="menu__link" href="/codeiseasyweb/public/htmlpage.html">Specific Recipe</a></li>
          <li class="menu__item"><a class="menu__link" href="/codeiseasyweb/public/csspage.html">About</a></li>
          <li class="menu__item"><a class="menu__link" href="/codeiseasyweb/public/jspage.html">Faq</a></li>
            <li class="menu__item"><a class="menu__link" href="/codeiseasyweb/public/jspage.html">Help Service</a></li>
        </ul>
        <p>&copy;2024 JCC team | All Rights Reserved</p>
      
    `;
}

createFooter();