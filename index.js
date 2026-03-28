// string, number
//  var, let = değişken tanımlama
// constant = sabit tanımlama
// let isim = "Emre XXX";
// fonksiyonlar
// fx(x) => 

// fx(x,y) => {todo something}
// let isim2 = isim.replaceAll("ashdjashjkasd", "Soyadi")
// console.log(isim2);
// isim = "Ahmet YYY"
// console.log(isim);

// Object
const kitap1 = {
    kitap_ismi: "Simyacı",
    kitap_yazari: "Paul Çelo",
    kitap_resim: "https://img.kitapyurdu.com/v1/getImage/fn:11819904/wi:500/wh:71b90a47a",
    yayinevi: "Martı Yayın",
    yayin_tarihi: 2018
};

const kitap2 = {
    kitap_ismi: "The Lord of The Rings",
    kitap_yazari: "J. R. Tolkien",
    kitap_resim: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjf6sL9psrzGdcsDNErHoKG6yZWO9CpiRe9lmnLPv0IxJ5C75e2UD47sDcI_dmiAW98aer0vhluGvCWrrXnEAA3bvCGWo7dw",
    yayinevi: "Metis Yayınevi",
    yayin_tarihi: 1930
};

// Dizi (Array, Slice)
const kitaplar = [];

kitaplar.push(kitap1)
kitaplar.push(kitap2)

console.log(kitaplar);


function kitapEkle(x) {
    // kitap.kitap_resim
    // console.log("Kitap resmi", x.kitap_resim);
    
    const icerik = `<div class="col-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${x.kitap_resim}"
                            class="card-img-top" alt="...">

                        <div class="card-body">
                            <h5 class="card-title">${x.kitap_ismi}</h5>
                            <p class="card-text">Yazar: ${x.kitap_yazari}</p>
                            <button class="btn btn-primary sorgula">Sorgula</button>
                        </div>
                    </div>
                </div>`;

    // Jquery ifadesi
    $('#kitaplar').append(icerik)

}

// kitapEkle(kitap1)
// kitapEkle(kitap2)

kitaplar.forEach(function(x){
    kitapEkle(x)
})


$(".sorgula").click(function () {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
})



