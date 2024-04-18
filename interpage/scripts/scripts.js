const nav = document.querySelector('.sidebar')
fetch('/interpage/sidebar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})
  
  src="https://kit.fontawesome.com/8be5f38e3c.js"
  crossorigin="anonymous"