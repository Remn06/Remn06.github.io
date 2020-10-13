(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/app-root/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/app-root/app.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gameArea\" class=\"gameArea\" [ngStyle]=\"{'width': width + 'px', 'height': height + 'px'}\">\n\t<app-html-renderer></app-html-renderer>\n\t<app-svg-renderer data-width=\"{{width}}\" data-height=\"{{height}}\"></app-svg-renderer>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/html-renderer/game-object/game-object.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/html-renderer/game-object/game-object.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-object\"\n\t [ngClass]=\"gameObjectRenderInfo.className\"\n\t [ngStyle]=\"getStyle()\">{{gameObjectRenderInfo.text}}</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/html-renderer/html-renderer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/html-renderer/html-renderer.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-game-object\n\t*ngFor=\"let renderInfo of gameObjectsRenderInfos; trackBy: id\"\n\t[gameObjectRenderInfo]=\"renderInfo\">\n</app-game-object>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/svg-renderer/svg-renderer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/svg-renderer/svg-renderer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg [attr.viewBox]=\"viewBoxValue\" xmlns=\"http://www.w3.org/2000/svg\" [innerHtml]=\"svgElements\">\n</svg>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_games/impossible-dino/components/cacti-producer-component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/_games/impossible-dino/components/cacti-producer-component.ts ***!
  \*******************************************************************************/
/*! exports provided: CactiProducerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CactiProducerComponent", function() { return CactiProducerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../business/game-components/core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _business_common_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../business/common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../business/common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _business_common_v_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../business/common/v-math */ "./src/app/business/common/v-math.ts");
/* harmony import */ var _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../business/core/factory/game-object-factory */ "./src/app/business/core/factory/game-object-factory.ts");
/* harmony import */ var _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../business/core/factory/transform-factory */ "./src/app/business/core/factory/transform-factory.ts");
/* harmony import */ var _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../business/core/factory/component-factory */ "./src/app/business/core/factory/component-factory.ts");
/* harmony import */ var _business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component */ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts");
/* harmony import */ var _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../business/common/name-value-pair */ "./src/app/business/common/name-value-pair.ts");
/* harmony import */ var _business_screen_game_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../business/screen/game-screen */ "./src/app/business/screen/game-screen.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _business_game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../business/game-components/core/collision-game-component */ "./src/app/business/game-components/core/collision-game-component.ts");
/* harmony import */ var _business_common_rect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../business/common/rect */ "./src/app/business/common/rect.ts");
/* harmony import */ var _ground_shifter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ground-shifter-component */ "./src/app/_games/impossible-dino/components/ground-shifter-component.ts");















class CactiProducerComponent extends _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = CactiProducerComponent.name;
    }
    start() {
        this.calcNextCactusTime();
    }
    draw() {
    }
    update() {
        if (_business_common_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"].getTime() >= this.nextCactusTime) {
            this.createCactus();
            this.calcNextCactusTime();
        }
    }
    destroy() {
    }
    calcNextCactusTime() {
        const shiftInterval = _business_common_v_math__WEBPACK_IMPORTED_MODULE_4__["VMath"].randIntMaxIncluded(this.shiftIntervalFrom, this.shiftIntervalTo);
        const sign = _business_common_v_math__WEBPACK_IMPORTED_MODULE_4__["VMath"].randIntMaxIncluded(0, 1);
        this.nextCactusTime = _business_common_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"].getTime() + this.frequency + shiftInterval * ((sign === 0) ? 1 : -1);
    }
    createCactus() {
        const rootObject = this.gameObject.getComponent(_ground_shifter_component__WEBPACK_IMPORTED_MODULE_14__["GroundShifterComponent"].name).getLastGroundObject();
        const cactusType = _business_common_v_math__WEBPACK_IMPORTED_MODULE_4__["VMath"].randIntMaxIncluded(0, 1);
        if (cactusType === 0) {
            return _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_5__["GameObjectFactory"].createGameObject(rootObject, 'Cactus', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_6__["TransformFactory"].createGlobalTransform(rootObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](_business_screen_game_screen__WEBPACK_IMPORTED_MODULE_10__["GameScreen"].getDefaultScreen().width + 12, rootObject.transform.position.y - 23), 23, 46, 0), [
                _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_7__["ComponentFactory"].createComponent(_business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [
                    new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_9__["NameValuePair"]('backgroundImage', 'assets/games/impossibleDino/img/cactus.png'),
                    new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_9__["NameValuePair"]('cssStyle', '')
                ], true),
                _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_7__["ComponentFactory"].createComponent(_business_game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_12__["CollisionGameComponent"], [
                    new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_9__["NameValuePair"]('meshCollider', [new _business_common_rect__WEBPACK_IMPORTED_MODULE_13__["Rect"](0, 8, 5, 13), new _business_common_rect__WEBPACK_IMPORTED_MODULE_13__["Rect"](5, 0, 5, 32), new _business_common_rect__WEBPACK_IMPORTED_MODULE_13__["Rect"](10, 4, 5, 11)])
                ])
            ], true);
        }
        else {
            return _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_5__["GameObjectFactory"].createGameObject(rootObject, 'SmallCactus', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_6__["TransformFactory"].createGlobalTransform(rootObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](_business_screen_game_screen__WEBPACK_IMPORTED_MODULE_10__["GameScreen"].getDefaultScreen().width + 16, rootObject.transform.position.y - 16), 32, 32, 0), [
                _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_7__["ComponentFactory"].createComponent(_business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [
                    new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_9__["NameValuePair"]('backgroundImage', 'assets/games/impossibleDino/img/small-cactus.png'),
                    new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_9__["NameValuePair"]('cssStyle', '')
                ], true),
                _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_7__["ComponentFactory"].createComponent(_business_game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_12__["CollisionGameComponent"], [
                    new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_9__["NameValuePair"]('meshCollider', [])
                ])
            ], true);
        }
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_11__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CactiProducerComponent.prototype, "frequency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_11__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CactiProducerComponent.prototype, "shiftIntervalFrom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_11__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CactiProducerComponent.prototype, "shiftIntervalTo", void 0);


/***/ }),

/***/ "./src/app/_games/impossible-dino/components/cloud-shifter-component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/_games/impossible-dino/components/cloud-shifter-component.ts ***!
  \******************************************************************************/
/*! exports provided: CloudShifterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudShifterComponent", function() { return CloudShifterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../business/game-components/core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../business/common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _business_common_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../business/common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _business_screen_game_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../business/screen/game-screen */ "./src/app/business/screen/game-screen.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _business_common_v_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../business/common/v-math */ "./src/app/business/common/v-math.ts");







class CloudShifterComponent extends _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = CloudShifterComponent.name;
    }
    start() {
    }
    draw() {
    }
    update() {
        const position = this.gameObject.transform.localPosition;
        const newPosition = new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](position.x - this.speed * _business_common_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"].delta, position.y);
        const cloudWidth = this.gameObject.transform.width;
        const cloudHeight = this.gameObject.transform.height;
        if (newPosition.x <= (0 - cloudWidth / 2 - this.margin)) {
            // todo random cloud x
            newPosition.x = _business_screen_game_screen__WEBPACK_IMPORTED_MODULE_4__["GameScreen"].getDefaultScreen().width + cloudWidth / 2 + this.margin;
            newPosition.y = _business_common_v_math__WEBPACK_IMPORTED_MODULE_6__["VMath"].randIntMaxIncluded(cloudHeight / 2, this.skyHeight);
        }
        this.gameObject.transform.localPosition = newPosition;
    }
    destroy() {
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CloudShifterComponent.prototype, "speed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CloudShifterComponent.prototype, "margin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CloudShifterComponent.prototype, "skyHeight", void 0);


/***/ }),

/***/ "./src/app/_games/impossible-dino/components/dino-clock-game-component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_games/impossible-dino/components/dino-clock-game-component.ts ***!
  \********************************************************************************/
/*! exports provided: DinoClockGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinoClockGameComponent", function() { return DinoClockGameComponent; });
/* harmony import */ var _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../business/game-components/core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../business/core/factory/game-object-factory */ "./src/app/business/core/factory/game-object-factory.ts");
/* harmony import */ var _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../business/core/factory/transform-factory */ "./src/app/business/core/factory/transform-factory.ts");
/* harmony import */ var _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../business/common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../business/core/factory/component-factory */ "./src/app/business/core/factory/component-factory.ts");
/* harmony import */ var _business_game_components_svg_renderer_game_component_svg_renderer_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../business/game-components/svg-renderer-game-component/svg-renderer-game-component */ "./src/app/business/game-components/svg-renderer-game-component/svg-renderer-game-component.ts");
/* harmony import */ var _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../business/common/name-value-pair */ "./src/app/business/common/name-value-pair.ts");
/* harmony import */ var _business_game_components_svg_renderer_game_component_svg_element_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../business/game-components/svg-renderer-game-component/svg-element-type */ "./src/app/business/game-components/svg-renderer-game-component/svg-element-type.ts");
/* harmony import */ var _business_game_components_user_rotate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../business/game-components/user/rotate.component */ "./src/app/business/game-components/user/rotate.component.ts");
/* harmony import */ var _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../business/game-components/svg-renderer-game-component/svg-path-element */ "./src/app/business/game-components/svg-renderer-game-component/svg-path-element.ts");










class DinoClockGameComponent extends _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_0__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = DinoClockGameComponent.name;
    }
    start() {
        const dinoClockCircleObj = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_1__["GameObjectFactory"].createGameObject(this.gameObject, 'DinoClockCircleObj', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_2__["TransformFactory"].createLocalTransform(this.gameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](0, 0), 100, 100, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_business_game_components_svg_renderer_game_component_svg_renderer_game_component__WEBPACK_IMPORTED_MODULE_5__["SvgRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('type', _business_game_components_svg_renderer_game_component_svg_element_type__WEBPACK_IMPORTED_MODULE_7__["SvgElementType"].Circle),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('x', 0),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('y', 0),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('r', 25),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('stroke', '#0FF'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('strokeWidth', '1'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('strokeDasharray', '10 5')
            ])
        ], true);
        const dinoClockBigArrow = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_1__["GameObjectFactory"].createGameObject(this.gameObject, 'DinoClockBigArrow', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_2__["TransformFactory"].createLocalTransform(this.gameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](0, 0), 100, 100, 10), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_business_game_components_svg_renderer_game_component_svg_renderer_game_component__WEBPACK_IMPORTED_MODULE_5__["SvgRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('type', _business_game_components_svg_renderer_game_component_svg_element_type__WEBPACK_IMPORTED_MODULE_7__["SvgElementType"].Path),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('x', 0),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('y', 0),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('pathElements', [
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].MoveTo, 0, 0),
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].LineTo, 25, 0),
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].LineTo, 20, -2),
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].LineTo, 20, 2),
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].LineTo, 25, 0),
                ]),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('stroke', '#00F'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('strokeWidth', '1')
            ]),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_business_game_components_user_rotate_component__WEBPACK_IMPORTED_MODULE_8__["RotateComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('rotation', 80),
            ])
        ], true);
        const dinoClockSmallArrow = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_1__["GameObjectFactory"].createGameObject(this.gameObject, 'DinoClockSmallArrow', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_2__["TransformFactory"].createLocalTransform(this.gameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](0, 0), 100, 100, 10), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_business_game_components_svg_renderer_game_component_svg_renderer_game_component__WEBPACK_IMPORTED_MODULE_5__["SvgRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('type', _business_game_components_svg_renderer_game_component_svg_element_type__WEBPACK_IMPORTED_MODULE_7__["SvgElementType"].Path),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('x', 0),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('y', 0),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('pathElements', [
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].MoveTo, 0, 0),
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].LineTo, 20, 0),
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].LineTo, 15, -2),
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].LineTo, 15, 2),
                    new _business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElement"](_business_game_components_svg_renderer_game_component_svg_path_element__WEBPACK_IMPORTED_MODULE_9__["SvgPathElementType"].LineTo, 20, 0),
                ]),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('stroke', '#0F0'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('strokeWidth', '1')
            ]),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_business_game_components_user_rotate_component__WEBPACK_IMPORTED_MODULE_8__["RotateComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_6__["NameValuePair"]('rotation', 40),
            ])
        ], true);
    }
    draw() {
    }
    update() {
    }
    destroy() {
    }
}


/***/ }),

/***/ "./src/app/_games/impossible-dino/components/dino-jumper-component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/_games/impossible-dino/components/dino-jumper-component.ts ***!
  \****************************************************************************/
/*! exports provided: DinoJumperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinoJumperComponent", function() { return DinoJumperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../business/game-components/core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../business/common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _business_common_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../business/common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _business_input_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../business/input/input */ "./src/app/business/input/input.ts");
/* harmony import */ var _business_input_dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../business/input/dto/mouse-input-event */ "./src/app/business/input/dto/mouse-input-event.ts");







class DinoJumperComponent extends _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = DinoJumperComponent.name;
        this.isJumping = false;
    }
    start() {
    }
    draw() {
    }
    update() {
        const isKeyPressed = _business_input_input__WEBPACK_IMPORTED_MODULE_5__["Input"].getKey('ArrowUp') === true || _business_input_input__WEBPACK_IMPORTED_MODULE_5__["Input"].getKey('Space') === true;
        const mouseEvents = _business_input_input__WEBPACK_IMPORTED_MODULE_5__["Input"].getMouseDown();
        const isLeftMousePressed = mouseEvents.some((event) => event.button === _business_input_dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_6__["MouseButtonType"].left);
        if ((isKeyPressed || isLeftMousePressed) && this.isJumping === false) {
            this.isJumping = true;
            this.initialY = this.gameObject.transform.localPosition.y;
            this.startTime = _business_common_timer__WEBPACK_IMPORTED_MODULE_4__["Timer"].getTime();
        }
        if (this.isJumping === true) {
            const k = this.jumpHeight / Math.pow(this.durationOfJump, 2);
            const t = (_business_common_timer__WEBPACK_IMPORTED_MODULE_4__["Timer"].getTime() - this.startTime) / 1000 - this.durationOfJump;
            const y = k * (t * t) - this.jumpHeight;
            const currentTransform = this.gameObject.transform;
            const currentPosition = currentTransform.localPosition;
            const newPosition = new _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](currentPosition.x, this.initialY + y);
            if (t > this.durationOfJump) {
                this.isJumping = false;
                currentTransform.localPosition = new _business_common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](currentPosition.x, this.initialY);
                return;
            }
            currentTransform.localPosition = newPosition;
        }
    }
    destroy() {
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], DinoJumperComponent.prototype, "durationOfJump", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], DinoJumperComponent.prototype, "jumpHeight", void 0);


/***/ }),

/***/ "./src/app/_games/impossible-dino/components/dino-score-counter-component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/_games/impossible-dino/components/dino-score-counter-component.ts ***!
  \***********************************************************************************/
