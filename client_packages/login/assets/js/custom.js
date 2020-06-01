function sendAccountInfo(state){
    let loginName = document.getElementById("loginName");
    let loginPass = document.getElementById("loginPass");  
    mp.trigger("loginDataToServer", loginName.value, loginPass.value, state);
}