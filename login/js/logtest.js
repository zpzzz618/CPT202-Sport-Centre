
document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault(); // 阻止表单的默认提交行为   
  var isValid = validForm(document.querySelector('form'), "[name]")
  var json = jsonForm(document.querySelector('form'), "[name]")
  if (!document.getElementById("agreement").checked) {
    alert("Please check the agreement")
    isValid = false;
  }
  if (isValid) {
    axios.post(HTTPURL + '/login', json)
      .then(function (response) {
        console.log(response.data);
        if (!response.data.success) {
          alert(response.data.msg)
        } else {
          var user = response.data.data.user;
          createCookie("userName", json.userName)
          createCookie("admin", user.isAdmin)
          window.location.href = '../../home/html/homePage.html'; // 替换为你要跳转的页面的URL  
        }
      })
  }
});
document.getElementById('signup').addEventListener('click', function (event) {
  event.preventDefault(); // 阻止表单的默认提交行为   
  window.location.href = 'signUp.html'; // 替换为你要跳转的页面的URL  
});
