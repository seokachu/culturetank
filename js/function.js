/*------ visual 영역 ------*/
//메인 slide 
/*
var visualSlideWrapper = document.querySelector('.visual_slide'), //wrapper
    visualSlideContainer = visualSlideWrapper.querySelector('.visual_list'), //ul
    visualSlides = visualSlideContainer.querySelectorAll('li'), //li
    visualSlideCount = visualSlides.length,
    visualCurrentIndex = 0, //현재 보고있는페이지
    visualPagerContainer = visualSlideWrapper.querySelector('.visual_slide_pager'),
    visualPagerHTML = '', //페이저 생성
    visualPrevBtn = visualSlideWrapper.querySelector('.prev>span'),
    visualNextBtn = visualSlideWrapper.querySelector('.next>span'),
    visualTimer = undefined;


//슬라이드 가로배치 li
for(var i=0; i<visualSlideCount; i++){
    visualSlides[i].style.left = i*100 + '%';
}

//슬라이드 ul이동
function goToSlide(idx){
    visualSlideContainer.style.left = -idx*100 + '%';
    visualCurrentIndex = idx;

    for(var i=0;  i<pagerBtn.length; i++){
        pagerBtn[i].classList.remove('active');
    }
    pagerBtn[visualCurrentIndex].classList.add('active');

}

//슬라이드 버튼
visualPrevBtn.addEventListener('click',function(){
    if(visualCurrentIndex != 0){
        goToSlide(visualCurrentIndex - 1);
    }else{
        goToSlide(visualSlideCount - 1);
    }
});

visualNextBtn.addEventListener('click',function(){
    if(visualCurrentIndex != visualSlideCount-1){
        goToSlide(visualCurrentIndex+1);
    }else{
        goToSlide(0);
    }
});

//슬라이드 페이저 생성
for(var i = 0; i<visualSlideCount; i++){
    visualPagerHTML += '<a href="">' + i + '</a>';
}
visualPagerContainer.innerHTML = visualPagerHTML;


//슬라이드 페이저이동
var pagerBtn = visualPagerContainer.querySelectorAll('a');

for(var i=0; i<pagerBtn.length; i++){
    pagerBtn[i].addEventListener('click',function(e){
        e.preventDefault();
        var targetIdx = parseInt(this.innerText);
        goToSlide(targetIdx);
    });
}

goToSlide(0);

//자동슬라이드
function autoSlide(){
    if(visualTimer == undefined){
        visualTimer = setInterval(function(){
            if(visualCurrentIndex != visualSlideCount-1){
                goToSlide(visualCurrentIndex+1);
            }else{
                goToSlide(0);
            }
        },3000);
    }
}
autoSlide();

//마우스 오버,아웃
visualSlideWrapper.addEventListener('mouseover',function(){
    clearInterval(visualTimer);
    visualTimer = undefined;
});

visualSlideWrapper.addEventListener('mouseout',function(){
    autoSlide();
});
*/

//ES6로 변경
let viSlideWrapper = document.querySelector('.visual_slide'), //wrapper
    viSlideContainer = viSlideWrapper.querySelector('.visual_list'), //ul
    viSlides = viSlideContainer.querySelectorAll('li'), //li
    viSlideCount = viSlides.length, //li안의 값의 길이(갯수저장)
    viCurrentIndex = 0, //현재 보고있는페이지
    viPagerContainer = viSlideWrapper.querySelector('.visual_slide_pager'), //페이저 지정
    viPagerHTML = '', //페이저 생성(슬라이드 갯수에 따라 생성)
    viPrevBtn = viSlideWrapper.querySelector('.prev>span'),
    viNextBtn = viSlideWrapper.querySelector('.next>span'),
    viTimer = undefined;


//슬라이드가 있으면 가로로 배열하기, 페이저 생성
if(viSlideCount > 0){
    viSlides.forEach((item,index) => { 
        //0 0% 1 100%; index*100+'%';
        item.style.left = `${index*100}%`;
        viPagerHTML = viPagerHTML+`<a href="">${index}</a>`
    });
    viPagerContainer.innerHTML = viPagerHTML;
}
let viPagerContainerBtn = viPagerContainer.querySelectorAll('a');

