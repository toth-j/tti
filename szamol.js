function szamol() {
    let m = document.getElementById("magassag").value / 100;
    let kg = +document.getElementById("tomeg").value;
    
    if (m < 0.6 || m > 2.2 || kg < 20 || kg > 200) {
        document.getElementById("kiiras").innerHTML = "Hibás adatok!";
        return;
    }

    let tti = kg / (m*m);
    let alkat = "";
    if (tti < 20)       { alkat = "alultáplált"; }
    else if ( tti < 25) { alkat = "normális"; }
    else if ( tti < 30) { alkat = "túlsúlyos"; }
    else if ( tti < 35) { alkat = "elhízott"; }
    else                { alkat = "erősen elhízott"; }
    
    document.getElementById("kiiras").innerHTML = tti.toFixed(2) + "<br>" +alkat;
}
szamol();
document.getElementById("gomb").onclick = szamol;