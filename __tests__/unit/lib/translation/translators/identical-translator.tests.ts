import IdenticalTranslator from '../../../../../src/lib/translation/translators/IdenticalTranslator';

describe('IdenticalTranslator', () => {
    it('should resolve the same value passed to it', async () => {
        const translator = new IdenticalTranslator({
            to: 'en',
            from: 'en',
            apiKey: 'fooBar123',
        });

        expect(await translator.translate('Test')).toEqual('Test');
    });
});
