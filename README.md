screen-hdpi-detector
====================

Screen resolution pixel density (dppx, dpi) detector in javascript based in feature detection.

Also indentify ldpi, mdpi, hdpi, xhdpi, xxhdpi and xxxhdpi displays. 

Detect:
 * ldpi (low) ~120dpi
 * mdpi (medium) ~160dpi
 * hdpi (high) ~240dpi
 * xhdpi (extra-high) ~320dpi
 * xxhdpi (extra-extra-high) ~480dpi
 * xxxhdpi (extra-extra-extra-high) ~640dpi

## Live Demo
[Demo screen.dpi.detector.js](http://jorgegilramos.github.io/me/test/demo.html)

## Usage

###html
```html
<script src="js/screen.dpi.detector.js" type="text/javascript"></script>
```

###javascript

```javascript
// Features
document.getElementById("prefix").innerHTML = Detector.prefix;
document.getElementById("dpr").innerHTML = Detector.devicePixelRatio.toFixed(1);
document.getElementById("dppx").innerHTML = Detector.dppx.toFixed(1) + "dppx";
document.getElementById("dpi").innerHTML = Detector.dpi + "dpi";

// Screen resolutions
document.getElementById("ldpi").innerHTML = Detector.screens["ldpi"];
document.getElementById("mdpi").innerHTML = Detector.screens["mdpi"];
document.getElementById("hdpi").innerHTML = Detector.screens["hdpi"];
document.getElementById("xhdpi").innerHTML = Detector.screens["xhdpi"];
document.getElementById("xxhdpi").innerHTML = Detector.screens["xxhdpi"];
document.getElementById("xxxhdpi").innerHTML = Detector.screens["xxxhdpi"];

// Also
if (Detector.screens["hdpi"]) {
  // The user has a hdpi display 
} else {
  // The user has a non-hdpi display
}
```