/*! exports provided: DinoScoreCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinoScoreCounterComponent", function() { return DinoScoreCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../business/game-components/core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _business_common_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../business/common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _business_core_game_object_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../business/core/game-object-collection */ "./src/app/business/core/game-object-collection.ts");
/* harmony import */ var _business_game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../business/game-components/core/collision-game-component */ "./src/app/business/game-components/core/collision-game-component.ts");






class DinoScoreCounterComponent extends _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = DinoScoreCounterComponent.name;
        this.score = 0;
        this.hiScore = 0;
    }
    start() {
        const dino = _business_core_game_object_collection__WEBPACK_IMPORTED_MODULE_4__["GameObjectCollection"].findDescendantByName('Dino', _business_core_game_object_collection__WEBPACK_IMPORTED_MODULE_4__["GameObjectCollection"].root(this.gameObject));
        this.dinoColliderComponent = dino.getComponent(_business_game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_5__["CollisionGameComponent"].name);
    }
    draw() {
        this.gameObject.text = 'HI: ' + Math.ceil(this.hiScore) + ' : ' + Math.ceil(this.score);
    }
    update() {
        this.score = this.score + this.counterSpeed * _business_common_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"].delta;
        if (this.dinoColliderComponent.collisions.length > 0) {
            this.score = 0;
        }
        if (this.score > this.hiScore) {
            this.hiScore = this.score;
        }
    }
    destroy() {
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], DinoScoreCounterComponent.prototype, "counterSpeed", void 0);


/***/ }),

/***/ "./src/app/_games/impossible-dino/components/ground-shifter-component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/_games/impossible-dino/components/ground-shifter-component.ts ***!
  \*******************************************************************************/
/*! exports provided: GroundShifterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundShifterComponent", function() { return GroundShifterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../business/game-components/core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../business/common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _business_common_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../business/common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _business_screen_game_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../business/screen/game-screen */ "./src/app/business/screen/game-screen.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../business/core/factory/game-object-factory */ "./src/app/business/core/factory/game-object-factory.ts");
/* harmony import */ var _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../business/core/factory/transform-factory */ "./src/app/business/core/factory/transform-factory.ts");
/* harmony import */ var _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../business/core/factory/component-factory */ "./src/app/business/core/factory/component-factory.ts");
/* harmony import */ var _business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component */ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts");
/* harmony import */ var _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../business/common/name-value-pair */ "./src/app/business/common/name-value-pair.ts");
/* harmony import */ var _business_core_game_object_collection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../business/core/game-object-collection */ "./src/app/business/core/game-object-collection.ts");












class GroundShifterComponent extends _business_game_components_core_base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = GroundShifterComponent.name;
        this.groundWidth = 550;
        this.groundObjects = [];
    }
    start() {
        this.createGround();
    }
    draw() {
    }
    update() {
        const shift = this.speed * _business_common_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"].delta;
        const resGroundObjects = [];
        for (let i = 0; i < this.groundObjects.length; i++) {
            if (!this.shiftGroundAndRemove(this.groundObjects[i], shift)) {
                resGroundObjects.push(this.groundObjects[i]);
            }
        }
        if (resGroundObjects.length === 0) {
            resGroundObjects.push(this.createGroundGameObject(this.groundWidth / 2));
        }
        while (resGroundObjects[resGroundObjects.length - 1].transform.toRect().right < _business_screen_game_screen__WEBPACK_IMPORTED_MODULE_4__["GameScreen"].getDefaultScreen().width) {
            resGroundObjects.push(this.createGroundGameObject(resGroundObjects[resGroundObjects.length - 1].transform.localPosition.x + this.groundWidth));
        }
        this.groundObjects = resGroundObjects;
    }
    destroy() {
    }
    getLastGroundObject() {
        return this.groundObjects[this.groundObjects.length - 1];
    }
    createGround() {
        const groundNumber = Math.ceil(_business_screen_game_screen__WEBPACK_IMPORTED_MODULE_4__["GameScreen"].getDefaultScreen().width / this.groundWidth);
        for (let i = 0; i < groundNumber; i++) {
            this.groundObjects.push(this.createGroundGameObject(this.groundWidth / 2 + this.groundWidth * i));
        }
    }
    createGroundGameObject(x) {
        return _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(this.gameObject, 'Ground', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createLocalTransform(this.gameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](x, 0), 550, 8, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_8__["ComponentFactory"].createComponent(_business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_9__["HtmlRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_10__["NameValuePair"]('backgroundImage', 'assets/games/impossibleDino/img/ground.png'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_10__["NameValuePair"]('cssStyle', '')
            ], true)
        ], true);
    }
    shiftGroundAndRemove(groundObject, shift) {
        const position = groundObject.transform.localPosition;
        const newPosition = new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](position.x - shift, position.y);
        const groundWidth = groundObject.transform.width;
        groundObject.transform.localPosition = newPosition;
        if (newPosition.x <= (0 - groundWidth / 2)) {
            _business_core_game_object_collection__WEBPACK_IMPORTED_MODULE_11__["GameObjectCollection"].remove(groundObject);
            return true;
        }
        return false;
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GroundShifterComponent.prototype, "speed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GroundShifterComponent.prototype, "margin", void 0);


/***/ }),

/***/ "./src/app/_games/impossible-dino/data/impossible-dino-data.ts":
/*!*********************************************************************!*\
  !*** ./src/app/_games/impossible-dino/data/impossible-dino-data.ts ***!
  \*********************************************************************/
/*! exports provided: ImpossibleDinoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpossibleDinoData", function() { return ImpossibleDinoData; });
/* harmony import */ var _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../business/core/factory/game-object-factory */ "./src/app/business/core/factory/game-object-factory.ts");
/* harmony import */ var _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../business/core/factory/transform-factory */ "./src/app/business/core/factory/transform-factory.ts");
/* harmony import */ var _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../business/common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../business/core/factory/component-factory */ "./src/app/business/core/factory/component-factory.ts");
/* harmony import */ var _business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component */ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts");
/* harmony import */ var _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../business/common/name-value-pair */ "./src/app/business/common/name-value-pair.ts");
/* harmony import */ var _components_cloud_shifter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cloud-shifter-component */ "./src/app/_games/impossible-dino/components/cloud-shifter-component.ts");
/* harmony import */ var _business_game_components_core_animate_game_component_animate_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../business/game-components/core/animate-game-component/animate-game-component */ "./src/app/business/game-components/core/animate-game-component/animate-game-component.ts");
/* harmony import */ var _components_ground_shifter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ground-shifter-component */ "./src/app/_games/impossible-dino/components/ground-shifter-component.ts");
/* harmony import */ var _components_dino_jumper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/dino-jumper-component */ "./src/app/_games/impossible-dino/components/dino-jumper-component.ts");
/* harmony import */ var _components_cacti_producer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/cacti-producer-component */ "./src/app/_games/impossible-dino/components/cacti-producer-component.ts");
/* harmony import */ var _business_game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../business/game-components/core/collision-game-component */ "./src/app/business/game-components/core/collision-game-component.ts");
/* harmony import */ var _business_common_rect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../business/common/rect */ "./src/app/business/common/rect.ts");
/* harmony import */ var _components_dino_clock_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/dino-clock-game-component */ "./src/app/_games/impossible-dino/components/dino-clock-game-component.ts");
/* harmony import */ var _components_dino_score_counter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/dino-score-counter-component */ "./src/app/_games/impossible-dino/components/dino-score-counter-component.ts");















class ImpossibleDinoData {
    static getData() {
        const rootGameObject = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__["GameObjectFactory"].createGameObject(null, 'root', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__["TransformFactory"].createGlobalTransform(null, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](0, 0), 0, 0, 0), [], true);
        /*const background = GameObjectFactory.createGameObject(
            rootGameObject,
            'Background',
            TransformFactory.createTransform(new Vector2(700, 400), 1024, 768, 0),
            [
                ComponentFactory.createComponent(HtmlRendererGameComponent, [
                    new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/oscilograph-background.png'),
                    new NameValuePair('cssStyle', ''),
                ], true),
                ComponentFactory.createComponent(GeometryComponent, [])
            ],
            true
        );*/
        const cloud = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__["GameObjectFactory"].createGameObject(rootGameObject, 'Cloud', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__["TransformFactory"].createGlobalTransform(rootGameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](400, 170), 46, 13, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_4__["HtmlRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('backgroundImage', 'assets/games/impossibleDino/img/cloud.png'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('cssStyle', ''),
            ], true),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_components_cloud_shifter_component__WEBPACK_IMPORTED_MODULE_6__["CloudShifterComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('speed', 75),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('margin', 100),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('skyHeight', 170)
            ])
        ], true);
        const cloud2 = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__["GameObjectFactory"].createGameObject(rootGameObject, 'Cloud2', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__["TransformFactory"].createGlobalTransform(rootGameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](500, 150), 46, 13, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_4__["HtmlRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('backgroundImage', 'assets/games/impossibleDino/img/cloud.png'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('cssStyle', '')
            ], true),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_components_cloud_shifter_component__WEBPACK_IMPORTED_MODULE_6__["CloudShifterComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('speed', 75),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('margin', 100),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('skyHeight', 170)
            ])
        ], true);
        const cloud3 = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__["GameObjectFactory"].createGameObject(rootGameObject, 'Cloud3', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__["TransformFactory"].createGlobalTransform(rootGameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](700, 130), 46, 13, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_4__["HtmlRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('backgroundImage', 'assets/games/impossibleDino/img/cloud.png'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('cssStyle', '')
            ], true),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_components_cloud_shifter_component__WEBPACK_IMPORTED_MODULE_6__["CloudShifterComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('speed', 75),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('margin', 100),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('skyHeight', 170)
            ])
        ], true);
        const groundHolder = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__["GameObjectFactory"].createGameObject(rootGameObject, 'GroundHolder', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__["TransformFactory"].createGlobalTransform(rootGameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](0, 269), 8, 8, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_components_ground_shifter_component__WEBPACK_IMPORTED_MODULE_8__["GroundShifterComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('speed', 200),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('margin', 100),
            ]),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_components_cacti_producer_component__WEBPACK_IMPORTED_MODULE_10__["CactiProducerComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('frequency', 1500),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('shiftIntervalFrom', 500),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('shiftIntervalTo', 1000)
            ], true)
        ], true);
        const dino = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__["GameObjectFactory"].createGameObject(groundHolder, 'Dino', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__["TransformFactory"].createLocalTransform(groundHolder.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](50, -19), 40, 43, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_4__["HtmlRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('backgroundImage', 'assets/games/impossibleDino/img/dino-step-run.png'),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('cssStyle', '')
            ], true),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_business_game_components_core_animate_game_component_animate_game_component__WEBPACK_IMPORTED_MODULE_7__["AnimateGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('slideWidth', 40),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('slideHeight', 43),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('slidesInARow', 2),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('slidesCount', 2),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('animationSpeed', 12)
            ]),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_components_dino_jumper_component__WEBPACK_IMPORTED_MODULE_9__["DinoJumperComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('durationOfJump', 0.32),
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('jumpHeight', 85),
            ]),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_business_game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_11__["CollisionGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('meshCollider', [new _business_common_rect__WEBPACK_IMPORTED_MODULE_12__["Rect"](20, 0, 20, 15), new _business_common_rect__WEBPACK_IMPORTED_MODULE_12__["Rect"](0, 15, 27, 20), new _business_common_rect__WEBPACK_IMPORTED_MODULE_12__["Rect"](10, 36, 14, 6)])
            ])
        ], true);
        const svgDinoClockRootObj = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__["GameObjectFactory"].createGameObject(rootGameObject, 'SvgDinoClockRootObj', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__["TransformFactory"].createGlobalTransform(rootGameObject.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](30, 30), 100, 100, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_components_dino_clock_game_component__WEBPACK_IMPORTED_MODULE_13__["DinoClockGameComponent"], [])
        ], true);
        const dinoScore = _business_core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_0__["GameObjectFactory"].createGameObject(svgDinoClockRootObj, 'dinoScore', _business_core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_1__["TransformFactory"].createLocalTransform(svgDinoClockRootObj.transform, new _business_common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](110, 0), 150, 20, 0), [
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_business_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_4__["HtmlRendererGameComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('cssStyle', 'font-family: \'Tangerine\', serif; font-size: 20px;')
            ], true),
            _business_core_factory_component_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"].createComponent(_components_dino_score_counter_component__WEBPACK_IMPORTED_MODULE_14__["DinoScoreCounterComponent"], [
                new _business_common_name_value_pair__WEBPACK_IMPORTED_MODULE_5__["NameValuePair"]('counterSpeed', 10)
            ])
        ], true);
        return rootGameObject;
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ui_app_root_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/app-root/app.component */ "./src/app/ui/app-root/app.component.ts");
/* harmony import */ var _ui_html_renderer_game_object_game_object_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/html-renderer/game-object/game-object.component */ "./src/app/ui/html-renderer/game-object/game-object.component.ts");
/* harmony import */ var _ui_html_renderer_html_renderer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/html-renderer/html-renderer.component */ "./src/app/ui/html-renderer/html-renderer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ui_svg_renderer_svg_renderer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/svg-renderer/svg-renderer.component */ "./src/app/ui/svg-renderer/svg-renderer.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _ui_app_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _ui_html_renderer_game_object_game_object_component__WEBPACK_IMPORTED_MODULE_5__["GameObjectComponent"],
            _ui_html_renderer_html_renderer_component__WEBPACK_IMPORTED_MODULE_6__["HtmlRendererComponent"],
            _ui_svg_renderer_svg_renderer_component__WEBPACK_IMPORTED_MODULE_8__["SvgRendererComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_ui_app_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/business/common/angle.ts":
/*!******************************************!*\
  !*** ./src/app/business/common/angle.ts ***!
  \******************************************/
/*! exports provided: Angle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angle", function() { return Angle; });
/* harmony import */ var _v_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v-math */ "./src/app/business/common/v-math.ts");

class Angle {
    constructor(value) {
        this.value = value;
    }
    static rand(from = 0, to = 360) {
        return _v_math__WEBPACK_IMPORTED_MODULE_0__["VMath"].randIntMaxIncluded(from, to);
    }
    get normalized() {
        return this.value - Math.floor(this.value / 360) * 360;
    }
    rotateTo(toAngle, step) {
        if (this.isEqualTo(toAngle)) {
            console.log('EQ');
            this.value = toAngle.value;
            return true;
        }
        let destAngle = toAngle.normalized;
        let fromAngle = this.normalized;
        if (destAngle < fromAngle) {
            destAngle += 360;
        }
        const deltaCWAngle = destAngle - fromAngle;
        if (deltaCWAngle <= 180) { // Move Clock Wise
            // console.log('CW');
            const resAngle = new Angle(this.value + step).normalized;
            if (resAngle > destAngle) {
                // console.log(`CW-SET toAngle: ${JSON.stringify(toAngle)} this.value: ${this.value}`);
                this.value = toAngle.normalized;
                return true;
            }
            this.value += step;
            return false;
        }
        // console.log('CCW');
        fromAngle += 360;
        const res = new Angle(fromAngle - step);
        if (res.value < toAngle.normalized) {
            // console.log(`CCW-SET ${JSON.stringify(toAngle)} this.value: ${this.value}`);
            this.value = toAngle.normalized;
            return true;
        }
        this.value = res.normalized;
        return false;
    }
    isEqualTo(angle) {
        return Math.round(this.value * 100) === Math.round(angle.value * 100);
    }
}
Angle.ctorParameters = () => [
    { type: Number }
];


