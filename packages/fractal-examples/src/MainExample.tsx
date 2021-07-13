import React from 'react';
import { FractalAppRoot, Background, ScrollView, PaddingLayer, SafeAreaLayer } from '@bma98/fractal-ui';
import {
    ThemeSwapperFragment,
    DropZoneFragment,
    ChipFragment,
    ChipListFragment,
    ColorTabListFragment,
    TagsInputFieldFragment,
    ActivityIndicatorFragment,
    AvatarImageFragment,
    ImageBackgroundFragment,
    SegmentedControlFragment,
    SliderFragment,
    SwitchFragment,
    CheckBoxFragment,
    RadioButtonFragment,
    RadioGroupFragment,
    TextsFragment,
    CrossButtonFragment,
    OptionsMenuButtonFragment,
    OptionsButtonFragment,
    TextButtonFragment,
    ButtonFragment,
    ToggleButtonFragment,
    RoundedToggleButtonFragment,
    CircularIconButtonFragment,
    ColorPickerFragment,
    HorizontalLayerFragment,
    MarginLayerFragment,
    PaddingLayerFragment,
    BoxContentFragment,
    SeparatorsFragment,
    SearchBarFragment,
    AutocompleteFragment,
    TextFieldFragment,
    TextFieldMaskFragment,
    IconTextFieldFragment,
    PickerFragment,
    DatePickerFragment,
    TimePickerFragment,
    BlurredModalFragment,
    MiddleCellModalFragment,
    BottomCellModalFragment,
    ErrorMessageFragment,
    BadgeFragment,
    MessageFragment,
    PopoverFragment,
    DetailsListFragment,
    GridListFragment,
    GridFragment,
    SocialMediaButtonsFragment,
    FlatListFragment,
    RecyclerViewFragment
} from './ui-fragments';
import { ChartsExamples } from './charts/ChartsExamples';

function Content(): JSX.Element {
    return (
        <PaddingLayer>
            <ThemeSwapperFragment />
            <DropZoneFragment />
            <ChipFragment />
            <ChipListFragment />
            <ColorTabListFragment />
            <TagsInputFieldFragment />
            <ActivityIndicatorFragment />
            <AvatarImageFragment />
            <ImageBackgroundFragment />
            <SegmentedControlFragment />
            <SliderFragment />
            <SwitchFragment />
            <CheckBoxFragment />
            <RadioButtonFragment />
            <RadioGroupFragment />
            <TextsFragment />
            <HorizontalLayerFragment />
            <MarginLayerFragment />
            <PaddingLayerFragment />
            <BoxContentFragment />
            <SeparatorsFragment />
            <CrossButtonFragment />
            <OptionsButtonFragment />
            <OptionsMenuButtonFragment />
            <TextButtonFragment />
            <ButtonFragment />
            <ToggleButtonFragment />
            <RoundedToggleButtonFragment />
            <CircularIconButtonFragment />
            <ColorPickerFragment />
            <SearchBarFragment />
            <AutocompleteFragment />
            <TextFieldFragment />
            <TextFieldMaskFragment />
            <IconTextFieldFragment />
            <PickerFragment />
            <DatePickerFragment />
            <TimePickerFragment />
            <BlurredModalFragment />
            <MiddleCellModalFragment />
            <BottomCellModalFragment />
            <ErrorMessageFragment />
            <BadgeFragment />
            <MessageFragment />
            <PopoverFragment />
            <DetailsListFragment />
            <GridListFragment />
            <GridFragment />
            <SocialMediaButtonsFragment />
            <RecyclerViewFragment />
            <FlatListFragment />
            <ChartsExamples />
        </PaddingLayer>
    );
}

export function MainExample(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <Background>
                <SafeAreaLayer>
                    <ScrollView>
                        <Content />
                    </ScrollView>
                </SafeAreaLayer>
            </Background>
        </FractalAppRoot>
    );
}
