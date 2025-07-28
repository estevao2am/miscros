import React, { useState } from "react"
import { TextInput, TextInputProps } from "../TextInput/TextInput"
import { Icon } from "../../components/Icon/Icon"

export type PasswordInputProps =Omit<TextInputProps, 'RightComponents'>


export function PasswordInput(props:PasswordInputProps){

const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

function toggleSecureTextEntry(){
  setIsSecureTextEntry(prev=> !prev);
}
    return (
        <TextInput
              secureTextEntry={isSecureTextEntry}
                RightComponent={
                <Icon
                onPress={toggleSecureTextEntry}
                 name={isSecureTextEntry? 'eyeOn':'eyeOff'}
                 color="gray2"
                 />}
                {...props}
              />
    )
}