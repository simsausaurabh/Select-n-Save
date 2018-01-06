var myText;
var myStrText=JSON.stringify(myText);

chrome.contextMenus.create({

title: "Select-n-Save",
contexts:["selection"],
onclick: save

});


function save(selectedText) {
	// console.log("successfully saved!");
	// alert(selectedText.selectionText);
	var tempElem = document.createElement('a');
    tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(selectedText.selectionText));
    tempElem.setAttribute('download', "kuchbhi");
    tempElem.click();

}