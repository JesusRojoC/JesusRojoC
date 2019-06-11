let links = document.querySelectorAll(".close");

links.forEach(function(link){
	link.addEventListener("click", function(ev){
		ev.preventDefault();

		let content = document.querySelector(".content");

		content.classList.remove("bounceIn");
		content.classList.remove("animated");

		content.classList.add("animated");
		content.classList.add("bounceOut");

		location.href = "../index.html";
		
		return false;
	});

});