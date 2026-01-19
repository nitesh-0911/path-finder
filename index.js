function pathKiller({ dirList, path }) {
    // 1. path and dirlist declaration
    // 2. loop through dirList
    dirList.forEach(async (dir, i) => {
        let reponse = await fetch(`${path}/${dir}`);
        console.log(`URL: ${reponse.url}\nRESPONSE CODE::${reponse.status}\n`)
    });
}

export default pathKiller;