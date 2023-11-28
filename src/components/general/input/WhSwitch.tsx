import React from 'react';
import { Switch } from 'react-native';

import { ColorSchemeType } from '../../../lib/constants/Colors';

export type SwitchProps = {
    onValueChange?: () => void;
    isEnabled: boolean;
    colors: ColorSchemeType;
    testID?: string;
};

export const WhSwitch = ({
    onValueChange,
    isEnabled,
    colors,
    testID,
}: SwitchProps) => {
    return (
        <Switch
            trackColor={{ false: colors.primary, true: colors.success }}
            thumbColor={isEnabled ? colors.success : colors.primary}
            ios_backgroundColor={colors.background}
            // @ts-ignore
            activeThumbColor={colors.success}
            onValueChange={onValueChange}
            value={isEnabled}
            testID={testID}
        />
    );
};
