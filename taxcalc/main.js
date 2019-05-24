
let btnCurrency = document.getElementById('currency');
let currencyItems = document.getElementsByClassName('dropdown-item');
let volume = document.getElementById('selectEngine');
let volumeItem = document.getElementById('firstOption');
let submit = document.querySelector('input[type="submit"]');
let carPrice = document.getElementById('price');
let form = document.querySelector('form');
let close = document.querySelectorAll('.closeModal');
let modalWrapper = document.querySelector('.modal-wrapper');


let a = 0.5;

for(let i = 0; i < currencyItems.length; i++){
		currencyItems[i].addEventListener('click', () => {
			btnCurrency.innerHTML = currencyItems[i].innerHTML;
		});
}


for(let i = 0; i < 80; i++){
	
	let volumeNewItem = document.createElement('option');
	let volumeNewItemValue = document.createTextNode((a += 0.1).toFixed(1));
	volumeNewItem.appendChild(volumeNewItemValue);
	volume.appendChild(volumeNewItem);	
	if (volumeNewItem.innerHTML == '2.0') {
		volumeNewItem.setAttribute('selected', 'selected');
	}
}


form.addEventListener('submit', (e) => {
	e.preventDefault();


		if (carPrice.value != '') {
			modalWrapper.style.display = 'block';
	let price = carPrice.value;
	let modal = document.querySelector('.modal');

	//FORM VARIABLES
	let volumeValue = volume.value;
	let engineType = document.getElementById('engineType');
	let age = document.getElementById('carAge').value;

	//MODAL VARIABLES
	let excise = document.getElementById('excise');
	let vat = document.getElementById('vat');
	let duty = document.getElementById('duty');
	let allTax = document.getElementById('allTax');
	let pensionary = document.getElementById('pensionary');
	let allCar = document.getElementById('allCar');

	//OTHER VARIABLES
	let a = 0;

	//CHANGING ENGINE
	if (engineType.value == '1') {
		a += 50;
	}else{
		a += 75;
	}

	//CHANGING AGE
	if(age == '15 і більше'){
		age = 15;
	}else if(age == '1 і менше'){
		age = 1;
	}

	//CHANGING CURRENCY
	if (btnCurrency.innerHTML == 'EURO') {
		price *= 1.13; 
	}else if(btnCurrency.innerHTML == 'ZL'){
		price *= 0.26;
	}


	let exciseTax = (age*volumeValue*a).toFixed(0);
	excise.innerHTML = exciseTax + ' $';
	let dutyTax = (price*0.1).toFixed(0);
	duty.innerHTML = dutyTax+ ' $';
	let vatTax = ((+exciseTax + +dutyTax + +price)*0.2).toFixed(0);
	vat.innerHTML = vatTax+ ' $';
	let endTax = (+exciseTax + +vatTax + +dutyTax).toFixed(0);
	allTax.innerHTML = endTax+ ' $';
	let pensionaryTax = ((+endTax + +price)*0.04).toFixed(0);
	pensionary.innerHTML = pensionaryTax+ ' $';
	let allCarPrice = (+endTax + +price + +pensionaryTax).toFixed(0);
	allCar.innerHTML = allCarPrice+ ' $';
	

		}else{
			alert('Введіть ціну автомобіля');
	}
});
		
for(let i = 0; i < close.length; i++){
	close[i].addEventListener('click', () => modalWrapper.style.display = 'none');
}




	