//슬라이드 이동 함수 (이동, 페이저 업데이트, 슬라이드 활성화)
function goToSlide(idx){
    //이동
    viSlideContainer.style.left = `${idx * -100}%`;
    viCurrentIndex = idx;
    //페이저 업데이드
    for(pd of viPagerContainerBtn){
        pd.classList.remove('active');
    }
    viPagerContainerBtn[viCurrentIndex].classList.add('active');
}
goToSlide(0);

//좌우버튼 클릭 슬라이드 이동
viNextBtn.addEventListener('click',e =>{
    e.preventDefault();
    if(viCurrentIndex != viSlideCount-1){
        goToSlide(viCurrentIndex+1);
    }else{
        goToSlide(0);
    }
});

viPrevBtn.addEventListener('click',e =>{
    e.preventDefault();
    if(viCurrentIndex > 0){
        goToSlide(viCurrentIndex-1);
    }else{
        goToSlide(viSlideCount - 1);
    }
});

//페이저 클릭시 슬라이드 이동
viPagerContainerBtn.forEach((item,index) => {
    item.addEventListener('click',e => {
        e.preventDefault();
        goToSlide(index);
    });
});

//자동슬라이드
function autoSlide(){
    viTimer = setInterval(() => {
        let nextIndex = (viCurrentIndex + 1) % viSlideCount;
        goToSlide(nextIndex);
    },3000);
}
autoSlide();

//마우스 들어오면 슬라이드 멈춤
viSlideWrapper.addEventListener('mouseover',() => {
    clearInterval(viTimer);
});
viSlideWrapper.addEventListener('mouseout',() => {
    autoSlide();
});


/*------ banner 영역 ------*/
//banner
/*
var bannerSlideWrapper = document.querySelector('.banner'),
    bannerSlideContainer = bannerSlideWrapper.querySelector('.banner_list'), //ul
    bannerSlides = bannerSlideContainer.querySelectorAll('li'),
    bannerSlideCount = bannerSlides.length,
    bannerCurrentIndex = 0,
    bannerPagerContainer = bannerSlideWrapper.querySelector('.banner_pager'),
    bannerPagerHTML = '',
    bannerPrevBtn = bannerSlideWrapper.querySelector('.banner_controls .prev'),
    bannerNextBtn = bannerSlideWrapper.querySelector('.banner_controls .next'),
    bannerStopBtn = bannerSlideWrapper.querySelector('.banner_controls .stop'),
    bannerTimer = undefined;

//li정렬
for(var i=0; i<bannerSlideCount; i++){
    bannerSlides[i].style.left = i*100 + '%';
}

//ul움직임 정렬
function bannerSlide(idx){
    bannerSlideContainer.style.left = -idx*100 +'%';
    bannerCurrentIndex = idx;    
}

//슬라이드 버튼 
bannerPrevBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(bannerCurrentIndex != 0){
        bannerSlide(bannerCurrentIndex - 1);
    }else{
        bannerSlide(bannerSlideCount - 1);
    }
});

bannerNextBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(bannerCurrentIndex != bannerSlideCount-1){
        bannerSlide(bannerCurrentIndex+1);
    }else{
        bannerSlide(0);
    }
});

bannerStopBtn.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(bannerTimer);
});

//자동슬라이드
function autoBanner(){
    if(bannerTimer == undefined){
        bannerTimer = setInterval(function(){
            if(bannerCurrentIndex != bannerSlideCount-1){
                bannerSlide(bannerCurrentIndex+1);
            }else{
                bannerSlide(0);
            }
        },3000);
    }
}
autoBanner();
*/

