function backClicked(){
	document.getElementById("content").contentWindow.history.back();
}

function homeClicked(){
	document.getElementById("content").src = "Main/main.html";
}