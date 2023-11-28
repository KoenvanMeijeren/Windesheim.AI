import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Image,
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import { Bar } from 'react-native-progress';

import {
    position,
    keywords,
    aiFamiliarity,
} from '../../components/BackgroundCollect/DataList';
import { Button } from '../../components/general/buttons/Button';
import { ListButton } from '../../components/general/buttons/ListButton';
import { TextTranslated } from '../../components/general/text/TextTranslated';
import { PageView } from '../../components/general/views/PageView';
import {
    shadow,
    useColorConfig,
    useCurrentTheme,
} from '../../constants/Colors';
import { useFonts } from '../../constants/Fonts';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import {
    setPosition,
    setInterestedKeyword,
    setHowMuchFamiliar,
    setIsFirstTimeUser,
} from '../../redux/slices/BgCollectSlice';
import { navigationActions } from '../../redux/slices/NavigationSlice';

const BackgroundCollectForm = () => {
    const storeDispatch = useAppDispatch();

    const isFirstTimeUser = useAppSelector(
        (state) => state.bgCollect,
    ).isFirstTimeUser;

    useEffect(() => {
        if (!isFirstTimeUser) return;

        storeDispatch(navigationActions.showNavBar(false));
    }, [isFirstTimeUser, storeDispatch]);

    const [showBackgroundInput, setShowBackgroundInput] = useState(false);

    const handleBackgroundInput = () => {
        setShowBackgroundInput(true);
    };

    const handleToggleFirstTimeUser = () => {
        storeDispatch(setIsFirstTimeUser(!isFirstTimeUser));
    };

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        'What is your position?',
        'What area of AI are you interested in?',
        'How familiar are you with AI?',
    ];

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleValueSelection = (value: string) => {
        if (currentQuestion === 0) {
            storeDispatch(setPosition(value));
        } else if (currentQuestion === 1) {
            storeDispatch(setInterestedKeyword(value));
        } else if (currentQuestion === 2) {
            storeDispatch(setHowMuchFamiliar(value));
        }

        if (currentQuestion < questions.length - 1) {
            handleNextQuestion();
        } else {
            storeDispatch(setIsFirstTimeUser(false));
            setCurrentQuestion(questions.length);
        }
    };
    const totalQuestions = questions.length;
    const progress = currentQuestion / totalQuestions;

    const theme = useCurrentTheme();
    const colors = useColorConfig();
    const fonts = useFonts();
    const windowDimensions = useWindowDimensions();
    const barWidth = windowDimensions.width * 0.8;
    const buttonWidth = windowDimensions.width * 0.2;

    const styles = StyleSheet.create({
        welcomeContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        title: {
            ...fonts.h1,
            color: colors.text,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            ...fonts.h3,
            color: colors.text,
            textAlign: 'center',
        },
        centerImage: {
            width: windowDimensions.width * 0.6,
            height: windowDimensions.height * 0.3,
            resizeMode: 'contain',
            ...shadow,
        },
        container: {
            backgroundColor: colors.background,
            maxHeight: windowDimensions.height * 0.3,
            maxWidth: windowDimensions.width * 0.8,
            marginTop: windowDimensions.height * 0.05,
        },
        progressBar: {
            ...shadow,
            marginTop: windowDimensions.height * 0.05,
        },
    });

    if (!isFirstTimeUser) {
        return null;
    }

    if (!showBackgroundInput) {
        return (
            <PageView>
                <View style={styles.welcomeContainer}>
                    <TextTranslated
                        style={styles.title}
                        text="Welcome to Windesheim.AI!"
                    />
                    <Image
                        testID="winglogo"
                        source={
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            theme === 'light'
                                ? require('../../assets/images/Icon/wing_yellow.png')
                                : require('../../assets/images/Icon/wing_blue.png')
                        }
                        style={styles.centerImage}
                    />
                    <TextTranslated
                        style={styles.modalText}
                        text="Tell me your background!"
                    />
                    <TextTranslated
                        style={styles.modalText}
                        text="We provide you with customized training."
                    />

                    <View>
                        <Button
                            width={buttonWidth}
                            buttonText="Okay"
                            onPress={handleBackgroundInput}
                            colorGradientScheme={[
                                colors.bg1,
                                colors.bg2,
                                colors.bg3,
                            ]}
                            textColorScheme={colors.text}
                            icon="check-circle"
                        />
                        <Button
                            width={buttonWidth}
                            testId="FirstCollect-skip-button"
                            buttonText="Skip"
                            onPress={handleToggleFirstTimeUser}
                            colorGradientScheme={[
                                colors.bg1,
                                colors.bg2,
                                colors.bg3,
                            ]}
                            textColorScheme={colors.text}
                            icon="forward"
                        />
                    </View>
                </View>
            </PageView>
        );
    } else if (currentQuestion < questions.length) {
        return (
            <PageView>
                <View style={styles.welcomeContainer}>
                    <TextTranslated
                        style={styles.title}
                        text="Background information Collect!"
                    />

                    <Image
                        testID="winglogo"
                        source={
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            theme === 'light'
                                ? require('../../assets/images/Icon/wing_yellow.png')
                                : require('../../assets/images/Icon/wing_blue.png')
                        }
                        style={styles.centerImage}
                    />

                    <TextTranslated
                        style={styles.modalText}
                        text={questions[currentQuestion]}
                    />

                    <ScrollView style={styles.container}>
                        <FlatList
                            data={
                                currentQuestion === 0
                                    ? position
                                    : currentQuestion === 1
                                    ? keywords
                                    : aiFamiliarity
                            }
                            renderItem={({ item }) => (
                                <ListButton
                                    onPress={() =>
                                        handleValueSelection(
                                            item.name || item.id,
                                        )
                                    }
                                    buttonText={item.name || item.id}
                                    width={buttonWidth}
                                    testId="listButton"
                                />
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </ScrollView>
                    <View style={styles.progressBar}>
                        <Bar
                            width={barWidth}
                            height={7}
                            borderRadius={10}
                            color={colors.bg3}
                            unfilledColor={colors.listItemBg}
                            progress={progress}
                        />
                    </View>
                </View>
            </PageView>
        );
    } else {
        return (
            <PageView>
                <View style={styles.welcomeContainer}>
                    <TextTranslated style={styles.title} text="Thank you!" />

                    <Image
                        testID="winglogo"
                        source={
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            theme === 'light'
                                ? require('../../assets/images/Icon/wing_yellow.png')
                                : require('../../assets/images/Icon/wing_blue.png')
                        }
                        style={styles.centerImage}
                    />
                    <TextTranslated
                        style={styles.modalText}
                        text="Start the app"
                    />

                    <View>
                        <Button
                            buttonText="Start"
                            onPress={handleToggleFirstTimeUser}
                            colorGradientScheme={[
                                colors.bg1,
                                colors.bg2,
                                colors.bg3,
                            ]}
                            textColorScheme={colors.text}
                            icon="check-circle"
                        />
                    </View>
                </View>
            </PageView>
        );
    }
};

export default BackgroundCollectForm;
