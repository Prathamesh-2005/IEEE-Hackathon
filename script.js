alert("Welcome To Believers Finance dashboard")
function openSidebar() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.display="inline";
  sidebar.style.position="fixed";
  sidebar.style.left="0"
  sidebar.style.top="0"
  sidebar.style.zIndex="12";
  sidebar.style.width = "180px"; // Set your desired width
}
function closeSidebar(){
  const Sidebar=document.getElementById("mySidebar");
  Sidebar.style.display="none";
}
const sidebar=document.getElementById("aside")
const menu_button=document.getElementById('menu_bar')
menu_button.addEventListener('click',openSidebar)


const menu_buttonff=document.getElementById('menu_barOff')
menu_buttonff.addEventListener('click',closeSidebar)


const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

