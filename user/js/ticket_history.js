function initData(type) {
    const data = { userName: readCookie("userName"), findType: type };
    axios.post(HTTPURL + '/order/find2', data)
        .then(function (response) {
            console.log(response.data);
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                var list = response.data.data.list
                var container = document.getElementById("form")
                container.innerHTML = ''
                list.forEach(item => {
                    var dateText = (item.useDate + "").replaceAll("-", "/")
                    var startTime = item.time; // 原始时间如 "10:00"
                    var endTime = (Number(startTime.split(":")[0]) + 1) + ":00"; // 结束时间为开始时间的小时数加一
                    var timeText = startTime + "-" + endTime; // 形成正确的时间段 "10:00-11:00"
                    let newPair = document.createElement('div');
                    newPair.className = 'ticket-item';
                    newPair.innerHTML = `
                <div class="ticket-header">
                    <span class="category-tag" id="s1">${item.type}</span>
                    <span class="ticket-title">Single ticket for <span id="s2">${item.type}</span>(COURT ${item.court ? Number(item.court) + 1 : 1})</span>
                </div>
                <div class="ticket-body">
                    <div class="ticket-info">
                        <div class="ticket-number">NO.<span id="s3">${item.id}</span></div>
                        <div class="ticket-date" id="s4">${dateText} ${timeText}</div>
                        <button type='button' onClick="deletea(${item.id})">Delete</button>
                    </div>
                </div>
                `
                    container.appendChild(newPair);

                });

            }
        })
}


initData('all')

function deletea(id) {
    axios.post(HTTPURL + '/order/deleteByid', { id })
        .then(function (response) {
            console.log(response.data);
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                window.location.reload()
            }
        })

}
