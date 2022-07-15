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

const getSizeAndHeight768 = (size: string) => {
    switch (size) {
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
              font-size: 0.55rem;
              line-height: 0.763rem;
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
const Text = styled.p<Props>`
  font-weight: ${props => getWeight(props?.weight)};
  ${props => getSizeAndHeight(props?.size)};
  {
    @media (max-width: 768px) {
      ${props => getSizeAndHeight768(props?.size)};
    }
  }
  ${color};
  ${position};
  ${space};
  ${typography}
`;

export default Text;
