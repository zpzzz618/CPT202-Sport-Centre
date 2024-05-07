function save(list) {
    const data = { list, userName: readCookie("userName") };
    axios.post(HTTPURL + '/question/save', data)
        .then(function (response) {
            console.log(response.data);
            if (!response.data.success) {
                alert(response.data.msg)
            } else {
                alert("SUCCESS!")
                window.location.reload()
            }
        })
}
let container = document.getElementById('questionsContainer');
var questionCount = 0
function addPair() {
    questionCount++
    let newPair = document.createElement('div');
    newPair.className = 'question-answer-pair';
    newPair.innerHTML = `
        <input type="text" class="question-input" placeholder="Enter your question${questionCount}">
        <input type="text" class="answer-input" placeholder="Enter your answer${questionCount}">
    `
    container.appendChild(newPair);
}

function removePair() {
    let pairs = container.getElementsByClassName('question-answer-pair');
    if (pairs.length > 1) {
        questionCount--
        container.removeChild(pairs[pairs.length - 1]);
    } else {
        alert("At least one question must remain.");
    }
}

document.getElementById("add_information_saveChanges").onclick = function () {
    var questionsContainer = document.getElementById('questionsContainer');
    var questionAnswerPairs = Array.from(questionsContainer.getElementsByClassName('question-answer-pair'));
    var result = [];
    questionAnswerPairs.forEach(function (pair) {
        var questionInput = pair.querySelector('.question-input');
        var answerInput = pair.querySelector('.answer-input');
        if (questionInput && answerInput) {
            var question = questionInput.value;
            var answer = answerInput.value;
            if (question && answer) {
                result.push({ question: question, answer: answer });
            }
        }
    });
    console.log(result); // 输出收集到的数据  
    save(result)
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