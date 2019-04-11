"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      top: 5,
      left: 5,
      speed: 10
    };
    _this.arrowsHandler = _this.arrowsHandler.bind(_assertThisInitialized(_this));
    _this.rangeHandler = _this.rangeHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "arrowsHandler",
    value: function arrowsHandler(e) {
      var _this2 = this;

      switch (e.keyCode) {
        case arrowLeft:
          if (this.state.left > 5) {
            this.setState(function (prevState) {
              return {
                left: prevState.left - _this2.state.speed
              };
            });
          } else {
            this.setState(function (prevState) {
              return {
                left: 5
              };
            });
          }

          break;

        case arrowUp:
          if (this.state.top > 5) {
            this.setState(function (prevState) {
              return {
                top: prevState.top - _this2.state.speed
              };
            });
          } else {
            this.setState(function (prevState) {
              return {
                top: 5
              };
            });
          }

          break;

        case arrowDown:
          if (this.state.top < 435) {
            this.setState(function (prevState) {
              return {
                top: prevState.top + _this2.state.speed
              };
            });
          } else {
            this.setState(function (prevState) {
              return {
                top: 435
              };
            });
          }

          break;

        case arrowRight:
          if (this.state.left < 435) {
            this.setState(function (prevState) {
              return {
                left: prevState.left + _this2.state.speed
              };
            });
          } else {
            this.setState(function (prevState) {
              return {
                left: 435
              };
            });
          }

          break;

        default:
          alert("Use arrows!");
      }
    }
  }, {
    key: "rangeHandler",
    value: function rangeHandler(e) {
      var speedNumber = parseInt(e.target.value);
      this.setState({
        speed: speedNumber
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.arrowsHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", null, React.createElement("h1", null, "Move React with the Arrow Keys"), React.createElement("div", {
        className: "field"
      }, React.createElement("div", {
        className: "react",
        style: {
          top: this.state.top,
          left: this.state.left
        }
      })), React.createElement(ControlSpeed, {
        speed: this.state.speed,
        change: function change(e) {
          return _this3.rangeHandler(e);
        }
      }));
    }
  }]);

  return App;
}(React.Component);

var ControlSpeed = function ControlSpeed(props) {
  return React.createElement("div", {
    className: "control-speed"
  }, React.createElement("h4", null, "Control Movement Speed"), React.createElement("input", {
    type: "range",
    min: "1",
    max: "50",
    onChange: props.change,
    value: props.speed,
    className: "slider"
  }));
};

var arrowLeft = 37;
var arrowUp = 38;
var arrowDown = 40;
var arrowRight = 39;
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
