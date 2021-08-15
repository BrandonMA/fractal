import React, { useCallback, useMemo, useState } from 'react';
import { DetailsRow, Layer, LayoutProvider, PaddingLayer, SearchBar, TableContainer, TouchableOpacity, useTheme, AutoSizeRecyclerView } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { StackScreen, useHistory, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { dataProvider } from '../ui-fragments/layout/tables/util/tableHelpers';
import { componentScreens, lastScreenIndex } from './util/screens';
import { routes } from './util/routes';
export function RootScreen() {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(componentScreens));
    const width = useSizeValue('width');
    const { sizes, spacings } = useTheme();
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
    return (React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: 'Fragments', largeTitle: true }), isRootRoute: true, path: routes.components },
        React.createElement(NavigationLayer, null,
            React.createElement(PaddingLayer, { flex: 1 },
                React.createElement(TableContainer, { title: 'TableContainer Example', flex: 1 },
                    React.createElement(SearchBar, { placeholder: 'Buscar', buttonText: 'Buscar', marginBottom: spacings.lg, enableSearchButton: true }),
                    React.createElement(Layer, { flex: 1 },
                        React.createElement(AutoSizeRecyclerView, { layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer })))))));
}
//# sourceMappingURL=RootScreen.js.map