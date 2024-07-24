function openSidebar() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.display = "inline";
  sidebar.style.position = "fixed";
  sidebar.style.left = "0";
  sidebar.style.top = "0";
  sidebar.style.zIndex = "12";
  sidebar.style.width = "215px"; // Set your desired width
  
  // Add event listener to close the sidebar when clicking outside of it
  document.addEventListener('click', closeSidebarOnClickOutside);
}

function closeSidebar() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.display = "none";
  document.removeEventListener('click', closeSidebarOnClickOutside);
}

function closeSidebarOnClickOutside(event) {
  const sidebar = document.getElementById("mySidebar");
  if (!sidebar.contains(event.target) && event.target.id !== 'menu_bar') {
    closeSidebar();
  }
}

const menuButton = document.getElementById('menu_bar');
menuButton.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  openSidebar();
});

const menuButtonOff = document.getElementById('menu_barOff');
menuButtonOff.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  closeSidebar();
});

const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
