window.addEventListener('DOMContentLoaded', function() {
  // Get the water tank table element
  var waterTankTable = document.getElementById('waterTank');

  // Define the input array
  var input = [0,4,0,0,0,6,0,6,4,0];
   
 



  
  // Function to update the water tank view
  function updateWaterTankView() {
    var rows = waterTankTable.getElementsByTagName('tr');
    var cells = rows[0].getElementsByTagName('td');

    // Loop through the cells and update their height and class based on the input array
    for (var i = 0; i < input.length; i++) {
      var cell = cells[i];
      
      var inputValue = input[i];
  
      var inputHeight = inputValue > 0 ? inputValue * 10 : 0; // Desired height based on input, 0 height for input <= 0

      // Set the height of the cell
      cell.style.height = inputHeight + 'px';

      // Remove previous class and add the appropriate class based on the input value
      cell.classList.remove('water');
      // cell.classList.remove('block');
      // if (inputValue ) {
        cell.classList.add('water');
      // } else {
        // cell.classList.add('block');
        // cell.style.backgroundColor = 'orange'; // Change color to orange for input value 0
      // }
    }
  }

  // Call the updateWaterTankView function to initialize the view
  updateWaterTankView();

  // Adust the height of the blue color dynamically based on the input values
  var waterElements = waterTankTable.getElementsByClassName('water');
  
  console.log(waterElements,"waterElements");


  // var waterElements1 = waterTankTable.getElementsByClassName('block');

  // console.log(waterElements1);

  for (var za = 0; za < input.length; za++) {
         console.log(za,"za");
    var waterElement = waterElements[za];

    // console.log(waterElement,"waterElement");
    var inputValue = input[za];
    var inputValue2 = abc

    console.log(inputValue, "inputValue");

    // if (waterElement || inputValue ) {
      var inputHeight = inputValue * 10; // Desired height based on input

      console.log(inputHeight,"inputHeight");
      var calcHeight = 'calc(100% - ' + inputHeight + '%)';

      console.log(calcHeight,"calcHeight");

      waterElement.style.setProperty('--water-height', calcHeight);
      
      // waterElements1.style.setProperty(0)
    // }
  }
});

var abc =[]

var twp
var trap = function(height) {
  let maxLeftArray = [], maxRightArray = [];
  let maxLeft = 0, maxRight = 0;
  const ln = height.length;
  let trappedWater = 0;
  for(let i = 0;i < height.length; i ++) {
      maxLeftArray[i] = Math.max(height[i], maxLeft);
      maxLeft = maxLeftArray[i];
      maxRightArray[ln - i - 1] = Math.max(height[ln - i - 1], maxRight);
      maxRight = maxRightArray[ln - i - 1];
  }
  for(let i = 0;i < height.length; i ++) {
      trappedWater += Math.min(maxLeftArray[i], maxRightArray[i]) - height[i];
      abc[i]=trappedWater-twp
      console.log(trappedWater,"trappedWater");
      twp=trappedWater
      console.log(abc[i],":::::::::::::::::::")
  }
  return trappedWater;
};

var arr = [0,4,0,0,0,6,0,6,4,0];
var result123 = trap(arr)
console.log(trap(arr));
document.getElementById("result").textContent = "Trapped Water Result: " + result123;