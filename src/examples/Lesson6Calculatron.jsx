import { useState } from 'react';
// Lesson 6: Let's use state to build a calculator


// We will build a simple calculator that can add, subtract, multiply, and divide numbers.
// The calculator will have a display that shows the current number.
// The calculator will have buttons for the numbers 0-9, the decimal point, and the operations +, -, *, and /.
// The calculator will have a button to calculate the result.


function CalcNumberButton({ number, handleNumberClick }) {
    return <button onClick={() => handleNumberClick(number)}>{number}</button>;
}

function CalcOperationButton({ operation, handleOperationClick }) {
    return <button onClick={() => handleOperationClick(operation)} className="operation">{operation}</button>;
}

function CalcFunctionButton({ operation, handleFunctionClick }) {
    return <button onClick={() => handleFunctionClick(operation)} className="function">{operation}</button>;
}

function Calculatron() {
    // Task 1:
    // We will use state to keep track of the current number and operation. How will we do this?

    const [result, setResult] = useState(0);
    const [previousNumber, setPreviousNumber] = useState(0);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [operation, setOperation] = useState(null);
    const [error, setError] = useState(null);


    // Task 2:
    // We will create a function to handle button clicks. How will we do this?

    const handleNumberClick = (number) => {
        if (error) { return; }
        setCurrentNumber(currentNumber * 10 + number);
        setResult(currentNumber * 10 + number);
    }

    const handleOperationClick = (newOperation) => {
        if (error) { return; }
        let newResult = 0;
        switch (operation) {
            case "+":
                newResult = previousNumber + currentNumber;
                break;
            case "-":
                newResult = previousNumber - currentNumber;
                break;
            case "*":
                newResult = previousNumber * currentNumber;
                break;
            case "/":
                newResult = previousNumber / currentNumber;
                break;
            default:
                newResult = currentNumber;
        }
        setResult(newResult);
        setOperation(newOperation);
        setPreviousNumber(newResult);
        setCurrentNumber(0);
    }

    // Task 3:
    // We will create a function to calculate the result. How will we do this?
    // Notice that we don't keep track of the previous number. How will we handle this?

    const handleResultClick = () => {
        if (error) { return; }
        let newResult = 0;
        switch (operation) {
            case "+":
                newResult = previousNumber + currentNumber;
                break;
            case "-":
                newResult = previousNumber - currentNumber;
                break;
            case "*":
                newResult = previousNumber * currentNumber;
                break;
            case "/":
                if (currentNumber === 0) {
                    setError("Cannot divide by zero");
                    return;
                }
                newResult = previousNumber / currentNumber;
                break;
            default:
                newResult = currentNumber;
        }
        setResult(newResult);
        setPreviousNumber(newResult);
        setCurrentNumber(0);
        setOperation(null);
    }

    // Task 4:
    // We will create a component to simplify the buttons. How will we do this?

    // Task 5:
    // We will create a function and a button to clear the calculator. How will we do this?

    const clearCalculator = () => {
        setResult(0);
        setPreviousNumber(0);
        setCurrentNumber(0);
        setOperation(null);
        setError(null);
    }

    const handleFunctionClick = (operation) => {
        if (operation === "AC") {
            clearCalculator();
        }
        else if (operation === "+/-") {
            setCurrentNumber(-currentNumber);
            setResult(-result);
        }
    }

    // Task 6:
    // We will show the current operation in a small display above the result. How will we do this?

    // Task 7:
    // We will handle some error cases. What will happen if the user tries to divide by zero?

    return <div className="calculatron">
        <div className="result">
            <div className='previous'>{previousNumber} {operation}</div>
            {error || currentNumber || result}
        </div>
        <div>
            <CalcFunctionButton operation={"+/-"} handleFunctionClick={handleFunctionClick} />
            <CalcFunctionButton operation={"AC"} handleFunctionClick={handleFunctionClick} />
        </div>
        <div>
            <CalcNumberButton number={7} handleNumberClick={handleNumberClick} />
            <CalcNumberButton number={8} handleNumberClick={handleNumberClick} />
            <CalcNumberButton number={9} handleNumberClick={handleNumberClick} />
            <CalcOperationButton operation={"/"} handleOperationClick={handleOperationClick} />
        </div>
        <div>
            <CalcNumberButton number={4} handleNumberClick={handleNumberClick} />
            <CalcNumberButton number={5} handleNumberClick={handleNumberClick} />
            <CalcNumberButton number={6} handleNumberClick={handleNumberClick} />
            <CalcOperationButton operation={"*"} handleOperationClick={handleOperationClick} />
        </div>
        <div>
            <CalcNumberButton number={1} handleNumberClick={handleNumberClick} />
            <CalcNumberButton number={2} handleNumberClick={handleNumberClick} />
            <CalcNumberButton number={3} handleNumberClick={handleNumberClick} />
            <CalcOperationButton operation={"-"} handleOperationClick={handleOperationClick} />
        </div>
        <div>
            <button>.</button>
            <CalcNumberButton number={0} handleNumberClick={handleNumberClick} />
            <button className="result" onClick={handleResultClick}>=</button>
            <CalcOperationButton operation={"+"} handleOperationClick={handleOperationClick} />
        </div>
    </div>;
}

export default Calculatron;