
import React from 'react'
import { Dimensions } from 'react-native';
import { $shadowProps } from '../../../theme/theme';
import { Box, BoxProps } from '../../Box/Box';
import { Icon, IconProps } from '../../Icon/Icon';
import { Text } from '../../Text/Text';
import { Toast,ToastType} from '../../../services/toast/toastTypes';

const MAX_WIDTH = Dimensions.get('screen').width *0.9

interface Props {
    toast:Toast
}

export function ToastContent({toast}:Props){

            //const position: Required<Toast>['position'] = toast?.position || 'top';
              const type: ToastType = toast?.type || 'success';




    return (
        <Box  {...$boxStyle} style={$shadowProps }>
            <Icon {...mapTypeToIcon[type]} />
            <Text style={{flexShrink:1}} marginLeft='s16' preset='paragraphMedium' bold>
                {toast?.message}</Text>
        </Box>
    )
}


const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};
const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};