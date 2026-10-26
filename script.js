function konversi() {
    let nilaiInput = document.getElementById('nilai').value;
    let satuan = document.getElementById('satuan').value;

    if (nilaiInput === "" || isNaN(nilaiInput)) {
        alert("Harap masukkan angka suhu yang valid!");
        return;
    }

    let nilai = parseFloat(nilaiInput);
    let c = 0;

    // Konversi ke Celsius sebagai basis
    if (satuan === 'C') c = nilai;
    else if (satuan === 'F') c = (nilai - 32) * 5/9;
    else if (satuan === 'R') c = nilai * 5/4;
    else if (satuan === 'K') c = nilai - 273.15;

    // Hitung ke satuan lainnya
    let r = c * 4/5;
    let f = (c * 9/5) + 32;
    let k = c + 273.15;

    // Tampilkan hasil ke elemen HTML
    document.getElementById('res-c').innerText = `Celsius: ${c.toFixed(2)} °C`;
    document.getElementById('res-r').innerText = `Reamur: ${r.toFixed(2)} °R`;
    document.getElementById('res-f').innerText = `Fahrenheit: ${f.toFixed(2)} °F`;
    document.getElementById('res-k').innerText = `Kelvin: ${k.toFixed(2)} K`;

    // Munculkan kotak hasil
    document.getElementById('hasil').style.display = 'block';
}
