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
                 .append("Die Tabelle des 33.Spieltags:<br>\n")
                 .append("<input type='button' value='Tabelle' id='TabellenButton'<br><br>\n")
                 .append("Wer ist der Toptorjäger und wer sind seine Verfolger?!:<br>\n")
                 .append("<input type='button' value='Top-Torschützen' id='Torschützenbutton'<br><br>\n")
                 .append("Die aller neusten Transfergerüchte im Überblick!:<br>\n")
                 .append("<input type='button' value='Tranfernews' id='Transferbutton'<br><br>\n")
                 .append("Die Mannschaften der Bundesligasaison 2017/2018:<br>\n")
                 .append("<input type='button' value='Zu den Mannschaften' id='Teambutton'/>")
                 .append("<br><br><input type='button' value='Logout' id='logout'/>");
    });

    $(document).on("click", "#TabellenButton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Tabelle 33.Spieltag")
                 .append("<br><input type='image' src='http://cdn2.spiegel.de/images/image-849365-640_panofree-nvca-849365.jpg'/>")
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

 $(document).on("click", "#Kölnbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>1. FC Köln")
                .append("<br><input type='image' src='https://fc.de/typo3temp/_processed_/3/7/csm_Teamfoto_201718_1480x720_01_3b203f1fa7.png'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Mainzbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>1. FSV Mainz 05")
                .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/30_20177181511238.png'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Leverkusenbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Bayer 04 Leverkusen")
                .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/9_2017913125024648.png'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Dortmundbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Borussia Dortmund")
                .append("<br><input type='image' src='https://www.bvb.de/var/ezdemo_site/storage/images/bvb.de/menu/mannschaften/profis/629155-69-ger-DE/Profis_bvbnachrichtenbild_regular.png'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Gladbachbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Borussia M'Gladbach")
                .append("<br><input type='image' src='http://www.wz.de/polopoly_fs/1.2484518.1501274369!/httpImage/onlineImage.JPG_gen/derivatives/galleryParty/onlineImage.JPG'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Frankfurtbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Eintracht Frankfurt")
                .append("<br><input type='image' src='https://www.eintracht.de/fileadmin/_processed_/csm_6514-1501862474-teamfoto1718a_202027c476.jpg'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Augsburgbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>FC Augsburg")
                .append("<br><input type='image' src='https://static.foba1.com/bilder/teamfotos/640x360/342.jpg'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Münchenbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>FC Bayern München")
                .append("<br><input type='image' src='http://www.abendzeitung-muenchen.de/media.media.f8e9e6c8-56b3-4494-bf66-cdfb45071387.original1024.jpg'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Schalkebutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>FC Schalke 04")
                .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/2_2017713154036845.png'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Hamburgbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Hamburger SV")
                .append("<br><input type='image' src='https://static.foba1.com/bilder/teamfotos/640x360/211.jpg'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Hannoverbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Hannover 96")
                .append("<br><input type='image' src='http://images.sportbuzzer.de/v1/photos/raw/das-mannschaftsfoto-von-hannover-96-fur-die-bundesliga-saison-2017-18/regular-16-9'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Berlinbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>Hertha BSC")
                .append("<br><input type='image' src='http://www.herthabsc.de/images//Teams/mannschaftsfotos/36787_teamfoto-profis-1718_01_800x450.jpg'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Leipzigbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>RB Leipzig")
                .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/15778_20178251388599.png'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Freiburgbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>SC Freiburg")
                .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/7_20178315510350.png'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Hoffenheimbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>TSG Hoffenheim")
                .append("<br><input type='image' src='https://www.achtzehn99.de/assets/Akademie/_resampled/SetWidth555-20170717-sap-tsg-hoffenheim-akademie-mannschaftsfoto-u19.jpg'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Stuttgartbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>VFB Stuttgart")
                .append("<br><input type='image' src='https://vfbtv.vfb.de/images/redaktion/images/profis/1600x900_VfB_Mannschaftsfoto_17_18_89142_frz_752x423.jpg'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Wolfsburgbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>VFL Wolfsburg")
                .append("<br><input type='image' src='https://www.vfl-wolfsburg.de/fileadmin/user_upload/Bilder/Alle_News/2017/U23/170815_U23_Mannschaftsfoto.jpg'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Bremenbutton", function () {
        $("body").html("MK - Das Sportmagazin!<br><br>SV Werder Bremen")
                .append("<br><input type='image' src='http://mediadb.kicker.de/2018/fussball/mannschaft/xxl/4_2017720153424548.png'/>")
                .append("<input type='button' value='Zurück zur Homepage' id='Homebutton'/>\n")
                .append("<input type='button' value='Zurück zur Mannschaftsübersicht' id='Zurückbutton'/>\n");
    });

 $(document).on("click", "#Zurückbutton", function () {
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