// let Fage = 45
// let Sage = 40
// function age (Fage, Sage){
//     return(45)
// }









// 4) sizga ism berilan bolsa salomlashuvchi dastur tuzing
let funct = (name) => {
    return ("Hello " +(name))
}
console.log(funct("Muxlisa"))







// let arr = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]
// for (let i = 0; i <= 100; i++) {
//     console.log(arr[i + i])
// }






// function kopaytir ( a ){
//     return(a * 3)
// }
// console.log( kopaytir ("abc"))








// 3) 6 raqami haqiqatdan ham ajoyib raqam.Berilgan ikkita  qiymatlari, a va b, agar ulardan biri 6 bo'lsa, true qiymatini qaytaring. Yoki ularning yig'indisi yoki ayirmasi 6 bo'lsa true qaytaring. Aks holda false qaytaring
function myfunc(a, b) {
    if (a == 6 || b == 6 || a + b == 6 || a - b == 6) {
        return true
    } else {
        return false
    }
}
console.log(myfunc(2, 3))


