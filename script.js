// GENERATE A PIN
function getPin() {
   const random = Math.random() * 10000;
   const pin = (random + "").split(".")[0];

   if (pin.length === 4) {
      return pin;
   } else {
      console.log("shorter pin", pin);
      return getPin()
   }
}

// DISPLAY GENERATED PIN
const generatePin = document.getElementById("generatePin");
generatePin.addEventListener("click", function() {
   const pinInput = document.getElementById("showPin");
   pinInput.value = getPin();

   document.getElementById("pinNotMatch").style.display = "none";
   document.getElementById("pinMatched").style.display = "none";
})


const buttonContainer = document.getElementById("digitContainer");
buttonContainer.addEventListener("click", function(event) {
   const digit = event.target.innerText;

   if (isNaN(digit)) {
      if (digit === "C") {
         document.getElementById("typedPin").value = "";
      }
   } else {
      const typedInput = document.getElementById("typedPin");
      typedInput.value = typedInput.value + digit
   }
})


// VERIFY PIN
const matchBtn = document.getElementById("matchBtn");
matchBtn.addEventListener("click", verifyPin);

function verifyPin() {
   const pinInput = document.getElementById("showPin").value;
   const typedInput = document.getElementById("typedPin").value;

   if (pinInput == typedInput) {
      showResult("inline-block", "none")
   }
   else {
      showResult("none", "inline-block")
   }

   document.getElementById("typedPin").value = "";
   // document.getElementById("showPin").value = "";
}

function showResult(correct, incorrect) {
   document.getElementById("pinMatched").style.display = correct;
   document.getElementById("pinNotMatch").style.display = incorrect;
}