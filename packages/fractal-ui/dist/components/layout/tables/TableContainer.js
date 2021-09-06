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
import React, { forwardRef } from 'react';
import { useTheme } from '../../../context';
import { Box } from '../Box';
import { HorizontalLayer } from '../HorizontalLayer';
import { Text } from '../../text';
import { getTableContainerAccessibilityProps } from './accessibility/getTableContainerAccessibilityProps';
const TableContainer = forwardRef((_a, ref) => {
    var { title, children, titleTextVariant = 'title', titleColorVariant = 'text', label, labelTextVariant = 'label', labelColorVariant = 'text' } = _a, others = __rest(_a, ["title", "children", "titleTextVariant", "titleColorVariant", "label", "labelTextVariant", "labelColorVariant"]);
    const { colors, spacings } = useTheme();
    const getColorName = (colorVariant) => colorVariant !== 'text' ? `${colorVariant}InteractiveColor` : colorVariant;
    const titleColorName = getColorName(titleColorVariant);
    const titleColor = colors[titleColorName];
    const labelColorName = getColorName(labelColorVariant);
    const labelColor = colors[labelColorName];
    return (React.createElement(Box, Object.assign({ ref: ref }, getTableContainerAccessibilityProps(), others),
        React.createElement(HorizontalLayer, { marginBottom: spacings.m, justifyContent: 'space-between', alignItems: 'center' },
            React.createElement(Text, { variant: titleTextVariant, color: titleColor, flex: 1 }, title),
            React.createElement(Text, { variant: labelTextVariant, color: labelColor }, label)),
        children));
});
TableContainer.displayName = 'TableContainer';
export { TableContainer };
//# sourceMappingURL=TableContainer.js.map