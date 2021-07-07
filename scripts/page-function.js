
//Exibição do PDF de ID VISUAL

function openPDF(doc) {

    var pdf = doc.getAttribute('data-pdf');

    document.getElementById('overlay').style.display = 'block';
    document.getElementById('inset').innerHTML = "<iframe name='mr dash' src='"+pdf+"'></iframe>";
};

function closePDF(){
    document.getElementById('overlay').style.display = 'none';
};


// Exibição das ILUSTRAÇÕES

function openIMG(illustration) {

    var bigimg = illustration.getAttribute('data-img');

    document.getElementById('imgbg').style.display = 'flex';
    document.getElementById('exhibit').innerHTML = "<img src='"+bigimg+"'/>";
};

function closeIMG() {
    document.getElementById('imgbg').style.display = 'none';
};


