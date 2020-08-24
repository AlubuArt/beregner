
var productPrice = 0;
var selectedType = "4mm";
var selectedLength = 0;
var selectedWidth = 0;
var productM2 = 0;
var productWeight = 0;
var fragtPris = 0;
var product = {};



function buttonClick() {

   
   selectedType = eval(document.getElementById("selectType").value);  
   selectedLength = document.getElementById("selectedLength").value;
   selectedWidth = document.getElementById("selectedWidth").value;
   productPrice = calculatePrice(selectedLength, selectedType, selectedWidth);
   productM2 = calculateM2(selectedLength, selectedWidth);
   productWeight = calculateWeight(selectedType, productM2);
   fragtPris = friFragt(productPrice, productWeight, selectedLength, selectedWidth)

   product = { 
               name: "Marine Plywood",
               type: selectedType, 
               price: productPrice, 
               width: selectedWidth,
               lenght: selectedLength,
               sizem2: productM2,
               weight: productWeight,
               fragt: fragtPris
               };
   

    //show the result
   document.getElementById('resultPrice').innerHTML= '<p>Pris inkl. moms: ' + product.price + ' kr </p>';
   document.getElementById('resultSize').innerHTML= '<p>Pladens størrelse: ' + product.sizem2 + ' m2 </p>';
   document.getElementById('resultWeight').innerHTML = '<p>Pladens vægt: ' + productWeight + ' kg </p>';
   document.getElementById('fragt').innerHTML= '<p>' + fragtPris + '</p>';
   //construct a product
   
   return product;
    
   
    
}

function calculateWeight(selectedType, productM2) {

   var calculatedWeight = (selectedType.weight * productM2);
   return calculatedWeight;
}


function calculatePrice(selectedLength, selectedType, selectedWidth){

   var calculatedPrice = Math.floor(selectedLength * selectedType.price * selectedWidth);
   return calculatedPrice;
}


function calculateM2(selectedLength, selectedWidth){
   var calculatedM2 = (selectedWidth * selectedLength / 1000000);
   return calculatedM2;
}

function friFragt(productPrice, productWeight, selectedLength, selectedWidth){
   
   if ( (productPrice > 500) && (productWeight <= 20) && (selectedLength <= 2000) && selectedWidth <= 2000 ) {
      return "Fragt: Du får fri fragt!"
   } else {
      return"Fragt: 49kr"
   }
   
}


function addToBasket(){
   
   var productToBeAdded = buttonClick();

   document.getElementById('productName').innerHTML = '<p>' + productToBeAdded.name + ' ' + productToBeAdded.type.name + '</p>';
   document.getElementById('productSize').innerHTML = '<p>' + productToBeAdded.sizem2 + '</p>';
   console.log(productToBeAdded.type.name)
}



   

   



