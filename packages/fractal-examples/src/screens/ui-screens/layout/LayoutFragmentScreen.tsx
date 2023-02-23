import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal/fractal-ui';
import {
    BoxContentFragment,
    GridFragment,
    GridListFragment,
    HorizontalLayerFragment,
    MarginLayerFragment,
    PaddingLayerFragment,
    SeparatorFragment,
    TableContainerFragment
} from '../../../fragments/ui-fragments';

export function LayoutFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <GridFragment />
                    <GridListFragment />
                    <SeparatorFragment />
                    <TableContainerFragment />
                    <BoxContentFragment />
                    <HorizontalLayerFragment />
                    <MarginLayerFragment />
                    <PaddingLayerFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
