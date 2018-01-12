$(document).ready(function () {

    $(document).on("click", "#logout", function () {
        $.post("../anfrage", {
            typ: "logout"
        }, function (data) {
            if (data.typ == "logout") {
                $("body").html("Du bist erfolgreich abgemeldet. Neu laden zum erneuten Anmelden!");
            }
        })
    });

    $(document).on("click", "#Anmeldeknopf", function () {
        $.post("../anfrage", {
            typ: "anmeldedaten",
            anmeldename: $("#Anmeldename").val(),
            passwort: $("#passwort").val()
        }, function (data) {
            if (data.typ == "überprüfung") {
                if (data.text == "ok") {
                    $("body").html("Gratulation, du bist angemeldet!")
                            .append("<br><input type='button' value='logout' id='logout'/>");
               
                     } else {
                    $("body").append("<br>Die Anmeldedaten waren leider falsch!");

                }
            }
        }
        );
    });

    $(document).on("click", "#Registrierknopf", function () {
        $("body").html("Registrierung<br>")
                .append(" <br>" + "neuer Benutzername: <input type='text' id='benutzername'/><br>\n")
                .append("gewünschtes Passwort: <input type='password' id='neuespasswort'/><br>\n")
                .append("Passwort wiederholen: <input type='password' id='passwortbestätigen'/><br>\n")
                //.append("<input type='checkbox' name='checkknopf' id='Überprüfungsknopf'/>"+"Ich akzeptiere die AGB"+ " <br>"+ " <br>")
                .append("<input type='button' value='Benutzer erstellen' id='neueruserknopf'/>");
    });

    $(document).on("click", "#neueruserknopf", function () { // verbessert Jan Benecke
    
        if ($("#neuespasswort").val() == $("#passwortbestätigen").val()) {
            
          
             $.post("../anfrage", {
                typ: "registrierung",
                regname: $("#benutzername").val(),
                passwort: $("#neuespasswort").val()
           
     
            }, function (data){
                if (data.typ=="bestätigung") {
                    if (data.text=="richtig") {
                         $("body").append("Ihr Account wurde erstellt")        
                    }
                    else if (data.text=="falsch"){
                        $("body").append("Dieser Benutzer existiert schon")  
                    }
               
            }
                
            }
                    );
          
        }
        else {
            $("body").append("<br>Die Passwörter stimmen nicht überein! Bitte nochmal versuchen");
        }
    });


    $.post("../anfrage",
            {
                typ: "angemeldet"
            },
            function (data) {

                if (data.typ == "angemeldet") {
                    if (data.text == "nein") {

                        $("body").html("Einloggen<br>\nName: <input type='text' id='Anmeldename'/><br>")
                                .append("Passwort: <input type='password' id='passwort'/><br>\n")
                                .append("<input type='button' value='OK' id='Anmeldeknopf'/>\n")
                                .append("<input type='button' value='Registrieren' id='Registrierknopf'/><br>\n")
                        .append("<input type='button' value='Passwort vergessen?' id='Passwortvergessenknopf'/><br>\n");
                    } else {
                        $("body").html("Glückwunsch, du bist angemeldet!")
                                .append("<br><input type='button' value='logout' id='logout'/>");
                    }
                }
            }
    );

//$(document).on("click", "#Passwortvergessenknopf", function () {
  //  $("body").html("Leider können wir ihr Passwort nicht wiederherstellen, weshalb sie sich erneut anmelden müssen.")
    //        .append("<br><input type='image' src='https://t4.ftcdn.net/jpg/01/69/35/23/240_F_169352390_BIqHe9sWR33ULPNkIuPdyqWM4lMuxC8z.jpg'/>");
//});
});