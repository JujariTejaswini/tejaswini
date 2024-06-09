document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var emailOrPhone = document.getElementById("emailOrPhone").value;
  
  // Here you can implement your logic for sending reset link via email or SMS
  // For demonstration purposes, let's just display a message
  document.getElementById("message").innerText = "Reset link sent to " + emailOrPhone;
});