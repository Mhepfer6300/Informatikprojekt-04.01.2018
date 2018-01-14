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
                            .append("<br><input type='button' value='logout' id='logout'/>")
                            .append("<input type='button' value='Zur Homepage' id='Homebutton'/>");

                     } else {
                    $("body").append("<br>Die Anmeldedaten waren leider falsch!");

                }
            }
        }
        );
    });

     $(document).on("click", "#Homebutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>")
                 .append("Fußball Bundesliga Saison 2017/2018: <br><br>\n")
                 .append("Die Tabelle des 17.Spieltags:<br>\n")
                 .append("<input type='button' value='Tabelle' id='TabellenButton'<br><br>\n")
                 .append("Wer ist der Toptorjäger und wer sind seine Verfolger?!:<br>\n")
                 .append("<input type='button' value='Top-Torschützen' id='Torschützenbutton'<br><br>\n")
                 .append("Die aller neusten Transfergerüchte im Überblick!:<br>\n")
                 .append("<input type='button' value='Tranfernews' id='Transferbutton'<br><br>\n")
                 .append("Die Mannschaften der Bundesligasaison 2017/2018:<br>\n")
                 .append("<input type='button' value='Zu den Mannschaften' id='Teambutton'/>")
    });

    $(document).on("click", "#TabellenButton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Tabelle 17.Spieltag")
                 .append("<br><input type='image' src='data:image/jpeg;base64,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'/>")
                 .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    });


  $(document).on("click", "#Torschützenbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Die Top-Torjäger der Saison 2017/2018!<br><br>")
                 .append("1. Robert Lewandowski(FC Bayern München)<br>15 Tore<br><br>2. Pierre-E. Aubameyang(Borussia Dortmund)<br>13 Tore<br><br>3. Alfred Finnbogadon(FC Augsburg)<br>11 Tore<br><br>4. Kevin Volland(Bayer 04 Leverkusen)<br>10 Tore<br><br>5. Marc Uth(TSG Hoffenheim)<br>9 Tore<br><br>6. Timo Werner(RB Leipzig)<br>8 Tore<br><br>7. Nils Petersen(SC Freiburg)<br>8 Tore<br><br>8. Michael Gregoritsch(FC Augsburg)<br>8 Tore<br><br>9. Guidi Burgstaller(FC Schalke)<br>7 Tore<br><br>10.Salomon Kalou(Hertha BSC)<br>7 Tore<br><br>\n")
                 .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>");
    });

    $(document).on("click", "#Transferbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Die heißesten Transfergerüchte und alle News zu den Vertragsverandlungen<br>")
                .append("Zur Zeit ist der Transfermarkt leider geschlossen.<br>Schauen sie demnächst wieder vorbei um weitre Informationen zum Transfergeschehen zu erhalten.")
                .append("<br><input type='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6i2D46x6TmWAkiVZMJoVQxYpv6FzsOtLtkC68svF0dwFku11'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    });

    $(document).on("click", "#Teambutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Alle Teams der Bundesliga Saison 2017/2018")
                .append("<br><input type='button' value='Köln' id='Kölnbutton'/>\n")
                .append("1.FC Köln")
                .append("<br><input type='button' value='Mainz' id='Mainzbutton'/>\n")
                .append("1.FSV Mainz 05")
                .append("<br><input type='button' value='Leverkusen' id='Leverkusenbutton'/>\n")
                .append("Bayer 04 Leverkusen")
                .append("<br><input type='button' value='Dortmund' id='Dortmundbutton'/>\n")
                .append("Borussia Dortmund")
                .append("<br><input type='button' value='Gladbach' id='Gladbachbutton'/>\n")
                .append("Borussia M'Gladbach")
                .append("<br><input type='button' value='Frankfurt' id='Frankfurtbutton'/>\n")
                .append("Eintracht Frankfurt")
                .append("<br><input type='button' value='Augsburg' id='Augsburgbutton'/>\n")
                .append("FC Augsburg")                
                .append("<br><input type='button' value='München' id='Münchenbutton'/>\n")
                .append("FC Bayern München")
                .append("<br><input type='button' value='Schalke' id='Schalkebutton'/>\n")
                .append("FC Schalke 04")                
                .append("<br><input type='button' value='Hamburg' id='Hamburgbutton'/>\n")
                .append("Hamburger SV")                
                .append("<br><input type='button' value='Hannover' id='Hannoverbutton'/>\n")
                .append("Hannover 96")
                .append("<br><input type='button' value='Berlin' id='Berlinbutton'/>\n")
                .append("Hertha BSC")
                .append("<br><input type='button' value='Leipzig' id='Leipzigbutton'/>\n")
                .append("RB Leipzig")                
                .append("<br><input type='button' value='Freiburg' id='Freiburgbutton'/>\n")
                .append("SC Freiburg")
                .append("<br><input type='button' value='Hoffenheim' id='Hoffenheimbutton'/>\n")
                .append("TSG Hoffenheim")                
                .append("<br><input type='button' value='Stuttgart' id='Stuttgartbutton'/>\n")
                .append("VFB Stuttgart")                
                .append("<br><input type='button' value='Wolfsburg' id='Wolfsburgbutton'/>\n")
                .append("VFL Wolfsburg")
                .append("<br><input type='button' value='Bremen' id='Bremenbutton'/>\n")
                .append("Werder Bremen");
            });

 //$(document).on("click", "#Kölnbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>1. FC Köln")
    //            .append("<br><input type='image' src='https://fc.de/typo3temp/_processed_/3/7/csm_Teamfoto_201718_1480x720_01_3b203f1fa7.png'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Mainzbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>1. FSV Mainz 05")
    //            .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/30_20177181511238.png'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Leverkusenbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>Bayer 04 Leverkusen")
    //            .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/9_2017913125024648.png'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Dortmundbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>Borussia Dortmund")
    //            .append("<br><input type='image' src='https://www.bvb.de/var/ezdemo_site/storage/images/bvb.de/menu/mannschaften/profis/629155-69-ger-DE/Profis_bvbnachrichtenbild_regular.png'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Gladbachbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>Borussia M'Gladbach")
    //            .append("<br><input type='image' src='http://www.wz.de/polopoly_fs/1.2484518.1501274369!/httpImage/onlineImage.JPG_gen/derivatives/galleryParty/onlineImage.JPG'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Frankfurtbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>Eintracht Frankfurt")
    //            .append("<br><input type='image' src='https://www.eintracht.de/fileadmin/_processed_/csm_6514-1501862474-teamfoto1718a_202027c476.jpg'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Augsburgbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>FC Augsburg")
    //            .append("<br><input type='image' src='https://static.foba1.com/bilder/teamfotos/640x360/342.jpg'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Münchennbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>FC Bayern München")
    //            .append("<br><input type='image' src='http://www.abendzeitung-muenchen.de/media.media.f8e9e6c8-56b3-4494-bf66-cdfb45071387.original1024.jpg'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Schalkebutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>FC Schalke 04")
    //            .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/2_2017713154036845.png'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Hamburgbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>Hamburger SV")
    //            .append("<br><input type='image' src='https://static.foba1.com/bilder/teamfotos/640x360/211.jpg'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Hannoverbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>Hannover 96")
    //            .append("<br><input type='image' src='http://images.sportbuzzer.de/v1/photos/raw/das-mannschaftsfoto-von-hannover-96-fur-die-bundesliga-saison-2017-18/regular-16-9'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

 //$(document).on("click", "#Berlinbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>Hertha BSC")
    //            .append("<br><input type='image' src='http://www.herthabsc.de/images//Teams/mannschaftsfotos/36787_teamfoto-profis-1718_01_800x450.jpg'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

