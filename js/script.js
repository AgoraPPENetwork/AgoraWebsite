
/*declaration of variables*/

let schriftzug = document.getElementById('schriftzug')
let schriftzug_font_big1 = document.getElementById('schriftzug_font_big1')
let schriftzug_font_small = document.getElementById('schriftzug_font_small')
let schriftzug_font_big2 = document.getElementById('schriftzug_font_big2')

let socials_button = document.getElementById('socials_button')
let socials_projektliste_ausklappen = document.getElementById('socials_projektliste_ausklappen')
let projekt_ausklapp_button = document.getElementById('ausklapp_button')
let close_projektliste = document.getElementById('close_projektliste')

let wrapper = document.getElementById('wrapper')
let project1 = document.getElementById('project1')
let project2 = document.getElementById('project2')
let project3 = document.getElementById('project3')
let project4 = document.getElementById('project4')

document.documentElement.classList.add('js');

/*
let title1 = document.getElementById('title1');
let link1 = document.getElementById('link1');
let title2 = document.getElementById('title2');
let link2 = document.getElementById('link2');
let title3 = document.getElementById('title3');
let link3 = document.getElementById('link3');
let title4 = document.getElementById('title4');
let link4 = document.getElementById('link4');
*/

var styleElem = document.querySelector('.schriftzug_font_small').style;
var styleSocials = document.querySelector('.socials').style;
var stylesocials_button = document.querySelector('.socials_button').style;
var styleschriftzug_tiny = document.querySelector('.schriftzug_tiny').style;
var styleProjektliste = document.querySelector('.projektliste').style;
var styleSocialsProjektliste = document.querySelector('.socials_projektliste').style;
var styleProjektlisteAusklappButton = document.querySelector('.socials_projektliste_ausklappen').style;
var styleAusklappButton = document.querySelector('.ausklapp_button').style;
var stylePicture = document.querySelector('.picture').style;

var styleRoot = getComputedStyle(document.body);

//Variables and functions for project animations
const range = 125; 
const hold = 300;
var iteration = (2*range + hold);
const start = 3050;

function begin(project_number){
    return start + (project_number*iteration);
}
  
function end(project_number){
    return start + ((project_number+1)*iteration);
}
  
function shrink_function(value, start, range){
    return 10*Math.sin((Math.PI/2)+((Math.PI/2)*((value-start)/range)));
}
  
function grow_function(value, start, range){
    return 10*Math.sin(((Math.PI/2)*((value-start)/range)));
}

