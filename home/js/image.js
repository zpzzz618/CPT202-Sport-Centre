// 图标、数字、服务和规则的索引  
let iconIndex = 0;  
let numberIndex = 0;  
let serviceIndex = 0;  
let ruleIndex = 0;  
  
// 图标、数字、服务和规则的元素数组  
const icons = document.querySelectorAll('.icon');  
const numbers = document.querySelectorAll('.number-item');  
const services = document.querySelectorAll('.service-item');  
const rules = document.querySelectorAll('.rule-item');  
  
// 隐藏所有图标、数字、服务和规则的初始函数  
function hideAll() {  
    icons.forEach(icon => icon.style.display = 'none');  
    numbers.forEach(number => number.style.display = 'none');  
    services.forEach(service => service.style.display = 'none');  
    rules.forEach(rule => rule.style.display = 'none');  
}  
  
// 显示指定索引的图标、数字、服务和规则  
function showAtIndex(index) {  
    icons[index].style.display = 'block';  
    numbers[index].style.display = 'block';  
    services[index].style.display = 'block';  
    rules[index].style.display = 'block';  
}  
  
// 每5秒执行一次的函数，用于轮换图标、数字、服务和规则  
function rotateItems() {  
    hideAll(); // 隐藏所有元素  
  
    // 更新索引，如果超过最大索引则回到0  
    iconIndex = (iconIndex + 1) % icons.length;  
    numberIndex = (numberIndex + 1) % numbers.length;  
    serviceIndex = (serviceIndex + 1) % services.length;  
    ruleIndex = (ruleIndex + 1) % rules.length;  
  
    // 显示新索引对应的元素  
    showAtIndex(iconIndex);  
    showAtIndex(numberIndex);  
    showAtIndex(serviceIndex);  
    showAtIndex(ruleIndex);  
}  
  
// 设置定时器，每5秒执行一次rotateItems函数  
setInterval(rotateItems, 5000);  
  
// 初始调用rotateItems函数以显示第一个图标、数字、服务和规则  
rotateItems();