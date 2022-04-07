$(document).ready(function(){
    $.getJSON("demos.json", function(data){
        for (var i = 0; i < data.demos.length; i++) {
            var item = $('<div class="game"><img src="./img/covers/' 
                + data.demos[i].gameID + 
                '.png"><h3>' 
                + data.demos[i].gameName + 
                '</h3></div>');
            $('.demo-list').append(item);
            $(item).click(function(){
                var gamenameurl = data.demos[$(this).index()].gameName.replace(/ |'/g,"").toLowerCase();
                $('.demo-block').show().html('<div class="close">྾</div><iframe src="https://play.8provider.com/game/fullstate/html5/evoplay/' + gamenameurl + '/?project=5725&user_id=30657361&demo=0&wid=1&s=1cda4af0d48d52628d443e3c268a3ba0"/>');
                $('.demo-block .close').click(function(){
                    $('.demo-block').hide().html('');
                });
            });
        }
    }).fail(function(){
        console.log("ERROR");
    });
});