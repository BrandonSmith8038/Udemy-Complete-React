'use strict';

var app = {
    title: 'Visibility Toggle',
    details: '',
    showHide: 'Show Details'
};

var showHideDetails = function showHideDetails() {
    app.details ? app.details = '' : app.details = 'These are the details';
    app.details ? app.showHide = 'Hide Details' : app.showHide = 'Show Details';

    appRender();
};

var appRender = function appRender() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { className: 'btn btn-primary', onClick: showHideDetails },
            app.showHide
        ),
        React.createElement(
            'p',
            { className: 'mt-5' },
            app.details
        )
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};

appRender();
