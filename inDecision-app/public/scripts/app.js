'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InDecisionApp = function (_React$Component) {
    _inherits(InDecisionApp, _React$Component);

    function InDecisionApp(props) {
        _classCallCheck(this, InDecisionApp);

        var _this = _possibleConstructorReturn(this, (InDecisionApp.__proto__ || Object.getPrototypeOf(InDecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);

        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(InDecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var selectedOption = this.state.options[randomNum];

            alert(selectedOption);
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = "Put your life in the hands of a computer!";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    subtitle: subtitle
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return InDecisionApp;
}(React.Component);

InDecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        { className: 'text-center mb-3' },
        React.createElement(
            'h1',
            { className: 'mt-5' },
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'inDecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        { className: 'mb-3' },
        React.createElement(
            'button',
            {
                className: 'd-block mx-auto btn btn-dark',
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What Should I Do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        { className: 'mb-3' },
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions, className: 'btn btn-dark' },
            'Remove All Options'
        ),
        React.createElement(
            'ul',
            { className: 'text-center list-group' },
            props.options.map(function (option) {
                return React.createElement(Option, { key: option, optionText: option });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'li',
        { className: 'list-group-item' },
        props.optionText
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            e.persist();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });

            // this.props.handleAddOption(option)
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    { className: 'alert alert-danger' },
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { className: 'form-inline float-right mt-2', onSubmit: this.handleAddOption },
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
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(InDecisionApp, null), document.getElementById('app'));
