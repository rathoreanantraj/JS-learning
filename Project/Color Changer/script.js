const color = document.querySelectorAll('.color')
const body = document.querySelector('body')

color.forEach(function(color){
  color.addEventListener('click', function(){
    body.style.backgroundColor = color.id
  })
})