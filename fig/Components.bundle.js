// Components bundle — 17 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 0:32 Relume
function Relume(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 20,
    viewBox: "0 0 18 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2,
      width: 18,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.73 5.12 L 17.59 4.87 C 17.409 4.568 17.155 4.316 16.85 4.14 L 10.14 0.27 C 9.836 0.094 9.491 0.001 9.14 0 L 8.85 0 C 8.499 0.001 8.154 0.094 7.85 0.27 L 1.14 4.15 C 0.837 4.325 0.585 4.577 0.41 4.88 L 0.27 5.13 C 0.094 5.434 0.001 5.779 0 6.13 L 0 13.88 C 0.001 14.231 0.094 14.576 0.27 14.88 L 0.41 15.13 C 0.59 15.429 0.84 15.68 1.14 15.86 L 7.86 19.73 C 8.162 19.91 8.508 20.003 8.86 20 L 9.14 20 C 9.491 19.999 9.836 19.906 10.14 19.73 L 16.85 15.85 C 17.156 15.679 17.409 15.426 17.58 15.12 L 17.73 14.87 C 17.904 14.565 17.997 14.221 18 13.87 L 18 6.12 C 17.999 5.769 17.906 5.424 17.73 5.12 Z M 8.85 2 L 9.14 2 L 15 5.38 L 9 8.84 L 3 5.38 L 8.85 2 Z M 10 17.5 L 15.85 14.12 L 16 13.87 L 16 7.11 L 10 10.58 L 10 17.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 0:41 Button (56 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button = p => "style2=" + __venc_Button(p.style2) + '|' + "small=" + __venc_Button(p.small) + '|' + "iconPosition=" + __venc_Button(p.iconPosition) + '|' + "alternate=" + __venc_Button(p.alternate);
function Button(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "primary",
    small: _p.small ?? false,
    iconPosition: _p.iconPosition ?? "no icon",
    alternate: _p.alternate ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-haiti)",
      borderTop: "1.500px solid var(--color-haiti-dark)",
      borderRight: "1.500px solid var(--color-haiti-dark)",
      borderBottom: "4px solid var(--color-haiti-dark)",
      borderLeft: "1.500px solid var(--color-haiti-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-haiti)",
      borderTop: "1.500px solid var(--color-haiti-dark)",
      borderRight: "1.500px solid var(--color-haiti-dark)",
      borderBottom: "4px solid var(--color-haiti-dark)",
      borderLeft: "1.500px solid var(--color-haiti-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-haiti)",
      borderTop: "1.500px solid var(--color-haiti-dark)",
      borderRight: "1.500px solid var(--color-haiti-dark)",
      borderBottom: "4px solid var(--color-haiti-dark)",
      borderLeft: "1.500px solid var(--color-haiti-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-haiti)",
      borderTop: "1.500px solid var(--color-haiti-dark)",
      borderRight: "1.500px solid var(--color-haiti-dark)",
      borderBottom: "4px solid var(--color-haiti-dark)",
      borderLeft: "1.500px solid var(--color-haiti-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-haiti)",
      borderTop: "1.500px solid var(--color-haiti-dark)",
      borderRight: "1.500px solid var(--color-haiti-dark)",
      borderBottom: "4px solid var(--color-haiti-dark)",
      borderLeft: "1.500px solid var(--color-haiti-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-haiti)",
      borderTop: "1.500px solid var(--color-haiti-dark)",
      borderRight: "1.500px solid var(--color-haiti-dark)",
      borderBottom: "4px solid var(--color-haiti-dark)",
      borderLeft: "1.500px solid var(--color-haiti-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-haiti)",
      borderTop: "1.500px solid var(--color-haiti-dark)",
      borderRight: "1.500px solid var(--color-haiti-dark)",
      borderBottom: "4px solid var(--color-haiti-dark)",
      borderLeft: "1.500px solid var(--color-haiti-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-haiti)",
      borderTop: "1.500px solid var(--color-haiti-dark)",
      borderRight: "1.500px solid var(--color-haiti-dark)",
      borderBottom: "4px solid var(--color-haiti-dark)",
      borderLeft: "1.500px solid var(--color-haiti-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-white)",
      borderTop: "1.500px solid var(--color-neutral-lighter)",
      borderRight: "1.500px solid var(--color-neutral-lighter)",
      borderBottom: "4px solid var(--color-neutral-lighter)",
      borderLeft: "1.500px solid var(--color-neutral-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-white)",
      borderTop: "1.500px solid var(--color-neutral-lighter)",
      borderRight: "1.500px solid var(--color-neutral-lighter)",
      borderBottom: "4px solid var(--color-neutral-lighter)",
      borderLeft: "1.500px solid var(--color-neutral-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-white)",
      borderTop: "1.500px solid var(--color-neutral-lighter)",
      borderRight: "1.500px solid var(--color-neutral-lighter)",
      borderBottom: "4px solid var(--color-neutral-lighter)",
      borderLeft: "1.500px solid var(--color-neutral-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-white)",
      borderTop: "1.500px solid var(--color-neutral-lighter)",
      borderRight: "1.500px solid var(--color-neutral-lighter)",
      borderBottom: "4px solid var(--color-neutral-lighter)",
      borderLeft: "1.500px solid var(--color-neutral-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-white)",
      borderTop: "1.500px solid var(--color-neutral-lighter)",
      borderRight: "1.500px solid var(--color-neutral-lighter)",
      borderBottom: "4px solid var(--color-neutral-lighter)",
      borderLeft: "1.500px solid var(--color-neutral-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-white)",
      borderTop: "1.500px solid var(--color-neutral-lighter)",
      borderRight: "1.500px solid var(--color-neutral-lighter)",
      borderBottom: "4px solid var(--color-neutral-lighter)",
      borderLeft: "1.500px solid var(--color-neutral-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-white)",
      borderTop: "1.500px solid var(--color-neutral-lighter)",
      borderRight: "1.500px solid var(--color-neutral-lighter)",
      borderBottom: "4px solid var(--color-neutral-lighter)",
      borderLeft: "1.500px solid var(--color-neutral-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--color-white)",
      boxShadow: "0 0 0 1px var(--color-neutral-lighter), inset 0px -4px 0px 0px var(--color-neutral-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-cta-text)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Relume, null)));
  const __impls = {
    // figma: Style=Primary, Small=False, Alternate=False, Icon position=No icon
    "style2=primary|small=false|iconPosition=no icon|alternate=false": __body0,
    // figma: Style=Primary, Small=False, Alternate=False, Icon position=Leading
    "style2=primary|small=false|iconPosition=leading|alternate=false": __body1,
    // figma: Style=Primary, Small=False, Alternate=False, Icon position=Trailing
    "style2=primary|small=false|iconPosition=trailing|alternate=false": __body2,
    // figma: Style=Primary, Small=False, Alternate=False, Icon position=Only
    "style2=primary|small=false|iconPosition=only|alternate=false": __body3,
    // figma: Style=Primary, Small=True, Alternate=False, Icon position=No icon
    "style2=primary|small=true|iconPosition=no icon|alternate=false": __body4,
    // figma: Style=Primary, Small=True, Alternate=False, Icon position=Leading
    "style2=primary|small=true|iconPosition=leading|alternate=false": __body5,
    // figma: Style=Primary, Small=True, Alternate=False, Icon position=Trailing
    "style2=primary|small=true|iconPosition=trailing|alternate=false": __body6,
    // figma: Style=Primary, Small=True, Alternate=False, Icon position=Only
    "style2=primary|small=true|iconPosition=only|alternate=false": __body7,
    // figma: Style=Secondary, Small=False, Alternate=False, Icon position=No icon
    "style2=secondary|small=false|iconPosition=no icon|alternate=false": __body8,
    // figma: Style=Secondary, Small=False, Alternate=False, Icon position=Leading
    "style2=secondary|small=false|iconPosition=leading|alternate=false": __body9,
    // figma: Style=Secondary, Small=False, Alternate=False, Icon position=Trailing
    "style2=secondary|small=false|iconPosition=trailing|alternate=false": __body10,
    // figma: Style=Secondary, Small=False, Alternate=False, Icon position=Only
    "style2=secondary|small=false|iconPosition=only|alternate=false": __body11,
    // figma: Style=Secondary, Small=True, Alternate=False, Icon position=No icon
    "style2=secondary|small=true|iconPosition=no icon|alternate=false": __body12,
    // figma: Style=Secondary, Small=True, Alternate=False, Icon position=Leading
    "style2=secondary|small=true|iconPosition=leading|alternate=false": __body13,
    // figma: Style=Secondary, Small=True, Alternate=False, Icon position=Trailing
    "style2=secondary|small=true|iconPosition=trailing|alternate=false": __body14,
    // figma: Style=Secondary, Small=True, Alternate=False, Icon position=Only
    "style2=secondary|small=true|iconPosition=only|alternate=false": __body15,
    // figma: Style=Tertiary, Small=False, Alternate=False, Icon position=No icon
    "style2=tertiary|small=false|iconPosition=no icon|alternate=false": __body16,
    // figma: Style=Tertiary, Small=False, Alternate=False, Icon position=Leading
    "style2=tertiary|small=false|iconPosition=leading|alternate=false": __body17,
    // figma: Style=Tertiary, Small=False, Alternate=False, Icon position=Trailing
    "style2=tertiary|small=false|iconPosition=trailing|alternate=false": __body18,
    // figma: Style=Tertiary, Small=False, Alternate=False, Icon position=Only
    "style2=tertiary|small=false|iconPosition=only|alternate=false": __body19,
    // figma: Style=Tertiary, Small=True, Alternate=False, Icon position=No icon
    "style2=tertiary|small=true|iconPosition=no icon|alternate=false": __body20,
    // figma: Style=Tertiary, Small=True, Alternate=False, Icon position=Leading
    "style2=tertiary|small=true|iconPosition=leading|alternate=false": __body21,
    // figma: Style=Tertiary, Small=True, Alternate=False, Icon position=Trailing
    "style2=tertiary|small=true|iconPosition=trailing|alternate=false": __body22,
    // figma: Style=Tertiary, Small=True, Alternate=False, Icon position=Only
    "style2=tertiary|small=true|iconPosition=only|alternate=false": __body23,
    // figma: Style=Link, Small=False, Alternate=False, Icon position=No icon
    "style2=link|small=false|iconPosition=no icon|alternate=false": __body24,
    // figma: Style=Link, Small=False, Alternate=False, Icon position=Leading
    "style2=link|small=false|iconPosition=leading|alternate=false": __body25,
    // figma: Style=Link, Small=False, Alternate=False, Icon position=Trailing
    "style2=link|small=false|iconPosition=trailing|alternate=false": __body26,
    // figma: Style=Link, Small=False, Alternate=False, Icon position=Only
    "style2=link|small=false|iconPosition=only|alternate=false": __body27,
    // figma: Style=Primary, Small=False, Alternate=True, Icon position=No icon
    "style2=primary|small=false|iconPosition=no icon|alternate=true": __body28,
    // figma: Style=Primary, Small=False, Alternate=True, Icon position=Leading
    "style2=primary|small=false|iconPosition=leading|alternate=true": __body29,
    // figma: Style=Primary, Small=False, Alternate=True, Icon position=Trailing
    "style2=primary|small=false|iconPosition=trailing|alternate=true": __body30,
    // figma: Style=Primary, Small=False, Alternate=True, Icon position=Only
    "style2=primary|small=false|iconPosition=only|alternate=true": __body31,
    // figma: Style=Primary, Small=True, Alternate=True, Icon position=No icon
    "style2=primary|small=true|iconPosition=no icon|alternate=true": __body32,
    // figma: Style=Primary, Small=True, Alternate=True, Icon position=Leading
    "style2=primary|small=true|iconPosition=leading|alternate=true": __body33,
    // figma: Style=Primary, Small=True, Alternate=True, Icon position=Trailing
    "style2=primary|small=true|iconPosition=trailing|alternate=true": __body34,
    // figma: Style=Primary, Small=True, Alternate=True, Icon position=Only
    "style2=primary|small=true|iconPosition=only|alternate=true": __body35,
    // figma: Style=Secondary, Small=False, Alternate=True, Icon position=No icon
    "style2=secondary|small=false|iconPosition=no icon|alternate=true": __body36,
    // figma: Style=Secondary, Small=False, Alternate=True, Icon position=Leading
    "style2=secondary|small=false|iconPosition=leading|alternate=true": __body37,
    // figma: Style=Secondary, Small=False, Alternate=True, Icon position=Trailing
    "style2=secondary|small=false|iconPosition=trailing|alternate=true": __body38,
    // figma: Style=Secondary, Small=False, Alternate=True, Icon position=Only
    "style2=secondary|small=false|iconPosition=only|alternate=true": __body39,
    // figma: Style=Secondary, Small=True, Alternate=True, Icon position=No icon
    "style2=secondary|small=true|iconPosition=no icon|alternate=true": __body40,
    // figma: Style=Secondary, Small=True, Alternate=True, Icon position=Leading
    "style2=secondary|small=true|iconPosition=leading|alternate=true": __body41,
    // figma: Style=Secondary, Small=True, Alternate=True, Icon position=Trailing
    "style2=secondary|small=true|iconPosition=trailing|alternate=true": __body42,
    // figma: Style=Secondary, Small=True, Alternate=True, Icon position=Only
    "style2=secondary|small=true|iconPosition=only|alternate=true": __body43,
    // figma: Style=Tertiary, Small=False, Alternate=True, Icon position=No icon
    "style2=tertiary|small=false|iconPosition=no icon|alternate=true": __body44,
    // figma: Style=Tertiary, Small=False, Alternate=True, Icon position=Leading
    "style2=tertiary|small=false|iconPosition=leading|alternate=true": __body45,
    // figma: Style=Tertiary, Small=False, Alternate=True, Icon position=Trailing
    "style2=tertiary|small=false|iconPosition=trailing|alternate=true": __body46,
    // figma: Style=Tertiary, Small=False, Alternate=True, Icon position=Only
    "style2=tertiary|small=false|iconPosition=only|alternate=true": __body47,
    // figma: Style=Tertiary, Small=True, Alternate=True, Icon position=No icon
    "style2=tertiary|small=true|iconPosition=no icon|alternate=true": __body48,
    // figma: Style=Tertiary, Small=True, Alternate=True, Icon position=Leading
    "style2=tertiary|small=true|iconPosition=leading|alternate=true": __body49,
    // figma: Style=Tertiary, Small=True, Alternate=True, Icon position=Trailing
    "style2=tertiary|small=true|iconPosition=trailing|alternate=true": __body50,
    // figma: Style=Tertiary, Small=True, Alternate=True, Icon position=Only
    "style2=tertiary|small=true|iconPosition=only|alternate=true": __body51,
    // figma: Style=Link, Small=False, Alternate=True, Icon position=No icon
    "style2=link|small=false|iconPosition=no icon|alternate=true": __body52,
    // figma: Style=Link, Small=False, Alternate=True, Icon position=Leading
    "style2=link|small=false|iconPosition=leading|alternate=true": __body53,
    // figma: Style=Link, Small=False, Alternate=True, Icon position=Trailing
    "style2=link|small=false|iconPosition=trailing|alternate=true": __body54,
    // figma: Style=Link, Small=False, Alternate=True, Icon position=Only
    "style2=link|small=false|iconPosition=only|alternate=true": __body55
  };
  return (__impls[__vkey_Button(props)] ?? __body0)();
}

// figma node: 0:218 call
function Call(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.305,
    height: 18.305,
    viewBox: "0 0 18.305 18.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.85,
      top: 2.845,
      width: 18.305,
      height: 18.305
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.036 18.305 C 15.079 18.305 13.087 17.834 11.061 16.893 C 9.035 15.952 7.156 14.616 5.426 12.885 C 3.695 11.154 2.358 9.275 1.415 7.247 C 0.472 5.219 0 3.228 0 1.274 C 0 0.913 0.121 0.61 0.364 0.366 C 0.607 0.122 0.908 0 1.268 0 L 4.769 0 C 5.07 0 5.323 0.096 5.527 0.289 C 5.732 0.481 5.873 0.735 5.952 1.048 L 6.625 4.094 C 6.667 4.381 6.662 4.637 6.608 4.863 C 6.555 5.088 6.443 5.282 6.274 5.443 L 3.756 7.926 C 4.173 8.628 4.616 9.283 5.083 9.892 C 5.551 10.502 6.07 11.082 6.641 11.633 C 7.242 12.254 7.869 12.816 8.523 13.319 C 9.176 13.822 9.858 14.262 10.568 14.638 L 12.973 12.17 C 13.167 11.959 13.39 11.816 13.641 11.741 C 13.892 11.667 14.146 11.654 14.401 11.703 L 17.256 12.335 C 17.57 12.422 17.823 12.582 18.016 12.814 C 18.209 13.047 18.305 13.317 18.305 13.625 L 18.305 17.036 C 18.305 17.399 18.183 17.701 17.939 17.942 C 17.695 18.184 17.394 18.305 17.036 18.305 Z M 2.904 6.384 L 4.923 4.375 L 4.355 1.709 L 1.715 1.709 C 1.745 2.385 1.851 3.101 2.034 3.856 C 2.218 4.611 2.508 5.453 2.904 6.384 Z M 12.147 15.483 C 12.811 15.791 13.533 16.044 14.315 16.24 C 15.098 16.436 15.858 16.552 16.596 16.59 L 16.596 13.94 L 14.11 13.425 L 12.147 15.483 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:193 chevron_right
function ChevronRight(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.692,
    height: 11.617,
    viewBox: "0 0 6.692 11.617",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.51,
      top: 6.173,
      width: 6.692,
      height: 11.617
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.596 5.802 L 0.243 1.449 C 0.073 1.279 -0.008 1.08 0.001 0.852 C 0.009 0.624 0.098 0.425 0.268 0.255 C 0.438 0.085 0.641 0 0.877 0 C 1.114 0 1.317 0.085 1.487 0.255 L 6.431 5.199 C 6.522 5.29 6.588 5.386 6.63 5.485 C 6.671 5.584 6.692 5.69 6.692 5.802 C 6.692 5.914 6.671 6.019 6.63 6.119 C 6.588 6.218 6.522 6.313 6.431 6.404 L 1.462 11.374 C 1.292 11.544 1.093 11.624 0.865 11.616 C 0.637 11.608 0.438 11.519 0.268 11.349 C 0.098 11.179 0.013 10.975 0.013 10.739 C 0.013 10.503 0.098 10.3 0.268 10.13 L 4.596 5.802 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:206 communities
function Communities(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.305,
    height: 20.305,
    viewBox: "0 0 20.305 20.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.85,
      top: 1.845,
      width: 20.305,
      height: 20.305
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.06 14.234 C 7.594 14.234 8.053 14.046 8.436 13.671 C 8.819 13.295 9.01 12.844 9.01 12.316 C 9.01 11.789 8.819 11.337 8.436 10.961 C 8.053 10.585 7.594 10.397 7.06 10.397 C 6.54 10.397 6.095 10.585 5.726 10.961 C 5.357 11.337 5.173 11.789 5.173 12.318 C 5.173 12.844 5.357 13.295 5.726 13.671 C 6.095 14.046 6.54 14.234 7.06 14.234 Z M 13.235 14.234 C 13.761 14.234 14.212 14.046 14.587 13.671 C 14.963 13.295 15.151 12.844 15.151 12.316 C 15.151 11.789 14.964 11.337 14.589 10.961 C 14.214 10.585 13.764 10.397 13.238 10.397 C 12.711 10.397 12.259 10.585 11.881 10.961 C 11.503 11.337 11.314 11.789 11.314 12.318 C 11.314 12.844 11.502 13.295 11.88 13.671 C 12.257 14.046 12.708 14.234 13.235 14.234 Z M 10.146 8.8 C 10.679 8.8 11.137 8.611 11.518 8.232 C 11.9 7.853 12.09 7.397 12.09 6.862 C 12.09 6.328 11.9 5.878 11.519 5.512 C 11.139 5.146 10.682 4.963 10.148 4.963 C 9.627 4.963 9.182 5.15 8.813 5.523 C 8.443 5.896 8.259 6.343 8.259 6.863 C 8.259 7.398 8.44 7.854 8.802 8.233 C 9.165 8.611 9.613 8.8 10.146 8.8 Z M 10.157 20.305 C 8.754 20.305 7.437 20.039 6.206 19.508 C 4.975 18.977 3.899 18.25 2.977 17.328 C 2.055 16.406 1.328 15.329 0.797 14.098 C 0.266 12.867 0 11.549 0 10.144 C 0 8.739 0.266 7.421 0.797 6.189 C 1.328 4.957 2.055 3.884 2.976 2.97 C 3.897 2.056 4.974 1.333 6.205 0.8 C 7.437 0.267 8.756 0 10.161 0 C 11.566 0 12.884 0.266 14.117 0.799 C 15.349 1.332 16.422 2.055 17.336 2.968 C 18.249 3.882 18.973 4.956 19.505 6.19 C 20.038 7.425 20.305 8.745 20.305 10.149 C 20.305 11.553 20.038 12.87 19.505 14.1 C 18.972 15.331 18.249 16.406 17.335 17.324 C 16.421 18.243 15.347 18.969 14.113 19.503 C 12.879 20.038 11.56 20.305 10.157 20.305 Z M 10.162 18.602 C 12.504 18.602 14.496 17.779 16.136 16.133 C 17.776 14.487 18.596 12.49 18.596 10.143 C 18.596 7.801 17.777 5.809 16.14 4.169 C 14.503 2.529 12.506 1.709 10.147 1.709 C 7.811 1.709 5.819 2.528 4.173 4.165 C 2.526 5.802 1.703 7.799 1.703 10.158 C 1.703 12.494 2.526 14.486 4.172 16.132 C 5.818 17.779 7.815 18.602 10.162 18.602 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:11 Company Logo (2 variants)
const __venc_CompanyLogo = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CompanyLogo = p => "alternate=" + __venc_CompanyLogo(p.alternate);
function CompanyLogo(_p = {}) {
  const props = {
    ..._p,
    alternate: _p.alternate ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 84,
      height: 36,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-neutral-darkest)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.667,
      top: 0,
      width: 70,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.807,
    height: 15.945,
    viewBox: "0 0 18.807 15.945",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.816,
      top: 10.874,
      width: 18.807,
      height: 15.945
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.428 6.207 L 16.391 6.244 C 16.651 5.538 17.172 5.278 17.618 5.278 C 18.25 5.278 18.807 5.761 18.807 6.467 C 18.807 6.616 18.807 6.802 18.733 7.025 C 17.432 10.37 14.681 12.08 12.005 12.34 C 10.779 14.421 8.772 15.945 5.91 15.945 C 1.821 15.945 0 12.712 0 9.181 C 0 4.832 2.75 0 7.359 0 C 8.363 0 9.218 0.223 9.924 0.52 C 12.005 1.301 13.343 4.014 13.343 6.913 C 13.343 7.843 13.269 8.772 13.046 9.664 C 14.421 9.181 15.722 8.065 16.428 6.207 Z M 8.66 3.048 L 8.66 3.011 C 7.843 3.011 7.359 4.088 7.359 5.389 C 7.359 7.285 8.4 9.032 10.035 9.664 C 10.296 8.846 10.407 7.917 10.407 6.839 C 10.407 4.758 9.775 3.048 8.66 3.048 Z M 5.947 13.232 C 6.988 13.232 8.028 12.786 8.846 11.857 C 6.43 10.779 4.906 8.251 4.906 5.835 C 4.906 5.018 5.055 4.163 5.278 3.419 C 3.791 4.646 2.936 7.062 2.936 9.181 C 2.936 11.931 4.237 13.232 5.947 13.232 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.439,
    height: 24.680,
    viewBox: "0 0 19.439 24.680",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.33,
      top: 11.321,
      width: 19.439,
      height: 24.68
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.06 5.761 L 17.023 5.798 C 17.283 5.092 17.729 4.795 18.175 4.795 C 18.807 4.795 19.439 5.352 19.439 6.058 C 19.439 6.244 19.402 6.393 19.327 6.579 C 17.878 10.11 15.722 14.235 12.266 16.651 L 12.191 17.395 C 11.782 21.855 9.515 24.68 6.653 24.68 C 4.497 24.68 3.234 23.193 3.234 21.446 C 3.234 18.287 6.467 17.135 9.478 15.202 C 9.552 14.421 9.589 13.529 9.627 12.526 C 8.14 14.161 6.542 14.83 5.129 14.83 C 2.304 14.83 0 12.526 0 8.995 C 0 3.568 3.568 0 7.545 0 L 7.582 0 C 10.296 0 13.195 1.45 13.195 4.051 C 13.195 4.906 12.823 9.552 12.526 13.158 C 14.533 11.262 16.205 8.177 17.06 5.761 Z M 5.538 12.154 C 6.913 12.154 8.772 11.299 9.924 7.099 C 10.11 6.17 10.221 5.352 10.184 4.386 C 9.961 3.382 9.106 2.788 7.88 2.788 C 5.352 2.788 2.936 5.203 2.936 8.883 C 2.936 11.113 3.977 12.154 5.538 12.154 Z M 6.95 21.966 L 6.988 21.966 C 7.768 21.966 8.623 21.446 9.181 18.101 C 7.545 19.067 6.021 20.034 6.021 21.186 C 6.021 21.669 6.393 21.966 6.95 21.966 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.807,
    height: 15.945,
    viewBox: "0 0 18.807 15.945",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.554,
      top: 10.874,
      width: 18.807,
      height: 15.945
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.428 6.207 L 16.391 6.244 C 16.651 5.538 17.172 5.278 17.618 5.278 C 18.25 5.278 18.807 5.761 18.807 6.467 C 18.807 6.616 18.807 6.802 18.733 7.025 C 17.432 10.37 14.681 12.08 12.005 12.34 C 10.779 14.421 8.772 15.945 5.91 15.945 C 1.821 15.945 0 12.712 0 9.181 C 0 4.832 2.75 0 7.359 0 C 8.363 0 9.218 0.223 9.924 0.52 C 12.005 1.301 13.343 4.014 13.343 6.913 C 13.343 7.843 13.269 8.772 13.046 9.664 C 14.421 9.181 15.722 8.065 16.428 6.207 Z M 8.66 3.048 L 8.66 3.011 C 7.842 3.011 7.359 4.088 7.359 5.389 C 7.359 7.285 8.4 9.032 10.035 9.664 C 10.296 8.846 10.407 7.917 10.407 6.839 C 10.407 4.758 9.775 3.048 8.66 3.048 Z M 5.947 13.232 C 6.988 13.232 8.028 12.786 8.846 11.857 C 6.43 10.779 4.906 8.251 4.906 5.835 C 4.906 5.018 5.055 4.163 5.278 3.419 C 3.791 4.646 2.936 7.062 2.936 9.181 C 2.936 11.931 4.237 13.232 5.947 13.232 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.595,
    height: 16.186,
    viewBox: "0 0 21.595 16.186",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10.241,
      width: 21.595,
      height: 16.186
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.443 5.667 C 19.923 5.667 19.476 5.927 19.179 6.634 C 18.213 9.087 16.206 13.25 14.161 13.25 C 12.874 13.25 11.878 12.959 10.871 12.664 C 9.843 12.364 8.805 12.06 7.434 12.06 C 6.951 12.06 6.282 12.135 5.65 12.246 C 7.553 9.65 8.264 6.507 8.953 0.564 C 7.656 0.482 6.601 0.242 5.831 0 C 5.01 7.536 4.077 10.41 0.669 13.25 C 0.223 13.621 0 14.142 0 14.662 C 0 15.48 0.706 16.186 1.598 16.186 C 1.896 16.186 2.23 16.075 2.565 15.926 C 4.46 15.071 5.613 14.848 7.025 14.848 C 7.923 14.848 8.998 15.105 10.149 15.38 C 11.474 15.697 12.9 16.037 14.273 16.037 C 17.284 16.037 19.253 13.101 21.446 7.414 C 21.558 7.228 21.595 7.005 21.595 6.819 C 21.595 6.113 21.038 5.667 20.443 5.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.128,
    height: 9.292,
    viewBox: "0 0 15.128 9.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.152,
      top: 0,
      width: 15.128,
      height: 9.292
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.868 8.703 C 5.541 8.938 6.592 9.211 7.954 9.292 L 8.177 9.292 C 12.377 9.292 15.128 6.69 15.128 3.568 C 15.128 1.561 13.567 0 11.374 0 C 8.437 0 6.393 2.007 5.352 5.984 C 4.051 5.278 3.159 4.014 2.713 2.416 C 2.49 1.635 2.007 1.152 1.338 1.152 C 0.52 1.152 0 1.784 0 2.639 C 0 5.166 1.97 7.582 4.869 8.698 L 4.868 8.703 Z M 8.4 6.579 C 8.958 4.014 9.85 2.788 11.039 2.788 C 11.671 2.788 12.08 3.159 12.08 3.828 C 12.08 5.055 10.779 6.505 8.4 6.579 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 84,
      height: 36,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-cta-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.667,
      top: 0,
      width: 70,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.807,
    height: 15.945,
    viewBox: "0 0 18.807 15.945",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.816,
      top: 10.874,
      width: 18.807,
      height: 15.945
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.428 6.207 L 16.391 6.244 C 16.651 5.538 17.172 5.278 17.618 5.278 C 18.25 5.278 18.807 5.761 18.807 6.467 C 18.807 6.616 18.807 6.802 18.733 7.025 C 17.432 10.37 14.681 12.08 12.005 12.34 C 10.779 14.421 8.772 15.945 5.91 15.945 C 1.821 15.945 0 12.712 0 9.181 C 0 4.832 2.75 0 7.359 0 C 8.363 0 9.218 0.223 9.924 0.52 C 12.005 1.301 13.343 4.014 13.343 6.913 C 13.343 7.843 13.269 8.772 13.046 9.664 C 14.421 9.181 15.722 8.065 16.428 6.207 Z M 8.66 3.048 L 8.66 3.011 C 7.843 3.011 7.359 4.088 7.359 5.389 C 7.359 7.285 8.4 9.032 10.035 9.664 C 10.296 8.846 10.407 7.917 10.407 6.839 C 10.407 4.758 9.775 3.048 8.66 3.048 Z M 5.947 13.232 C 6.988 13.232 8.028 12.786 8.846 11.857 C 6.43 10.779 4.906 8.251 4.906 5.835 C 4.906 5.018 5.055 4.163 5.278 3.419 C 3.791 4.646 2.936 7.062 2.936 9.181 C 2.936 11.931 4.237 13.232 5.947 13.232 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.439,
    height: 24.680,
    viewBox: "0 0 19.439 24.680",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.33,
      top: 11.321,
      width: 19.439,
      height: 24.68
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.06 5.761 L 17.023 5.798 C 17.283 5.092 17.729 4.795 18.175 4.795 C 18.807 4.795 19.439 5.352 19.439 6.058 C 19.439 6.244 19.402 6.393 19.327 6.579 C 17.878 10.11 15.722 14.235 12.266 16.651 L 12.191 17.395 C 11.782 21.855 9.515 24.68 6.653 24.68 C 4.497 24.68 3.234 23.193 3.234 21.446 C 3.234 18.287 6.467 17.135 9.478 15.202 C 9.552 14.421 9.589 13.529 9.627 12.526 C 8.14 14.161 6.542 14.83 5.129 14.83 C 2.304 14.83 0 12.526 0 8.995 C 0 3.568 3.568 0 7.545 0 L 7.582 0 C 10.296 0 13.195 1.45 13.195 4.051 C 13.195 4.906 12.823 9.552 12.526 13.158 C 14.533 11.262 16.205 8.177 17.06 5.761 Z M 5.538 12.154 C 6.913 12.154 8.772 11.299 9.924 7.099 C 10.11 6.17 10.221 5.352 10.184 4.386 C 9.961 3.382 9.106 2.788 7.88 2.788 C 5.352 2.788 2.936 5.203 2.936 8.883 C 2.936 11.113 3.977 12.154 5.538 12.154 Z M 6.95 21.966 L 6.988 21.966 C 7.768 21.966 8.623 21.446 9.181 18.101 C 7.545 19.067 6.021 20.034 6.021 21.186 C 6.021 21.669 6.393 21.966 6.95 21.966 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.807,
    height: 15.945,
    viewBox: "0 0 18.807 15.945",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.554,
      top: 10.874,
      width: 18.807,
      height: 15.945
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.428 6.207 L 16.391 6.244 C 16.651 5.538 17.172 5.278 17.618 5.278 C 18.25 5.278 18.807 5.761 18.807 6.467 C 18.807 6.616 18.807 6.802 18.733 7.025 C 17.432 10.37 14.681 12.08 12.005 12.34 C 10.779 14.421 8.772 15.945 5.91 15.945 C 1.821 15.945 0 12.712 0 9.181 C 0 4.832 2.75 0 7.359 0 C 8.363 0 9.218 0.223 9.924 0.52 C 12.005 1.301 13.343 4.014 13.343 6.913 C 13.343 7.843 13.269 8.772 13.046 9.664 C 14.421 9.181 15.722 8.065 16.428 6.207 Z M 8.66 3.048 L 8.66 3.011 C 7.842 3.011 7.359 4.088 7.359 5.389 C 7.359 7.285 8.4 9.032 10.035 9.664 C 10.296 8.846 10.407 7.917 10.407 6.839 C 10.407 4.758 9.775 3.048 8.66 3.048 Z M 5.947 13.232 C 6.988 13.232 8.028 12.786 8.846 11.857 C 6.43 10.779 4.906 8.251 4.906 5.835 C 4.906 5.018 5.055 4.163 5.278 3.419 C 3.791 4.646 2.936 7.062 2.936 9.181 C 2.936 11.931 4.237 13.232 5.947 13.232 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.595,
    height: 16.186,
    viewBox: "0 0 21.595 16.186",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10.241,
      width: 21.595,
      height: 16.186
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.443 5.667 C 19.923 5.667 19.476 5.927 19.179 6.634 C 18.213 9.087 16.206 13.25 14.161 13.25 C 12.874 13.25 11.878 12.959 10.871 12.664 C 9.843 12.364 8.805 12.06 7.434 12.06 C 6.951 12.06 6.282 12.135 5.65 12.246 C 7.553 9.65 8.264 6.507 8.953 0.564 C 7.656 0.482 6.601 0.242 5.831 0 C 5.01 7.536 4.077 10.41 0.669 13.25 C 0.223 13.621 0 14.142 0 14.662 C 0 15.48 0.706 16.186 1.598 16.186 C 1.896 16.186 2.23 16.075 2.565 15.926 C 4.46 15.071 5.613 14.848 7.025 14.848 C 7.923 14.848 8.998 15.105 10.149 15.38 C 11.474 15.697 12.9 16.037 14.273 16.037 C 17.284 16.037 19.253 13.101 21.446 7.414 C 21.558 7.228 21.595 7.005 21.595 6.819 C 21.595 6.113 21.038 5.667 20.443 5.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.128,
    height: 9.292,
    viewBox: "0 0 15.128 9.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.152,
      top: 0,
      width: 15.128,
      height: 9.292
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.868 8.703 C 5.541 8.938 6.592 9.211 7.954 9.292 L 8.177 9.292 C 12.377 9.292 15.128 6.69 15.128 3.568 C 15.128 1.561 13.567 0 11.374 0 C 8.437 0 6.393 2.007 5.352 5.984 C 4.051 5.278 3.159 4.014 2.713 2.416 C 2.49 1.635 2.007 1.152 1.338 1.152 C 0.52 1.152 0 1.784 0 2.639 C 0 5.166 1.97 7.582 4.869 8.698 L 4.868 8.703 Z M 8.4 6.579 C 8.958 4.014 9.85 2.788 11.039 2.788 C 11.671 2.788 12.08 3.159 12.08 3.828 C 12.08 5.055 10.779 6.505 8.4 6.579 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __impls = {
    // figma: Alternate=False
    "alternate=false": __body0,
    // figma: Alternate=True
    "alternate=true": __body1
  };
  return (__impls[__vkey_CompanyLogo(props)] ?? __body0)();
}

// figma node: 0:204 docs
function Docs(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.305,
    height: 20.305,
    viewBox: "0 0 16.305 20.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.85,
      top: 1.845,
      width: 16.305,
      height: 20.305
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.989 10.458 L 11.31 10.458 C 11.532 10.458 11.719 10.383 11.87 10.233 C 12.02 10.084 12.096 9.895 12.096 9.668 C 12.096 9.441 12.021 9.254 11.872 9.107 C 11.723 8.96 11.536 8.886 11.31 8.886 L 4.989 8.886 C 4.767 8.886 4.58 8.961 4.429 9.111 C 4.279 9.261 4.203 9.449 4.203 9.677 C 4.203 9.904 4.278 10.091 4.427 10.238 C 4.576 10.385 4.763 10.458 4.989 10.458 Z M 4.989 13.53 L 11.31 13.53 C 11.532 13.53 11.719 13.455 11.87 13.305 C 12.02 13.156 12.096 12.967 12.096 12.74 C 12.096 12.512 12.021 12.325 11.872 12.178 C 11.723 12.032 11.536 11.958 11.31 11.958 L 4.989 11.958 C 4.767 11.958 4.58 12.033 4.429 12.183 C 4.279 12.333 4.203 12.521 4.203 12.748 C 4.203 12.976 4.278 13.163 4.427 13.31 C 4.576 13.457 4.763 13.53 4.989 13.53 Z M 4.989 16.602 L 8.31 16.602 C 8.532 16.602 8.719 16.527 8.87 16.377 C 9.02 16.227 9.096 16.039 9.096 15.811 C 9.096 15.584 9.021 15.397 8.872 15.25 C 8.723 15.103 8.536 15.03 8.31 15.03 L 4.989 15.03 C 4.767 15.03 4.58 15.105 4.429 15.254 C 4.279 15.404 4.203 15.593 4.203 15.82 C 4.203 16.048 4.278 16.235 4.427 16.381 C 4.576 16.528 4.763 16.602 4.989 16.602 Z M 1.703 20.305 C 1.243 20.305 0.844 20.136 0.507 19.798 C 0.169 19.461 0 19.062 0 18.602 L 0 1.709 C 0 1.248 0.169 0.847 0.507 0.508 C 0.844 0.169 1.243 0 1.703 0 L 10.025 0 C 10.261 0 10.486 0.048 10.7 0.143 C 10.913 0.238 11.097 0.363 11.25 0.516 L 15.789 5.055 C 15.942 5.208 16.067 5.392 16.162 5.605 C 16.257 5.819 16.305 6.044 16.305 6.279 L 16.305 18.602 C 16.305 19.062 16.135 19.461 15.796 19.798 C 15.458 20.136 15.057 20.305 14.596 20.305 L 1.703 20.305 Z M 14.596 6.216 L 11.294 6.216 C 10.941 6.216 10.639 6.091 10.389 5.84 C 10.139 5.59 10.014 5.289 10.014 4.935 L 10.014 1.709 L 1.703 1.709 L 1.703 18.602 L 14.596 18.602 L 14.596 6.216 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:290 Facebook
function Facebook(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2.243,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 10.061 C 20 4.505 15.523 0 10 0 C 4.477 0 0 4.505 0 10.061 C 0 15.083 3.657 19.245 8.438 20 L 8.438 12.969 L 5.898 12.969 L 5.898 10.061 L 8.438 10.061 L 8.438 7.845 C 8.438 5.323 9.93 3.93 12.215 3.93 C 13.309 3.93 14.453 4.127 14.453 4.127 L 14.453 6.603 L 13.192 6.603 C 11.95 6.603 11.563 7.378 11.563 8.174 L 11.563 10.061 L 14.336 10.061 L 13.893 12.969 L 11.563 12.969 L 11.563 20 C 16.343 19.245 20 15.083 20 10.061 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:200 finance
function Finance(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.413,
    height: 18.341,
    viewBox: "0 0 18.413 18.341",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.797,
      top: 2.862,
      width: 18.413,
      height: 18.341
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.703 18.341 C 1.243 18.341 0.845 18.172 0.507 17.834 C 0.169 17.496 0 17.097 0 16.637 L 0 0.852 C 0 0.611 0.082 0.409 0.247 0.246 C 0.411 0.082 0.614 0 0.856 0 C 1.098 0 1.299 0.082 1.461 0.246 C 1.622 0.409 1.703 0.611 1.703 0.852 L 1.703 16.637 L 17.555 16.637 C 17.795 16.637 17.998 16.72 18.164 16.884 C 18.33 17.049 18.413 17.252 18.413 17.493 C 18.413 17.735 18.33 17.937 18.164 18.098 C 17.998 18.26 17.795 18.341 17.555 18.341 L 1.703 18.341 Z M 4.421 14.762 C 4.182 14.762 3.982 14.681 3.821 14.517 C 3.659 14.353 3.578 14.151 3.578 13.911 L 3.578 7.127 C 3.578 6.886 3.66 6.684 3.822 6.521 C 3.985 6.357 4.186 6.275 4.425 6.275 L 5.776 6.275 C 6.015 6.275 6.215 6.357 6.377 6.521 C 6.538 6.684 6.619 6.886 6.619 7.127 L 6.619 13.911 C 6.619 14.151 6.538 14.353 6.375 14.517 C 6.213 14.681 6.012 14.762 5.773 14.762 L 4.421 14.762 Z M 9.443 14.762 C 9.2 14.762 8.998 14.681 8.836 14.517 C 8.675 14.353 8.594 14.151 8.594 13.911 L 8.594 1.977 C 8.594 1.736 8.675 1.534 8.838 1.371 C 9.001 1.207 9.203 1.125 9.446 1.125 L 10.798 1.125 C 11.037 1.125 11.237 1.207 11.398 1.371 C 11.56 1.534 11.641 1.736 11.641 1.977 L 11.641 13.911 C 11.641 14.151 11.559 14.353 11.397 14.517 C 11.234 14.681 11.033 14.762 10.795 14.762 L 9.443 14.762 Z M 14.365 14.762 C 14.122 14.762 13.92 14.681 13.758 14.517 C 13.597 14.353 13.516 14.151 13.516 13.911 L 13.516 11.227 C 13.516 10.986 13.597 10.784 13.76 10.62 C 13.922 10.457 14.125 10.375 14.368 10.375 L 15.713 10.375 C 15.952 10.375 16.154 10.457 16.317 10.62 C 16.481 10.784 16.563 10.986 16.563 11.227 L 16.563 13.911 C 16.563 14.151 16.48 14.353 16.316 14.517 C 16.151 14.681 15.949 14.762 15.71 14.762 L 14.365 14.762 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:292 Instagram
function Instagram(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.243,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 0 L 5 0 C 2.239 0 0 2.239 0 5 L 0 13 C 0 15.761 2.239 18 5 18 L 13 18 C 15.761 18 18 15.761 18 13 L 18 5 C 18 2.239 15.761 0 13 0 Z M 16.25 13 C 16.245 14.793 14.793 16.245 13 16.25 L 5 16.25 C 3.207 16.245 1.755 14.793 1.75 13 L 1.75 5 C 1.755 3.207 3.207 1.755 5 1.75 L 13 1.75 C 14.793 1.755 16.245 3.207 16.25 5 L 16.25 13 Z M 13.75 5.25 C 14.302 5.25 14.75 4.802 14.75 4.25 C 14.75 3.698 14.302 3.25 13.75 3.25 C 13.198 3.25 12.75 3.698 12.75 4.25 C 12.75 4.802 13.198 5.25 13.75 5.25 Z M 9 4.5 C 6.515 4.5 4.5 6.515 4.5 9 C 4.5 11.485 6.515 13.5 9 13.5 C 11.485 13.5 13.5 11.485 13.5 9 C 13.503 7.806 13.029 6.66 12.185 5.815 C 11.34 4.971 10.194 4.497 9 4.5 Z M 6.25 9 C 6.25 10.519 7.481 11.75 9 11.75 C 10.519 11.75 11.75 10.519 11.75 9 C 11.75 7.481 10.519 6.25 9 6.25 C 7.481 6.25 6.25 7.481 6.25 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 0:296 LinkedIn
function LinkedIn(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.243,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 16.5 C 0 17.328 0.672 18 1.5 18 L 16.5 18 C 17.328 18 18 17.328 18 16.5 L 18 1.5 C 18 0.672 17.328 0 16.5 0 L 1.5 0 Z M 5.521 4.003 C 5.526 4.959 4.811 5.548 3.961 5.544 C 3.161 5.54 2.464 4.903 2.468 4.004 C 2.472 3.159 3.14 2.48 4.008 2.499 C 4.888 2.519 5.526 3.165 5.521 4.003 Z M 9.28 6.762 L 6.76 6.762 L 6.758 6.762 L 6.758 15.322 L 9.422 15.322 L 9.422 15.122 C 9.422 14.742 9.421 14.362 9.421 13.982 C 9.42 12.968 9.419 11.953 9.425 10.94 C 9.426 10.694 9.437 10.438 9.5 10.203 C 9.738 9.325 10.527 8.759 11.407 8.898 C 11.973 8.986 12.347 9.314 12.504 9.847 C 12.601 10.18 12.645 10.539 12.649 10.886 C 12.661 11.934 12.659 12.981 12.657 14.029 C 12.657 14.399 12.656 14.769 12.656 15.139 L 12.656 15.32 L 15.328 15.32 L 15.328 15.115 C 15.328 14.663 15.328 14.211 15.327 13.759 C 15.327 12.63 15.326 11.5 15.329 10.37 C 15.331 9.86 15.276 9.356 15.151 8.863 C 14.964 8.129 14.577 7.521 13.948 7.082 C 13.503 6.77 13.013 6.569 12.466 6.547 C 12.404 6.544 12.341 6.541 12.278 6.537 C 11.998 6.522 11.714 6.507 11.447 6.561 C 10.682 6.714 10.01 7.064 9.502 7.681 C 9.443 7.752 9.385 7.824 9.299 7.931 L 9.28 7.956 L 9.28 6.762 Z M 2.682 15.324 L 5.332 15.324 L 5.332 6.767 L 2.682 6.767 L 2.682 15.324 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 0:220 location_on
function LocationOn(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.305,
    height: 19.781,
    viewBox: "0 0 16.305 19.781",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.85,
      top: 1.845,
      width: 16.305,
      height: 19.781
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.149 18.061 C 10.346 16.068 11.97 14.27 13.02 12.666 C 14.071 11.062 14.596 9.62 14.596 8.338 C 14.596 6.395 13.973 4.804 12.728 3.566 C 11.483 2.328 9.957 1.709 8.149 1.709 C 6.342 1.709 4.816 2.328 3.571 3.566 C 2.326 4.804 1.703 6.395 1.703 8.338 C 1.703 9.62 2.241 11.061 3.316 12.663 C 4.392 14.265 6.003 16.064 8.149 18.061 Z M 8.142 19.781 C 7.956 19.781 7.769 19.75 7.582 19.688 C 7.394 19.625 7.23 19.525 7.09 19.388 C 6.366 18.747 5.589 18.012 4.761 17.183 C 3.932 16.354 3.165 15.461 2.459 14.505 C 1.753 13.549 1.167 12.548 0.7 11.5 C 0.233 10.453 0 9.399 0 8.338 C 0 5.799 0.82 3.775 2.459 2.265 C 4.098 0.755 5.995 0 8.149 0 C 10.304 0 12.202 0.755 13.843 2.265 C 15.484 3.775 16.305 5.799 16.305 8.338 C 16.305 9.399 16.071 10.453 15.602 11.5 C 15.133 12.548 14.546 13.549 13.84 14.505 C 13.134 15.461 12.367 16.354 11.538 17.183 C 10.709 18.012 9.935 18.747 9.215 19.388 C 9.07 19.525 8.901 19.625 8.709 19.688 C 8.517 19.75 8.328 19.781 8.142 19.781 Z M 8.152 9.947 C 8.65 9.947 9.073 9.773 9.423 9.424 C 9.772 9.075 9.947 8.651 9.947 8.153 C 9.947 7.655 9.772 7.232 9.421 6.882 C 9.07 6.533 8.645 6.358 8.147 6.358 C 7.649 6.358 7.227 6.533 6.879 6.884 C 6.531 7.235 6.358 7.66 6.358 8.158 C 6.358 8.656 6.532 9.078 6.881 9.426 C 7.23 9.773 7.654 9.947 8.152 9.947 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:213 mail
function Mail(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.305,
    height: 16.305,
    viewBox: "0 0 20.305 16.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.85,
      top: 3.845,
      width: 20.305,
      height: 16.305
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.703 16.305 C 1.243 16.305 0.844 16.136 0.507 15.798 C 0.169 15.461 0 15.062 0 14.602 L 0 1.709 C 0 1.248 0.169 0.847 0.507 0.508 C 0.844 0.169 1.243 0 1.703 0 L 18.596 0 C 19.057 0 19.458 0.169 19.796 0.508 C 20.135 0.847 20.305 1.248 20.305 1.709 L 20.305 14.602 C 20.305 15.062 20.135 15.461 19.796 15.798 C 19.458 16.136 19.057 16.305 18.596 16.305 L 1.703 16.305 Z M 18.596 3.222 L 10.61 8.48 C 10.532 8.521 10.458 8.555 10.39 8.582 C 10.321 8.609 10.241 8.623 10.15 8.623 C 10.058 8.623 9.978 8.609 9.909 8.582 C 9.841 8.555 9.767 8.521 9.689 8.48 L 1.703 3.222 L 1.703 14.602 L 18.596 14.602 L 18.596 3.222 Z M 10.15 7.159 L 18.496 1.709 L 1.828 1.709 L 10.15 7.159 Z M 1.703 3.415 L 1.703 2.339 L 1.703 2.359 L 1.703 1.709 L 1.703 2.35 L 1.703 2.321 L 1.703 3.415 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:237 Text input (12 variants)
const __venc_TextInput = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_TextInput = p => "type=" + __venc_TextInput(p.type) + '|' + "alternate=" + __venc_TextInput(p.alternate);
function TextInput(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    alternate: _p.alternate ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      borderRadius: 6,
      backgroundColor: "rgba(1,8,7,0.05)",
      boxShadow: "0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(1,8,7,0.6)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Placeholder"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Placeholder"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      height: 48,
      borderRadius: 6,
      backgroundColor: "rgba(1,8,7,0.05)",
      boxShadow: "0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(1,8,7,0.6)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Placeholder"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.305,
    height: 20.305,
    viewBox: "0 0 20.305 20.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.851,
      top: 1.845,
      width: 20.305,
      height: 20.305,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.238 15.98 C 10.512 15.98 10.747 15.883 10.943 15.687 C 11.138 15.491 11.235 15.255 11.235 14.978 C 11.235 14.701 11.137 14.467 10.942 14.274 C 10.746 14.081 10.51 13.985 10.234 13.985 C 9.958 13.985 9.723 14.081 9.53 14.274 C 9.336 14.467 9.24 14.703 9.24 14.982 C 9.24 15.257 9.337 15.492 9.531 15.688 C 9.725 15.883 9.961 15.98 10.238 15.98 Z M 10.157 20.305 C 8.754 20.305 7.437 20.039 6.206 19.508 C 4.975 18.977 3.899 18.25 2.977 17.328 C 2.055 16.406 1.328 15.329 0.797 14.098 C 0.266 12.867 0 11.549 0 10.144 C 0 8.739 0.266 7.421 0.797 6.189 C 1.328 4.957 2.055 3.884 2.976 2.97 C 3.897 2.056 4.974 1.333 6.206 0.8 C 7.437 0.267 8.756 0 10.161 0 C 11.566 0 12.885 0.266 14.117 0.799 C 15.349 1.332 16.422 2.055 17.336 2.968 C 18.249 3.882 18.973 4.956 19.505 6.19 C 20.038 7.425 20.305 8.745 20.305 10.149 C 20.305 11.553 20.038 12.87 19.505 14.1 C 18.972 15.331 18.249 16.406 17.335 17.324 C 16.421 18.243 15.347 18.969 14.113 19.503 C 12.879 20.038 11.56 20.305 10.157 20.305 Z M 10.162 18.602 C 12.504 18.602 14.496 17.779 16.136 16.133 C 17.776 14.487 18.596 12.49 18.596 10.143 C 18.596 7.801 17.777 5.809 16.14 4.169 C 14.503 2.529 12.506 1.709 10.147 1.709 C 7.811 1.709 5.819 2.528 4.173 4.165 C 2.526 5.802 1.703 7.799 1.703 10.158 C 1.703 12.494 2.526 14.486 4.172 16.132 C 5.818 17.779 7.815 18.602 10.162 18.602 Z M 10.207 5.751 C 10.687 5.751 11.109 5.899 11.475 6.195 C 11.84 6.491 12.023 6.867 12.023 7.323 C 12.023 7.746 11.897 8.115 11.647 8.43 C 11.396 8.745 11.112 9.038 10.796 9.308 C 10.412 9.628 10.078 9.985 9.793 10.377 C 9.507 10.77 9.365 11.209 9.365 11.695 C 9.365 11.888 9.439 12.042 9.587 12.158 C 9.736 12.273 9.909 12.33 10.107 12.33 C 10.319 12.33 10.495 12.26 10.636 12.118 C 10.778 11.977 10.873 11.803 10.922 11.595 C 10.976 11.257 11.106 10.951 11.313 10.677 C 11.519 10.404 11.763 10.156 12.042 9.935 C 12.451 9.602 12.787 9.208 13.049 8.754 C 13.312 8.299 13.443 7.812 13.443 7.291 C 13.443 6.446 13.133 5.739 12.512 5.171 C 11.891 4.603 11.154 4.319 10.302 4.319 C 9.695 4.319 9.113 4.446 8.558 4.702 C 8.003 4.958 7.545 5.332 7.183 5.823 C 7.062 5.998 7.007 6.187 7.017 6.391 C 7.027 6.594 7.113 6.758 7.275 6.883 C 7.477 7.021 7.687 7.063 7.905 7.011 C 8.123 6.959 8.303 6.838 8.447 6.646 C 8.652 6.364 8.908 6.144 9.217 5.987 C 9.525 5.83 9.855 5.751 10.207 5.751 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      height: 48,
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Placeholder"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.305,
    height: 20.305,
    viewBox: "0 0 20.305 20.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.851,
      top: 1.845,
      width: 20.305,
      height: 20.305,
      color: "var(--color-cta-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.238 15.98 C 10.512 15.98 10.747 15.883 10.943 15.687 C 11.138 15.491 11.235 15.255 11.235 14.978 C 11.235 14.701 11.137 14.467 10.942 14.274 C 10.746 14.081 10.51 13.985 10.234 13.985 C 9.958 13.985 9.723 14.081 9.53 14.274 C 9.336 14.467 9.24 14.703 9.24 14.982 C 9.24 15.257 9.337 15.492 9.531 15.688 C 9.725 15.883 9.961 15.98 10.238 15.98 Z M 10.157 20.305 C 8.754 20.305 7.437 20.039 6.206 19.508 C 4.975 18.977 3.899 18.25 2.977 17.328 C 2.055 16.406 1.328 15.329 0.797 14.098 C 0.266 12.867 0 11.549 0 10.144 C 0 8.739 0.266 7.421 0.797 6.189 C 1.328 4.957 2.055 3.884 2.976 2.97 C 3.897 2.056 4.974 1.333 6.206 0.8 C 7.437 0.267 8.756 0 10.161 0 C 11.566 0 12.885 0.266 14.117 0.799 C 15.349 1.332 16.422 2.055 17.336 2.968 C 18.249 3.882 18.973 4.956 19.505 6.19 C 20.038 7.425 20.305 8.745 20.305 10.149 C 20.305 11.553 20.038 12.87 19.505 14.1 C 18.972 15.331 18.249 16.406 17.335 17.324 C 16.421 18.243 15.347 18.969 14.113 19.503 C 12.879 20.038 11.56 20.305 10.157 20.305 Z M 10.162 18.602 C 12.504 18.602 14.496 17.779 16.136 16.133 C 17.776 14.487 18.596 12.49 18.596 10.143 C 18.596 7.801 17.777 5.809 16.14 4.169 C 14.503 2.529 12.506 1.709 10.147 1.709 C 7.811 1.709 5.819 2.528 4.173 4.165 C 2.526 5.802 1.703 7.799 1.703 10.158 C 1.703 12.494 2.526 14.486 4.172 16.132 C 5.818 17.779 7.815 18.602 10.162 18.602 Z M 10.207 5.751 C 10.687 5.751 11.109 5.899 11.475 6.195 C 11.84 6.491 12.023 6.867 12.023 7.323 C 12.023 7.746 11.897 8.115 11.647 8.43 C 11.396 8.745 11.112 9.038 10.796 9.308 C 10.412 9.628 10.078 9.985 9.793 10.377 C 9.507 10.77 9.365 11.209 9.365 11.695 C 9.365 11.888 9.439 12.042 9.587 12.158 C 9.736 12.273 9.909 12.33 10.107 12.33 C 10.319 12.33 10.495 12.26 10.636 12.118 C 10.778 11.977 10.873 11.803 10.922 11.595 C 10.976 11.257 11.106 10.951 11.313 10.677 C 11.519 10.404 11.763 10.156 12.042 9.935 C 12.451 9.602 12.787 9.208 13.049 8.754 C 13.312 8.299 13.443 7.812 13.443 7.291 C 13.443 6.446 13.133 5.739 12.512 5.171 C 11.891 4.603 11.154 4.319 10.302 4.319 C 9.695 4.319 9.113 4.446 8.558 4.702 C 8.003 4.958 7.545 5.332 7.183 5.823 C 7.062 5.998 7.007 6.187 7.017 6.391 C 7.027 6.594 7.113 6.758 7.275 6.883 C 7.477 7.021 7.687 7.063 7.905 7.011 C 8.123 6.959 8.303 6.838 8.447 6.646 C 8.652 6.364 8.908 6.144 9.217 5.987 C 9.525 5.83 9.855 5.751 10.207 5.751 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      borderRadius: 6,
      backgroundColor: "rgba(1,8,7,0.05)",
      boxShadow: "0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.305,
    height: 16.305,
    viewBox: "0 0 20.305 16.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.851,
      top: 3.844,
      width: 20.305,
      height: 16.305,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.305 1.709 L 20.305 14.602 C 20.305 15.062 20.135 15.461 19.796 15.798 C 19.458 16.136 19.057 16.305 18.596 16.305 L 1.703 16.305 C 1.243 16.305 0.844 16.136 0.507 15.798 C 0.169 15.461 0 15.062 0 14.602 L 0 1.709 C 0 1.248 0.169 0.847 0.507 0.508 C 0.844 0.169 1.243 0 1.703 0 L 18.596 0 C 19.057 0 19.458 0.169 19.796 0.508 C 20.135 0.847 20.305 1.248 20.305 1.709 Z M 1.703 4.368 L 18.596 4.368 L 18.596 1.709 L 1.703 1.709 L 1.703 4.368 Z M 1.703 7.593 L 1.703 14.602 L 18.596 14.602 L 18.596 7.593 L 1.703 7.593 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(1,8,7,0.6)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Placeholder"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.305,
    height: 20.305,
    viewBox: "0 0 20.305 20.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.851,
      top: 1.845,
      width: 20.305,
      height: 20.305,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.238 15.98 C 10.512 15.98 10.747 15.883 10.943 15.687 C 11.138 15.491 11.235 15.255 11.235 14.978 C 11.235 14.701 11.137 14.467 10.942 14.274 C 10.746 14.081 10.51 13.985 10.234 13.985 C 9.958 13.985 9.723 14.081 9.53 14.274 C 9.336 14.467 9.24 14.703 9.24 14.982 C 9.24 15.257 9.337 15.492 9.531 15.688 C 9.725 15.883 9.961 15.98 10.238 15.98 Z M 10.157 20.305 C 8.754 20.305 7.437 20.039 6.206 19.508 C 4.975 18.977 3.899 18.25 2.977 17.328 C 2.055 16.406 1.328 15.329 0.797 14.098 C 0.266 12.867 0 11.549 0 10.144 C 0 8.739 0.266 7.421 0.797 6.189 C 1.328 4.957 2.055 3.884 2.976 2.97 C 3.897 2.056 4.974 1.333 6.206 0.8 C 7.437 0.267 8.756 0 10.161 0 C 11.566 0 12.885 0.266 14.117 0.799 C 15.349 1.332 16.422 2.055 17.336 2.968 C 18.249 3.882 18.973 4.956 19.505 6.19 C 20.038 7.425 20.305 8.745 20.305 10.149 C 20.305 11.553 20.038 12.87 19.505 14.1 C 18.972 15.331 18.249 16.406 17.335 17.324 C 16.421 18.243 15.347 18.969 14.113 19.503 C 12.879 20.038 11.56 20.305 10.157 20.305 Z M 10.162 18.602 C 12.504 18.602 14.496 17.779 16.136 16.133 C 17.776 14.487 18.596 12.49 18.596 10.143 C 18.596 7.801 17.777 5.809 16.14 4.169 C 14.503 2.529 12.506 1.709 10.147 1.709 C 7.811 1.709 5.819 2.528 4.173 4.165 C 2.526 5.802 1.703 7.799 1.703 10.158 C 1.703 12.494 2.526 14.486 4.172 16.132 C 5.818 17.779 7.815 18.602 10.162 18.602 Z M 10.207 5.751 C 10.687 5.751 11.109 5.899 11.475 6.195 C 11.84 6.491 12.023 6.867 12.023 7.323 C 12.023 7.746 11.897 8.115 11.647 8.43 C 11.396 8.745 11.112 9.038 10.796 9.308 C 10.412 9.628 10.078 9.985 9.793 10.377 C 9.507 10.77 9.365 11.209 9.365 11.695 C 9.365 11.888 9.439 12.042 9.587 12.158 C 9.736 12.273 9.909 12.33 10.107 12.33 C 10.319 12.33 10.495 12.26 10.636 12.118 C 10.778 11.977 10.873 11.803 10.922 11.595 C 10.976 11.257 11.106 10.951 11.313 10.677 C 11.519 10.404 11.763 10.156 12.042 9.935 C 12.451 9.602 12.787 9.208 13.049 8.754 C 13.312 8.299 13.443 7.812 13.443 7.291 C 13.443 6.446 13.133 5.739 12.512 5.171 C 11.891 4.603 11.154 4.319 10.302 4.319 C 9.695 4.319 9.113 4.446 8.558 4.702 C 8.003 4.958 7.545 5.332 7.183 5.823 C 7.062 5.998 7.007 6.187 7.017 6.391 C 7.027 6.594 7.113 6.758 7.275 6.883 C 7.477 7.021 7.687 7.063 7.905 7.011 C 8.123 6.959 8.303 6.838 8.447 6.646 C 8.652 6.364 8.908 6.144 9.217 5.987 C 9.525 5.83 9.855 5.751 10.207 5.751 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.305,
    height: 16.305,
    viewBox: "0 0 20.305 16.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.851,
      top: 3.844,
      width: 20.305,
      height: 16.305,
      color: "var(--color-cta-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.305 1.709 L 20.305 14.602 C 20.305 15.062 20.135 15.461 19.796 15.798 C 19.458 16.136 19.057 16.305 18.596 16.305 L 1.703 16.305 C 1.243 16.305 0.844 16.136 0.507 15.798 C 0.169 15.461 0 15.062 0 14.602 L 0 1.709 C 0 1.248 0.169 0.847 0.507 0.508 C 0.844 0.169 1.243 0 1.703 0 L 18.596 0 C 19.057 0 19.458 0.169 19.796 0.508 C 20.135 0.847 20.305 1.248 20.305 1.709 Z M 1.703 4.368 L 18.596 4.368 L 18.596 1.709 L 1.703 1.709 L 1.703 4.368 Z M 1.703 7.593 L 1.703 14.602 L 18.596 14.602 L 18.596 7.593 L 1.703 7.593 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Placeholder"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.305,
    height: 20.305,
    viewBox: "0 0 20.305 20.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.851,
      top: 1.845,
      width: 20.305,
      height: 20.305,
      color: "var(--color-cta-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.238 15.98 C 10.512 15.98 10.747 15.883 10.943 15.687 C 11.138 15.491 11.235 15.255 11.235 14.978 C 11.235 14.701 11.137 14.467 10.942 14.274 C 10.746 14.081 10.51 13.985 10.234 13.985 C 9.958 13.985 9.723 14.081 9.53 14.274 C 9.336 14.467 9.24 14.703 9.24 14.982 C 9.24 15.257 9.337 15.492 9.531 15.688 C 9.725 15.883 9.961 15.98 10.238 15.98 Z M 10.157 20.305 C 8.754 20.305 7.437 20.039 6.206 19.508 C 4.975 18.977 3.899 18.25 2.977 17.328 C 2.055 16.406 1.328 15.329 0.797 14.098 C 0.266 12.867 0 11.549 0 10.144 C 0 8.739 0.266 7.421 0.797 6.189 C 1.328 4.957 2.055 3.884 2.976 2.97 C 3.897 2.056 4.974 1.333 6.206 0.8 C 7.437 0.267 8.756 0 10.161 0 C 11.566 0 12.885 0.266 14.117 0.799 C 15.349 1.332 16.422 2.055 17.336 2.968 C 18.249 3.882 18.973 4.956 19.505 6.19 C 20.038 7.425 20.305 8.745 20.305 10.149 C 20.305 11.553 20.038 12.87 19.505 14.1 C 18.972 15.331 18.249 16.406 17.335 17.324 C 16.421 18.243 15.347 18.969 14.113 19.503 C 12.879 20.038 11.56 20.305 10.157 20.305 Z M 10.162 18.602 C 12.504 18.602 14.496 17.779 16.136 16.133 C 17.776 14.487 18.596 12.49 18.596 10.143 C 18.596 7.801 17.777 5.809 16.14 4.169 C 14.503 2.529 12.506 1.709 10.147 1.709 C 7.811 1.709 5.819 2.528 4.173 4.165 C 2.526 5.802 1.703 7.799 1.703 10.158 C 1.703 12.494 2.526 14.486 4.172 16.132 C 5.818 17.779 7.815 18.602 10.162 18.602 Z M 10.207 5.751 C 10.687 5.751 11.109 5.899 11.475 6.195 C 11.84 6.491 12.023 6.867 12.023 7.323 C 12.023 7.746 11.897 8.115 11.647 8.43 C 11.396 8.745 11.112 9.038 10.796 9.308 C 10.412 9.628 10.078 9.985 9.793 10.377 C 9.507 10.77 9.365 11.209 9.365 11.695 C 9.365 11.888 9.439 12.042 9.587 12.158 C 9.736 12.273 9.909 12.33 10.107 12.33 C 10.319 12.33 10.495 12.26 10.636 12.118 C 10.778 11.977 10.873 11.803 10.922 11.595 C 10.976 11.257 11.106 10.951 11.313 10.677 C 11.519 10.404 11.763 10.156 12.042 9.935 C 12.451 9.602 12.787 9.208 13.049 8.754 C 13.312 8.299 13.443 7.812 13.443 7.291 C 13.443 6.446 13.133 5.739 12.512 5.171 C 11.891 4.603 11.154 4.319 10.302 4.319 C 9.695 4.319 9.113 4.446 8.558 4.702 C 8.003 4.958 7.545 5.332 7.183 5.823 C 7.062 5.998 7.007 6.187 7.017 6.391 C 7.027 6.594 7.113 6.758 7.275 6.883 C 7.477 7.021 7.687 7.063 7.905 7.011 C 8.123 6.959 8.303 6.838 8.447 6.646 C 8.652 6.364 8.908 6.144 9.217 5.987 C 9.525 5.83 9.855 5.751 10.207 5.751 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      height: 48,
      borderRadius: 6,
      backgroundColor: "rgba(1,8,7,0.05)",
      boxShadow: "0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.908,
    height: 17.908,
    viewBox: "0 0 17.908 17.908",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.862,
      top: 2.873,
      width: 17.908,
      height: 17.908,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.552 13.004 C 4.721 13.004 3.171 12.368 1.903 11.099 C 0.634 9.828 0 8.296 0 6.502 C 0 4.707 0.635 3.175 1.905 1.905 C 3.175 0.635 4.711 0 6.514 0 C 8.317 0 9.849 0.635 11.111 1.905 C 12.372 3.175 13.003 4.709 13.003 6.506 C 13.003 7.228 12.89 7.919 12.662 8.58 C 12.435 9.24 12.094 9.86 11.639 10.44 L 17.653 16.404 C 17.823 16.571 17.908 16.777 17.908 17.023 C 17.908 17.269 17.823 17.478 17.653 17.648 C 17.481 17.821 17.272 17.908 17.024 17.908 C 16.777 17.908 16.572 17.821 16.41 17.648 L 10.421 11.664 C 9.925 12.085 9.345 12.414 8.681 12.65 C 8.017 12.886 7.307 13.004 6.552 13.004 Z M 6.529 11.3 C 7.858 11.3 8.985 10.831 9.911 9.894 C 10.837 8.957 11.3 7.826 11.3 6.502 C 11.3 5.178 10.837 4.047 9.91 3.11 C 8.983 2.172 7.856 1.704 6.529 1.704 C 5.187 1.704 4.048 2.172 3.11 3.11 C 2.172 4.047 1.703 5.178 1.703 6.502 C 1.703 7.826 2.172 8.957 3.109 9.894 C 4.046 10.831 5.186 11.3 6.529 11.3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(1,8,7,0.6)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Search"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      height: 48,
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.908,
    height: 17.908,
    viewBox: "0 0 17.908 17.908",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.862,
      top: 2.873,
      width: 17.908,
      height: 17.908,
      color: "var(--color-cta-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.552 13.004 C 4.721 13.004 3.171 12.368 1.903 11.099 C 0.634 9.828 0 8.296 0 6.502 C 0 4.707 0.635 3.175 1.905 1.905 C 3.175 0.635 4.711 0 6.514 0 C 8.317 0 9.849 0.635 11.111 1.905 C 12.372 3.175 13.003 4.709 13.003 6.506 C 13.003 7.228 12.89 7.919 12.662 8.58 C 12.435 9.24 12.094 9.86 11.639 10.44 L 17.653 16.404 C 17.823 16.571 17.908 16.777 17.908 17.023 C 17.908 17.269 17.823 17.478 17.653 17.648 C 17.481 17.821 17.272 17.908 17.024 17.908 C 16.777 17.908 16.572 17.821 16.41 17.648 L 10.421 11.664 C 9.925 12.085 9.345 12.414 8.681 12.65 C 8.017 12.886 7.307 13.004 6.552 13.004 Z M 6.529 11.3 C 7.858 11.3 8.985 10.831 9.911 9.894 C 10.837 8.957 11.3 7.826 11.3 6.502 C 11.3 5.178 10.837 4.047 9.91 3.11 C 8.983 2.172 7.856 1.704 6.529 1.704 C 5.187 1.704 4.048 2.172 3.11 3.11 C 2.172 4.047 1.703 5.178 1.703 6.502 C 1.703 7.826 2.172 8.957 3.109 9.894 C 4.046 10.831 5.186 11.3 6.529 11.3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Search"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      height: 48,
      borderRadius: 6,
      backgroundColor: "rgba(1,8,7,0.05)",
      boxShadow: "inset 0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      color: "var(--color-scheme-1-border)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "USD"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.711,
    height: 4.452,
    viewBox: "0 0 7.711 4.452",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.14,
      top: 5.682,
      width: 7.711,
      height: 4.452,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.86 4.452 C 3.785 4.452 3.715 4.439 3.649 4.411 C 3.583 4.383 3.519 4.339 3.458 4.278 L 0.162 0.982 C 0.049 0.869 -0.005 0.734 0 0.576 C 0.006 0.419 0.065 0.283 0.179 0.17 C 0.292 0.057 0.427 0 0.585 0 C 0.742 0 0.878 0.057 0.991 0.17 L 3.86 3.056 L 6.745 0.17 C 6.859 0.057 6.991 0.003 7.143 0.008 C 7.295 0.014 7.428 0.073 7.541 0.187 C 7.654 0.3 7.711 0.435 7.711 0.593 C 7.711 0.75 7.654 0.886 7.541 0.999 L 4.262 4.278 C 4.201 4.339 4.137 4.383 4.071 4.411 C 4.005 4.439 3.935 4.452 3.86 4.452 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 1,
    viewBox: "0 -0.500 48 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,91,0)",
      transformOrigin: "0 0",
      width: 48,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 48 0 L 48 -0.5 L 48 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(1,8,7,0.6)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Placeholder")));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      height: 48,
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      color: "var(--color-scheme-1-border)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "USD"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.711,
    height: 4.452,
    viewBox: "0 0 7.711 4.452",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.14,
      top: 5.682,
      width: 7.711,
      height: 4.452,
      color: "var(--color-cta-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.86 4.452 C 3.785 4.452 3.715 4.439 3.649 4.411 C 3.583 4.383 3.519 4.339 3.458 4.278 L 0.162 0.982 C 0.049 0.869 -0.005 0.734 0 0.576 C 0.006 0.419 0.065 0.283 0.179 0.17 C 0.292 0.057 0.427 0 0.585 0 C 0.742 0 0.878 0.057 0.991 0.17 L 3.86 3.056 L 6.745 0.17 C 6.859 0.057 6.991 0.003 7.143 0.008 C 7.295 0.014 7.428 0.073 7.541 0.187 C 7.654 0.3 7.711 0.435 7.711 0.593 C 7.711 0.75 7.654 0.886 7.541 0.999 L 4.262 4.278 C 4.201 4.339 4.137 4.383 4.071 4.411 C 4.005 4.439 3.935 4.452 3.86 4.452 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 1,
    viewBox: "0 -0.500 48 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,91,0)",
      transformOrigin: "0 0",
      width: 48,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 48 0 L 48 -0.5 L 48 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Placeholder")));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      height: 48,
      borderRadius: 6,
      backgroundColor: "rgba(1,8,7,0.05)",
      boxShadow: "inset 0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      color: "var(--color-scheme-1-border)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "http://")), /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 1,
    viewBox: "0 -0.500 48 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,76,0)",
      transformOrigin: "0 0",
      width: 48,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 48 0 L 48 -0.5 L 48 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(1,8,7,0.6)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "www.relume.io")));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 560,
      height: 48,
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      color: "var(--color-scheme-1-border)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-cta-text)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "http://")), /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 1,
    viewBox: "0 -0.500 48 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,76,0)",
      transformOrigin: "0 0",
      width: 48,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 48 0 L 48 -0.5 L 48 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "www.relume.io")));
  const __impls = {
    // figma: Type=Default, Alternate=False
    "type=default|alternate=false": __body0,
    // figma: Type=Default, Alternate=True
    "type=default|alternate=true": __body1,
    // figma: Type=Right icon, Alternate=False
    "type=right icon|alternate=false": __body2,
    // figma: Type=Right icon, Alternate=True
    "type=right icon|alternate=true": __body3,
    // figma: Type=Two icons, Alternate=False
    "type=two icons|alternate=false": __body4,
    // figma: Type=Two icons, Alternate=True
    "type=two icons|alternate=true": __body5,
    // figma: Type=Left icon, Alternate=False
    "type=left icon|alternate=false": __body6,
    // figma: Type=Left icon, Alternate=True
    "type=left icon|alternate=true": __body7,
    // figma: Type=Input with dropdown, Alternate=False
    "type=input with dropdown|alternate=false": __body8,
    // figma: Type=Input with dropdown, Alternate=True
    "type=input with dropdown|alternate=true": __body9,
    // figma: Type=Website input, Alternate=False
    "type=website input|alternate=false": __body10,
    // figma: Type=Website input, Alternate=True
    "type=website input|alternate=true": __body11
  };
  return (__impls[__vkey_TextInput(props)] ?? __body0)();
}

// figma node: 0:294 X
function X(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 16,
    viewBox: "0 0 18 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 4.243,
      width: 18,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.176 0 L 16.936 0 L 10.906 6.777 L 18 16 L 12.446 16 L 8.095 10.407 L 3.117 16 L 0.355 16 L 6.805 8.751 L 0 0 L 5.695 0 L 9.628 5.113 L 14.176 0 Z M 13.207 14.375 L 14.737 14.375 L 4.864 1.539 L 3.223 1.539 L 13.207 14.375 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:298 Youtube
function Youtube(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-scheme-1-text)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.014,
    height: 14.012,
    viewBox: "0 0 20.014 14.012",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.986,
      top: 5,
      width: 20.014,
      height: 14.012
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.607 2.203 C 19.493 1.78 19.271 1.395 18.961 1.085 C 18.652 0.775 18.267 0.552 17.845 0.437 C 16.279 0.007 10.014 0 10.014 0 C 10.014 0 3.75 -0.007 2.183 0.404 C 1.761 0.524 1.377 0.751 1.068 1.062 C 0.758 1.373 0.534 1.759 0.417 2.182 C 0.004 3.748 0 6.996 0 6.996 C 0 6.996 -0.004 10.26 0.406 11.81 C 0.636 12.667 1.311 13.344 2.169 13.575 C 3.751 14.005 9.999 14.012 9.999 14.012 C 9.999 14.012 16.264 14.019 17.83 13.609 C 18.252 13.494 18.638 13.271 18.948 12.962 C 19.258 12.653 19.481 12.268 19.597 11.846 C 20.011 10.281 20.014 7.034 20.014 7.034 C 20.014 7.034 20.034 3.769 19.607 2.203 Z M 8.01 10.005 L 8.015 4.005 L 13.222 7.01 L 8.01 10.005 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:594 Início • Desktop
function InCioDesktop(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-scheme-1-background)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "0px 64px 0px 64px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--page-padding-padding-global) * 1px)",
      paddingRight: "calc(var(--page-padding-padding-global) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(CompanyLogo, {
    style: {
      position: "relative",
      width: 84,
      height: 36,
      flexShrink: 0
    },
    alternate: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "sobre.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Sobre")), /*#__PURE__*/React.createElement("a", {
    href: "areas-de-atuacao.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "\xC1reas de atua\xE7\xE3o")), /*#__PURE__*/React.createElement("a", {
    href: "portfolio.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Portf\xF3lio")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5562999570087",
    target: "_blank",
    rel: "noopener",
    style: {
      position: "relative",
      borderRadius: 6,
      borderTop: "1.500px solid var(--color-scheme-1-border)",
      borderRight: "1.500px solid var(--color-scheme-1-border)",
      borderBottom: "4px solid var(--color-scheme-1-border)",
      borderLeft: "1.500px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-neutral-darkest)",
      flexShrink: 0
    }
  }, "WhatsApp")), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 110,
      flexShrink: 0
    },
    text1: "Contato",
    style2: "primary",
    small: true,
    iconPosition: "no icon",
    alternate: false
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-scheme-1-background)",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      padding: "112px 64px 112px 64px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--page-padding-padding-global) * 1px)",
      paddingTop: "calc(var(--section-padding-padding-section-large) * 1px)",
      paddingRight: "calc(var(--page-padding-padding-global) * 1px)",
      paddingBottom: "calc(var(--section-padding-padding-section-large) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 64,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: "1 1 0%",
      maxWidth: 620,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 84,
      textAlign: "left",
      lineHeight: 1.100000023841858,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Finan\xE7as com prop\xF3sito na Chapada dos Veadeiros"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      textAlign: "left",
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Consultoria financeira e de neg\xF3cios que une a disciplina do mercado tradicional com a realidade territorial. Vinte anos de experi\xEAncia em B3 e ANBIMA aplicados a associa\xE7\xF5es, comunidades e empreendimentos locais.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 135,
      flexShrink: 0
    },
    text1: "Conversar",
    style2: "primary",
    small: false,
    iconPosition: "no icon",
    alternate: false
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 132,
      flexShrink: 0
    },
    text1: "Conhecer",
    style2: "secondary",
    small: false,
    iconPosition: "no icon",
    alternate: false
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-8e70039a19f600f6-d6aac708",
    style: {
      position: "relative",
      flex: "1 1 0%",
      alignSelf: "stretch",
      minHeight: 560,
      borderRadius: 8,
      flexShrink: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-scheme-1-background)",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      padding: "112px 64px 112px 64px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--page-padding-padding-global) * 1px)",
      paddingTop: "calc(var(--section-padding-padding-section-large) * 1px)",
      paddingRight: "calc(var(--page-padding-padding-global) * 1px)",
      paddingBottom: "calc(var(--section-padding-padding-section-large) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 80,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 80,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Trajet\xF3ria")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Do mercado financeiro ao territ\xF3rio"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Gabriela Ortiz Sampaio construiu sua carreira nas estruturas mais s\xF3lidas do mercado financeiro brasileiro. Depois, levou essa disciplina t\xE9cnica para onde ela realmente importa: nas comunidades, associa\xE7\xF5es e neg\xF3cios que transformam a Chapada dos Veadeiros."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Vinte anos em B3, ANBIMA e instituições financeiras")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Atuação territorial desde 2020 na Chapada dos Veadeiros")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Consultoria recorrente e projetos de impacto documentado")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 176,
      flexShrink: 0
    },
    text1: "Conhecer mais",
    style2: "secondary",
    small: false,
    iconPosition: "no icon",
    alternate: false
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 102,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(ChevronRight, null),
    text1: "Contato",
    style2: "link",
    small: false,
    iconPosition: "trailing",
    alternate: false
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d568b164c26b35ee",
    style: {
      position: "relative",
      height: 640,
      borderRadius: 8,
      flexGrow: 1
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-scheme-1-background)",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      padding: "112px 64px 112px 64px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--page-padding-padding-global) * 1px)",
      paddingTop: "calc(var(--section-padding-padding-section-large) * 1px)",
      paddingRight: "calc(var(--page-padding-padding-global) * 1px)",
      paddingBottom: "calc(var(--section-padding-padding-section-large) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 80,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 768,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Atua\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 60,
      textAlign: "center",
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Onde a disciplina financeira encontra o territ\xF3rio"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      textAlign: "center",
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cinco frentes de trabalho que transformam organiza\xE7\xF5es e comunidades"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 881,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 48,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Finance, {
    style: {
      transform: "scale(2, 2)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Gest\xE3o financeira para empresas e associa\xE7\xF5es"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Rotinas, dados organizados, planejamento de curto a longo prazo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 124,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(ChevronRight, null),
    text1: "Saiba mais",
    style2: "link",
    small: false,
    iconPosition: "trailing",
    alternate: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Finan\xE7as")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Educa\xE7\xE3o financeira dom\xE9stica e comunit\xE1ria"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Palestras para fam\xEDlias, coletoras de sementes, grupos de economia criativa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 124,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(ChevronRight, null),
    text1: "Saiba mais",
    style2: "link",
    small: false,
    iconPosition: "trailing",
    alternate: false
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b7b4e314cc3eb923",
    style: {
      position: "relative",
      height: 233,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 881,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Educa\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Consultoria para economia criativa e neg\xF3cios de impacto"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Forma\xE7\xE3o de pre\xE7o, organiza\xE7\xE3o coletiva, comercializa\xE7\xE3o estrat\xE9gica"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 124,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(ChevronRight, null),
    text1: "Saiba mais",
    style2: "link",
    small: false,
    iconPosition: "trailing",
    alternate: false
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b7b4e314cc3eb923",
    style: {
      position: "relative",
      height: 233,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 48,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Docs, {
    style: {
      transform: "scale(2, 2)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Governan\xE7a e fortalecimento institucional para terceiro setor"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Regimentos, pol\xEDticas, miss\xE3o e valores alinhados com a pr\xE1tica"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 124,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(ChevronRight, null),
    text1: "Saiba mais",
    style2: "link",
    small: false,
    iconPosition: "trailing",
    alternate: false
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 881,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 48,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Communities, {
    style: {
      transform: "scale(2, 2)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Pol\xEDticas de g\xEAnero e desenvolvimento territorial"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Protagonismo feminino e fortalecimento comunit\xE1rio enraizado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 124,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(ChevronRight, null),
    text1: "Saiba mais",
    style2: "link",
    small: false,
    iconPosition: "trailing",
    alternate: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Territ\xF3rio")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Consultoria financeira recorrente para neg\xF3cios locais"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Acompanhamento cont\xEDnuo adaptado \xE0 realidade de cada cliente"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 124,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(ChevronRight, null),
    text1: "Saiba mais",
    style2: "link",
    small: false,
    iconPosition: "trailing",
    alternate: false
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b7b4e314cc3eb923",
    style: {
      position: "relative",
      height: 233,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-scheme-1-background)",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      padding: "112px 64px 112px 64px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--page-padding-padding-global) * 1px)",
      paddingTop: "calc(var(--section-padding-padding-section-large) * 1px)",
      paddingRight: "calc(var(--page-padding-padding-global) * 1px)",
      paddingBottom: "calc(var(--section-padding-padding-section-large) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 80,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Tagline")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--color-scheme-1-text)",
      borderRight: "1px solid var(--color-scheme-1-text)",
      borderBottom: "1px solid var(--color-scheme-1-text)",
      borderLeft: "1px solid var(--color-scheme-1-text)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      padding: "24px 0px 24px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 84,
      textAlign: "center",
      lineHeight: 1.100000023841858,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Hover over link one")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--color-scheme-1-text)",
      borderRight: "1px solid var(--color-scheme-1-text)",
      borderBottom: "1px solid var(--color-scheme-1-text)",
      borderLeft: "1px solid var(--color-scheme-1-text)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      padding: "24px 0px 24px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-neutral-lighter)",
      flexShrink: 0
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 84,
      textAlign: "center",
      lineHeight: 1.100000023841858,
      letterSpacing: "0.010em",
      color: "var(--color-neutral-lighter)",
      flexShrink: 0
    }
  }, "Hover over link two")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--color-scheme-1-text)",
      borderRight: "1px solid var(--color-scheme-1-text)",
      borderBottom: "1px solid var(--color-scheme-1-text)",
      borderLeft: "1px solid var(--color-scheme-1-text)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      padding: "24px 0px 24px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-neutral-lighter)",
      flexShrink: 0
    }
  }, "03"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 84,
      textAlign: "center",
      lineHeight: 1.100000023841858,
      letterSpacing: "0.010em",
      color: "var(--color-neutral-lighter)",
      flexShrink: 0
    }
  }, "Hover over link three")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--color-scheme-1-text)",
      borderRight: "1px solid var(--color-scheme-1-text)",
      borderBottom: "1px solid var(--color-scheme-1-text)",
      borderLeft: "1px solid var(--color-scheme-1-text)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      padding: "24px 0px 24px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-neutral-lighter)",
      flexShrink: 0
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 84,
      textAlign: "center",
      lineHeight: 1.100000023841858,
      letterSpacing: "0.010em",
      color: "var(--color-neutral-lighter)",
      flexShrink: 0
    }
  }, "Hover over link four")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-scheme-1-background)",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      padding: "112px 64px 112px 64px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--page-padding-padding-global) * 1px)",
      paddingTop: "calc(var(--section-padding-padding-section-large) * 1px)",
      paddingRight: "calc(var(--page-padding-padding-global) * 1px)",
      paddingBottom: "calc(var(--section-padding-padding-section-large) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 80,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 768,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 60,
      textAlign: "center",
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Quem trabalha com Gabi"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      textAlign: "center",
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Associa\xE7\xF5es, empreendedores e ONGs que transformaram suas finan\xE7as")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 352,
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "\"Gabriela trouxe clareza onde havia confus\xE3o. Nossas contas agora respiram.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d50ffb0afa333613",
    style: {
      position: "relative",
      width: 48,
      height: 48,
      borderRadius: "50%",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Coletora de sementes"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Chapada dos Veadeiros, Goi\xE1s")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 352,
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "\"Rara \xE9 a consultora que entende tanto de n\xFAmeros quanto de territ\xF3rio. Gabi \xE9 uma delas.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d50ffb0afa333613",
    style: {
      position: "relative",
      width: 48,
      height: 48,
      borderRadius: "50%",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Coordenador de projeto"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Instituto de conserva\xE7\xE3o")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-scheme-1-foreground)",
      borderTop: "1px solid var(--color-scheme-1-border)",
      borderRight: "1px solid var(--color-scheme-1-border)",
      borderBottom: "1px solid var(--color-scheme-1-border)",
      borderLeft: "1px solid var(--color-scheme-1-border)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.889,
    viewBox: "0 0 20 18.889",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 18.889,
      flexShrink: 0,
      color: "var(--color-scheme-1-text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.071 0.612 C 9.415 -0.204 10.585 -0.204 10.929 0.612 L 12.958 5.431 C 13.103 5.775 13.431 6.011 13.807 6.04 L 19.073 6.457 C 19.965 6.528 20.327 7.628 19.647 8.203 L 15.635 11.599 C 15.348 11.841 15.223 12.222 15.311 12.584 L 16.536 17.661 C 16.744 18.521 15.797 19.201 15.033 18.74 L 10.525 16.02 C 10.202 15.825 9.797 15.825 9.475 16.02 L 4.967 18.74 C 4.203 19.201 3.256 18.521 3.464 17.661 L 4.689 12.584 C 4.777 12.222 4.652 11.841 4.365 11.599 L 0.353 8.203 C -0.327 7.628 0.035 6.528 0.927 6.457 L 6.193 6.04 C 6.569 6.011 6.897 5.775 7.042 5.431 L 9.071 0.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 352,
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "\"Ela n\xE3o imp\xF5e modelos. Adapta a disciplina financeira \xE0 nossa realidade. Isso faz toda diferen\xE7a.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d50ffb0afa333613",
    style: {
      position: "relative",
      width: 48,
      height: 48,
      borderRadius: "50%",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Empreendedora local"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Alto Para\xEDso de Goi\xE1s")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-scheme-1-background)",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      padding: "112px 64px 112px 64px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--page-padding-padding-global) * 1px)",
      paddingTop: "calc(var(--section-padding-padding-section-large) * 1px)",
      paddingRight: "calc(var(--page-padding-padding-global) * 1px)",
      paddingBottom: "calc(var(--section-padding-padding-section-large) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 80,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 768,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "Pr\xF3ximo passo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Vamos conversar"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Escolha o canal que funciona melhor para voc\xEA"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 80,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 400,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Mail, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Spectral, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.399999976158142,
      letterSpacing: "-0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "E-mail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Envie sua mensagem"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      textDecoration: "underline",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "gabiortiz9@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Call, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Spectral, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.399999976158142,
      letterSpacing: "-0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "WhatsApp"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Conversa r\xE1pida e direta"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      textDecoration: "underline",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "(62) 9-9957-0087"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(LocationOn, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Spectral, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.399999976158142,
      letterSpacing: "-0.010em",
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "LinkedIn"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "linkedin.com/in/gabriela-ortizsampaio-77a1421b0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 109,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(ChevronRight, null),
    text1: "Ver perfil",
    style2: "link",
    small: false,
    iconPosition: "trailing",
    alternate: false
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-676cb6ab75037789",
    style: {
      position: "relative",
      height: 516,
      borderRadius: 8,
      flexGrow: 1
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-scheme-1-background)",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      padding: "80px 64px 80px 64px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--page-padding-padding-global) * 1px)",
      paddingTop: "calc(var(--section-padding-padding-section-medium) * 1px)",
      paddingRight: "calc(var(--page-padding-padding-global) * 1px)",
      paddingBottom: "calc(var(--section-padding-padding-section-medium) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      gap: 80,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 248,
      display: "flex",
      flexDirection: "row",
      gap: 128,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(CompanyLogo, {
    style: {
      position: "relative",
      width: 84,
      height: 36,
      flexShrink: 0
    },
    alternate: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Navega\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "In\xEDcio")), /*#__PURE__*/React.createElement("a", {
    href: "sobre.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Sobre")), /*#__PURE__*/React.createElement("a", {
    href: "areas-de-atuacao.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "\xC1reas de atua\xE7\xE3o")), /*#__PURE__*/React.createElement("a", {
    href: "portfolio.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Portf\xF3lio")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Contato")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Recursos"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "sobre.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Sobre")), /*#__PURE__*/React.createElement("a", {
    href: "areas-de-atuacao.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "\xC1reas de atua\xE7\xE3o")), /*#__PURE__*/React.createElement("a", {
    href: "portfolio.html",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Portf\xF3lio")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Depoimentos")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Comunidade")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Impacto"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Educa\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Governan\xE7a")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "G\xEAnero e territ\xF3rio")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Cerrado de p\xE9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexGrow: 1
    }
  }, "Semente amarela"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Facebook, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement(Instagram, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement(X, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement(LinkedIn, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement(Youtube, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 1280 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      borderWidth: "calc(var(--stroke-divider-width) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--color-scheme-1-border)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 1280 0 L 1280 -0.5 L 1280 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      flexShrink: 0
    }
  }, "\xA9 2024 Gabi Ortiz Consultoria de Neg\xF3cios. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      textDecoration: "underline",
      flexShrink: 0
    }
  }, "Pol\xEDtica de privacidade"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      textDecoration: "underline",
      flexShrink: 0
    }
  }, "Termos de servi\xE7o"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-scheme-1-text)",
      textDecoration: "underline",
      flexShrink: 0
    }
  }, "Configura\xE7\xF5es de cookies")))))));
}

// Globals for scripts loaded after this file.
window.Relume = Relume;
window.Button = Button;
window.Call = Call;
window.ChevronRight = ChevronRight;
window.Communities = Communities;
window.CompanyLogo = CompanyLogo;
window.Docs = Docs;
window.Facebook = Facebook;
window.Finance = Finance;
window.Instagram = Instagram;
window.LinkedIn = LinkedIn;
window.LocationOn = LocationOn;
window.Mail = Mail;
window.TextInput = TextInput;
window.X = X;
window.Youtube = Youtube;
window.InCioDesktop = InCioDesktop;