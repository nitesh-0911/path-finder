import pathKiller from "./index.js";

// readFile wordlist
// const words = (fs.readFileSync("./wordlist.txt").toString()).split("\n");

pathKiller(["./wordlist.txt", "https://google.com"]);