//scroll events
//updates the schriftzug animation, also called on resize so both use the same calculation
function updateSchriftzug() {
    let value = window.scrollY;
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let scrollHeight = document.body.scrollHeight;
    let scrollInPercent = (value*100)/scrollHeight;

    var schriftzug_margin = /*Number(styleRoot.getPropertyValue('--schriftzug_margin')); */ vw - (2*(75)) - ((80 * ((1 - scrollInPercent/5.5) + /*1/5*/((230*100/vw)/80) * (scrollInPercent/5.5)))/100 * vw);

    if(scrollInPercent <= 5.5) {
        schriftzug.style.display = 'flex';

     
        if( (80 * ((1 - scrollInPercent/5.5) + /*1/5*/((230*100/vw)/80) * (scrollInPercent/5.5))) > ((230*100)/vw)){
            schriftzug.style.width = 80 * ((1 - scrollInPercent/5.5) + /*1/5*/((230*100/vw)/80) * (scrollInPercent/5.5))+ '%' ;
        }else{ 
            schriftzug.style.width = 230 + 'px';
        }


        var min_margin = /*-(100 - 2*((74.2*100)/vw)- ((230*100)/vw))*/-(vw - (2*(75)) - 230);
    
        if(-schriftzug_margin * (scrollInPercent/5.5) > min_margin  ){
            schriftzug.style.marginLeft = -schriftzug_margin * (scrollInPercent/5.5) + 'px';
        }else{ 
            schriftzug.style.marginLeft = min_margin + 'px';
        }

        if( (100 *((1 - scrollInPercent/5.5) + /*1/11*/ ((56*100/vh)/100) * (scrollInPercent/5.5))) > (56*100/vh)){ 
            schriftzug.style.height = 100 *((1 - scrollInPercent/5.5) + /*1/11*/ ((56*100/vh)/100) * (scrollInPercent/5.5)) + 'vh';
        }else{ 
            schriftzug.style.height = 56 + 'px';
        }
     
        if(window.scrollY > 200){
            schriftzug.style.zIndex= 99;
        }else{
            schriftzug.style.zIndex= 96;
        }


        var schriftzug_size = styleRoot.getPropertyValue('--schriftzug-size');
        schriftzug_size = Number( schriftzug_size.substring(0, schriftzug_size.length - 2));

        if((schriftzug_size * ((1 - scrollInPercent/5.5) + /*1/5*/ (27/schriftzug_size) * (scrollInPercent/5.5))) > 27){
            schriftzug_font_big1.style.fontSize = schriftzug_size * ((1 - scrollInPercent/5.5) + /*1/5*/ (27/schriftzug_size) * (scrollInPercent/5.5)) + 'px';
            /*schriftzug_font_small.style.fontSize = (schriftzug_size * ((1 - scrollInPercent/5.5) +  (27/schriftzug_size) * (scrollInPercent/5.5))) / 4.5 + 'px'; */
            schriftzug_font_big2.style.fontSize = schriftzug_size * ((1 - scrollInPercent/5.5) + /*1/5*/ (27/schriftzug_size) * (scrollInPercent/5.5)) + 'px';
        }else {
            schriftzug_font_big1.style.fontSize = 27 + 'px';
            schriftzug_font_small.style.fontSize = 6 + 'px';
            schriftzug_font_big2.style.fontSize = 27 + 'px';
        }

        var margin = styleRoot.getPropertyValue('--margin-schriftzug');
        margin = Number(margin.substring(0, margin.length - 2));
     
        if((margin *((1 - scrollInPercent/5.5)+ /*1/5*/(8/margin) * (scrollInPercent/5.5))) > 8){
            schriftzug_font_big1.style.margin = margin *((1 - scrollInPercent/5.5)+ /*1/5*/(8/margin) * (scrollInPercent/5.5))+ 'px';
            schriftzug_font_small.style.margin = margin *((1 - scrollInPercent/5.5) + /*1/5*/(8/margin) * (scrollInPercent/5.5))+ 'px';
            schriftzug_font_big2.style.margin = margin *((1 - scrollInPercent/5.5) + /*1/5*/(8/margin) * (scrollInPercent/5.5))+ 'px';
        }else{
            schriftzug_font_big1.style.margin = 8 +'px';
            schriftzug_font_small.style.margin = 8 +'px';
            schriftzug_font_big2.style.margin = 8 +'px';
        } 
    

        var SSF_initial_height = styleRoot.getPropertyValue('--SSF_initial_height');
        SSF_initial_height = Number(SSF_initial_height.substring(0, SSF_initial_height.length -2));

        var height = SSF_initial_height * ( (1 - scrollInPercent/5.5)+ /*1/5*/1/SSF_initial_height * (scrollInPercent/5.5)) +'px';
        styleElem.setProperty('--height',  height);
        var left = 21 +'%';
        styleElem.setProperty('--left',  left);

        styleschriftzug_tiny.setProperty('--logo_visibility', 'none');
     
    }else{
        schriftzug.style.display = 'none';
        styleschriftzug_tiny.setProperty('--logo_visibility', 'flex');
    }
   
       
    //styleElem.setProperty('--value', '\''+ value +'\'');
  
    if(scrollInPercent >= 2.4) {
        if(value >= 200 && value <= 850){
            wrapper.style.height = 150 * ((1 - (value-200)/650 ) + 5/10 * ((value-200)/650 )) +'vh';
        }

        /*
        var initial_project_width = Number(styleRoot.getPropertyValue('--initial_project_width'));

        if(value >= begin(0) && value <= end(0)){
            title1.style.transform = 'scale(1)';
            link1.style.transform = 'scale(1)';
            title1.style.transition = 'transform 0.5s ease-out';
            link1.style.transition = 'transform 0.5s ease-out'; 
            var p1_width = (value <= begin(0)+range)?  initial_project_width + grow_function(value, begin(0), range) +'%' : ((value >= end(0)-range)?  initial_project_width + shrink_function(value, end(0)-range, range) + '%': (initial_project_width +10) +'%' ); 
            project1.style.maxWidth = p1_width;
        }else{
            project1.style.maxWidth = initial_project_width+'%';
            title1.style.transform = 'scale(0)';
            link1.style.transform = 'scale(0)';
            title1.style.transition = 'transform 0.5s ease-in';
            link1.style.transition = 'transform 0.5s ease-in'; 
        }
        if(value >= begin(1) && value <= end(1)){
            title2.style.transform = 'scale(1)';
            link2.style.transform = 'scale(1)';
            title2.style.transition = 'transform 0.5s ease-out';
            link2.style.transition = 'transform 0.5s ease-out'; 
            var p2_width = (value <= begin(1)+range) ? initial_project_width + grow_function(value, begin(1), range) +'%' : ((value >= end(1)-range)?  initial_project_width + shrink_function(value, end(1)-range, range) + '%': (initial_project_width +10) +'%' );   
            project2.style.maxWidth = p2_width;
        }else{
            title2.style.transform = 'scale(0)';
            link2.style.transform = 'scale(0)';
            title2.style.transition = 'transform 0.5s ease-in';
            link2.style.transition = 'transform 0.5s ease-in'; 
            project2.style.maxWidth = initial_project_width+'%'
        }
        if(value >= begin(2) && value <= end(2)){
            title3.style.transform = 'scale(1)';
            link3.style.transform = 'scale(1)';
            title3.style.transition = 'transform 0.5s ease-out';
            link3.style.transition = 'transform 0.5s ease-out'; 
            var p3_width = (value <= begin(2)+range) ? initial_project_width + grow_function(value, begin(2), range) +'%' : ((value >= end(2)-range)?  initial_project_width + shrink_function(value, end(2)-range, range) + '%' : (initial_project_width +10) +'%' );
            project3.style.maxWidth =  p3_width;   
        }else{
            project3.style.maxWidth = initial_project_width+'%';
            title3.style.transform = 'scale(0)';
            link3.style.transform = 'scale(0)';
            title3.style.transition = 'transform 0.5s ease-in';
            link3.style.transition = 'transform 0.5s ease-in'; 
        }
        if(value >= begin(3) && value <= end(3)){
            title4.style.transform = 'scale(1)';
            link4.style.transform = 'scale(1)';
            title4.style.transition = 'transform 0.5s ease-out';
            link4.style.transition = 'transform 0.5s ease-out'; 
            var p4_width = (value <= begin(3)+range) ? initial_project_width + grow_function(value, begin(3), range) +'%' :  + (initial_project_width +10) +'%';
            project4.style.maxWidth = p4_width;
        }else{
            project4.style.maxWidth = initial_project_width+'%';
            title4.style.transform = 'scale(0)';
            link4.style.transform = 'scale(0)';
            title4.style.transition = 'transform 0.5s ease-in';
            link4.style.transition = 'transform 0.5s ease-in'; 
        }
        */
    }

}

