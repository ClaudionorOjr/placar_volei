const placar = document.querySelectorAll('span')

var placar_A = placar[0]
var placar_B = placar[1]

var pontos_A = placar_A.textContent
var pontos_B = placar_B.textContent

function incrementar(identificador) {
  
  if(identificador === 'A'){
    
    pontos_A++
    
    if(pontos_A >= 0 && pontos_A < 10){ 
      placar_A.innerHTML = '0' + pontos_A
      
    }else {
      placar_A.innerHTML = pontos_A 
    }
    
  }
  else if(identificador === 'B'){
    
    pontos_B++
    
    if(pontos_B >= 0 && pontos_B < 10){
      placar_B.innerHTML = '0' + pontos_B
      
    }else {
      placar_B.innerHTML = pontos_B
    }
  }
}


function decrementar(identificador) {
  
  if(identificador === 'A'){
    
    if(pontos_A > 0) {
      pontos_A--
      
      if(pontos_A < 10) {
        placar_A.innerHTML = '0' + pontos_A
        
      }else {
        placar_A.innerHTML = pontos_A
      }
      
    }
    
  }
  else if(identificador === 'B') {
    
    if(pontos_B > 0) {
      pontos_B--
      
      if(pontos_B < 10) {
        placar_B.innerHTML = '0' + pontos_B
        
      }else {
        placar_B.innerHTML = pontos_B
      }
      
    }
    
  }
  
}

const btn_reset = document.querySelector('#reset')

btn_reset.addEventListener('click', ()=>{
  
  pontos_A = pontos_B = '0'
  
  placar_A.innerHTML = placar_B.innerHTML = '00'

})