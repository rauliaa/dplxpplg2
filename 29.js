
 var panggiluntukinput = require("readline-sync");
 var bilangan = panggiluntukinput.question("Masukkan Bilangan: ");
 var sisa_bagi = bilangan % 2 

 if(isNaN(bilangan)){
    console.log("Yang anda masukkan bukan angka");
 }else{
    if(sisa_bagi == 0)
    {
        console.log("BILANGAN GENAP");
    }else{
        console.log("BILANGAN GANJIL");
    }
 }

 var panggiluntukinput = require("readline-sync");
 var r = panggiluntukinput.question("Masukkan nilai jari-jari: ");
 luas1 =(r * r);
 if(r % 7 == 0){
    luas2 =(luas1*22);
    luasfix1 =(luas2/7);
    console.log("Luas lingkaran adalah", luasfix1);
 }else{
    luasfix2 =(luas1*3.14);
    console.log("Luas lingkaran adalah", luasfix2);
 }

 var panggiluntukinput = require("readline-sync");
 var p = panggiluntukinput.question("Masukkan nilai p: ");
 var l = panggiluntukinput.question("Masukkan nilai l: ");
 var luas = (p * l);
 console.log(luas)

 var panggiluntukinput = require("readline-sync")
 var jam = panggiluntukinput.question("Jam: ");
 var menit = panggiluntukinput.question("Menit: ");
 console.log("Tampilkan detik");
 var detik = (jam * 3600) + (menit * 60);
 console.log(detik);