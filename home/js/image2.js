window.onload = function() {  
    var progressBar = document.querySelector('.progress-bar');  
    var progress = 0; // 进度变量，用像素表示  
    var step = 2; // 每50毫秒移动的像素数，200px / (5000ms / 50ms) = 200px / 100 = 2px，但由于可能有精度损失，所以使用4来确保5秒内完成  
    var maxProgress = 200; // 进度条的最大宽度，用像素表示  
  
    var intervalId = setInterval(function() {  
        progress += step; // 增加进度  
  
        // 如果进度超过最大宽度，则重置为0  
        if (progress >= maxProgress) {  
            progress = 0;  
        }  
  
        // 更新进度条的宽度  
        progressBar.style.width = progress + 'px';  
    }, 50); // 每50毫秒更新一次进度  
};


/*进度条*/