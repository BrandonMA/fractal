import { routes } from './routes';
export const screens = {
    recyclerViewFragment: {
        name: 'Recycler View Fragment',
        path: routes.component.replace(':component', 'recycler_view_fragment_screen')
    },
    chipFragment: {
        name: 'Chip Fragment',
        path: routes.component.replace(':component', 'chip_fragment_screen')
    },
    authScreen: {
        name: 'Authentication Screen Fragment',
        path: routes.component.replace(':component', 'authentication_screen_fragment_screen')
    }
};
export const screensArray = Object.values(screens);
export const lastScreenIndex = screensArray.length - 1;
//# sourceMappingURL=screens.js.map