//side
const menuItems = document.querySelectorAll('.menuitem');


//remove active class
const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        } else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display ='none';
        }
    })
})  


//==============messsages=================
const messagesNotification = document.querySelector('#message-notifications');

const messages = document.querySelector('.messages')

const messageSearch = document.querySelector('#message-search')

const message = messages.querySelectorAll('.message')




messagesNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
messagesNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(()=>{
        messages.style.boxShadow = 'none'
    }, 2000);
})

//message search

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();

        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)


//Theme customise================================

const theme = document.querySelector('#theme')

const themeModal = document.querySelector('.customize-theme')

var root = document.querySelector(':root');

//theme display
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}


const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}


//close modal
themeModal.addEventListener('click', closeThemeModal);

//open modal
theme.addEventListener('click', openThemeModal)










////////////////////////font size*********************************************************************
const fontSizes = document.querySelectorAll('.choose-size span')

///remove active

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () =>{
       removeSizeSelector();
       let fontSize;
       size.classList.toggle('active');

    if (size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');

    }else if (size.classList.contains('font-size-2')){
        fontSize = '13px';

        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');

    }else if (size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');

    }else if (size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');

    }else if (size.classList.contains('font-size-5')){
        fontSize = '22px';

        root.style.setProperty('--sticky-top-left', '-12rem');
        root.style.setProperty('--sticky-top-right', '-35rem');
    }

    //change root font size html Element
    document.querySelector('html').style.fontSize = fontSize;

      })
})








//////////////////////////primary colors//////////////////
const colorPalette = document.querySelectorAll('.choose-color span');


//rome active
const removeActive = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}


colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
     
        removeActive();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if (color.classList.contains('color-2')){
            primaryHue = 52;
        }else if (color.classList.contains('color-3')){
            primaryHue = 352;
        }else if (color.classList.contains('color-4')){
            primaryHue = 152;
        }else if (color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


///////////////Background theme*****************

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorLightess;
let whiteColorLightess;
let darkColorLightess;

//change background color
const changeBG =()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightess);
    root.style.setProperty('--dark-color-lightness', darkColorLightess);
    root.style.setProperty('--white-color-lightness', whiteColorLightess);
}


//////BG1////////////////
Bg1.addEventListener('click', ()=>{
    darkColorLightess = '17%';
    whiteColorLightess = '100%';
    lightColorLightess = '95%';
    //add active class
    Bg1.classList.add('active');

    //remove active class
    Bg2.classList.remove('active');

    Bg3.classList.remove('active');
  
    
    changeBG()
})


///////BG2////////////////

Bg2.addEventListener('click', ()=>{
    darkColorLightess = '95%';
    whiteColorLightess = '20%';
    lightColorLightess = '15%';

    //add active class
    Bg2.classList.add('active');

    //remove active class
    Bg1.classList.remove('active');

    Bg3.classList.remove('active');
 
    changeBG();
})

///BG3//////////////////

Bg3.addEventListener('click', ()=>{
    darkColorLightess = '95%';
    whiteColorLightess = '10%';
    lightColorLightess = '0%';

    //add active class
    Bg3.classList.add('active');

    //remove active class
    Bg1.classList.remove('active');

    Bg2.classList.remove('active');
 
    changeBG();
})