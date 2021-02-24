var save=document.getElementById('mybtn');
var text=document.getElementById('mytext');
console.log(save,'`');
save.addEventListener('click',saveData);
// console.log(document.getElementById('mytext').innerHTML,'~')

function saveData(){
    var userinput=document.getElementById('mytext')
    console.log(userinput.value,'user')
    let data=userinput.value;
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.
    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}


