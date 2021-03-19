let name=document.querySelector('#title');
let author=document.querySelector('#author');
let year=document.querySelector('#year');
let submit=document.querySelector('#submit');
let parent=document.querySelector('#parent');
let date=new Date();
let currentYear=date.getFullYear();


submit.addEventListener('click',(e)=>{
	e.preventDefault();

	if(name.value=='' && author.value=='' && year.value==''){
	alert('ভাই কিছু একটা দেন।')

	}else if(name.value=='' || author.value=='' || year.value==''){
		alert('ভাই কিছু একটা দেন।')
	}else if(year.value>currentYear){
		alert('Unvalid Year');
	}
	else{
		let newRow=document.createElement('tr');
		 //title
		 let newTitle=document.createElement('th');
		 newTitle.innerHTML=name.value;
		 newRow.appendChild(newTitle);
		 //author
		 let newAuthor=document.createElement('th');
		 newAuthor.innerHTML=author.value;
		 newRow.appendChild(newAuthor);
		 //year
		 let newYear=document.createElement('th');
		 newYear.innerHTML=year.value;
		 newRow.appendChild(newYear);

		  let btn=document.createElement('button');
		  btn.innerHTML='&times;'
		  btn.classList.add('style')
		 newRow.appendChild(btn);
		 btn.addEventListener('click',()=>{
		 	newRow.remove();
		 })




		 parent.appendChild(newRow);


		 name.value='';
		 author.value='';
		 year.value='';

	}
});


window.onload=()=>{
		 name.value='';
		 author.value='';
		 year.value='';
	}

