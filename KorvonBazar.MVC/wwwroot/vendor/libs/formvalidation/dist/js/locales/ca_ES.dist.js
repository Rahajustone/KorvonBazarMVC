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

/***/ "./wwwroot/vendor/libs/formvalidation/dist/js/locales/ca_ES.js":
/*!*********************************************************************!*\
  !*** ./wwwroot/vendor/libs/formvalidation/dist/js/locales/ca_ES.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);\n})(this, function () {\n  'use strict';\n\n  /**\n   * Catalan language package\n   * Translated by @ArnauAregall\n   */\n  var ca_ES = {\n    base64: {\n      default: 'Si us plau introdueix un valor vàlid en base 64'\n    },\n    between: {\n      default: 'Si us plau introdueix un valor entre %s i %s',\n      notInclusive: 'Si us plau introdueix un valor comprès entre %s i %s'\n    },\n    bic: {\n      default: 'Si us plau introdueix un nombre BIC vàlid'\n    },\n    callback: {\n      default: 'Si us plau introdueix un valor vàlid'\n    },\n    choice: {\n      between: 'Si us plau escull entre %s i %s opcions',\n      default: 'Si us plau introdueix un valor vàlid',\n      less: 'Si us plau escull %s opcions com a mínim',\n      more: 'Si us plau escull %s opcions com a màxim'\n    },\n    color: {\n      default: 'Si us plau introdueix un color vàlid'\n    },\n    creditCard: {\n      default: 'Si us plau introdueix un nombre vàlid de targeta de crèdit'\n    },\n    cusip: {\n      default: 'Si us plau introdueix un nombre CUSIP vàlid'\n    },\n    date: {\n      default: 'Si us plau introdueix una data vàlida',\n      max: 'Si us plau introdueix una data anterior %s',\n      min: 'Si us plau introdueix una data posterior a %s',\n      range: 'Si us plau introdueix una data compresa entre %s i %s'\n    },\n    different: {\n      default: 'Si us plau introdueix un valor diferent'\n    },\n    digits: {\n      default: 'Si us plau introdueix només dígits'\n    },\n    ean: {\n      default: 'Si us plau introdueix un nombre EAN vàlid'\n    },\n    ein: {\n      default: 'Si us plau introdueix un nombre EIN vàlid'\n    },\n    emailAddress: {\n      default: 'Si us plau introdueix una adreça electrònica vàlida'\n    },\n    file: {\n      default: 'Si us plau selecciona un arxiu vàlid'\n    },\n    greaterThan: {\n      default: 'Si us plau introdueix un valor més gran o igual a %s',\n      notInclusive: 'Si us plau introdueix un valor més gran que %s'\n    },\n    grid: {\n      default: 'Si us plau introdueix un nombre GRId vàlid'\n    },\n    hex: {\n      default: 'Si us plau introdueix un valor hexadecimal vàlid'\n    },\n    iban: {\n      countries: {\n        AD: 'Andorra',\n        AE: 'Emirats Àrabs Units',\n        AL: 'Albània',\n        AO: 'Angola',\n        AT: 'Àustria',\n        AZ: 'Azerbaidjan',\n        BA: 'Bòsnia i Hercegovina',\n        BE: 'Bèlgica',\n        BF: 'Burkina Faso',\n        BG: 'Bulgària',\n        BH: 'Bahrain',\n        BI: 'Burundi',\n        BJ: 'Benín',\n        BR: 'Brasil',\n        CH: 'Suïssa',\n        CI: \"Costa d'Ivori\",\n        CM: 'Camerun',\n        CR: 'Costa Rica',\n        CV: 'Cap Verd',\n        CY: 'Xipre',\n        CZ: 'República Txeca',\n        DE: 'Alemanya',\n        DK: 'Dinamarca',\n        DO: 'República Dominicana',\n        DZ: 'Algèria',\n        EE: 'Estònia',\n        ES: 'Espanya',\n        FI: 'Finlàndia',\n        FO: 'Illes Fèroe',\n        FR: 'França',\n        GB: 'Regne Unit',\n        GE: 'Geòrgia',\n        GI: 'Gibraltar',\n        GL: 'Grenlàndia',\n        GR: 'Grècia',\n        GT: 'Guatemala',\n        HR: 'Croàcia',\n        HU: 'Hongria',\n        IE: 'Irlanda',\n        IL: 'Israel',\n        IR: 'Iran',\n        IS: 'Islàndia',\n        IT: 'Itàlia',\n        JO: 'Jordània',\n        KW: 'Kuwait',\n        KZ: 'Kazajistán',\n        LB: 'Líban',\n        LI: 'Liechtenstein',\n        LT: 'Lituània',\n        LU: 'Luxemburg',\n        LV: 'Letònia',\n        MC: 'Mònaco',\n        MD: 'Moldàvia',\n        ME: 'Montenegro',\n        MG: 'Madagascar',\n        MK: 'Macedònia',\n        ML: 'Malo',\n        MR: 'Mauritània',\n        MT: 'Malta',\n        MU: 'Maurici',\n        MZ: 'Moçambic',\n        NL: 'Països Baixos',\n        NO: 'Noruega',\n        PK: 'Pakistan',\n        PL: 'Polònia',\n        PS: 'Palestina',\n        PT: 'Portugal',\n        QA: 'Qatar',\n        RO: 'Romania',\n        RS: 'Sèrbia',\n        SA: 'Aràbia Saudita',\n        SE: 'Suècia',\n        SI: 'Eslovènia',\n        SK: 'Eslovàquia',\n        SM: 'San Marino',\n        SN: 'Senegal',\n        TL: 'Timor Oriental',\n        TN: 'Tunísia',\n        TR: 'Turquia',\n        VG: 'Illes Verges Britàniques',\n        XK: 'República de Kosovo'\n      },\n      country: 'Si us plau introdueix un nombre IBAN vàlid a %s',\n      default: 'Si us plau introdueix un nombre IBAN vàlid'\n    },\n    id: {\n      countries: {\n        BA: 'Bòsnia i Hercegovina',\n        BG: 'Bulgària',\n        BR: 'Brasil',\n        CH: 'Suïssa',\n        CL: 'Xile',\n        CN: 'Xina',\n        CZ: 'República Checa',\n        DK: 'Dinamarca',\n        EE: 'Estònia',\n        ES: 'Espanya',\n        FI: 'Finlpandia',\n        HR: 'Cropàcia',\n        IE: 'Irlanda',\n        IS: 'Islàndia',\n        LT: 'Lituania',\n        LV: 'Letònia',\n        ME: 'Montenegro',\n        MK: 'Macedònia',\n        NL: 'Països Baixos',\n        PL: 'Polònia',\n        RO: 'Romania',\n        RS: 'Sèrbia',\n        SE: 'Suècia',\n        SI: 'Eslovènia',\n        SK: 'Eslovàquia',\n        SM: 'San Marino',\n        TH: 'Tailàndia',\n        TR: 'Turquia',\n        ZA: 'Sud-àfrica'\n      },\n      country: \"Si us plau introdueix un nombre d'identificació vàlid a %s\",\n      default: \"Si us plau introdueix un nombre d'identificació vàlid\"\n    },\n    identical: {\n      default: 'Si us plau introdueix exactament el mateix valor'\n    },\n    imei: {\n      default: 'Si us plau introdueix un nombre IMEI vàlid'\n    },\n    imo: {\n      default: 'Si us plau introdueix un nombre IMO vàlid'\n    },\n    integer: {\n      default: 'Si us plau introdueix un nombre vàlid'\n    },\n    ip: {\n      default: 'Si us plau introdueix una direcció IP vàlida',\n      ipv4: 'Si us plau introdueix una direcció IPV4 vàlida',\n      ipv6: 'Si us plau introdueix una direcció IPV6 vàlida'\n    },\n    isbn: {\n      default: 'Si us plau introdueix un nombre ISBN vàlid'\n    },\n    isin: {\n      default: 'Si us plau introdueix un nombre ISIN vàlid'\n    },\n    ismn: {\n      default: 'Si us plau introdueix un nombre ISMN vàlid'\n    },\n    issn: {\n      default: 'Si us plau introdueix un nombre ISSN vàlid'\n    },\n    lessThan: {\n      default: 'Si us plau introdueix un valor menor o igual a %s',\n      notInclusive: 'Si us plau introdueix un valor menor que %s'\n    },\n    mac: {\n      default: 'Si us plau introdueix una adreça MAC vàlida'\n    },\n    meid: {\n      default: 'Si us plau introdueix nombre MEID vàlid'\n    },\n    notEmpty: {\n      default: 'Si us plau introdueix un valor'\n    },\n    numeric: {\n      default: 'Si us plau introdueix un nombre decimal vàlid'\n    },\n    phone: {\n      countries: {\n        AE: 'Emirats Àrabs Units',\n        BG: 'Bulgària',\n        BR: 'Brasil',\n        CN: 'Xina',\n        CZ: 'República Checa',\n        DE: 'Alemanya',\n        DK: 'Dinamarca',\n        ES: 'Espanya',\n        FR: 'França',\n        GB: 'Regne Unit',\n        IN: 'Índia',\n        MA: 'Marroc',\n        NL: 'Països Baixos',\n        PK: 'Pakistan',\n        RO: 'Romania',\n        RU: 'Rússia',\n        SK: 'Eslovàquia',\n        TH: 'Tailàndia',\n        US: 'Estats Units',\n        VE: 'Veneçuela'\n      },\n      country: 'Si us plau introdueix un telèfon vàlid a %s',\n      default: 'Si us plau introdueix un telèfon vàlid'\n    },\n    promise: {\n      default: 'Si us plau introdueix un valor vàlid'\n    },\n    regexp: {\n      default: 'Si us plau introdueix un valor que coincideixi amb el patró'\n    },\n    remote: {\n      default: 'Si us plau introdueix un valor vàlid'\n    },\n    rtn: {\n      default: 'Si us plau introdueix un nombre RTN vàlid'\n    },\n    sedol: {\n      default: 'Si us plau introdueix un nombre SEDOL vàlid'\n    },\n    siren: {\n      default: 'Si us plau introdueix un nombre SIREN vàlid'\n    },\n    siret: {\n      default: 'Si us plau introdueix un nombre SIRET vàlid'\n    },\n    step: {\n      default: 'Si us plau introdueix un pas vàlid de %s'\n    },\n    stringCase: {\n      default: 'Si us plau introdueix només caràcters en minúscula',\n      upper: 'Si us plau introdueix només caràcters en majúscula'\n    },\n    stringLength: {\n      between: 'Si us plau introdueix un valor amb una longitud compresa entre %s i %s caràcters',\n      default: 'Si us plau introdueix un valor amb una longitud vàlida',\n      less: 'Si us plau introdueix menys de %s caràcters',\n      more: 'Si us plau introdueix més de %s caràcters'\n    },\n    uri: {\n      default: 'Si us plau introdueix una URI vàlida'\n    },\n    uuid: {\n      default: 'Si us plau introdueix un nom UUID vàlid',\n      version: 'Si us plau introdueix una versió UUID vàlida per %s'\n    },\n    vat: {\n      countries: {\n        AT: 'Àustria',\n        BE: 'Bèlgica',\n        BG: 'Bulgària',\n        BR: 'Brasil',\n        CH: 'Suïssa',\n        CY: 'Xipre',\n        CZ: 'República Checa',\n        DE: 'Alemanya',\n        DK: 'Dinamarca',\n        EE: 'Estònia',\n        EL: 'Grècia',\n        ES: 'Espanya',\n        FI: 'Finlàndia',\n        FR: 'França',\n        GB: 'Regne Unit',\n        GR: 'Grècia',\n        HR: 'Croàcia',\n        HU: 'Hongria',\n        IE: 'Irlanda',\n        IS: 'Islàndia',\n        IT: 'Itàlia',\n        LT: 'Lituània',\n        LU: 'Luxemburg',\n        LV: 'Letònia',\n        MT: 'Malta',\n        NL: 'Països Baixos',\n        NO: 'Noruega',\n        PL: 'Polònia',\n        PT: 'Portugal',\n        RO: 'Romania',\n        RS: 'Sèrbia',\n        RU: 'Rússia',\n        SE: 'Suècia',\n        SI: 'Eslovènia',\n        SK: 'Eslovàquia',\n        VE: 'Veneçuela',\n        ZA: 'Sud-àfrica'\n      },\n      country: \"Si us plau introdueix una quantitat d' IVA vàlida a %s\",\n      default: \"Si us plau introdueix una quantitat d'IVA vàlida\"\n    },\n    vin: {\n      default: 'Si us plau introdueix un nombre VIN vàlid'\n    },\n    zipCode: {\n      countries: {\n        AT: 'Àustria',\n        BG: 'Bulgària',\n        BR: 'Brasil',\n        CA: 'Canadà',\n        CH: 'Suïssa',\n        CZ: 'República Checa',\n        DE: 'Alemanya',\n        DK: 'Dinamarca',\n        ES: 'Espanya',\n        FR: 'França',\n        GB: 'Rege Unit',\n        IE: 'Irlanda',\n        IN: 'Índia',\n        IT: 'Itàlia',\n        MA: 'Marroc',\n        NL: 'Països Baixos',\n        PL: 'Polònia',\n        PT: 'Portugal',\n        RO: 'Romania',\n        RU: 'Rússia',\n        SE: 'Suècia',\n        SG: 'Singapur',\n        SK: 'Eslovàquia',\n        US: 'Estats Units'\n      },\n      country: 'Si us plau introdueix un codi postal vàlid a %s',\n      default: 'Si us plau introdueix un codi postal vàlid'\n    }\n  };\n  return ca_ES;\n});\n\n//# sourceURL=webpack://Sneat/./wwwroot/vendor/libs/formvalidation/dist/js/locales/ca_ES.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./wwwroot/vendor/libs/formvalidation/dist/js/locales/ca_ES.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});