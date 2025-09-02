/** 
const toggleSidebarBtn = document.getElementById('toggleSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.querySelector('.sidebar');
const themeToggle = document.getElementById('themeToggle');

toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Toggle Dark/Light Theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
*/

const toggleSidebarBtn = document.getElementById('toggleSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.querySelector('.sidebar');
const themeToggle = document.getElementById('themeToggle');
const switchCircle = document.querySelector('.switch-circle');

toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  switchCircle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
  switchCircle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    switchCircle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    switchCircle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  }
});