/***/ }),

/***/ "./src/app/business/common/guid.ts":
/*!*****************************************!*\
  !*** ./src/app/business/common/guid.ts ***!
  \*****************************************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

class Guid {
    static create() {
        return uuid__WEBPACK_IMPORTED_MODULE_0__["v4"]();
    }
}


/***/ }),

/***/ "./src/app/business/common/logger.ts":
/*!*******************************************!*\
  !*** ./src/app/business/common/logger.ts ***!
  \*******************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
class Logger {
    static log(message) {
        console.log(message);
    }
    static warn(message) {
        console.warn(message);
    }
    static error(message) {
        console.error(message);
    }
}


/***/ }),

/***/ "./src/app/business/common/name-value-pair.ts":
/*!****************************************************!*\
  !*** ./src/app/business/common/name-value-pair.ts ***!
  \****************************************************/
/*! exports provided: NameValuePair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameValuePair", function() { return NameValuePair; });
class NameValuePair {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
NameValuePair.ctorParameters = () => [
    { type: String },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/business/common/rect.ts":
/*!*****************************************!*\
  !*** ./src/app/business/common/rect.ts ***!
  \*****************************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);

var Rect_1;

let Rect = Rect_1 = class Rect {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }
    get right() {
        return this.left + this.width;
    }
    set right(value) {
        this.width = value - this.left;
    }
    get bottom() {
        return this.top + this.height;
    }
    set bottom(value) {
        this.height = value - this.top;
    }
    isInside(point) {
        return this.isInsideXY(point.x, point.y);
    }
    isInsideXY(x, y) {
        return (x >= this.left) && (x <= this.right) && (y >= this.top) && (y <= this.bottom);
    }
    intersects(rect) {
        return this.isInsideXY(rect.left, rect.top) ||
            this.isInsideXY(rect.right, rect.top) ||
            this.isInsideXY(rect.left, rect.bottom) ||
            this.isInsideXY(rect.right, rect.bottom) ||
            rect.isInsideXY(this.left, this.top) ||
            rect.isInsideXY(this.right, this.top) ||
            rect.isInsideXY(this.left, this.bottom) ||
            rect.isInsideXY(this.right, this.bottom);
    }
    shift(x, y) {
        this.left = this.left + x;
        this.top = this.top + y;
        return this;
    }
    clone() {
        return new Rect_1(this.left, this.top, this.width, this.height);
    }
};
Rect.ctorParameters = () => [
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Rect.prototype, "left", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Rect.prototype, "top", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Rect.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Rect.prototype, "height", void 0);
Rect = Rect_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number, Number, Number, Number])
], Rect);



/***/ }),

/***/ "./src/app/business/common/timer.ts":
/*!******************************************!*\
  !*** ./src/app/business/common/timer.ts ***!
  \******************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/app/business/common/logger.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class Timer {
    static initialize() {
        Timer.initialTimerValue = Timer.getTime();
        // Timer.lastTimerValue = Timer.initialTimerValue;
        // Timer.callTime = Timer.initialTimerValue;
        Timer.start();
        setInterval(() => { Timer.intervalCallback(); }, Timer.intervalValue);
    }
    static get started() {
        return Timer.isStarted;
    }
    static get divider() {
        return Timer.dividerValue;
    }
    static set divider(value) {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) || value <= 0) {
            _logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].warn(`Timer's divider value is invalid: ${value}`);
            return;
        }
        Timer.dividerValue = value;
    }
    static get timeSinceStart() {
        return Timer.callTime - Timer.initialTimerValue;
    }
    // delta have to be in secs.
    static get delta() {
        return (Timer.callTime - Timer.lastTimerValue) / 1000;
    }
    static start() {
        Timer.isStarted = true;
        Timer.lastTimerValue = Timer.getTime();
        Timer.callTime = Timer.initialTimerValue;
    }
    static stop() {
        Timer.isStarted = false;
    }
    static getTime() {
        return Date.now();
    }
    static intervalCallback() {
        Timer.callsNumber++;
        if (Timer.callTime % Timer.divider !== 0) {
            return;
        }
        Timer.lastTimerValue = Timer.callTime;
        Timer.callTime = Timer.getTime();
        this.timerEvent.next();
    }
}
Timer.timerEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
Timer.firsTimerIsActive = true;
Timer.secondTimerIsActive = true;
Timer.thirdTimerIsActive = true;
Timer.isStarted = false;
Timer.dividerValue = 1;
Timer.intervalValue = 16;
Timer.initialTimerValue = 0;
Timer.lastTimerValue = 0;
Timer.callsNumber = 0;
Timer.callTime = 0;
Timer.initialize();


/***/ }),

/***/ "./src/app/business/common/v-math.ts":
/*!*******************************************!*\
  !*** ./src/app/business/common/v-math.ts ***!
  \*******************************************/
/*! exports provided: VMath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMath", function() { return VMath; });
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector2 */ "./src/app/business/common/vector2.ts");

// http://gamedevelopertips.com/vector-in-game-development/
class VMath {
    static multiply(vector, scalar) {
        return new _vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](vector.x * scalar, vector.y * scalar);
    }
    static add(vector, vector1) {
        return new _vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](vector.x + vector1.x, vector.y + vector1.y);
    }
    // https://matthew-brett.github.io/teaching/rotation_2d.html
    static rotate(vector, angleDegrees) {
        // x2=cos(β)x1−sin(β)y1
        // y2=sin(β)x1+cos(β)y1
        const angle = VMath.toRad(angleDegrees);
        const x2 = vector.x * Math.cos(angle) - vector.y * Math.sin(angle);
        const y2 = vector.x * Math.sin(angle) + vector.y * Math.cos(angle);
        return new _vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](x2, y2);
    }
    static toRad(angleDegrees) {
        return angleDegrees * Math.PI / 180;
    }
    static randIntMaxIncluded(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static randIntMaxExcluded(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


/***/ }),

/***/ "./src/app/business/common/vector2.ts":
/*!********************************************!*\
  !*** ./src/app/business/common/vector2.ts ***!
  \********************************************/
/*! exports provided: Vector2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);

var Vector2_1;

let Vector2 = Vector2_1 = class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static get zero() {
        return new Vector2_1(0, 0);
    }
    static get one() {
        return new Vector2_1(1, 1);
    }
    subtract(value) {
        return new Vector2_1(this.x - value.x, this.y - value.y);
    }
    add(value) {
        return new Vector2_1(this.x + value.x, this.y + value.y);
    }
    clone() {
        return new Vector2_1(this.x, this.y);
    }
    equalTo(vector) {
        return this.x === vector.x && this.y === vector.y;
    }
};
Vector2.ctorParameters = () => [
    { type: Number },
    { type: Number }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Vector2.prototype, "x", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Vector2.prototype, "y", void 0);
Vector2 = Vector2_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number, Number])
], Vector2);



/***/ }),

/***/ "./src/app/business/core/factory/component-factory.ts":
/*!************************************************************!*\
  !*** ./src/app/business/core/factory/component-factory.ts ***!
  \************************************************************/
/*! exports provided: ComponentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFactory", function() { return ComponentFactory; });
class ComponentFactory {
    static createComponent(clazz, params, active = true) {
        const component = new clazz();
        (params || []).forEach((p) => {
            component[p.name] = p.value;
        });
        component.active = active;
        return component;
    }
}


/***/ }),

/***/ "./src/app/business/core/factory/game-object-factory.ts":
/*!**************************************************************!*\
  !*** ./src/app/business/core/factory/game-object-factory.ts ***!
  \**************************************************************/
/*! exports provided: GameObjectFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObjectFactory", function() { return GameObjectFactory; });
/* harmony import */ var _game_structure_game_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game-structure/game-object */ "./src/app/business/game-structure/game-object.ts");
/* harmony import */ var _game_object_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-object-collection */ "./src/app/business/core/game-object-collection.ts");


class GameObjectFactory {
    static createGameObject(parent, name, transform, components, active, text = null) {
        const gameObject = new _game_structure_game_object__WEBPACK_IMPORTED_MODULE_0__["GameObject"]();
        gameObject.name = name;
        gameObject.transform = transform;
        components.forEach((c) => {
            if (c.gameObject == null) {
                c.gameObject = gameObject;
            }
        });
        gameObject.components = components;
        gameObject.transform.gameObject = gameObject;
        gameObject.active = active;
        gameObject.paused = false;
        gameObject.text = text;
        if (parent != null) {
            _game_object_collection__WEBPACK_IMPORTED_MODULE_1__["GameObjectCollection"].insert(gameObject, parent);
        }
        return gameObject;
    }
}


/***/ }),

/***/ "./src/app/business/core/factory/transform-factory.ts":
/*!************************************************************!*\
  !*** ./src/app/business/core/factory/transform-factory.ts ***!
  \************************************************************/
/*! exports provided: TransformFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformFactory", function() { return TransformFactory; });
/* harmony import */ var _game_structure_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game-structure/transform */ "./src/app/business/game-structure/transform.ts");

class TransformFactory {
    static createGlobalTransform(parent, globalPosition, width, height, rotation) {
        return _game_structure_transform__WEBPACK_IMPORTED_MODULE_0__["Transform"].instantiateGlobal(parent, globalPosition, rotation, width, height);
    }
    static createLocalTransform(parent, localPosition, width, height, rotation) {
        return _game_structure_transform__WEBPACK_IMPORTED_MODULE_0__["Transform"].instantiateLocal(parent, localPosition, rotation, width, height);
    }
}


/***/ }),

/***/ "./src/app/business/core/game-object-collection.ts":
/*!*********************************************************!*\
  !*** ./src/app/business/core/game-object-collection.ts ***!
  \*********************************************************/
/*! exports provided: GameObjectCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObjectCollection", function() { return GameObjectCollection; });
class GameObjectCollection {
    static root(gameObject) {
        let root = gameObject;
        while (root.parent != null) {
            root = root.parent;
        }
        return root;
    }
    static remove(gameObject) {
        if (gameObject.parent == null) {
            return;
        }
        const index = gameObject.parent.children.indexOf(gameObject);
        if (index === -1) {
            console.warn(`GameObjectCollection.remove: Object's not found`);
            return;
        }
        gameObject.parent.children.splice(index, 1);
        gameObject.parent = null;
        gameObject.destroy();
    }
    static removeChildren(gameObject) {
        const children = gameObject.children.slice();
        children.forEach((child) => {
            GameObjectCollection.remove(child);
        });
    }
    static switch(objectA, objectB) {
        if (objectA.parent !== objectB.parent) {
            console.warn(`GameObjectCollection.switch: Different parents`);
        }
        const parent = objectA.parent;
        const indexA = parent.children.indexOf(objectA);
        const indexB = parent.children.indexOf(objectB);
        if (indexA === -1 || indexB === -1) {
            console.warn(`GameObjectCollection.switch: Object's not found, objectA: ${indexA}, objectB: ${indexB}`);
            return;
        }
        parent.children.splice(indexA, 1, objectB);
        parent.children.splice(indexB, 1, objectA);
    }
    static insert(gameObject, parent, insertAfter) {
        GameObjectCollection.remove(gameObject);
        if (parent == null) {
            parent = GameObjectCollection.root(gameObject);
        }
        gameObject.parent = parent;
        const index = insertAfter == null ? -1 : parent.children.indexOf(gameObject);
        parent.children.splice(index === -1 ? parent.children.length : index, 0, gameObject);
        gameObject.start();
    }
    static findDescendantByName(name, gameObject) {
        for (const child of gameObject.children) {
            if (child.name === name) {
                return child;
            }
            const grand = GameObjectCollection.findDescendantByName(name, child);
            if (grand != null) {
                return grand;
            }
        }
        return null;
    }
    static getAllComponents(componentName, gameObject) {
        let result = [];
        const component = gameObject.getComponent(componentName);
        if (component != null) {
            result.push(component);
        }
        for (let i = 0; i < gameObject.children.length; i++) {
            const childComponents = GameObjectCollection.getAllComponents(componentName, gameObject.children[i]);
            result = result.concat(childComponents);
        }
        return result;
    }
}


/***/ }),

/***/ "./src/app/business/core/http/rest-client.ts":
/*!***************************************************!*\
  !*** ./src/app/business/core/http/rest-client.ts ***!
  \***************************************************/
/*! exports provided: RestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return RestClient; });
class RestClient {
}


/***/ }),

/***/ "./src/app/business/core/transform-calculate-system.ts":
/*!*************************************************************!*\
  !*** ./src/app/business/core/transform-calculate-system.ts ***!
  \*************************************************************/
/*! exports provided: TransformCalculateSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformCalculateSystem", function() { return TransformCalculateSystem; });
/* harmony import */ var _common_v_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/v-math */ "./src/app/business/common/v-math.ts");

class TransformCalculateSystem {
    constructor() {
        this.rootGameObjects = new Set();
        this.objectsToUpdate = new Set();
    }
    static instance() {
        if (this.instanceRef == null) {
            this.instanceRef = new TransformCalculateSystem();
        }
        return this.instanceRef;
    }
    registerForUpdate(transform) {
        if (this.objectsToUpdate.has(transform.gameObject)) {
            return;
        }
        let root = transform.gameObject;
        while (root != null) {
            this.objectsToUpdate.add(root);
            if (root.parent == null) {
                this.rootGameObjects.add(root);
            }
            root = root.parent;
        }
    }
    update() {
        Array.from(this.rootGameObjects.values()).forEach((gameObject) => {
            gameObject.transform.rotation = gameObject.transform.localRotation;
            gameObject.transform.position = gameObject.transform.localPosition;
            this.processChildren(gameObject);
        });
        this.objectsToUpdate.clear();
        this.rootGameObjects.clear();
    }
    processChildren(gameObject) {
        const currentTransform = gameObject.transform;
        gameObject.children.forEach((ch) => {
            const newLocalPosition = _common_v_math__WEBPACK_IMPORTED_MODULE_0__["VMath"].rotate(ch.transform.localPosition, currentTransform.rotation);
            ch.transform.position = currentTransform.position.add(newLocalPosition);
            ch.transform.rotation = ch.transform.localRotation + currentTransform.rotation;
            this.processChildren(ch);
        });
    }
}


/***/ }),

/***/ "./src/app/business/events/event-message.ts":
/*!**************************************************!*\
  !*** ./src/app/business/events/event-message.ts ***!
  \**************************************************/
