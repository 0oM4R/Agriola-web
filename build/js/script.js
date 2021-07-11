let inputfile1 = document.getElementById('file-input');
let file1Name = document.getElementById('file1Name');
let file1Value = document.getElementById('file1value');
file1Value.textContent = "Upload first image";
inputfile1.addEventListener('change', function(event) {
    let files = event.target.files;
    if (files.length > 0) {
        file1Value.textContent = "Upload first image";
        let uploadedFileName = files[0].name;
        file1Name.textContent = uploadedFileName;
        file1Value.textContent = "The chosen image : "
    } else {
        file1Name.textContent = "";
        file1Value.textContent = "Upload first image";
    }
})

/**********************************image 2**************************/
let inputfile2 = document.getElementById('file2-input');
let file2Name = document.getElementById('file2Name');
let file2Value = document.getElementById('file2value');
file2Value.textContent = "Upload seconde image";
inputfile2.addEventListener('change', function(event) {
        let files = event.target.files;
        if (files.length > 0) {
            file2Value.textContent = "Upload first image";
            let uploadedFileName = files[0].name;
            file2Name.textContent = uploadedFileName;
            file2Value.textContent = "The chosen image : "
        } else {
            file2Name.textContent = "";
            file2Value.textContent = "Upload seconde image";
        }
    })
    /******************form checks *******************************************/

/***********************TCD result************************************** */
let waitDiv = document.getElementById("waitTCDresult");
let resultDiv = document.getElementById("TCDresult");
waitDiv.style.display = "none";
resultDiv.style.display = "none";
document.getElementById("myImg").src = "#";