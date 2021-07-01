import React from 'react';
import { useTheme, Box, TextField, Text } from '@bma98/fractal-ui';
export function TextFieldFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Text Field Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(TextField, { placeholder: 'Escribe aqu\u00ED' }))));
}
//# sourceMappingURL=TextFieldFragment.js.map