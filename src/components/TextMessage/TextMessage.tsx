import React, { useRef } from 'react'
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    
} from 'react-native'
import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { $textInputStyle } from '../TextInput/TextInput'
import { useAppTheme } from '../hooks/useAppTheme'

interface TextMessageProps extends RNTextInputProps {
    onPressSend:(message:string) => void;
    //value:string
    
}
export function TextMessage({ onPressSend,value ,...rnTextInputProps}: TextMessageProps) {
    const inputRef = useRef<RNTextInput>(null)

    const {colors} = useAppTheme()

    // valida se o usuario não digitou nada incluimdomos espacos vazios 
    const sendIsDisabled = value?.trim().length===0

    function focusInput() {
        inputRef.current?.focus()
    }

    return (
        <Pressable onPress={focusInput}>
            <Box
                paddingHorizontal="s16"
                paddingVertical="s14"
                backgroundColor="gray5"
                borderRadius="s12"
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
            >
                <RNTextInput
                    ref={inputRef}
                    //multiline={true}
                    //numberOfLines={4} para textos grandes
                    value={value}
                    style={[$textInputStyle, {color:colors.gray1}]}
                    {...rnTextInputProps}
                    placeholderTextColor={colors.gray2}
                />
                <Pressable disabled={sendIsDisabled} onPress={() => onPressSend(value || '')}>
                    <Text color={sendIsDisabled? "gray2":'primary'} bold>
                        Enviar
                    </Text>
                </Pressable>
            </Box>
        </Pressable>
    )
}
