
$(".input1").change(function() {
    console.log("Input text changed!");
    Quantitychange(this.id,this.value)
});

$(".remove" ).click(function() {
    console.log(this.value);
    Quantitychange(this.value,0)
});

        
function Quantitychange(productID,Q) {
    if (Q ==0 ){
        var newQuantity =0;
    }else{
        var newQuantity=document.getElementById(productID).value;
    }
    console.log("productID:  "+productID)
    console.log("newQuantity:  "+newQuantity)
    $.get( `/editProductQuantite/${productID}/${newQuantity}`, function(data) {
        var priceId = `#R${productID}`
        $("#subTotalPrice").html(data.totalPrice)
        $("#totalPrice").html(data.totalPrice)
        if (data.quantity == "0"){
            var divId = `#div${productID}`
            $(divId).html("");
        } else {
            console.log(data)
            $(priceId).html(data.price*1000 * data.quantity/1000);
        }
        
        
    });
};


           
