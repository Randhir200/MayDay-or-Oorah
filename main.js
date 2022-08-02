function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let t=0;t<tc;t++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        arr.sort((a,b)=>a-b);
        let pTime = 0;
        let flag = false;
        for(let i=0;i<n;i++){
              pTime++;
              if(arr[i]<=pTime){
                  flag = true
                  break
              }
              pTime++;
              
        }
        
        !flag?console.log("Oorah!"):console.log("MayDay!")
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  