
//JSON AÇIKLAMA


const x =`{"a":1, "b":5, "c": 3}`;
const str = JSON.stringify(x); 
//bellekteki nesenenin kağıda dökülmüş Halidir. tabiki string oldu

//bunu object e çevirmek için 
const obj= JSON.parse(x);

// bir nesne
const kisi ={ ad: "Ali", yas: 33};

//json hali
const json = JSON.stringify(kisi);
console.log("JSON HALİ: " json);

// tekrardan json dan nesneye dönüştürelim ve bir property e dönüştürelim.
