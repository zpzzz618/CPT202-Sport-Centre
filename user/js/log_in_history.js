//导航界面
document.getElementById('toggleSidebar').onclick = function () {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');

    if (sidebar.style.width === '250px' || !sidebar.style.width) {
        sidebar.style.width = '0';
        sidebar.style.padding = '0';
        content.style.marginLeft = '0';
        header.style.marginLeft = '0'; // 确保header的左边距也是0

    } else {
        sidebar.style.width = '250px';
        sidebar.style.padding = '15px';  // 重新应用原始内边距
        content.style.marginLeft = '265px';
        header.style.marginLeft = '265px'; // 和侧边栏宽度一致

    }
};

getHis()
function getHis() {
    const data = { userName: readCookie("userName") };
    axios.post(HTTPURL + '/userLoginHis/find', data)
        .then(function (response) {
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                const list = response.data.data.list;
                list.forEach(element => {
                    addPair(element)
                });
            }
        })
}

function addPair(item) {
    let container = document.getElementById('form');
    let newPair = document.createElement('div');
    newPair.className = 'histry';
    newPair.innerHTML =
        `
    <label for="original_password">IP: ${item.ip}</label>
    <label for=" new_password">DATE TIME： ${item.dateTime}</label>
    `
    container.appendChild(newPair);
}

