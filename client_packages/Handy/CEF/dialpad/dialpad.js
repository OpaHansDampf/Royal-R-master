$('.row-number').click(function(){
  //add animation
//   addAnimationToButton(this);
  //add number
  var currentValue = $('.phoneString input').val();
  var valueToAppend = $(this).attr('name');
  $('.phoneString input').val(currentValue + valueToAppend);
});

function buttondeleteClicked(){
  var currentValue = $('.phoneString input').val();
  var newValue = currentValue.substring(0, currentValue.length - 1);
  $('.phoneString input').val(newValue);
}
function buttoncallClicked(){
    //////// Aus dem CEF Browser heraus lassen sich keine Serverevents callen. Müsste ein Zwischenschritt über nen ClientEvent noch dazu geschrieben werden.
    var number = document.getElementById("number").value;
    //mp.trigger("client:Handy:startCall", number);
    location.href = "../Phonecalling/phonecalling.html";
    mp.trigger("client:Handy:onCall", number);
}

function buttonaddClicked(){
  var number = document.getElementById("number").value;
  mp.trigger("client:Handy:showAddContact", number);
}