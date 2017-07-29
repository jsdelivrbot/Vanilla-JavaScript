window.addEventListener("load", renderBookmarks);

document
	.getElementById("bookmark-form")
	.addEventListener("submit", saveBookmark);

function saveBookmark(e) {
	let bookmarkForm = e.target;
	let siteName = document.getElementById("name").value;
	let siteUrl = document.getElementById("url").value;
	e.preventDefault();

	if (!correctFormInput(siteName, siteUrl)) {
		return false;
	}

	let bookmark = {
		name: siteName,
		url: siteUrl
	};

	if (localStorage.getItem("bookmark") === null) {
		let bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem("bookmark", JSON.stringify(bookmarks));
	} else {
		let bookmarks = JSON.parse(localStorage.getItem("bookmark"));
		bookmarks.push(bookmark);
		localStorage.setItem("bookmark", JSON.stringify(bookmarks));
	}
	bookmarkForm.reset();
	renderBookmarks();
}

function deleteBookmark(url) {
	let bookmarks = JSON.parse(localStorage.getItem("bookmark"));

	for (var i = 0; i < bookmarks.length; i++) {
		if (bookmarks[i].url === url) {
			bookmarks.splice(i, 1);
		}
		localStorage.setItem("bookmark", JSON.stringify(bookmarks));
	}
	renderBookmarks();
}

function renderBookmarks() {
	let bookmarkResults = document.getElementById("bookmarkResults");
	bookmarkResults.innerHTML = "";
	let bookmarks = JSON.parse(localStorage.getItem("bookmark"));
	if (bookmarks != "" && bookmarks !== null) {
		for (var i = 0; i < bookmarks.length; i++) {
			let name = bookmarks[i].name;
			let url = bookmarks[i].url;

			bookmarkResults.innerHTML += `<div class="well">
																		<h3>${name}</h3>
																		<a class="btn btn-default" href="${url}" target="_blank">Go to ${name}</a>
																		<a class="btn btn-danger" data-url="${url}" href="#" id="delete">Delete</a>
																		</div>`;
		}

		document
			.getElementById("delete")
			.addEventListener("click", e => deleteBookmark(e.target.dataset.url));
	}
}

function correctFormInput(name, url) {
	var regex = /^(ftp|http|https):\/\/[^ "]+$/;

	if (name === "" || url === "") {
		alert("Please fill all fields");
		return false;
	} else if (!regex.test(url)) {
		alert("Please fill in a valid URL");
		return false;
	} else {
		return true;
	}
}
