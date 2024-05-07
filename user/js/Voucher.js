function initData() {
    const data = { userName: readCookie("userName") };
    axios.post(HTTPURL + '/discountCoupon/find', data)
        .then(function (response) {
            console.log(response.data);
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                var list = response.data.data.list
                list.forEach(item => {

                    // var text=
                    var container = document.getElementById("form")
                    let newPair = document.createElement('div');
                    newPair.className = 'coupon-item';
                    newPair.innerHTML = `
                    <img src="/a_img/voucher_background.png" alt="Voucher Background" class="coupon-background" />
                    <div class="coupon-content">
                        <div class="coupon-header">
                            <span class="category-tag">Discount</span>
                            <span class="coupon-title">${item.name}</span>
                        </div>
                        <div class="coupon-body">
                            <div class="coupon-info">
                                <div class="coupon-code">Code: SportCenter${item.id}</div>
                                <div class="coupon-expiration">Expires: ${item.endTime}</div>
                            </div>
                            <div class="coupon-terms">
                                <p>Terms and conditions apply. Not valid with other offers.</p>
                            </div>
                        </div>
                    </div>
                `
                    // <div class="ticket-qr">
                    //         <!-- QR Code 图片 -->
                    //         <img src="/a_img/qr.png" alt="QR Code" />
                    //     </div>
                    container.appendChild(newPair);
                });

            }
        })
}

initData()

