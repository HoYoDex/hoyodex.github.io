fetch("contents.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("pagecontent").innerHTML = data;
  });
  
document.getElementById("tabber").innerHTML = "table";