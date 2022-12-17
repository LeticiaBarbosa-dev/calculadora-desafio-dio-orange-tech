import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function Calculadora() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  // Limpar campo
  function handleOnClear() {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  }

  //Adicionar numeros
  function handleAddNumber(num: string){
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    console.log(currentNumber)
  }

  function handleSumNumbers(){

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }


  function handleMinusNumbers(){

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  function handleEquals(){

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <div className="w-[100%] h-[100vh] bg-[#282828] flex items-center justify-center">
      <div className="bg-white w-[50%]">
        <Input value={currentNumber} />
        <div className="flex flex-row justify-between items-center">
          <Button label="x" />
          <Button label="/" />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers}  />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </div>
      </div>
    </div>
  );
}
