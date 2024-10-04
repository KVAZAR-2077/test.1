
const knopkaVverx = {
    el: document.querySelector(".knopka-vverx"),
    show() {
      this.el.classList.add("knopka-vverx_show");
    },
    hide() {
      this.el.classList.remove("knopka-vverx_show");
    },
    addEventListener() {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 600 ? this.show() : this.hide();
      });
      this.el.onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
  
        this.el.classList.remove("knopka-vverx_show");
        setTimeout(() => this.el.classList.add("knopka-vverx_show"), 500);
      };
    },
  };
  
  knopkaVverx.addEventListener();
  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  
  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  
  //stre 2
  
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
  
    // Элементы текста
    const monRabotiText = document.querySelector(".mon-raboti-text");
    const rabotiUchenikovText = document.querySelector(".raboti-uchenikov-text");
  
    // Анимация текста
    if (scrollY > 400) {
      if (!monRabotiText.classList.contains("visible")) {
        setTimeout(() => {
          monRabotiText.classList.add("visible");
        }, 270);
      }
  
      if (!rabotiUchenikovText.classList.contains("visible")) {
        setTimeout(() => {
          rabotiUchenikovText.classList.add("visible");
        }, 100);
      }
    } else {
      if (monRabotiText.classList.contains("visible")) {
        monRabotiText.classList.remove("visible");
      }
  
      if (rabotiUchenikovText.classList.contains("visible")) {
        rabotiUchenikovText.classList.remove("visible");
      }
    }
  
    // Круги
    // Анимация появления кругов при прокрутке
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      const circles = [".krug1", ".krug2", ".krug3", ".krug4"];
  
      circles.forEach((circle, index) => {
        const circleElement = document.querySelector(circle);
        if (scrollY > 500) {
          if (!circleElement.classList.contains("visible")) {
            circleElement.classList.remove("hidden");
            circleElement.classList.add("visible");
            circleElement.style.animationDelay = `${index * 0.2}s`; // Задержка для более динамичного появления
          }
        } else {
          if (circleElement.classList.contains("visible")) {
            circleElement.classList.remove("visible");
            circleElement.classList.add("hidden");
          }
        }
      });
    });
  
    // Блок с работами
    const block = document.querySelector(".block-smotret-rabot-uch");
    if (scrollY > 400) {
      block.classList.add("show");
    } else {
      block.classList.remove("show");
    }
  
    // Стрелки
    const arrowElements = document.querySelectorAll(
      ".tochka-strelka-smotr1, .tochka-strelka-smotr2, .tochka-strelka-smotr3, .tochka-strelka-smotr4, .tochka-strelka-smotr5, .tochka-strelka-smotr6, .tochka-strelka-smotr7, .tochka-strelka-smotr8, .tochka-strelka-smotr9, .tochka-strelka-smotr10, .tochka-strelka-smotr11, .tochka-strelka-smotr12, .tochka-strelka-smotr13"
    );
  
    if (scrollY > 400) {
      arrowElements.forEach((arrow) => {
        arrow.classList.add("show-strelka");
      });
    } else {
      arrowElements.forEach((arrow) => {
        arrow.classList.remove("show-strelka");
      });
    }
  });
  
  //str3
  
  
  
  
  
  window.addEventListener("scroll", function () {
    const stranica1Str3 = document.querySelector(".stranica1-str3");
    if (window.scrollY > 1000) {
      stranica1Str3.classList.add("show");
    } else {
      stranica1Str3.classList.remove("show");
    }
  });
  
  //otsek 2 str3
  
  window.addEventListener("scroll", function () {
    const vtorayaStranicaStr3 = document.querySelector(".vtoraya-stranica-str3");
    if (window.scrollY > 1000) {
      vtorayaStranicaStr3.classList.add("show");
    } else {
      vtorayaStranicaStr3.classList.remove("show");
    }
  });
  
  const images = document.querySelectorAll(".carousel-img");
  let currentIndex = 0;
  
  function updateCarouselPositions() {
    const leftIndex = (currentIndex - 1 + images.length) % images.length;
    const rightIndex = (currentIndex + 1) % images.length;
  
    images.forEach((img, index) => {
      img.classList.remove(
        "active",
        "left",
        "right",
        "offscreen-left",
        "offscreen-right"
      );
  
      if (index === currentIndex) {
        img.classList.add("active");
      } else if (index === leftIndex) {
        img.classList.add("left");
      } else if (index === rightIndex) {
        img.classList.add("right");
      } else if (index < leftIndex || index > rightIndex) {
        img.classList.add("offscreen-left");
      } else {
        img.classList.add("offscreen-right");
      }
    });
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarouselPositions();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarouselPositions();
  }
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  });
  
  let startX = 0;
  
  document.addEventListener("mousedown", (e) => {
    startX = e.pageX;
  });
  
  document.addEventListener("mouseup", (e) => {
    if (e.pageX - startX > 50) {
      prevImage();
    } else if (startX - e.pageX > 50) {
      nextImage();
    }
  });
  
  updateCarouselPositions();
  
  
  const container = document.querySelector('.vtoraya-stranica-str3');
  
  container.addEventListener('scroll', function() {
    container.scrollLeft = 0; // Устанавливаем горизонтальную прокрутку на 0, чтобы запретить движение по горизонтали
  });
  
  //zatemnenie
  
  
  
  