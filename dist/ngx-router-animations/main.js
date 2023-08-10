"use strict";
(self["webpackChunkngx_router_animations"] = self["webpackChunkngx_router_animations"] || []).push([["main"],{

/***/ 7750:
/*!*****************************************************************!*\
  !*** ./projects/router-animations/src/lib/router-animations.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromBottomEasing": () => (/* binding */ fromBottomEasing),
/* harmony export */   "fromLeftEasing": () => (/* binding */ fromLeftEasing),
/* harmony export */   "fromRightEasing": () => (/* binding */ fromRightEasing),
/* harmony export */   "fromTopEasing": () => (/* binding */ fromTopEasing),
/* harmony export */   "moveFromBottom": () => (/* binding */ moveFromBottom),
/* harmony export */   "moveFromBottomFade": () => (/* binding */ moveFromBottomFade),
/* harmony export */   "moveFromLeft": () => (/* binding */ moveFromLeft),
/* harmony export */   "moveFromLeftFade": () => (/* binding */ moveFromLeftFade),
/* harmony export */   "moveFromRight": () => (/* binding */ moveFromRight),
/* harmony export */   "moveFromRightFade": () => (/* binding */ moveFromRightFade),
/* harmony export */   "moveFromTop": () => (/* binding */ moveFromTop),
/* harmony export */   "moveFromTopFade": () => (/* binding */ moveFromTopFade),
/* harmony export */   "rotateCarouselToBottom": () => (/* binding */ rotateCarouselToBottom),
/* harmony export */   "rotateCarouselToLeft": () => (/* binding */ rotateCarouselToLeft),
/* harmony export */   "rotateCarouselToRight": () => (/* binding */ rotateCarouselToRight),
/* harmony export */   "rotateCarouselToTop": () => (/* binding */ rotateCarouselToTop),
/* harmony export */   "rotateCubeToBottom": () => (/* binding */ rotateCubeToBottom),
/* harmony export */   "rotateCubeToLeft": () => (/* binding */ rotateCubeToLeft),
/* harmony export */   "rotateCubeToRight": () => (/* binding */ rotateCubeToRight),
/* harmony export */   "rotateCubeToTop": () => (/* binding */ rotateCubeToTop),
/* harmony export */   "rotateFall": () => (/* binding */ rotateFall),
/* harmony export */   "rotateFlipToBottom": () => (/* binding */ rotateFlipToBottom),
/* harmony export */   "rotateFlipToLeft": () => (/* binding */ rotateFlipToLeft),
/* harmony export */   "rotateFlipToRight": () => (/* binding */ rotateFlipToRight),
/* harmony export */   "rotateFlipToTop": () => (/* binding */ rotateFlipToTop),
/* harmony export */   "rotateGlueFromBottom": () => (/* binding */ rotateGlueFromBottom),
/* harmony export */   "rotateGlueFromLeft": () => (/* binding */ rotateGlueFromLeft),
/* harmony export */   "rotateGlueFromRight": () => (/* binding */ rotateGlueFromRight),
/* harmony export */   "rotateGlueFromTop": () => (/* binding */ rotateGlueFromTop),
/* harmony export */   "rotateNewsPaper": () => (/* binding */ rotateNewsPaper),
/* harmony export */   "rotateRoomToBottom": () => (/* binding */ rotateRoomToBottom),
/* harmony export */   "rotateRoomToLeft": () => (/* binding */ rotateRoomToLeft),
/* harmony export */   "rotateRoomToRight": () => (/* binding */ rotateRoomToRight),
/* harmony export */   "rotateRoomToTop": () => (/* binding */ rotateRoomToTop),
/* harmony export */   "rotateSides": () => (/* binding */ rotateSides),
/* harmony export */   "scaleDownFromBottom": () => (/* binding */ scaleDownFromBottom),
/* harmony export */   "scaleDownFromLeft": () => (/* binding */ scaleDownFromLeft),
/* harmony export */   "scaleDownFromRight": () => (/* binding */ scaleDownFromRight),
/* harmony export */   "scaleDownFromTop": () => (/* binding */ scaleDownFromTop),
/* harmony export */   "scaleDownScaleDown": () => (/* binding */ scaleDownScaleDown),
/* harmony export */   "slide": () => (/* binding */ slide)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 3196);
/* harmony import */ var _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-keyframes */ 5710);



