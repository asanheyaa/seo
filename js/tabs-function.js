	const tabs = document.querySelectorAll('[data-tabs]');


	const tabsAction = function (tab) {
		return function (event) {
			if (event.target.closest('[data-tabs-link]') && event.target.closest('[data-tabs]') === tab) {
				event.preventDefault();
				removePrevElementClasses(tab);
				addNextElementClasses(event);
			}
		}
	}

	function removePrevElementClasses(tab) {
		const prevActiveLink = tab.querySelector('li.active');
		if (prevActiveLink) {
			prevActiveLink.classList.remove('active');
		}
		const blocksContainer = tab.querySelector('[data-tabs-blocks]');
		const prevActiveBlock = blocksContainer.querySelector('.active');
		if (prevActiveBlock) {
			prevActiveBlock.classList.remove('active');
		}
	}
	function addNextElementClasses(event) {
		const currentLink = event.target.closest('[data-tabs-link]');
		currentLink.parentElement.classList.add('active');
		const id = currentLink.getAttribute('href').replace('#', '');
		if (id) {
			const tabBlock = document.getElementById(`${id}`);
			tabBlock.classList.add('active');
		}
	}

	if (tabs) {
		tabs.forEach(tab => {
			tab.addEventListener('click', tabsAction(tab))
		});
	}


