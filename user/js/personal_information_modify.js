//主页的保存和取消
var personal_information_saveChanges = document.getElementById("personal_information_saveChanges");
var personal_information_cancelChanges = document.getElementById("personal_information_cancelChanges");

// 获取弹窗元素
var cancel_modal = document.getElementById("Cancel_button");

// 获取关闭弹窗的<span>元素
var cancel_span = document.getElementsByClassName("close")[0];
var cancel_span2 = document.getElementById("pop_up_cancel");
var Leave_any_way = document.getElementById("Leave_any_way");


personal_information_cancelChanges.onclick = function () {
    cancel_modal.style.display = "block";
}
// 点击 <span> (x), 关闭弹窗
cancel_span.onclick = function () {
    cancel_modal.style.display = "none";
}
cancel_span2.onclick = function () {
    cancel_modal.style.display = "none";
}
Leave_any_way.onclick = function () {
    history.back()
}
// 点击弹窗外的区域，也能关闭弹窗
window.onclick = function (event) {
    if (event.target == cancel_modal) {
        cancel_modal.style.display = "none";
    }
}

// 提交
personal_information_saveChanges.onclick = function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为   
    var isValid = validForm(document.querySelector('form'), "[name]")
    var json = jsonForm(document.querySelector('form'), "[name]")
    if (isValid) {
        axios.post(HTTPURL + '/user/update', { ...json, userName: readCookie("userName") })
            .then(function (response) {
                console.log(response.data);
                if (!response.data.success) {
                    alert(response.data.msg)
                } else {
                    window.location.href = '../html/personal_information_display.html'; // 替换为你要跳转的页面的URL
                }
            })
    }
}


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