/** Move*/
const moveFromLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromLeftKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveToRightKeyframes)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.6',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const moveFromRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromRightKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveToLeftKeyframes)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.6',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const moveFromTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromTopKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveToBottomKeyframes)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.6',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const moveFromBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromBottomKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveToTopKeyframes)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.6',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
/** Fade*/
const moveFromLeftFade = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromLeftKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.fadeFrames)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const moveFromRightFade = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromRightKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.fadeFrames)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const moveFromTopFade = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromTopKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.fadeFrames)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const moveFromBottomFade = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromBottomKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.fadeFrames)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
/** Different easing */
const fromLeftEasing = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'z-index': 9999
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromLeftKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveToRightKeyframes)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const fromRightEasing = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'z-index': 9999
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromRightKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveToLeftKeyframes)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const fromTopEasing = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'z-index': 9999
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromTopKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveToBottomKeyframes)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const fromBottomEasing = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}),
//  query(':enter', style({'opacity': '0'})
//     , { optional: true }),
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'z-index': 9999
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromBottomKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveToTopKeyframes)], {
  optional: true
})])], {
  params: {
    enterTiming: '.6',
    leaveTiming: '0.8',
    enterDelay: 0,
    leaveDelay: '0'
  }
});
/** Scale */
const scaleDownFromLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromLeftKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.scaleDown)], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const scaleDownFromRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'z-index': 999
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromRightKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.scaleDown)], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const scaleDownFromTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'z-index': 999
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromTopKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.scaleDown)], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const scaleDownFromBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'z-index': 999
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromBottomKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.scaleDown)], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const scaleDownScaleDown = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'z-index': 999
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 0,
  transform: 'scale(1.2)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 1,
  transform: 'scale(1)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.scaleDown)], {
  optional: true
})])], {
  params: {
    enterTiming: '0.5',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
/** Rotate animations */
const rotateCubeToLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '0% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(100%) rotateY(90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateX(50%) translateZ(-200px) rotateY(45deg)',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateX(0%) translateZ(00px) rotateY(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '100% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateX(-50%) translateZ(-200px) rotateY(-45deg)',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(-100%) rotateY(-90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.6',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateCubeToRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '100% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(-100%) rotateY(-90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateX(-50%) translateZ(-200px) rotateY(-45deg)',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateX(0%) translateZ(00px) rotateY(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '0% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateX(50%) translateZ(-200px) rotateY(45deg)',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(100%) rotateY(90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.6',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateCubeToTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 0,
  'transform-origin': '50% 0%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(100%) rotateX(-90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateY(50%) translateZ(-200px) rotateX(-45deg)',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateX(0%) translateZ(00px) rotateY(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '50% 100%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateY(-50%) translateZ(-200px) rotateX(45deg)',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(-100%) rotateX(90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.6',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateCubeToBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 0,
  'transform-origin': '50% 100%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(-100%) rotateX(90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateY(-50%) translateZ(-200px) rotateX(45deg))',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateX(0%) translateZ(00px) rotateY(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '50% 0%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateY(50%) translateZ(-200px) rotateX(-45deg)',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(100%) rotateX(-90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.6',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateNewsPaper = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 50%',
  opacity: '0',
  'z-index': '9999'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'translateZ(-3000px)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0,0,0)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 1,
  transform: 'translate3d(0,0,0)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'translateZ(-3000px) rotateZ(360deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.5',
    leaveTiming: '0.7',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateFall = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: 0,
  'transform-origin': '50% 100%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'scale(.8)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'scale(1)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'rotateZ(0deg) translateY(0%)',
  'transform-origin': '0% 0%',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'rotateZ(10deg)',
  'animation-timing-function': 'ease-out',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'rotateZ(17deg)',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'rotateZ(16deg)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'translateY(100%) rotateZ(17deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '1',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
/** Rotate Room */
const rotateRoomToLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '0% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(100%) rotateY(-90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateX(0%) rotateY(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '100% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: ' translateX(0%) rotateY(0deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(-100%) rotateY(90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.8',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateRoomToRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '100% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(-100%) rotateY(90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateX(0%) rotateY(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '0% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateX(0%) rotateY(0deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(100%) rotateY(-90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.8',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateRoomToTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 0%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(100%) rotateX(90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0, 0, 0)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 100%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0, 0, 0)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(-100%) rotateX(-90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.8',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateRoomToBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  'transform-origin': '50% 100%',
  transform: 'translateY(-100%) rotateX(-90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateY(0%) rotateX(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '50% 0%',
  transform: 'translateY(0%) rotateX(0deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(100%) rotateX(90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.8',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
/** Rotate Sides */
const rotateSides = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '150% 50%',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'translateZ(-500px) rotateY(-90deg)',
  'z-index': '9999',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0,0,0)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '-50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0,0,0)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.5',
  transform: 'translateZ(-500px) rotateY(90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.5',
    leaveTiming: '0.5',
    enterDelay: '0.2',
    leaveDelay: '0'
  }
});
/** Rotate Flip */
const rotateFlipToRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterTiming}}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.2',
  transform: 'translateZ(-1000px) rotateY(-90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateZ(0px) rotateY(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '50% 50%',
  transform: 'translateZ(0px) rotateY(0deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.2',
  transform: 'translateZ(-1000px) rotateY(90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.5',
    leaveTiming: '0.5',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateFlipToLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterTiming}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.2',
  transform: 'translateZ(-1000px) rotateY(90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '50% 50%',
  transform: 'translateZ(0px) rotateY(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateZ(0px) rotateY(0deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.2',
  transform: 'translateZ(-1000px) rotateY(-90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.5',
    leaveTiming: '0.5',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateFlipToTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.2',
  transform: 'translateZ(-1000px) rotateX(-90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateZ(0px) rotateX(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '50% 50%',
  transform: 'translateZ(0px) rotateX(0deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.2',
  transform: 'translateZ(-1000px) rotateX(90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.5',
    leaveTiming: '0.5',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateFlipToBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.2',
  transform: 'translateZ(-1000px) rotateX(-90deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateZ(0px) rotateX(0deg)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  'transform-origin': '50% 50%',
  transform: 'translateZ(0px) rotateX(0deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.2',
  transform: 'translateZ(-1000px) rotateX(-90deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.5',
    leaveTiming: '0.5',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
/** Rotate Glue */
const rotateGlueFromRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromRightKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '0% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.8',
  'transform': 'rotateY(15deg)',
  'animation-timing-function': 'ease-out',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'scale(0.8) translateZ(-200px)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.8',
    enterDelay: '0.2',
    leaveDelay: '0'
  }
});
const rotateGlueFromLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromLeftKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '100% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.8',
  'transform': 'rotateY(-15deg)',
  'animation-timing-function': 'ease-out',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'scale(0.8) translateZ(-200px)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.8',
    enterDelay: '0.2',
    leaveDelay: '0'
  }
});
const rotateGlueFromBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromBottomKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 0%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.8',
  'transform': 'rotateX(-15deg)',
  'animation-timing-function': 'ease-out',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'scale(0.8) translateZ(-200px)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.8',
    enterDelay: '0.2',
    leaveDelay: '0'
  }
});
const rotateGlueFromTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__.moveFromTopKeyframes)], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 100%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.8',
  'transform': 'rotateX(15deg)',
  'animation-timing-function': 'ease-out',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'scale(0.8) translateZ(-200px)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.6',
    leaveTiming: '0.8',
    enterDelay: '0.2',
    leaveDelay: '0'
  }
});
const rotateCarouselToLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '0% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(200%) scale(.4) rotateY(65deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0,0,0)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '100% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0, 0, 0)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '.3',
  transform: 'translateX(-150%) scale(.4) rotateY(-65deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.8',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateCarouselToRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '100% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateX(-200%) scale(.4) rotateY(-65deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0,0,0)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '0% 50%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0, 0, 0)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '.3',
  transform: 'translateX(200%) scale(.4) rotateY(65deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.8',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateCarouselToTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 0%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(200%) scale(.4) rotateX(-65deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0,0,0)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 100%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0, 0, 0)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '.3',
  transform: 'translateY(-200%) scale(.4) rotateX(65deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.8',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
const rotateCarouselToBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 100%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.3',
  transform: 'translateY(-200%) scale(.4) rotateX(65deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0,0,0)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  'transform-origin': '50% 0%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translate3d(0, 0, 0)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '.3',
  transform: 'translateY(200%) scale(.4) rotateX(-65deg)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '0.8',
    leaveTiming: '0.8',
    enterDelay: '0',
    leaveDelay: '0'
  }
});
/** Slide */
const slide = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)(_utils__WEBPACK_IMPORTED_MODULE_0__.sharedStyles), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{enterTiming}}s {{enterDelay}}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.5',
  transform: 'translateZ(-500px) translateX(200%)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.5',
  transform: 'translateZ(-500px)',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  transform: 'translateZ(0) translateX(0)',
  offset: 1
})]))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '1',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.5',
  transform: 'translateZ(-500px)',
  offset: 0.25
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0.5',
  transform: 'translateZ(-500px) translateX(-200%)',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  opacity: '0',
  transform: 'translateZ(-500px) translateX(-200%)',
  offset: 1
})]))], {
  optional: true
})])], {
  params: {
    enterTiming: '1',
    leaveTiming: '1',
    enterDelay: '0',
    leaveDelay: '0'
  }
});

/***/ }),

/***/ 5710:
/*!****************************************************************!*\
  !*** ./projects/router-animations/src/lib/shared-keyframes.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeFrames": () => (/* binding */ fadeFrames),
