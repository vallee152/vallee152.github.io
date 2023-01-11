const isletter = new RegExp('[A-Za-z]');

function translator(source) {
    // space is added on end to prevent an error from happening that IDK how else to fix
    var translation = document.getElementById('translationbox').value + " ";
    var returnedarray = [];
    var position = 0;

    // translate
    while (position < translation.length) {
        if (isletter.test(translation[position])) {
            returnedarray = replaceword(translation, position, source);
            translation = returnedarray[0];
            position += returnedarray[1];
        }
        position++;
    }
    document.getElementById('translationbox').value = translation.slice(0,translation.length - 1);
}

function replaceword(translation, position, source) {
    var word;
    var length = 0;
    var newword;

    while (isletter.test(translation[position + length])) {
        length++;
    }

    word = translation.substring(position,position + length);
    newword = ante.search(word, source);
    translation = translation.slice(0, position) + newword + translation.slice(position + length);
    return [translation, newword.length];
}