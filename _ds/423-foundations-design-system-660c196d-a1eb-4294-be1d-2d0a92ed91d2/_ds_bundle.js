/* @ds-bundle: {"format":3,"namespace":"Ds423FoundationsDesignSystem_660c19","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusIndicator","sourcePath":"components/core/StatusIndicator.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Avatar","sourcePath":"components/navigation/Avatar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Alert","sourcePath":"components/surfaces/Alert.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"2d13ec94f6c7","components/core/Button.jsx":"157c2c04a539","components/core/IconButton.jsx":"080b3343aaff","components/core/StatusIndicator.jsx":"36f30d7f41e5","components/core/Tag.jsx":"8472fec5c98b","components/forms/Checkbox.jsx":"2bc8f3475651","components/forms/Input.jsx":"41120be8675d","components/forms/Select.jsx":"0d6e4aa60735","components/forms/Switch.jsx":"3081e2ed880d","components/navigation/Avatar.jsx":"e4a7e5077b11","components/navigation/Tabs.jsx":"6fbd8e453198","components/surfaces/Alert.jsx":"d53bac51b4e3","components/surfaces/Card.jsx":"077bc38aff6f","components/surfaces/StatCard.jsx":"ded803783d3b","ui_kits/footprint-platform/app.jsx":"224fdc0201eb","ui_kits/footprint-platform/business.jsx":"672c1a3eb0f5","ui_kits/footprint-platform/kit.jsx":"87eb4f213513","ui_kits/footprint-platform/screens.jsx":"acb553c156b6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds423FoundationsDesignSystem_660c19 = window.Ds423FoundationsDesignSystem_660c19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Badge — compact status/count pill. `tone` maps to semantic colour;
 * `variant` is soft (tinted) or solid (filled) or outline.
 */
