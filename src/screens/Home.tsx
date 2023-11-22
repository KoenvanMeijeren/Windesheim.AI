import React from 'react';
import { View } from 'react-native';

import { TechProviders } from '../components/WTR/TechProviders';
import { Themes } from '../components/WTR/Theme';
import { Notification } from '../components/alerts/Notification';
import { PageView } from '../components/general/views/PageView';
import { WhScrollView } from '../components/general/views/WhScrollView';

export const HomeScreen = () => {
    const description =
        'Artificial intelligence is the key to innovating the future and transforming our lives';
    return (
        <PageView title="Home" description={description}>
            {/* WTR-site content */}
            <WhScrollView>
                <View>
                    <Notification
                        id={1}
                        message="This is a notification message."
                        colorGradientScheme={['#FFA07A', '#FF6347', '#FF4500']}
                        width={300}
                        height={80}
                        icon="bell"
                    />
                    <TechProviders />
                    <Themes />
                </View>
            </WhScrollView>
        </PageView>
    );
};
