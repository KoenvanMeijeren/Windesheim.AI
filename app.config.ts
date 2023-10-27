import { ExpoConfig } from '@expo/config';

export type AppConfigOptions = {
    splashScreenTime: number;
};

export const appConfig: AppConfigOptions = {
    splashScreenTime: 500,
};

export default {
    name: 'WINsight',
    slug: 'winsight',
    scheme: 'winsight',
    version: '1.0.1',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    userInterfaceStyle: 'light',
    splash: {
        image: './src/assets/images/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.winsight.winsight2',
    },
    android: {
        adaptiveIcon: {
            foregroundImage: './src/assets/images/adaptive-icon.png',
            backgroundColor: '#ffffff',
        },
    },
    web: {
        favicon: './src/assets/images/favicon.png',
    },
    extra: {
        eas: {
            projectId: '0f525e57-fad9-45bd-9085-714b0d610d6d',
        },
    },
    runtimeVersion: {
        policy: 'appVersion',
    },
    updates: {
        url: 'https://u.expo.dev/0f525e57-fad9-45bd-9085-714b0d610d6d',
    },
    owner: 'winsight',
};
