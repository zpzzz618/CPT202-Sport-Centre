function initCount() {
    console.log('type', type)
    axios.post(HTTPURL + '/order/groupTick', { type })
        .then(function (response) {
            console.log(response)
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                console.log(response.data.data.list);
                var count = response.data.data.count
                document.getElementById("count").innerText = count
                var list = response.data.data.list
                createCanvas(list);
            }
        })

    axios.post(HTTPURL + '/community/loadScore', { type })
        .then(function (response) {
            console.log(response.data);
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                var communityEntity = response.data.data.communityEntity || {};
                var count = response.data.data.count || 0;
                console.log('communityEntity', communityEntity);

                var sum = ((communityEntity.experience || 0) + (communityEntity.environment || 0) + (communityEntity.facilities || 0) + (communityEntity.service || 0)) / 4
                document.querySelector(".rating-count").innerText = count + " Reviews"
                document.querySelector(".rating-score").innerText = sum.toFixed(1)
                document.querySelector("#experience-score").innerText = sum.toFixed(1)
                document.getElementById("experience-style").style.width = `${sum / 10 * 100}%`
            }
        })
}
initCount()
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function createCanvas(data) {
    console.log('data', data);
    //这里的半径是可以改的，通过购票的数据，比如8-9时间段人数10，半径就是10*4，19-20时间段人数20就是20*4，假设人数最多50，最长半径为200。
    //除了fitness和swimming的每小时票数很多外，其余运动每小时可订购票数只有6张，8张，或十几张，
    //半径根据需要修改，不然最后画出的圆半径太小了，比如每小时六张票就改成出售一张票半径为33.3，两张票半径为2*33.3
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const angleStep = (2 * Math.PI) / 12; // 12个扇形
    const colors = [
        'rgb(219, 71, 0)',
        'rgb(243, 79, 0)',
        'rgb(243, 95, 24)',
        'rgb(243, 118, 53)',
        'rgb(243, 128, 72)',
        'rgb(243, 141, 91)',
        'rgb(243, 153, 110)',
        'rgb(243, 166, 129)',
        'rgb(243, 179, 148)',
        'rgb(243, 192, 167)',
        'rgb(243, 205, 186)',
        'rgb(243, 217, 205)'     
    ]
    // 假设data是一个包含两个数据点的数组
    // const data = [20, 40]; // 例如
    // 计算最小值和最大值，用于确定半径范围
    // const minData = Math.min(...data);
    // const maxData = Math.max(...data);

    // 最小半径为当前半径
    const minRadius = 100;
    // 最大半径为当前半径
    const maxRadius = 250;
    const a = maxRadius - minRadius
    var sum = a / sumArray(data)
    console.log(sum)
    // 计算半径的增量
    // const radiusIncrement = 200 / 12;
    for (let i = 0; i < 12; i++) {
        // 根据数据计算半径
        var c = sum * data[i]
        const radius = minRadius + (c || 0);
        const startAngle = i * angleStep;
        const endAngle = (i + 1) * angleStep;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i]; // 使用不同颜色
        ctx.fill();
    }

}
