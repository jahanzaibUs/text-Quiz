import React, { useEffect, useState } from 'react';
import './App.css';
import Questions from './questions.json';
import StarRatings from 'react-star-ratings';

function App() {
  const [QData, setQData] = useState([]);
  const [Position, SetPosition] = useState(0);
  const [specific, setSpecific] = useState([]);
  const [Error, setError] = useState('');
  const [currect, setCurrect] = useState(0)
  const [InCurrect, setInCurrect] = useState(0)
  const [Options, SetOptions] = useState([])
  useEffect(() => {
    setQData( Questions);
    setSpecific(Questions[Position])
    SetOptions(Questions[Position].incorrect_answers)
  }, [Position])
  console.log(currect, InCurrect)
  function CheckOption(data){
    console.log(data, 'check')
    if(specific.correct_answer === data){
      // SetPosition(Position+1)
      setError('Correct!')
      setCurrect(currect+1)
    }else{
      setError('Incurrect')
      setInCurrect(InCurrect+1)
    }
  }
  function NextQuestion(){
      SetPosition(Position+1)
  }
  return (
    <div>
      <div style={{height: 20, backgroundColor: "gray", width: (Position / QData.length) *100 + '%'}} />
      <div style={{margin: '0 10%'}}>
        <div >
          <h1 style={{color: "gray", marginBottom: 0}}>
            Question {Position + 1} of {Questions.length}
          </h1>
          <p style={{margin: 0, color: "gray"}}>
            {specific.category}
          </p>
          <div>
            <StarRatings
              rating={ specific.difficulty === 'hard'?  3 : specific.difficulty === 'medium' ? 2 : 1}
              starDimension="20px"
              starSpacing="0px"
            />
          </div>
          <h1 style={{wordBreak: 'break-word', textAlign: "left"}}>
            {
              specific.question
            }
          </h1>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: '70%'}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <button onClick={() => CheckOption(Options[0])} style={{width: '30%', padding: 10}}>{Options[0]}</button>
                  <button onClick={() => CheckOption(Options[1])} style={{width: '30%', padding: 10}}>{Options[1]}</button>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: 20}}>
                  <button onClick={() => CheckOption(Options[2])} style={{width: '30%', padding: 10}}>{Options[2]}</button>
                  <button onClick={() => CheckOption(specific.correct_answer)} style={{width: '30%', padding: 10}}>{specific.correct_answer}</button>
                </div>
              </div>
            </div>
            
            <div style={{display: "flex", justifyContent: "center", marginTop: 40}}>
                <button onClick={() => NextQuestion()} style={{width: '30%', padding: 10}}>Next Question</button>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: 40}}>
              <div style={{width: '80%', display: "flex"}}>
                <div style={{width: currect/20*100+'%' ,backgroundColor: 'black', height: 50, borderRadius: '10px'}} />
                <div style={{direction: "rtl", width: InCurrect/20*100+'%', backgroundColor: 'white', height: 50, borderRadius: '10px'}} />
              </div>
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
