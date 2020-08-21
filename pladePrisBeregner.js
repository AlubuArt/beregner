
var product = {};

function buttonClick() {

   
   var selectedType = eval(document.getElementById("selectType").value);  
   var selectedLength = document.getElementById("selectedLength").value;
   var selectedWidth = document.getElementById("selectedWidth").value;
    

   
   var productPrice = calculatePrice(selectedLength, selectedType, selectedWidth);
   var productM2 = calculateM2(selectedLength, selectedWidth);
   var productWeight = calculateWeight(selectedType, productM2);


   //construct a product
   product = { type: selectedType, 
               price: productPrice, 
               width: selectedWidth,
               lenght: selectedLength,
               sizem2: productM2,
               weight: productWeight
               };

    //show the result
    document.getElementById('resultPrice').innerHTML= '<p>Pris inkl. moms: ' + product.price + ' kr </p>';
    document.getElementById('resultSize').innerHTML= '<p>Pladens størrelse: ' + product.sizem2 + ' m2 </p>';
    document.getElementById('resultWeight').innerHTML = '<p>Pladens vægt: ' + productWeight + ' kg </p>';
    
    
    console.log(product)
    
}

function calculateWeight(selectedType, productM2) {

   var calculatedWeight = (selectedType.weight * productM2)
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


function addProduct() {

   confirm("Du er ved at lægge en vare i kurven som ikke kan byttes. Venligst sikre at målene er korrekt. \n\nTryk OK hvis varen er korrekt, ellers annuller" );

   if (addProduct) {
      console.log("Varen er lagt i kurven");
      alert("Varen er lagt i kurven. Du kan nu fortsætte med at handle.")
   }
}

