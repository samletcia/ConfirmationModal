var modal = document.getElementById('modal');

function toggleModal(){
  if(modal.style.display == 'none'){
    modal.style.display = 'flex'
  }else{
    modal.style.display = 'none'
  }
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = 'none';
  }
}