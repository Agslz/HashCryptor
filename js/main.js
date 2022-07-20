function hashing() {
  var password = document.getElementById("password").value;

  if (password) {
    var hashed = CryptoJS.MD5(password);
    document.getElementById("hash").value = hashed;
  } else {
    alert("Password is missing");
  }
}

function reset() {
  document.getElementById("password").value = "";
  document.getElementById("hash").value = "";
  document.getElementById("myTooltip").innerHTML = "";

  checkflag = document.getElementById("check");

  if (!checkflag) {
    //Do nothing
  } else {
    checkflag.checked = false;
    document.getElementById("password").type = "password";
  }
}

function visibility() {
  var x = document.getElementById("password");

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function copy() {
  var copyText = document.getElementById("hash");
  copyText.select();
  copyText.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.getElementById("myTooltip").innerHTML = "Copied!";
}
