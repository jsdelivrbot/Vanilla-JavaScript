ityped.init(`#ityped`, {
	// required - for now, only accepting texts
	strings: ["Dead simple animated typing.", "No dependencies."],
	//optional
	typeSpeed: 55,
	//optional
	backSpeed: 40,
	//optional
	startDelay: 500,
	//optional
	backDelay: 500,
	//optional
	loop: true,
	//optional
	showCursor: true,
	//optional
	cursorChar: "|",
	// optional callback called once the last string has been typed
	onFinished: function() {}
});