/* harmony export */   "moveFromBottomKeyframes": () => (/* binding */ moveFromBottomKeyframes),
/* harmony export */   "moveFromLeftKeyframes": () => (/* binding */ moveFromLeftKeyframes),
/* harmony export */   "moveFromRightKeyframes": () => (/* binding */ moveFromRightKeyframes),
/* harmony export */   "moveFromTopKeyframes": () => (/* binding */ moveFromTopKeyframes),
/* harmony export */   "moveToBottomKeyframes": () => (/* binding */ moveToBottomKeyframes),
/* harmony export */   "moveToLeftKeyframes": () => (/* binding */ moveToLeftKeyframes),
/* harmony export */   "moveToRightKeyframes": () => (/* binding */ moveToRightKeyframes),
/* harmony export */   "moveToTopKeyframes": () => (/* binding */ moveToTopKeyframes),
/* harmony export */   "scaleDown": () => (/* binding */ scaleDown)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const moveFromRightKeyframes = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(100%)',
  offset: 0,
  'z-index': '9999'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(0%)',
  offset: 1
})]);
const moveToLeftKeyframes = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(0%)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(-100%)',
  opacity: '0',
  offset: 1
})]);
const moveFromLeftKeyframes = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(-100%)',
  offset: 0,
  'z-index': '9999'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(0%)',
  offset: 1
})]);
const moveToRightKeyframes = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(0%)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(100%)',
  opacity: '0',
  offset: 1
})]);
const moveFromTopKeyframes = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(-100%)',
  offset: 0,
  'z-index': '9999'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(0%)',
  offset: 1
})]);
const moveToBottomKeyframes = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(0%)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(100%)',
  opacity: '0',
  offset: 1
})]);
const moveFromBottomKeyframes = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(100%)',
  offset: 0,
  'z-index': '9999'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(0%)',
  offset: 1
})]);
const moveToTopKeyframes = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(0%)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(-100%)',
  opacity: '0',
  offset: 1
})]);
const scaleDown = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: '1',
  transform: 'scale(1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: '0',
  transform: 'scale(0.8)',
  offset: 1
})]);
const fadeFrames = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: '1',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: '0.3',
  offset: 1
})]);

/***/ }),

/***/ 3196:
/*!*****************************************************!*\
  !*** ./projects/router-animations/src/lib/utils.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sharedStyles": () => (/* binding */ sharedStyles)
/* harmony export */ });
const sharedStyles = {
  position: 'fixed',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d'
  //  transform: 'translate3d(0,0,0)'
};

/***/ }),

/***/ 1209:
/*!*************************************************************!*\
  !*** ./src/app/animation-examples/about/about.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["about"]],
    decls: 6,
    vars: 0,
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A collection of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Router Tansitions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: #fdc162;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n  letter-spacing: 6px;\n  padding: 50px;\n  text-align: center;\n  line-height: 1;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-family: \"serif\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5pbWF0aW9uLWV4YW1wbGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0QsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNEOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQUU7RUFDRSx5QkFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gd2lkdGg6IDEwMHZ3O1xuIGhlaWdodDogMTAwdmg7XG4gYmFja2dyb3VuZDogI2ZkYzE2Mjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcbiAgcGFkZGluZzogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xuICB9XG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ3NlcmlmJztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3326:
/*!********************************************************************!*\
  !*** ./src/app/animation-examples/animation-examples.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationExamplesComponent": () => (/* binding */ AnimationExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/router-animations/src/lib/router-animations */ 7750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _animation_select_menu_animation_select_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-select-menu/animation-select-menu.component */ 4416);