/*! exports provided: EventMessageType, EventMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventMessageType", function() { return EventMessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventMessage", function() { return EventMessage; });
var EventMessageType;
(function (EventMessageType) {
    EventMessageType["Empty"] = "Empty";
    EventMessageType["GameStarted"] = "GameStarted";
    EventMessageType["GameUpdate"] = "GameUpdate";
})(EventMessageType || (EventMessageType = {}));
class EventMessage {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
    static empty() {
        return new EventMessage(EventMessageType.Empty, null);
    }
}
EventMessage.ctorParameters = () => [
    { type: undefined },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/business/game-components/core/animate-game-component/animate-game-component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/business/game-components/core/animate-game-component/animate-game-component.ts ***!
  \************************************************************************************************/
/*! exports provided: AnimateGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateGameComponent", function() { return AnimateGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html-renderer-game-component/html-renderer-game-component */ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts");
/* harmony import */ var _common_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/timer */ "./src/app/business/common/timer.ts");

var AnimateGameComponent_1;




let AnimateGameComponent = AnimateGameComponent_1 = class AnimateGameComponent extends _base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = AnimateGameComponent_1.name;
        this.slide = 0;
        this.xScale = 1;
        this.yScale = 1;
        this.baseCss = '';
        this.backPos = '0 0;';
        this.counter = 0;
        this.paused = false;
    }
    start() {
        const renderer = this.gameObject.getComponent(_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_3__["HtmlRendererGameComponent"].name);
        if (renderer == null) {
            return;
        }
        this.xScale = this.slideWidth / this.gameObject.transform.width;
        this.yScale = this.slideHeight / this.gameObject.transform.height;
        const backgroundXSize = ((this.slideWidth * this.slidesInARow) / this.xScale);
        const backgroundYSize = ((Math.ceil(this.slidesCount / this.slidesInARow) * this.slideHeight) / this.yScale);
        this.baseCss =
            'position: absolute; ' +
                'background-size:' + backgroundXSize + 'px ' + backgroundYSize + 'px;';
    }
    draw() {
        const renderer = this.gameObject.getComponent(_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_3__["HtmlRendererGameComponent"].name);
        if (renderer == null) {
            return;
        }
        renderer.addAdditionalCss(this.baseCss + ' background-position:' + this.backPos);
    }
    update() {
        if (this.paused === true) {
            return;
        }
        const timeToChange = 1 / this.animationSpeed;
        this.counter += _common_timer__WEBPACK_IMPORTED_MODULE_4__["Timer"].delta;
        if (this.counter < timeToChange) {
            return;
        }
        this.counter = 0;
        if (this.slide >= this.slidesCount) {
            if (this.animationFinished != null) {
                this.animationFinished();
            }
            this.slide = 0;
        }
        const y = Math.floor(this.slide / this.slidesInARow);
        const x = this.slide - (y * this.slidesInARow);
        const xShift = (x * (this.slideWidth / this.xScale));
        const yShift = (y * (this.slideHeight / this.yScale));
        this.backPos = '-' + xShift + 'px -' + yShift + 'px;';
        this.slide++;
    }
    destroy() {
    }
    isPaused() {
        return this.paused;
    }
    PauseAnimation() {
        this.paused = true;
    }
    ResumeAnimation() {
        this.paused = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AnimateGameComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AnimateGameComponent.prototype, "pathToTexture", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnimateGameComponent.prototype, "slideWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnimateGameComponent.prototype, "slideHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnimateGameComponent.prototype, "slidesInARow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnimateGameComponent.prototype, "slidesCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnimateGameComponent.prototype, "animationSpeed", void 0);
AnimateGameComponent = AnimateGameComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Exclude"])()
], AnimateGameComponent);



/***/ }),

/***/ "./src/app/business/game-components/core/base/components-registry.ts":
/*!***************************************************************************!*\
  !*** ./src/app/business/game-components/core/base/components-registry.ts ***!
  \***************************************************************************/
/*! exports provided: ComponentsRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRegistry", function() { return ComponentsRegistry; });
/* harmony import */ var _user_simple_move_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user/simple-move-game-component */ "./src/app/business/game-components/user/simple-move-game-component.ts");
/* harmony import */ var _html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-renderer-game-component/html-renderer-game-component */ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts");
/* harmony import */ var _user_shift_right_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/shift-right.component */ "./src/app/business/game-components/user/shift-right.component.ts");
/* harmony import */ var _user_reset_to_left_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/reset-to-left.component */ "./src/app/business/game-components/user/reset-to-left.component.ts");
/* harmony import */ var _user_rotate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/rotate.component */ "./src/app/business/game-components/user/rotate.component.ts");
/* harmony import */ var _user_show_hide_game_object_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/show-hide-game-object-component */ "./src/app/business/game-components/user/show-hide-game-object-component.ts");
/* harmony import */ var _user_test_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/test-one-component */ "./src/app/business/game-components/user/test-one-component.ts");







class ComponentsRegistry {
}
ComponentsRegistry.registry = new Map();
ComponentsRegistry.registry.set(_user_shift_right_component__WEBPACK_IMPORTED_MODULE_2__["ShiftRightComponent"].name, () => _user_shift_right_component__WEBPACK_IMPORTED_MODULE_2__["ShiftRightComponent"]);
ComponentsRegistry.registry.set('SimpleMoveGameComponent', () => _user_simple_move_game_component__WEBPACK_IMPORTED_MODULE_0__["SimpleMoveGameComponent"]);
ComponentsRegistry.registry.set('HtmlRendererGameComponent', () => _html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_1__["HtmlRendererGameComponent"]);
ComponentsRegistry.registry.set('ResetToLeftComponent', () => _user_reset_to_left_component__WEBPACK_IMPORTED_MODULE_3__["ResetToLeftComponent"]);
ComponentsRegistry.registry.set('RotateComponent', () => _user_rotate_component__WEBPACK_IMPORTED_MODULE_4__["RotateComponent"]);
ComponentsRegistry.registry.set('ShowHideGameObjectComponent', () => _user_show_hide_game_object_component__WEBPACK_IMPORTED_MODULE_5__["ShowHideGameObjectComponent"]);
ComponentsRegistry.registry.set('TestOneComponent', () => _user_test_one_component__WEBPACK_IMPORTED_MODULE_6__["TestOneComponent"]);


/***/ }),

/***/ "./src/app/business/game-components/core/base/game-component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/business/game-components/core/base/game-component.ts ***!
  \**********************************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);


let GameComponent = class GameComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], GameComponent.prototype, "active", void 0);
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])()
], GameComponent);



/***/ }),

/***/ "./src/app/business/game-components/core/collision-game-component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/business/game-components/core/collision-game-component.ts ***!
  \***************************************************************************/
/*! exports provided: CollisionGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionGameComponent", function() { return CollisionGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-renderer-game-component/html-renderer-game-component */ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts");

var CollisionGameComponent_1;



let CollisionGameComponent = CollisionGameComponent_1 = class CollisionGameComponent extends _base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = CollisionGameComponent_1.name;
        this.meshCollider = [];
        this.collisions = [];
    }
    start() {
    }
    draw() {
    }
    update() {
        if (this.collisions.length > 0) {
            const renderer = this.gameObject.getComponent(_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_3__["HtmlRendererGameComponent"].name);
            if (renderer != null) {
                renderer.addAdditionalCss(' background-color: #F00');
            }
        }
    }
    destroy() {
    }
    collideWith(component) {
        const shiftX = this.gameObject.transform.position.x - this.gameObject.transform.width / 2;
        const shiftY = this.gameObject.transform.position.y - this.gameObject.transform.height / 2;
        const shiftComponentX = component.gameObject.transform.position.x - component.gameObject.transform.width / 2;
        const shiftComponentY = component.gameObject.transform.position.y - component.gameObject.transform.height / 2;
        for (let i = 0; i < this.meshCollider.length; i++) {
            const firstRect = this.meshCollider[i];
            const firstRectGlobal = firstRect.clone().shift(shiftX, shiftY);
            for (let p = 0; p < component.meshCollider.length; p++) {
                const secondRect = component.meshCollider[p];
                const secondRectGlobal = secondRect.clone().shift(shiftComponentX, shiftComponentY);
                if (firstRectGlobal.intersects(secondRectGlobal)) {
                    this.collisions.push(component);
                    component.collisions.push(this);
                    return true;
                }
            }
        }
        return false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CollisionGameComponent.prototype, "meshCollider", void 0);
CollisionGameComponent = CollisionGameComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Exclude"])()
], CollisionGameComponent);



/***/ }),

/***/ "./src/app/business/game-components/core/html-renderer-game-component/game-object-render-info.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/business/game-components/core/html-renderer-game-component/game-object-render-info.ts ***!
  \*******************************************************************************************************/
/*! exports provided: GameObjectRenderInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObjectRenderInfo", function() { return GameObjectRenderInfo; });
/* harmony import */ var _common_guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/guid */ "./src/app/business/common/guid.ts");

class GameObjectRenderInfo {
    constructor() {
        this.id = null;
        this.left = null;
        this.top = null;
        this.width = null;
        this.height = null;
        this.rotation = null;
        this.backgroundImage = null;
        this.text = null;
        this.cssStyle = null;
    }
    static fromGameObject(gameObject) {
        return {
            id: _common_guid__WEBPACK_IMPORTED_MODULE_0__["Guid"].create(),
            left: gameObject.transform.position.x,
            top: gameObject.transform.position.y,
            width: gameObject.transform.width,
            height: gameObject.transform.height,
            rotation: gameObject.transform.rotation,
            backgroundImage: null,
            text: null,
            cssStyle: null
        };
    }
}


/***/ }),

/***/ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts ***!
  \************************************************************************************************************/
/*! exports provided: HtmlRendererGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlRendererGameComponent", function() { return HtmlRendererGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _game_object_render_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-object-render-info */ "./src/app/business/game-components/core/html-renderer-game-component/game-object-render-info.ts");

var HtmlRendererGameComponent_1;



let HtmlRendererGameComponent = HtmlRendererGameComponent_1 = class HtmlRendererGameComponent extends _base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = HtmlRendererGameComponent_1.name;
        this.additionalCss = '';
    }
    start() {
        this.renderInfo = _game_object_render_info__WEBPACK_IMPORTED_MODULE_3__["GameObjectRenderInfo"].fromGameObject(this.gameObject);
        // todo this is a pre-load of the images, but it should be moved into the initial game loading procedure with progress bar.
        if (this.backgroundImage != null) {
            this.image = new Image();
            this.image.src = this.backgroundImage;
        }
    }
    draw() {
        this.renderInfo.height = this.gameObject.transform.height;
        this.renderInfo.width = this.gameObject.transform.width;
        this.renderInfo.left = this.gameObject.transform.position.x - (this.gameObject.transform.width / 2);
        this.renderInfo.top = this.gameObject.transform.position.y - (this.gameObject.transform.height / 2);
        this.renderInfo.rotation = this.gameObject.transform.rotation;
        this.renderInfo.backgroundImage = this.backgroundImage != null ? 'url("' + this.backgroundImage + '")' : null;
        this.renderInfo.text = this.gameObject.text;
        this.renderInfo.cssStyle = this.cssStyle + ' ' + this.additionalCss;
        this.additionalCss = ''; // cleanUp;
    }
    update() {
    }
    destroy() {
    }
    addAdditionalCss(css) {
        this.additionalCss += css;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HtmlRendererGameComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HtmlRendererGameComponent.prototype, "backgroundImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HtmlRendererGameComponent.prototype, "cssStyle", void 0);
HtmlRendererGameComponent = HtmlRendererGameComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Exclude"])()
], HtmlRendererGameComponent);



/***/ }),

/***/ "./src/app/business/game-components/svg-renderer-game-component/svg-element-type.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/business/game-components/svg-renderer-game-component/svg-element-type.ts ***!
  \******************************************************************************************/
/*! exports provided: SvgElementType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgElementType", function() { return SvgElementType; });
var SvgElementType;
(function (SvgElementType) {
    SvgElementType["Line"] = "Line";
    SvgElementType["Circle"] = "Circle";
    SvgElementType["Rect"] = "Rect";
    SvgElementType["Path"] = "Path";
})(SvgElementType || (SvgElementType = {}));


/***/ }),

/***/ "./src/app/business/game-components/svg-renderer-game-component/svg-path-element.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/business/game-components/svg-renderer-game-component/svg-path-element.ts ***!
  \******************************************************************************************/
/*! exports provided: SvgPathElementType, SvgPathElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgPathElementType", function() { return SvgPathElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgPathElement", function() { return SvgPathElement; });
var SvgPathElementType;
(function (SvgPathElementType) {
    SvgPathElementType["MoveTo"] = "M";
    SvgPathElementType["MoveToShift"] = "m";
    SvgPathElementType["LineTo"] = "L";
    SvgPathElementType["CubicBezierCurve"] = "C";
    SvgPathElementType["QuadraticBezierCurve"] = "Q";
    SvgPathElementType["EllipticalArcCurve"] = "A";
    SvgPathElementType["ClosePath"] = "Z";
})(SvgPathElementType || (SvgPathElementType = {}));
class SvgPathElement {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }
    toString(shiftX = 0, shiftY = 0) {
        switch (this.type) {
            case SvgPathElementType.MoveTo:
                return `M ${this.x + shiftX},${this.y + shiftY}`;
            case SvgPathElementType.MoveToShift:
                return `m ${this.x + shiftX},${this.y + shiftY}`;
            case SvgPathElementType.LineTo:
                return `L ${this.x + shiftX},${this.y + shiftY}`;
            default:
                // implement all types https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
                throw new Error('Path type is not implemented.');
        }
    }
}
SvgPathElement.ctorParameters = () => [
    { type: undefined },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/business/game-components/svg-renderer-game-component/svg-renderer-game-component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/business/game-components/svg-renderer-game-component/svg-renderer-game-component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SvgRendererGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgRendererGameComponent", function() { return SvgRendererGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _svg_element_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-element-type */ "./src/app/business/game-components/svg-renderer-game-component/svg-element-type.ts");
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/vector2 */ "./src/app/business/common/vector2.ts");

var SvgRendererGameComponent_1;




