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

    $('#card-container').css('height', $(window).height() / 1.5);


    $('#start').click(dealCards);


    $('#card-container').on('click', '> div', function (e) {
        e.preventDefault();
        $(this).remove();
        dealCards();
    });

    // Card dealing handled. To do:
        // #card-container height resize function
        // Create spoons loop
        // Configure database communication/card passing
        // Figure out player objects


    $('body').removeAttr('style');

    function logger(arr) {
        arr.forEach(function (i) {
            console.log(i);
        });
    };

    function dealCards(eq) {
        while ($('#card-container > div').length < 4 && deck.length > 0) {
            var deal = deck.shift();
            var template = Handlebars.compile($('#card-template').html())
            deal = template(deal);
            $('#card-container').append(deal);
        }
    }
});