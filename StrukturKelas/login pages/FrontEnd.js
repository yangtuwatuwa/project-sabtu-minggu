let NamaKelas1 = ["adhiaksa","afifah","ahmad","al-ayubi","alfin","andhika","azka"];
let NamaKelas2 = ["bagus", "chealsea","daffa","dewangga","eza","fahri","galang"];
let NamaKelas3 = ["hafiz","hanami","jevon","keysa","sehan","maxalmina","afgan","dika"];
let NamaKelas4 = ["fauzan","raihaan","sadewa","panggalih","rafael","rafi","rayhan"];
let NamaKelas5 = ["reno","rizky","sakha","silvester","wildan","safira"];

function checkInput() {
    var checkNama = document.getElementById("input").value;
    let hasil ="";

    if (NamaKelas1.includes(checkNama)) {
        hasil = checkNama +" "+"nama anda terdaftar";
    } else if (NamaKelas2.includes(checkNama)) {
        hasil = checkNama +" "+"nama anda terdaftar";
    } else if (NamaKelas3.includes(checkNama)) {
        hasil = checkNama +" "+"nama anda terdaftar";
    } else if (NamaKelas4.includes(checkNama)) {
        hasil = checkNama +" "+"nama anda terdaftar";
    } else if (NamaKelas5.includes(checkNama)) {
        hasil = checkNama +" "+"nama anda terdaftar";
    } else {
        hasil = "nama anda tidak terdaftar";
    }

    document.getElementById("hasil").innerText = hasil;
}