let SvgRendererGameComponent = SvgRendererGameComponent_1 = class SvgRendererGameComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = SvgRendererGameComponent_1.name;
        this.stroke = '#000';
        this.fill = 'transparent';
        this.strokeWidth = 1;
        this.strokeDasharray = '0';
        this.pathElements = [];
    }
    start() {
    }
    draw() {
        switch (this.type) {
            case _svg_element_type__WEBPACK_IMPORTED_MODULE_3__["SvgElementType"].Line:
                const from = this.toGlobal(this.x, this.y);
                const to = this.toGlobal(this.x1, this.y1);
                this.svgElement = `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" ${this.commonAttributes()}/>`;
                break;
            case _svg_element_type__WEBPACK_IMPORTED_MODULE_3__["SvgElementType"].Circle:
                const cFrom = this.toGlobal(this.x, this.y);
                this.svgElement = `<Circle cx="${cFrom.x}" cy="${cFrom.y}" r="${this.r}" ${this.commonAttributes()}/>`;
                break;
            case _svg_element_type__WEBPACK_IMPORTED_MODULE_3__["SvgElementType"].Rect:
                const rFrom = this.toGlobal(this.x, this.y);
                this.svgElement = `<Rect x="${rFrom.x}" y="${rFrom.y}"
									width="${this.gameObject.transform.width} height="${this.gameObject.transform.height}"
									${this.commonAttributes()}/>`;
                break;
            case _svg_element_type__WEBPACK_IMPORTED_MODULE_3__["SvgElementType"].Path:
                this.svgElement = `<Path d="${this.getPath()}" ${this.commonAttributes()}/>`;
                break;
        }
    }
    update() {
    }
    destroy() {
    }
    toGlobal(x, y) {
        const globalPosition = this.gameObject.transform.position;
        return new _common_vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](globalPosition.x + x, globalPosition.y + y);
    }
    rotateString() {
        const globalPosition = this.gameObject.transform.position;
        return `${this.gameObject.transform.rotation} ${globalPosition.x} ${globalPosition.y}`;
    }
    commonAttributes() {
        return `stroke="${this.stroke}" fill="${this.fill}"
									stroke-width="${this.strokeWidth}" stroke-dasharray='${this.strokeDasharray}'
									transform="rotate(${this.rotateString()})"`;
    }
    getPath() {
        const globalPosition = this.gameObject.transform.position;
        return this.pathElements.map((element) => element.toString(globalPosition.x, globalPosition.y)).join(' ');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SvgRendererGameComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SvgRendererGameComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SvgRendererGameComponent.prototype, "x", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SvgRendererGameComponent.prototype, "y", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SvgRendererGameComponent.prototype, "x1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SvgRendererGameComponent.prototype, "y1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SvgRendererGameComponent.prototype, "r", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SvgRendererGameComponent.prototype, "stroke", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SvgRendererGameComponent.prototype, "fill", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SvgRendererGameComponent.prototype, "strokeWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SvgRendererGameComponent.prototype, "strokeDasharray", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SvgRendererGameComponent.prototype, "pathElements", void 0);
SvgRendererGameComponent = SvgRendererGameComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])()
], SvgRendererGameComponent);



/***/ }),

/***/ "./src/app/business/game-components/user/reset-to-left.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/business/game-components/user/reset-to-left.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResetToLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetToLeftComponent", function() { return ResetToLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/vector2 */ "./src/app/business/common/vector2.ts");

var ResetToLeftComponent_1;



let ResetToLeftComponent = ResetToLeftComponent_1 = class ResetToLeftComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = ResetToLeftComponent_1.name;
    }
    start() {
    }
    draw() {
    }
    update() {
        if (this.gameObject.transform.position.x > 1920) {
            this.gameObject.transform.localPosition = new _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](-100, this.gameObject.transform.localPosition.y);
        }
    }
    destroy() {
    }
};
ResetToLeftComponent = ResetToLeftComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])()
], ResetToLeftComponent);



/***/ }),

/***/ "./src/app/business/game-components/user/rotate.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/business/game-components/user/rotate.component.ts ***!
  \*******************************************************************/
/*! exports provided: RotateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateComponent", function() { return RotateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _common_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _common_v_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/v-math */ "./src/app/business/common/v-math.ts");

var RotateComponent_1;




let RotateComponent = RotateComponent_1 = class RotateComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = RotateComponent_1.name;
        this.rotation = 90;
    }
    start() {
    }
    draw() {
    }
    update() {
        const angle = this.rotation * _common_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"].delta;
        this.gameObject.transform.localRotation += angle;
        this.gameObject.transform.localPosition = _common_v_math__WEBPACK_IMPORTED_MODULE_4__["VMath"].rotate(this.gameObject.transform.localPosition, angle);
    }
    destroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RotateComponent.prototype, "rotation", void 0);
RotateComponent = RotateComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])()
], RotateComponent);



/***/ }),

/***/ "./src/app/business/game-components/user/shift-right.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/business/game-components/user/shift-right.component.ts ***!
  \************************************************************************/
/*! exports provided: ShiftRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftRightComponent", function() { return ShiftRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _common_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/vector2 */ "./src/app/business/common/vector2.ts");

var ShiftRightComponent_1;




let ShiftRightComponent = ShiftRightComponent_1 = class ShiftRightComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = ShiftRightComponent_1.name;
        this.speed = null;
    }
    start() {
    }
    draw() {
    }
    update() {
        const x = this.gameObject.transform.localPosition.x + this.speed * _common_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"].delta;
        const y = this.gameObject.transform.localPosition.y;
        this.gameObject.transform.localPosition = new _common_vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](x, y);
    }
    destroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ShiftRightComponent.prototype, "speed", void 0);
ShiftRightComponent = ShiftRightComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])()
], ShiftRightComponent);



/***/ }),

/***/ "./src/app/business/game-components/user/show-hide-game-object-component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/business/game-components/user/show-hide-game-object-component.ts ***!
  \**********************************************************************************/
/*! exports provided: ShowHideGameObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideGameObjectComponent", function() { return ShowHideGameObjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../input/input */ "./src/app/business/input/input.ts");

var ShowHideGameObjectComponent_1;



let ShowHideGameObjectComponent = ShowHideGameObjectComponent_1 = class ShowHideGameObjectComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = ShowHideGameObjectComponent_1.name;
    }
    start() {
    }
    draw() {
    }
    update() {
        if (_input_input__WEBPACK_IMPORTED_MODULE_3__["Input"].getKeyDown('Enter')) {
            this.gameObjectToHide.active = !this.gameObjectToHide.active;
        }
    }
    destroy() {
    }
};
ShowHideGameObjectComponent = ShowHideGameObjectComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])()
], ShowHideGameObjectComponent);



/***/ }),

/***/ "./src/app/business/game-components/user/simple-move-game-component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/business/game-components/user/simple-move-game-component.ts ***!
  \*****************************************************************************/
/*! exports provided: SimpleMoveGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleMoveGameComponent", function() { return SimpleMoveGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _common_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_v_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/v-math */ "./src/app/business/common/v-math.ts");

var SimpleMoveGameComponent_1;





let SimpleMoveGameComponent = SimpleMoveGameComponent_1 = class SimpleMoveGameComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = SimpleMoveGameComponent_1.name;
        this.speed = null;
        this.rotation = null;
        this.direction = null;
    }
    start() {
    }
    draw() {
    }
    update() {
        let angle = this.gameObject.transform.rotation;
        angle += this.rotation * _common_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"].delta;
        if (angle > 360) {
            angle = angle - 360;
        }
        const position = this.gameObject.transform.localPosition;
        const direction = _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].rotate(new _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](1, 0), angle);
        this.gameObject.transform.localPosition = _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].add(position, _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].multiply(direction, this.speed * _common_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"].delta));
        this.gameObject.transform.localRotation = angle;
    }
    destroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SimpleMoveGameComponent.prototype, "speed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SimpleMoveGameComponent.prototype, "rotation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"])
], SimpleMoveGameComponent.prototype, "direction", void 0);
SimpleMoveGameComponent = SimpleMoveGameComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Exclude"])()
], SimpleMoveGameComponent);



/***/ }),

/***/ "./src/app/business/game-components/user/sparks.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/business/game-components/user/sparks.component.ts ***!
  \*******************************************************************/
/*! exports provided: SparksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparksComponent", function() { return SparksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _common_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_v_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/v-math */ "./src/app/business/common/v-math.ts");
/* harmony import */ var _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/factory/game-object-factory */ "./src/app/business/core/factory/game-object-factory.ts");
/* harmony import */ var _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/factory/transform-factory */ "./src/app/business/core/factory/transform-factory.ts");
/* harmony import */ var _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/component-factory */ "./src/app/business/core/factory/component-factory.ts");
/* harmony import */ var _core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/html-renderer-game-component/html-renderer-game-component */ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts");
/* harmony import */ var _common_name_value_pair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/name-value-pair */ "./src/app/business/common/name-value-pair.ts");
/* harmony import */ var _core_game_object_collection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/game-object-collection */ "./src/app/business/core/game-object-collection.ts");

var SparksComponent_1;











let SparksComponent = SparksComponent_1 = class SparksComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = SparksComponent_1.name;
        this.speed = null;
        this.amount = null;
        this.gravity = null;
        this.shift = null;
        this.gravityValue = 9.8;
        this.initScatter = 9.8;
        this.sparks = [];
    }
    start() {
        for (let i = 0; i < this.amount; i++) {
            this.createNewSpark(i);
            this.sparks[i].color = _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].randIntMaxIncluded(1, 255);
        }
    }
    draw() {
    }
    update() {
        for (let i = 0; i < this.amount; i++) {
            this.updateSpark(i);
        }
    }
    destroy() {
    }
    updateSpark(index) {
        if (this.sparks[index] == null) {
            this.createNewSpark(index);
            return;
        }
        const spark = this.sparks[index];
        spark.color = spark.color - this.speed;
        if (spark.color < 0) {
            _core_game_object_collection__WEBPACK_IMPORTED_MODULE_11__["GameObjectCollection"].remove(spark.gameObject);
            this.sparks[index] = null;
            return;
        }
        spark.gravitySpeed += this.gravityValue * _common_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"].delta;
        const deltaSpeed = spark.speed * _common_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"].delta;
        const shift = _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].multiply(spark.direction.add(_common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].multiply(this.gravity, spark.gravitySpeed)), deltaSpeed);
        spark.gameObject.transform.localPosition = spark.gameObject.transform.localPosition.add(shift);
        const htmlComponent = spark.gameObject.getComponent(_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_9__["HtmlRendererGameComponent"].name);
        htmlComponent.cssStyle = `color: rgba(${Math.ceil(spark.color)}, 0, 0, ${ /*spark.color / 255*/1}); font-size: 10px;`;
    }
    createNewSpark(index) {
        const direction = _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].rotate(_common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"].one, _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].randIntMaxIncluded(0, 360));
        let position = this.gameObject.transform.position.add(_common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].multiply(direction, _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].randIntMaxIncluded(0, this.initScatter)));
        position = position.add(this.shift);
        const root = _core_game_object_collection__WEBPACK_IMPORTED_MODULE_11__["GameObjectCollection"].root(this.gameObject);
        const gameObject = _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(root, 'spark' + index, _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createLocalTransform(root.transform, position, 5, 5, 0), [
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_8__["ComponentFactory"].createComponent(_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_9__["HtmlRendererGameComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_10__["NameValuePair"]('cssStyle', 'color: #FF0000; font-size: 10px;')
            ])
        ], true, '*');
        this.sparks[index] = {
            direction,
            color: 255,
            gameObject,
            speed: _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].randIntMaxIncluded(10, 50),
            gravitySpeed: 0
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SparksComponent.prototype, "speed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SparksComponent.prototype, "amount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"])
], SparksComponent.prototype, "gravity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"])
], SparksComponent.prototype, "shift", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SparksComponent.prototype, "gravityValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SparksComponent.prototype, "initScatter", void 0);
SparksComponent = SparksComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Exclude"])()
], SparksComponent);



/***/ }),

/***/ "./src/app/business/game-components/user/test-one-component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/business/game-components/user/test-one-component.ts ***!
  \*********************************************************************/
/*! exports provided: TestOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestOneComponent", function() { return TestOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _common_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/timer */ "./src/app/business/common/timer.ts");

var TestOneComponent_1;




let TestOneComponent = TestOneComponent_1 = class TestOneComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] {
    constructor() {
        super(...arguments);
        this.name = TestOneComponent_1.name;
    }
    start() {
        this.gameObject.transform.localPosition = new _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](this.startX, this.gameObject.transform.localPosition.y);
    }
    draw() {
    }
    update() {
        const currentPos = this.gameObject.transform.localPosition;
        if (currentPos.x >= this.stopX) {
            return;
        }
        const offsetX = this.speed * _common_timer__WEBPACK_IMPORTED_MODULE_4__["Timer"].delta;
        this.gameObject.transform.localPosition = new _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](currentPos.x + offsetX, currentPos.y);
        if (this.gameObject.transform.localPosition.x > this.stopX) {
            this.gameObject.transform.localPosition = new _common_vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](this.stopX, currentPos.y);
        }
    }
    destroy() {
    }
};
TestOneComponent = TestOneComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])()
], TestOneComponent);



/***/ }),

/***/ "./src/app/business/game-components/user/walker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/business/game-components/user/walker.component.ts ***!
  \*******************************************************************/
/*! exports provided: WalkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkerComponent", function() { return WalkerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_base_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/base/game-component */ "./src/app/business/game-components/core/base/game-component.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/rect */ "./src/app/business/common/rect.ts");
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _common_v_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/v-math */ "./src/app/business/common/v-math.ts");
/* harmony import */ var _common_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _common_angle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/angle */ "./src/app/business/common/angle.ts");

var WalkerComponent_1;







var WalkerOperation;
(function (WalkerOperation) {
    WalkerOperation["None"] = "None";
    WalkerOperation["MoveTo"] = "MoveLeft";
    WalkerOperation["Weld"] = "Welding";
})(WalkerOperation || (WalkerOperation = {}));
let WalkerComponent = WalkerComponent_1 = class WalkerComponent extends _core_base_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] {
    constructor() {
        super();
        this.name = WalkerComponent_1.name;
        this.walkArea = null;
        this.moveSpeed = null;
        this.rotateSpeed = null;
        this.operations = new Map();
        this.currentOperation = WalkerOperation.None;
        this.operations.set(WalkerOperation.None, () => { });
        this.operations.set(WalkerOperation.MoveTo, () => { this.moveToOperation(); });
        this.operations.set(WalkerOperation.Weld, () => { this.weldOperation(); });
    }
    start() {
    }
    draw() {
    }
    update() {
        if (this.currentOperation === WalkerOperation.None) {
            this.startNewRandomOperation();
        }
        this.operations.get(this.currentOperation)();
    }
    destroy() {
    }
    startNewRandomOperation() {
        const operation = _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].randIntMaxIncluded(0, 1);
        switch (operation) {
            case 0:
                this.currentOperation = WalkerOperation.MoveTo;
                const angle = _common_angle__WEBPACK_IMPORTED_MODULE_7__["Angle"].rand();
                this.moveToWithRotateData = {
                    toAngle: new _common_angle__WEBPACK_IMPORTED_MODULE_7__["Angle"](angle),
                    moveToVector: _common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].rotate(new _common_vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 1), angle),
                    isRotating: true
                };
                break;
            case 1:
                // todo weld (sparks)
                this.startTime = _common_timer__WEBPACK_IMPORTED_MODULE_6__["Timer"].getTime();
                this.waitMSecs = 2000;
                this.currentOperation = WalkerOperation.Weld;
                break;
        }
    }
    moveToOperation() {
        if (this.moveToWithRotateData.isRotating) {
            const angle = new _common_angle__WEBPACK_IMPORTED_MODULE_7__["Angle"](this.gameObject.transform.localRotation);
            if (angle.rotateTo(this.moveToWithRotateData.toAngle, this.rotateSpeed * _common_timer__WEBPACK_IMPORTED_MODULE_6__["Timer"].delta)) {
                this.moveToWithRotateData.isRotating = false;
            }
            this.gameObject.transform.localRotation = angle.value;
            // return;
        }
        const pos = this.gameObject.transform.localPosition;
        const newPos = pos.add(_common_v_math__WEBPACK_IMPORTED_MODULE_5__["VMath"].multiply(this.moveToWithRotateData.moveToVector, this.moveSpeed * _common_timer__WEBPACK_IMPORTED_MODULE_6__["Timer"].delta));
        if (!this.walkArea.isInside(newPos)) {
            this.currentOperation = WalkerOperation.None;
            return;
        }
        this.gameObject.transform.localPosition = newPos;
    }
    weldOperation() {
        if (this.startTime + this.waitMSecs > _common_timer__WEBPACK_IMPORTED_MODULE_6__["Timer"].getTime()) {
            this.currentOperation = WalkerOperation.None;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_rect__WEBPACK_IMPORTED_MODULE_3__["Rect"])
], WalkerComponent.prototype, "walkArea", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WalkerComponent.prototype, "moveSpeed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WalkerComponent.prototype, "rotateSpeed", void 0);
WalkerComponent = WalkerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Exclude"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WalkerComponent);



