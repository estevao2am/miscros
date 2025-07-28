import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '../hooks/useAppTheme';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?:BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
      <Box {...boxProps}>
            <Pressable onPress={focusInput}>

        <Text preset="paragraphMedium" marginBottom="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
           autoCapitalize='none'
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
       { RightComponent &&  
        (<Box justifyContent="center" marginLeft='s16'>
            {RightComponent}
        </Box>)}

        </Box>

        {
          // conditional error
          errorMessage && (
            <Text color="redError" preset="paragraphSmall" bold>
              {errorMessage}
            </Text>
          )
        }
            </Pressable>

      </Box>
  );
}

// Propriendades que resetan as configuracoes padroes no android, ele vem com um iput padrao
export const $textInputStyle: TextStyle = {
 // borderWidth: 1,
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
