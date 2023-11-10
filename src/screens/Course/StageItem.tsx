import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextTranslated } from '../../components/text/TextTranslated';
import { useColorConfig } from '../../constants/Colors';
import { useFonts } from '../../constants/Fonts';
import { Routes } from '../../routes/routes';
import { StageDataMapped } from '../../types/Stage';

export const StageItem = ({
    title,
    id,
    isCompletedByUser,
    courseId,
}: StageDataMapped & { courseId: string }) => {
    const fonts = useFonts();
    const colors = useColorConfig();
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        courseTitle: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginBottom: 10,
        },
        title: {
            ...fonts.h3,
            marginLeft: 10,
            color: colors.text,
        },
    });

    function handlePress() {
        //@ts-ignore
        navigation.navigate(Routes.Course.toString(), {
            courseId,
            stageId: id,
        });
    }

    return (
        <View onTouchEnd={handlePress}>
            <View style={styles.courseTitle}>
                {isCompletedByUser ? (
                    <MaterialCommunityIcons
                        name="check-circle"
                        size={24}
                        color={colors.success}
                    />
                ) : (
                    <MaterialCommunityIcons
                        name="checkbox-blank-circle-outline"
                        size={24}
                        color={colors.text}
                    />
                )}
                <View style={styles.title}>
                    <TextTranslated text={title} />
                </View>
            </View>
        </View>
    );
};
