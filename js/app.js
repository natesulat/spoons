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
            q === 0 ? q = 'H' : q === 1 ? q = 'D' : q === 2 ? q = 'C' : q = 'S';
            if (t > 10) {
                t === 11 ? t = 'J' : t === 12 ? t = 'Q' : t === 13 ? t = 'K' : t = 'A';
            }
            var newCard = new Card(t, q);
            deck.push(newCard);
        }
    };

    deck = _.shuffle(deck);
    
    var check = [deck[0], deck, deck.length];

    logger(check);

    $('#card-container').css('height', $(window).height());

    
    // THE LOOP CONTINUES BEYOND THOSE FOUR CARDS, SO YOU'RE CALLING AN EMPTY DECK LATER
    while (deck.length > 0) {
        var deal = deck.shift();
        console.log(deck.length)
        if ($('#card-container > div').length < 4) {
            deal = Mustache.render('<div class="col-sm-3 col-xs-6"><p>This should be {{number}}{{suit}}.svg</p></div>', deal);
            console.log(deal);
            $('#card-container').prepend(deal);
        }
    }

    $('#card-container').on('click', '> div', function (e) {
        e.preventDefault();
        $(this).remove();
        console.log(deck.shift());
    });


    $('body').removeAttr('style');

    function logger(arr) {
        arr.forEach(function (i) {
            console.log(i);
        });
    };
});