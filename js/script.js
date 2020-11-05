document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#interaktiv')
		.addEventListener('click', animiere);

	function animiere() {
		var ladebalken = document.getElementById('ladebalken');
		ladebalken.animate(
      [
				{
					width: '1em',
					background: 'green'
        }, {
					width: '20em',
					background: 'lime'
        }
      ], {
				duration: 2000,
				iterations: 1,
				fill: 'forwards'
			});
	}
});


function elementSichtbar() {  document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#interaktiv')
		.addEventListener('click', animiere);

	function animiere() {
		var ladebalken = document.getElementById('ladebalken');
		ladebalken.animate(
      [
				{
					width: '1em',
					background: 'green'
        }, {
					width: '20em',
					background: 'lime'
        }
      ], {
				duration: 2000,
				iterations: 1,
				fill: 'forwards'
			});
	}
});


function bulliFahr() {   
    var div_bulli = document.getElementById("div_bulli"); 
    div_bulli.classList.toggle("bullilos");
    }
var buttoneins = document.getElementById('button-click');
 	buttoneins.addEventListener('click', bulliFahr);