//$(document).on("click", "#Leipzigbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>RB Leipzig")
    //            .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/15778_20178251388599.png'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

//$(document).on("click", "#Freiburgbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>SC Freiburg")
    //            .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/7_20178315510350.png'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

//$(document).on("click", "#Hoffenheimbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>TSG Hoffenheim")
    //            .append("<br><input type='image' src='https://www.achtzehn99.de/assets/Akademie/_resampled/SetWidth555-20170717-sap-tsg-hoffenheim-akademie-mannschaftsfoto-u19.jpg'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

//$(document).on("click", "#Stuttgartbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>VFB Stuttgart")
    //            .append("<br><input type='image' src='https://vfbtv.vfb.de/images/redaktion/images/profis/1600x900_VfB_Mannschaftsfoto_17_18_89142_frz_752x423.jpg'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

//$(document).on("click", "#Wolfsburgbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>VFL Wolfsburg")
    //            .append("<br><input type='image' src='https://www.vfl-wolfsburg.de/fileadmin/user_upload/Bilder/Alle_News/2017/U23/170815_U23_Mannschaftsfoto.jpg'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});

//$(document).on("click", "#Bremenbutton", function () {
    //    $("body").html("MK - Das Sportmagazin!<br><br>SV Werder Bremen")
    //            .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/4_2017720153424548.png'/>");
    //            .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n");
    //});


    $(document).on("click", "#Registrierknopf", function () {
        $("body").html("Registrierung<br>")
                .append(" <br>" + "neuer Benutzername: <input type='text' id='benutzername'/><br>\n")
                .append("gewünschtes Passwort: <input type='password' id='neuespasswort'/><br>\n")
                .append("Passwort wiederholen: <input type='password' id='passwortbestätigen'/><br>\n")
                //.append("<input type='checkbox' name='checkknopf' id='Überprüfungsknopf'/>"+"Ich akzeptiere die AGB"+ " <br>"+ " <br>")
                .append("<input type='button' value='Benutzer erstellen' id='neueruserknopf'/>");
    });

    $(document).on("click", "#neueruserknopf", function () {
    
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
                                .append("<br><input type='button' value='logout' id='logout'/><br>");
                    }
                }
            }
    );



$(document).on("click", "#Passwortvergessenknopf", function () {
   $("body").html("Leider können wir ihr Passwort nicht wiederherstellen, weshalb sie sich erneut anmelden müssen.")
            .append("<br><input type='image' src='https://t4.ftcdn.net/jpg/01/69/35/23/240_F_169352390_BIqHe9sWR33ULPNkIuPdyqWM4lMuxC8z.jpg'/>");
});
});