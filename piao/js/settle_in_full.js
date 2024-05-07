var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


var nextButton = document.getElementById('nextButton');

// 为按钮添加点击事件处理器
nextButton.addEventListener('click', function () {
    var newPrice = document.getElementsByClassName("fee-amount")[0].innerText
    var param = `?1=1&type=${getParam('type')}&dataTime=${getParam('dataTime')}&price=${getParam('price')}&num=${getParam('num')}&date=${getParam('date')}&no=${getParam('no')}&newPrice=${newPrice}&dataCourt=${getParam('dataCourt')}`

    // 设置新的URL，指向你想要跳转的页面
    var newUrl = 'choose_payment_form.html' + param; // 替换为你想要跳转的页面文件名

    // 在当前标签页中跳转到新页面
    window.location.href = newUrl;
});




var nextButton = document.getElementById('backButton');
nextButton.addEventListener('click', function () {
    // 设置新的URL，指向你想要跳转的页面
    // var newUrl = 'choose_ticket_number.html'; // 替换为你想要跳转的页面文件名
    history.back(-1);
    // 在当前标签页中跳转到新页面
    // window.location.href = newUrl;
});

document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById("s1").innerText = getParam("type")
    document.getElementById("s2").innerText = getParam("type")
    var dataTime = getParam("dataTime");
    var dateText = dataTime + "-" + (Number(dataTime.split(":")[0]) + 1) + ":00"
    document.getElementById("s3").innerText = dateText;
    document.getElementById("no").innerText = getParam("no");
    var date = getParam("date").replaceAll("-", "/");
    document.getElementById("date").innerText = date + " " + dateText;
    var price = getParam("price")
    var num = getParam("num")
    document.getElementsByClassName("fee-amount")[0].innerText = price * num
    var sumPrice = price * num
    initDate()


    document.getElementsByClassName("confirm-btn")[0].onclick = function () {
        // 获取所有name为'item'的input元素
        var radios = document.querySelectorAll('input[name="item"]');
        var selectedValue = '';

        // 遍历所有单选按钮，找到选中的值
        for (var radio of radios) {
            if (radio.checked) {
                selectedValue = radio.value;
                break; // 找到选中的值后退出循环
            }
        }
        console.log('selectedValue', selectedValue)
        var val = selectedValue.split("-")
        console.log('valval', val)
        var newPrice = sumPrice;
        if (val[0]) {
            newPrice = newPrice - val[0]
        } else if (val[1]) {
            newPrice = newPrice * val[1]
        }
        document.getElementsByClassName("fee-amount")[0].innerText = newPrice
        modal.style.display = 'none';
    }
})



function initDate() {
    axios.post(HTTPURL + '/discountCoupon/find', {})
        .then(function (response) {
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                console.log(response.data.data.list);
                var list = response.data.data.list
                let newPair = document.createElement('div');
                var content = ``
                list.forEach(element => {
                    content += `<li><span>${element.name}</span> <input type="radio" name="item" value="${element.price || ''}-${element.discount || ''}"></li>`
                });
                newPair.innerHTML = content;
                var vertical = document.getElementsByClassName("item-list")[0]
                vertical.appendChild(newPair)
            }
        })
}