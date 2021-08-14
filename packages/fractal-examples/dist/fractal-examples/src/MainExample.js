import React, { useCallback, useMemo, useState } from 'react';
import { DetailsRow, FractalAppRoot, LayoutProvider, RecyclerView, TouchableOpacity, useTheme } from '@bma98/fractal-ui';
import { NavigationBarConfig, StackNavigator } from '../../fractal-navigation-router/src';
import { dataProvider } from './ui-fragments/layout/tables/util/tableHelpers';
import { useSizeValue } from '@bma98/size-class';
import { StackScreen, useHistory, NavigationRouter } from '@bma98/fractal-navigation-router';
import { RecyclerViewFragmentScreen } from './screens/RecyclerViewFragmentScreen';
const screens = [
    {
        name: 'RecyclerViewFragmentScreen',
        path: '/recycler_view_fragment_screen'
    }
];
const lastScreenIndex = screens.length - 1;
export function RootScreen() {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(screens));
    const width = useSizeValue('width');
    const { sizes } = useTheme();
    const history = useHistory();
    const layoutProvider = useMemo(() => {
        return new LayoutProvider(() => {
            return 0;
        }, (_, dim) => {
            dim.height = sizes.baseRowHeight;
            dim.width = width;
            return;
        });
    }, [width, sizes.baseRowHeight]);
    const rowRenderer = useCallback((_, data, index) => {
        const goToItem = () => {
            history.push(data.path);
        };
        return (React.createElement(TouchableOpacity, { onPress: goToItem },
            React.createElement(DetailsRow, { title: data.name, details: data.path, addSeparator: index !== lastScreenIndex })));
    }, [history]);
    return (React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: 'Examples', largeTitle: true }), isRootRoute: true, path: '/' },
        React.createElement(RecyclerView, { key: width, layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer })));
}
export function MainExample() {
    return (React.createElement(FractalAppRoot, { handleThemeManually: true },
        React.createElement(NavigationRouter, null,
            React.createElement(StackNavigator, { path: '/' },
                React.createElement(RootScreen, null),
                React.createElement(RecyclerViewFragmentScreen, null)))));
}
//# sourceMappingURL=MainExample.js.map