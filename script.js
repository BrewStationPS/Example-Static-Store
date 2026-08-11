$(document).ready(function () {
    $.getJSON('./listings.json', function (json) {
        $.each(json, function (i, item) {
            var tr = $('<tr/>');
            tr.append("<td>" + item.icon + "</td>");
            tr.append("<td>" + item.title + "</td>");
            tr.append("<td>" + item.titleid + "</td>");
            tr.append("<td>" + item.author + "</td>");
            tr.append("<td>" + item.platform + "</td>");
            tr.append("<td>" + item.download + "</td>");
            $('table').append(tr);
        });
    }).fail(function (jqxhr, textStatus, error) {
        console.error('Error loading JSON:', textStatus, error);
    });
});