/***/ }),

/***/ "./src/app/business/game-event-manager.ts":
/*!************************************************!*\
  !*** ./src/app/business/game-event-manager.ts ***!
  \************************************************/
/*! exports provided: GameEventManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEventManager", function() { return GameEventManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _events_event_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/event-message */ "./src/app/business/events/event-message.ts");


class GameEventManager {
    static events() {
        return this.onGameEventSubject;
    }
    static publish(event) {
        this.onGameEventSubject.next(event);
    }
}
GameEventManager.onGameEventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](_events_event_message__WEBPACK_IMPORTED_MODULE_1__["EventMessage"].empty());


/***/ }),

/***/ "./src/app/business/game-loader/component-builder.ts":
/*!***********************************************************!*\
  !*** ./src/app/business/game-loader/component-builder.ts ***!
  \***********************************************************/
/*! exports provided: ComponentBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentBuilder", function() { return ComponentBuilder; });
/* harmony import */ var _game_components_core_base_components_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-components/core/base/components-registry */ "./src/app/business/game-components/core/base/components-registry.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);


class ComponentBuilder {
    static build(component) {
        if (component == null) {
            return null;
        }
        return component.map((c) => {
            const factory = _game_components_core_base_components_registry__WEBPACK_IMPORTED_MODULE_0__["ComponentsRegistry"].registry.get(c.name);
            return Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["plainToClass"])(factory(), component);
        });
    }
}


/***/ }),

/***/ "./src/app/business/game-loader/game-loader.ts":
/*!*****************************************************!*\
  !*** ./src/app/business/game-loader/game-loader.ts ***!
  \*****************************************************/
/*! exports provided: GameLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLoader", function() { return GameLoader; });
/* harmony import */ var _game_structure_game_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-structure/game-data */ "./src/app/business/game-structure/game-data.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hardcoded_game_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardcoded-game-data */ "./src/app/business/game-loader/hardcoded-game-data.ts");



class GameLoader {
    static load() {
        return _hardcoded_game_data__WEBPACK_IMPORTED_MODULE_2__["HardcodedGameData"].getData();
    }
    static loadFromJson(dataJson) {
        const data = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["plainToClass"])(_game_structure_game_data__WEBPACK_IMPORTED_MODULE_0__["GameData"], dataJson);
        return data;
    }
}


/***/ }),

/***/ "./src/app/business/game-loader/hardcoded-game-data.ts":
/*!*************************************************************!*\
  !*** ./src/app/business/game-loader/hardcoded-game-data.ts ***!
  \*************************************************************/
/*! exports provided: HardcodedGameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedGameData", function() { return HardcodedGameData; });
/* harmony import */ var _game_structure_game_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-structure/game-scene */ "./src/app/business/game-structure/game-scene.ts");
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/name-value-pair */ "./src/app/business/common/name-value-pair.ts");
/* harmony import */ var _game_structure_game_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-structure/game-data */ "./src/app/business/game-structure/game-data.ts");
/* harmony import */ var _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/factory/component-factory */ "./src/app/business/core/factory/component-factory.ts");
/* harmony import */ var _game_components_user_sparks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game-components/user/sparks.component */ "./src/app/business/game-components/user/sparks.component.ts");
/* harmony import */ var _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/factory/game-object-factory */ "./src/app/business/core/factory/game-object-factory.ts");
/* harmony import */ var _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/factory/transform-factory */ "./src/app/business/core/factory/transform-factory.ts");
/* harmony import */ var _game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../game-components/core/html-renderer-game-component/html-renderer-game-component */ "./src/app/business/game-components/core/html-renderer-game-component/html-renderer-game-component.ts");
/* harmony import */ var _game_components_user_rotate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../game-components/user/rotate.component */ "./src/app/business/game-components/user/rotate.component.ts");
/* harmony import */ var _game_components_user_show_hide_game_object_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../game-components/user/show-hide-game-object-component */ "./src/app/business/game-components/user/show-hide-game-object-component.ts");
/* harmony import */ var _common_rect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/rect */ "./src/app/business/common/rect.ts");
/* harmony import */ var _game_components_user_walker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../game-components/user/walker.component */ "./src/app/business/game-components/user/walker.component.ts");
/* harmony import */ var _common_v_math__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/v-math */ "./src/app/business/common/v-math.ts");
/* harmony import */ var _games_impossible_dino_data_impossible_dino_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_games/impossible-dino/data/impossible-dino-data */ "./src/app/_games/impossible-dino/data/impossible-dino-data.ts");















class HardcodedGameData {
    static getData() {
        return new _game_structure_game_data__WEBPACK_IMPORTED_MODULE_3__["GameData"]([
            HardcodedGameData.getScene()
        ]);
    }
    static getScene() {
        const rootGameObject = _games_impossible_dino_data_impossible_dino_data__WEBPACK_IMPORTED_MODULE_14__["ImpossibleDinoData"].getData();
        return new _game_structure_game_scene__WEBPACK_IMPORTED_MODULE_0__["GameScene"]('Main Scene', rootGameObject);
    }
    static createStarShipGameObjects() {
        const rootGameObject = _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(null, 'root', _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createGlobalTransform(null, new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0), 0, 0, 0), [], true);
        _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(rootGameObject, 'Button 1', _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createGlobalTransform(rootGameObject.transform, new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](100, 25), 150, 25, 0), [
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('cssStyle', 'color: #FAA; font-size: 14px; padding-top: 5px; text-align: center; cursor: pointer'),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('backgroundImage', 'assets/img/button-one.png')
            ], true)
        ], true, 'BUTTON ONE!!!');
        const deathStar = _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(rootGameObject, 'DeathStar', _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createGlobalTransform(rootGameObject.transform, new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](100, 100), 100, 100, 0), [
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('backgroundImage', 'assets/img/death-star.png'),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('cssStyle', 'color: white; font-size: 40px;')
            ], true),
        ], true);
        const satellite = _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(deathStar, 'Satellite', _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createLocalTransform(deathStar.transform, new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 70), 30, 30, 180), [
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('backgroundImage', 'assets/img/cruiser.png')
            ], true),
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_user_rotate_component__WEBPACK_IMPORTED_MODULE_9__["RotateComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('rotation', 90)
            ], true),
        ], true);
        const SatelliteFire = _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(satellite, 'Satellite fire', _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createLocalTransform(rootGameObject.transform, new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](-15, 0), 2, 2, 0), [
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [], true),
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_user_sparks_component__WEBPACK_IMPORTED_MODULE_5__["SparksComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('active', true),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('amount', 10),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('speed', 10),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('gravity', new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0)),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('gravityValue', 9.8),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('initScatter', 0),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('shift', new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0))
            ], true)
        ], true);
        const shComponent = _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_user_show_hide_game_object_component__WEBPACK_IMPORTED_MODULE_10__["ShowHideGameObjectComponent"], [], true);
        shComponent.gameObjectToHide = satellite;
        deathStar.components.push(shComponent);
        const shiftX = 400;
        const shiftY = 400;
        const start = new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 200);
        const shiftAngle = 20;
        const mosaics = [];
        for (let i = 0; i < 360; i += shiftAngle) {
            const curr = _common_v_math__WEBPACK_IMPORTED_MODULE_13__["VMath"].rotate(start, i);
            mosaics.push(HardcodedGameData.createMosaic(curr.x + shiftX, curr.y + shiftY, rootGameObject));
        }
        HardcodedGameData.createStarUnit(rootGameObject, mosaics[0], 'assets/img/unit-round-0-empty.png', 45);
        HardcodedGameData.createStarUnit(rootGameObject, mosaics[8], 'assets/img/unit-round-1-empty.png', 90);
        HardcodedGameData.createStarUnit(rootGameObject, mosaics[12], 'assets/img/unit-round-2-empty.png', 135);
        HardcodedGameData.createStarUnit(rootGameObject, mosaics[4], 'assets/img/unit-round-3-empty.png', 180);
        return rootGameObject;
    }
    static createMosaic(x, y, rootGameObject) {
        return _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(rootGameObject, 'mosaic-silver', _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createLocalTransform(rootGameObject.transform, new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](x, y), 50, 50, 0), [
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('backgroundImage', 'assets/img/mosaic-silver.png')
            ], true)
        ], true);
    }
    static createStarUnit(rootGameObject, mosaic, image, rotateSpeed) {
        const starUnit = _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(rootGameObject, 'Star Unit', _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createLocalTransform(rootGameObject.transform, mosaic.transform.localPosition.clone(), 77, 77, 45), [
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('backgroundImage', `${image}`)
            ], true),
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_user_walker_component__WEBPACK_IMPORTED_MODULE_12__["WalkerComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('walkArea', new _common_rect__WEBPACK_IMPORTED_MODULE_11__["Rect"](mosaic.transform.localPosition.x - 25, mosaic.transform.localPosition.y - 25, 50, 50)),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('moveSpeed', 25),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('rotateSpeed', rotateSpeed)
            ], true)
        ], true);
        const starUnitFire = _core_factory_game_object_factory__WEBPACK_IMPORTED_MODULE_6__["GameObjectFactory"].createGameObject(starUnit, 'Star Unit fire', _core_factory_transform_factory__WEBPACK_IMPORTED_MODULE_7__["TransformFactory"].createLocalTransform(rootGameObject.transform, new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0), 2, 2, 0), [
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_core_html_renderer_game_component_html_renderer_game_component__WEBPACK_IMPORTED_MODULE_8__["HtmlRendererGameComponent"], [], true),
            _core_factory_component_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponent(_game_components_user_sparks_component__WEBPACK_IMPORTED_MODULE_5__["SparksComponent"], [
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('active', true),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('amount', 50),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('speed', 1),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('gravity', new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 1)),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('gravityValue', 2.8),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('initScatter', 0),
                new _common_name_value_pair__WEBPACK_IMPORTED_MODULE_2__["NameValuePair"]('shift', new _common_vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0))
            ])
        ], true);
        return starUnit;
    }
}


/***/ }),

/***/ "./src/app/business/game-manager.ts":
/*!******************************************!*\
  !*** ./src/app/business/game-manager.ts ***!
  \******************************************/
/*! exports provided: GameManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameManager", function() { return GameManager; });
/* harmony import */ var _game_loader_game_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loader/game-loader */ "./src/app/business/game-loader/game-loader.ts");
/* harmony import */ var _events_event_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/event-message */ "./src/app/business/events/event-message.ts");
/* harmony import */ var _common_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/timer */ "./src/app/business/common/timer.ts");
/* harmony import */ var _game_processor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-processor */ "./src/app/business/game-processor.ts");
/* harmony import */ var _game_event_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-event-manager */ "./src/app/business/game-event-manager.ts");





class GameManager {
    constructor() {
        this.gameData = null;
        this.currentScene = null;
        this.timerSubscription = null;
    }
    static instance() {
        if (GameManager.gameManagerInstance == null) {
            GameManager.gameManagerInstance = new GameManager();
        }
        return GameManager.gameManagerInstance;
    }
    load() {
        this.gameData = _game_loader_game_loader__WEBPACK_IMPORTED_MODULE_0__["GameLoader"].load();
        this.currentScene = this.gameData.scenes[0];
        this.setTimer();
        _game_event_manager__WEBPACK_IMPORTED_MODULE_4__["GameEventManager"].publish(new _events_event_message__WEBPACK_IMPORTED_MODULE_1__["EventMessage"](_events_event_message__WEBPACK_IMPORTED_MODULE_1__["EventMessageType"].GameStarted, this.currentScene.rootGameObject.children));
    }
    destroy() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
    setTimer() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        this.timerSubscription = _common_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"].timerEvent.subscribe(() => {
            _game_processor__WEBPACK_IMPORTED_MODULE_3__["GameProcessor"].process(this.currentScene.rootGameObject);
            _game_event_manager__WEBPACK_IMPORTED_MODULE_4__["GameEventManager"].publish(new _events_event_message__WEBPACK_IMPORTED_MODULE_1__["EventMessage"](_events_event_message__WEBPACK_IMPORTED_MODULE_1__["EventMessageType"].GameUpdate, this.currentScene));
        });
    }
}
GameManager.gameManagerInstance = null;


/***/ }),

/***/ "./src/app/business/game-processor.ts":
/*!********************************************!*\
  !*** ./src/app/business/game-processor.ts ***!
  \********************************************/
/*! exports provided: GameProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameProcessor", function() { return GameProcessor; });
/* harmony import */ var _physics_collisions_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics/collisions-processor */ "./src/app/business/physics/collisions-processor.ts");
/* harmony import */ var _core_transform_calculate_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/transform-calculate-system */ "./src/app/business/core/transform-calculate-system.ts");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/input */ "./src/app/business/input/input.ts");



class GameProcessor {
    static process(rootGameObject) {
        rootGameObject.update();
        _core_transform_calculate_system__WEBPACK_IMPORTED_MODULE_1__["TransformCalculateSystem"].instance().update();
        _physics_collisions_processor__WEBPACK_IMPORTED_MODULE_0__["CollisionsProcessor"].checkCollisions(rootGameObject);
        rootGameObject.draw();
        _input_input__WEBPACK_IMPORTED_MODULE_2__["Input"].frameEnd();
    }
}


/***/ }),

/***/ "./src/app/business/game-structure/game-data.ts":
/*!******************************************************!*\
  !*** ./src/app/business/game-structure/game-data.ts ***!
  \******************************************************/
/*! exports provided: GameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameData", function() { return GameData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-scene */ "./src/app/business/game-structure/game-scene.ts");



let GameData = class GameData {
    constructor(scenes) {
        this.scenes = scenes;
    }
};
GameData.ctorParameters = () => [
    { type: Array }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _game_scene__WEBPACK_IMPORTED_MODULE_2__["GameScene"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], GameData.prototype, "scenes", void 0);
GameData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], GameData);



/***/ }),

