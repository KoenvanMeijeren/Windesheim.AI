/* eslint @typescript-eslint/no-unsafe-assignment: 0 */

import {
    OPENAI_API_KEY,
    APP_DEBUG,
    AI_ENABLED,
    WP_CONTENT_URL,
    WP_DATA_URL,
    WP_USERNAME,
    WP_PASSWORD,
    // @ts-ignore
} from '@env';

export enum EnvOptions {
    OpenAIApiKey = 'OpenAIApiKey',
    AppDebug = 'AppDebug',
    AiEnabled = 'AiEnabled',
    WordPressContentURL = 'WordPressContentURL',
    WordPressDataURL = 'WordPressPluginURL',
    WordPressUsername = 'WordPressUsername',
    WordPressPassword = 'WordPressPassword',
}

export type Env = Record<EnvOptions, string | undefined>;

export const mockEnvValues: Env = {
    [EnvOptions.OpenAIApiKey]: 'mockOpenAIApiKey',
    [EnvOptions.AppDebug]: 'false',
    [EnvOptions.AiEnabled]: 'true',
    [EnvOptions.WordPressContentURL]: 'https://www.windesheim.tech',
    [EnvOptions.WordPressDataURL]: 'https://www.windesheim.ai',
    [EnvOptions.WordPressUsername]: 'mockUsername',
    [EnvOptions.WordPressPassword]: 'mockPassword',
};

export const EnvValues: Env = {
    [EnvOptions.OpenAIApiKey]: OPENAI_API_KEY,
    [EnvOptions.AppDebug]: APP_DEBUG,
    [EnvOptions.AiEnabled]: AI_ENABLED,
    [EnvOptions.WordPressContentURL]: WP_CONTENT_URL,
    [EnvOptions.WordPressDataURL]: WP_DATA_URL,
    [EnvOptions.WordPressUsername]: WP_USERNAME,
    [EnvOptions.WordPressPassword]: WP_PASSWORD,
};