import { motion } from 'framer-motion';
import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';

import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractTextProps,
    extractWebProps,
    extractPlaceholder,
    shouldForwardProp
} from '../../../../sharedProps';
import { getBaseTextFieldAccessibilityProps } from '../accessibility/getBaseTextFieldAccessibilityProps';
import { TextFieldProps } from './types';

const StyledTextInput = styled(motion.input as any).withConfig({
    shouldForwardProp
})`
    outline: none;
    border-width: 0;
    ${extractPlaceholder};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
    user-select: auto;
`;

const BaseTextField = forwardRef(
    (
        {
            onChangeText,
            onSubmitEditing,
            placeholder,
            secureTextEntry,
            from,
            currentVariant,
            animate,
            placeholderTextColor,
            ...others
        }: TextFieldProps,
        ref: Ref<HTMLInputElement>
    ): JSX.Element => {
        const handleChange = (event: { target: { value: string } }): void => onChangeText && onChangeText(event.target.value);

        const handleKeydown = (keyboardEvent: React.KeyboardEvent<HTMLInputElement>): void => {
            if (keyboardEvent.key === 'Enter') {
                onSubmitEditing?.();
            }
        };

        return (
            <StyledTextInput
                ref={ref}
                placeholder={placeholder}
                selectable
                onChange={handleChange}
                onKeyDown={handleKeydown}
                type={secureTextEntry ? 'password' : undefined}
                initial={currentVariant ? 'from' : from}
                animate={currentVariant ?? animate}
                placeholderTextColor={placeholderTextColor}
                {...getBaseTextFieldAccessibilityProps(placeholder)}
                {...others}
            />
        );
    }
);

BaseTextField.displayName = 'BaseTextField';

export { BaseTextField };
