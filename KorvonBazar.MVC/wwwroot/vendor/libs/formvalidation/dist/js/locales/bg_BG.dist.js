/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wwwroot/vendor/libs/formvalidation/dist/js/locales/bg_BG.js":
/*!*********************************************************************!*\
  !*** ./wwwroot/vendor/libs/formvalidation/dist/js/locales/bg_BG.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);\n})(this, function () {\n  'use strict';\n\n  /**\n   * Bulgarian language package\n   * Translated by @mraiur\n   */\n  var bg_BG = {\n    base64: {\n      default: 'Моля, въведете валиден base 64 кодиран'\n    },\n    between: {\n      default: 'Моля, въведете стойност между %s и %s',\n      notInclusive: 'Моля, въведете стойност точно между %s и %s'\n    },\n    bic: {\n      default: 'Моля, въведете валиден BIC номер'\n    },\n    callback: {\n      default: 'Моля, въведете валидна стойност'\n    },\n    choice: {\n      between: 'Моля изберете от %s до %s стойност',\n      default: 'Моля, въведете валидна стойност',\n      less: 'Моля изберете минимална стойност %s',\n      more: 'Моля изберете максимална стойност %s'\n    },\n    color: {\n      default: 'Моля, въведете валиден цвят'\n    },\n    creditCard: {\n      default: 'Моля, въведете валиден номер на кредитна карта'\n    },\n    cusip: {\n      default: 'Моля, въведете валиден CUSIP номер'\n    },\n    date: {\n      default: 'Моля, въведете валидна дата',\n      max: 'Моля въведете дата преди %s',\n      min: 'Моля въведете дата след %s',\n      range: 'Моля въведете дата между %s и %s'\n    },\n    different: {\n      default: 'Моля, въведете различна стойност'\n    },\n    digits: {\n      default: 'Моля, въведете само цифри'\n    },\n    ean: {\n      default: 'Моля, въведете валиден EAN номер'\n    },\n    ein: {\n      default: 'Моля, въведете валиден EIN номер'\n    },\n    emailAddress: {\n      default: 'Моля, въведете валиден имейл адрес'\n    },\n    file: {\n      default: 'Моля, изберете валиден файл'\n    },\n    greaterThan: {\n      default: 'Моля, въведете стойност по-голяма от или равна на %s',\n      notInclusive: 'Моля, въведете стойност по-голяма от %s'\n    },\n    grid: {\n      default: 'Моля, изберете валиден GRId номер'\n    },\n    hex: {\n      default: 'Моля, въведете валиден шестнадесетичен номер'\n    },\n    iban: {\n      countries: {\n        AD: 'Андора',\n        AE: 'Обединени арабски емирства',\n        AL: 'Албания',\n        AO: 'Ангола',\n        AT: 'Австрия',\n        AZ: 'Азербайджан',\n        BA: 'Босна и Херцеговина',\n        BE: 'Белгия',\n        BF: 'Буркина Фасо',\n        BG: 'България',\n        BH: 'Бахрейн',\n        BI: 'Бурунди',\n        BJ: 'Бенин',\n        BR: 'Бразилия',\n        CH: 'Швейцария',\n        CI: 'Ivory Coast',\n        CM: 'Камерун',\n        CR: 'Коста Рика',\n        CV: 'Cape Verde',\n        CY: 'Кипър',\n        CZ: 'Чешката република',\n        DE: 'Германия',\n        DK: 'Дания',\n        DO: 'Доминиканска република',\n        DZ: 'Алжир',\n        EE: 'Естония',\n        ES: 'Испания',\n        FI: 'Финландия',\n        FO: 'Фарьорските острови',\n        FR: 'Франция',\n        GB: 'Обединеното кралство',\n        GE: 'Грузия',\n        GI: 'Гибралтар',\n        GL: 'Гренландия',\n        GR: 'Гърция',\n        GT: 'Гватемала',\n        HR: 'Хърватия',\n        HU: 'Унгария',\n        IE: 'Ирландия',\n        IL: 'Израел',\n        IR: 'Иран',\n        IS: 'Исландия',\n        IT: 'Италия',\n        JO: 'Йордания',\n        KW: 'Кувейт',\n        KZ: 'Казахстан',\n        LB: 'Ливан',\n        LI: 'Лихтенщайн',\n        LT: 'Литва',\n        LU: 'Люксембург',\n        LV: 'Латвия',\n        MC: 'Монако',\n        MD: 'Молдова',\n        ME: 'Черна гора',\n        MG: 'Мадагаскар',\n        MK: 'Македония',\n        ML: 'Мали',\n        MR: 'Мавритания',\n        MT: 'Малта',\n        MU: 'Мавриций',\n        MZ: 'Мозамбик',\n        NL: 'Нидерландия',\n        NO: 'Норвегия',\n        PK: 'Пакистан',\n        PL: 'Полша',\n        PS: 'палестинска',\n        PT: 'Португалия',\n        QA: 'Катар',\n        RO: 'Румъния',\n        RS: 'Сърбия',\n        SA: 'Саудитска Арабия',\n        SE: 'Швеция',\n        SI: 'Словения',\n        SK: 'Словакия',\n        SM: 'San Marino',\n        SN: 'Сенегал',\n        TL: 'Източен Тимор',\n        TN: 'Тунис',\n        TR: 'Турция',\n        VG: 'Британски Вирджински острови',\n        XK: 'Република Косово'\n      },\n      country: 'Моля, въведете валиден номер на IBAN в %s',\n      default: 'Моля, въведете валиден IBAN номер'\n    },\n    id: {\n      countries: {\n        BA: 'Босна и Херцеговина',\n        BG: 'България',\n        BR: 'Бразилия',\n        CH: 'Швейцария',\n        CL: 'Чили',\n        CN: 'Китай',\n        CZ: 'Чешката република',\n        DK: 'Дания',\n        EE: 'Естония',\n        ES: 'Испания',\n        FI: 'Финландия',\n        HR: 'Хърватия',\n        IE: 'Ирландия',\n        IS: 'Исландия',\n        LT: 'Литва',\n        LV: 'Латвия',\n        ME: 'Черна гора',\n        MK: 'Македония',\n        NL: 'Холандия',\n        PL: 'Полша',\n        RO: 'Румъния',\n        RS: 'Сърбия',\n        SE: 'Швеция',\n        SI: 'Словения',\n        SK: 'Словакия',\n        SM: 'San Marino',\n        TH: 'Тайланд',\n        TR: 'Турция',\n        ZA: 'Южна Африка'\n      },\n      country: 'Моля, въведете валиден идентификационен номер в %s',\n      default: 'Моля, въведете валиден идентификационен номер'\n    },\n    identical: {\n      default: 'Моля, въведете една и съща стойност'\n    },\n    imei: {\n      default: 'Моля, въведете валиден IMEI номер'\n    },\n    imo: {\n      default: 'Моля, въведете валиден IMO номер'\n    },\n    integer: {\n      default: 'Моля, въведете валиден номер'\n    },\n    ip: {\n      default: 'Моля, въведете валиден IP адрес',\n      ipv4: 'Моля, въведете валиден IPv4 адрес',\n      ipv6: 'Моля, въведете валиден IPv6 адрес'\n    },\n    isbn: {\n      default: 'Моля, въведете валиден ISBN номер'\n    },\n    isin: {\n      default: 'Моля, въведете валиден ISIN номер'\n    },\n    ismn: {\n      default: 'Моля, въведете валиден ISMN номер'\n    },\n    issn: {\n      default: 'Моля, въведете валиден ISSN номер'\n    },\n    lessThan: {\n      default: 'Моля, въведете стойност по-малка или равна на %s',\n      notInclusive: 'Моля, въведете стойност по-малко от %s'\n    },\n    mac: {\n      default: 'Моля, въведете валиден MAC адрес'\n    },\n    meid: {\n      default: 'Моля, въведете валиден MEID номер'\n    },\n    notEmpty: {\n      default: 'Моля, въведете стойност'\n    },\n    numeric: {\n      default: 'Моля, въведете валидно число с плаваща запетая'\n    },\n    phone: {\n      countries: {\n        AE: 'Обединени арабски емирства',\n        BG: 'България',\n        BR: 'Бразилия',\n        CN: 'Китай',\n        CZ: 'Чешката република',\n        DE: 'Германия',\n        DK: 'Дания',\n        ES: 'Испания',\n        FR: 'Франция',\n        GB: 'Обединеното кралство',\n        IN: 'Индия',\n        MA: 'Мароко',\n        NL: 'Нидерландия',\n        PK: 'Пакистан',\n        RO: 'Румъния',\n        RU: 'Русия',\n        SK: 'Словакия',\n        TH: 'Тайланд',\n        US: 'САЩ',\n        VE: 'Венецуела'\n      },\n      country: 'Моля, въведете валиден телефонен номер в %s',\n      default: 'Моля, въведете валиден телефонен номер'\n    },\n    promise: {\n      default: 'Моля, въведете валидна стойност'\n    },\n    regexp: {\n      default: 'Моля, въведете стойност, отговаряща на модела'\n    },\n    remote: {\n      default: 'Моля, въведете валидна стойност'\n    },\n    rtn: {\n      default: 'Моля, въведете валиде  RTN номер'\n    },\n    sedol: {\n      default: 'Моля, въведете валиден SEDOL номер'\n    },\n    siren: {\n      default: 'Моля, въведете валиден SIREN номер'\n    },\n    siret: {\n      default: 'Моля, въведете валиден SIRET номер'\n    },\n    step: {\n      default: 'Моля, въведете валиденa стъпка от %s'\n    },\n    stringCase: {\n      default: 'Моля, въведете само с малки букви',\n      upper: 'Моля въведете само главни букви'\n    },\n    stringLength: {\n      between: 'Моля, въведете стойност между %s и %s знака',\n      default: 'Моля, въведете стойност с валидни дължина',\n      less: 'Моля, въведете по-малко от %s знака',\n      more: 'Моля въведете повече от %s знака'\n    },\n    uri: {\n      default: 'Моля, въведете валиден URI'\n    },\n    uuid: {\n      default: 'Моля, въведете валиден UUID номер',\n      version: 'Моля, въведете валиден UUID номер с версия %s'\n    },\n    vat: {\n      countries: {\n        AT: 'Австрия',\n        BE: 'Белгия',\n        BG: 'България',\n        BR: 'Бразилия',\n        CH: 'Швейцария',\n        CY: 'Кипър',\n        CZ: 'Чешката република',\n        DE: 'Германия',\n        DK: 'Дания',\n        EE: 'Естония',\n        EL: 'Гърция',\n        ES: 'Испания',\n        FI: 'Финландия',\n        FR: 'Франция',\n        GB: 'Обединеното кралство',\n        GR: 'Гърция',\n        HR: 'Ирландия',\n        HU: 'Унгария',\n        IE: 'Ирландски',\n        IS: 'Исландия',\n        IT: 'Италия',\n        LT: 'Литва',\n        LU: 'Люксембург',\n        LV: 'Латвия',\n        MT: 'Малта',\n        NL: 'Холандия',\n        NO: 'Норвегия',\n        PL: 'Полша',\n        PT: 'Португалия',\n        RO: 'Румъния',\n        RS: 'Сърбия',\n        RU: 'Русия',\n        SE: 'Швеция',\n        SI: 'Словения',\n        SK: 'Словакия',\n        VE: 'Венецуела',\n        ZA: 'Южна Африка'\n      },\n      country: 'Моля, въведете валиден ДДС в %s',\n      default: 'Моля, въведете валиден ДДС'\n    },\n    vin: {\n      default: 'Моля, въведете валиден номер VIN'\n    },\n    zipCode: {\n      countries: {\n        AT: 'Австрия',\n        BG: 'България',\n        BR: 'Бразилия',\n        CA: 'Канада',\n        CH: 'Швейцария',\n        CZ: 'Чешката република',\n        DE: 'Германия',\n        DK: 'Дания',\n        ES: 'Испания',\n        FR: 'Франция',\n        GB: 'Обединеното кралство',\n        IE: 'Ирландски',\n        IN: 'Индия',\n        IT: 'Италия',\n        MA: 'Мароко',\n        NL: 'Холандия',\n        PL: 'Полша',\n        PT: 'Португалия',\n        RO: 'Румъния',\n        RU: 'Русия',\n        SE: 'Швеция',\n        SG: 'Сингапур',\n        SK: 'Словакия',\n        US: 'САЩ'\n      },\n      country: 'Моля, въведете валиден пощенски код в %s',\n      default: 'Моля, въведете валиден пощенски код'\n    }\n  };\n  return bg_BG;\n});\n\n//# sourceURL=webpack://Sneat/./wwwroot/vendor/libs/formvalidation/dist/js/locales/bg_BG.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./wwwroot/vendor/libs/formvalidation/dist/js/locales/bg_BG.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});