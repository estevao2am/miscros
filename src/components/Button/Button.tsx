//import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {  TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { buttonPresets } from './buttonPresets';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline' 


export interface ButtonProps extends TouchableOpacityBoxProps{
  title: string;
  loading?:boolean
  preset?:ButtonPreset
  disabled?:boolean
}

export function Button({
  title,
  loading,
  preset='primary',
  disabled,
  ...TouchableOpacityBoxProps

}: ButtonProps) {

const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default']
   // const {colors} = useTheme<Theme>()
  return (
    <TouchableOpacityBox
    disabled={disabled || loading}
     paddingHorizontal='s20'
     height={50}
     alignItems='center'
     justifyContent='center'
     borderRadius='s16'
     {...buttonPreset.container}
     {...TouchableOpacityBoxProps} // Restante dos estlod a adicionar
  
      >
        {loading?(<ActivityIndicator color={buttonPreset.content}/>) : ( <Text preset="paragraphMedium" bold color={buttonPreset.content}>
        {title}
      </Text>)}
     
    </TouchableOpacityBox >
  );
}
