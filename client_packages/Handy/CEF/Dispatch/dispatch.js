$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
})

function sendDispatch(fraction){
	mp.trigger("client:Handy:sendDispatch", fraction);
}
