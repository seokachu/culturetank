//full search 돋보기
/*
var searchBtn = document.querySelector('.search_click'),
    searchList = document.querySelector('.search_wrapper'),
    closeBtn = document.querySelector('.search_close');

searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    searchList.style.display='block';
});

closeBtn.addEventListener('click',function(){
    searchList.style.display='none';
});
*/
//ES6로 변경
const searchBtn = document.querySelector('.search_click'),
    searchList = document.querySelector('.search_wrapper'),
    closeBtn = document.querySelector('.search_close');

    searchBtn.addEventListener('click',e => {
        e.preventDefault();
        searchList.style.display='block';
    });

    closeBtn.addEventListener('click',() => {
        searchList.style.display='none';
    });


//상단바로가기 btn
/*
var btt = document.querySelector('.go_top'),
    scrollAmt = 0;

window.addEventListener('scroll',function(){
    scrollAmt = window.pageYOffset; //윈도우 자체의 스크롤양

    if(scrollAmt>200){
        btt.classList.add('go_top_active');
    }else{
        btt.classList.remove('go_top_active');
    }
});

btt.addEventListener('click',function(e){
    e.preventDefault();

    var timer = setInterval(function(){
        if(scrollAmt!=0){
            window.scrollBy(0,-100);
        }else{
            clearInterval(timer);
        }
    },10);
});
*/
//ES6변경
let btt = document.querySelector('.go_top'),
    docElement = document.documentElement,
    scrollAmt;


window.addEventListener('scroll',() => {
    scrollAmt = docElement.scrollTop;

    if(scrollAmt > 200){
        btt.classList.add('go_top_active');
    }else{
        btt.classList.remove('go_top_active');
    }
}); //scroll

//클릭시 스크롤 top으로 이동
/*
스크롤양 지정 window.scrollTo(x,y);
스크롤양 변경 window.scrollBy(x,y);
*/
btt.addEventListener('click',e => {
    e.preventDefault();
    /*
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    });
    */

    /* IE대응 */
    let scrollInterval = setInterval(()=>{
        if(scrollAmt != 0){
            window.scrollBy(0,-50);
        }else{
            clearInterval(scrollInterval);
        }
    },10);
    
});
