import React from "react";
import styled, {css} from 'styled-components'
import {
    color,
    ColorProps, position,
    PositionProps, space,
    SpaceProps, typography,
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

const getSizeAndHeight = (size: string) => {
    switch (size) {
        case FontSize.xLarge:
            return  css`
              font-size: 3rem;
              line-height: 4.063rem;
            `;
        case FontSize.large:
            return  css`
              font-size: 2.625rem;
              line-height: 3.563rem;
            `;
        case FontSize.medium:
            return  css`
              font-size: 2.25rem;
              line-height: 3.063rem;
            `;
        case FontSize.small:
            return  css`
              font-size: 2rem;
              line-height: 2.688rem;
            `;
    }
}

const getSizeAndHeight768 = (size: string) => {
    switch (size) {
        case FontSize.xLarge:
            return  css`
              font-size: 2.25rem;
              line-height: 3.063rem;
            `;
        case FontSize.large:
            return  css`
              font-size: 2rem;
              line-height: 2.688rem;
            `;
        case FontSize.medium:
            return  css`
              font-size: 1.45rem;
              line-height: 2.1rem;
            `;
        case FontSize.small:
            return  css`
              font-size: 1rem;
              line-height: 1.4rem;
            `;
    }
}

const getSizeAndHeight425 = (size: string) => {
    switch (size) {
        case FontSize.xLarge:
            return  css`
              font-size: 2rem;
              line-height: 2.668rem;
            `;
        case FontSize.large:
            return  css`
              font-size: 1.45rem;
              line-height: 2.1rem;
            `;
        case FontSize.medium:
            return  css`
              font-size: 1rem;
              line-height: 1.55rem;
            `;
        case FontSize.small:
            return  css`
              font-size: 0.75rem;
              line-height: 1rem;
            `;
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
    }
}

interface Props extends PositionProps, ColorProps, SpaceProps, TypographyProps {
    size: string;
    weight: string;
    children: React.ReactNode;
}

// weight -> regular-400, bold-900, semiBold-700
const Title = styled.p<Props>`
    font-weight: ${props => getWeight(props?.weight)};
    ${props => getSizeAndHeight(props?.size)};
    {
      @media (max-width: 768px) {
        ${props => getSizeAndHeight768(props?.size)};
      }
  
      @media (max-width: 425px) {
        ${props => getSizeAndHeight425(props?.size)};
      }
    }
    ${color};
    ${position};
    ${space};
    ${typography}
`;

export default Title;
