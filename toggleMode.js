var toggle = document.getElementById('toggle-button');
var box =document.getElementById('toggle');
var h1 = document.getElementsByTagName('h1')[0];
var body = document.getElementsByTagName('body')[0];
toggle.addEventListener('click',function(){
	body.style.background='black';
	h1.style.color='white';
	box.style.background='white';
	toggle.style.marginLeft='88px';
	
});