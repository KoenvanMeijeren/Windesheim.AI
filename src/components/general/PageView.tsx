import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useColorConfig } from '../../constants/Colors';
import { TextTranslated } from '../text/TextTranslated';
import { useFonts } from '../../constants/Fonts';

type PageViewProps = {
    children: React.ReactNode;
    title: string;
    description?: string;
};

export const PageView = ({ children, title, description }: PageViewProps) => {
    const colors = useColorConfig();
    const fonts = useFonts();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            flex: 1,
            padding: 20,
        },
        header: {
            ...fonts.h1,
            marginBottom: 10,
        },
        description: {
            ...fonts.accent,
            textAlign: 'center',
        },
    });

    return (
        <View testID={title} style={styles.container}>
            <Text style={styles.header} testID={`${title}-description`}>
                <TextTranslated text={title} />
            </Text>
            {description ? (
                <Text style={styles.description}>
                    <TextTranslated text={description} />
                </Text>
            ) : null}

            {children}
        </View>
    );
};
