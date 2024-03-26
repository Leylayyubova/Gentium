function initSwiper() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

// Sayfa yüklendiğinde slider'ı başlatmak için initSwiper fonksiyonunu çağırın
window.onload = function() {
    initSwiper();
};