import React, { forwardRef } from 'react';
import { RadioButtonProps } from '../types';
import { Layer } from '../../../layout/Layer';
import { BaseRadioButton } from './BaseRadioButton';

const RadioButton = forwardRef(
    ({ label, onPress, active, value, ...layerProps }: RadioButtonProps, ref: any): JSX.Element => (
        <Layer ref={ref} {...layerProps}>
            <BaseRadioButton value={value} active={active} onPress={onPress} label={label} />
        </Layer>
    )
);

RadioButton.displayName = 'RadioButton';

export { RadioButton };
