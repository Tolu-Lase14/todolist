
const input = document.querySelector('input');  
const button = document.querySelector('.inp > button');

button.addEventListener('click', addList);  

function addList() {  
  const notComplete = document.querySelector('#notComplete');  
  const Complete = document.querySelector('#Complete');  

  const checkBtn = document.createElement('button');  
  const delBtn = document.createElement('button');  

  const newLi = document.createElement('li');  

  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';  
  delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';  

  if (input.value != "") {  
    newLi.textContent = input.value;  
    input.value = "";  
    notComplete.appendChild(newLi);  
    newLi.appendChild(checkBtn);  
    newLi.appendChild(delBtn);  
  }  

  
checkBtn.addEventListener('click', function(){  
    const parent = this.parentNode;  
    parent.remove();  
    Complete.appendChild(parent);  
    checkBtn.style.display = 'none';  
  });  
  
  delBtn.addEventListener('click', function(){  
    const parent = this.parentNode;  
    parent.remove();  
  }) }