import fs from "node:fs"
function pathKiller([dirURL, path]) {
    console.log(`release: v1.1.0`);
    // 1. path and dirlist declaration
    // 2. reading wordlist file
    // 3. loop through words
    (fs.readFileSync(`${dirURL}`).toString()).split("\n").forEach(async (dir, i) => {
        let reponse = await fetch(`${path}/${dir}`);
        console.log(`URL: ${reponse.url}\nRESPONSE CODE::${reponse.status}\n`);
    });
}

export default pathKiller;