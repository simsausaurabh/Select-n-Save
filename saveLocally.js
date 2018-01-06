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

	var str = selectedText.selectionText;
    var first = "";
    for(var i=0;i<str.length;i++) {
    	if(str.charAt(i)!=' '){
	    	first = first + str.charAt(i);
    	}
    	else {
    		break;
    	}
    }

	var tempElem = document.createElement('a');
    tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(selectedText.selectionText));
    tempElem.setAttribute('download', first);
    tempElem.click();

}