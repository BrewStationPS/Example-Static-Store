$(document).ready(function () {
    const response = await fetch('./listings.json');
    const json = await response.json();

    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i].icon + "</td>");
        tr.append("<td>" + json[i].title + "</td>");
        tr.append("<td>" + json[i].titleid + "</td>");
        tr.append("<td>" + json[i].author + "</td>");
        tr.append("<td>" + json[i].platform + "</td>");
        tr.append("<td>" + json[i].download + "</td>");
        $('table').append(tr);
    }
});