import React, { memo } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { useTabBarInsets } from '../../TabBar/hooks/useTabBarInsets';
export const NavigationBarBackground = memo(({ children }) => {
    const { spacings, navigationBar } = useTheme();
    const { left, right } = useTabBarInsets();
    return (React.createElement(Layer, { backgroundColor: navigationBar.backgroundColor, flexDirection: 'row', height: navigationBar.height, boxShadow: navigationBar.shadow, zIndex: 2000, paddingLeft: spacings.m, paddingRight: spacings.m, position: 'absolute', top: 0, left: left, right: right }, children));
});
NavigationBarBackground.displayName = 'NavigationBarBackground';
//# sourceMappingURL=NavigationBarBackground.js.map