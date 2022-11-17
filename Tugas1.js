const prompt = require('prompt-sync')({sigint: true});

 

const nilai = prompt('Masukan nilai: ');

if (nilai < 0 ) {

    console.log("Tidak bisa input bilangan negatif")

}
else if (nilai % 2 == 1 ) {

    console.log("Tidak bisa input bilangan ganjil")

}
else if(nilai % 2 == 0 ){

    var hasil = Math.sqrt(nilai)
    console.log("Nilai Kuadrat dari " + nilai + " Adalah = " + hasil)
}