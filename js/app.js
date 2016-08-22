$(function () {
    function Card(number, suit) {
        this.number = number;
        this.suit = suit;
    };
    var deck = [];
    for (i = 2; i < 15; i++) {
        var t = i;
        for (j = 0; j < 4; j++) {
            var q = j;
            q === 0 ? q = 'hearts' : q === 1 ? q = 'diamonds' : q === 2 ? q = 'clubs' : q = 'spades';
            if (t > 10) {
                t === 11 ? t = 'jack' : t === 12 ? t = 'queen' : t === 13 ? t = 'king' : t = 'ace';
            }
            var newCard = new Card(t, q);
            deck.push(newCard);
        }
    };
    
    deck = _.shuffle(deck);
    
    $('#card-container').css('height', $(window).height());
//    deck.forEach(function(i) {
//        var item = $('<li></li').text(i.number + ' of ' + i.suit);
//        $('#test').append(item);
//    });
    
    $('button').click(function)
    
    while (deck.length > 0 || $('.card').length === 4) {
        var deal = deck.shift();
        var template = Handlebars.compile($('#card-template').html());
        if ($('#card-container card').length <= 4) {
            $('#card-container').append(template(deal));
        }
    }
    
    var check = [deck, deck.length];
    logger(check);
    
    $('body').removeAttr('style');


    function logger(arr) {
        arr.forEach(function (i) {
            console.log(i);
        });
    };
});