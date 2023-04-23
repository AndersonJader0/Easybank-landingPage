var openBar = () =>{
  document.getElementById('menu-content').style.height = '288px';  
  document.getElementById('icon-close').style.display = 'block'; 
  document.getElementById('icon-hamburger').style.display = 'none';  
}

var closeBar = () =>{
  document.getElementById('menu-content').style.height = '0'; 
  document.getElementById('icon-close').style.display = 'none'; 
  document.getElementById('icon-hamburger').style.display = 'block'; 
}