//主页的保存和取消
document.getElementById('change_password_saveChanges').addEventListener('click', function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为   

    var isValid = validForm(document.querySelector('form'), "[name]")
    if (isValid) {
        var json = jsonForm(document.querySelector('form'), "[name]")
        if (json.newPassword !== json.confirmPassword) {
            alert("两次密码输入不一致！")
            return;
        }
        const data = {
            oldPwd: json.originalPassword,
            password: json.newPassword,
            userName: readCookie("userName")
        }
        axios.post(HTTPURL + '/user/updatePassword', data)
            .then(function (response) {
                if (!response.data.success) {
                    alert(response.data.msg)
                } else {
                    history.back()
                }
            })

    }
});


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