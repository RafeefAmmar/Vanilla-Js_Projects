let addTaskInput=document.querySelector('#taskInput');
let addTaskBtn=document.querySelector('#addTaskBtn');
let incomUl=document.querySelector('.intasks');
let comUl=document.querySelector('.comtasks');


addTaskBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	if(addTaskInput.value==''){
	alert('Add Some Works...')
	}else{
		let newListItem=document.createElement('li');
		let newInput=document.createElement('input');
		let newLabel=document.createElement('label');
		
		newListItem.classList.add('list-group-item')
		newLabel.innerHTML=addTaskInput.value;
		newInput.type='checkbox';
		 newInput.classList.add('form-check-input');
		 newInput.style.marginRight = '10px'
		newListItem.appendChild(newInput);
		newListItem.appendChild(newLabel);
		

		incomUl.appendChild(newListItem);
		addTaskInput.value='';

		newInput.onclick=()=>{
			newListItem.remove();
		comUl.appendChild(newListItem)
		newInput.remove();
		newListItem.appendChild(dleBtn)
		}

		let dleBtn=document.createElement('button');
		
		dleBtn.innerHTML='Delete';
		dleBtn.classList.add('btn');
		dleBtn.classList.add('btn-outline-danger');
		// dleBtn.classList.add('px-5');
		dleBtn.style.marginLeft= '10px'

		dleBtn.onclick=()=>{
			newListItem.remove();
		}
		

		addTaskInput.value='';
	}
});




window.onload=(()=>{
	addTaskInput.value='';
})
