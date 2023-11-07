import React from 'react';
import {
    Platform,
    Image,
    View,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

//@ts-ignore
import LogoBlack from '../../assets/images/Logo/Logo_black.svg';
//@ts-ignore
import LogoWin from '../../assets/images/Logo/Logo_windesheim.svg';
import { Background } from '../general/Background';
import { useCurrentTheme } from '../../constants/Colors';

export const LoadingScreen = () => {
    const theme = useCurrentTheme();

    const styles = StyleSheet.create({
        fullScreenContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 999,
        },
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
        <View style={styles.fullScreenContainer}>
            <Background />
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
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
        </View>
    );
};

export default LoadingScreen;
