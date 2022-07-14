import React from "react";
import styled from 'styled-components'
import {
    ColorProps,
    PositionProps,
    SpaceProps,
    TypographyProps,
} from 'styled-system';


const enum FontSize {
    xLarge = 'xLarge',
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
        case FontSize.xLarge:
            return '3rem';
        case FontSize.large:
            return '2.625rem';
        case FontSize.medium:
            return '2.25rem';
        case FontSize.small:
            return '2rem';
        default:
            return '2.25rem';
    }
}

const getLineHeight = (size: string) => {
    switch (size) {
        case FontSize.xLarge:
            return '4.063rem';
        case FontSize.large:
            return '3.563rem';
        case FontSize.medium:
            return '3.063rem';
        case FontSize.small:
            return '2.688rem';
        default:
            return '3.063rem';
    }
}

const getWeight = (weight: string) => {
    switch (weight) {
        case FontWeight.regular:
            return 400;
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
const Title = styled.p<Props>`
    color: ${props => props?.color ?? '#333333'};
    font-size: ${props => getFontSize(props?.size)};
    line-height: ${props => getLineHeight(props?.size)};
    font-weight: ${props => getWeight(props?.weight)};
`;

export default Title;
