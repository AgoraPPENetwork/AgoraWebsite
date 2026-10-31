
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
var projektliste = document.querySelector('.projektliste');
var socialsProjektliste = document.querySelector('.socials_projektliste');
var socialsChevron = document.querySelector('.socials_projektliste_ausklappen');
var navChevron = document.querySelector('.ausklapp_button');
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
window.addEventListener('scroll', ()=> {
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

});


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
    socials_projektliste_ausgeklappt = !socials_projektliste_ausgeklappt;
    socialsProjektliste.classList.toggle('is_open', socials_projektliste_ausgeklappt);
    socialsChevron.classList.toggle('is_open', socials_projektliste_ausgeklappt);
    socials_projektliste_ausklappen.setAttribute('aria-expanded', socials_projektliste_ausgeklappt);
});

//Click event for projects
var project_ausgeklappt = false;

projekt_ausklapp_button.addEventListener('click', ()=>{
    project_ausgeklappt = !project_ausgeklappt;
    projektliste.classList.toggle('is_open', project_ausgeklappt);
    navChevron.classList.toggle('is_open', project_ausgeklappt);
    projekt_ausklapp_button.setAttribute('aria-expanded', project_ausgeklappt);
});

//Resize event
window.addEventListener('resize', ()=> {
    let value = window.scrollY;

    var schriftzug_margin = Number(styleRoot.getPropertyValue('--schriftzug_margin'));

    schriftzug.style.marginLeft = -schriftzug_margin * (value/400) + '%';

    var SSF_initial_height = styleRoot.getPropertyValue('--SSF_initial_height');
    SSF_initial_height = Number(SSF_initial_height.substring(0, SSF_initial_height.length -2));
     var height = SSF_initial_height * ( (1 - value/400)+ 1/5 * (value/400)) +'px';
     styleElem.setProperty('--height',  height);

    var schriftzug_size = styleRoot.getPropertyValue('--schriftzug-size');
     schriftzug_size = Number( schriftzug_size.substring(0, schriftzug_size.length - 2));

     schriftzug_font_big1.style.fontSize = schriftzug_size * ((1 - value/400) + 1/5 * (value/400)) + 'px';
     schriftzug_font_small.style.fontSize = (schriftzug_size * ((1 - value/400) + 1/5 * (value/400))) / 4.5 + 'px';
     schriftzug_font_big2.style.fontSize = schriftzug_size * ((1 -value/400) + 1/5 * (value/400)) + 'px';

     var margin = styleRoot.getPropertyValue('--margin-schriftzug');
     margin = Number(margin.substring(0, margin.length - 2));

     schriftzug_font_big1.style.margin = margin *((1 - value/400)+ 1/5 * (value/400))+ 'px';
     schriftzug_font_small.style.margin = margin *((1 - value/400) + 1/5 * (value/400))+ 'px';
     schriftzug_font_big2.style.margin = margin *((1 - value/400) + 1/5 * (value/400))+ 'px';

});

//upcoming events: hide past ones, mark the next one, show a countdown
const vaToday = document.getElementById('va_today');
const today = new Date();
today.setHours(0, 0, 0, 0);
vaToday.textContent = 'Heute: ' + today.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });

let upcomingCount = 0;
const pastTermine = [];
document.querySelectorAll('.termin').forEach((termin) => {
    const date = new Date(termin.dataset.date + 'T00:00:00');
    const days = Math.round((date - today) / 86400000);

    if (days < 0) {
        termin.hidden = true;
        pastTermine.push(termin);
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

//past events move into the archive automatically; slides appear once media/presentations/<data-slug>.pdf exists
const archivInner = document.querySelector('.va_archiv .va_inner');
const downloadIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1v10M3.5 6.5 8 11l4.5-4.5M2 14.5h12" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
const placeholderSrc = 'media/presentations/platzhalter.jpg';
let archivCount = Math.max(0, ...Array.from(document.querySelectorAll('.archiv_num'), (num) => Number(num.textContent)));

function semesterOf(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    if (month >= 4 && month <= 9) {
        return 'Sommersemester ' + year;
    }
    const start = month >= 10 ? year : year - 1;
    return 'Wintersemester ' + start + '/' + String(start + 1).slice(2);
}

//list for the semester, a new semester group goes on top
function archivList(semester) {
    let list = archivInner.querySelector('.archiv[data-semester="' + semester + '"]');
    if (list) {
        return list;
    }
    const label = document.createElement('div');
    label.className = 'va_label va_label_split';
    label.innerHTML = '<span></span>';
    label.firstChild.textContent = 'Archiv · ' + semester;
    list = document.createElement('ol');
    list.className = 'archiv';
    list.dataset.semester = semester;
    const firstLabel = archivInner.querySelector('.va_label');
    archivInner.insertBefore(label, firstLabel);
    archivInner.insertBefore(list, firstLabel);
    return list;
}

//resolves to the HEAD response if the file exists, otherwise null
function fileExists(url) {
    return fetch(url, { method: 'HEAD', cache: 'no-cache' })
        .then((response) => response.ok ? response : null)
        .catch(() => null);
}

async function addSlides(item, slug) {
    const pdf = 'media/presentations/' + slug + '.pdf';
    const pdfResponse = await fileExists(pdf);
    if (!pdfResponse) {
        return;
    }

    const size = Number(pdfResponse.headers.get('Content-Length'));
    const link = document.createElement('a');
    link.className = 'archiv_link';
    link.href = pdf;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = downloadIcon + ' Folien <span class="archiv_meta">PDF'
        + (size ? ' · ' + (size / 1048576).toFixed(1).replace('.', ',') + ' MB' : '') + '</span>';
    item.querySelector('.archiv_links').append(link);

    const thumbnail = 'media/presentations/' + slug + '.jpg';
    const preview = document.createElement('a');
    preview.className = 'archiv_preview';
    preview.href = pdf;
    preview.target = '_blank';
    preview.rel = 'noopener';
    preview.tabIndex = -1;
    preview.setAttribute('aria-hidden', 'true');
    preview.innerHTML = '<img alt="" loading="lazy">';
    preview.firstChild.src = (await fileExists(thumbnail)) ? thumbnail : placeholderSrc;
    item.querySelector('.archiv_preview').replaceWith(preview);
}

pastTermine.forEach((termin) => {
    archivCount++;
    const date = new Date(termin.dataset.date + 'T00:00:00');

    const item = document.createElement('li');
    item.className = 'archiv_item';
    item.id = 'Thema' + archivCount;
    item.innerHTML =
        '<div class="archiv_num"></div>' +
        '<div class="archiv_body">' +
            '<time class="archiv_date"></time>' +
            '<h3 class="archiv_topic"></h3>' +
            '<p class="archiv_question"></p>' +
            '<p class="archiv_speaker"></p>' +
            '<div class="archiv_links"></div>' +
        '</div>' +
        '<div class="archiv_preview is_placeholder" aria-hidden="true"><img src="' + placeholderSrc + '" alt="" loading="lazy"></div>';

    item.querySelector('.archiv_num').textContent = String(archivCount).padStart(2, '0');
    const time = item.querySelector('.archiv_date');
    time.dateTime = termin.dataset.date;
    time.textContent = date.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
    item.querySelector('.archiv_topic').textContent = termin.querySelector('.termin_title').textContent;
    item.querySelector('.archiv_question').textContent = termin.dataset.frage || termin.querySelector('.termin_desc').textContent;
    const speaker = item.querySelector('.archiv_speaker');
    if (termin.dataset.speaker) {
        speaker.textContent = 'von ' + termin.dataset.speaker;
    } else {
        speaker.remove();
    }

    archivList(semesterOf(date)).prepend(item);
    if (termin.dataset.slug) {
        addSlides(item, termin.dataset.slug);
    }
});

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
//fill both "Themen" menus from the archive entries (oldest first); data-menu overrides the label
document.querySelectorAll('.archiv_item[id]').forEach((item) => {
    const label = item.dataset.menu || item.querySelector('.archiv_topic').textContent.trim();

    const navLink = document.createElement('a');
    navLink.href = '#' + item.id;
    navLink.innerHTML = '<div></div>';
    navLink.firstChild.textContent = label;
    projektliste.prepend(navLink);

    const socialsLink = document.createElement('a');
    socialsLink.href = '#' + item.id;
    socialsLink.innerHTML = '<div class="socials_div"></div>';
    socialsLink.firstChild.textContent = label;
    document.querySelector('.socials_projektliste_inner').prepend(socialsLink);
});