//ES6로 변경
let bannerSlideWrapper = document.querySelector('.banner'),
    bannerSlideContainer = bannerSlideWrapper.querySelector('.banner_list'), //ul
    bannerSlides = bannerSlideContainer.querySelectorAll('li'),
    bannerSlideCount = bannerSlides.length,
    bannerCurrentIndex = 0,
    bannerPagerContainer = bannerSlideWrapper.querySelector('.banner_pager'),
    bannerPagerHTML = '',
    bannerPrevBtn = bannerSlideWrapper.querySelector('.banner_controls .prev'),
    bannerNextBtn = bannerSlideWrapper.querySelector('.banner_controls .next'),
    bannerStopBtn = bannerSlideWrapper.querySelector('.banner_controls .stop'),
    bannerTimer = undefined;

    //슬라이드 li들이 active시 움직이는 함수
    function bannerSlide(idx){
        for(bs of bannerSlides){
            bs.classList.remove('active');
            bannerCurrentIndex = idx; //몇번째를 보고있는지 확인
        }
        bannerSlides[idx].classList.add('active');
    };
    bannerSlide(0);

    //5초마다 자동으로 바뀌는 timer
    function bannerTimers(){
        bannerTimer = setInterval(() => {
            if(bannerCurrentIndex != bannerSlideCount-1){
                bannerSlide(bannerCurrentIndex+1);
            }else{
                bannerSlide(0);
            }
        },5000);
    };
    bannerTimers();

    //좌우버튼, 멈추기 버튼
    bannerPrevBtn.addEventListener('click',e =>{
        e.preventDefault();

        if(bannerCurrentIndex != 0){
            bannerSlide(bannerCurrentIndex - 1);
        }else{
            bannerSlide(bannerSlideCount - 1);
        }
    });

    bannerNextBtn.addEventListener('click',e =>{
        e.preventDefault();

        if(bannerCurrentIndex != bannerSlideCount-1){
            bannerSlide(bannerCurrentIndex + 1);
        }else{
            bannerSlide(0);
        }
    });

    bannerStopBtn.addEventListener('click',e => {
        e.preventDefault();
        clearInterval(bannerTimer);
    });

    //마우스 오버,아웃 (배너 안에있는 li들)
    for(bs of bannerSlides){
        bs.addEventListener('mouseover',() => {
            clearInterval(bannerTimer);
        });

        bs.addEventListener('mouseout',() => {
            bannerTimers();
        });
    }


/*------ 공원의모습 ------*/
/*
var slideWrapper= document.querySelector('.park_guide_wrap'),
    sliderUl = slideWrapper.querySelector('.park_guide_list'),//ul
    slides = sliderUl.querySelectorAll('li'),
    slideCount = slides.length,
    currentIndex = 0,
    slideWidth = 220,
    slideMargin = 44,
    PrevBtn = slideWrapper.querySelector('.controls .prev'),
    NextBtn = slideWrapper.querySelector('.controls .next'),
    pager = slideWrapper.querySelector('.pager'),
    pagerHtml = '';

//슬라이드 이동함수
function moveSlide(idx){
    sliderUl.style.left = -idx*(slideWidth+slideMargin) + 'px';
    currentIndex = idx;

    for(var i=0; i<slidePager.length; i++){
        slidePager[i].classList.remove('active');
    }
    slidePager[currentIndex].classList.add('active');
}

//좌우 버튼 이동함수 작동
NextBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex == slideCount-4){
        moveSlide(0);
    }else{
        moveSlide(currentIndex+1);
    }
});

PrevBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex == 0){
        moveSlide(slideCount-4);
    }else{
        moveSlide(currentIndex-1);
    }
});

//페이저 생성
for(var i = 0; i<slideCount-3; i++){
    pagerHtml += '<li><a href="">' + i + '</a></li>';
}
pager.innerHTML = pagerHtml;

//슬라이드 페이저 클릭이동
var slidePager = pager.querySelectorAll('li');

for(var i=0; i<slidePager.length; i++){
    slidePager[i].addEventListener('click',function(e){
        e.preventDefault();
        var targetIdx = parseInt(this.innerText);
        moveSlide(targetIdx);
    });
}

//자동 슬라이드
function autoSlides(){
    Timers = setInterval(function(){
            if(currentIndex != slideCount-4){
                moveSlide(currentIndex+1);
            }else{
                moveSlide(0);
            }
        },3000);
}
autoSlides();
moveSlide(0);

slideWrapper.addEventListener('mouseenter',function(){
    clearInterval(Timers);
});

slideWrapper.addEventListener('mouseleave',function(){
    autoSlides();
});
*/
//ES6로 변경
let slideWrapper= document.querySelector('.park_guide_wrap'),
    sliderUl = slideWrapper.querySelector('.park_guide_list'),//ul
    slides = sliderUl.querySelectorAll('li'),
    slideCount = slides.length,
    currentIndex = 0,
    slideWidth = 220,
    slideMargin = 44,
    PrevBtn = slideWrapper.querySelector('.controls .prev'),
    NextBtn = slideWrapper.querySelector('.controls .next'),
    pager = slideWrapper.querySelector('.pager'),
    pagerHtml = '';

//슬라이드 이동함수 (ul 이동, pager 보고있는곳 활성화)
function moveSlide(idx){
    sliderUl.style.left = `${-idx*(slideWidth+slideMargin)}px`;
    currentIndex = idx;

    for(sp of slidePager){
        sp.classList.remove('active');
    }
    slidePager[currentIndex].classList.add('active');
}

