/* 292 */
const badgeEl = document.querySelector('.badges');
const topEl = document.querySelector('.top_btn');

topEl.addEventListener('click',function(){
  gsap.to(window, 0.6,{ //window를 선택하여 0.6초만에
    scrollTo:0, //스크롤 0까지 올라간다.
  })
});

window.addEventListener('scroll', function(){
  console.log(window.scrollY); //스크롤값 확인하기
  if(760<window.scrollY){
    // badgeEl.style.display='none';
    gsap.to(badgeEl, 0.6, {
      opacity:0,
      display:'none'
    }),
    gsap.to(topEl,0.6, {
      opacity:1,
      display:'block'
    })
  }else{
    // badgeEl.style.display='block';
    gsap.to(badgeEl, 0.6, {
      opacity:1,
      display:'block'
    }),
    gsap.to(topEl,0.6, {
      opacity:0,
      display:'none'
    })
  }
});

const fadeEl = document.querySelectorAll('.fadeIn');

/* gsap.to(요소, 시간, 속성) */

fadeEl.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    delay:(index+1)*0.7,  //0.7초씩 느리게 시간을 추가
    opacity:1
  });
});

//커피 프로모션 토글 아잌노 클릭 시 박스 숨기고 나타내기
const promotionEl = document.querySelector('section.promotion');
const toggleBtnEl = document.querySelector('.toggle_btn');

toggleBtnEl.addEventListener('click',function(){
  if(promotionEl.classList.contains('hide')){
    promotionEl.classList.remove('hide');
  }else{
    promotionEl.classList.add('hide');
  }
});

//6,7,8,10 content가 화면에 80% 지점일 때 동작하는 스크립트
const spyEl = document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement:spyEl,
    triggerHook:0.8,
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});