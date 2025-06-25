// const sidebarNavigationEl=document.getElementById("panel-menu")
// const sidebarOpenNavigationEl=document.getElementById("open-nav-sidebar")

// sidebarOpenNavigationEl.addEventListener("click",()=>{
//     sidebarNavigationEl.classList.toggle(".side-bar-navigation")
// })
// Sidebar toggle logic
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.add('open');
        overlay.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });
});
