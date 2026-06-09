const fs = require('fs');
const src = "C:\\Users\\navya shree g n\\.gemini\\antigravity-ide\\brain\\5984d985-c880-49d7-9793-993abc833a44\\.tempmediaStorage\\media_5984d985-c880-49d7-9793-993abc833a44_1780901835543.png";
const dst = "f:\\NTR Honey ocean Chacos and Cookies\\images\\logo-purity.png";

try {
    console.log("Source exists:", fs.existsSync(src));
    fs.copyFileSync(src, dst);
    console.log("Success");
} catch (e) {
    console.log("Error:", e.message);
}
