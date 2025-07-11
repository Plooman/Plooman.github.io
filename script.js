function showPage(pageName){
    document.querySelector('.dashboard-content').classList.add('hidden');
    document.querySelector('.work-pleace-content').classList.add('hidden');
    document.querySelector('.about-me-content').classList.add('hidden');

    document.querySelector(`.${pageName}-content`).classList.remove('hidden');
    
    if(pageName === 'dashboard'){
        document.querySelector(`.${pageName}`).classList.add('menu-side-bar-selected');
        document.querySelector('.work-pleace').classList.remove('menu-side-bar-selected');
        document.querySelector('.about-me').classList.remove('menu-side-bar-selected');

        document.querySelector('.header-title').textContent = 'Dashboard'
    }else if(pageName === 'work-pleace'){
        document.querySelector('.dashboard').classList.remove('menu-side-bar-selected');
        document.querySelector(`.${pageName}`).classList.add('menu-side-bar-selected');
        document.querySelector('.about-me').classList.remove('menu-side-bar-selected');

        document.querySelector('.header-title').textContent = 'Work Place'
    }else if(pageName === 'about-me'){
        document.querySelector('.dashboard').classList.remove('menu-side-bar-selected');
        document.querySelector('.work-pleace').classList.remove('menu-side-bar-selected');
        document.querySelector(`.${pageName}`).classList.add('menu-side-bar-selected');

        document.querySelector('.header-title').textContent = 'About Me'
    }

    
}
document.querySelector('.dashboard').classList.add('menu-side-bar-selected');
document.querySelector('.work-pleace-content').classList.add('hidden');
document.querySelector('.about-me-content').classList.add('hidden');

const icon = document.querySelector('.icon-menu img');
const sidebar = document.querySelector('.side-bar');
document.querySelector('.main-content')

let open = false;

icon.addEventListener('click', function () {
console.log(`${open}`);
    icon.classList.remove(open ? 'rotate-animation-kekanan' : 'rotate-animation-kekiri');
    void icon.offsetWidth;
    icon.classList.add(open ? 'rotate-animation-kekiri' : 'rotate-animation-kekanan');
    if(open === false){
        document.querySelector('.main-content').style.marginLeft = '';
    }
    else if(open === true){
        document.querySelector('.main-content').style.marginLeft = '150px';
    }

    sidebar.classList.remove(open ? 'nutup-SideBar-animation' : 'buka-SideBar-animation');
    void sidebar.offsetWidth;
    sidebar.classList.add(open ? 'buka-SideBar-animation' : 'nutup-SideBar-animation');

    open = !open;
});