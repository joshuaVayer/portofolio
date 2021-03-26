// Sidebar menu
let sidebar = document.getElementById('sidebarDiv');
let btnOpen = document.getElementById('openSidebar');
let btnClose = document.getElementById('closeSidebar');

const openSidebar = () => sidebar.classList.add('sidebar-display');
const closeSidebar = () => sidebar.classList.remove('sidebar-display');

btnOpen.addEventListener('click', openSidebar);
btnClose.addEventListener('click', closeSidebar);