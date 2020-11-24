window.onload = function () {
    let data = {cod_prov: 38,cod_muni: 38028}
    var rawFile
    function loadFile(file) {
        rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status === 200) {
                reader(JSON.parse(rawFile.responseText))
            }

        }
        rawFile.send(null);
    }

    function reader(json) {
        document.getElementById("ciudad").innerHTML = json.municipio.NOMBRE;
        document.getElementById("estado").innerHTML = json.municipio;
    }

    loadFile("https://www.el-tiempo.net/api/json/v2/provincias/"+data.cod_prov+"/municipios/"+data.cod_muni);

}

