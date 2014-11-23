/*
 * dpi screen detector javascript 1.0.0 (High Dots Per Inch)
 * Screen resolution pixel density (dpi) detector.
 *
 * Detect:
 * - ldpi (low) ~120dpi
 * - mdpi (medium) ~160dpi
 * - hdpi (high) ~240dpi
 * - xhdpi (extra-high) ~320dpi
 * - xxhdpi (extra-extra-high) ~480dpi
 * - xxxhdpi (extra-extra-extra-high) ~640dpi
 *
 * Github repository:
 * https://github.com/jorgegilramos/screen-dpi-detector
 *
 * Live demo:
 * http://jorgegilramos.es/test/demo.html
 *
 * Author:
 * http://jorgegilramos.es
 *
 * RJGR © Creative Commons Attribution-NonCommercial 3.0 
 * License: http://creativecommons.org/licenses/by-nc/3.0/
 */

window.Detector = (function(window, document, undefined){
  var version = "1.0.0";
  var maxRatio = 8.0;
  Detector = {};
  
  Detector._version = version;
  Detector.screens = {};
  
  // support for device-pixel-ratio: prefix for vendor, "" for native or undefined
  Detector.prefix = function() {
    if (window.matchMedia) {
      var prefixes = "-webkit-min- min--moz- -o-min- -ms-min- -khtml-min- ".split(" ");
      var mediaQuery = "device-pixel-ratio:1.0";
      for (var i=0; i<prefixes.length; i++) {
        if (window.matchMedia("(" + prefixes[i] + mediaQuery + ")").matches) {
          return prefixes[i];
        }
      }
    }
    return undefined;
  }();
  
  // device-pixel-ratio: Number of device pixels per CSS Pixel
  Detector.devicePixelRatio = function() {
    if (Detector.prefix) {
      var maxdpr = 1.0;
      var i=1.0;
      for (; i<=maxRatio; i=parseFloat((i+0.1).toFixed(1))) {
        if (window.matchMedia("(" + Detector.prefix + "device-pixel-ratio:" + i.toFixed(1) + ")").matches===false) {
          break;
        } else {
          maxdpr = i;
        }
      }
      return maxdpr;
    }
    return undefined;
  }();
  
  // dppx: Number of dots per px unit. 1dppx = 96dpi
  Detector.dppx = function() {
    if (window.matchMedia) {
      var maxdppx = 1.0;
      var i=1.0;
      for (; i<=maxRatio; i=parseFloat((i+0.1).toFixed(1))) {
        if (window.matchMedia("(min-resolution:" + i.toFixed(1) + "dppx)").matches===false) {
          break;
        } else {
          maxdppx = i;
        }
      }
      return maxdppx;
    }
    return undefined;
  }();
  
  // dpi: Dots per inch
  Detector.dpi = Detector.dppx*96;
  
  var test = {"ldpi": 120, "mdpi": 160, "hdpi": 240, "xhdpi": 320, "xxhdpi": 480, "xxxhdpi": 640};
  for (var key in test) {
    if (test.hasOwnProperty(key)) {
      Detector.screens[key] = Detector.dpi >= test[key];
    }
  }
  return Detector;
})(this, this.document);