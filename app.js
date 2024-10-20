let signState = true

const getElement = (id) => {
	return document.querySelector(id);
}

const getElements = (id) => {
	return document.querySelectorAll(id);
}

const hideElement = (id) => {
	const elementList = getElements(id);
	for(const l of elementList) {
		l.style.display = "none";
	}
}

const showElement = (id) => {
	const elementList = getElements(id);
	for(const l of elementList) {
		l.style.display = "flex";
	}
}

const changeText = (id, newText) => {
	const element = getElement(id);
	element.innerText = newText;
}

const changeValue = (id, newValue) => {
	const element = getElement(id);
	element.value = newValue;
}

const homebutton = document.querySelector(".home-button")
const servicesbutton = document.querySelector(".services-button")
const aboutbutton = document.querySelector(".about-button")
const contactusbutton = document.querySelector(".contact-us-button")
const janeeyrereviewbutton = document.querySelector(".jane-eyre-review-button")
const wutheringheightsreviewbutton = document.querySelector(".wuthering-heights-review-button")
const thepostcardreviewbutton = document.querySelector(".the-postcard-review-button")
const allbooksbutton = document.querySelector(".all-books-button")
const hamburgermenu = document.querySelector(".hamburger-menu")

const cleanUp = () => {
	hideElement("#form-box")
	hideElement(".home")
	hideElement(".services")
	hideElement(".about")
	hideElement(".contact-us")
	hideElement(".reviews")
	hideElement(".HMenu-Container")
	hideElement(".filter-view")
	hideElement(".series-book-page")
	document.querySelector(".wrapper") .style = "justify-content: flex-start;"
	homebutton.classList.remove("active")
	servicesbutton.classList.remove("active")
	aboutbutton.classList.remove("active")
	contactusbutton.classList.remove("active")
}

let state = "start";

const Form = {
	firstName: "Ari",
	lastName: "Talcott"
}

const signIn =  () => {
	cleanUp()
	showElement("#form-box")
	hideElement("#names")
	changeText("#sign-up-header", "Sign In")
	changeValue(".submit", "Sign In")
	hideElement(".two-col")
	document.querySelector(".wrapper")
	.style = "justify-content: center;"
	changeText("#account-span-1", "Don't Have An Account?")
	changeText("#account-span-2", "Sign Up!")
	signState = false;
};

const signUp = () => {
	cleanUp()
	showElement("#form-box")
	showElement("#names")
	changeText("#sign-up-header", "Sign Up")
	changeValue(".submit", "Register")
	showElement(".two-col")
	document.querySelector(".wrapper")
	.style = "justify-content: center;"
	showElement("#account-span")
	changeText("#account-span-1", "Have An Account?")
	changeText("#account-span-2", "Sign In!")
	signState = true;

};

const signSwitch = () => {
	if(signState){
		signIn()
	}
	else{
		signUp()
	}
};

const home = () => {
	cleanUp()
	showElement(".home")
	homebutton.classList.add("active")
	document.querySelector(".home")
	.style = "display: inline-block;"
}

const services = () => {
	cleanUp()
	showElement(".services")
	servicesbutton.classList.add("active")
}

const about = () => {
	cleanUp()
	showElement(".about")
	aboutbutton.classList.add("active")
}

const contactUs = () => {
	cleanUp()
	showElement(".contact-us")
	contactusbutton.classList.add("active")
}

const janeEyreReview = () => {
	cleanUp()
	showElement(".review-jane-eyre")
}

const wutheringHeightsReview = () => {
	cleanUp()
	showElement(".review-wuthering-heights")
}

const thePostcardReview = () => {
	cleanUp()
	showElement(".review-the-postcard")
}

const allBooks = () => {
	cleanUp()
	showElement(".all-books-page")
}

const seriesBooks = () => {
	cleanUp()
	showElement(".series-book-page")
}

const toggleCheckbox = () => {
	const checkbox = document.querySelector('#register-check');
	if (checkbox.checked) {
		console.log('Checkbox is checked');
	} else {
		console.log('Checkbox is unchecked');
	}
}

const onload = () => {
	cleanUp()
	showElement(".home")
	homebutton.classList.add("active")
	document.querySelector(".home")
	.style = "display: inline-block;"
}

const hamburgerClick = () => {
	const div = document.querySelector(".HMenu-Container")
	div.classList.add("animation")
	showElement(".HMenu-Container")
	showElement(".filter-view")
}

const hamburgerRemove = () => {
	const div = document.querySelector(".HMenu-Container")
	div.classList.remove("animation")
	div.classList.add("animation-remove")
	setTimeout(() => {
		hideElement(".HMenu-Container")
		hideElement(".filter-view")
	},500)
}

const searchAction = (event) => {
	event.preventDefault()
}

const parseData = (author,title,image_path) => {
	const obj = {}
	obj.author = author
	obj.title = title
	obj.image_path = image_path
	return obj
}
const list = document.querySelectorAll(".book")
const search = (author) => {
	const arr = [];
	for (const book of list) {
		if (book.dataset.author == author) {
			const obj = parseData(book.dataset.author,book.dataset.title,book.dataset.image_path)
			arr.push(obj)
		}
	}
	for (const obj of arr) {
		console.log(obj)
	} 
}
search("Charlotte Bronte")
const checkbox = document.querySelector('#register-check');
checkbox.addEventListener('click', toggleCheckbox);

const login = document.querySelector("#loginBtn");
login.addEventListener("click", signIn);

const signup = document.querySelector("#registerBtn");
signup.addEventListener("click", signUp);

const account = document.querySelector("#account-span-2");
account.addEventListener("click", signSwitch);

const searchButton = document.querySelector(".button-search");
searchButton.addEventListener("click", searchAction);

const removehamburger = document.querySelector(".hamburgerMenuButton");
removehamburger.addEventListener("click", hamburgerRemove)

const seriesBookPage = document.querySelector(".book-series-button")
seriesBookPage.addEventListener("click", seriesBooks)

homebutton.addEventListener("click", home);
servicesbutton.addEventListener("click", services);
aboutbutton.addEventListener("click", about);
contactusbutton.addEventListener("click", contactUs);
janeeyrereviewbutton.addEventListener("click", janeEyreReview);
wutheringheightsreviewbutton.addEventListener("click", wutheringHeightsReview);
thepostcardreviewbutton.addEventListener("click", thePostcardReview);
allbooksbutton.addEventListener("click", allBooks);
hamburgermenu.addEventListener('click', hamburgerClick);

onload();