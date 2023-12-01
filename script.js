let alisherFounds =prompt("Sizda qancha pul bor");
let priceTicket = 500*11000.34;
let priceMuseum = 120*12354.03;
let priceHotel = 250*11000.34;
let addition = priceTicket + priceMuseum + priceHotel;
let result;
if (alisherFounds <= addition){
    result = "Alishr, ozgina sabr qilish bo'lar ekan"
} else{
    result = "Oq yo'l, Alisher"
}
console.log(result);