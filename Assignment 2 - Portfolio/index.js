// let overlay = document.getElementById('over');

// function removeOverlay(){
//     overlay.classList.add('overlay-hidden');
// }

let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let cross = document.getElementById('cross');

menu.addEventListener('click', () => {
    nav.classList.remove('nav-d-none');
})

cross.addEventListener('click', () => {
    nav.classList.add('nav-d-none');
})

let drop1 = document.getElementById('dropdown1');
let drop2 = document.getElementById('dropdown2');
let drop3 = document.getElementById('dropdown3');
let drop4 = document.getElementById('dropdown4');

let para1 = document.getElementById('p1');
let para2 = document.getElementById('p2');
let para3 = document.getElementById('p3');
let para4 = document.getElementById('p4');

drop1.addEventListener('click', () => {
    if(para1.dataset.open === 'false'){
        para1.dataset.open = 'true';
        para1.classList.remove('paragraph-hidden');
        para1.classList.add('paragraph-hidden-end');
        drop1.classList.add('flip-vertical');
    } else {
        para1.dataset.open = 'false';
        para1.classList.add('paragraph-hidden');
        para1.classList.remove('paragraph-hidden-end');
        drop1.classList.remove('flip-vertical');
    }

    if(para2.dataset.open === 'true'){
        para2.classList.add('paragraph-hidden');
        para2.dataset.open = 'false';
        para2.classList.remove('paragraph-hidden-end');
        drop2.classList.remove('flip-vertical');
    }

    if(para3.dataset.open === 'true'){
        para3.classList.add('paragraph-hidden');
        para3.dataset.open = 'false';
        para3.classList.remove('paragraph-hidden-end');
        drop3.classList.remove('flip-vertical');
    }

    if(para4.dataset.open === 'true'){
        para4.classList.add('paragraph-hidden');
        para4.dataset.open = 'false';
        para4.classList.remove('paragraph-hidden-end');
        drop4.classList.remove('flip-vertical');
    }
});

drop2.addEventListener('click', () => {
    if(para2.dataset.open === 'false'){
        para2.dataset.open = 'true';
        para2.classList.remove('paragraph-hidden');
        para2.classList.add('paragraph-hidden-end');
        drop2.classList.add('flip-vertical');
    } else {
        para2.dataset.open = 'false';
        para2.classList.add('paragraph-hidden');
        para2.classList.remove('paragraph-hidden-end');
        drop2.classList.remove('flip-vertical');
    }

    if(para1.dataset.open === 'true'){
        para1.classList.add('paragraph-hidden');
        para1.dataset.open = 'false';
        para1.classList.remove('paragraph-hidden-end');
        drop1.classList.remove('flip-vertical');
    }

    if(para3.dataset.open === 'true'){
        para3.classList.add('paragraph-hidden');
        para3.dataset.open = 'false';
        para3.classList.remove('paragraph-hidden-end');
        drop3.classList.remove('flip-vertical');
    }

    if(para4.dataset.open === 'true'){
        para4.classList.add('paragraph-hidden');
        para4.dataset.open = 'false';
        para4.classList.remove('paragraph-hidden-end');
        drop4.classList.remove('flip-vertical');
    }
});

drop3.addEventListener('click', () => {
    if(para3.dataset.open === 'false'){
        para3.dataset.open = 'true';
        para3.classList.remove('paragraph-hidden');
        para3.classList.add('paragraph-hidden-end');
        drop3.classList.add('flip-vertical');
    } else {
        para3.dataset.open = 'false';
        para3.classList.add('paragraph-hidden');
        para3.classList.remove('paragraph-hidden-end');
        drop3.classList.remove('flip-vertical');
    }

    if(para2.dataset.open === 'true'){
        para2.classList.add('paragraph-hidden');
        para2.dataset.open = 'false';
        para2.classList.remove('paragraph-hidden-end');
        drop2.classList.remove('flip-vertical');
    }

    if(para1.dataset.open === 'true'){
        para1.classList.add('paragraph-hidden');
        para1.dataset.open = 'false';
        para1.classList.remove('paragraph-hidden-end');
        drop1.classList.remove('flip-vertical');
    }

    if(para4.dataset.open === 'true'){
        para4.classList.add('paragraph-hidden');
        para4.dataset.open = 'false';
        para4.classList.remove('paragraph-hidden-end');
        drop4.classList.remove('flip-vertical');
    }
});

drop4.addEventListener('click', () => {
    if(para4.dataset.open === 'false'){
        para4.dataset.open = 'true';
        para4.classList.remove('paragraph-hidden');
        para4.classList.add('paragraph-hidden-end');
        drop4.classList.add('flip-vertical');
    } else {
        para4.dataset.open = 'false';
        para4.classList.add('paragraph-hidden');
        para4.classList.remove('paragraph-hidden-end');
        drop4.classList.remove('flip-vertical');
    }

    if(para2.dataset.open === 'true'){
        para2.classList.add('paragraph-hidden');
        para2.dataset.open = 'false';
        para2.classList.remove('paragraph-hidden-end');
        drop2.classList.remove('flip-vertical');
    }

    if(para3.dataset.open === 'true'){
        para3.classList.add('paragraph-hidden');
        para3.dataset.open = 'false';
        para3.classList.remove('paragraph-hidden-end');
        drop3.classList.remove('flip-vertical');
    }

    if(para1.dataset.open === 'true'){
        para1.classList.add('paragraph-hidden');
        para1.dataset.open = 'false';
        para1.classList.remove('paragraph-hidden-end');
        drop1.classList.remove('flip-vertical');
    }
});