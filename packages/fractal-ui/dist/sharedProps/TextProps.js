import { getUserSelectAccessibilityProp } from './utils/getUserSelectAccessibilityProp';
export function extractTextProps({ fontSize, fontWeight, fontFamily, color, fontStyle, selectable, textAlign, textOverflow }) {
    return `
        ${fontSize != null ? `font-size: ${fontSize}px` : ''};
        ${fontWeight != null ? `font-weight: ${fontWeight}` : ''};
        ${color != null ? `color: ${color}` : ''};
        ${fontFamily != null ? `font-family: ${fontFamily}` : ''};
        ${fontStyle != null ? `font-family: ${fontStyle}` : ''};
        ${getUserSelectAccessibilityProp(selectable)};
        ${textAlign != null ? `text-align: ${textAlign}` : ''};
        ${textOverflow != null ? `text-overflow: ${textOverflow}` : ''};
    `;
}
//# sourceMappingURL=TextProps.js.map