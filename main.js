var taskinfo = document.querySelector('input');
var list = document.querySelector('.tasks');
var all = document.querySelector('#all');
var current = document.querySelector('#current')
var done = document.querySelector('#done');
var button = document.querySelector('button');

taskinfo.addEventListener('keyup', function(event) {
	var listItem;
	if (event.keyCode === 13) {
		listItem = document.createElement('li'); // create a list item: ('li')
		listItem.addEventListener('click', function () {
			listItem.classList.toggle('complete');
		});
		listItem.textContent = taskinfo.value; // add the value of the input to the list item
		list.appendChild(listItem); // grabs the list item that was created and appends it to the list
		taskinfo.value = ''; // emptys the input value with an empty string
	}
});

var listItems;

all.addEventListener('click', function () {
	// show every list item 
	// every list item should be display: block
	listItems = list.querySelectorAll('li');
	for (var i = 0; i < listItems.length; i++) {
		 listItems[i].style.display = 'block';
	}
});

current.addEventListener('click', function() {
	// hide complete list items
	// incomplete list items should be display: block
	// complete list items should be display: none
	listItems = list.querySelectorAll('li');
	for (var i = 0; i < listItems.length; i++) {
		if (!listItems[i].classList.contains('complete')) {
			listItems[i].style.display = 'block'; 
		} else {
			listItems[i].style.display = 'none'; 
		}
	}
});

done.addEventListener('click', function() {
	// hide incomplete list items
	// complete list items should be display: block
	// incomplete list items should be display: none
	for (var i = 0; i < listItems.length; i++) {
		if(listItems[i].classList.contains('complete')) {
			listItems[i].style.display = 'block';
		} else {
			listItems[i].style.display = 'none';
		}
	}
});

button.addEventListener('click', function () {
	listItems.parentElement.removeChild(listItems);
	}
});
