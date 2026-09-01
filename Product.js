console.log("Online Shopping Product Management")

let product = {
    prodId: 100,
    prodName: "Dress",
    price: 1200,
    quantity: 3,

   calculateTotalPrice: function(){
        return this.price*this.quantity;
    },

    updateQuantity: function(newQuantity){
        this.quantity = newQuantity;
    },

    displayDetails: function(){
        console.log("Product ID: ", this.prodId);
        console.log("Product Name: ", this.prodName);
        console.log("Price: ", this.price);
        console.log("Quantity: ", this.quantity);
        console.log("Total Price: ", this.calculateTotalPrice());
    }
};
console.log("Original Product Details: ");
product.displayDetails();

product.updateQuantity(4);

console.log("After Updating Quantity: ");
product.displayDetails();