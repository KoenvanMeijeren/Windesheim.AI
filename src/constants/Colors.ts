import { ColorSchemeName, useColorScheme } from 'react-native';

import { hasKeyInMap } from '../lib/utility/data';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

type ColorSchemeType = {
    text: string;
    background: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
    bg1: string;
    bg2: string;
    bg3: string;
};

export const colorMap: Record<'dark' | 'light', ColorSchemeType> = {
    light: {
        text: '#000',
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
        bg1: '#fff377',
        bg2: '#ffd949',
        bg3: '#ffcb05',
    },
    dark: {
        text: '#fff',
        background: '#2a2a2a',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
        bg1: '#86d2d9',
        bg2: '#22bdc6',
        bg3: '#4695d3',
    },
};
export type ColorGradientScheme = [string, string, string];
export type ColorGraidentType = 'green' | 'blue' | 'yellow' | 'red';

export type ColorGradientSchemes = Record<
    ColorGraidentType,
    ColorGradientScheme
>;

export const colorSchemes: ColorGradientSchemes = {
    yellow: ['#FFCB05', '#FFD949', '#FFF377'],
    green: ['#45B97C', '#B1D249', '#D5E05B'],
    blue: ['#4695D3', '#22BDC6', '#86D2D9'],
    red: ['#EE3135', '#F16682', '#F287B7'],
};

export function useColorConfig() {
    const scheme: ColorSchemeName = useColorScheme();
    if (scheme && hasKeyInMap(colorMap, scheme)) return colorMap[scheme];
    return colorMap.dark;
}
