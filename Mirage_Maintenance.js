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
        } while (!curSequence.every(n => n === 0) && curSequence.length > 0)
        let prediction = 0;
        for (let i=0;i<allSequences.length;i++) {
            prediction += allSequences[i][allSequences[i].length-1];
        }
        sumOfAllPredictions += prediction;
    });

    console.log("sumOfAllPredictions is "+sumOfAllPredictions);
});