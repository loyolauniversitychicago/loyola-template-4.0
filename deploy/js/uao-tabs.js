/*
window.onload = function () { 
	let tabs = 
		document.getElementsByClassName('tab-button'); 

	function addActive(tab) { 
		tab.setAttribute('aria-selected', true); 
	} 

	function removeActive(tab) { 
		tab.setAttribute('aria-selected', false); 
	} 

	addActive(tabs[0]); 
	setInterval(function () { 
		for (let i = 0; i < tabs.length; i++) { 
			if (i + 1 == tabs.length) { 
				addActive(tabs[0]); 
				setTimeout(removeActive, 500ms, tabs[i]); 
				break; 
			} 
			if (tabs[i].classList.contains('active')) { 
				setTimeout(removeActive, 500ms, tabs[i]); 
				addActive(tabs[i + 1]); 
				break; 
			} 
		} 
	}, 1500); 
};
*/