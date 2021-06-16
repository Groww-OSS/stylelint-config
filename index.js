module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-declaration-use-variable",
    "stylelint-no-unsupported-browser-features"
  ],
  "rules": {
    "declaration-no-important": [true, { "severity": "warning" }],
    "rule-empty-line-before": ["always", { "severity": "warning" }],
    "color-hex-case": ["upper", { "severity": "warning" }],
    "sh-waqar/declaration-use-variable": [["color", "background", "background-color", "border", "z-index"], { "severity": "warning" }],
    "plugin/no-unsupported-browser-features": [true, {
      "browsers": ["> 1%", "Last 2 versions"],
      "ignore": ["rem"],
      "ignorePartialSupport": true,
      "severity": "warning"
    }]
  }
}
