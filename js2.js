

var form = document.getElementById('loginForm');

form.onsubmit = function (event) {
  event.preventDefault();
  var login  = document.getElementById('name').value;
  var pass  = document.getElementById('pass').value;

  var xhr = new XMLHttpRequest();

  xhr.open('GET','login.php?login=' + login + '&pass=' + pass, true);

  xhr.send();

  xhr.onreadystatechange = function () {

    if(xhr.readyState != 4) return;
    if(xhr.status != 200) {
      console.log(xhr.status, ' ', xhr.statusText);
    }else {
      console.log(xhr.responseText);

      if(xhr.responseText == 'welcome') {
        window.location = 'http://ajax2/page.html';
      }
    }
  };
  console.log(' js login form');
};

