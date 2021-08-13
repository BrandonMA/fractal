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
import React, { useEffect } from 'react';
import { NavigationRouteContent } from './NavigationRouteContent';
export function NavigationRoute(_a) {
    var { onDismissed } = _a, others = __rest(_a, ["onDismissed"]);
    useEffect(() => {
        return () => {
            onDismissed === null || onDismissed === void 0 ? void 0 : onDismissed();
        };
    }, []);
    return React.createElement(NavigationRouteContent, Object.assign({}, others));
}
//# sourceMappingURL=index.js.map