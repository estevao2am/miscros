import { createText } from '@shopify/restyle';
import React from 'react';
import {
  TextStyle,
} from 'react-native';
import { Theme } from '../../theme/theme';

const SRText = createText<Theme>() // Text
type SRTextProps = React.ComponentProps<typeof SRText>

export interface TextProps extends SRTextProps {
  preset?: TextVariants; // carregar as fontes
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

// Font-Size e Line Height
export function Text({
  children,
  italic,
  bold,
  semiBold,
  preset = 'paragraphMedium',
  style, // em caso alguem quiser adicionar algum estilo no texto
  ...sSRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);

  return (
    <SRText 
    color='backgroundContrast'
    style={[$fontSizes[preset], {fontFamily}, style]} {...sSRTextProps}
    
    
    >
      
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;  }
  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;

    default:
      return $fontFamily.regular;
  }
}
// Definindo os types obrigatorios a receber
type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};
// O TextStyle garantir que as propiedades colocadas certas do RN
// $ para edentificar uma variavel

export const $fontFamily = {
  bold: 'Satoshi-Bold',
  italic: 'Satoshi-Italic',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  regular: 'Satoshi-Regular',
  light: 'Satoshi-Light',
  boldItalic: 'Satoshi-BoldItalic',
  blackItalic: 'Satoshi-BlackItalic',
  black: 'Satoshi-Black',
  mediumItalic: 'Satoshi-MediumItalic',
};
