const people = document.querySelector('.people');
const items = document.getElementsByClassName('feedback-order');
const itemImages = document.getElementsByClassName('feedback-order-img');
const peopleWrap = document.querySelector('.people-wrap');
const item = document.getElementById('person1');
const toggleButton = document.querySelector('.qwerty-toggle');
const toggleMenu =  document.querySelector('.toggle-menu');
let itemWidth = item.offsetWidth;
let count = 1;

const prev = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");

const digitSpan = document.querySelector('.feedback-navigation-digit');

const questionsForm = document.querySelector('.questions form');
const subscribeForm = document.querySelector('.subscribe form');


/*Toggle*/

toggleButton.addEventListener('click', function(){
	let value = toggleMenu.classList.contains('hide');
	if(value){
	  toggleMenu.classList.remove('hide');
	  toggleButton.classList.add('change');
	}else{
      toggleMenu.classList.add('hide');
	  toggleButton.classList.remove('change');
	}
})


/*Feedback slider*/

itemImages[0].style.border = '2px solid #097e89';

  window.addEventListener('resize', function() {
   	itemWidth = item.offsetWidth;
  });

   next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });

  function nextSlide() {
  	if(count < items.length) {
      peopleWrap.style.left = "-" + count * itemWidth + "px";
      count++;
      digitSpan.innerHTML = count;
      itemImages[count - 1].style.border = '2px solid #097e89';
      itemImages[count - 2].style.border = 'none';
    }
  }

  function prevSlide() {
  	if(count > 1) {
      count = count - 2;
      peopleWrap.style.left = "-" + count * itemWidth + "px";
      count++;
      digitSpan.innerHTML = count;
      itemImages[count - 1].style.border = '2px solid #097e89';
      itemImages[count].style.border = 'none';
    }
  }

  	/*Form validation*/

  questionsForm.addEventListener('submit', function(e) {
  	e.preventDefault();
  	const questionsFormName = document.querySelector('.questions input:nth-child(1)');
	const questionsFormNumber = document.querySelector('.questions input:nth-child(2)');
	const questionsMessage = document.querySelector('.questions-message');
  	let regV = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

	  	if(regV.test(questionsFormNumber.value) && questionsFormName.value !== ''){
	  		alert('Our operator will contact you');
	  		return true;
	  	}else{
	  		questionsMessage.innerHTML = '**Wrong number';
	  		
	  	}

	  	if(questionsFormNumber.value === '' || questionsFormName.value === ''){
	  		questionsMessage.innerHTML = '**Empty field';
	  		
	  	}

	  	questionsFormName.addEventListener('click', function() {
	  		questionsMessage.innerHTML = '';
	  	});
	  	questionsFormNumber.addEventListener('click', function() {
	  		questionsMessage.innerHTML = '';
	  	});
  });


   subscribeForm.addEventListener('submit', function(e) {
  	e.preventDefault();
  	const subscribeFormEmail = document.querySelector('.subscribe form input[type="text"]');
  	const subscribeMessage = document.querySelector('.subscribe-message')
  	let regV = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

	  	if(regV.test(subscribeFormEmail.value) && subscribeFormEmail.value !== ''){
		  		return true;
		}else{
			subscribeMessage.innerHTML = '**Wrong email';
		}

		if(subscribeFormEmail.value === ''){
	  		subscribeMessage.innerHTML = '**Empty field';
	  	}

	  	subscribeFormEmail.addEventListener('click', function() {
	  		subscribeMessage.innerHTML = '';
	  	});


  });

