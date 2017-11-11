'use strict';

var app = {
    title: 'My inDecision App',
    subtitle: 'The Best App Eva',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    e.persist();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    appRender();
};

var removeAll = function removeAll() {
    app.options = [];
    appRender();
};

var appRoot = document.getElementById('app');

var appRender = function appRender() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { className: 'mt-4' },
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { className: 'btn btn-dark', onClick: removeAll },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { className: 'form-inline', onSubmit: onFormSubmit },
            React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement('input', { className: 'form-control', type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    { className: 'btn btn-dark' },
                    'Add Option'
                )
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

appRender();
