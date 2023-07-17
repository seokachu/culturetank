//이용안내(tab) park_guide.html
/*
var tabMenu = document.querySelectorAll('.park_gudie_list li a'),
tabContent = document.querySelectorAll('.tab_container .tab_contents');
for(var i=0; i<tabMenu.length; i++){
    tabMenu[i].addEventListener('click',function(e){
        e.preventDefault();
        for(var j=0; j<tabMenu.length; j++){
            tabMenu[j].classList.remove('active');
        }
        this.classList.add('active');

        var target = this.getAttribute('href');

        for(var y=0; y<tabContent.length; y++){
            tabContent[y].style.display='none';
        }
        document.querySelector(target).style.display='block';
    });
}
*/
//ES6로 변경
const tabMenu = document.querySelectorAll('.park_gudie_list li a'),
    tabContent = document.querySelectorAll('.tab_container > .tab_contents');

    /* 메뉴클릭시 몇번째를 클릭했는지 확인하고 해당숫자에 맞는 요소를 보여줘야함 */
    function showContent(num){
        tabContent.forEach(item => {
            item.style.display = "none";
        });
        tabContent[num].style.display = "block";

        tabMenu.forEach(item => {
            item.classList.remove('active');
        });
        tabMenu[num].classList.add('active');
    }

    tabMenu.forEach((item,index) => {
        item.addEventListener('click',e => { 
            e.preventDefault();
            showContent(index);
        });
    });



//자주하는질문(아코디언) qna.html
/*
var panelQuestion = document.querySelectorAll('.qna_list>li>dl');

for(var i=0; i<panelQuestion.length; i++){
    panelQuestion[i].addEventListener('click',function(e){
        e.preventDefault();
        var panel = panelQuestion;
        for(var j=0; j<panel.length; j++){
            panel[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}
*/

//ES6로 변경
const panelQuestion = document.querySelectorAll('.qna_list>li>dl');

    panelQuestion.forEach(item => {
        item.addEventListener('click',function(e){
            e.preventDefault();
            for(quest of panelQuestion){
                quest.classList.remove('active');    
            }
            this.classList.add('active');
        });
    });

//공원전경 park_terrance.html
/*
var img = document.querySelectorAll('.park_terrace li'),
    lightbox = document.querySelector('#lightbox_overlay'),
    lightboxImg = lightbox.querySelector('img');

for(var i=0; i<img.length; i++){
    img[i].addEventListener('click',function(e){
        e.preventDefault();
        lightboxImg.setAttribute('src','');

        var target = this.getAttribute('data-lightbox');

        lightboxImg.setAttribute('src',target);
        lightbox.classList.add('visible');
    });
}

lightbox.addEventListener('click',function(){
    lightbox.classList.remove('visible');
});
*/

//ES6로 변경
let img = document.querySelectorAll('.park_terrace li'),
    lightbox = document.querySelector('#lightbox_overlay'),
    lightboxImg = lightbox.querySelector('img');

    img.forEach((index) => {
        index.addEventListener('click', e => {
            e.preventDefault();
            lightboxImg.setAttribute('src', '');
    
            let target = index.getAttribute('data-lightbox');
    
            lightboxImg.setAttribute('src', target);
            lightbox.classList.add('visible');
        });
    });

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});