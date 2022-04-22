function toggleMenu() {
    var menu = document.getElementById("admin_tabs");
    var menu_btn = document.getElementById("toggle_menu_btn");
    menu.classList.toggle("active");
    menu_btn.classList.toggle("active");
}