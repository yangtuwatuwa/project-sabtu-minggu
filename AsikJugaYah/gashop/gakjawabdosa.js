
function TeksBox () {
    alert("di alihakn ke web selanjutnya")
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x === "") {
        alert("Nama harus diisi");
        return false;
    }
    // Add other validation rules here if needed
    alert("transaksi sukses")
    return true;
}
