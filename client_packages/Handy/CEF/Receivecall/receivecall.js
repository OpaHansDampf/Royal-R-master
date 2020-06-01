function buttoncallAccept(){
  var url = new URL(window.location.href);
  var callingNumber = url.searchParams.get("phonenumber");
  var leitstelle = url.searchParams.get("leitstelle");
  mp.trigger("client:Handy:startCall", callingNumber, leitstelle, callingNumber);
  location.href = "../Phonecall/phonecall.html?phonenumber=" + callingNumber + "&leitstelle=" + leitstelle;
}
function buttoncallRejected(){
  var url = new URL(window.location.href);
  var callingNumber = url.searchParams.get("phonenumber");
  mp.trigger("client:Handy:rejectCall", callingNumber, callingNumber,callingNumber);
  location.href = "../Main/main.html";
}


window.addEventListener("keydown", function (event) {
  var key = event.keyCode;
  
if(key == 188) {
  var url = new URL(window.location.href);
  var callingNumber = url.searchParams.get("phonenumber");
  var leitstelle = url.searchParams.get("leitstelle");
  mp.trigger("client:Handy:startCall", callingNumber, leitstelle, callingNumber);
  location.href = "../Phonecall/phonecall.html?phonenumber=" + callingNumber + "&leitstelle=" + leitstelle;
}

if(key == 190) {
  var url = new URL(window.location.href);
  var callingNumber = url.searchParams.get("phonenumber");
  mp.trigger("client:Handy:rejectCall", callingNumber, callingNumber,callingNumber);
  location.href = "../Main/main.html";
}
});