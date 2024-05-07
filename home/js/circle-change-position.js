


     
    // 获取SVG元素和圆  
    const svg = document.querySelector('.threecircle svg');  
    const smallCircle1 = document.getElementById('smallCircle1');  
    const smallCircle2 = document.getElementById('smallCircle2');  
    const smallCircle3 = document.getElementById('smallCircle3');  
  
    // 初始位置  
    let positions = {  
        smallCircle1: { cx: 1520, cy: 485 },  
        smallCircle2: { cx: 1600, cy: 365 },  
        smallCircle3: { cx: 1600, cy: 615 }  
    };  
  
    // 交换位置的函数  
    function swapPositions() {  
        // 存储当前位置  
        const temp1 = positions.smallCircle1;  
        const temp2 = positions.smallCircle2;  
        const temp3 = positions.smallCircle3;  
  
        // 更新位置  
        positions.smallCircle1 = temp2;  
        positions.smallCircle2 = temp3;  
        positions.smallCircle3 = temp1;  
  
        // 应用新的位置到圆上  
        smallCircle1.setAttribute('cx', positions.smallCircle1.cx);  
        smallCircle1.setAttribute('cy', positions.smallCircle1.cy);  
        smallCircle2.setAttribute('cx', positions.smallCircle2.cx);  
        smallCircle2.setAttribute('cy', positions.smallCircle2.cy);  
        smallCircle3.setAttribute('cx', positions.smallCircle3.cx);  
        smallCircle3.setAttribute('cy', positions.smallCircle3.cy);  
    }  
  
    // 每五秒执行一次位置交换  
    setInterval(swapPositions, 5000);  
