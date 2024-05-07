document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    const today = new Date();
    const maxDate = new Date();

    // 修正为当日日期，忽略时区
    today.setUTCHours(0, 0, 0, 0); // 设置为UTC时间的午夜，防止时区影响
    maxDate.setUTCHours(0, 0, 0, 0);
    maxDate.setUTCDate(today.getUTCDate() + 6); // 设置为七天后

    dateInput.min = today.toJSON().split('T')[0];
    dateInput.max = maxDate.toJSON().split('T')[0];
});