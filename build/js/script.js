let inputfile = document.getElementById('files-input');
let fileName = document.getElementById('filesName');
let fileValue = document.getElementById('filesvalue');
let validate = document.getElementById('validation');
let button = document.getElementById('btn_submit');
fileValue.textContent = "Upload two images here";


/*********form validation  ***********************/
inputfile.addEventListener("change", handleFiles, false);


function handleFiles() {
    console.log(inputfile.files[0]);
    var files = inputfile.files;
    var file1 = files[0];
    var file2 = files[1];
    if (files.length != 2) {
        notValid();
    } else {
        if (validateFile(file1.name, file2.name)) {
            valid(file1.name, file2.name);
        } else {

            notValid();
        }
    }
}


function validateFile(uploadedFile1Name, uploadedFile2Name) {
    let allowedExtensions = ['jpg', 'png']
    const file1Extension = uploadedFile1Name.split(".").pop();
    const file2Extension = uploadedFile2Name.split(".").pop();
    if ((!allowedExtensions.includes(file1Extension)) ||
        (!allowedExtensions.includes(file2Extension))) {
        return false;
    } else return true;

}

function notValid() {
    //clear form 
    fileName.textContent = "";
    fileValue.textContent = "Upload two images here";

    //disable button
    button.disabled = true;
    //add red color to the validation massage
    if (!validate.classList.contains('fNotValid')) {
        validate.classList.add("fNotValid");
    }
}

function valid(uploadedFile1Name, uploadedFile2Name) {
    fileName.textContent = uploadedFile1Name + " , " + uploadedFile2Name;
    fileValue.textContent = "The chosen image : ";
    button.disabled = false;
    if (validate.classList.contains('fNotValid')) {
        validate.classList.remove("fNotValid");
    }
}


/*****function for dely */
var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
    //your code to be executed after 1 second
}, delayInMilliseconds);
/***************** */
/**** loading page ****/
let resultDiv = document.getElementById("TCDresult");
resultDiv.style.display = "none";
let waitDiv = document.getElementById("waitTCDresult");
waitDiv.style.display = "none";
var form = document.getElementById('TCDform');

form.addEventListener('submit', Submit);
let img = document.getElementById("TCD_img");

function Submit(event) {
    waitDiv.style.display = "block";
    img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"

    img.addEventListener('load', (event) => {
        console.log('The logo has been loaded');
        resultDiv.style.display = "block";
        waitDiv.style.display = "none";

        //clear form 
        fileName.textContent = "";
        fileValue.textContent = "Upload two images here";

        //disable button
        button.disabled = true;

    })

}



/***********************TCD result************************************** */