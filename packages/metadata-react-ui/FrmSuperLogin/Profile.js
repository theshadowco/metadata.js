'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('material-ui/Tabs');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _DataField = require('components/metadata-react-ui/DataField');

var _DataField2 = _interopRequireDefault(_DataField);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _colors = require('material-ui/styles/colors');

var _icons = require('./assets/icons');

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _FrmSuperLogin = require('./FrmSuperLogin.scss');

var _FrmSuperLogin2 = _interopRequireDefault(_FrmSuperLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: '8px'
  },
  block: {
    //flex: '1 100%',
    fontWeight: 'bold'
  }
};

var UserObj = function (_Component) {
  _inherits(UserObj, _Component);

  function UserObj(props) {
    _classCallCheck(this, UserObj);

    var _this = _possibleConstructorReturn(this, (UserObj.__proto__ || Object.getPrototypeOf(UserObj)).call(this, props));

    _this.tabChange = function (tab_value) {
      if (tab_value === 'a' || tab_value === 'b') {
        _this.setState({
          tab_value: tab_value
        });
      }
    };

    _this.handleLogOut = function () {
      _this.props.handleLogOut();
    };

    _this.state = {
      tab_value: 'a',
      btn_login_disabled: !_this.props.login || !_this.props.password
    };
    return _this;
  }

  _createClass(UserObj, [{
    key: 'handleSave',
    value: function handleSave() {}
  }, {
    key: 'handleSend',
    value: function handleSend() {}
  }, {
    key: 'handleMarkDeleted',
    value: function handleMarkDeleted() {}
  }, {
    key: 'handlePrint',
    value: function handlePrint() {}
  }, {
    key: 'handleAttachment',
    value: function handleAttachment() {}
  }, {
    key: 'render',
    value: function render() {
      var screen = this.context.screen;
      var _obj = this.props._obj;


      return _react2.default.createElement(
        'div',
        { className: _FrmSuperLogin2.default.paper },
        _obj ? _react2.default.createElement(
          _Paper2.default,
          { zDepth: 3, rounded: false },
          _react2.default.createElement(
            _Tabs.Tabs,
            {
              value: this.state.tab_value,
              onChange: this.tabChange
            },
            _react2.default.createElement(
              _Tabs.Tab,
              { label: '\u0424\u0438\u0437\u043B\u0438\u0446\u043E', value: 'a' },
              _react2.default.createElement(
                'div',
                { className: _FrmSuperLogin2.default.padding18 },
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'id' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'name' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'sex' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'birth_date' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'birth_place' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'category' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'inn' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'snils' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'citizenship' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: '\u0441\u0442\u0440\u041C\u0435\u0441\u0442\u043E\u0420\u0430\u0431\u043E\u0442\u044B' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: '\u0441\u0442\u0440\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: '\u0410\u0434\u0440\u0435\u0441\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: '\u0410\u0434\u0440\u0435\u0441\u0424\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'phone' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'email' }),
                _react2.default.createElement(_DataField2.default, { _obj: _obj, _fld: 'rank' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_Divider2.default, null),
                _react2.default.createElement(_RaisedButton2.default, { label: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
                  className: _FrmSuperLogin2.default.button,
                  onTouchTap: this.handleSave }),
                _react2.default.createElement(_RaisedButton2.default, { label: '\u0412\u044B\u0439\u0442\u0438',
                  className: _FrmSuperLogin2.default.button,
                  onTouchTap: this.handleLogOut })
              )
            ),
            _react2.default.createElement(
              _Tabs.Tab,
              { label: '\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438', value: 'b' },
              _react2.default.createElement(
                'div',
                { className: _FrmSuperLogin2.default.padding18 },
                _react2.default.createElement(
                  _Subheader2.default,
                  null,
                  '\u041F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439'
                ),
                _react2.default.createElement(_RaisedButton2.default, {
                  label: 'Google',
                  className: _FrmSuperLogin2.default.social_button,
                  labelStyle: { width: 120, textAlign: 'left', display: 'inline-block' },
                  icon: _react2.default.createElement(_icons.GoogleIcon, { viewBox: '0 0 256 262', style: { width: 18, height: 18 }, color: _colors.blue500 })
                  //onTouchTap={this.buttonTouchTap("google")}
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_RaisedButton2.default, {
                  label: '\u042F\u043D\u0434\u0435\u043A\u0441',
                  className: _FrmSuperLogin2.default.social_button,
                  labelStyle: { width: 120, textAlign: 'left', display: 'inline-block' },
                  icon: _react2.default.createElement(_icons.YandexIcon, { viewBox: '0 0 180 190', style: { width: 18, height: 18 }, color: _colors.red500 })
                  //onTouchTap={this.buttonTouchTap("yandex")}
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_RaisedButton2.default, {
                  label: 'Facebook',
                  className: _FrmSuperLogin2.default.social_button,
                  labelStyle: { width: 120, textAlign: 'left', display: 'inline-block' },
                  icon: _react2.default.createElement(_icons.FacebookIcon, { viewBox: '0 0 450 450', style: { width: 18, height: 18 }, color: '#3A559F' })
                  //onTouchTap={this.buttonTouchTap("facebook")}
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_RaisedButton2.default, {
                  label: '\u0412 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435',
                  className: _FrmSuperLogin2.default.social_button,
                  labelStyle: { width: 120, textAlign: 'left', display: 'inline-block' },
                  icon: _react2.default.createElement(_icons.VkontakteIcon, { viewBox: '50 50 400 400', style: { width: 18, height: 18 }, color: '#4c75a3' })
                  //onTouchTap={this.buttonTouchTap("vkontakte")}
                })
              )
            )
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_CircularProgress2.default, { size: 120, thickness: 5, className: _FrmSuperLogin2.default.progress })
        )
      );
    }
  }]);

  return UserObj;
}(_react.Component);

UserObj.contextTypes = {
  screen: _react2.default.PropTypes.object.isRequired
};
UserObj.propTypes = {

  _obj: _react.PropTypes.object,
  _acl: _react.PropTypes.string.isRequired,

  handleSave: _react.PropTypes.func.isRequired,
  handleRevert: _react.PropTypes.func.isRequired,
  handleMarkDeleted: _react.PropTypes.func.isRequired,
  handlePost: _react.PropTypes.func.isRequired,
  handleUnPost: _react.PropTypes.func.isRequired,
  handlePrint: _react.PropTypes.func.isRequired,
  handleAttachment: _react.PropTypes.func.isRequired,
  handleValueChange: _react.PropTypes.func.isRequired,
  handleAddRow: _react.PropTypes.func.isRequired,
  handleDelRow: _react.PropTypes.func.isRequired
};
exports.default = UserObj;