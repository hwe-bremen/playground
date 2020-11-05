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


function elementSichtbar() {   
    var boxVier = document.getElementById("box4"); 
    boxVier.classList.toggle("sichtbar");
    }
   function elementSichtbar2() { 
	var buttonClick = document.getElementById("button-click"); 
    buttonClick.classList.toggle("buttonstylehover");
     }
	
	var buttonzwei = document.getElementById('button-click')
 	buttonzwei.addEventListener('click', elementSichtbar);
 	buttonzwei.addEventListener('click', elementSichtbar2);