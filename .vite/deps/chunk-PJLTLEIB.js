import {
  require_react_is
} from "./chunk-DDZ74HVY.js";
import {
  chainPropTypes,
  init_chainPropTypes,
  init_elementTypeAcceptingRef,
  init_isFocusVisible,
  init_refType,
  init_setRef,
  init_unsupportedProp,
  init_useEnhancedEffect,
  init_useEventCallback,
  init_useForkRef,
  init_useLazyRef,
  init_useOnMount,
  init_useTimeout,
  useForkRef
} from "./chunk-OLRE7K42.js";
import {
  init_composeClasses
} from "./chunk-IA6MZVQL.js";
import {
  init_generateUtilityClasses
} from "./chunk-HJNEDMPX.js";
import {
  init_ClassNameGenerator,
  init_deepmerge,
  init_formatMuiErrorMessage,
  init_generateUtilityClass
} from "./chunk-LR3H6M6H.js";
import {
  clsx_default,
  init_clsx
} from "./chunk-LXJZJK3Y.js";
import {
  require_prop_types
} from "./chunk-L4GGBYOR.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __esm,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var import_prop_types, elementAcceptingRef, elementAcceptingRef_default;
var init_elementAcceptingRef = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js"() {
    import_prop_types = __toESM(require_prop_types());
    init_chainPropTypes();
    elementAcceptingRef = chainPropTypes(import_prop_types.default.element, acceptingRef);
    elementAcceptingRef.isRequired = chainPropTypes(import_prop_types.default.element.isRequired, acceptingRef);
    elementAcceptingRef_default = elementAcceptingRef;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/elementAcceptingRef/index.js
var init_elementAcceptingRef2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/elementAcceptingRef/index.js"() {
    init_elementAcceptingRef();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/exactProp/exactProp.js
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return {
    ...propTypes,
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  };
}
var specialProperty;
var init_exactProp = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/exactProp/exactProp.js"() {
    specialProperty = "exact-prop: ​";
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/exactProp/index.js
var init_exactProp2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/exactProp/index.js"() {
    init_exactProp();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (typeof Component === "object") {
    switch (Component.$$typeof) {
      case import_react_is.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case import_react_is.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}
var import_react_is;
var init_getDisplayName = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js"() {
    import_react_is = __toESM(require_react_is());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getDisplayName/index.js
var init_getDisplayName2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getDisplayName/index.js"() {
    init_getDisplayName();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an HTMLElement.`);
  }
  return null;
}
var init_HTMLElementType = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/HTMLElementType/index.js
var init_HTMLElementType2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/HTMLElementType/index.js"() {
    init_HTMLElementType();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js
var ponyfillGlobal_default;
var init_ponyfillGlobal = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js"() {
    ponyfillGlobal_default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ponyfillGlobal/index.js
var init_ponyfillGlobal2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ponyfillGlobal/index.js"() {
    init_ponyfillGlobal();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var init_capitalize = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/capitalize.js"() {
    init_formatMuiErrorMessage();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/index.js
var init_capitalize2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/index.js"() {
    init_capitalize();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
var init_createChainedFunction = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/index.js
var init_createChainedFunction2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/index.js"() {
    init_createChainedFunction();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/debounce/debounce.js
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
var init_debounce = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/debounce/debounce.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/debounce/index.js
var init_debounce2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/debounce/index.js"() {
    init_debounce();
    init_debounce();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/deprecatedPropType/deprecatedPropType.js
function deprecatedPropType(validator2, reason) {
  if (false) {
    return () => null;
  }
  return (props, propName, componentName, location, propFullName) => {
    const componentNameSafe = componentName || "<<anonymous>>";
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== "undefined") {
      return new Error(`The ${location} \`${propFullNameSafe}\` of \`${componentNameSafe}\` is deprecated. ${reason}`);
    }
    return null;
  };
}
var init_deprecatedPropType = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/deprecatedPropType/deprecatedPropType.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/deprecatedPropType/index.js
var init_deprecatedPropType2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/deprecatedPropType/index.js"() {
    init_deprecatedPropType();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
