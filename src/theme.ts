import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const confTheme = extendTheme(
    {
        colors: {
            conf: {
                red:
                {
                    50: '#ffe2e4',
                    100: '#ffb1b5',
                    200: '#ff7f86',
                    300: '#ff4c56',
                    400: '#fe1b27',
                    500: '#e4010d',
                    600: '#b30009',
                    700: '#800005',
                    800: '#4f0001',
                    900: '#200000',
                },
            }
        },
    },

    withDefaultColorScheme({
        colorScheme: "conf.red",
    }),
);

export default confTheme;
