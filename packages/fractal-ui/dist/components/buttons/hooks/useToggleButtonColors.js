import { useTheme } from '../../../context';
export function useToggleButtonColors(variant, active = false, useGrayVariant = false) {
    const { colors } = useTheme();
    const backgroundColorName = (() => {
        if (active) {
            return variant === 'content' ? `${variant}InteractiveColor600` : `${variant}InteractiveColor100`;
        }
        else {
            return 'background';
        }
    })();
    const foregroundColorName = (() => {
        if (active) {
            return variant === 'content' ? 'text' : `${variant}InteractiveColor`;
        }
        else {
            return useGrayVariant ? `placeholder` : 'text';
        }
    })();
    const pressedColorName = (() => {
        if (active) {
            return variant === 'content' ? `${variant}InteractiveColor800` : `${variant}InteractiveColor200`;
        }
        else {
            return `background`;
        }
    })();
    const backgroundColor = colors[backgroundColorName];
    const foregroundColor = colors[foregroundColorName];
    const pressedColor = colors[pressedColorName];
    return [backgroundColor, foregroundColor, pressedColor];
}
//# sourceMappingURL=useToggleButtonColors.js.map