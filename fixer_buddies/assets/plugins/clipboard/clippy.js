/**
 *
 * Helper script to manage a button on clipboard.js (https://clipboardjs.com/)
 * code blocks.
 *
 * TODO: Display tooltip on error instead of putting text in button
 *
 **/

function generate_random_string(string_length) {

    // If string length is not defined, by default we set it's value as 21
    if (typeof (string_length) == 'undefined') {

        string_length = 21;

    }

    // Initialize random string
    var random_string = "";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Create a for loop
    for (var i = 0; i < string_length; i++) {

        random_string += charset.charAt(Math.floor(Math.random() * charset.length));

    }

    return random_string;

}

// Call The Function to generate a random string of 30 characters in length

function copy_trigger($unique_class) {

    var clipboard = new Clipboard('.' + $unique_class);

    clipboard.on('success', function (e) {

        var img = '<img class="clippy" src="assets/images/clippy.svg" alt="Copy to clipboard">';
//    console.error('Action:', e.action);
//    console.error('Trigger:', e.trigger);

        e.trigger.blur();
        e.trigger.innerHTML = '<span class="success-check">&#x2714;</span>';
        window.setTimeout(function () {
            e.trigger.innerHTML = img;
        }, 1500);

        e.clearSelection();

    });

}

$(function () {

    $(document).find('pre').each(function () {

        var $unique_id = generate_random_string(15);
        var $unique_class = $unique_id;
        var $this = $(this);

        $this.attr('id', $unique_id);

        var $text = '<span class="clip-btn-container text-right d-none">' +
                '<button class="btn-copy btn-gradient btn ' + $unique_class + '" data-clipboard-target="#' + $unique_id + '" data-unique-class="' + $unique_class + '" aria-label="Copy">' +
                '<img src="assets/images/clippy.svg" class="clippy" aria-hidden="true">' +
                '</button>' +
                '</span>';

        $this.before($text);


    });

    setTimeout(function () {
        $('.clip-btn-container').removeClass('d-none');
    }, 2000);

    $(document).find('.clip-btn-container .btn-copy').on('click', function () {

        copy_trigger($(this).attr('data-unique-class'));
    })

});