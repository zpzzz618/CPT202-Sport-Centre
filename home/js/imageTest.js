let currentIndex = 0;  
const carouselItems = document.querySelectorAll('.carousel-item');  
const dots = document.querySelectorAll('.dot');  
  
// 初始化轮播图，设置第一张为当前图片  
carouselItems[0].classList.add('active');  
dots[0].classList.add('active');  
  
// 切换轮播图  
function switchCarousel(index) {  
    carouselItems.forEach((item, i) => {  
        if (i === index) {  
            item.classList.add('active');  
            dots[i].classList.add('active');  
        } else {  
            item.classList.remove('active');  
            dots[i].classList.remove('active');  
        }  
    });  
    currentIndex = index;  
}  
  
// 自动播放轮播图  
setInterval(() => {  
    currentIndex = (currentIndex + 1) % carouselItems.length;  
    switchCarousel(currentIndex);  
}, 3000); // 每3秒切换一次  
  
