import React from 'react';
import Responsive from './Responsive';
import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindFileConfig from '../../tailwind.config';

const tailwindConfig = resolveConfig(tailwindFileConfig);
const buildMediaQuery = pixelsString => ({ query: `(min-width: ${pixelsString})` });

export default function (props) {
  const media = {
    isSmallScreen: useMediaQuery(buildMediaQuery(tailwindConfig.theme.screens.sm)),
    isMediumScreen: useMediaQuery(buildMediaQuery(tailwindConfig.theme.screens.md)),
    isLargeScreen: useMediaQuery(buildMediaQuery(tailwindConfig.theme.screens.lg)),
    isExtraLargeScreen: useMediaQuery(buildMediaQuery(tailwindConfig.theme.screens.xl)),
  };

  return <Responsive media={media} {...props} />
}