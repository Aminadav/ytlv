





function check() {
    var msg = "";
    var flag = 0;

    if (document.getElementById("user_name").value == "") {
        msg = msg + "הזן שם בבקשה \n";
        flag = 1;
		
    }
    if (document.getElementById("user_phone").value == "") {
        msg = msg + "הזן מספר טלפון בבקשה \n";
        flag = 1;
    }
    if (document.getElementById("user_email").value == "") {
        msg = msg + "הזן דוא''ל בבקשה \n";
        flag = 1;
    } else {
        if (document.getElementById("user_email").value.indexOf("@") == -1 || document.getElementById("user_email").value.indexOf(".") == -1) {
            msg = msg + " הזן דוא''ל תקין בבקשה \n";
            flag = 1;
        }
    }
    if (document.getElementById("user_remarks").value == "") {
        msg = msg + "הזן את תוכן הפנייה בבקשה \n";
        flag = 1;
    }
 
             if (flag == 1) {
        alert(msg);
    } else { //replace from here and on
        document.getElementById("contact_form").submit();
		window.setTimeout(function(){
			document.getElementById("thanks").style.display = 'block';
			document.getElementById("contact_form").reset();
		}, 1000);
		
    }
}
