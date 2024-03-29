import { Prompt } from '../../../types/Prompt';
import { useDataFetcher, fetchJsonData } from '../../fetcher/DataFetcher';
import { getEnvValue } from '../../utility/env/env';
import { EnvOptions } from '../../utility/env/env.values';

export default function usePromptLibrary() {
    return useDataFetcher<Prompt[]>(fetchJsonData, {
        url:
            getEnvValue(EnvOptions.WordPressDataURL) +
            '/wp-json/winpl/v1/prompts/',
        username: getEnvValue(EnvOptions.WordPressUsername),
        password: getEnvValue(EnvOptions.WordPressPassword),
    });
}
