function showPage(pageName){
    document.querySelector('.dashboard-content').classList.add('hidden');
    document.querySelector('.work-pleace-content').classList.add('hidden');
    document.querySelector('.about-me-content').classList.add('hidden');

    document.querySelector(`.${pageName}-content`).classList.remove('hidden');
    console.log(`${pageName}`);
    
    if(pageName === 'dashboard'){
        document.querySelector(`.${pageName}`).classList.add('menu-side-bar-selected');
        document.querySelector('.work-pleace').classList.remove('menu-side-bar-selected');
        document.querySelector('.about-me').classList.remove('menu-side-bar-selected');
    }else if(pageName === 'work-pleace'){
        document.querySelector('.dashboard').classList.remove('menu-side-bar-selected');
        document.querySelector(`.${pageName}`).classList.add('menu-side-bar-selected');
        document.querySelector('.about-me').classList.remove('menu-side-bar-selected');
    }else if(pageName === 'about-me'){
        document.querySelector('.dashboard').classList.remove('menu-side-bar-selected');
        document.querySelector('.work-pleace').classList.remove('menu-side-bar-selected');
        document.querySelector(`.${pageName}`).classList.add('menu-side-bar-selected');
    }

    
}
document.querySelector('.dashboard').classList.add('menu-side-bar-selected');
document.querySelector('.work-pleace-content').classList.add('hidden');
document.querySelector('.about-me-content').classList.add('hidden');