const TONES = {
  neutral: {
    h: "var(--neutral-700)",
    s100: "var(--neutral-100)",
    s500: "var(--neutral-700)"
  },
  brand: {
    h: "var(--primary-700)",
    s100: "var(--primary-100)",
    s500: "var(--primary-500)"
  },
  success: {
    h: "var(--success-700)",
    s100: "var(--success-100)",
    s500: "var(--success-500)"
  },
  warning: {
    h: "var(--warning-700)",
    s100: "var(--warning-100)",
    s500: "var(--warning-500)"
  },
  danger: {
    h: "var(--destructive-700)",
    s100: "var(--destructive-100)",
    s500: "var(--destructive-500)"
  },
  info: {
    h: "var(--info-700)",
    s100: "var(--info-100)",
    s500: "var(--info-500)"
  }
};
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const styles = {
    soft: {
      color: t.h,
      background: t.s100,
      border: "1px solid transparent"
    },
    solid: {
      color: "var(--neutral-0)",
      background: t.s500,
      border: "1px solid transparent"
    },
    outline: {
      color: t.h,
      background: "transparent",
      border: `1px solid ${t.s500}`
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: 22,
      padding: "0 8px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      borderRadius: "var(--radius-full)",
      whiteSpace: "nowrap",
      ...styles,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: variant === "solid" ? "currentColor" : t.s500
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Button — the system's core action control.
 * Sharp corners (radius-button = 4px), no scale/bounce on press,
 * hover steps one ramp darker. Variants map to the Figma button set.
 */

const SIZES = {
  mini: {
    height: 28,
    padding: "0 10px",
    font: "var(--text-xs)",
    gap: 6,
    icon: 14
  },
  small: {
    height: 32,
    padding: "0 12px",
    font: "var(--text-sm)",
    gap: 6,
    icon: 16
  },
  regular: {
    height: 40,
    padding: "0 16px",
    font: "var(--text-sm)",
    gap: 8,
    icon: 18
  },
  large: {
    height: 44,
    padding: "0 20px",
    font: "var(--text-base)",
    gap: 8,
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    "--bg": "var(--neutral-950)",
    "--bg-hover": "var(--neutral-800)",
    "--fg": "var(--neutral-0)",
    "--bd": "transparent"
  },
  tertiary: {
    "--bg": "var(--primary-500)",
    "--bg-hover": "var(--primary-600)",
    "--fg": "var(--accent-foreground)",
    "--bd": "transparent"
  },
  secondary: {
    "--bg": "var(--neutral-0)",
    "--bg-hover": "var(--neutral-50)",
    "--fg": "var(--neutral-950)",
    "--bd": "var(--border-default)"
  },
  outline: {
    "--bg": "var(--neutral-0)",
    "--bg-hover": "var(--primary-50)",
    "--fg": "var(--primary-700)",
    "--bd": "var(--primary-500)"
  },
  ghost: {
    "--bg": "transparent",
    "--bg-hover": "var(--opacity-dark-8)",
    "--fg": "var(--neutral-700)",
    "--bd": "transparent"
  },
  destructive: {
    "--bg": "var(--destructive-500)",
    "--bg-hover": "var(--destructive-600)",
    "--fg": "var(--neutral-0)",
    "--bd": "transparent"
  },
  "destructive-muted": {
    "--bg": "var(--neutral-0)",
    "--bg-hover": "var(--destructive-50)",
    "--fg": "var(--destructive-600)",
    "--bd": "var(--destructive-200)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "regular",
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.regular;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...v,
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: "var(--font-body)",
      fontSize: s.font,
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--fg)",
      background: disabled ? "var(--neutral-100)" : hover ? "var(--bg-hover)" : "var(--bg)",
      border: "1px solid",
      borderColor: disabled ? "var(--border-subtle)" : "var(--bd)",
      borderRadius: "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
      whiteSpace: "nowrap",
      userSelect: "none",
      ...(disabled ? {
        color: "var(--text-disabled)"
      } : {}),
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 IconButton — square, icon-only action. Same variants as Button.
 */
const SIZES = {
  small: {
    box: 32,
    icon: 16
  },
  regular: {
    box: 40,
    icon: 20
  },
  large: {
    box: 44,
    icon: 22
  }
};
const VARIANTS = {
  primary: {
    bg: "var(--neutral-950)",
    bgH: "var(--neutral-800)",
    fg: "var(--neutral-0)",
    bd: "transparent"
  },
  tertiary: {
    bg: "var(--primary-500)",
    bgH: "var(--primary-600)",
    fg: "var(--neutral-0)",
    bd: "transparent"
  },
  secondary: {
    bg: "var(--neutral-0)",
    bgH: "var(--neutral-50)",
    fg: "var(--neutral-800)",
    bd: "var(--border-default)"
  },
  ghost: {
    bg: "transparent",
    bgH: "var(--opacity-dark-8)",
    fg: "var(--icon-default)",
    bd: "transparent"
  }
};
function IconButton({
  children,
  label,
  variant = "ghost",
  size = "regular",
  disabled = false,
  round = false,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.regular;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      flex: "none",
      color: disabled ? "var(--text-disabled)" : v.fg,
      background: disabled ? "var(--neutral-100)" : hover ? v.bgH : v.bg,
      border: "1px solid",
      borderColor: disabled ? "var(--border-subtle)" : v.bd,
      borderRadius: round ? "var(--radius-full)" : "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 StatusIndicator — a labelled dot for live/connection/health states.
 * Used widely across the footprint product (data-source status, sync, etc.).
 */
const TONES = {
  online: "var(--success-500)",
  busy: "var(--warning-500)",
  offline: "var(--neutral-400)",
  error: "var(--destructive-500)",
  brand: "var(--primary-500)"
};
function StatusIndicator({
  status = "online",
  label = null,
  pulse = false,
  style = {},
  ...rest
}) {
  const color = TONES[status] || TONES.online;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flex: "none"
    }
  }, pulse ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: -3,
      borderRadius: "50%",
      background: color,
      opacity: 0.25,
      animation: "ds-pulse 1.6s var(--ease-standard) infinite"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: color
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("style", null, `@keyframes ds-pulse{0%{transform:scale(.8);opacity:.4}70%{transform:scale(2);opacity:0}100%{opacity:0}}`));
}
Object.assign(__ds_scope, { StatusIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusIndicator.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Tag — a removable token/chip for filters, selections & inputs.
 * Larger and squarer than Badge; supports a dismiss affordance.
 */
function Tag({
  children,
  size = "md",
  icon = null,
  onRemove = null,
  selected = false,
  style = {},
  ...rest
}) {
  const dims = size === "sm" ? {
    h: 24,
    px: 8,
    font: "var(--text-xs)"
  } : {
    h: 30,
    px: 10,
    font: "var(--text-sm)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: dims.h,
      padding: `0 ${dims.px}px`,
      fontFamily: "var(--font-body)",
      fontSize: dims.font,
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      color: selected ? "var(--primary-700)" : "var(--neutral-700)",
      background: selected ? "var(--primary-100)" : "var(--neutral-100)",
      border: "1px solid",
      borderColor: selected ? "var(--primary-300)" : "var(--border-default)",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 14,
      height: 14
    }
  }, icon) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      marginRight: -2,
      padding: 0,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--icon-muted)",
      borderRadius: "var(--radius-xs)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Checkbox — controlled box with check/indeterminate. Brand fill when on.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label = null,
  onChange,
  style = {},
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      flex: "none",
      background: on ? "var(--primary-500)" : disabled ? "var(--neutral-100)" : "var(--neutral-0)",
      border: "1px solid",
      borderColor: on ? "var(--primary-500)" : "var(--border-strong)",
      borderRadius: "var(--radius-xs)",
      transition: "background var(--duration-fast), border-color var(--duration-fast)"
    }
  }, rest), indeterminate ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: disabled ? "var(--text-disabled)" : "var(--text-base)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Input — text field. Sharp-ish (radius-input = 6px), 1px neutral border,
 * brand focus ring. Supports leading/trailing adornments and error state.
 */
