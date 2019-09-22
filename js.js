var xhr = new XMLHttpRequest();

xhr.open('GET','players.json', true);

xhr.send();

xhr.onreadystatechange = function () {
  console.log('fsdfsf');
  if(xhr.readyState != 4) return;
  if(xhr.status != 200) {
    console.log(xhr.status, ' ', xhr.statusText);
  }else {
    console.log(xhr.responseText);
    console.log(JSON.parse(xhr.responseText));
  }
};