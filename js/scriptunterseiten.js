let socials_button = document.getElementById('socials_button')

var styleSocials = document.querySelector('.socials').style;
var stylesocials_button = document.querySelector('.socials_button').style;


let socials_projektliste_ausklappen = document.getElementById('socials_projektliste_ausklappen')

var styleSocialsProjektliste = document.querySelector('.socials_projektliste').style;
var styleProjektlisteAusklappButton = document.querySelector('.socials_projektliste_ausklappen').style;

let projekt_ausklapp_button = document.getElementById('ausklapp_button')

var styleProjektliste = document.querySelector('.projektliste').style;
var styleAusklappButton = document.querySelector('.ausklapp_button').style;


//Click event for socials 
var socials_ausgeklappt = false;

socials_button.addEventListener('click', ()=> {
    if(socials_ausgeklappt == false){
        socials_ausgeklappt = true;
        styleSocials.setProperty('--socials', 'initial');
    }else{
        socials_ausgeklappt = false;
        styleSocials.setProperty('--socials', 'none');
    }
});

//Click event for projectlist in socials 
var socials_projektliste_ausgeklappt = false;

socials_projektliste_ausklappen.addEventListener('click', () => {
   if(socials_projektliste_ausgeklappt == false){
    socials_projektliste_ausgeklappt = true;
    styleSocialsProjektliste.setProperty('--socials_projektliste', 'flex');
    styleProjektlisteAusklappButton.setProperty('--projektliste_rotation_degree', '180deg');
   }else{
    socials_projektliste_ausgeklappt = false;
    styleSocialsProjektliste.setProperty('--socials_projektliste', 'none');
    styleProjektlisteAusklappButton.setProperty('--projektliste_rotation_degree', '0deg');
   }
});

//Click event for projects
var project_ausgeklappt = false;

projekt_ausklapp_button.addEventListener('click', ()=>{
    if (project_ausgeklappt == false ){
        project_ausgeklappt = true;
        styleProjektliste.setProperty('--projektliste', 'initial');
        styleAusklappButton.setProperty('--rotation_degree', '180deg');
    }else{
        project_ausgeklappt = false;
        styleProjektliste.setProperty('--projektliste', 'none');
        styleAusklappButton.setProperty('--rotation_degree', '0deg');
        

    }
});