//좌우 버튼 이동함수 작동
NextBtn.addEventListener('click',e => {
    e.preventDefault();
    if(currentIndex == slideCount-4){ //currentIndex 번호가 현재보고있는페이지와 같으면
        moveSlide(0);
    }else{
        moveSlide(currentIndex+1);
    }
});

PrevBtn.addEventListener('click',e => {
    e.preventDefault();
    if(currentIndex == 0){ //현재보고있는 페이지가 처음과 같으면
        moveSlide(slideCount-4);
    }else{
        moveSlide(currentIndex-1);
    }
});

//페이저 생성 (a 태그 생성)

// pagerHtml += `<li><a href=""></a></li>`;
// pager.innerHTML = pagerHtml;

for(let i = 0; i < slideCount - 3; i++) {
    pagerHtml += `<li><a href="">${i}</a></li>`;
}
pager.innerHTML = pagerHtml;


//슬라이드 페이저 클릭시 해당 내용으로 이동
let slidePager = pager.querySelectorAll('li');

for(sp of slidePager){
    sp.addEventListener('click',function(e){
        e.preventDefault();
        let targetIdx = parseInt(this.innerText);
        moveSlide(targetIdx);
    });
}

//3초마다 자동 슬라이드
function autoSlides(){
    timers = setInterval(() => {
            if(currentIndex != slideCount-4){
                moveSlide(currentIndex+1);
            }else{
                moveSlide(0);
            }
        },3000);
}
autoSlides();
moveSlide(0);

slideWrapper.addEventListener('mouseenter',() => {
    clearInterval(timers);
});

slideWrapper.addEventListener('mouseleave',() => {
    autoSlides();
});

/*------------------- popup 쿠키설정 -------------------*/
let myPopup = document.querySelector('.popup-box'),
    checkbox = document.querySelector('#oneday-close'),
    popupClose = document.querySelector('.popup_close');

//쿠키 생성함수
function setCookie(name, value, day){ //name, value, day 매개변수를 받는 setCookie 함수를 정의
    const date = new Date(); //현재 시간을 나타내는 Date객체를 생성
    date.setDate(date.getDate() + day); //date에 day값을 더한 날짜를 설정

    let mycookie = ''; //쿠키를 저장하기위한 빈 문자열
    mycookie += name + '=' + value+';'; //쿠키의 이름과 값 정보를 추가
    mycookie +='Expires=' + date.toUTCString(); //쿠키의 만료 날짜 정보를 추가

    document.cookie = mycookie; //쿠키 설정하고 생성한다.
}

//쿠키 삭제함수
function delCookie(name){
    let date = new Date(); //현재시간 저장

    date.setDate(date.getDate() - 1); //date에서 1일을 뺀 날짜 설정

    let setCookie = ''; //쿠키 삭제하기위한 빈 문자열

    setCookie += name+'= Main;'; //삭제할 쿠키의 이름과 값 정보를 넣음
    setCookie +='Expires=' + date.toUTCString(); //쿠키의 만료 날짜 정보를 setCookie에 추가

    document.cookie = setCookie; //쿠키 설정, 생성           
}

//쿠키 확인
function checkCookie(name){ //쿠키의 존재여부 확인,팝업 창을 표시 or 숨기는 역할
let cookies = document.cookie.split(';'); //현재 쿠키 값을 가져와 세미콜론(;)을 기준으로 나눈 후 cookies 변수에 저장
console.log(cookies);
let visited = false; // 방문 여부를 나타내는 변수 visited를 false로 초기화

//반복문을 통해 cookies 배열의 각 요소를 확인
for (let i of cookies) {
    if (i.indexOf(name) > -1) { ///해당요소에 name이 포함되어 있는지 확인
      visited = true; //포함되어 있다면 visited를 true로 설정
      console.log(visited);
    }
  }

console.log(visited);

    if(visited){  //visited값에 따라 방문 여부를 확인
        //재방문
        myPopup.style.display = 'none';
    }else{
        //신규방문
        myPopup.style.display = 'block';
    }

}
checkCookie('Portfolio.com');

popupClose.addEventListener('click', () => {
    if(checkbox.checked){
        setCookie('Portfolio.com','Main',1);
        myPopup.style.display = 'none';
    }else{
        myPopup.style.display = 'none';
        delCookie('Portfolio.com');
    }
});