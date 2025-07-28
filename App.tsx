/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ThemeProvider } from '@shopify/restyle';
import {   SafeAreaView } from 'react-native';
import { theme } from './src/theme/theme';
import { Text } from './src/components';

function App() {

  return (
        <ThemeProvider theme={theme}>

    <SafeAreaView>
    <Text preset='headingLarge' style={{ fontSize: 26, fontFamily: 'Satoshi-BoldItalic'  }} > Olá</Text>
        <Text preset='paragraphLarge' bold > Seja bem vindo ao React js</Text>

    </SafeAreaView>
        </ThemeProvider >

  );
}



export default App;
