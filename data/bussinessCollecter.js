// select the target node
(function handleBiz() {
	var target = unsafeWindow.document.querySelector('#content');
	
	if(target == null) {
		setTimeout(handleBiz,0);
		return;
	}
	
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
	  if(unsafeWindow.location.hash == "#business") {
		  mutations.forEach(function(mutation) {
			  if(mutation.target.className && 
				 /^button\s+business-collect$/.test(mutation.target.className) &&
				 /^\s*display\s*:\s*none\s*;\s*$/.test(mutation.oldValue)) {
				unsafeWindow.$(mutation.target).trigger("click");
			  }
		  });    
	  }
	});
	 
	// configuration of the observer:
	var config = { 
		attributes: true,
		characterData: true,
		subtree: true,
		attributeOldValue: true,
		characterDataOldValue: true
	};
	 
	// pass in the target node, as well as the observer options
	observer.observe(target, config);
})();
