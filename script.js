const toggleNavList = document.getElementById('toggle-btn');
const navList = document.querySelector('.nav-list');

function toggleList() {
    navList.classList.toggle('active');
    // console.log('nice');
}

toggleNavList.addEventListener('click', toggleList);