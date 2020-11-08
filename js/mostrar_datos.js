function llenar_datos(){
    var datosguardados = document.querySelector('#resultado');
    datosguardados.innerHTML = "";

    var casillamostrar = JSON.parse(localStorage.getItem('casilla_usuario'));
    var nombrepmostrar = JSON.parse(localStorage.getItem('nombre_usuario'));
    var fotopmostrar = JSON.parse(localStorage.getItem('avatar_usuario'));


var cantidadcasillas = casillamostrar.length;

var tabla="<br><div class='line'></div><table border=\"2\">";
    tabla+="<tr>";

for( var i = 0; i < casillamostrar.length;  i++ ){
    if (col % 50 == 0 && col != "" && col >= 50 ) {
    

        //casilla de dinero
        var i = 0;
        for(j=0;j<campos;j++){ 

            var result = 0;
            do {
            i = i + 50;
            result = result + i;
            } while (i <= campos);

            if( j == 9 || j == 19 || j == 29 ||j == 39 || j == 49 || j == 59 || j == 69 || j == 79 || j == 89 ||  j == 99
            || j == 109 || j == 119 || j == 129 ||j == 139 || j == 149 || j == 159 || j == 169 || j == 179 || j == 189 || j == 199
            || j == 209 || j == 219 || j == 229 ||j == 239 || j == 249 || j == 259 || j == 269 || j == 279 || j == 289 ||  j == 299
            || j == 309 || j == 319 || j == 329 ||j == 339 || j == 349 || j == 359 || j == 369 || j == 379 || j == 389 || j == 399
            || j == 409 || j == 419 || j == 429 ||j == 439 || j == 449 || j == 459 || j == 469 || j == 479 || j == 489 ||  j == 499
            || j == 509 || j == 519 || j == 529 ||j == 539 || j == 549 || j == 559 || j == 569 || j == 579 || j == 589 ||  j == 599
            || j == 609 || j == 619 || j == 629 ||j == 639 || j == 649 || j == 659 || j == 669 || j == 679 || j == 689 ||  j == 699
            || j == 709 || j == 719 || j == 729 ||j == 739 || j == 749 || j == 759 || j == 769 || j == 779 || j == 789 ||  j == 799
            || j == 809 || j == 819 || j == 829 ||j == 839 || j == 849 || j == 859 || j == 869 || j == 879 || j == 889 ||  j == 899
            || j == 909 || j == 919 || j == 929 ||j == 939 || j == 949 || j == 959 || j == 969 || j == 979 || j == 989 ||  j == 999
            || j == 1009 || j == 1019 || j == 1029 ||j == 1039 || j == 1049 || j == 1059 || j == 1069 || j == 1079 || j == 1089 ||  j == 1099
            || j == 1109 || j == 1119 || j == 1129 ||j == 1139 || j == 1149 || j == 1159 || j == 1169 || j == 1179 || j == 1189 ||  j == 1199
            ){
                tabla+= "<td style='text-align:center'>"+('$'+result);
                tabla+="<input type='color' id='valor' name='color' value='#FFFFFF'>"+ "</td></tr>";
            }else{
                tabla+= "<td style='text-align:center'>"+('$'+result);

                tabla+="<input type='color' name='color' id='valor'  value='#FFFFFF'>"+ "</td>";
            }
        }
        tabla+="</tr>";
        
        tabla+="</table>";

        for(j=0;j<campos;j++){  
            var i=0;
            var numero=0;
            var misuma=0;
            while(i<=campos){
            misuma=misuma+numero;
            i=i+1;
            numero=numero+50;
            }
            console.log(misuma);
                    }
        tabla+="<br><p><strong>Total a Ahorrar"+" "+('$'+misuma)+"</strong></p>";
        

    }else{
       tabla+="<div class='alert alert-danger'> La cantidad de dinero debe ser multiplo de 50. </div>";
       tabla+="<br><p><strong>Total a Ahorrar $0 </strong></p>";
      }

      document.getElementById("resultado").innerHTML=tabla

}
}


    

    