/***/ "./src/app/business/game-structure/game-object.ts":
/*!********************************************************!*\
  !*** ./src/app/business/game-structure/game-object.ts ***!
  \********************************************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform */ "./src/app/business/game-structure/transform.ts");
/* harmony import */ var _game_loader_component_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-loader/component-builder */ "./src/app/business/game-loader/component-builder.ts");

var GameObject_1;



let GameObject = GameObject_1 = class GameObject {
    constructor() {
        this.name = null;
        this.components = [];
        this.transform = new _transform__WEBPACK_IMPORTED_MODULE_2__["Transform"]();
        this.children = [];
        this.parent = null;
    }
    getComponent(componentName) {
        return this.components.find((c) => c.name === componentName);
    }
    start() {
        this.components.forEach((component) => {
            component.start();
        });
        this.children.forEach((ch) => {
            ch.start();
        });
    }
    draw() {
        if (!this.active) {
            return;
        }
        this.components.forEach((component) => {
            if (!component.active) {
                return;
            }
            component.draw();
        });
        this.children.forEach((ch) => {
            ch.draw();
        });
    }
    update() {
        if (!this.active || this.paused) {
            return;
        }
        this.components.forEach((component) => {
            if (!component.active) {
                return;
            }
            component.update();
        });
        this.children.forEach((ch) => {
            ch.update();
        });
    }
    destroy() {
        this.components.forEach((component) => {
            component.destroy();
        });
        this.children.forEach((ch) => {
            ch.destroy();
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GameObject.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Transform"])(value => _game_loader_component_builder__WEBPACK_IMPORTED_MODULE_3__["ComponentBuilder"].build(value), { toClassOnly: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], GameObject.prototype, "components", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _transform__WEBPACK_IMPORTED_MODULE_2__["Transform"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _transform__WEBPACK_IMPORTED_MODULE_2__["Transform"])
], GameObject.prototype, "transform", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => GameObject_1),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], GameObject.prototype, "children", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => GameObject_1),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", GameObject)
], GameObject.prototype, "parent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GameObject.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], GameObject.prototype, "active", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], GameObject.prototype, "paused", void 0);
GameObject = GameObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GameObject);



/***/ }),

/***/ "./src/app/business/game-structure/game-scene.ts":
/*!*******************************************************!*\
  !*** ./src/app/business/game-structure/game-scene.ts ***!
  \*******************************************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScene", function() { return GameScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-object */ "./src/app/business/game-structure/game-object.ts");



let GameScene = class GameScene {
    constructor(name, gameObject) {
        this.name = name;
        this.rootGameObject = gameObject;
    }
};
GameScene.ctorParameters = () => [
    { type: String },
    { type: _game_object__WEBPACK_IMPORTED_MODULE_2__["GameObject"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GameScene.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _game_object__WEBPACK_IMPORTED_MODULE_2__["GameObject"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _game_object__WEBPACK_IMPORTED_MODULE_2__["GameObject"])
], GameScene.prototype, "rootGameObject", void 0);
GameScene = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _game_object__WEBPACK_IMPORTED_MODULE_2__["GameObject"]])
], GameScene);



/***/ }),

/***/ "./src/app/business/game-structure/transform.ts":
/*!******************************************************!*\
  !*** ./src/app/business/game-structure/transform.ts ***!
  \******************************************************/
/*! exports provided: Transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/vector2 */ "./src/app/business/common/vector2.ts");
/* harmony import */ var _core_transform_calculate_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transform-calculate-system */ "./src/app/business/core/transform-calculate-system.ts");
/* harmony import */ var _common_rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/rect */ "./src/app/business/common/rect.ts");

var Transform_1;




let Transform = Transform_1 = class Transform {
    constructor() {
        this.positionValue = null;
        this.localPositionValue = null;
        this.rotationValue = null;
        this.localRotationValue = null;
        this.width = null;
        this.height = null;
        this.gameObject = null;
    }
    static instantiateGlobal(parent, globalPosition, rotation, width, height) {
        const t = new Transform_1();
        t.positionValue = globalPosition;
        t.localPositionValue = parent == null ? globalPosition : globalPosition.subtract(parent.position);
        t.rotationValue = rotation;
        t.localRotationValue = rotation;
        t.width = width;
        t.height = height;
        return t;
    }
    static instantiateLocal(parent, localPosition, rotation, width, height) {
        const t = new Transform_1();
        t.positionValue = parent.position.add(localPosition);
        t.localPositionValue = localPosition;
        t.rotationValue = parent.rotation + rotation;
        t.localRotationValue = rotation;
        t.width = width;
        t.height = height;
        return t;
    }
    get position() {
        return this.positionValue;
    }
    set position(value) {
        this.positionValue = value;
    }
    get localPosition() {
        return this.localPositionValue;
    }
    set localPosition(value) {
        this.localPositionValue = value;
        _core_transform_calculate_system__WEBPACK_IMPORTED_MODULE_3__["TransformCalculateSystem"].instance().registerForUpdate(this);
    }
    get rotation() {
        return this.rotationValue;
    }
    set rotation(value) {
        this.rotationValue = value;
    }
    get localRotation() {
        return this.localRotationValue;
    }
    set localRotation(value) {
        this.localRotationValue = value;
        _core_transform_calculate_system__WEBPACK_IMPORTED_MODULE_3__["TransformCalculateSystem"].instance().registerForUpdate(this);
    }
    toRect() {
        const w2 = this.width / 2;
        const h2 = this.height / 2;
        return new _common_rect__WEBPACK_IMPORTED_MODULE_4__["Rect"](this.position.x - w2, this.position.y - h2, this.width, this.height);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"])
], Transform.prototype, "positionValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"])
], Transform.prototype, "localPositionValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Transform.prototype, "rotationValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Transform.prototype, "localRotationValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Transform.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Transform.prototype, "height", void 0);
Transform = Transform_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])()
], Transform);



/***/ }),

/***/ "./src/app/business/input/adapters/abstract-input-adapter.ts":
/*!*******************************************************************!*\
  !*** ./src/app/business/input/adapters/abstract-input-adapter.ts ***!
  \*******************************************************************/
/*! exports provided: AbstractInputAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractInputAdapter", function() { return AbstractInputAdapter; });
class AbstractInputAdapter {
    constructor() {
        this.key = new Set();
        this.keyUp = new Set();
        this.keyDown = new Set();
        this.mouseUp = new Set();
        this.mouseDown = new Set();
    }
}


/***/ }),

/***/ "./src/app/business/input/adapters/web-browser-input-adapter.ts":
/*!**********************************************************************!*\
  !*** ./src/app/business/input/adapters/web-browser-input-adapter.ts ***!
  \**********************************************************************/
/*! exports provided: WebBrowserInputAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebBrowserInputAdapter", function() { return WebBrowserInputAdapter; });
/* harmony import */ var _abstract_input_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-input-adapter */ "./src/app/business/input/adapters/abstract-input-adapter.ts");
/* harmony import */ var _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto/mouse-input-event */ "./src/app/business/input/dto/mouse-input-event.ts");


class WebBrowserInputAdapter extends _abstract_input_adapter__WEBPACK_IMPORTED_MODULE_0__["AbstractInputAdapter"] {
    constructor(document) {
        super();
        this.document = document;
        this.initEvents();
    }
    frameEnd() {
        this.keyDown.clear();
        this.keyUp.clear();
        this.mouseDown.clear();
        this.mouseUp.clear();
    }
    initEvents() {
        this.document.addEventListener('keydown', (event) => this.onKeyDown(event));
        this.document.addEventListener('keyup', (event) => this.onKeyUp(event));
        this.gameAreaElement = this.document.getElementById('gameArea');
        this.gameAreaElement.addEventListener('mousedown', (event) => this.onMouseDown(event));
        this.gameAreaElement.addEventListener('mouseup', (event) => this.onMouseUp(event));
    }
    onKeyDown(event) {
        this.keyDown.add(event.code);
        this.key.add(event.code);
        console.log(`keyDown ${event.code}`);
    }
    onKeyUp(event) {
        this.keyUp.add(event.code);
        this.key.delete(event.code);
        console.log(`keyUp ${event.code}`);
    }
    onMouseDown(event) {
        const buttonType = event.button === 0 ? _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__["MouseButtonType"].left : (event.button === 1 ? _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__["MouseButtonType"].middle : _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__["MouseButtonType"].right);
        const mouseData = new _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__["MouseInputEvent"](buttonType, event.pageX - this.gameAreaElement.offsetLeft, event.pageY - this.gameAreaElement.offsetTop);
        this.mouseDown.add(mouseData);
        console.log(`mouseDown ${buttonType}: ${mouseData.coordinates.x}, ${mouseData.coordinates.y}`);
    }
    onMouseUp(event) {
        const buttonType = event.button === 0 ? _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__["MouseButtonType"].left : (event.button === 1 ? _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__["MouseButtonType"].middle : _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__["MouseButtonType"].right);
        const mouseData = new _dto_mouse_input_event__WEBPACK_IMPORTED_MODULE_1__["MouseInputEvent"](buttonType, event.pageX - this.gameAreaElement.offsetLeft, event.pageY - this.gameAreaElement.offsetTop);
        this.mouseUp.add(mouseData);
        console.log(`mouseUp ${buttonType}: ${mouseData.coordinates.x}, ${mouseData.coordinates.y}`);
    }
}
WebBrowserInputAdapter.ctorParameters = () => [
    { type: Document }
];


/***/ }),

/***/ "./src/app/business/input/dto/mouse-input-event.ts":
/*!*********************************************************!*\
  !*** ./src/app/business/input/dto/mouse-input-event.ts ***!
  \*********************************************************/
/*! exports provided: MouseButtonType, MouseInputEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseButtonType", function() { return MouseButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseInputEvent", function() { return MouseInputEvent; });
/* harmony import */ var _common_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/vector2 */ "./src/app/business/common/vector2.ts");

var MouseButtonType;
(function (MouseButtonType) {
    MouseButtonType["left"] = "left";
    MouseButtonType["right"] = "right";
    MouseButtonType["middle"] = "middle";
})(MouseButtonType || (MouseButtonType = {}));
class MouseInputEvent {
    constructor(type, x, y) {
        this.button = type;
        this.coordinates = new _common_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](x, y);
    }
}
MouseInputEvent.ctorParameters = () => [
    { type: undefined },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/business/input/input.ts":
/*!*****************************************!*\
  !*** ./src/app/business/input/input.ts ***!
  \*****************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
class Input {
    static getKey(key) {
        return Input.some((a) => a.key.has(key));
    }
    static getKeyUp(key) {
        return Input.some((a) => a.keyUp.has(key));
    }
    static getKeyDown(key) {
        return Input.some((a) => a.keyDown.has(key));
    }
    static getMouseDown() {
        return Input.inputAdapters.reduce((events, adapter) => {
            return events.concat(Array.from(adapter.mouseDown.values()));
        }, []);
    }
    static getMouseUp() {
        return Input.inputAdapters.reduce((events, adapter) => {
            return events.concat(Array.from(adapter.mouseUp.values()));
        }, []);
    }
    static setAdapter(inputAdapter) {
        Input.inputAdapters.push(inputAdapter);
    }
    static frameEnd() {
        Input.inputAdapters.forEach((a) => a.frameEnd());
    }
    static some(predicate) {
        return Input.inputAdapters.some((a) => predicate(a));
    }
}
Input.inputAdapters = [];


/***/ }),

/***/ "./src/app/business/physics/collisions-processor.ts":
/*!**********************************************************!*\
  !*** ./src/app/business/physics/collisions-processor.ts ***!
  \**********************************************************/
/*! exports provided: CollisionsProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionsProcessor", function() { return CollisionsProcessor; });
/* harmony import */ var _game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-components/core/collision-game-component */ "./src/app/business/game-components/core/collision-game-component.ts");
/* harmony import */ var _core_game_object_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/game-object-collection */ "./src/app/business/core/game-object-collection.ts");


class CollisionsProcessor {
    static checkCollisions(rootGameObject) {
        const components = _core_game_object_collection__WEBPACK_IMPORTED_MODULE_1__["GameObjectCollection"].getAllComponents(_game_components_core_collision_game_component__WEBPACK_IMPORTED_MODULE_0__["CollisionGameComponent"].name, rootGameObject);
        for (let i = 0; i < components.length; i++) {
            components[i].collisions.length = 0;
        }
        for (let i = 0; i < components.length; i++) {
            const firstComponent = components[i];
            for (let p = i + 1; p < components.length; p++) {
                const secondComponent = components[p];
                firstComponent.collideWith(secondComponent);
            }
        }
    }
}


/***/ }),

/***/ "./src/app/business/screen/game-screen.ts":
/*!************************************************!*\
  !*** ./src/app/business/screen/game-screen.ts ***!
  \************************************************/
/*! exports provided: GameScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScreen", function() { return GameScreen; });
class GameScreen {
    static getDefaultScreen() {
        if (GameScreen.defaultScreen == null) {
            GameScreen.defaultScreen = new GameScreen();
        }
        return this.defaultScreen;
    }
}


/***/ }),

/***/ "./src/app/ui/app-root/app.component.less":
/*!************************************************!*\
  !*** ./src/app/ui/app-root/app.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gameMenuBlock {\n  position: relative;\n  width: 150px;\n  height: 50px;\n  margin: 120px auto;\n  z-index: 2;\n}\n.gameMenuButton {\n  width: 150px;\n  height: 50px;\n  background-color: green;\n  color: white;\n}\n.gameArea {\n  border: 0 solid red;\n  min-width: 400px;\n  min-height: 400px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background-color: #FFF;\n  overflow: hidden;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvYXBwLXJvb3QvRDovRWdvcmthL1Byb2plY3RzL1JlbW4wNi9SZW1uMDYuZ2l0aHViLmlvL3NyYy9hcHAvdWkvYXBwLXJvb3QvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC91aS9hcHAtcm9vdC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC91aS9hcHAtcm9vdC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZU1lbnVCbG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTIwcHggYXV0bztcbiAgei1pbmRleDogMjtcbn1cblxuLmdhbWVNZW51QnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nYW1lQXJlYSB7XG4gIGJvcmRlcjogMCBzb2xpZCByZWQ7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLXNwYWNlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiIsIi5nYW1lTWVudUJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMjBweCBhdXRvO1xuICB6LWluZGV4OiAyO1xufVxuLmdhbWVNZW51QnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZ2FtZUFyZWEge1xuICBib3JkZXI6IDAgc29saWQgcmVkO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/app-root/app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ui/app-root/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _business_input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../business/input/input */ "./src/app/business/input/input.ts");
