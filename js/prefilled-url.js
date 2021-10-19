/**
 * Will generate a prefilled link with all parameters
 * TODO  create a qr code for future
 */

function generatePreFilledLink(){
    reloadContextURL(generateParameters());
}
function generateParameters(){
    const urlParam = new URLSearchParams(window.location.search);

    var name = document.getElementById("participantName").value;
    var dob = document.getElementById("participantDob").value;

    var dataArray = [
        document.getElementById("ProTra").value,
        document.getElementById("SecRel").value,
        document.getElementById("MulAss").value,
        document.getElementById("PacMil").value,
        document.getElementById("DemAut").value,
        document.getElementById("LibSec").value,
        document.getElementById("RehPun").value,
        document.getElementById("IntNat").value
    ]
    
    urlParam.set('name', name);
    urlParam.set('DOB', dob);
    urlParam.set('dataArray', dataArray);
    return urlParam;
}

function reloadContextURL(urlParam){
    window.location.search = urlParam;

}

function FillPreFilledLink() {
    const urlParam = new URLSearchParams(window.location.search);
    document.getElementById("participantName").value = urlParam.get('name');
    document.getElementById("participantDob").value =urlParam.get('DOB');
    var dataArrayNew= urlParam.get('dataArray').split(',');
    document.getElementById("ProTra").value=dataArrayNew[0];
    document.getElementById("SecRel").value=dataArrayNew[1];
    document.getElementById("MulAss").value=dataArrayNew[2];
    document.getElementById("PacMil").value=dataArrayNew[3];
    document.getElementById("DemAut").value=dataArrayNew[4];
    document.getElementById("LibSec").value=dataArrayNew[5];
    document.getElementById("RehPun").value=dataArrayNew[6];
    document.getElementById("IntNat").value=dataArrayNew[7];
    console.log(dataArray)
    var dataArray =urlParam.get('name');

    getDataArary();

}

function generateQRcode() {
    var urlParams = "";
    urlParams = generateParameters();
    var urlFull = window.location +'?'  +urlParams.toString(); 
    console.log(window.location +'?'  +urlParams.toString());
    var qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlFull}`;
    document.getElementById("modalQrImg").src=qrURL;
}