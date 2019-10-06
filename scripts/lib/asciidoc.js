'use strict'

const asciidoctor = require('asciidoctor.js')();
const path = require('path');

const opts = {
    safe: 'safe',
    attributes: {
        doctype: 'article',
        showtitle: false,
        icons: 'font',
        idprefix: '',
        idseparator: '-',
        sectids: false,
        'source-highlighter': 'highlight.js',
        'listing-caption': 'Listing'
    }
};

function render(data) {
    return asciidoctor.convert(data.text, opts);
}

module.exports = render;