import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

$(function () {
    $("#searchBtn").click(function () {
        $.get('/api/search/' + $('#searchString').val(), function (data) {
            alert(data.StopLocation);
            $.each(data.StopLocation, function (index, stops, id) {
                $('#outputUl').append('<li class="liid" id=' + stops.id + '>' + 'hållplats: ' + stops.name + '</li>');
            })
        });
    });
});