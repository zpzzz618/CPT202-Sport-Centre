document.getElementById('returnButton').addEventListener('click', function () {
    history.back(-1); // 将此URL替换为您的实际URL
});


// 获取新添加的div元素并添加点击事件监听器
// const newDivs = document.getElementsByClassName('payment-option');
// for (let i = 0; i < newDivs.length; i++) {
//     newDivs[i].addEventListener('click', timeslot);
// }
// function timeslot(event) {
//     console.log("sssss", event.target.getAttribute("pay"))
// }

document.addEventListener('DOMContentLoaded', (event) => {
    // 获取所有的 payment-option 元素
    var paymentOptions = document.getElementsByClassName('payment-option');

    // 为每个 payment-option 元素添加点击事件监听器
    for (var i = 0; i < paymentOptions.length; i++) {
        paymentOptions[i].addEventListener('click', pay);
    }

    function pay(event) {
        // event.target 指向被点击的元素
        var target = event.target;
        if (target.tagName.toLowerCase() === 'img') {
            target = target.parentElement;
        }
        var payMethod = target.getAttribute('pay');
        console.log('Selected Payment Method:', payMethod);

        // 在这里，您可以根据 payMethod 的值执行其他操作，比如更新页面上的其他元素
        let param = {
            payType: payMethod,
            id: getParam('no'),
            price: getParam('newPrice'),
            useDate: getParam('date'),
            court: getParam("dataCourt"),
            time: getParam('dataTime'),
            type: getParam('type'),
            userName: readCookie("userName"),
            num: getParam('num')
        }
        // console.log(param);
        axios.post(HTTPURL + '/order/save', param)
            .then(function (response) {
                if (!response.data.success) {
                    alert(response.data.msg)
                } else {
                    location.href = readCookie("payGoBack")
                }
            })

    }


});