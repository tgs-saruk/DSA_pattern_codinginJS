let prompt = require("prompt-sync")({ sigint: true });
let n = Number(prompt("Enter the number "));

// console.log("\nPattern 1: Square of stars");
// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= n; j++){
//        process.stdout.write("*");
//     }
//     console.log();
// }

// console.log("\nPattern 2: Right angle triangle of stars");
// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++){
//        process.stdout.write("*");
//     }
//     console.log();
// }

// console.log("\nPattern 3: Right angle triangle of numbers");
// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++){
//        process.stdout.write(j + " ");
//     }
//     console.log();
// }


console.log("\nPattern 4: characters in right angle triangle");
//let char = 65; // ASCII value of 'A'
for (let i = 1; i <= n; i++){
    let char = 65;
    for (let j = 1; j <= i; j++){
       process.stdout.write(String.fromCharCode(char) + " ");
       char++;
    }
    console.log();
}

console.log("\nPattern 5: stars * in right angle triangle in reverse order");
for (let i = 1; i <= n; i++){
    for (let j = n; j >= i; j--){
       process.stdout.write("*");
    }
    console.log();
}

console.log("\nPattern 6: stars in left angle triangle in reverse order");

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){
        if (j <= n - i){
            process.stdout.write("");
        } else {
            process.stdout.write("*");
        }
    }
    console.log();
}