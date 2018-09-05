import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

$(function () {
    $("#searchBtn").click(function () {
        $.get('/api/search/' + $('#searchString').val(), function (data) {              
            $.each(data.StopLocation, function (index, stops, id) {
                $('#outputUl').append('<li class="liid" id=' + stops.id + '>' + 'hållplats: ' + stops.name + '</li>');
                $("li").hover(function(){
                    $(this).css("background-color", "gray");
                    }, function(){
                    $(this).css("background-color", "white");
                });                
            });            
        });
    });

    $(".liid").hover(function () {
        $(this).toggleClass('hover');
        alert('hover');
    });

    
});