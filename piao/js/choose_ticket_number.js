

document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById("s1").innerText = getParam("type")
    document.getElementById("s2").innerText = getParam("type")
    var dataTime = getParam("dataTime");
    var dateText = dataTime + "-" + (Number(dataTime.split(":")[0]) + 1) + ":00"
    document.getElementById("s3").innerText = dateText;
    document.getElementById("no").innerText = Date.now();
    document.getElementById("price").innerText = getParam("price")
    var number = getParam("num");
    var date = getParam("date").replaceAll("-", "/");
    document.getElementById("date").innerText = date + " " + dateText;

    var decreaseBtn = document.querySelector('.decrease-btn');
    var increaseBtn = document.querySelector('.increase-btn');
    var ticketQuantityInput = document.getElementById('ticketQuantity');
    var ticketAlert = document.getElementById('ticketAlert');
    var data = await findData();
    var ticketsLeft = parseInt(data.num)-parseInt(number); // 假设剩余4张票
    console.log('ticketsLeft', ticketsLeft)
    document.getElementById("ticket").innerHTML = ticketsLeft

    function updateTicketAlert() {
        var selectedQuantity = parseInt(ticketQuantityInput.value, 10);
        // 当选中的票数达到剩余票数时，显示警告信息
        if (selectedQuantity > ticketsLeft) {
            ticketAlert.style.display = 'block';
        } else {
            ticketAlert.style.display = 'none';
        }
    }

    decreaseBtn.addEventListener('click', function () {
        if (ticketQuantityInput.value > 1) {
            ticketQuantityInput.value--;
            updateTicketAlert();
        }
    });

    increaseBtn.addEventListener('click', function () {
        var currentQuantity = parseInt(ticketQuantityInput.value, 10);
        if (currentQuantity < ticketsLeft) {
            ticketQuantityInput.value = currentQuantity + 1;
            updateTicketAlert();
        } else {
            // 直接显示警告，阻止数量增加
            ticketAlert.innerText = 'There are no more tickets left!';
            ticketAlert.style.display = 'block';
        }
    });

    // 页面加载时立即检查，以确保根据票数显示或隐藏警告信息
    updateTicketAlert();
});



var nextButton = document.getElementById('nextButton');

var cancelButton = document.getElementById('cancelButton');
// 为按钮添加点击事件处理器
cancelButton.addEventListener('click', function () {
    history.back(-1)
});

// 为按钮添加点击事件处理器
nextButton.addEventListener('click', function () {
    var num = document.getElementById("ticketQuantity").value
    var no = document.getElementById("no").innerText
    var param = `?1=1&type=${getParam("type")}&dataTime=${getParam("dataTime")}&price=${getParam("price")}&num=${num}&date=${getParam("date")}&no=${no}&dataCourt=${getParam('dataCourt')}`

    // 设置新的URL，指向你想要跳转的页面
    var newUrl = 'settle_in_full.html' + param; // 替换为你想要跳转的页面文件名

    // 在当前标签页中跳转到新页面
    window.location.href = newUrl;
});



async function findData() {
    var product = getParam("type")
    var response = await axios.post(HTTPURL + '/product/find', { product });
    if (!response.data.success) {
        alert(response.data.msg)
        return
    } else {
        console.log(response.data.data.list);
        return response.data.data.list[0]

    }

}