class AnimationExamplesComponent {
  constructor(router) {
    this.router = router;
    this.animationType = '';
    this.modules = ['home', 'about', 'follow', 'contact'];
    this.pageIndex = 0;
  }
  ngOnInit() {
    this.state = this.modules[this.pageIndex];
  }
  onSelect(event) {
    // this.animating = true;
    //  setTimeout(() => this.animating = false, 15000);
    this.animationType = event;
    console.log(this.animationType);
    this.nextPage();
  }
  nextPage() {
    if (this.modules[this.pageIndex + 1]) {
      console.log(this.modules[this.pageIndex + 1]);
      this.router.navigateByUrl(this.modules[this.pageIndex + 1]);
      this.pageIndex++;
    } else {
      this.pageIndex = 0;
      this.router.navigateByUrl(this.modules[this.pageIndex]);
    }
  }
  getState(outlet, name) {
    if (name !== this.animationType) {
      return;
    }
    return outlet.activatedRouteData.state;
  }
  static #_ = this.ɵfac = function AnimationExamplesComponent_Factory(t) {
    return new (t || AnimationExamplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AnimationExamplesComponent,
    selectors: [["animation-examples"]],
    decls: 5,
    vars: 38,
    consts: [[1, "router-wrapper"], ["o", "outlet"], [1, "animation-triggers"], [3, "animationSelect"]],
    template: function AnimationExamplesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "animation-select-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("animationSelect", function AnimationExamplesComponent_Template_animation_select_menu_animationSelect_4_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@moveFromLeft", ctx.getState(_r0, "moveFromLeft"))("@moveFromRight", ctx.getState(_r0, "moveFromRight"))("@moveFromTop", ctx.getState(_r0, "moveFromTop"))("@moveFromBottom", ctx.getState(_r0, "moveFromBottom"))("@moveFromLeftFade", ctx.getState(_r0, "moveFromLeftFade"))("@moveFromRightFade", ctx.getState(_r0, "moveFromRightFade"))("@moveFromTopFade", ctx.getState(_r0, "moveFromTopFade"))("@moveFromBottomFade", ctx.getState(_r0, "moveFromBottomFade"))("@fromLeftEasing", ctx.getState(_r0, "fromLeftEasing"))("@fromRightEasing", ctx.getState(_r0, "fromRightEasing"))("@fromTopEasing", ctx.getState(_r0, "fromTopEasing"))("@fromBottomEasing", ctx.getState(_r0, "fromBottomEasing"))("@scaleDownFromLeft", ctx.getState(_r0, "scaleDownFromLeft"))("@scaleDownFromRight", ctx.getState(_r0, "scaleDownFromRight"))("@scaleDownFromTop", ctx.getState(_r0, "scaleDownFromTop"))("@scaleDownFromBottom", ctx.getState(_r0, "scaleDownFromBottom"))("@rotateGlueFromLeft", ctx.getState(_r0, "rotateGlueFromLeft"))("@rotateGlueFromRight", ctx.getState(_r0, "rotateGlueFromRight"))("@rotateGlueFromTop", ctx.getState(_r0, "rotateGlueFromTop"))("@rotateGlueFromBottom", ctx.getState(_r0, "rotateGlueFromBottom"))("@rotateFlipToLeft", ctx.getState(_r0, "rotateFlipToLeft"))("@rotateFlipToRight", ctx.getState(_r0, "rotateFlipToRight"))("@rotateFlipToTop", ctx.getState(_r0, "rotateFlipToTop"))("@rotateFlipToBottom", ctx.getState(_r0, "rotateFlipToBottom"))("@rotateRoomToLeft", ctx.getState(_r0, "rotateRoomToLeft"))("@rotateRoomToRight", ctx.getState(_r0, "rotateRoomToRight"))("@rotateRoomToTop", ctx.getState(_r0, "rotateRoomToTop"))("@rotateRoomToBottom", ctx.getState(_r0, "rotateRoomToBottom"))("@rotateCubeToLeft", ctx.getState(_r0, "rotateCubeToLeft"))("@rotateCubeToRight", ctx.getState(_r0, "rotateCubeToRight"))("@rotateCubeToTop", ctx.getState(_r0, "rotateCubeToTop"))("@rotateCubeToBottom", ctx.getState(_r0, "rotateCubeToBottom"))("@rotateCarouselToLeft", ctx.getState(_r0, "rotateCarouselToLeft"))("@rotateCarouselToRight", ctx.getState(_r0, "rotateCarouselToRight"))("@rotateCarouselToTop", ctx.getState(_r0, "rotateCarouselToTop"))("@rotateCarouselToBottom", ctx.getState(_r0, "rotateCarouselToBottom"))("@rotateSides", ctx.getState(_r0, "rotateSides"))("@slide", ctx.getState(_r0, "slide"));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _animation_select_menu_animation_select_menu_component__WEBPACK_IMPORTED_MODULE_1__.AnimationSelectMenuComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n.router-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100vh;\n  perspective: 1200px;\n  transform-style: preserve-3d;\n}\n\n.animation-triggers[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animation-triggers[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 25px 0 10px 0;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5pbWF0aW9uLWV4YW1wbGVzL2FuaW1hdGlvbi1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFERTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yb3V0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5hbmltYXRpb24tdHJpZ2dlcnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmFjdGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiAyNXB4IDAgMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('moveFromLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveFromLeft))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('moveFromRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveFromRight))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('moveFromTop', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveFromTop))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('moveFromBottom', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveFromBottom))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('moveFromLeftFade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveFromLeftFade))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('moveFromRightFade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveFromRightFade))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('moveFromTopFade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveFromTopFade))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('moveFromBottomFade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveFromBottomFade))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fromLeftEasing', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.fromLeftEasing))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fromRightEasing', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.fromRightEasing))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fromTopEasing', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.fromTopEasing))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fromBottomEasing', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.fromBottomEasing))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('scaleDownFromLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.scaleDownFromLeft))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('scaleDownFromRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.scaleDownFromRight))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('scaleDownFromTop', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.scaleDownFromTop))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('scaleDownFromBottom', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.scaleDownFromBottom))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateGlueFromLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateGlueFromLeft))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateGlueFromRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateGlueFromRight))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateGlueFromTop', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateGlueFromTop))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateGlueFromBottom', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateGlueFromBottom))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateFlipToLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateFlipToLeft))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateFlipToRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateFlipToRight))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateFlipToTop', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateFlipToTop))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateFlipToBottom', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateFlipToBottom))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateRoomToLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateRoomToLeft))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateRoomToRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateRoomToRight))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateRoomToTop', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateRoomToTop))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateRoomToBottom', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateRoomToBottom))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateCubeToLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateCubeToLeft))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateCubeToRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateCubeToRight))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateCubeToTop', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateCubeToTop))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateCubeToBottom', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateCubeToBottom))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateCarouselToLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateCarouselToLeft))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateCarouselToRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateCarouselToRight))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateCarouselToTop', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateCarouselToTop))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateCarouselToBottom', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateCarouselToBottom))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rotateSides', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.rotateSides))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('slide', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(projects_router_animations_src_lib_router_animations__WEBPACK_IMPORTED_MODULE_0__.slide))])]
    }
  });
}

