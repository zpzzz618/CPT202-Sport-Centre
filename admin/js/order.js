function initData() {
    axios.post(HTTPURL + '/order/find', {})
        .then(function (response) {
            console.log(response.data);
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                var list = response.data.data.list;
                var vertical = document.getElementById("tbody")
                vertical.innerHTML = ''
                let content = ''
                list.forEach(item => {
                    content +=
                        `<tr>
                        <td><input class='cn readinput' type="text" value="${item.id}" disabled name="activityName"></td>
                        <td><input class='cn readinput' type="text" value="${item.createTime}" disabled name="venueCount"></td>
                        <td><input class='cn readinput' type="text" value="${item.type}" disabled name="venueCount"></td>
                        <td><input class='cn readinput' type="text" value="${item.court}" disabled name="venueCount"></td>
                        <td><input class='cn readinput' type="text" value="${item.userName}" disabled name="venueCount"></td>
                    </tr>`
                });
                vertical.innerHTML = content
            }
        })
}
initData()



function download() {
    axios({
        method: "post",
        url: HTTPURL + '/order/downloadData',
        data: {},
        responseType: 'blob',
    }).then(res => {
        let blob = new Blob([res.data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const href = URL.createObjectURL(blob); //创建新的URL表示指定的blob对象
        console.log('url:', href);
        const a = document.createElement('a'); //创建a标签
        a.style.display = 'none';
        a.href = href; // 指定下载链接
        a.download = 'Daily Report'; //指定下载文件名
        a.click(); //触发下载
        URL.revokeObjectURL(a.href); //释放URL对象
    });
}