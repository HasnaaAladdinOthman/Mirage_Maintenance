import fs from "fs";
let sumOfAllPredictions = 0;

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err) throw err;
    let report= data.trim().split(/\r?\n/);

    report.forEach(line =>{
        let curSequence= line.trim().split(' ').map(s => Number(s));
        const allSequences = [];
        do {
            allSequences.push(curSequence);
            let newSequence = [];
            for (let i=1; i<curSequence.length; i++) {
                newSequence.push(curSequence[i] - curSequence[i-1]);
            }
            curSequence = newSequence;            
        } while (!curSequence.every(n => n === 0) && curSequence.length > 0);

        let backwardPrediction = 0;
        for (let i=allSequences.length-1; i>=0; i--) {
            backwardPrediction = allSequences[i][0] - backwardPrediction;
        }

        sumOfAllPredictions += backwardPrediction;
    });

    console.log("sumOfAllPredictions is "+sumOfAllPredictions);
});