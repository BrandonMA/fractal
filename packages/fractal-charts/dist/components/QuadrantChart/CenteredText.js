var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Text, useTheme } from '@bma98/fractal-ui';
export function CenteredText(_a) {
    var { style, children, color } = _a, others = __rest(_a, ["style", "children", "color"]);
    const { colors } = useTheme();
    return (React.createElement(Text, Object.assign({ fontWeight: 300, fontSize: 14, color: colors.label || color, style: Object.assign({ textAlign: 'center' }, style) }, others), children));
}
//# sourceMappingURL=CenteredText.js.map