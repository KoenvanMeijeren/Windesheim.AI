/* eslint @typescript-eslint/no-unsafe-assignment: 0 */

import {
    OPENAI_API_KEY,
    AI_ENABLED,
    WP_USERNAME,
    WP_PASSWORD,
    // @ts-ignore
} from '@env';

export enum EnvOptions {
    OpenAIApiKey = 'OpenAIApiKey',
    AiEnabled = 'AiEnabled',
    WordPressUsername = 'WordPressUsername',
    WordPressPassword = 'WordPressPassword',
}

export type Env = Record<EnvOptions, string | undefined>;

export const mockEnvValues: Env = {
    [EnvOptions.OpenAIApiKey]: 'mockOpenAIApiKey',
    [EnvOptions.AiEnabled]: 'true',
    [EnvOptions.WordPressUsername]: 'mockUsername',
    [EnvOptions.WordPressPassword]: 'mockPassword',
};

export const EnvValues: Env = {
    [EnvOptions.OpenAIApiKey]: OPENAI_API_KEY,
    [EnvOptions.AiEnabled]: AI_ENABLED,
    [EnvOptions.WordPressUsername]: WP_USERNAME,
    [EnvOptions.WordPressPassword]: WP_PASSWORD,
};
