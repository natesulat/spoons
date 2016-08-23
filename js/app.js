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
                t === 11 ? t = 'j' : t === 12 ? t = 'q' : t === 13 ? t = 'k' : t = 'a';
            }
            var newCard = new Card(t, q);
            deck.push(newCard);
        }
    };

    deck = _.shuffle(deck);

    $('#card-container').css('height', $(window).height());

    var template = Handlebars.compile($('#card-template').html());

    while (deck.length > 0) {
        if ($('.card').length < 4) {
            var template = Handlebars.compile($('#card-template').html());
            if ($('#card-container card').length <= 4) {
                $('#card-container').append(template(deck.shift()));
            }
        }
        deck.shift();
        console.log(deck[0]);
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