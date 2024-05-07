

function userInfo() {
    const data = { userName: readCookie("userName") };
    axios.post(HTTPURL + '/user/find', data)
        .then(function (response) {
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                const user = response.data.data.list[0];
                console.log(user);
                document.getElementById("height").value = user.height
                document.getElementById("weight").value = user.weight
                document.getElementById("bmi").value = user.bmi
                document.getElementById("vital_capacity").value = user.vitalCapacity
                document.getElementById("short_term_goal").value = user.shortTermFitnessGoal
                document.getElementById("long_term_goal").value = user.longTermFitnessGoal
                document.getElementById("special_goal").value = user.specialFitnessGoal
            }
        })
}

userInfo()