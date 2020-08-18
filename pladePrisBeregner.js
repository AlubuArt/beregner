
var product = {};

function buttonClick() {

    var pricePrM2 = 150;

   //get the selected type
    var selectedType = eval(document.getElementById("selectType").value);  

   // get the selected width
    var selectedLength = document.getElementById("selectedLength").value;
    var selectedWidth = document.getElementById("selectedWidth").value;
    

   // calculate the price
    var calculatedPrice = Math.floor(selectedLength * selectedType.price * selectedWidth);
    var calculatedM2 = (selectedWidth * selectedLength / 1000000);

   //construct a product
   product = {type: selectedType, 
                  price: calculatedPrice, 
                  width: selectedWidth,
                  lenght: selectedLength,
                  sizem2: calculatedM2
                  };

    //show the result
    document.getElementById('resultPrice').innerHTML= '<p>Pris inkl. moms: ' + product.price + '</p>';
    document.getElementById('resultSize').innerHTML= '<p>Pladens størrelse: ' + product.sizem2 + ' m2 </p>';
    
    
    console.log(product.sizem2);
    
}

function addProduct() {

   confirm("Du er ved at lægge en vare i kurven som ikke kan byttes. Venligst sikre at målene er korrekt. \n\nTryk OK hvis varen er korrekt, ellers annuller" );

   if (addProduct) {
      console.log("Varen er lagt i kurven");
      alert("Varen er lagt i kurven. Du kan nu fortsætte med at handle.")
   }
}

