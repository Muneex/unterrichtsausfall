function save() {
    var lehrer = $('#lehrer').val();
    if (lehrer == '') {
        alert('Bitte Lehrer Name eingeben');
        return;
    }
    var fach = $('#fach').val();
    if (fach == 'Bitte auswählen') {
        alert('Bitte Fach auswählen');
        return;
    }
    var klasse = $('#klasse').val();
    if (klasse == 'Bitte auswählen') {
        alert('Bitte Klasse auswählen');
        return;
    }
    var datum = $('#datum').val();
    if (datum == '') {
        alert('Bitte Datum auswählen');
        return;
    }
    var uhrzeit = $('#uhrzeit').val();
    if (uhrzeit == 'Bitte auswählen') {
        alert('Bitte eine Uhrzeit auswählen');
        return;
    }
    var vertretung = $('#vertretung').val();
    if (vertretung == '') {
        alert('Bitte Namen der Vertretung auswählen');
        return;
    }
    var ausfallDaten = {
        'lehrer': lehrer, 'klasse': klasse, 'datum': datum, 'uhrzeit': uhrzeit, 'vertretung': vertretung, 'fach': fach
    };
    var json = localStorage.getItem('liste');
    var liste = json == null ? [] : JSON.parse(json);
    liste.push(ausfallDaten);
    localStorage.setItem('liste', JSON.stringify(liste));
    anzeige();
}
function anzeige() {
    $('#daten *').remove();
    var json = localStorage.getItem('liste');
    var liste = json == null ? [] : JSON.parse(json);
    liste.forEach(function (ausfall) {
        var lehrerElement = $('<td />').text(ausfall.lehrer);
        var fachElement = $('<td />').text(ausfall.fach);
        var klasseElement = $('<td />').text(ausfall.klasse);
        var datumElement = $('<td />').text(ausfall.datum);
        var uhrzeitElement = $('<td/>').text(ausfall.uhrzeit);
        var vertretungElement = $('<td/>').text(ausfall.vertretung);
        var containerElement = $('<tr/>');
        containerElement.append(lehrerElement);
        containerElement.append(fachElement);
        containerElement.append(klasseElement);
        containerElement.append(datumElement);
        containerElement.append(uhrzeitElement);
        containerElement.append(vertretungElement);
        $('#daten').append(containerElement);


    });

}

$('button.save').on('click', save);
$('button.delete').on('click', function () {
    localStorage.clear();
    anzeige();

});
$('#ausfall').on('change', function (event) {
    if ($('#vertretungContainer').hasClass('hidden')) {
        $('#vertretungContainer').removeClass('hidden');
        $('#vertretung').val('');

    }
    else {
        $('#vertretung').val('f.a.');
        $('#vertretungContainer').addClass('hidden');


    }


});
$('#datum').datepicker({
    language: 'de'
});
$(function () {
    anzeige();

});

