import { parse, StartRules, SyntaxError } from '.temp.js'
let x;

document.getElementById("x").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        x = document.getElementById("x").value;
        document.getElementById("log").innerHTML = parse(x);
    }
});