/***/ }),

/***/ 1347:
/*!*****************************************************************!*\
  !*** ./src/app/animation-examples/animation-examples.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationExamplesModule": () => (/* binding */ AnimationExamplesModule)
/* harmony export */ });
/* harmony import */ var _animation_select_menu_animation_select_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-select-menu/animation-select-menu.component */ 4416);
/* harmony import */ var _animation_examples_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-examples.routing */ 9180);
/* harmony import */ var _follow_follow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follow/follow.component */ 5573);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 1209);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 9333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _animation_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation-examples.component */ 3326);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 509);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ 4103);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);













class AnimationExamplesModule {
  static #_ = this.ɵfac = function AnimationExamplesModule_Factory(t) {
    return new (t || AnimationExamplesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AnimationExamplesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _animation_examples_routing__WEBPACK_IMPORTED_MODULE_1__.AnimationExamplesRoutes, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AnimationExamplesModule, {
    declarations: [_animation_examples_component__WEBPACK_IMPORTED_MODULE_5__.AnimationExamplesComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _follow_follow_component__WEBPACK_IMPORTED_MODULE_2__.FollowComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__.NavigationComponent, _animation_select_menu_animation_select_menu_component__WEBPACK_IMPORTED_MODULE_0__.AnimationSelectMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule],
    exports: [_animation_examples_component__WEBPACK_IMPORTED_MODULE_5__.AnimationExamplesComponent]
  });
})();

/***/ }),

/***/ 9180:
/*!******************************************************************!*\
  !*** ./src/app/animation-examples/animation-examples.routing.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationExamplesRoutes": () => (/* binding */ AnimationExamplesRoutes)
/* harmony export */ });
/* harmony import */ var _follow_follow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow/follow.component */ 5573);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact/contact.component */ 509);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 1209);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 9333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
  data: {
    state: 'home'
  }
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent,
  data: {
    state: 'about'
  }
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent,
  data: {
    state: 'contact'
  }
}, {
  path: 'follow',
  component: _follow_follow_component__WEBPACK_IMPORTED_MODULE_0__.FollowComponent,
  data: {
    state: 'follow'
  }
}];
const AnimationExamplesRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes);

/***/ }),

/***/ 4416:
/*!*********************************************************************************************!*\
  !*** ./src/app/animation-examples/animation-select-menu/animation-select-menu.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationSelectMenuComponent": () => (/* binding */ AnimationSelectMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ 8589);



