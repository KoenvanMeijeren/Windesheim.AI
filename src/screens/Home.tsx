import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import NewsList from '../components/Data/NewsList';
import { Button } from '../components/buttons/Button';
import HorizontalScroll from '../components/general/HorizontalScroll';
import { PageView } from '../components/general/PageView';
import { TextTranslated } from '../components/text/TextTranslated';
import { buttonColorSchemes } from '../constants/Colors';
import { useFonts } from '../constants/Fonts';
import { Routes } from '../routes/routes';

export const HomeScreen = () => {
    const fonts = useFonts();

    const styles = StyleSheet.create({
        newsHeaderText: {
            ...fonts.h1,
            marginTop: 10,
            marginBottom: 10,
        },
    });

    return (
        <PageView
            title="Home"
            description="Artificial intelligence is the key to innovating the
                future and transforming our lives"
        >
            {/* "News" */}
            <Text style={styles.newsHeaderText}>
                <TextTranslated text="News" />
            </Text>

            {/* HorizontalScroll */}
            <HorizontalScroll>
                <NewsList />
            </HorizontalScroll>

            {/* Button */}
            <Button
                buttonText="Windesheim Tech Radar"
                colorGradientScheme={buttonColorSchemes.primary}
                screenName={Routes.WindesheimTechRadar}
                width={100}
            />
        </PageView>
    );
};
