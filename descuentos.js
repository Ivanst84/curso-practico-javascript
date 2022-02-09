
// Lo nuevo
const couponsList = [


{
name:
"Primera_Compra",
 discount : 50,

},
{
 name:
 "Buen_Fin",
 discount: 45,

},
{
    name: "secreto",
    discount:15,

},


];
// lo que se hiso en clase siguiendo al profe
function calcularPrecioDesc(precio,descuento)
{
    const porcentajePrecioConDescuento = 100 -descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100
 return precioConDescuento;


}
// este tambien se hizo en clase
function onClickButtonPriceDiscount(){
const inputPrice= document.getElementById("inputPrice");
const priceValue= inputPrice.value;
//const inputDiscount = document.getElementById("inputDiscount");
//const discountValue = inputDiscount.value;
// se agrega nuevo codigo metodo 3 creando la variable si se tiene cupon
const inputCoupon = document.getElementById("inputCoupon");
const couponValue = inputCoupon.value;
alert(inputCoupon);
const couponValid = function(couponsList){
    return couponsList.name === couponValue;

};
const userCoupon = couponsList.find(couponValid);
if(!userCoupon){
    alert(" El cupon "+couponValue+ "No es un cupon valido");

}else{ const descuento= userCoupon.discount;


const precioConDescuento= calcularPrecioDesc(priceValue,descuento);
 const resultP = document.getElementById("ResultP");

 resultP.innerText = "El precio con descuento es de  $" +precioConDescuento;
}
}