window.addEventListener('scroll', updateSchriftzug);


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

//Resize event
window.addEventListener('resize', ()=> {
    if(window.innerWidth <= 640){
        styleProjektliste.setProperty('--projektliste', 'none');
    }else {
        if(project_ausgeklappt == true){
        styleProjektliste.setProperty('--projektliste', 'initial');
        }
    }

    updateSchriftzug();
});

//upcoming events: hide past ones, mark the next one, show a countdown
const vaToday = document.getElementById('va_today');
const today = new Date();
today.setHours(0, 0, 0, 0);
vaToday.textContent = 'Heute: ' + today.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });

let upcomingCount = 0;
document.querySelectorAll('.termin').forEach((termin) => {
    const date = new Date(termin.dataset.date + 'T00:00:00');
    const days = Math.round((date - today) / 86400000);

    if (days < 0) {
        termin.hidden = true;
        return;
    }

    upcomingCount++;
    if (upcomingCount === 1) {
        termin.classList.add('is_next');
    }
    termin.querySelector('.termin_countdown').textContent =
        days === 0 ? 'Heute' : days === 1 ? 'Morgen' : 'in ' + days + ' Tagen';
});

if (upcomingCount === 0) {
    document.querySelector('.termine_empty').hidden = false;
}

//fade in archive entries once they enter the viewport
const archivObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is_visible');
            archivObserver.unobserve(entry.target);
        }
    })
}, { rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.archiv_item, .text-block').forEach((element) => archivObserver.observe(element));

//Mouse move effect 
/*
window.addEventListener('mousemove', (e)=> {

    var xValue = e.clientX - (window.innerWidth/2);
    var yValue = e.clientY - (window.innerHeight/2);
    console.log(xValue, yValue);

    if(xValue >= 0){
      var left = -Math.log2(1+(Math.abs(xValue)/35))
    }else{
      var left = Math.log2(1+(Math.abs(xValue)/35))

    }
    if(yValue >= 0){
        var bottom = Math.log2(1+(Math.abs(yValue)/15))
    }else{
        var bottom = -Math.log2(1+(Math.abs(yValue)/15))
    }

    stylePicture.left = 80 + 2*left + 'px';
    stylePicture.bottom = -530 + 1.2*bottom + 'px';

});
*/

//observer for the project tiltes that triggers the pop up animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('projectPreviewShow');
        } else {
            entry.target.classList.remove('projectPreviewShow');
        }
    })
});

const projectPreview = document.querySelectorAll('.projectPreviewHidden');
projectPreview.forEach((element) => observer.observe(element));