class AnimationSelectMenuComponent {
  constructor() {
    this.animationSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  onSelect(event, name) {
    event.stopPropagation();
    this.animationSelect.next(name);
  }
  static #_ = this.ɵfac = function AnimationSelectMenuComponent_Factory(t) {
    return new (t || AnimationSelectMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AnimationSelectMenuComponent,
    selectors: [["animation-select-menu"]],
    outputs: {
      animationSelect: "animationSelect"
    },
    decls: 120,
    vars: 13,
    consts: [[1, "menu-trigger", 3, "matMenuTriggerFor"], ["animations", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["move", "matMenu"], ["fade", "matMenu"], ["differentEasing", "matMenu"], ["rotate", "matMenu"], ["glue", "matMenu"], ["flip", "matMenu"], ["room", "matMenu"], ["cube", "matMenu"], ["carousel", "matMenu"], ["scale", "matMenu"]],
    template: function AnimationSelectMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SELECT YOUR DREAM ANIMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", null, 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MOVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FADE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DIFFERENT EASING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SCALE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ROTATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_14_listener($event) {
          return ctx.onSelect($event, "slide");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SLIDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 4)(18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_18_listener($event) {
          return ctx.onSelect($event, "moveFromLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MOVE FROM LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_20_listener($event) {
          return ctx.onSelect($event, "moveFromRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MOVE FROM RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_22_listener($event) {
          return ctx.onSelect($event, "moveFromTop");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "MOVE FROM TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_24_listener($event) {
          return ctx.onSelect($event, "moveFromBottom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MOVE FROM BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", null, 5)(28, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_28_listener($event) {
          return ctx.onSelect($event, "moveFromLeftFade");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FADE FROM LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_30_listener($event) {
          return ctx.onSelect($event, "moveFromRightFade");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "FADE FROM RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_32_listener($event) {
          return ctx.onSelect($event, "moveFromTopFade");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "FADE FROM TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_34_listener($event) {
          return ctx.onSelect($event, "moveFromBottomFade");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "FADE FROM BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-menu", null, 6)(38, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_38_listener($event) {
          return ctx.onSelect($event, "fromLeftEasing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "EASING FROM LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_40_listener($event) {
          return ctx.onSelect($event, "fromRightEasing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "EASING FROM RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_42_listener($event) {
          return ctx.onSelect($event, "fromTopEasing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "EASING FROM TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_44_listener($event) {
          return ctx.onSelect($event, "fromBottomEasing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "EASING FROM BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-menu", null, 7)(48, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "GLUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "FLIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ROOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "CUBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "CAOROUSEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_58_listener($event) {
          return ctx.onSelect($event, "rotateSides");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "SIDES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-menu", null, 8)(62, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_62_listener($event) {
          return ctx.onSelect($event, "rotateGlueFromLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "GLUE FROM LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_64_listener($event) {
          return ctx.onSelect($event, "rotateGlueFromRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "GLUE FROM RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_66_listener($event) {
          return ctx.onSelect($event, "rotateGlueFromTop");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "GLUE FROM TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_68_listener($event) {
          return ctx.onSelect($event, "rotateGlueFromBottom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "GLUE FROM BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-menu", null, 9)(72, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_72_listener($event) {
          return ctx.onSelect($event, "rotateFlipToLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "FLIP TO LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_74_listener($event) {
          return ctx.onSelect($event, "rotateFlipToRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "FLIP TO RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_76_listener($event) {
          return ctx.onSelect($event, "rotateFlipToTop");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "FLIP TO TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_78_listener($event) {
          return ctx.onSelect($event, "rotateFlipToBottom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "FLIP TO BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-menu", null, 10)(82, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_82_listener($event) {
          return ctx.onSelect($event, "rotateRoomToLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "ROOM TO LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_84_listener($event) {
          return ctx.onSelect($event, "rotateRoomToRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "ROOM TO RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_86_listener($event) {
          return ctx.onSelect($event, "rotateRoomToTop");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "ROOM TO TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_88_listener($event) {
          return ctx.onSelect($event, "rotateRoomToBottom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "ROOM TO BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-menu", null, 11)(92, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_92_listener($event) {
          return ctx.onSelect($event, "rotateCubeToLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "CUBE TO LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_94_listener($event) {
          return ctx.onSelect($event, "rotateCubeToRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "CUBE TO RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_96_listener($event) {
          return ctx.onSelect($event, "rotateCubeToTop");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "CUBE TO TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_98_listener($event) {
          return ctx.onSelect($event, "rotateCubeToBottom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "CUBE TO BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-menu", null, 12)(102, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_102_listener($event) {
          return ctx.onSelect($event, "rotateCarouselToLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "ROTATE CAROUSEL TO LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_104_listener($event) {
          return ctx.onSelect($event, "rotateCarouselToRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "ROTATE CAROUSEL TO RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_106_listener($event) {
          return ctx.onSelect($event, "rotateCarouselToTop");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "ROTATE CAROUSEL TO TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_108_listener($event) {
          return ctx.onSelect($event, "rotateCarouselToBottom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "ROTATE CAROUSEL TO BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-menu", null, 13)(112, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_112_listener($event) {
          return ctx.onSelect($event, "scaleDownFromLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "SCALE FROM LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_114_listener($event) {
          return ctx.onSelect($event, "scaleDownFromRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "SCALE FROM RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_116_listener($event) {
          return ctx.onSelect($event, "scaleDownFromTop");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "SCALE FROM TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationSelectMenuComponent_Template_button_click_118_listener($event) {
          return ctx.onSelect($event, "scaleDownFromBottom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "SCALE FROM BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](91);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](101);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("animation-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);
      }
    },
    dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuTrigger],
    styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.menu-trigger[_ngcontent-%COMP%] {\n  background: white;\n  border: 0;\n  outline: 0;\n  padding: 15px;\n  color: rgb(170, 170, 170) !important;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:ng-deep   .animation-menu[_ngcontent-%COMP%] {\n  min-width: 256px !important;\n}\n\n[_ngcontent-%COMP%]:ng-deep   .mat-menu-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgb(170, 170, 170) !important;\n  height: 36px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5pbWF0aW9uLWV4YW1wbGVzL2FuaW1hdGlvbi1zZWxlY3QtbWVudS9hbmltYXRpb24tc2VsZWN0LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUFJRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lbnUtdHJpZ2dlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46bmctZGVlcCAuYW5pbWF0aW9uLW1lbnUge1xuICBtaW4td2lkdGg6IDI1NnB4ICFpbXBvcnRhbnQ7XG59XG46bmctZGVlcCAubWF0LW1lbnUtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbn1cbjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgLy8gIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyAgbGVmdDogMDtcbiAgICAvLyAgcmlnaHQ6IDA7XG4gICAgLy8gIG1hcmdpbjogMCBhdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 509:
/*!*****************************************************************!*\
  !*** ./src/app/animation-examples/contact/contact.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ContactComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["contact"]],
    decls: 2,
    vars: 0,
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " contact works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: #f68dbb;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5pbWF0aW9uLWV4YW1wbGVzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNELFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiB3aWR0aDogMTAwdnc7XG4gaGVpZ2h0OiAxMDB2aDtcbiBiYWNrZ3JvdW5kOiAjZjY4ZGJiO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5573:
/*!***************************************************************!*\
  !*** ./src/app/animation-examples/follow/follow.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowComponent": () => (/* binding */ FollowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FollowComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FollowComponent_Factory(t) {
    return new (t || FollowComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FollowComponent,
    selectors: [["follow"]],
    decls: 2,
    vars: 0,
    template: function FollowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " follow works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: #fd6a62;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5pbWF0aW9uLWV4YW1wbGVzL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDRCxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gd2lkdGg6IDEwMHZ3O1xuIGhlaWdodDogMTAwdmg7XG4gYmFja2dyb3VuZDogI2ZkNmE2Mjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9333:
/*!***********************************************************!*\
  !*** ./src/app/animation-examples/home/home.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["home"]],
    decls: 6,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A collection of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Router Tansitions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background: #60d7a9;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n  letter-spacing: 6px;\n  padding: 50px;\n  text-align: center;\n  line-height: 1;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-family: \"serif\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5pbWF0aW9uLWV4YW1wbGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNELFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7QUFFSjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuIHdpZHRoOiAxMDB2dztcbiBoZWlnaHQ6IDEwMHZoO1xuIGJhY2tncm91bmQ6ICM2MGQ3YTk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHN0cm9uZyB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbiAgfVxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdzZXJpZic7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4103:
/*!***********************************************************************!*\
  !*** ./src/app/animation-examples/navigation/navigation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NavigationComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NavigationComponent_Factory(t) {
    return new (t || NavigationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavigationComponent,
    selectors: [["navigation"]],
    decls: 8,
    vars: 0,
    consts: [["routerLink", "/home", "routerLinkActive", "active", 1, "nav_btn"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav_btn"], ["routerLink", "/follow", "routerLinkActive", "active", 1, "nav_btn"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav_btn"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FOLLOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  padding: 5px;\n  background: white;\n}\n\n.nav_btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgb(170, 170, 170);\n  padding: 10px;\n  font-size: 15px;\n}\n.nav_btn.active[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5pbWF0aW9uLWV4YW1wbGVzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFGO0FBQ0U7RUFDRSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cblxuLm5hdl9idG4ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgJi5hY3RpdmUge1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _animation_examples_animation_examples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-examples/animation-examples.component */ 3326);


class AppComponent {
  constructor() {
    this.title = 'ngx-router-animations';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "animation-examples");
      }
    },
    dependencies: [_animation_examples_animation_examples_component__WEBPACK_IMPORTED_MODULE_0__.AnimationExamplesComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _animation_examples_animation_examples_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-examples/animation-examples.module */ 1347);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _animation_examples_animation_examples_module__WEBPACK_IMPORTED_MODULE_2__.AnimationExamplesModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _animation_examples_animation_examples_module__WEBPACK_IMPORTED_MODULE_2__.AnimationExamplesModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map