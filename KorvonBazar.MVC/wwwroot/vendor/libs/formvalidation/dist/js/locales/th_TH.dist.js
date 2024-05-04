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

/***/ "./wwwroot/vendor/libs/formvalidation/dist/js/locales/th_TH.js":
/*!*********************************************************************!*\
  !*** ./wwwroot/vendor/libs/formvalidation/dist/js/locales/th_TH.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);\n})(this, function () {\n  'use strict';\n\n  /**\n   * Thai language package\n   * Translated by @figgaro\n   */\n  var th_TH = {\n    base64: {\n      default: 'กรุณาระบุ base 64 encoded ให้ถูกต้อง'\n    },\n    between: {\n      default: 'กรุณาระบุค่าระหว่าง %s และ %s',\n      notInclusive: 'กรุณาระบุค่าระหว่าง %s และ %s เท่านั้น'\n    },\n    bic: {\n      default: 'กรุณาระบุหมายเลข BIC ให้ถูกต้อง'\n    },\n    callback: {\n      default: 'กรุณาระบุค่าให้ถูก'\n    },\n    choice: {\n      between: 'กรุณาเลือก %s - %s ที่มีอยู่',\n      default: 'กรุณาระบุค่าให้ถูกต้อง',\n      less: 'โปรดเลือกตัวเลือก %s ที่ต่ำสุด',\n      more: 'โปรดเลือกตัวเลือก %s ที่สูงสุด'\n    },\n    color: {\n      default: 'กรุณาระบุค่าสี color ให้ถูกต้อง'\n    },\n    creditCard: {\n      default: 'กรุณาระบุเลขที่บัตรเครดิตให้ถูกต้อง'\n    },\n    cusip: {\n      default: 'กรุณาระบุหมายเลข CUSIP ให้ถูกต้อง'\n    },\n    date: {\n      default: 'กรุณาระบุวันที่ให้ถูกต้อง',\n      max: 'ไม่สามารถระบุวันที่ได้หลังจาก %s',\n      min: 'ไม่สามารถระบุวันที่ได้ก่อน %s',\n      range: 'โปรดระบุวันที่ระหว่าง %s - %s'\n    },\n    different: {\n      default: 'กรุณาระบุค่าอื่นที่แตกต่าง'\n    },\n    digits: {\n      default: 'กรุณาระบุตัวเลขเท่านั้น'\n    },\n    ean: {\n      default: 'กรุณาระบุหมายเลข EAN ให้ถูกต้อง'\n    },\n    ein: {\n      default: 'กรุณาระบุหมายเลข EIN ให้ถูกต้อง'\n    },\n    emailAddress: {\n      default: 'กรุณาระบุอีเมล์ให้ถูกต้อง'\n    },\n    file: {\n      default: 'กรุณาเลือกไฟล์'\n    },\n    greaterThan: {\n      default: 'กรุณาระบุค่ามากกว่าหรือเท่ากับ %s',\n      notInclusive: 'กรุณาระบุค่ามากกว่า %s'\n    },\n    grid: {\n      default: 'กรุณาระบุหมายลข GRId ให้ถูกต้อง'\n    },\n    hex: {\n      default: 'กรุณาระบุเลขฐานสิบหกให้ถูกต้อง'\n    },\n    iban: {\n      countries: {\n        AD: 'อันดอร์รา',\n        AE: 'สหรัฐอาหรับเอมิเรตส์',\n        AL: 'แอลเบเนีย',\n        AO: 'แองโกลา',\n        AT: 'ออสเตรีย',\n        AZ: 'อาเซอร์ไบจาน',\n        BA: 'บอสเนียและเฮอร์เซโก',\n        BE: 'ประเทศเบลเยียม',\n        BF: 'บูร์กินาฟาโซ',\n        BG: 'บัลแกเรีย',\n        BH: 'บาห์เรน',\n        BI: 'บุรุนดี',\n        BJ: 'เบนิน',\n        BR: 'บราซิล',\n        CH: 'สวิตเซอร์แลนด์',\n        CI: 'ไอวอรี่โคสต์',\n        CM: 'แคเมอรูน',\n        CR: 'คอสตาริกา',\n        CV: 'เคปเวิร์ด',\n        CY: 'ไซปรัส',\n        CZ: 'สาธารณรัฐเชค',\n        DE: 'เยอรมนี',\n        DK: 'เดนมาร์ก',\n        DO: 'สาธารณรัฐโดมินิกัน',\n        DZ: 'แอลจีเรีย',\n        EE: 'เอสโตเนีย',\n        ES: 'สเปน',\n        FI: 'ฟินแลนด์',\n        FO: 'หมู่เกาะแฟโร',\n        FR: 'ฝรั่งเศส',\n        GB: 'สหราชอาณาจักร',\n        GE: 'จอร์เจีย',\n        GI: 'ยิบรอลตา',\n        GL: 'กรีนแลนด์',\n        GR: 'กรีซ',\n        GT: 'กัวเตมาลา',\n        HR: 'โครเอเชีย',\n        HU: 'ฮังการี',\n        IE: 'ไอร์แลนด์',\n        IL: 'อิสราเอล',\n        IR: 'อิหร่าน',\n        IS: 'ไอซ์',\n        IT: 'อิตาลี',\n        JO: 'จอร์แดน',\n        KW: 'คูเวต',\n        KZ: 'คาซัคสถาน',\n        LB: 'เลบานอน',\n        LI: 'Liechtenstein',\n        LT: 'ลิทัวเนีย',\n        LU: 'ลักเซมเบิร์ก',\n        LV: 'ลัตเวีย',\n        MC: 'โมนาโก',\n        MD: 'มอลโดวา',\n        ME: 'มอนเตเนโก',\n        MG: 'มาดากัสการ์',\n        MK: 'มาซิโดเนีย',\n        ML: 'มาลี',\n        MR: 'มอริเตเนีย',\n        MT: 'มอลตา',\n        MU: 'มอริเชียส',\n        MZ: 'โมซัมบิก',\n        NL: 'เนเธอร์แลนด์',\n        NO: 'นอร์เวย์',\n        PK: 'ปากีสถาน',\n        PL: 'โปแลนด์',\n        PS: 'ปาเลสไตน์',\n        PT: 'โปรตุเกส',\n        QA: 'กาตาร์',\n        RO: 'โรมาเนีย',\n        RS: 'เซอร์เบีย',\n        SA: 'ซาอุดิอารเบีย',\n        SE: 'สวีเดน',\n        SI: 'สโลวีเนีย',\n        SK: 'สโลวาเกีย',\n        SM: 'ซานมาริโน',\n        SN: 'เซเนกัล',\n        TL: 'ติมอร์ตะวันออก',\n        TN: 'ตูนิเซีย',\n        TR: 'ตุรกี',\n        VG: 'หมู่เกาะบริติชเวอร์จิน',\n        XK: 'สาธารณรัฐโคโซโว'\n      },\n      country: 'กรุณาระบุหมายเลข IBAN ใน %s',\n      default: 'กรุณาระบุหมายเลข IBAN ให้ถูกต้อง'\n    },\n    id: {\n      countries: {\n        BA: 'บอสเนียและเฮอร์เซโก',\n        BG: 'บัลแกเรีย',\n        BR: 'บราซิล',\n        CH: 'วิตเซอร์แลนด์',\n        CL: 'ชิลี',\n        CN: 'จีน',\n        CZ: 'สาธารณรัฐเชค',\n        DK: 'เดนมาร์ก',\n        EE: 'เอสโตเนีย',\n        ES: 'สเปน',\n        FI: 'ฟินแลนด์',\n        HR: 'โครเอเชีย',\n        IE: 'ไอร์แลนด์',\n        IS: 'ไอซ์',\n        LT: 'ลิทัวเนีย',\n        LV: 'ลัตเวีย',\n        ME: 'มอนเตเนโก',\n        MK: 'มาซิโดเนีย',\n        NL: 'เนเธอร์แลนด์',\n        PL: 'โปแลนด์',\n        RO: 'โรมาเนีย',\n        RS: 'เซอร์เบีย',\n        SE: 'สวีเดน',\n        SI: 'สโลวีเนีย',\n        SK: 'สโลวาเกีย',\n        SM: 'ซานมาริโน',\n        TH: 'ไทย',\n        TR: 'ตุรกี',\n        ZA: 'แอฟริกาใต้'\n      },\n      country: 'โปรดระบุเลขบัตรประจำตัวประชาชนใน %s ให้ถูกต้อง',\n      default: 'โปรดระบุเลขบัตรประจำตัวประชาชนให้ถูกต้อง'\n    },\n    identical: {\n      default: 'โปรดระบุค่าให้ตรง'\n    },\n    imei: {\n      default: 'โปรดระบุหมายเลข IMEI ให้ถูกต้อง'\n    },\n    imo: {\n      default: 'โปรดระบุหมายเลข IMO ให้ถูกต้อง'\n    },\n    integer: {\n      default: 'โปรดระบุตัวเลขให้ถูกต้อง'\n    },\n    ip: {\n      default: 'โปรดระบุ IP address ให้ถูกต้อง',\n      ipv4: 'โปรดระบุ IPv4 address ให้ถูกต้อง',\n      ipv6: 'โปรดระบุ IPv6 address ให้ถูกต้อง'\n    },\n    isbn: {\n      default: 'โปรดระบุหมายเลข ISBN ให้ถูกต้อง'\n    },\n    isin: {\n      default: 'โปรดระบุหมายเลข ISIN ให้ถูกต้อง'\n    },\n    ismn: {\n      default: 'โปรดระบุหมายเลข ISMN ให้ถูกต้อง'\n    },\n    issn: {\n      default: 'โปรดระบุหมายเลข ISSN ให้ถูกต้อง'\n    },\n    lessThan: {\n      default: 'โปรดระบุค่าน้อยกว่าหรือเท่ากับ %s',\n      notInclusive: 'โปรดระบุค่าน้อยกว่า %s'\n    },\n    mac: {\n      default: 'โปรดระบุหมายเลข MAC address ให้ถูกต้อง'\n    },\n    meid: {\n      default: 'โปรดระบุหมายเลข MEID ให้ถูกต้อง'\n    },\n    notEmpty: {\n      default: 'โปรดระบุค่า'\n    },\n    numeric: {\n      default: 'โปรดระบุเลขหน่วยหรือจำนวนทศนิยม ให้ถูกต้อง'\n    },\n    phone: {\n      countries: {\n        AE: 'สหรัฐอาหรับเอมิเรตส์',\n        BG: 'บัลแกเรีย',\n        BR: 'บราซิล',\n        CN: 'จีน',\n        CZ: 'สาธารณรัฐเชค',\n        DE: 'เยอรมนี',\n        DK: 'เดนมาร์ก',\n        ES: 'สเปน',\n        FR: 'ฝรั่งเศส',\n        GB: 'สหราชอาณาจักร',\n        IN: 'อินเดีย',\n        MA: 'โมร็อกโก',\n        NL: 'เนเธอร์แลนด์',\n        PK: 'ปากีสถาน',\n        RO: 'โรมาเนีย',\n        RU: 'รัสเซีย',\n        SK: 'สโลวาเกีย',\n        TH: 'ไทย',\n        US: 'สหรัฐอเมริกา',\n        VE: 'เวเนซูเอลา'\n      },\n      country: 'โปรดระบุหมายเลขโทรศัพท์ใน %s ให้ถูกต้อง',\n      default: 'โปรดระบุหมายเลขโทรศัพท์ให้ถูกต้อง'\n    },\n    promise: {\n      default: 'กรุณาระบุค่าให้ถูก'\n    },\n    regexp: {\n      default: 'โปรดระบุค่าให้ตรงกับรูปแบบที่กำหนด'\n    },\n    remote: {\n      default: 'โปรดระบุค่าให้ถูกต้อง'\n    },\n    rtn: {\n      default: 'โปรดระบุหมายเลข RTN ให้ถูกต้อง'\n    },\n    sedol: {\n      default: 'โปรดระบุหมายเลข SEDOL ให้ถูกต้อง'\n    },\n    siren: {\n      default: 'โปรดระบุหมายเลข SIREN ให้ถูกต้อง'\n    },\n    siret: {\n      default: 'โปรดระบุหมายเลข SIRET ให้ถูกต้อง'\n    },\n    step: {\n      default: 'โปรดระบุลำดับของ %s'\n    },\n    stringCase: {\n      default: 'โปรดระบุตัวอักษรพิมพ์เล็กเท่านั้น',\n      upper: 'โปรดระบุตัวอักษรพิมพ์ใหญ่เท่านั้น'\n    },\n    stringLength: {\n      between: 'โปรดระบุค่าตัวอักษรระหว่าง %s ถึง %s ตัวอักษร',\n      default: 'ค่าที่ระบุยังไม่ครบตามจำนวนที่กำหนด',\n      less: 'โปรดระบุค่าตัวอักษรน้อยกว่า %s ตัว',\n      more: 'โปรดระบุค่าตัวอักษรมากกว่า %s ตัว'\n    },\n    uri: {\n      default: 'โปรดระบุค่า URI ให้ถูกต้อง'\n    },\n    uuid: {\n      default: 'โปรดระบุหมายเลข UUID ให้ถูกต้อง',\n      version: 'โปรดระบุหมายเลข UUID ในเวอร์ชั่น %s'\n    },\n    vat: {\n      countries: {\n        AT: 'ออสเตรีย',\n        BE: 'เบลเยี่ยม',\n        BG: 'บัลแกเรีย',\n        BR: 'บราซิล',\n        CH: 'วิตเซอร์แลนด์',\n        CY: 'ไซปรัส',\n        CZ: 'สาธารณรัฐเชค',\n        DE: 'เยอรมัน',\n        DK: 'เดนมาร์ก',\n        EE: 'เอสโตเนีย',\n        EL: 'กรีซ',\n        ES: 'สเปน',\n        FI: 'ฟินแลนด์',\n        FR: 'ฝรั่งเศส',\n        GB: 'สหราชอาณาจักร',\n        GR: 'กรีซ',\n        HR: 'โครเอเชีย',\n        HU: 'ฮังการี',\n        IE: 'ไอร์แลนด์',\n        IS: 'ไอซ์',\n        IT: 'อิตาลี',\n        LT: 'ลิทัวเนีย',\n        LU: 'ลักเซมเบิร์ก',\n        LV: 'ลัตเวีย',\n        MT: 'มอลตา',\n        NL: 'เนเธอร์แลนด์',\n        NO: 'นอร์เวย์',\n        PL: 'โปแลนด์',\n        PT: 'โปรตุเกส',\n        RO: 'โรมาเนีย',\n        RS: 'เซอร์เบีย',\n        RU: 'รัสเซีย',\n        SE: 'สวีเดน',\n        SI: 'สโลวีเนีย',\n        SK: 'สโลวาเกีย',\n        VE: 'เวเนซูเอลา',\n        ZA: 'แอฟริกาใต้'\n      },\n      country: 'โปรดระบุจำนวนภาษีมูลค่าเพิ่มใน %s',\n      default: 'โปรดระบุจำนวนภาษีมูลค่าเพิ่ม'\n    },\n    vin: {\n      default: 'โปรดระบุหมายเลข VIN ให้ถูกต้อง'\n    },\n    zipCode: {\n      countries: {\n        AT: 'ออสเตรีย',\n        BG: 'บัลแกเรีย',\n        BR: 'บราซิล',\n        CA: 'แคนาดา',\n        CH: 'วิตเซอร์แลนด์',\n        CZ: 'สาธารณรัฐเชค',\n        DE: 'เยอรมนี',\n        DK: 'เดนมาร์ก',\n        ES: 'สเปน',\n        FR: 'ฝรั่งเศส',\n        GB: 'สหราชอาณาจักร',\n        IE: 'ไอร์แลนด์',\n        IN: 'อินเดีย',\n        IT: 'อิตาลี',\n        MA: 'โมร็อกโก',\n        NL: 'เนเธอร์แลนด์',\n        PL: 'โปแลนด์',\n        PT: 'โปรตุเกส',\n        RO: 'โรมาเนีย',\n        RU: 'รัสเซีย',\n        SE: 'สวีเดน',\n        SG: 'สิงคโปร์',\n        SK: 'สโลวาเกีย',\n        US: 'สหรัฐอเมริกา'\n      },\n      country: 'โปรดระบุรหัสไปรษณีย์ให้ถูกต้องใน %s',\n      default: 'โปรดระบุรหัสไปรษณีย์ให้ถูกต้อง'\n    }\n  };\n  return th_TH;\n});\n\n//# sourceURL=webpack://Sneat/./wwwroot/vendor/libs/formvalidation/dist/js/locales/th_TH.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./wwwroot/vendor/libs/formvalidation/dist/js/locales/th_TH.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});