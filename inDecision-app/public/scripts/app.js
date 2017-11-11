'use strict';

var app = {
    title: 'My inDecision App',
    subtitle: 'Put your life in the hands of a computer',
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

var numbers = [55, 101, 1000];

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
            { className: 'btn btn-dark mb-5', onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            { className: 'list-group' },
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { className: 'list-group-item', key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { className: 'form-inline mt-2', onSubmit: onFormSubmit },
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
