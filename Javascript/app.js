
let hamberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');




hamberger.addEventListener("click", opennav);

function opennav() {
	mobileNav.style.transform="translateX(0)";
};
		


times.addEventListener("click", closenav);

function closenav() {
	mobileNav.style.transform="translateX(100%)";
};


