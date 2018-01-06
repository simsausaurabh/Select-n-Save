chrome.contextMenus.create({

title: "Select-n-Save",
contexts:["selection"],
onclick: save

});

function save() {
	// console.log("successfully saved!");
	alert("saved!");
}