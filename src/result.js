import React from "react";
function Result({secnum,term}){
    let anwser;
    if(term){
        if(term>secnum){
            anwser='The number greater'
        }
        else if(term<secnum){
            anwser='The number is smaller'
        }
        else if(term == secnum){
            anwser='The number is corret'
        }
        else{
            anwser='Invalid input'
        }
    }
    return(
        <div>
            <h1 className="anwser">your guess is :{anwser}</h1>
        </div>
    )
}
export default Result