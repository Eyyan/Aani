function MainUI(){

    circlesContainer.innerHTML= "";
    for (var i = 0; i < 6; i++) {
        circlesContainer.insertAdjacentHTML("beforeend",`
        <div class="circleWrapper  flex">
          <div style="background:${getRandomRgb()}" class="circle" >
              </div>
           </div> `);
 }

     Circles = Array.from(document.querySelectorAll('.circle'));
     ans = Circles[randomAns].style.background;
     ansNode.textContent = ans;  
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomRgb(){
      return `rgb(${getRandomInt(0,256)},${getRandomInt(0,256)},${getRandomInt(0,256)}
      )`;
  }


  function getRandomRgb2(){
    return `rgb(${getRandomInt(150,256)},${getRandomInt(156,256)},${getRandomInt(130,256)}
    )`;
}


var ans= null;
var Circles =null;   
var randomAns = getRandomInt(0,6);
var ansNode = document.querySelector('.answer');
var circlesContainer = document.querySelector(".Circles");
var Container = document.querySelector(".container");
var reset = document.querySelector(".reset");
var hard = document.querySelector(".hard");
var count = document.querySelector(".count");

MainUI()

circlesContainer.addEventListener("click",function(e){
    
    var pickedAns = e.target.style.background;
   if (Array.from(e.target.classList).includes("circle")){
             
          if(pickedAns===ans){
              Circles.forEach(function(Circles){
                     
                  if (Circles.style.background !==ans){
                      Circles.style.background= ans;
                      Circles.style.opacity = 1;
                  }
              });
            //   Container.style.background = ans;
              

           }else{
               console.log('try again')
               e.target.style.opacity = 0;
           }
          }
  
});

reset.addEventListener("click",function(){
  
    MainUI()
});

var hard = document.querySelector(".hard");

hard.addEventListener("click",function(){

   console.log('clicked');
    
   circlesContainer.innerHTML= "";
   
   for (var i = 0; i < 6; i++) {
       circlesContainer.insertAdjacentHTML("beforeend",`
       <div class="circleWrapper  flex">
         <div style="background:${getRandomRgb2()}" class="circle" >
             </div>
          </div> `);
}


Circles = Array.from(document.querySelectorAll('.circle'));
ans = Circles[randomAns].style.background;
ansNode.textContent = ans;  

});




