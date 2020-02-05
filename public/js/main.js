function renderTable(name) {
    $("#table-body").empty();
    $("#table-head").empty();
    var link = name + '.json';
    $.getJSON(link, function (jd) {
        var keys = Object.keys(jd[0]);
        for(let i in keys){
            $("#table-head").append('<th scope="col">' + keys[i] + '</th>');
        }
        for(let i in jd){
            $("#table-body").append('<tr>');
            for(let j in jd[i]){
                $("#table-body").append('<td>' + jd[i][j] + '</td>');
            }
            $("#table-body").append('</tr>');
        }
    });
}
