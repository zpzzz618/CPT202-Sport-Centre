let startInfo = {
  experience: 0,
  environment: 0,
  facilities: 0,
  service: 0
}
function loadScore(type) {
  axios.post(HTTPURL + '/community/loadScore', { type })
    .then(function (response) {
      console.log(response.data);
      if (!response.data.success) {
        alert(response.data.msg)
      } else {
        var communityEntity = response.data.data.communityEntity || {};
        var count = response.data.data.count;
        console.log('communityEntity', communityEntity);
        document.getElementById("ratcount").innerText = count || ''
        document.getElementById("experience-score").innerText = communityEntity.experience.toFixed(1)
        document.getElementById("environment-score").innerText = communityEntity.environment.toFixed(1)
        document.getElementById("facilities-score").innerText = communityEntity.facilities.toFixed(1)
        document.getElementById("service-score").innerText = communityEntity.service.toFixed(1)

        document.getElementById("experience-style").style.width = `${((communityEntity.experience) / 10 * 100) || 0}%`
        document.getElementById("environment-style").style.width = `${((communityEntity.environment) / 10 * 100) || 0}%`
        document.getElementById("facilities-style").style.width = `${((communityEntity.facilities) / 10 * 100) || 0}%`
        document.getElementById("service-style").style.width = `${((communityEntity.service) / 10 * 100) || 0}%`

        document.querySelector(".rating-score").innerText = ((communityEntity.experience + communityEntity.environment + communityEntity.facilities + communityEntity.service) / 4).toFixed(1)
      }
    })
}
function find(data = {}) {
  axios.post(HTTPURL + '/community/find', { ...data })
    .then(function (response) {
      console.log(response.data);
      if (!response.data.success) {
        alert(response.data.msg)
      } else {
        console.log('data', response.data);
        return response.data.data
      }
    })
    .then(res => {
      console.log('res', res)
      const commentContainer = document.querySelector('.comment-container');
      commentContainer.innerHTML = ''; // 清空评论容器

      // 遍历评论数据，创建评论元素并添加到评论容器中
      res.list.forEach(function (commentData, index) {
        const comment = createCommentElement(commentData);
        commentContainer.appendChild(comment);

        // 获取评论框的内容元素
        const content = comment.querySelector('.comment-content');

        // 获取评论框内容的高度
        const contentHeight = content.clientHeight;

        // 设置评论框的高度为内容的高度
        comment.style.height = `${contentHeight + 140}px`;

        // 随机选择背景颜色
        const colors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFCC66']; // 白色占据大部分，青色较少
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        comment.style.backgroundColor = randomColor;
      });


      likeIcon()
    })
}

function likeClick(id) {
  axios.post(HTTPURL + '/community/saveLike', { communityId: id, userName: readCookie("userName") })
    .then(function (response) {
      console.log(response.data);
      if (!response.data.success) {
        alert(response.data.msg)
      } else {
        console.log('data', response.data);
      }
    })
}
//切换项目
document.addEventListener("DOMContentLoaded", function () {
  const venueOptions = document.querySelectorAll('.venue-option');

  // 加载评分
  loadScore('all');
  // 默认加载评论
  loadComments('all');
  // 点击不同运动场地时加载相应评论
  venueOptions.forEach(option => {
    option.addEventListener('click', function () {
      const selectedVenue = option.dataset.venue;
      loadComments(selectedVenue);
      loadScore(selectedVenue);
    });
  });



  // 点击事件处理程序
  function handleClick(event) {
    // 移除所有图标的变大变色效果
    venueOptions.forEach(option => {
      option.classList.remove('active');
    });
    // 将被点击的图标添加变大变色效果
    event.currentTarget.classList.add('active');
  }
  // 为每个图标添加点击事件监听器
  venueOptions.forEach(option => {
    option.addEventListener('click', handleClick);
  });
  // 默认情况下将 "全部" 图标设置为活动状态
  const allOption = document.querySelector('[data-venue="all"]');
  allOption.classList.add('active');





  // 点击提交按钮时添加评论
  const submitButton = document.querySelector('.submit-button button');
  submitButton.addEventListener('click', function () {
    const venueOptions = document.querySelectorAll('.venue-option');
    let value = ""
    venueOptions.forEach(function (element) {
      if (element.classList.contains('active')) {
        console.log(element); // 这将输出所有带有 'active' 类的元素  
        // 或者你可以在这里执行其他操作  
        value = element.getAttribute("data-venue");
      }
    });
    addComment(value);
  });



  // 评论
  const reviewButton = document.querySelector('.review-button');
  const commentFrame = document.querySelector('.comment-frame');

  // 初始状态隐藏评论板块
  commentFrame.style.display = 'none';

  // 点击按钮时切换评论板块的显示状态
  reviewButton.addEventListener('click', function () {
    if (commentFrame.style.display === 'none') {
      commentFrame.style.display = 'flex';
      document.querySelector(".comment-user-name").textContent = readCookie("userName")
    } else {
      commentFrame.style.display = 'none';
    }
  });


  // 星星

  const starIcons = document.querySelectorAll('.stars i');
  // 点击星星时的事件处理程序
  starIcons.forEach(function (star) {
    star.addEventListener('click', function () {
      const group = star.dataset.group;
      const selectedStars = document.querySelectorAll(`.stars i[data-group="${group}"]`);
      let clicked = false;
      let startNum = 0
      selectedStars.forEach(function (selectedStar) {
        if (clicked) {
          selectedStar.style.color = 'grey'; // 将当前点击的星星及其右侧星星重置为灰色
        } else {
          selectedStar.style.color = 'orange'; // 将当前点击的星星及其左侧星星变为橙色
          startNum++;
        }
        if (selectedStar === star) {
          clicked = true;
        }
      });
      startInfo[star.parentElement.classList[1]] = startNum * 2;
    });

  });

});

