import {TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import {
  createBox,
  createRestyleComponent,
  spacing,
  SpacingProps,
  BorderProps,
  LayoutProps,
  BackgroundColorProps,
  spacingShorthand,
  SpacingShorthandProps,
  border,
  layout,
  backgroundColor,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>&
  RNTouchableOpacityProps


export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>([backgroundColor, spacing, spacingShorthand, border, layout],
  TouchableOpacity,
);
