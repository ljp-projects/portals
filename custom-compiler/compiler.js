const zero="+[]";const nums={};nums.make=r=>Array.from({length:r},()=>nums["1"]).join("+");nums["0"]="(+[])";nums["1"]="(+!![])";nums["2"]="(+!![]+ +!![])";nums["3"]=`(+!![]+ +!![]+ +!![])`;nums["4"]=`(+!![]+ +!![]+ +!![]+ +!![])`;nums["5"]=`(+!![]+ +!![]+ +!![]+ +!![]+ +!![])`;nums["6"]="(+!![]+ +!![]+ +!![])*(+!![]+ +!![])";nums["7"]=`(+!![]+ +!![]+ +!![])*(+!![]+ +!![])+ +!![]`;nums["8"]=`(+!![]+ +!![])**(+!![]+ +!![]+ +!![])`;nums["9"]=`(+!![]+ +!![]+ +!![])**(+!![]+ +!![])`;const number=r=>{if(r===0)return zero;const n=Array.from(r+[]);let m=[];n.forEach(r=>{m.push(`(${nums[r+[]]}+[])`)});return` +(${m.join(" +")})`};const map={};const fromString=r=>r.split("").map(r=>{if(!(r in map)){const n=r.charCodeAt(0);return`([]+[])[${fromString("constructor")}][${fromString("fromCharCode")}](${number(n)})`}return map[r]}).join("+");map.a=`(+{}+[])[${number(1)}]`;map.b=`({}+[])[${number(2)}]`;map.o=`({}+[])[${number(1)}]`;map.e=`({}+[])[${number(4)}]`;map.c=`({}+[])[${number(5)}]`;map.t=`({}+[])[${number(6)}]`;map[" "]=`({}+[])[${number(7)}]`;map.f=`(![]+[])[${number(0)}]`;map.s=`(![]+[])[${number(3)}]`;map.r=`(!![]+[])[${number(1)}]`;map.u=`(!![]+[])[${number(2)}]`;map.i=`((+!![]/+[])+[])[${number(3)}]`;map.n=`((+!![]/+[])+[])[${number(4)}]`;map.S=`([]+([]+[])[${fromString("constructor")}])[${number(9)}]`;map.g=`([]+([]+[])[${fromString("constructor")}])[${number(14)}]`;map.p=`([]+(/-/)[${fromString("constructor")}])[${number(14)}]`;map["\\"]=`(/\\\\/+[])[${number(1)}]`;map.d=`(${number(13)})[${fromString("toString")}](${number(14)})`;map.h=`(${number(17)})[${fromString("toString")}](${number(18)})`;map.m=`(${number(22)})[${fromString("toString")}](${number(23)})`;map.C=`((()=>{})[${fromString("constructor")}](${fromString("return escape")})()(${map["\\"]}))[${number(2)}]`;const compile=r=>`(()=>{})[${fromString("constructor")}](${fromString(r)})()`;const fs=require("fs");const inputFilePath=process.argv[2];const outputFilePath=process.argv[3];const codeString=fs.readFileSync(inputFilePath,"utf-8");fs.writeFileSync(outputFilePath,`// Made with JSMess V1.0.0\n// Props to Frank Stokes for the bulk of the compiler code\n\n// Compiled code\n\n${compile(codeString)}\n\n// !ALTHOUGH IT MAY WORK, DO NOT USE IN PRODUCTION!`);