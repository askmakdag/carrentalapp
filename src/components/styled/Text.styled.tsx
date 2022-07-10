import styled from 'styled-components'
import {color, layout, space, typography, variant} from 'styled-system';

const variants = {
    'titleLarge': {
        fontSize: 42,
    },
    'titleMedium': {
        fontSize: 36,
    },
    'titleSmall': {
        fontSize: 32,
    },
    'subtitleXLarge': {
        fontSize: 28,
    },
    'subtitleLarge': {
        fontSize: 24,
    },
    'subtitleMedium': {
        fontSize: 20,
    },
    'subtitleSmall': {
        fontSize: 18,
    },
    'bodyLarge': {
        fontSize: 16,
    },
    'bodyMedium': {
        fontSize: 14,
    },
    'bodySmall': {
        fontSize: 12,
    },
}

const StyledText = styled.p<{variant: string}>(
    {
        margin: 0,
    },
    variant({variants}),
    color,
    layout,
    space,
    typography
);

StyledText.defaultProps = {
    variant: 'subtitleMedium',
}

export default StyledText;
