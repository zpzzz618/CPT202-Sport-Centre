
// 找回密码
document.getElementById('confirmRest').addEventListener('click', function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为   
    var isValid = validForm(document.querySelector('form'), "[name]")
    var json = jsonForm(document.querySelector('form'), "[name]")
    if (isValid) {
        if (document.getElementById("password").value != document.getElementById("rePassword").value) {
            alert("密码不一致请重新输入");
            return;
        }
        var url = window.location.href;
        console.log('url', url);
        var userName = url.split("?")[1].split("=")[1]
        json = { ...json, userName }
        axios.post(HTTPURL + '/user/update', json)
            .then(function (response) {
                console.log(response.data);
                if (!response.data.success) {
                    alert(response.data.msg)
                } else {
                    window.location.href = 'logtest.html'; // 替换为你要跳转的页面的URL  
                }
            })
    }
});
// 返回
document.getElementById('back').addEventListener('click', function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为   
    window.location.href = 'logtest.html'; // 替换为你要跳转的页面的URL  
});
