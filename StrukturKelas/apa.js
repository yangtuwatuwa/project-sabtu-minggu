    function isiVariabel() {
    var inputText = document.getElementById('inputText').value;

    document.getElementById('hasil').innerText = "hai"+" "+ inputText ;

    var textElement = document.getElementById('hasil2');
    

            if (textElement.style.display === 'block') 
            {
                textElement.style.display = 'none';
                
            } else {
                textElement.style.display = 'block';
                
            }
            
}
function PJMAPEL() {
    var text = document.getElementById("pjmapel");
    if (text.style.display === "none")
        {
        text.style.display = "block"
    } else {
        text.style.display ="none"
    }
}

function fotosiswa(){
    var foto = document.getElementById("fotoDoangBg")

    if(foto.style.display === "none")
    {
        foto.style.display ="block"
    } else {
        foto.style.display ="none"
    }
}

function side() {
    var siide = document.getElementById("SideBar")

    if(siide.style.display === "none")
    {
        siide.style.display ="block"
    } else {
        siide.style.display ="none"
    }
}