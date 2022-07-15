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
              font-size: 1.75rem;
              line-height: 2.375rem;
            `;
        case FontSize.large:
            return  css`
              font-size: 1.5rem;
              line-height: 2.063rem;
            `;
        case FontSize.medium:
            return  css`
              font-size: 1.25rem;
              line-height: 2.688rem;
            `;
        case FontSize.small:
            return  css`
              font-size: 1.125rem;
              line-height: 1.5rem;
            `;
    }
}

const getSizeAndHeight768 = (size: string) => {
    switch (size) {
        case FontSize.xLarge:
            return  css`
              font-size: 1.25rem;
              line-height: 2.688rem;
            `;
        case FontSize.large:
            return  css`
              font-size: 1rem;
              line-height: 1.375rem;
            `;
        case FontSize.medium:
            return  css`
              font-size: 0.875rem;
              line-height: 1.188rem;
            `;
        case FontSize.small:
            return  css`
              font-size: 0.75rem;
              line-height: 1.063rem;
            `;
    }
}

const getSizeAndHeight425 = (size: string) => {
    switch (size) {
        case FontSize.xLarge:
            return  css`
              font-size: 1rem;
              line-height: 1.375rem;
            `;
        case FontSize.large:
            return  css`
              font-size: 0.875rem;
              line-height: 1.188rem;
            `;
        case FontSize.medium:
            return  css`
              font-size: 0.75rem;
              line-height: 1.063rem;
            `;
        case FontSize.small:
            return  css`
              font-size: 0.5rem;
              line-height: 0.563rem;
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
const Subtitle = styled.p<Props>`
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

export default Subtitle;
