state = 0; 
offsetFromTop = 50;
step = 2;
  
  document.onkeydown = function(event){
    
  if (event.key == "a") {
    state = state +step;
  }
  
   if (event.key == "l") {
    state = state -step;
    }
    
    if (event.key == "0") {
      state = 0;
    }
    
    if (Math.abs(state) > 20) {
      if (state > 0) {
        alert("Vyhrál levý hráč")
       } else {
         alert("Vyhrál pravý hráč")
          }
      state = 0
    }
    
    p1.style.top = offsetFromTop - state +"%"; 
    p2.style.top = offsetFromTop + state +"%"; 
  
}