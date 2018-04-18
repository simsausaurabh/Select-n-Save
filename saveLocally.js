chrome.contextMenus.create({

	title: "Select-n-Save",
	contexts:["selection"],
	onclick: save
});

function save(selectedText) {

	var str = selectedText.selectionText;
    var fileName = "";
    var len = str.length;
    
    if(len>8) {

    	len = 8;
    }
    for(var i=0;i<len;i++) {

    	if(str.charAt(i)!=' '){

	    	fileName = fileName + str.charAt(i);
    	}
    	else {

    		break;
    	}
    }

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;

	var myPassword = '123456';
	var encryptedData = CryptoJS.AES.encrypt(selectedText.selectionText, myPassword);
	var decrypted = CryptoJS.AES.decrypt(encryptedData, myPassword);

	fileName = fileName+""+dateTime;

	var tempElem = document.createElement('a');
    tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(encryptedData));
    tempElem.setAttribute('download', fileName);
    tempElem.click();
}
