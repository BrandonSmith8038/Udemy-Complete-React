"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InDecisionApp = function (_React$Component) {
    _inherits(InDecisionApp, _React$Component);

    function InDecisionApp() {
        _classCallCheck(this, InDecisionApp);

        return _possibleConstructorReturn(this, (InDecisionApp.__proto__ || Object.getPrototypeOf(InDecisionApp)).apply(this, arguments));
    }

    _createClass(InDecisionApp, [{
        key: "render",
        value: function render() {
            var title = "inDecision App";
            var subtitle = "Put your life in the hands of a computer!";
            var options = ['Thing 1', 'Thing 2', 'Thing 34', 'Thing 4'];

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return InDecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "text-center mb-3" },
                React.createElement(
                    "h1",
                    { className: "mt-5" },
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            alert('handlePick');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "mb-3" },
                React.createElement(
                    "button",
                    { className: "d-block mx-auto btn btn-dark", onClick: this.handlePick },
                    "What Should I Do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "handleRemove",
        value: function handleRemove() {
            alert('Handle Remove');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "mb-3" },
                React.createElement(
                    "button",
                    { onClick: this.handleRemove, className: "btn btn-dark" },
                    "Remove All Options"
                ),
                React.createElement(
                    "ul",
                    { className: "text-center list-group" },
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { key: option, optionText: option });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                { className: "list-group-item" },
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            e.persist();

            var option = e.target.elements.option.value.trim();

            if (option) {
                //InDecisionApp.options.push(option)
                e.target.elements.option.value = '';
                console.log(option);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { className: "form-inline float-right mt-2", onSubmit: this.handleAddOption },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("input", { className: "form-control", type: "text", name: "option" }),
                        React.createElement(
                            "button",
                            { className: "btn btn-dark" },
                            "Add Option"
                        )
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(InDecisionApp, null), document.getElementById('app'));
