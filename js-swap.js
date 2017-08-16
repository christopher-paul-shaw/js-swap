if (document.getElementsByClassName('js-swap') != null) {
	var swaps = document.getElementsByClassName('js-swap');
	for(var i = 0; i < swaps.length; i++) { 
		swaps[i].addEventListener('click',function(e) {
			e.preventDefault();
			var target = e.target.dataset.swaptarget;
			var endpoint = e.target.dataset.swapurl;
			var container = document.querySelectorAll('[data-swap~="'+target+'"]')[0];
			var queryString = '';
								
			var inputs = container.getElementsByTagName('input');
			for( var i=0; i< inputs.length; i++ ) {
				var name = inputs[i].name;
				var value = inputs[i].value;
				var type = inputs[i].type;
				if (!name || !value || type == 'range') { 
					continue;
				}
				
				if (type == 'radio' && !inputs[i].checked) {
					continue;
				}
				queryString += name + '=' + value + '&';
			}

			var inputs = container.getElementsByTagName('textarea');
			for( var i=0; i< inputs.length; i++ ) {
				var name = inputs[i].name;
				var value = inputs[i].value;
				var type = inputs[i].type;
				if (!name || !value || type == 'range') { 
					continue;
				}
				if (type == 'radio' && !inputs[i].checked) {
					continue;
				}
				queryString += name + '=' + value + '&';
			}

			var xhr = new XMLHttpRequest();
		   	xhr.open( "GET", endpoint+'?'+queryString, true );
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					var parser = new DOMParser();
					var newDom = parser.parseFromString(xhr.responseText,"text/html");	   	
					document.querySelectorAll('[data-swap~="'+target+'"]')[0].innerHTML = newDom.querySelectorAll('[data-swap~="'+target+'"]')[0].innerHTML
			 	}
			}
			xhr.send( null );
		});
	}
}
