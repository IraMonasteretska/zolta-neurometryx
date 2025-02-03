// --- Mobile menu Open/Close --- //
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.header__menu');
    const close = document.querySelector('.close');

    if (burger && mobileMenu) {
        burger.addEventListener('click', function () {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    if (close) {
        close.addEventListener('click', function () {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    }

});


// --- Acordeon Open/Close --- //

document.addEventListener("DOMContentLoaded", function () {
    const acordeonHead = document.querySelectorAll('.faq__row');

    if (acordeonHead.length) {
        acordeonHead.forEach(item => {
            item.addEventListener('click', function () {

                acordeonHead.forEach(el => {
                    if (el !== this) {
                        el.classList.remove("active");
                        const acordeonBody = el.querySelector('.faq__body');
                        if (acordeonBody) {
                            acordeonBody.style.maxHeight = null;
                        }
                    }
                });

                this.classList.toggle("active");
                const acordeonBody = this.querySelector('.faq__body');

                if (acordeonBody) {
                    if (acordeonBody.style.maxHeight && acordeonBody.style.maxHeight !== "0px") {
                        acordeonBody.style.maxHeight = null;
                    } else {
                        acordeonBody.style.maxHeight = acordeonBody.scrollHeight + 'px';
                    }
                }
            });
        });
    }
});


//  Youtube player //
document.addEventListener("DOMContentLoaded", function () {
    const aboutVideo = document.querySelector('.about__video');

    if (aboutVideo) {
        const videoContainer = aboutVideo.querySelector('.video');
        const playButton = aboutVideo.querySelector('.play');
        const videoUrl = aboutVideo.getAttribute('data-video');

        if (playButton && videoUrl) {
            playButton.addEventListener('click', function () {
                // Додаємо затримку у 0.5 секунди перед вставкою плеєра
                setTimeout(() => {
                    const videoId = new URL(videoUrl).searchParams.get("v"); // Отримуємо ID відео

                    if (videoId) {
                        const iframe = document.createElement('iframe');
                        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
                        iframe.setAttribute('frameborder', '0');
                        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                        iframe.setAttribute('allowfullscreen', 'true');
                        iframe.style.display = 'block';
                        iframe.style.width = "100%";
                        iframe.style.height = "100%";

                        // Очищаємо контейнер і вставляємо плеєр
                        videoContainer.innerHTML = "";
                        videoContainer.appendChild(iframe);
                    }
                }, 500); // 0.5 секунди затримки
            });
        }
    }
});



document.querySelectorAll('.header__menu a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let id = this.getAttribute('href');
        let target = document.querySelector(id);
        if (target) {
            let top = target.offsetTop;
            window.scrollTo({ top: top, behavior: 'smooth' });
        }
    });
});

