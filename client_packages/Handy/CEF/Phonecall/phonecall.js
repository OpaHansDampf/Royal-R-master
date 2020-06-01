function buttoncallRejected(){
    var url = new URL(window.location.href);
    var callingNumber = url.searchParams.get("phonenumber");
    var leitstelle = url.searchParams.get("leitstelle");
    mp.trigger("client:Handy:rejectCall", callingNumber, leitstelle, callingNumber);
    location.href = "../Main/main.html";
}

window.addEventListener("keydown", function (event) {
    var key = event.keyCode;  
  if(key == 190) {
    var url = new URL(window.location.href);
    var callingNumber = url.searchParams.get("phonenumber");
    var leitstelle = url.searchParams.get("leitstelle");
    mp.trigger("client:Handy:rejectCall", callingNumber, leitstelle, callingNumber);
    location.href = "../Main/main.html";
  }
  });