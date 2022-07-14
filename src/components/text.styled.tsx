import React from "react";
import styled from 'styled-components'
import {
    color,
    ColorProps, position,
    PositionProps, space,
    SpaceProps, typography,
    TypographyProps,
} from 'styled-system';


const enum FontSize {
    large  = 'large',
    medium = 'medium',
    small  = 'small',
}

const enum FontWeight {
    regular = 'regular',
    semiBold  = 'semiBold',
    bold = 'bold',
}

const getFontSize = (size: string) => {
    switch (size) {
        case FontSize.large:
            return '1rem';
        case FontSize.medium:
            return '0.875rem';
        case FontSize.small:
            return '0.75rem';
        default:
            return '0.875rem';
    }
}

const getLineHeight = (size: string) => {
    switch (size) {
        case FontSize.large:
            return '1.375rem';
        case FontSize.medium:
            return '1.188rem';
        case FontSize.small:
            return '1.063rem';
        default:
            return '1.188rem';
    }
}

const getWeight = (weight: string) => {
    switch (weight) {
        case FontWeight.regular:
            return 300;
        case FontWeight.semiBold:
            return 700;
        case FontWeight.bold:
            return 900;
        default:
            return 400;
    }
}

interface Props extends PositionProps, ColorProps, SpaceProps, TypographyProps {
    size: string;
    weight: string;
    children: React.ReactNode;
}

// weight -> regular-400, bold-900, semiBold-700
const Text = styled.p<Props>`
    font-size: ${props => getFontSize(props?.size)};
    line-height: ${props => getLineHeight(props?.size)};
    font-weight: ${props => getWeight(props?.weight)};
    ${color};
    ${position};
    ${space};
    ${typography}
`;

export default Text;
