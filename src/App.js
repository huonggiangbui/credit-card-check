import React, { useState } from 'react';
import './App.css';

function App() {
  const [creditCardNumber, updateCreditCardNumber] = useState([]);
  const [cardValidation, setCardValidation] = useState("")

  var creditNumberArray = []

  const convertNumberToReverseArray = (number) => {
    //convert to array
    creditNumberArray = number.toString(10).replace(/\D/g, '').split('').map(Number);

    //create reverse array
    var index = creditNumberArray.length - 1;
    function reverse(ind) {
      if (ind < 0) {
        return creditNumberArray;
      }
      creditNumberArray.push(creditNumberArray[ind]);
      return reverse(ind - 1);
    }
    reverse(index);

    //delete initial array
    var ind1 = creditNumberArray.length / 2 - 1;
    function deleteArray(ind1) {
      if (ind1 < 0) {
        return creditNumberArray;
      }
      creditNumberArray.shift();
      return deleteArray(ind1 - 1);
    }
    deleteArray(ind1);
  }
  
  const testCardNumber = () => {
    convertNumberToReverseArray(creditCardNumber)

    var totalValue = 0;

    //Digits count
    for (var count = 0; count < creditNumberArray.length ; count++) {
      if (count % 2 === 0) {
        totalValue = totalValue + creditNumberArray[count]
      } else {
        const doubledValue = creditNumberArray[count] * 2
        if (doubledValue > 9) {
          totalValue = totalValue + doubledValue - 9
        } else {
          totalValue = totalValue + doubledValue
        }
      }
    }

    //Test cardValidation
    if (totalValue % 10 === 0) {
      setCardValidation("Your credit card number is valid")
    } else {
      setCardValidation("Your credit card number is not valid")
    }
  }

  return (
    <div className="page-container">
      <div className="header">
        <h1> Credit card checking website </h1>
      </div>

      <div className="content-container">
        <div>
          <form>
          <label>Please enter your credit card number</label>
          <input type="text" onChange={(e) => updateCreditCardNumber(e.target.value)} value={creditCardNumber}></input>
        </form>
        </div>
        
        <div>
          <button onClick={() => testCardNumber()}>Test</button>
          <p className="validation-check">{cardValidation}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
