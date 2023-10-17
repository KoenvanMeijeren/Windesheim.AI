/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { NavBar } from '../../src/components/Navbar';

const mockStore = configureStore([]);

jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

describe('NavBar Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            navigation: {
                showNavBar: true,
            },
        });
    });

    it('renders with showNavBar=true', () => {
        let component;

        act(() => {
            component = renderer.create(
                <Provider store={store}>
                    <NavBar />
                </Provider>,
            );
        });

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with showNavBar=false', () => {
        store = mockStore({
            navigation: {
                showNavBar: false,
            },
        });

        let component;

        act(() => {
            component = renderer.create(
                <Provider store={store}>
                    <NavBar />
                </Provider>,
            );
        });

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