// 加载评论的函数
function loadComments(selectedVenue) {
  find({ type: selectedVenue });
}





// 创建评论元素的函数
function createCommentElement(commentData) {
  const comment = document.createElement('div');
  comment.classList.add('comment');

  // 创建上部分
  const commentHeader = document.createElement('div');
  commentHeader.classList.add('comment-header');

  // 创建用户头像和名字部分
  const userProfile = document.createElement('div');
  userProfile.classList.add('user-profile');
  const userAvatar = document.createElement('img');
  userAvatar.src = '/a_img/user_avatar.jpg'; // 用户头像图片地址
  userAvatar.alt = 'User Avatar';
  const userName = document.createElement('span');
  userName.classList.add('user-name');
  userName.textContent = commentData.userName; // 用户名字
  userProfile.appendChild(userAvatar);
  userProfile.appendChild(userName);

  // 创建点赞图标和数量部分
  const likeSection = document.createElement('div');
  likeSection.classList.add('like-section');
  const likeIcon = document.createElement('i');
  likeIcon.setAttribute("m_id", commentData.id);
  likeIcon.classList.add('material-icons', 'like-icon');
  if (commentData.like) {
    likeIcon.classList.add('red');
  }
  likeIcon.textContent = 'favorite'; // 点赞图标
  const likeCount = document.createElement('span');
  likeCount.classList.add('like-count');
  likeCount.textContent = commentData.likeCount; // 点赞数量
  likeSection.appendChild(likeIcon);
  likeSection.appendChild(likeCount);

  // 将用户头像和名字部分以及点赞图标和数量部分添加到上部分
  commentHeader.appendChild(userProfile);
  commentHeader.appendChild(likeSection);

  // 创建中部分，评论内容
  const commentContent = document.createElement('div');
  commentContent.classList.add('comment-content');
  const commentText = document.createElement('p');
  commentText.textContent = commentData.opinion; // 评论内容
  commentContent.appendChild(commentText);

  // 将上部分和中部分添加到评论中
  comment.appendChild(commentHeader);
  comment.appendChild(commentContent);

  return comment;
}

// 添加评论的函数
function addComment(type) {
  // 评分
  console.log('startInfo', startInfo)
  var s = 0
  Object.keys(startInfo).forEach(key => {
    s += startInfo[key]
  })
  var avg = s / 4
  var content = document.querySelector(".comment-textarea").value
  var userName = readCookie("userName");
  var json = {
    "type": type,
    "userName": userName,
    "opinion": content,
    ...startInfo,
    score: avg
  }
  axios.post(HTTPURL + '/community/save', json)
    .then(function (response) {
      console.log(response.data);
      if (!response.data.success) {
        alert(response.data.msg)
      } else {
        console.log('xxxxxxxxxx', commentFrame);
        commentFrame.classList.toggle('hidden');
        // 清空评论框
        document.querySelector(".comment-textarea").value = '';
        find({ type })
        loadScore(type)
      }
    })
}



// 获取提交按钮
const submitButton = document.querySelector('.submit-button button');

// 获取评论框
const commentFrame = document.querySelector('.comment-frame');

// 添加点击事件监听器
submitButton.addEventListener('click', function () {
  // 设置评论框的显示样式为隐藏
  commentFrame.style.display = 'none';
});




//评论点赞
function likeIcon() {
  // 点赞
  const likeIcons = document.querySelectorAll('.like-icon');
  // console.log('likeIcons', likeIcons);
  likeIcons.forEach(function (icon) {
    icon.addEventListener('click', function (even) {
      console.log('ssssss', even.target.getAttribute("m_id"));
      var id = even.target.getAttribute("m_id");
      var spanElement = icon.nextElementSibling;
      var count = spanElement.textContent
      if (icon.classList.contains("red")) {
        spanElement.textContent = count - 1;
      } else {
        spanElement.textContent = Number(count) + 1;
      }
      likeClick(id)
      // 切换红色类
      icon.classList.toggle('red');
    });
  });
}