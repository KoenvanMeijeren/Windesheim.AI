import { TranslationOptions, CacheProvider } from '../Types';

export default class Translator {
    options: TranslationOptions;
    to: string;
    from: string;
    apiKey: string;
    cacheProvider?: CacheProvider;

    constructor(options: TranslationOptions, cacheProvider?: CacheProvider) {
        this.options = options;
        this.from = options.from;
        this.to = options.to;
        this.apiKey = options.apiKey;
        this.cacheProvider = cacheProvider;
    }

    translate(value: string): Promise<string | undefined> {
        throw new Error(
            `You must extend the base 'translate()' method to translate '${value}'!`,
        );
    }
}