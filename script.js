$(document).ready(function () {
    $.getJSON('./listings.json', function (json) {
        $.each(json, function (i, item) {
            var tr = $('<tr/>');
            tr.append("<td><img src=\"./icons/" + item.titleid + ".png\" width=\"64px\" /></td>");
            tr.append("<td>" + item.title + "</td>");
            tr.append("<td>" + item.titleid + "</td>");
            tr.append("<td>" + item.author + "</td>");
            tr.append("<td>" + item.platform + "</td>");
            if (item.externaldl) tr.append("<td><a href=\"" + item.download + "\">External</a></td>");
            $('table').append(tr);
        });
    }).fail(function (jqxhr, textStatus, error) {
        console.error('Error loading JSON:', textStatus, error);
    });
});