import React from 'react';
import { BaseButton, useTheme } from '@bma98/fractal-ui';
import { StarIcon } from '../assets/StarIcon';
import { UploadIcon } from '../assets/UploadIcon';
export function RoundedIconButton({ iconName, color, onPress }) {
    const { sizes, shadows } = useTheme();
    return (React.createElement(BaseButton, { backgroundColor: 'rgb(255, 255, 255)', width: sizes.interactiveItemHeight, height: sizes.interactiveItemHeight, borderRadius: sizes.interactiveItemHeight / 2, boxShadow: shadows.mainShadow, justifyContent: 'center', alignItems: 'center', onPress: onPress },
        iconName == 'star' && React.createElement(StarIcon, { width: 20, height: 20, fill: color }),
        iconName == 'upload' && React.createElement(UploadIcon, { width: 20, height: 20, fill: color })));
}
//# sourceMappingURL=RoundedIconButton.js.map