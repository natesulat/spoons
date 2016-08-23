$(function() {
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


    dealCards();


    $('#card-container').on('click', '> div', function(e) {
        e.preventDefault();
        $(this).remove();
        dealCards();
    });

    // Card dealing handled. To do: Figure out dynamically generating SVGs, and then figure out passing of cards


    $('body').removeAttr('style');

    function logger(arr) {
        arr.forEach(function(i) {
            console.log(i);
        });
    };

    function dealCards() {
        while ($('#card-container > div').length < 4 && deck.length > 0) {
            var deal = deck.shift();
            deal = Mustache.render('<div class="col-sm-3 col-xs-6"><p>This should be {{number}}{{suit}}.svg</p></div>', deal);
            console.log(deal);
            $('#card-container').prepend(deal);
        }
    }
});
