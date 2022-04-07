$(document).ready(function(){
    var demojson = 'https://gleaming-torte-2c8957.netlify.app/demos.json';
    $.getJSON(demojson, function(data){
        for (var i = 0; i < data.demos.length; i++) {
            var item = $('<div class="game"><img src="./img/covers/' 
                + data.demos[i].gameID + 
                '.png"><h3>' 
                + data.demos[i].gameName + 
                '</h3></div>');
            $('.demo-list').append(item);
            $(item).click(function(){
                var gamenameurl = data.demos[$(this).index()].gameName.replace(/ |'/g,"").toLowerCase();
                $('.demo-block').show().html('<div class="close">྾</div><iframe src="https://play.8provider.com/game/fullstate/html5/evoplay/' + gamenameurl + '?project=5725&user_id=6843706&demo=1&wid=1&s=03beab669abe14f64d0171a60a154213"/>');
                $('.demo-block .close').click(function(){
                    $('.demo-block').hide().html('');
                });
            });
        }
    }).fail(function(){
        console.log("ERROR");
    });
});