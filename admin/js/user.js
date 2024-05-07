function initData() {
    axios.post(HTTPURL + '/user/find', {})
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
                        <td><input class='cn readinput' type="text" value="${item.userName}" disabled name="activityName"></td>
                        <td><input class='cn readinput' type="text" value="${item.nickName}" disabled name="venueCount"></td>
                        <td><select class='cn readinput' type="text" value="${item.isAdmin}" disabled name="status">
                        <option value='1' ${item.isAdmin == 1 && 'selected'}>Admin</option>
                        <option value='2' ${item.isAdmin == 2 && 'selected'}>User</option>
                        </select></td>
                        <td><button class='cn readinput' type="button" onclick="editRow(this)">Edit</button></td>
                    </tr>`
                });
                vertical.innerHTML = content
            }
        })
}
initData()





function addRow() {
    var tbody = document.getElementById('tbody');
    var newRow = tbody.insertRow();
    newRow.innerHTML = `
    <td><input class='cn readinput' type="text" value="${Date.now()}"  name="activityName"></td>
    <td><input class='cn readinput' type="text" value=""  name="venueCount"></td>
    <td><select class='cn readinput' type="text" value="1"  name="status"><option value='1'>Admin</option><option value='2'>User</option></select></td>
    <td><button class='cn readinput' type="button" onclick="saveRow(this)">Save</button></td>
        `;
}

function editRow(button) {

    var row = button.parentElement.parentElement;
    var inputs = row.querySelectorAll('.cn');
    inputs.forEach(input => {
        input.disabled = false; // 设置输入框可编辑
        input.classList.remove('readinput')
    });
    button.textContent = "Save";
    button.onclick = function () {
        saveRow(this);
    };
}

function saveRow(button) {
    var row = button.parentElement.parentElement;
    var inputs = row.querySelectorAll('.cn');
    var data = {
        userName: inputs[0].value,
        nickName: inputs[1].value,
        isAdmin: inputs[2].value,
    };

    // 在这里使用axios向后台发送数据保存
    axios.post(HTTPURL + '/user/resave', data)
        .then(function (response) {
            console.log(response.data);
            // 如果保存成功，将输入框设置为只读状态
            inputs.forEach(input => {
                input.disabled = true; // 设置输入框可编辑
                input.classList.add('readinput')
            });
            button.textContent = "Edit";
            button.onclick = function () {
                editRow(this);
            };
        })
        .catch(function (error) {
            console.error('Error saving data:', error);
            alert('Failed to save data, please try again!');
        });
}

function downloadFile(){
        //创建一个虚拟的链接元素
        var downloadLink = document.createElement('a');
        downloadLink.href = '../../../../school.log';
        downloadLink.download = 'school.log';
    
        downloadLink.click();
    }
    