function Input({
  size = "md",
  invalid = false,
  disabled = false,
  iconLeft = null,
  suffix = null,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? 32 : size === "lg" ? 44 : 40;
  const fs = size === "lg" ? "var(--text-base)" : "var(--text-sm)";
  const border = invalid ? "var(--border-danger)" : focus ? "var(--ring)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      background: disabled ? "var(--neutral-100)" : "var(--neutral-0)",
      border: `1px solid ${border}`,
      borderRadius: "var(--radius-input)",
      boxShadow: focus ? `0 0 0 3px ${invalid ? "var(--destructive-100)" : "var(--primary-100)"}` : "none",
      transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)",
      cursor: disabled ? "not-allowed" : "text",
      ...style
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18,
      color: "var(--icon-muted)",
      flex: "none"
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: 0,
      outline: 0,
      background: "transparent",
      padding: 0,
      fontFamily: "var(--font-body)",
      fontSize: fs,
      color: "var(--text-base)"
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-subtle)",
      flex: "none"
    }
  }, suffix) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Select — styled native select with a chevron. Matches Input metrics.
 */
function Select({
  size = "md",
  invalid = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? 32 : size === "lg" ? 44 : 40;
  const border = invalid ? "var(--border-danger)" : focus ? "var(--ring)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: h,
      padding: "0 38px 0 12px",
      fontFamily: "var(--font-body)",
      fontSize: size === "lg" ? "var(--text-base)" : "var(--text-sm)",
      color: "var(--text-base)",
      background: disabled ? "var(--neutral-100)" : "var(--neutral-0)",
      border: `1px solid ${border}`,
      borderRadius: "var(--radius-input)",
      boxShadow: focus ? "0 0 0 3px var(--primary-100)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)"
    }
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--icon-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 11,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Switch — toggle for instant on/off settings. Brand track when on.
 */
function Switch({
  checked = false,
  disabled = false,
  label = null,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      display: "inline-block",
      width: 36,
      height: 20,
      flex: "none",
      background: checked ? "var(--primary-500)" : "var(--neutral-400)",
      borderRadius: "var(--radius-full)",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 18 : 2,
      width: 16,
      height: 16,
      background: "#fff",
      borderRadius: "50%",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--duration-base) var(--ease-standard)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: disabled ? "var(--text-disabled)" : "var(--text-base)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Avatar — user / workspace identity. Image or initials fallback,
 * with a deterministic brand-tinted background and optional status dot.
 */
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48
};
function Avatar({
  name = "",
  src = null,
  size = "md",
  square = false,
  status = null,
  style = {},
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const statusColor = {
    online: "var(--success-500)",
    busy: "var(--warning-500)",
    offline: "var(--neutral-400)"
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      overflow: "hidden",
      borderRadius: square ? "var(--radius-md)" : "var(--radius-full)",
      background: "var(--primary-100)",
      color: "var(--primary-700)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: px * 0.4
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials), statusColor ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -1,
      bottom: -1,
      width: px * 0.28,
      height: px * 0.28,
      minWidth: 8,
      minHeight: 8,
      background: statusColor,
      borderRadius: "50%",
      border: "2px solid var(--surface-card)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Tabs — underline tabs (default) or a segmented control (pill).
 * Controlled via `value` / `onChange`. Items: [{ value, label, icon? }].
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  style = {},
  ...rest
}) {
  if (variant === "segmented") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "inline-flex",
        padding: 3,
        gap: 2,
        background: "var(--neutral-100)",
        borderRadius: "var(--radius-lg)",
        ...style
      }
    }, rest), items.map(it => {
      const active = it.value === value;
      return /*#__PURE__*/React.createElement("button", {
        key: it.value,
        type: "button",
        onClick: () => onChange && onChange(it.value),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          height: 30,
          padding: "0 12px",
          border: 0,
          cursor: "pointer",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--weight-medium)",
          color: active ? "var(--text-base)" : "var(--text-muted)",
          background: active ? "var(--neutral-0)" : "transparent",
          borderRadius: "var(--radius-md)",
          boxShadow: active ? "var(--shadow-xs)" : "none",
          transition: "background var(--duration-fast), color var(--duration-fast)"
        }
      }, it.icon ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          width: 16,
          height: 16
        }
      }, it.icon) : null, it.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-default)",
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      onClick: () => onChange && onChange(it.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 40,
        padding: "0 4px",
        marginBottom: -1,
        border: 0,
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        color: active ? "var(--text-link)" : "var(--text-muted)",
        borderBottom: `2px solid ${active ? "var(--primary-500)" : "transparent"}`,
        transition: "color var(--duration-fast)"
      }
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 16,
        height: 16
      }
    }, it.icon) : null, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Alert — inline banner for feedback / system messages.
 * tone tints the background + left content; uses Lucide-style status icons.
 */
const TONES = {
  info: {
    bg: "var(--info-50)",
    bd: "var(--info-200)",
    fg: "var(--info-700)",
    icon: "var(--info-500)"
  },
  success: {
    bg: "var(--success-50)",
    bd: "var(--success-200)",
    fg: "var(--success-700)",
    icon: "var(--success-500)"
  },
  warning: {
    bg: "var(--warning-50)",
    bd: "var(--warning-200)",
    fg: "var(--warning-700)",
    icon: "var(--warning-500)"
  },
  danger: {
    bg: "var(--destructive-50)",
    bd: "var(--destructive-200)",
    fg: "var(--destructive-700)",
    icon: "var(--destructive-500)"
  }
};
const PATHS = {
  info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  })),
  success: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  warning: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })),
  danger: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01"
  }))
};
function Alert({
  tone = "info",
  title,
  children,
  onClose = null,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 14px",
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t.icon,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      marginTop: 1
    }
  }, PATHS[tone]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: t.fg,
      marginBottom: children ? 2 : 0
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.5
    }
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      flex: "none",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--icon-muted)",
      padding: 2,
      marginTop: -1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Alert.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 Card — soft-cornered container (radius-card = 12px), hairline border,
 * subtle shadow. The default surface for the footprint product's content.
 */
