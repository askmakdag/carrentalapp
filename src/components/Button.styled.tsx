import styled from 'styled-components'
import {
    color,
    ColorProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
} from 'styled-system';
import React from "react";

interface Props extends PositionProps, ColorProps, SpaceProps, TypographyProps {
    children: React.ReactNode;
}

export const Button = styled('button')<Props>`
  {
    background-color: #E6356F;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    padding: 8px 0;
    color: #fff;
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    };
    ${color};
    ${position};
    ${space};
    ${typography}
  },
`
