function initData(date = null) {
    if (!date) {
        date = document.getElementById("date").value
    }
    const data = { type: 'Football', useDate: date }
    axios.post(HTTPURL + '/order/find', data)
        .then(function (response) {
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                console.log(response.data.data.list);
                var list = response.data.data.list
                var obj = {}
                list.forEach(element => {
                    obj[element.court] = element.time;
                });
                addSlot(list)
            }
        })
}
initData()

async function addSlot(list) {
    let time = 8;
    let num = 0;
    let number = await findData();
    let vertical = document.getElementById("content");
    vertical.innerHTML = '';
    let vertical1 = document.getElementById("court-header");
    vertical1.innerHTML = '';
    let div = ``;
    for (let i = 1; i <= number.court; i++){
        div = `<div class="court-label">Court ${i}</div>`
        let newPair1 = document.createElement('div');
        newPair1.innerHTML = div;
        newPair1.className = 'court-label';
        vertical1.appendChild(newPair1);
    }
    if (number.available == '1'){
        for (let index = 0; index < 12; index++) {
            let newPair = document.createElement('div');
            newPair.className = 'timeslot-grid';
            let content = ``;
            for (let lotIndex = 0; lotIndex < number.court; lotIndex++) {
                let className = "timeslot red"
                let available = 2;
                content += `<div class="${className}" click="timeslot()" data-time="${time}:00" num="${num}" available="${available}" data-court="${lotIndex}" price="10">￥10.00</div>`
                num = 0;
            }
            newPair.innerHTML = content

            // 获取新添加的div元素并添加点击事件监听器
            const newDivs = newPair.getElementsByClassName('timeslot');
            for (let i = 0; i < newDivs.length; i++) {
                newDivs[i].addEventListener('click', timeslot);
            }
            time++;
            vertical.appendChild(newPair)
        }
    } else {
        for (let index = 0; index < 12; index++) {
            let newPair = document.createElement('div');
            newPair.className = 'timeslot-grid';
            let content = ``;
            for (let lotIndex = 0; lotIndex < number.court; lotIndex++) {
                let className = "timeslot"
                let available = 1;
                if (list != ''){
                    for (i = 0; i<list.length; i++){
                        if (list[i].time == `${time}:00` && list[i].court == lotIndex) {
                            num = num + parseInt(list[i].num);
                            if (number.num == num){
                                className = "timeslot red"
                                available = 2
                                break
                            }
                        }
                    }
                }
                content += `<div class="${className}" click="timeslot()" data-time="${time}:00" num="${num}" available="${available}" data-court="${lotIndex}" price="10">￥10.00</div>`
                num = 0;
            }
            newPair.innerHTML = content

            // 获取新添加的div元素并添加点击事件监听器
            const newDivs = newPair.getElementsByClassName('timeslot');
            for (let i = 0; i < newDivs.length; i++) {
                newDivs[i].addEventListener('click', timeslot);
            }
            time++;
            vertical.appendChild(newPair)
        }
    }
}
//评论点赞
function timeslot(even) {
    var available = even.target.getAttribute("available");
    var dataTime = even.target.getAttribute("data-time");
    var dataCourt = even.target.getAttribute("data-court");
    var price = even.target.getAttribute("price");
    var num = even.target.getAttribute("num");
    var date = document.getElementById("date").value
    if (available == 2) {
        alert("Sold out!!!")
        return
    } else {
        createCookie("payGoBack", 'football_booking.html')
        location.href = `choose_ticket_number.html?1=1&dataTime=${dataTime}&dataCourt=${dataCourt}&price=${price}&type=Football&date=${date}&num=${num}`
    }
}

document.getElementById("date").onchange = function (even) {
    initData(even.target.value)
}

async function findData() {
    var product = 'Football';
    const response = await axios.post(HTTPURL + '/product/find', {product});
    if (!response.data.success) {
        alert(response.data.msg);
        return;
    } else {
        console.log(response.data.data.list);
        return response.data.data.list[0];
    }
}