function Card({
  children,
  padding = 20,
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding,
      transition: "box-shadow var(--duration-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 423 StatCard — the footprint product's signature metric tile.
 * A big tabular number with a unit, a dot-labelled category, and an
 * optional signed delta (↑ red = worse, ↓ green = better).
 */
function StatCard({
  label = "Total",
  value,
  unit = "tCO₂e",
  dotColor = "var(--primary-700)",
  delta = null,
  // { value: "70 tCO₂e", direction: "up" | "down", caption: "Above benchmark" }
  style = {},
  ...rest
}) {
  const up = delta && delta.direction === "up";
  const deltaColor = delta ? up ? "var(--destructive-500)" : "var(--success-600)" : null;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: dotColor,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-muted)"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-tnum",
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-4xl)",
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--text-base)",
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lg)",
      color: "var(--text-muted)"
    }
  }, unit)), delta ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, delta.caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, delta.caption) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      height: 22,
      padding: "0 8px",
      borderRadius: "var(--radius-full)",
      background: up ? "var(--destructive-50)" : "var(--success-50)",
      border: `1px solid ${up ? "var(--destructive-200)" : "var(--success-200)"}`,
      color: deltaColor,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, up ? /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7M9 7h8v8"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M7 7l10 10M9 17h8V9"
  })), delta.value)) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/footprint-platform/app.jsx
