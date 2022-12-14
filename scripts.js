/********************************

        COOKIE clicker

********************************/
//defaults
let cookieCount = 0;

//DOM decleration
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');


//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})

//refresh cookies
let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}

/********************************

        Click Power

********************************/


/********************************

          Grandmas

********************************/

//set default values
let grandmaAuto = false;
//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower;
}

let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}
let refreshGrandma = function() {
  ...
  grandmaMultiple.innerHTML = grandmaPower - 10;
}



//buy a grandma
//turn autoGrandma on!
autoGrandma = true
autoGrandmaStart();

buyGrandma.addEventListener("click", function() {

})

buyGrandma.addEventListener("click", function() {

  //make sure we have enough cookies and subtract our cookies from the price

  //upgrade power level
grandmaLevelNumber += 1;
  //update price
grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
  //update grandma power
grandmaPower += 10;
  //turn autoGrandma on!

  //refresh shop item
refreshGrandma();
})

// Make sure we have enough cookies and subtract our cookies from the price.
if (cookieCount >= grandmaPriceAmount) {
  // Subtract cookies from the price of the item.
  cookieCount +=  - grandmaPriceAmount;
  refreshCookieCount()

  // Upgrade power level.

  // Update price.

  ...
}

/********************************

          Facilities

********************************/

//set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
  //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
      cookieCount -= facilityPriceAmount;
      refreshCookieCount()
    //upgrade power level
facilityLevelNumber += 1;
    //update price
facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
    //update facility power
facilityPower += 600;
    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();
    //refresh shop item
refreshFacility();
  }
})
//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
      cookieCount += facilityPower;
      refreshCookieCount();
    }, 1000);
}
//refresh shop
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}


buyClickPower.addEventListener("click", function() {
  ...
    //update Click Power
    clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);
  ...
})
...
//buy a grandma
buyGrandma.addEventListener("click", function() {
  ...
    //update grandma power
    grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
  ...
})

  ...

//buy a facility
buyFacility.addEventListener("click", function() {
  ...
    //update facility power
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;
  ...
})
...
