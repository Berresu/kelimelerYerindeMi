let kelimeler=["Lorem"," ipsum"," dolor"," sit"," amet"," consectetur"," adipiscing"," elit"];
let sonuc=document.getElementById("sonuc");
let button=document.getElementById("btnSorgula");

button.addEventListener("click", ()=>{
    if(kelimeler==kelimeler){
        console.log(kelimeler);
        sonuc.innerHTML="Kelimeler Doğru Yerlerinde Değil"
    }
    else if(kelimeler.reverse()){
        console.log(kelimeler);
        sonuc.innerHTML="Kelimeler Doğru Yerlerinde";
    }
});