try { (() => {
/* 423 Footprint Platform — app root. */
function App() {
  const [active, setActive] = useState("overview");
  const [period, setPeriod] = useState("y");
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => setDrawer(true);
  let screen;
  if (active === "overview") screen = /*#__PURE__*/React.createElement(Overview, {
    period: period,
    setPeriod: setPeriod,
    onAddData: openDrawer
  });else if (active === "business") screen = /*#__PURE__*/React.createElement(MapBusiness, {
    onAddData: openDrawer
  });else {
    const meta = NAV.find(n => n.id === active);
    screen = /*#__PURE__*/React.createElement(Placeholder, {
      title: meta.label,
      icon: meta.icon
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      overflow: "hidden",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNav: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    active: active,
    onAddData: openDrawer
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, screen)), /*#__PURE__*/React.createElement(AddDataDrawer, {
    open: drawer,
    onClose: () => setDrawer(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/footprint-platform/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/footprint-platform/business.jsx
try { (() => {
/* 423 Footprint Platform — Map My Business board + Add Data drawer + placeholders. */

const COLUMNS = [{
  title: "Premises",
  icon: "building-2",
  tone: "var(--primary-500)",
  items: [{
    name: "Scranton HQ",
    meta: "Office · 1,200 m²",
    value: "182",
    status: "complete"
  }, {
    name: "Warehouse A",
    meta: "Storage · 3,400 m²",
    value: "96",
    status: "complete"
  }, {
    name: "Stamford branch",
    meta: "Office · 640 m²",
    value: null,
    status: "missing"
  }]
}, {
  title: "Transport",
  icon: "truck",
  tone: "var(--tertiary-500)",
  items: [{
    name: "Delivery fleet",
    meta: "12 diesel vans",
    value: "312",
    status: "complete"
  }, {
    name: "Company cars",
    meta: "5 vehicles",
    value: "84",
    status: "review"
  }, {
    name: "Business travel",
    meta: "Flights & rail",
    value: "176",
    status: "complete"
  }]
}, {
  title: "Supply chain",
  icon: "package",
  tone: "var(--success-500)",
  items: [{
    name: "Paper suppliers",
    meta: "Spend-based estimate",
    value: "104",
    status: "complete"
  }, {
    name: "Packaging",
    meta: "Not yet mapped",
    value: null,
    status: "missing"
  }]
}];
const STATUS = {
  complete: {
    tone: "success",
    label: "Mapped"
  },
  review: {
    tone: "warning",
    label: "Needs review"
  },
  missing: {
    tone: "danger",
    label: "Add data"
  }
};
function MapBusiness({
  onAddData
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: 24,
      height: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 4px",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: "-0.018em",
      color: "var(--text-base)"
    }
  }, "Map my business"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, "Group every part of your operation so we can estimate its footprint.")), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    iconLeft: I("list-filter")
  }, "Filter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      alignItems: "start"
    }
  }, COLUMNS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      background: "var(--neutral-100)",
      borderRadius: "var(--radius-card)",
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "2px 4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 26,
      height: 26,
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-card)",
      color: col.tone
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16
    }
  }, I(col.icon))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-base)"
    }
  }, col.title), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, col.items.length)), col.items.map(it => {
    const s = STATUS[it.status];
    return /*#__PURE__*/React.createElement(Card, {
      key: it.name,
      interactive: true,
      pad: 14,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-base)",
        lineHeight: 1.3
      }
    }, it.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "var(--text-subtle)",
        lineHeight: 1.3,
        marginTop: 2
      }
    }, it.meta)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 16,
        height: 16,
        color: "var(--icon-muted)",
        marginTop: 2,
        flex: "none"
      }
    }, I("ellipsis"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: s.tone,
      variant: "soft",
      dot: true
    }, s.label), it.value ? /*#__PURE__*/React.createElement("span", {
      className: "ds-tnum",
      style: {
        fontFamily: "var(--font-system)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-base)"
      }
    }, it.value, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-subtle)",
        fontWeight: 400
      }
    }, "tCO\u2082e")) : /*#__PURE__*/React.createElement("button", {
      onClick: onAddData,
      style: {
        border: 0,
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--primary-600)"
      }
    }, "Add data \u2192")));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onAddData,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      height: 38,
      border: "1px dashed var(--border-strong)",
      background: "transparent",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16
    }
  }, I("plus")), " Add area")))));
}
const SOURCES = [{
  id: "xero",
  label: "Xero",
  meta: "Accounting · spend-based",
  icon: "calculator"
}, {
  id: "energy",
  label: "Energy bills",
  meta: "Electricity & gas",
  icon: "bolt"
}, {
  id: "fleet",
  label: "Vehicle fleet",
  meta: "Fuel & mileage",
  icon: "truck"
}, {
  id: "manual",
  label: "Manual entry",
  meta: "Enter figures yourself",
  icon: "pencil"
}];
function AddDataDrawer({
  open,
  onClose
}) {
  const [src, setSrc] = useState("xero");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      pointerEvents: open ? "auto" : "none",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim)",
      opacity: open ? 1 : 0,
      transition: "opacity var(--duration-base) var(--ease-standard)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      maxWidth: "90vw",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-xl)",
      display: "flex",
      flexDirection: "column",
      transform: open ? "translateX(0)" : "translateX(100%)",
      transition: "transform var(--duration-slow) var(--ease-emphasized)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 20px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: "-0.01em",
      color: "var(--text-base)"
    }
  }, "Add data"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Connect a source or enter figures manually.")), /*#__PURE__*/React.createElement(IconBtn, {
    icon: I("x"),
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-base)"
    }
  }, "Data source"), SOURCES.map(s => {
    const a = s.id === src;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setSrc(s.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        cursor: "pointer",
        textAlign: "left",
        background: a ? "var(--primary-50)" : "var(--surface-card)",
        border: `1px solid ${a ? "var(--primary-500)" : "var(--border-default)"}`,
        borderRadius: "var(--radius-lg)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        background: "var(--neutral-100)",
        color: "var(--primary-600)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 20,
        height: 20
      }
    }, I(s.icon))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-base)"
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "var(--text-subtle)"
      }
    }, s.meta)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: `1.5px solid ${a ? "var(--primary-500)" : "var(--border-strong)"}`,
        background: a ? "var(--primary-500)" : "transparent"
      }
    }, a ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "#fff"
      }
    }) : null));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-base)"
    }
  }, "Reporting period"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      appearance: "none",
      width: "100%",
      height: 40,
      padding: "0 38px 0 12px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-base)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-input)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("option", null, "FY 2026"), /*#__PURE__*/React.createElement("option", null, "FY 2025"), /*#__PURE__*/React.createElement("option", null, "FY 2024")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 11,
      top: 11,
      display: "inline-flex",
      width: 18,
      height: 18,
      color: "var(--icon-muted)",
      pointerEvents: "none"
    }
  }, I("chevron-down"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "16px 20px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    full: true,
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    variant: "tertiary",
    full: true,
    iconRight: I("arrow-right"),
    onClick: onClose
  }, "Connect"))));
}
function Placeholder({
  title,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      height: "100%",
      padding: 40,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 64,
      height: 64,
      borderRadius: "var(--radius-2xl)",
      background: "var(--neutral-100)",
      color: "var(--icon-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 30,
      height: 30
    }
  }, I(icon))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 4px",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "-0.01em",
      color: "var(--text-base)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)",
      maxWidth: 360
    }
  }, "This area is part of the full 423 product. Explore Overview and Map my business for the interactive demo.")));
}
Object.assign(window, {
  MapBusiness,
  AddDataDrawer,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/footprint-platform/business.jsx", error: String((e && e.message) || e) }); }

// ui_kits/footprint-platform/kit.jsx
try { (() => {
/* 423 Footprint Platform — UI-kit primitives.
   Self-contained recreations of the design-system components, tuned to the
   same tokens (styles.css) so the kit renders identically in any context.
   Exposed on window for the other babel scripts. */

const {
  useState,
  useRef,
  useLayoutEffect
} = React;

/* Icon: renders a Lucide glyph as pure React elements built from Lucide's
   icon DATA. No refs / innerHTML / effects — so React fully owns the tree
   and inline-style updates on ancestors reconcile normally. */
const ATTR_MAP = {
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "stroke-dasharray": "strokeDasharray"
};
function camelAttrs(attrs) {
  const out = {};
  for (const k in attrs) out[ATTR_MAP[k] || k] = attrs[k];
  return out;
}
function Icon({
  name,
  style
}) {
  const icons = window.lucide && window.lucide.icons;
  const pascal = String(name).split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
  const node = icons && icons[pascal];
  const kids = node ? Array.isArray(node) ? node : node.children || node[2] || [] : [];
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      ...style
    }
  }, kids.map((c, i) => React.createElement(c[0], {
    key: i,
    ...camelAttrs(c[1] || {})
  })));
}
const I = name => /*#__PURE__*/React.createElement(Icon, {
  name: name
});
function Btn({
  children,
  variant = "primary",
  size = "regular",
  iconLeft,
  iconRight,
  full,
  onClick,
  style = {}
}) {
  const [h, setH] = useState(false);
  const sizes = {
    mini: {
      height: 28,
      pad: "0 10px",
      fs: 12,
      gap: 6
    },
    small: {
      height: 32,
      pad: "0 12px",
      fs: 14,
      gap: 6
    },
    regular: {
      height: 40,
      pad: "0 16px",
      fs: 14,
      gap: 8
    },
    large: {
      height: 44,
      pad: "0 20px",
      fs: 16,
      gap: 8
    }
  }[size];
  const v = {
    primary: {
      bg: "var(--neutral-950)",
      bgH: "var(--neutral-800)",
      fg: "#fff",
      bd: "transparent"
    },
    tertiary: {
      bg: "var(--primary-500)",
      bgH: "var(--primary-600)",
      fg: "#fff",
      bd: "transparent"
    },
    secondary: {
      bg: "var(--neutral-0)",
      bgH: "var(--neutral-50)",
      fg: "var(--neutral-950)",
      bd: "var(--border-default)"
    },
    outline: {
      bg: "var(--neutral-0)",
      bgH: "var(--primary-50)",
      fg: "var(--primary-700)",
      bd: "var(--primary-500)"
    },
    ghost: {
      bg: "transparent",
      bgH: "var(--opacity-dark-8)",
      fg: "var(--neutral-700)",
      bd: "transparent"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: full ? "flex" : "inline-flex",
      width: full ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes.gap,
      height: sizes.height,
      padding: sizes.pad,
      fontFamily: "var(--font-body)",
      fontSize: sizes.fs,
      fontWeight: 500,
      letterSpacing: "-0.01em",
      color: v.fg,
      background: h ? v.bgH : v.bg,
      border: "1px solid",
      borderColor: v.bd,
      borderRadius: "var(--radius-button)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18
    }
  }, iconRight) : null);
}
function IconBtn({
  icon,
  label,
  onClick,
  active,
  style = {}
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      flex: "none",
      color: active ? "var(--primary-600)" : "var(--icon-default)",
      background: h || active ? "var(--opacity-dark-8)" : "transparent",
      border: 0,
      borderRadius: "var(--radius-button)",
      cursor: "pointer",
      transition: "background var(--duration-fast)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 20,
      height: 20
    }
  }, icon));
}
function Card({
  children,
  pad = 20,
  interactive,
  onClick,
  style = {}
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => interactive && setH(true),
    onMouseLeave: () => interactive && setH(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: h ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding: pad,
      cursor: interactive ? "pointer" : "default",
      transition: "box-shadow var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, children);
}
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  dot
}) {
  const t = {
    neutral: {
      h: "var(--neutral-700)",
      s1: "var(--neutral-100)",
      s5: "var(--neutral-700)"
    },
    brand: {
      h: "var(--primary-700)",
      s1: "var(--primary-100)",
      s5: "var(--primary-500)"
    },
    success: {
      h: "var(--success-700)",
      s1: "var(--success-100)",
      s5: "var(--success-500)"
    },
    warning: {
      h: "var(--warning-700)",
      s1: "var(--warning-100)",
      s5: "var(--warning-500)"
    },
    danger: {
      h: "var(--destructive-700)",
      s1: "var(--destructive-100)",
      s5: "var(--destructive-500)"
    }
  }[tone];
  const st = {
    soft: {
      color: t.h,
      background: t.s1,
      border: "1px solid transparent"
    },
    solid: {
      color: "#fff",
      background: t.s5,
      border: "1px solid transparent"
    },
    outline: {
      color: t.h,
      background: "transparent",
      border: `1px solid ${t.s5}`
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: 22,
      padding: "0 8px",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 500,
      borderRadius: "var(--radius-full)",
      whiteSpace: "nowrap",
      ...st
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: variant === "solid" ? "#fff" : t.s5
    }
  }) : null, children);
}
function Delta({
  value,
  direction,
  caption
}) {
  const up = direction === "up";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, caption) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      height: 22,
      padding: "0 8px",
      borderRadius: "var(--radius-full)",
      background: up ? "var(--destructive-50)" : "var(--success-50)",
      border: `1px solid ${up ? "var(--destructive-200)" : "var(--success-200)"}`,
      color: up ? "var(--destructive-500)" : "var(--success-600)",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 12,
      height: 12
    }
  }, I(up ? "trending-up" : "trending-down")), value));
}
function Segmented({
  items,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      padding: 3,
      gap: 2,
      background: "var(--neutral-100)",
      borderRadius: "var(--radius-lg)"
    }
  }, items.map(it => {
    const a = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange(it.value),
      style: {
        height: 30,
        padding: "0 14px",
        border: 0,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 500,
        color: a ? "var(--text-base)" : "var(--text-muted)",
        background: a ? "var(--neutral-0)" : "transparent",
        borderRadius: "var(--radius-md)",
        boxShadow: a ? "var(--shadow-xs)" : "none",
        transition: "all var(--duration-fast)"
      }
    }, it.label);
  }));
}
function Avatar({
  name,
  size = 36,
  square,
  color = "var(--primary-100)",
  fg = "var(--primary-700)"
}) {
  const ini = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "none",
      borderRadius: square ? "var(--radius-md)" : "var(--radius-full)",
      background: color,
      color: fg,
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: size * 0.38
    }
  }, ini);
}
Object.assign(window, {
  I,
  Icon,
  Btn,
  IconBtn,
  Card,
  Badge,
  Delta,
  Segmented,
  Avatar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/footprint-platform/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/footprint-platform/screens.jsx
try { (() => {
/* 423 Footprint Platform — screens. Composes the kit primitives. */

const NAV = [{
  id: "overview",
  label: "Overview",
  icon: "layout-dashboard"
}, {
  id: "business",
  label: "My Business",
  icon: "building-2"
}, {
  id: "footprint",
  label: "My Footprint",
  icon: "footprints"
}, {
  id: "opportunities",
  label: "Opportunities",
  icon: "lightbulb"
}, {
  id: "reporting",
  label: "Reporting and Planning",
  icon: "file-text"
}, {
  id: "settings",
  label: "Settings",
  icon: "settings"
}];
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 252,
      flex: "none",
      background: "var(--neutral-900)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 12px",
      gap: 4,
      height: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "8px 8px",
      marginBottom: 8,
      background: "transparent",
      border: "1px solid var(--opacity-light-12)",
      borderRadius: "var(--radius-lg)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/423-icon.svg",
    width: "28",
    height: "28",
    alt: "423",
    style: {
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      color: "#fff",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Dunder Mifflin Paper Co"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--neutral-400)"
    }
  }, "Business account")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16,
      color: "var(--neutral-400)"
    }
  }, I("chevrons-up-down"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      flex: 1
    }
  }, NAV.map(n => {
    const a = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 10px",
        border: 0,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: a ? 600 : 500,
        textAlign: "left",
        color: a ? "#fff" : "var(--neutral-400)",
        background: a ? "var(--opacity-light-12)" : "transparent",
        borderRadius: "var(--radius-md)",
        transition: "background var(--duration-fast), color var(--duration-fast)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 18,
        height: 18
      }
    }, I(n.icon)), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px",
      borderTop: "1px solid var(--opacity-light-12)",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Michael Scott",
    size: 32,
    color: "var(--primary-400)",
    fg: "#fff"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Michael Scott"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--neutral-400)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "michael@dundermifflin.com")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16,
      color: "var(--neutral-400)"
    }
  }, I("log-out"))));
}
function TopBar({
  active,
  onAddData
}) {
  const crumb = NAV.find(n => n.id === active);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      height: 60,
      padding: "0 24px",
      flex: "none",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "My Business"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16,
      color: "var(--icon-muted)"
    }
  }, I("chevron-right")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-base)",
      fontWeight: 600
    }
  }, crumb ? crumb.label : "Overview")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 420,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 36,
      padding: "0 12px",
      background: "var(--neutral-100)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16,
      color: "var(--icon-muted)"
    }
  }, I("search")), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search for something",
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-base)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "tertiary",
    size: "small",
    iconLeft: I("plus"),
    onClick: onAddData
  }, "Add data"), /*#__PURE__*/React.createElement(IconBtn, {
    icon: I("bell"),
    label: "Notifications"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Michael Scott",
    size: 32,
    color: "var(--primary-400)",
    fg: "#fff"
  })));
}

