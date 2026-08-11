$(document).ready(function () {
    var json = [
        {
            "icon": "Placeholder",
            "title": "Test app",
            "titleid": "TEST78900",
            "author": "Some author",
            "platform": "PS Vita",
            "download": "None"
        }
    ];
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