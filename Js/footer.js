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
          <li class="menu__item"><a class="menu__link" href="/Public/index.html">Home</a></li>
          <li class="menu__item"><a class="menu__link" href="/Html/catergories.html">Catergories</a></li>
          <li class="menu__item"><a class="menu__link" href="/Html/specificrecipe.html">Specific Recipe</a></li>
          <li class="menu__item"><a class="menu__link" href="/Html/about.html">About</a></li>
          <li class="menu__item"><a class="menu__link" href="/Html/faq.html">Faq</a></li>
            <li class="menu__item"><a class="menu__link" href="/Html/helpandservice.html">Help Service</a></li>
        </ul>
        <p>&copy;2024 YCC team | All Rights Reserved</p>
      
    `;
}

createFooter();