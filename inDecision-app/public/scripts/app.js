'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'My inDecision App',
    subtitle: 'The Best App Eva',
    options: ['Option One', 'Option Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        ),
        React.createElement(
            'li',
            null,
            'Item Three'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('Add One');
};

var minusOne = function minusOne() {
    console.log('Minus One');
};

var reset = function reset() {
    console.log('Reset');
};
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    )
);
console.log(template2);
ReactDOM.render(template2, appRoot);
