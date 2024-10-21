const htmlEditor = document.getElementById("html");
const cssEditor = document.getElementById("css");
const jsEditor = document.getElementById("js");
const outputFrame = document.getElementById("output");

function updateOutput() {
    const htmlContent = htmlEditor.value;
    const cssContent = "<style>" + cssEditor.value + "</style>";
    const jsContent = "<script>" + jsEditor.value + "<\/script>";

    const combinedContent = htmlContent + cssContent + jsContent;
    outputFrame.srcdoc = combinedContent;
}

htmlEditor.addEventListener("input", updateOutput);
cssEditor.addEventListener("input", updateOutput);
jsEditor.addEventListener("input", updateOutput);

// Initial content to display
updateOutput();