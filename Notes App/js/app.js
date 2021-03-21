let notesTitle=document.querySelector('#notesTitle');
let mainNotes=document.querySelector('#notes');
let addNotes=document.querySelector('#addNote');
let parent=document.querySelector('#allNotes');
let subParent=document.querySelector('.colClass');

addNotes.onclick=()=>{
	if(notesTitle.value=='' || mainNotes.value==''){
	alert('add something!');
}else if (notesTitle.value=='' && mainNotes.value=='') {
	alert('add something!');
}else{
let maincol=document.createElement('div');
maincol.classList.add('col-md-4');
maincol.classList.add('mb-3');	
 let card=document.createElement('div')
 card.classList.add('card');
 let cardBody=document.createElement('div');
 cardBody.classList.add('card-body');
 let cardHeader=document.createElement('div');
 cardHeader.classList.add('card-header');
 let title=document.createElement('h4');
title.classList.add('card-title');
 let txt=document.createElement('p');
 txt.classList.add('card-text')
 let delbtn=document.createElement('button');
 delbtn.classList.add('btn');
 delbtn.classList.add('btn-outline-danger');
 delbtn.classList.add('px-4');
 
 title.innerHTML=notesTitle.value;
 txt.innerHTML=mainNotes.value;
 delbtn.innerHTML='Delete';


 cardHeader.appendChild(title);
 cardBody.appendChild(cardHeader);


 cardBody.appendChild(txt);
 cardBody.appendChild(delbtn);



card.appendChild(cardBody);
// subParent.appendChild(card);
maincol.appendChild(card);
parent.appendChild(maincol);

delbtn.onclick=()=>{
	card.remove();
}
 

 let lsnotes=localStorage.setItem('title',notesTitle.value);
 let lsnotes1=localStorage.setItem('notes',mainNotes.value);
 let gsnotes=localStorage.getItem('title');
 let gsnotes1=localStorage.getItem('notes');
  

 notesTitle.value='';
 mainNotes.value='';


}

}











window.onload=()=>{
	notesTitle.value='';
	mainNotes.value='';
}

