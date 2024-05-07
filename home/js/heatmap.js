

let svgCurrentIndex = 0;  // 初始化svg的当前索引  

const svgItems = document.querySelectorAll('.svg-item');  // 获取所有的svg-item  

// 初始化heatmap，设置第一个svg为当前活动状态  
svgItems[0].classList.add('active');

// 切换heatmap的svg  
function switchSvg(index) {
    svgItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    svgCurrentIndex = index;
}

// 自动播放heatmap的svg  
setInterval(() => {
    svgCurrentIndex = (svgCurrentIndex + 1) % svgItems.length;
    switchSvg(svgCurrentIndex);
}, 3000); // 每3秒切换一次



initData()
/*function initData() {
    axios.post(HTTPURL + '/order/groupProduct', {})
        .then(function (response) {
            console.log(response.data);
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                var json = response.data.data.list
                // *大于等于80票为  #D2691E，60-80（包括60不包括80） 颜色为  #F4A460  低于60（不包括60）为 #FFDAB9
                var diva = ""
                var color = ''
                Object.keys(json).forEach((key) => {
                    console.log('key', key);
                    var value = json[key]
                    if (key == 'Swim') {
                        diva = document.getElementById("swimming")
                        console.log('diva', diva);
                    } else if (key == 'Basketball') {
                        diva = document.getElementById("basketball")
                        console.log('diva', diva);
                    } else if (key == 'TableTennis') {
                        diva = document.getElementById("tabletennis")
                        console.log('diva', diva);
                    } else if (key == 'Fitness') {
                        diva = document.getElementById("fitness")
                        console.log('diva', diva);
                    } else if (key == 'Badminton') {
                        diva = document.getElementById("badminton")
                        console.log('diva', diva);
                    } else if (key == 'Volleyball') {
                        diva = document.getElementById("volleyball")
                        console.log('diva', diva);
                    } else if (key == 'Tennis') {
                        diva = document.getElementById("tennis")
                        console.log('diva', diva);
                    }

                    if (value > 5) {
                        color = "#D2691E";
                    } else if (value > 10) {
                        color = "#F4A460";
                    } else {
                        color = "#FFDAB9";
                    }
                    console.log(key, color);
                    diva.setAttribute("fill", color);
                })




            }
        })
}*/
function initData() {
    axios.post(HTTPURL + '/order/groupProduct', {})
        .then(function (response) {
            console.log(response.data);
            if (!response.data.success) {
                alert(response.data.msg);
            } else {
                var json = response.data.data.list;
                // *大于等于80票为  #D2691E，60-80（包括60不包括80） 颜色为  #F4A460  低于60（不包括60）为 #FFDAB9
                var diva = "";
                var color = '';
                // 存储各项的数量总和
                var totals = {
                    Swim: 0,
                    Basketball: 0,
                    TableTennis: 0,
                    Fitness: 0,
                    Badminton: 0,
                    Volleyball: 0,
                    Tennis: 0
                };

                // 累加订单中的num数量
                json.forEach((item) => {
                    if (item.type in totals) {
                        totals[item.type] = item.numTotal; // 使用numTotal字段
                    }
                });

                Object.keys(totals).forEach((key) => {
                    var value = totals[key];
                    if (key === 'Swim') {
                        diva = document.getElementById("swimming");
                    } else if (key === 'Basketball') {
                        diva = document.getElementById("basketball");
                    } else if (key === 'TableTennis') {
                        diva = document.getElementById("tabletennis");
                    } else if (key === 'Fitness') {
                        diva = document.getElementById("fitness");
                    } else if (key === 'Badminton') {
                        diva = document.getElementById("badminton");
                    } else if (key === 'Volleyball') {
                        diva = document.getElementById("volleyball");
                    } else if (key === 'Tennis') {
                        diva = document.getElementById("tennis");
                    }

                    if (value >= 50) {
                        color = "#D2691E";
                    } else if (value >= 10) {
                        color = "#F4A460";
                    } else {
                        color = "#FFDAB9";
                    }
                    console.log(key, color);
                    if (diva) {
                        diva.setAttribute("fill", color);
                    }
                });
            }
        })
        .catch(function (error) {
            console.error('Error fetching data: ', error);
        });
}


