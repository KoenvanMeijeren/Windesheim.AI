import * as React from 'react';

import { Button } from '../../components/buttons/Button';
import { PageView } from '../../components/general/PageView';
import { buttonColorSchemes } from '../../constants/Colors';
export const DataScreen = () => {
    return (
        <PageView
            title="Settings > Data"
            description='"Artificial intelligence is the key to innovating the future and transforming our lives"'
        >
            <Button
                buttonText="Windesheim Tech Radar"
                screenName="Settings"
                colorGradientScheme={buttonColorSchemes.primary}
                width={100}
            />
        </PageView>
    );
};