/* harmony import */ var _business_input_adapters_web_browser_input_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../business/input/adapters/web-browser-input-adapter */ "./src/app/business/input/adapters/web-browser-input-adapter.ts");
/* harmony import */ var _business_screen_game_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../business/screen/game-screen */ "./src/app/business/screen/game-screen.ts");
/* harmony import */ var _business_game_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../business/game-manager */ "./src/app/business/game-manager.ts");
/* harmony import */ var _business_core_http_rest_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../business/core/http/rest-client */ "./src/app/business/core/http/rest-client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AppComponent = class AppComponent {
    constructor(document, http) {
        this.document = document;
        this.http = http;
        this.width = 100;
        this.height = 100;
    }
    onResize() {
        const margin = 0;
        const screen = _business_screen_game_screen__WEBPACK_IMPORTED_MODULE_5__["GameScreen"].getDefaultScreen();
        screen.width = window.innerWidth - margin;
        screen.height = window.innerHeight - margin;
        this.width = window.innerWidth - margin;
        this.height = window.innerHeight - margin;
    }
    ngOnInit() {
        setTimeout(() => {
            this.onResize();
        }, 0);
        _business_input_input__WEBPACK_IMPORTED_MODULE_3__["Input"].setAdapter(new _business_input_adapters_web_browser_input_adapter__WEBPACK_IMPORTED_MODULE_4__["WebBrowserInputAdapter"](this.document));
        _business_core_http_rest_client__WEBPACK_IMPORTED_MODULE_7__["RestClient"].httpClient = this.http;
        setTimeout(() => {
            _business_game_manager__WEBPACK_IMPORTED_MODULE_6__["GameManager"].instance().load();
        }, 10);
    }
};
AppComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AppComponent.prototype, "onResize", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/app-root/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/ui/app-root/app.component.less")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
], AppComponent);



/***/ }),

/***/ "./src/app/ui/html-renderer/game-object/game-object.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/ui/html-renderer/game-object/game-object.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-object {\n  position: absolute;\n  background-size: cover;\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n  box-sizing: border-box;\n}\n.star-ship {\n  background-image: url('cruiser.png');\n}\n.bullet {\n  background-image: url('bullet.png');\n}\n.asteroid {\n  background-image: url('asteroid-icon-v2.png');\n}\n.half-transparent {\n  opacity: 0.5;\n}\n.score-indicator {\n  color: red;\n  font-weight: bold;\n  font-size: 21px;\n}\n.lives-indicator {\n  position: relative;\n}\n.lives-indicator-element {\n  position: absolute;\n  background-size: cover;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  background-image: url('cruiser.png');\n  width: 25px;\n  height: 25px;\n  top: 0;\n  left: 0;\n}\n.game-over-text {\n  color: red;\n  font-weight: bold;\n  font-size: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaHRtbC1yZW5kZXJlci9nYW1lLW9iamVjdC9EOi9FZ29ya2EvUHJvamVjdHMvUmVtbjA2L1JlbW4wNi5naXRodWIuaW8vc3JjL2FwcC91aS9odG1sLXJlbmRlcmVyL2dhbWUtb2JqZWN0L2dhbWUtb2JqZWN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC91aS9odG1sLXJlbmRlcmVyL2dhbWUtb2JqZWN0L2dhbWUtb2JqZWN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxzQkFBQTtBQ0NEO0FERUE7RUFDQyxvQ0FBQTtBQ0FEO0FER0E7RUFDQyxtQ0FBQTtBQ0REO0FESUE7RUFDQyw2Q0FBQTtBQ0ZEO0FES0E7RUFDQyxZQUFBO0FDSEQ7QURNQTtFQUNDLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKRDtBRE9BO0VBQ0Msa0JBQUE7QUNMRDtBRFFBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNORDtBRFNBO0VBQ0MsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNQRCIsImZpbGUiOiJzcmMvYXBwL3VpL2h0bWwtcmVuZGVyZXIvZ2FtZS1vYmplY3QvZ2FtZS1vYmplY3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1vYmplY3Qge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHRyYW5zZm9ybTogcm90YXRlKDApO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc3Rhci1zaGlwIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvY3J1aXNlci5wbmdcIik7XG59XG5cbi5idWxsZXQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9idWxsZXQucG5nXCIpO1xufVxuXG4uYXN0ZXJvaWQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9hc3Rlcm9pZC1pY29uLXYyLnBuZ1wiKTtcbn1cblxuLmhhbGYtdHJhbnNwYXJlbnQge1xuXHRvcGFjaXR5OiAwLjU7XG59XG5cbi5zY29yZS1pbmRpY2F0b3Ige1xuXHRjb2xvcjogcmVkO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAyMXB4O1xufVxuXG4ubGl2ZXMtaW5kaWNhdG9yIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGl2ZXMtaW5kaWNhdG9yLWVsZW1lbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vaW1nL2NydWlzZXIucG5nXCIpO1xuXHR3aWR0aDogMjVweDtcblx0aGVpZ2h0OiAyNXB4O1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG59XG5cbi5nYW1lLW92ZXItdGV4dCB7XG5cdGNvbG9yOiByZWQ7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDEwMHB4O1xufVxuXG5cblxuIiwiLmdhbWUtb2JqZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5zdGFyLXNoaXAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9jcnVpc2VyLnBuZ1wiKTtcbn1cbi5idWxsZXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9idWxsZXQucG5nXCIpO1xufVxuLmFzdGVyb2lkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvYXN0ZXJvaWQtaWNvbi12Mi5wbmdcIik7XG59XG4uaGFsZi10cmFuc3BhcmVudCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zY29yZS1pbmRpY2F0b3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuLmxpdmVzLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saXZlcy1pbmRpY2F0b3ItZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvY3J1aXNlci5wbmdcIik7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5nYW1lLW92ZXItdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/ui/html-renderer/game-object/game-object.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ui/html-renderer/game-object/game-object.component.ts ***!
  \***********************************************************************/
/*! exports provided: GameObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObjectComponent", function() { return GameObjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _business_game_components_core_html_renderer_game_component_game_object_render_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../business/game-components/core/html-renderer-game-component/game-object-render-info */ "./src/app/business/game-components/core/html-renderer-game-component/game-object-render-info.ts");



let GameObjectComponent = class GameObjectComponent {
    constructor() {
    }
    ngOnInit() {
    }
    getStyle() {
        return Object.assign({
            width: this.gameObjectRenderInfo.width + 'px',
            height: this.gameObjectRenderInfo.height + 'px',
            left: this.gameObjectRenderInfo.left + 'px',
            top: this.gameObjectRenderInfo.top + 'px',
            transform: `rotate(${this.gameObjectRenderInfo.rotation}deg)`,
            'background-image': this.gameObjectRenderInfo.backgroundImage
        }, this.createCssObject(this.gameObjectRenderInfo.cssStyle));
    }
    createCssObject(cssString) {
        const retObj = {};
        if (cssString == null) {
            return retObj;
        }
        const styles = cssString.split(';');
        styles.forEach((style) => {
            if (style == null || style.indexOf(':') === -1) {
                return;
            }
            const stylePair = style.split(':');
            retObj[stylePair[0].trim()] = stylePair[1].trim();
        });
        return retObj;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _business_game_components_core_html_renderer_game_component_game_object_render_info__WEBPACK_IMPORTED_MODULE_2__["GameObjectRenderInfo"])
], GameObjectComponent.prototype, "gameObjectRenderInfo", void 0);
GameObjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-object',
        template: __webpack_require__(/*! raw-loader!./game-object.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/html-renderer/game-object/game-object.component.html"),
        styles: [__webpack_require__(/*! ./game-object.component.less */ "./src/app/ui/html-renderer/game-object/game-object.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GameObjectComponent);



/***/ }),

/***/ "./src/app/ui/html-renderer/html-renderer.component.less":
/*!***************************************************************!*\
  !*** ./src/app/ui/html-renderer/html-renderer.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2h0bWwtcmVuZGVyZXIvaHRtbC1yZW5kZXJlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/html-renderer/html-renderer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui/html-renderer/html-renderer.component.ts ***!
  \*************************************************************/
/*! exports provided: HtmlRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlRendererComponent", function() { return HtmlRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _html_renderer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-renderer.service */ "./src/app/ui/html-renderer/html-renderer.service.ts");



let HtmlRendererComponent = class HtmlRendererComponent {
    constructor(htmlRendererService, changeDetectorRef) {
        this.htmlRendererService = htmlRendererService;
        this.changeDetectorRef = changeDetectorRef;
        this.gameObjectsRenderInfos = [];
        this.subscription = null;
    }
    ngOnInit() {
        this.subscribeToGameObjects();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    subscribeToGameObjects() {
        this.subscription = this.htmlRendererService.getGameObjectsRenderInfos().subscribe(gameObjectsRenderInfos => {
            this.gameObjectsRenderInfos = gameObjectsRenderInfos;
            this.changeDetectorRef.detectChanges();
        });
    }
};
HtmlRendererComponent.ctorParameters = () => [
    { type: _html_renderer_service__WEBPACK_IMPORTED_MODULE_2__["HtmlRendererService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HtmlRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-html-renderer',
        template: __webpack_require__(/*! raw-loader!./html-renderer.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/html-renderer/html-renderer.component.html"),
        styles: [__webpack_require__(/*! ./html-renderer.component.less */ "./src/app/ui/html-renderer/html-renderer.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_html_renderer_service__WEBPACK_IMPORTED_MODULE_2__["HtmlRendererService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], HtmlRendererComponent);



/***/ }),

/***/ "./src/app/ui/html-renderer/html-renderer.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/html-renderer/html-renderer.service.ts ***!
  \***********************************************************/
/*! exports provided: HtmlRendererService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlRendererService", function() { return HtmlRendererService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _business_events_event_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../business/events/event-message */ "./src/app/business/events/event-message.ts");
/* harmony import */ var _business_game_event_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../business/game-event-manager */ "./src/app/business/game-event-manager.ts");





let HtmlRendererService = class HtmlRendererService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.gameCalculatedSubscription = _business_game_event_manager__WEBPACK_IMPORTED_MODULE_4__["GameEventManager"].events().subscribe((eventMessage) => {
            this.processEvent(eventMessage);
        });
    }
    ngOnDestroy() {
        this.gameCalculatedSubscription.unsubscribe();
        this.subject.complete();
    }
    getGameObjectsRenderInfos() {
        return this.subject;
    }
    render(gameScene) {
        const allObjects = this.getAllGameObjects(gameScene.rootGameObject.children);
        const renderInfos = allObjects.reduce((infos, go) => {
            const renderer = go.getComponent('HtmlRendererGameComponent');
            if (renderer != null) {
                infos.push(renderer.renderInfo);
            }
            return infos;
        }, []);
        this.subject.next(renderInfos);
    }
    getAllGameObjects(gameObjects) {
        let res = [];
        gameObjects.forEach((go) => {
            if (!go.active) {
                return;
            }
            res.push(go);
            const children = this.getAllGameObjects(go.children);
            res = res.concat(children);
        });
        return res;
    }
    processEvent(eventMessage) {
        switch (eventMessage.type) {
            case _business_events_event_message__WEBPACK_IMPORTED_MODULE_3__["EventMessageType"].GameUpdate:
                this.render(eventMessage.data);
                break;
            default:
        }
    }
};
HtmlRendererService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HtmlRendererService);



/***/ }),

/***/ "./src/app/ui/svg-renderer/svg-renderer.component.less":
/*!*************************************************************!*\
  !*** ./src/app/ui/svg-renderer/svg-renderer.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3N2Zy1yZW5kZXJlci9zdmctcmVuZGVyZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/svg-renderer/svg-renderer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/svg-renderer/svg-renderer.component.ts ***!
  \***********************************************************/
/*! exports provided: SvgRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgRendererComponent", function() { return SvgRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _svg_renderer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg-renderer.service */ "./src/app/ui/svg-renderer/svg-renderer.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let SvgRendererComponent = class SvgRendererComponent {
    constructor(svgRendererService, changeDetectorRef, sanitized) {
        this.svgRendererService = svgRendererService;
        this.changeDetectorRef = changeDetectorRef;
        this.sanitized = sanitized;
        this.svgElements = '';
        this.subscription = null;
    }
    get viewBoxValue() {
        return `0 0 ${this.width} ${this.height}`;
    }
    ngOnInit() {
        this.subscribeToSvgElements();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    subscribeToSvgElements() {
        this.subscription = this.svgRendererService.getSvgElements().subscribe(svgElements => {
            this.svgElements = this.sanitized.bypassSecurityTrustHtml(svgElements.join('\n'));
            this.changeDetectorRef.detectChanges();
        });
    }
};
SvgRendererComponent.ctorParameters = () => [
    { type: _svg_renderer_service__WEBPACK_IMPORTED_MODULE_2__["SvgRendererService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SvgRendererComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SvgRendererComponent.prototype, "height", void 0);
SvgRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-svg-renderer',
        template: __webpack_require__(/*! raw-loader!./svg-renderer.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/svg-renderer/svg-renderer.component.html"),
        styles: [__webpack_require__(/*! ./svg-renderer.component.less */ "./src/app/ui/svg-renderer/svg-renderer.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_svg_renderer_service__WEBPACK_IMPORTED_MODULE_2__["SvgRendererService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], SvgRendererComponent);



/***/ }),

/***/ "./src/app/ui/svg-renderer/svg-renderer.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/svg-renderer/svg-renderer.service.ts ***!
  \*********************************************************/
/*! exports provided: SvgRendererService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgRendererService", function() { return SvgRendererService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _business_game_event_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../business/game-event-manager */ "./src/app/business/game-event-manager.ts");
/* harmony import */ var _business_events_event_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../business/events/event-message */ "./src/app/business/events/event-message.ts");
/* harmony import */ var _business_core_game_object_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../business/core/game-object-collection */ "./src/app/business/core/game-object-collection.ts");
/* harmony import */ var _business_game_components_svg_renderer_game_component_svg_renderer_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../business/game-components/svg-renderer-game-component/svg-renderer-game-component */ "./src/app/business/game-components/svg-renderer-game-component/svg-renderer-game-component.ts");







let SvgRendererService = class SvgRendererService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.gameCalculatedSubscription = _business_game_event_manager__WEBPACK_IMPORTED_MODULE_3__["GameEventManager"].events().subscribe((eventMessage) => {
            this.processEvent(eventMessage);
        });
    }
    ngOnDestroy() {
        this.gameCalculatedSubscription.unsubscribe();
        this.subject.complete();
    }
    getSvgElements() {
        return this.subject;
    }
    render(gameScene) {
        const allComponents = _business_core_game_object_collection__WEBPACK_IMPORTED_MODULE_5__["GameObjectCollection"].getAllComponents(_business_game_components_svg_renderer_game_component_svg_renderer_game_component__WEBPACK_IMPORTED_MODULE_6__["SvgRendererGameComponent"].name, gameScene.rootGameObject);
        const rendered = allComponents.reduce((res, component) => {
            res.push(component.svgElement);
            return res;
        }, []);
        this.subject.next(rendered);
    }
    processEvent(eventMessage) {
        switch (eventMessage.type) {
            case _business_events_event_message__WEBPACK_IMPORTED_MODULE_4__["EventMessageType"].GameUpdate:
                this.render(eventMessage.data);
                break;
            default:
        }
    }
};
SvgRendererService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SvgRendererService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Egorka\Projects\Remn06\Remn06.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map