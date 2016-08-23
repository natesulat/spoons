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

    $('#card-container').css('height', $(window).height());

    while (deck.length > 0) {
        if ($('.card').length < 4) {
            var deal = Mustache.render('<div class="col-sm-3 col-xs-6"><svg src="img/{{number}}{{suit}}.svg></svg></div>', deck.shift());
            $('#card-container').append(deal);
        }
    }

    $('#card-container').on('click', '.card', function (e) {
        e.preventDefault();
        $(this).remove();
        $('#card-container').append(template(deck.shift()));
    });

    var check = [deck[0], deck, deck.length];

    logger(check);

    while (deck.length > 0) {
        deck.shift();
        console.log(deck[0]);
    }
    //    while (deck.length > 0) {
    //        logger(check);
    //    }

    $('body').removeAttr('style');

    function logger(arr) {
        arr.forEach(function (i) {
            console.log(i);
        });
    };
});