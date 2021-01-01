var Array = []

let text = id('text')

btn.addEventListener('click', function (){
 arrayFiller()
text.value="" 
showToDo()
c(Array)
})
 function arrayFiller(){
    todo = text.value;
    Array.push(todo);
}
 function showToDo() {
    for(var i in Array){
        var Data=Array[i];
    }
    Div = ce('div');
    Div.className="row_3_1_1_1";

    btnDelet = ce('button');
   
    btnDelet.innerHTML='Delet';

    btnEdit = ce('button')
    btnEdit.innerHTML='Edit';

    btnImp = ce('button');
    btnImp.innerHTML='Imp';
    
    info = ce('div');
    info.innerHTML = Data;
    Div.append(info, btnDelet,btnEdit,btnImp);
    display.appendChild(Div);

btnDelet.addEventListener('click', function (e)  {
    e.preventDefault();

    Array.splice(i, 1) 

   
      e.target.parentElement.remove();
    
    c(Array)
  });

}


/* function borrartext(e) {
    e.preventDefault();
    if (e.target.className === "borrar-text") {
      e.target.parentElement.remove();
      borrartextLocalStorage(e.target.parentElement.innerText);
    }
  } */