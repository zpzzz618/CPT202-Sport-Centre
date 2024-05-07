
function userInfo() {
    const data = { userName: readCookie("userName") };
    axios.post(HTTPURL + '/user/find', data)
        .then(function (response) {
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                const user = response.data.data.list[0];
                console.log(user);
                document.getElementById("name").value = user.nickName
                document.getElementById("gender").value = user.gender
                document.getElementById("student_id").value = user.studentId
                document.getElementById("country").value = user.country
                document.getElementById("city").value = user.city
                document.getElementById("birthdate").value = user.dateBirth
                document.getElementById("telephone_number").value = user.mobile
                document.getElementById("alternate_telephone_number").value = user.mobile2
                document.getElementById("email").value = user.email
                document.getElementById("id_number").value = user.idCard;
                document.getElementById("school_or_organization").value = user.school;
                document.getElementById("address").value = user.address;


            }
        })
}
userInfo()
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
