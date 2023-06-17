fetch("/sideinfo.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sideBar").innerHTML = data;
  });