<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .calculator {
      width: 300px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    input[type="text"] {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      font-size: 18px;
    }
    input[type="button"] {
      width: 48%;
      padding: 10px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>
<body>

<div class="calculator">
  <input type="text" id="display" disabled>
  <div>
    <input type="button" value="7" onclick="addToDisplay('7')">
    <input type="button" value="8" onclick="addToDisplay('8')">
    <input type="button" value="9" onclick="addToDisplay('9')">
    <input type="button" value="/" onclick="addToDisplay('/')">
  </div>
  <div>
    <input type="button" value="4" onclick="addToDisplay('4')">
    <input type="button" value="5" onclick="addToDisplay('5')">
    <input type="button" value="6" onclick="addToDisplay('6')">
    <input type="button" value="*" onclick="addToDisplay('*')">
  </div>
  <div>
    <input type="button" value="1" onclick="addToDisplay('1')">
    <input type="button" value="2" onclick="addToDisplay('2')">
    <input type="button" value="3" onclick="addToDisplay('3')">
    <input type="button" value="-" onclick="addToDisplay('-')">
  </div>
  <div>
    <input type="button" value="0" onclick="addToDisplay('0')">
    <input type="button" value="." onclick="addToDisplay('.')">
    <input type="button" value="=" onclick="calculate()">
    <input type="button" value="+" onclick="addToDisplay('+')">
  </div>
  <div>
    <input type="button" value="Clear" onclick="clearDisplay()">
  </div>
</div>

<script>
  function addToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }
</script>

</body>
</html>
