const inputField = document.getElementById('inputField');
const ullist=document.getElementById('ul-list');

displayitemlocalstor = ()=>{
   const storeproduct = getLocalstoreg();
   for( itemproduct in storeproduct){
    li = document.createElement('li');
    li.innerText=`${itemproduct}`
    ullist.appendChild(li);
   }
}

const addbtn = () =>{

displayitem();

}
const displayitem = () =>{
const inputvalue = inputField.value;
if(!inputvalue){
    return;
}
li = document.createElement('li');
li.innerText=`${inputvalue}`
ullist.appendChild(li);
inputField.value ='';

addfavaratPriduct(inputvalue);
}

const getLocalstoreg = () =>{
    const favarit = localStorage.getItem('favarit');
    let favaObject;
    if(favarit){
        favaObject = JSON.parse(favarit);
    }
    else{
        favaObject={};
    }
    return favaObject;

}
const addfavaratPriduct = prodauctName =>{
    const product = getLocalstoreg();
    if(product[prodauctName]){
        product[prodauctName] =product[prodauctName] + 1; 
    }else{
        product[prodauctName] =1;
    }
   const favastegifiy=JSON.stringify(product);
    localStorage.setItem('favarit',favastegifiy)
}

const clearbtn = () => {
    ullist.textContent= '';
    localStorage.removeItem('favarit');
}
displayitemlocalstor()