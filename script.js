document.addEventListener('DOMContentLoaded', function () {
  var navigation = document.getElementById('careerNavigation');
  var navLinks = document.querySelectorAll('#careerNavigation .nav-link, #careerNavigation .nav-cta');
  var form = document.getElementById('consultForm');
  var formMessage = document.getElementById('formMessage');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.jQuery && navigation.classList.contains('show')) {
        window.jQuery(navigation).collapse('hide');
      }
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var name = document.getElementById('fullName').value.trim();
    var phone = document.getElementById('phoneNumber').value.trim();
    var subject = encodeURIComponent('Đăng ký tư vấn CodeGym Career');
    var body = encodeURIComponent('Xin chào CodeGym,\n\nTôi muốn nhận tư vấn về CodeGym Career.\nHọ và tên: ' + name + '\nSố điện thoại: ' + phone + '\n\nXin cảm ơn.');
    formMessage.textContent = 'Đang mở ứng dụng email để bạn gửi yêu cầu tới info@codegym.vn.';
    window.location.href = 'mailto:info@codegym.vn?subject=' + subject + '&body=' + body;
  });
});