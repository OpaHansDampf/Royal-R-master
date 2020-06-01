$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
})

function buttonSaveClicked(){
	var name = document.getElementById("name").value;
	var number = document.getElementById("nummer").value;
	mp.trigger("client:Handy:addContact", name, number);
	mp.trigger("client:Handy:showContacts");
}