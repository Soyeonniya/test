<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>전자계산기</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    #calculator {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      text-align: center;
    }

    input {
      width: calc(100% - 20px);
      padding: 10px;
      margin-bottom: 10px;
      font-size: 18px;
      box-sizing: border-box;
      border: none;
      border-bottom: 2px solid #ccc;
      outline: none;
    }

    button {
      width: 48px;
      height: 48px;
      font-size: 18px;
      margin: 5px;
      cursor: pointer;
      border: none;
      outline: none;
      background-color: #e0e0e0;
      border-radius: 4px;
    }

    button.operator {
      background-color: #f0a41d;
      color: #fff;
    }

    button.equal {
      background-color: #4caf50;
      color: #fff;
    }
  </style>
</head>
<body>

<div id="calculator">
  <input type="text" id="display" readonly>
  <br>
  <button onclick="appendToDisplay('/')">/</button>
  <button onclick="appendToDisplay('*')">*</button>
  <br>
  <button onclick="appendToDisplay('7')">7</button>
  <button onclick="appendToDisplay('8')">8</button>
  <button onclick="appendToDisplay('9')">9</button>
  <br>
  <button onclick="appendToDisplay('4')">4</button>
  <button onclick="appendToDisplay('5')">5</button>
  <button onclick="appendToDisplay('6')">6</button>
  <br>
  <button onclick="appendToDisplay('1')">1</button>
  <button onclick="appendToDisplay('2')">2</button>
  <button onclick="appendToDisplay('3')">3</button>
  <br>
  <button onclick="appendToDisplay('0')">0</button>
  <button onclick="clearDisplay()">C</button>
  <button onclick="calculate()" class="equal">=</button>
</div>

<script>
  let display = document.getElementById('display');
  let currentInput = '';

  function appendToDisplay(char) {
    currentInput += char;
    display.value = currentInput;
  }

  function clearDisplay() {
    currentInput = '';
    display.value = '';
  }

  function calculate() {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch (error) {
      display.value = 'Error';
    }
  }
</script>

</body>
</html>
