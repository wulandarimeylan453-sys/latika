document.addEventListener('DOMContentLoaded', () => {
    const btnHitung = document.getElementById('btn-hitungs');
    
    btnHitung.addEventListener('click', konversiSuhu);

    document.getElementById('nilai').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            konversiSuhu();
        }
    });
});

function konversiSuhu() {
    const nilaiInput = document.getElementById('nilai').value;
    const satuan = document.getElementById('satuan').value;
    const resultBox = document.getElementById('result-box');
    const statusBadge = document.getElementById('status-badge');
    const tempIcon = document.getElementById('temp-icon');

    if (nilaiInput === '' || isNaN(nilaiInput)) {
        alert('Harap masukkan angka suhu yang valid!');
        return;
    }

    const nilai = parseFloat(nilaiInput);
    let c = 0;

    switch (satuan) {
        case 'C': c = nilai; break;
        case 'F': c = (nilai - 32) * 5 / 9; break;
        case 'R': c = nilai * 5 / 4; break;
        case 'K': c = nilai - 273.15; break;
    }

    const f = (c * 9 / 5) + 32;
    const r = c * 4 / 5;
    const k = c + 273.15;

    document.getElementById('res-c').innerText = `${c.toFixed(2)} °C`;
    document.getElementById('res-f').innerText = `${f.toFixed(2)} °F`;
    document.getElementById('res-r').innerText = `${r.toFixed(2)} °R`;
    document.getElementById('res-k').innerText = `${k.toFixed(2)} K`;

    if (c <= 0) {
        statusBadge.innerText = '❄️ Sangat Dingin / Beku';
        statusBadge.style.backgroundColor = '#0072ff';
        tempIcon.innerText = '🥶';
    } else if (c > 0 && c <= 20) {
        statusBadge.innerText = '🍃 Sejuk / Dingin';
        statusBadge.style.backgroundColor = '#17a2b8';
        tempIcon.innerText = '🌡️';
    } else if (c > 20 && c <= 35) {
        statusBadge.innerText = '☀️ Hangat / Normal';
        statusBadge.style.backgroundColor = '#fd7e14';
        tempIcon.innerText = '🌤️';
    } else {
        statusBadge.innerText = '🔥 Panas';
        statusBadge.style.backgroundColor = '#dc3545';
        tempIcon.innerText = '🥵';
    }

    resultBox.style.display = 'block';
}
