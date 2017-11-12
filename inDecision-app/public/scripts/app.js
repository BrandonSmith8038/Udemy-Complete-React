'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddClick = _this.handleAddClick.bind(_this);
        _this.handleMinusClick = _this.handleMinusClick.bind(_this);
        _this.handleResetClick = _this.handleResetClick.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: 'handleAddClick',
        value: function handleAddClick() {
            console.log('handleAddClick');
        }
    }, {
        key: 'handleResetClick',
        value: function handleResetClick() {
            console.log('handleResetClick');
        }
    }, {
        key: 'handleMinusClick',
        value: function handleMinusClick() {
            console.log('handleMinusClick');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count:'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddClick, className: 'btn btn-dark mr-3' },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleResetClick, className: 'btn btn-dark mr-3' },
                    'Reset'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusClick, className: 'btn btn-dark mr-3' },
                    '-1'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// let count = 0
// const addOne = () => {
//     count++
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0
//     renderCounterApp();
// }


// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//         <h1>Count: {count}</h1>
//             <button className="btn btn-primary m-3" onClick={addOne}>+1</button>
//             <button className="btn btn-primary m-3" onClick={reset}>Reset</button>
//             <button className="btn btn-primary m-3" onClick={minusOne}>-1</button>
//         </div>
//     )

//     ReactDOM.render(template2, appRoot)

// }

// renderCounterApp();