/* ---------- Overview dashboard ---------- */
const CATEGORIES = [{
  name: "Transport & logistics",
  icon: "truck",
  value: "482",
  pct: 34,
  tone: "var(--primary-500)"
}, {
  name: "Electricity",
  icon: "bolt",
  value: "312",
  pct: 22,
  tone: "var(--tertiary-500)"
}, {
  name: "Heating & gas",
  icon: "flame",
  value: "228",
  pct: 16,
  tone: "var(--warning-500)"
}, {
  name: "Business travel",
  icon: "plane",
  value: "176",
  pct: 12,
  tone: "var(--info-500)"
}, {
  name: "Waste",
  icon: "trash-2",
  value: "131",
  pct: 9,
  tone: "var(--success-500)"
}, {
  name: "Supply chain",
  icon: "package",
  value: "104",
  pct: 7,
  tone: "var(--secondary-500)"
}];
const SCOPES = [{
  label: "Scope 1 · Direct",
  you: 482,
  bench: 399,
  color: "var(--primary-800)"
}, {
  label: "Scope 2 · Energy",
  you: 200,
  bench: 184,
  color: "var(--primary-500)"
}, {
  label: "Scope 3 · Indirect",
  you: 751,
  bench: 780,
  color: "var(--success-500)"
}];
const OPPS = [{
  title: "Switch to a renewable electricity tariff",
  saving: "−180 tCO₂e/yr",
  effort: "Low effort",
  icon: "bolt"
}, {
  title: "Electrify your delivery fleet",
  saving: "−240 tCO₂e/yr",
  effort: "High effort",
  icon: "truck"
}, {
  title: "Improve premises insulation",
  saving: "−64 tCO₂e/yr",
  effort: "Medium effort",
  icon: "building"
}];
function ScopeBars() {
  const max = 800;
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-0.01em",
      color: "var(--text-base)"
    }
  }, "You vs benchmark, by scope"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    variant: "soft"
  }, "Your sector")), SCOPES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-muted)"
    }
  }, s.label), [["Your business", s.you, s.color, false], ["Benchmark", s.bench, "var(--neutral-200)", true]].map(([lab, val, col, isBench]) => /*#__PURE__*/React.createElement("div", {
    key: lab,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      flex: "none",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: isBench ? "var(--text-subtle)" : "var(--text-base)"
    }
  }, lab), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${val / max * 100}%`,
      height: "100%",
      background: col,
      borderRadius: "var(--radius-xs)",
      border: isBench ? "1px solid var(--border-default)" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-tnum",
    style: {
      fontFamily: "var(--font-system)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, val, " tCO\u2082e")))))));
}
function Overview({
  period,
  setPeriod,
  onAddData
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: 24,
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 4px",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: "-0.018em",
      color: "var(--text-base)"
    }
  }, "Your footprint at a glance"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, "Estimated from your connected accounts \xB7 updated 3 days ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    items: [{
      value: "m",
      label: "Month"
    }, {
      value: "q",
      label: "Quarter"
    }, {
      value: "y",
      label: "Year"
    }],
    value: period,
    onChange: setPeriod
  }), /*#__PURE__*/React.createElement(Btn, {
    variant: "tertiary",
    iconLeft: I("plus"),
    onClick: onAddData
  }, "Add data"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--primary-700)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-muted)"
    }
  }, "Total emissions")), /*#__PURE__*/React.createElement("div", {
    style: {
      whiteSpace: "nowrap",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-tnum",
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 48,
      letterSpacing: "-0.025em",
      color: "var(--text-base)"
    }
  }, "1,433"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 20,
      color: "var(--text-muted)",
      marginLeft: 8
    }
  }, "tCO\u2082e")), /*#__PURE__*/React.createElement(Delta, {
    value: "70 tCO\u2082e",
    direction: "up",
    caption: "Above sector benchmark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Sparkline, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, SCOPES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    pad: 16,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-base)"
    }
  }, s.label)), /*#__PURE__*/React.createElement("span", {
    className: "ds-tnum",
    style: {
      fontFamily: "var(--font-system)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-base)"
    }
  }, s.you, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      fontWeight: 400
    }
  }, "tCO\u2082e")))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "4px 0 12px",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: "-0.01em",
      color: "var(--text-base)"
    }
  }, "Emissions by category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.name,
    interactive: true,
    pad: 16,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      background: "var(--neutral-100)",
      color: c.tone
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 20,
      height: 20
    }
  }, I(c.icon))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-subtle)"
    }
  }, c.pct, "%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-base)",
      marginBottom: 2
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "ds-tnum",
    style: {
      fontFamily: "var(--font-system)",
      fontSize: 18,
      fontWeight: 600,
      color: "var(--text-base)"
    }
  }, c.value, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-subtle)",
      fontWeight: 400
    }
  }, "tCO\u2082e"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--neutral-100)",
      borderRadius: "var(--radius-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${c.pct * 2.6}%`,
      height: "100%",
      background: c.tone,
      borderRadius: "var(--radius-full)"
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ScopeBars, null), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-0.01em",
      color: "var(--text-base)"
    }
  }, "Top opportunities"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    size: "small",
    iconRight: I("arrow-right")
  }, "View all")), OPPS.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.title,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      flex: "none",
      borderRadius: "var(--radius-md)",
      background: "var(--success-50)",
      color: "var(--success-600)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18
    }
  }, I(o.icon))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-base)"
    }
  }, o.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-subtle)"
    }
  }, o.effort)), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "soft"
  }, o.saving))))));
}
function Sparkline() {
  const pts = [28, 24, 30, 26, 34, 31, 38, 35, 40];
  const w = 100,
    h = 36;
  const max = Math.max(...pts),
    min = Math.min(...pts);
  const d = pts.map((p, i) => `${i / (pts.length - 1) * w},${h - (p - min) / (max - min) * h}`).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: 40
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d,
    fill: "none",
    stroke: "var(--primary-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }));
}
Object.assign(window, {
  Sidebar,
  TopBar,
  Overview,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/footprint-platform/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusIndicator = __ds_scope.StatusIndicator;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
