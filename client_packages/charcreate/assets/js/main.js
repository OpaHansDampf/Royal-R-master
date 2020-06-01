function sendCharacterInfo(state){
    $('.alert-danger').hide();
    let charFirst = document.getElementById("charFirst");
    let charLast = document.getElementById("charLast");
    let birthday = document.getElementById("birthday");
    $("#createBtn").hide();    
    mp.trigger("createDataToServer", charFirst.value, charLast.value, birthday.value);
}
