import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, Image, View, StyleSheet } from 'react-native';

import { appConfig } from '../../../app.config';
//@ts-ignore
import LogoBlack from '../../assets/images/Logo/Logo_black.svg';
//@ts-ignore
import LogoWin from '../../assets/images/Logo/Logo_windesheim.svg';
import { useAppDispatch } from '../../redux/Hooks';
import { hideSplashScreen } from '../../redux/slices/LayoutSlice';
import { Routes } from '../../routes/routes';
import { Background } from '../general/Background';
import { useCurrentTheme } from '../../constants/Colors';

export const SplashScreen = () => {
    const navigation = useNavigation();
    const storeDispatcher = useAppDispatch();
    const theme = useCurrentTheme();

    useEffect(() => {
        // Simulate a delay while loading the app
        setTimeout(() => {
            // Dispatch the action to hide the splash screen and change the state
            storeDispatcher(hideSplashScreen());
            // Navigate to the main app screen
            navigation.navigate(Routes.Home as never);
        }, appConfig.splashScreenTime);
    }, [storeDispatcher, navigation]); // Include dispatch and navigation in the dependencies array

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        centerImage: {
            width: 275,
            height: 200,
            resizeMode: 'contain',
        },
        originalSizeImage: {
            width: 200,
            height: 100,
            resizeMode: 'contain',
        },
    });

    return (
        <>
            <Background />
            <View style={styles.container}>
                {Platform.OS !== 'web' ? (
                    <LogoBlack style={styles.centerImage} />
                ) : (
                    <Image
                        testID="LogoBlack"
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        source={
                            theme === 'light'
                                ? require('../../assets/images/Logo/Logo_light.png')
                                : require('../../assets/images/Logo/Logo_dark.png')
                        }
                        style={styles.centerImage}
                    />
                )}
                {Platform.OS !== 'web' ? (
                    <LogoWin style={styles.originalSizeImage} />
                ) : (
                    <Image
                        testID="LogoWin"
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        source={
                            theme === 'light'
                                ? require('../../assets/images/Logo/Logo_windesheim_black.png')
                                : require('../../assets/images/Logo/Logo_windesheim.png')
                        }
                        style={styles.originalSizeImage}
                    />
                )}
            </View>
        </>
    );
};

export default SplashScreen;