function isMuiElement(element, muiNames) {
  var _a, _b, _c;
  return React.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    element.type.muiName ?? ((_c = (_b = (_a = element.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)
  ) !== -1;
}
var React;
var init_isMuiElement = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js"() {
    React = __toESM(require_react());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/index.js
var init_isMuiElement2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/index.js"() {
    init_isMuiElement();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
var init_ownerDocument = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ownerDocument/index.js
var init_ownerDocument2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ownerDocument/index.js"() {
    init_ownerDocument();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}
var init_ownerWindow = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js"() {
    init_ownerDocument2();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ownerWindow/index.js
var init_ownerWindow2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ownerWindow/index.js"() {
    init_ownerWindow();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/requirePropFactory/requirePropFactory.js
function requirePropFactory(componentNameInError, Component) {
  if (false) {
    return () => null;
  }
  const prevPropTypes = Component ? {
    ...Component.propTypes
  } : null;
  const requireProp = (requiredProp) => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes == null ? void 0 : prevPropTypes[propFullNameSafe];
    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }
    if (typeof props[propName] !== "undefined" && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of \`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }
    return null;
  };
  return requireProp;
}
var init_requirePropFactory = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/requirePropFactory/requirePropFactory.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/requirePropFactory/index.js
var init_requirePropFactory2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/requirePropFactory/index.js"() {
    init_requirePropFactory();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useId/useId.js
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React2.useState(idOverride);
  const id = idOverride || defaultId;
  React2.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }
  return useGlobalId(idOverride);
}
var React2, globalId, safeReact, maybeReactUseId;
var init_useId = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useId/useId.js"() {
    "use client";
    React2 = __toESM(require_react());
    globalId = 0;
    safeReact = {
      ...React2
    };
    maybeReactUseId = safeReact.useId;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useId/index.js
var init_useId2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useId/index.js"() {
    init_useId();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useControlled/useControlled.js
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React3.useRef(controlled !== void 0);
  const [valueState, setValue] = React3.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React3.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React3.useRef(defaultProp);
    React3.useEffect(() => {
      if (!isControlled && !Object.is(defaultValue, defaultProp)) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React3.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
var React3;
var init_useControlled = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useControlled/useControlled.js"() {
    "use client";
    React3 = __toESM(require_react());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useControlled/index.js
var init_useControlled2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useControlled/index.js"() {
    init_useControlled();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useOnMount/index.js
var init_useOnMount2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useOnMount/index.js"() {
    init_useOnMount();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
var init_getScrollbarSize = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getScrollbarSize/index.js
var init_getScrollbarSize2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getScrollbarSize/index.js"() {
    init_getScrollbarSize();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js
var React4, usePreviousProps, usePreviousProps_default;
var init_usePreviousProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js"() {
    "use client";
    React4 = __toESM(require_react());
    usePreviousProps = (value) => {
      const ref = React4.useRef({});
      React4.useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    };
    usePreviousProps_default = usePreviousProps;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/usePreviousProps/index.js
var init_usePreviousProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/usePreviousProps/index.js"() {
    init_usePreviousProps();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js
function getValidReactChildren(children) {
  return React5.Children.toArray(children).filter((child) => React5.isValidElement(child));
}
var React5;
var init_getValidReactChildren = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js"() {
    React5 = __toESM(require_react());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getValidReactChildren/index.js
var init_getValidReactChildren2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getValidReactChildren/index.js"() {
    init_getValidReactChildren();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js
var visuallyHidden, visuallyHidden_default;
var init_visuallyHidden = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js"() {
    visuallyHidden = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px"
    };
    visuallyHidden_default = visuallyHidden;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/visuallyHidden/index.js
var init_visuallyHidden2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/visuallyHidden/index.js"() {
    init_visuallyHidden();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/integerPropType/integerPropType.js
function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case "number":
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (!Number.isFinite(value)) {
        return "Infinity";
      }
      if (value !== Math.floor(value)) {
        return "float";
      }
      return "number";
    case "object":
      if (value === null) {
        return "null";
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue == null || !Number.isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, ...other) {
  const propValue = props[propName];
  if (propValue === void 0) {
    return null;
  }
  return requiredInteger(props, propName, ...other);
}
function validatorNoop() {
  return null;
}
var integerPropType_default;
var init_integerPropType = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/integerPropType/integerPropType.js"() {
    validator.isRequired = requiredInteger;
    validatorNoop.isRequired = validatorNoop;
    integerPropType_default = false ? validatorNoop : validator;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/integerPropType/index.js
var init_integerPropType2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/integerPropType/index.js"() {
    init_integerPropType();
    init_integerPropType();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
function resolveProps(defaultProps, props) {
  const output = {
    ...props
  };
  for (const key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      const propName = key;
      if (propName === "components" || propName === "slots") {
        output[propName] = {
          ...defaultProps[propName],
          ...output[propName]
        };
      } else if (propName === "componentsProps" || propName === "slotProps") {
        const defaultSlotProps = defaultProps[propName];
        const slotProps = props[propName];
        if (!slotProps) {
          output[propName] = defaultSlotProps || {};
        } else if (!defaultSlotProps) {
          output[propName] = slotProps;
        } else {
          output[propName] = {
            ...slotProps
          };
          for (const slotKey in defaultSlotProps) {
            if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
              const slotPropName = slotKey;
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
            }
          }
        }
      } else if (output[propName] === void 0) {
        output[propName] = defaultProps[propName];
      }
    }
  }
  return output;
}
var init_resolveProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/resolveProps/resolveProps.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/resolveProps/index.js
var init_resolveProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/resolveProps/index.js"() {
    init_resolveProps();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/clamp/clamp.js
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
var clamp_default;
var init_clamp = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/clamp/clamp.js"() {
    clamp_default = clamp;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/clamp/index.js
var init_clamp2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/clamp/index.js"() {
    init_clamp();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}
var isHostComponent_default;
var init_isHostComponent = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js"() {
    isHostComponent_default = isHostComponent;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isHostComponent/index.js
var init_isHostComponent2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isHostComponent/index.js"() {
    init_isHostComponent();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent_default(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
var appendOwnerState_default;
var init_appendOwnerState = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js"() {
    init_isHostComponent2();
    appendOwnerState_default = appendOwnerState;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/appendOwnerState/index.js
var init_appendOwnerState2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/appendOwnerState/index.js"() {
    init_appendOwnerState();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var extractEventHandlers_default;
var init_extractEventHandlers = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js"() {
    extractEventHandlers_default = extractEventHandlers;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/extractEventHandlers/index.js
var init_extractEventHandlers2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/extractEventHandlers/index.js"() {
    init_extractEventHandlers();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var omitEventHandlers_default;
var init_omitEventHandlers = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js"() {
    omitEventHandlers_default = omitEventHandlers;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/omitEventHandlers/index.js
var init_omitEventHandlers2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/omitEventHandlers/index.js"() {
    init_omitEventHandlers();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_default(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = {
      ...additionalProps == null ? void 0 : additionalProps.style,
      ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
      ...externalSlotProps == null ? void 0 : externalSlotProps.style
    };
    const props2 = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers_default({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_default(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_default(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = {
    ...internalSlotProps == null ? void 0 : internalSlotProps.style,
    ...additionalProps == null ? void 0 : additionalProps.style,
    ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
    ...externalSlotProps == null ? void 0 : externalSlotProps.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
var mergeSlotProps_default;
var init_mergeSlotProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js"() {
    init_clsx();
    init_extractEventHandlers2();
    init_omitEventHandlers2();
    mergeSlotProps_default = mergeSlotProps;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/mergeSlotProps/index.js
var init_mergeSlotProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/mergeSlotProps/index.js"() {
    init_mergeSlotProps();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
var resolveComponentProps_default;
var init_resolveComponentProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js"() {
    resolveComponentProps_default = resolveComponentProps;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/resolveComponentProps/index.js
var init_resolveComponentProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/resolveComponentProps/index.js"() {
    init_resolveComponentProps();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
function useSlotProps(parameters) {
  var _a;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps_default(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps_default({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_a = parameters.additionalProps) == null ? void 0 : _a.ref);
  const props = appendOwnerState_default(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}
var useSlotProps_default;
var init_useSlotProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js"() {
    "use client";
    init_useForkRef();
    init_appendOwnerState2();
    init_mergeSlotProps2();
    init_resolveComponentProps2();
    useSlotProps_default = useSlotProps;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useSlotProps/index.js
var init_useSlotProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useSlotProps/index.js"() {
    init_useSlotProps();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getReactNodeRef/getReactNodeRef.js
function getReactNodeRef(element) {
  if (!element || !React6.isValidElement(element)) {
    return null;
  }
  return element.props.propertyIsEnumerable("ref") ? element.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    element.ref
  );
}
var React6;
var init_getReactNodeRef = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getReactNodeRef/getReactNodeRef.js"() {
    React6 = __toESM(require_react());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getReactNodeRef/index.js
var init_getReactNodeRef2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getReactNodeRef/index.js"() {
    init_getReactNodeRef();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/types.js
var init_types = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/types.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/index.js
var init_esm = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/index.js"() {
    init_chainPropTypes();
    init_deepmerge();
    init_deepmerge();
    init_elementAcceptingRef2();
    init_elementTypeAcceptingRef();
    init_exactProp2();
    init_formatMuiErrorMessage();
    init_getDisplayName2();
    init_HTMLElementType2();
    init_ponyfillGlobal2();
    init_refType();
    init_capitalize2();
    init_createChainedFunction2();
    init_debounce2();
    init_deprecatedPropType2();
    init_isMuiElement2();
    init_ownerDocument2();
    init_ownerWindow2();
    init_requirePropFactory2();
    init_setRef();
    init_useEnhancedEffect();
    init_useId2();
    init_unsupportedProp();
    init_useControlled2();
    init_useEventCallback();
    init_useForkRef();
    init_useLazyRef();
    init_useTimeout();
    init_useOnMount2();
    init_isFocusVisible();
    init_getScrollbarSize2();
    init_usePreviousProps2();
    init_getValidReactChildren2();
    init_visuallyHidden2();
    init_integerPropType2();
    init_resolveProps2();
    init_composeClasses();
    init_generateUtilityClass();
    init_generateUtilityClass();
    init_generateUtilityClass();
    init_generateUtilityClasses();
    init_ClassNameGenerator();
    init_clamp2();
    init_useSlotProps2();
    init_resolveComponentProps2();
    init_extractEventHandlers2();
    init_getReactNodeRef2();
    init_types();
  }
});

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default;
var init_capitalize3 = __esm({
  "node_modules/@mui/material/utils/capitalize.js"() {
    init_capitalize2();
    capitalize_default = capitalize;
  }
});

export {
  elementAcceptingRef_default,
  init_elementAcceptingRef2 as init_elementAcceptingRef,
  exactProp,
  init_exactProp2 as init_exactProp,
  getDisplayName,
  init_getDisplayName2 as init_getDisplayName,
  HTMLElementType,
  init_HTMLElementType2 as init_HTMLElementType,
  createChainedFunction,
  init_createChainedFunction2 as init_createChainedFunction,
  debounce,
  init_debounce2 as init_debounce,
  deprecatedPropType,
  init_deprecatedPropType2 as init_deprecatedPropType,
  isMuiElement,
  init_isMuiElement2 as init_isMuiElement,
  ownerDocument,
  init_ownerDocument2 as init_ownerDocument,
  ownerWindow,
  init_ownerWindow2 as init_ownerWindow,
  requirePropFactory,
  init_requirePropFactory2 as init_requirePropFactory,
  useId,
  init_useId2 as init_useId,
  useControlled,
  init_useControlled2 as init_useControlled,
  getScrollbarSize,
  init_getScrollbarSize2 as init_getScrollbarSize,
  usePreviousProps_default,
  init_usePreviousProps2 as init_usePreviousProps,
  getValidReactChildren,
  init_getValidReactChildren2 as init_getValidReactChildren,
  visuallyHidden_default,
  init_visuallyHidden2 as init_visuallyHidden,
  integerPropType_default,
  init_integerPropType2 as init_integerPropType,
  resolveProps,
  init_resolveProps2 as init_resolveProps,
  clamp_default,
  init_clamp2 as init_clamp,
  appendOwnerState_default,
  init_appendOwnerState2 as init_appendOwnerState,
  extractEventHandlers_default,
  init_extractEventHandlers2 as init_extractEventHandlers,
  mergeSlotProps_default,
  init_mergeSlotProps2 as init_mergeSlotProps,
  resolveComponentProps_default,
  init_resolveComponentProps2 as init_resolveComponentProps,
  useSlotProps_default,
  init_useSlotProps2 as init_useSlotProps,
  getReactNodeRef,
  init_getReactNodeRef2 as init_getReactNodeRef,
  init_esm,
  capitalize_default,
  init_capitalize3 as init_capitalize
};
//# sourceMappingURL=chunk-PJLTLEIB.js.map
