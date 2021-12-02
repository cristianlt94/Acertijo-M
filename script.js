function resultado() {
    var p1, dueno;
     
    // <!-- 1ª pregunta -->
    if (document.getElementById('p13').checked==true) {
        p1="ALEMÁN"
        // alert("EL DUEÑO DEL PEZ ES EL ALEMÁN")+
        window.open('https://cristianlt94.github.io/RegaloMario/', 'regalomisterioso');
    }
    else {p1="NO ES CORRECTO"}
     
    dueno=p1;
    alert (' EL DUEÑO DEL PEZ ' + p1)
    location.reload();
}