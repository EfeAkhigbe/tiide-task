function Tiide() {
  var displayName = document.getElementById("name").value;
  var displayEmail = document.getElementById("email").value;
  var displayPhone = document.getElementById("phone").value;

  window.alert(
    "Thank you " +
      displayName +
      " !" +
      " Here is your data." +
      " Email: " +
      displayEmail +
      " Phone Number: " +
      displayPhone
  );
}
