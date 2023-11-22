"use strict";
const gen_default_theme = require('consumer-tonic-design-system/default_gen_default_theme.json');
const default_button_gen_float = require('consumer-tonic-design-system/default_button_gen_float.json');
const default_button_gen_default_theme = require('consumer-tonic-design-system/default_button_gen_default_theme.json');
const default_gen_float = require('consumer-tonic-design-system/default_gen_float.json');
const dark_default_theme = require('consumer-tonic-design-system/dark_gen_default_theme.json');
const pwmTheme = {
    name: 'pwm',
    selectors: [`[data-theme="pwm"]`],
    extend: {
        screens: {
            sm: { max: '375px' },
            md: '880px',
            tablet: { max: '880px' }, // For password check
            lg: '1280px',
            xl: '2560px',
        },
        fontFamily: {
            roboto: ['Roboto'],
        },
        container: {
            center: true,
            screens: {
                sm: '335px',
                md: '335px',
                lg: '880px',
            },
        },
        width: {
            4: '16px',
            8: '32px',
            9: '36px',
            50: '200px',
            120: '480px',
        },
        maxHeight: {
            60: '60px',
        },
        maxWidth: {
            hug: '240px',
            fill: '336px',
            400: '400px',
        },
        padding: {
            18: '72px',
        },
        gap: {
            15: '60px',
        },
        colors: {
            blue50: '#2E96FF',
            gray30: '#C9C9C9',
            gray40: '#ADADAD',
            gray50: '#8E8E8E',
            gray60: '#555555',
            gray90: '#222222',
            toast: 'rgba(34, 34, 34, 0.9)',
            trendRed: '#D71920',
            errorRed: '#ED0008',
            warning: '#F26500',
        },
        fontSize: {
            base: '1rem',
            H1B: [
                '3rem',
                {
                    fontWeight: '700',
                    lineHeight: '56px',
                },
            ],
            H1SB: [
                '3rem', // 48px
                {
                    fontWeight: '600', // SemiBold
                    lineHeight: '3.515625rem', // 56.25px
                },
            ],
            H3B: [
                '2.25rem', // 36px
                {
                    fontWeight: '700', // Bold
                    lineHeight: '2.636875rem', // 42.19px
                },
            ],
            H4R: [
                '2rem',
                {
                    fontWeight: '400',
                    lineHeight: '37.5px',
                },
            ],
            H4B: [
                '2rem',
                {
                    fontWeight: '700',
                    lineHeight: '37.5px',
                },
            ],
            H5SB: [
                '1.75rem',
                {
                    fontWeight: '600',
                    lineHeight: '32.81px',
                },
            ],
            H5B: [
                '1.75rem',
                {
                    fontWeight: '700',
                    lineHeight: '32.81px',
                },
            ],
            H6R: [
                '1.5rem',
                {
                    fontWeight: '400',
                    lineHeight: '1.758125rem',
                },
            ],
            H6B: [
                '1.5rem',
                {
                    fontWeight: '700',
                    lineHeight: '1.758125rem',
                },
            ],
            H6SB: [
                '1.5rem', // 24px
                {
                    fontWeight: '600', // SemiBold
                    lineHeight: '1.758125rem', // 28.13px
                },
            ],
            P12R: [
                '0.75rem', // 12px
                {
                    fontWeight: '400',
                    lineHeight: '0.87875rem', // 14.06px
                },
            ],
            P14R: [
                '0.875rem', // 14px
                {
                    fontWeight: '400',
                    lineHeight: '1.025625rem', // 16.41px
                },
            ],
            P16R: [
                '1rem',
                {
                    fontWeight: '400',
                    lineHeight: '1.17875rem',
                },
            ],
            P16SB: [
                '1rem',
                {
                    fontWeight: '600',
                    lineHeight: '1.17875rem',
                },
            ],
            P16B: [
                '1rem',
                {
                    fontWeight: '700',
                    lineHeight: '1.17875rem',
                },
            ],
            P18R: [
                '1.125rem',
                {
                    fontWeight: '400',
                    lineHeight: '1.3125rem',
                },
            ],
            P18SB: [
                '1.125rem',
                {
                    fontWeight: '600',
                    lineHeight: '21px',
                },
            ],
            P20R: [
                '1.25rem',
                {
                    fontWeight: '400',
                    lineHeight: '28px',
                },
            ],
            P20SB: [
                '1.25rem',
                {
                    fontWeight: '600',
                    lineHeight: '28px',
                },
            ],
            P20BLH: [
                '1.25rem',
                {
                    fontWeight: '700',
                    lineHeight: '28px',
                },
            ],
        },
        borderRadius: {
            20: '20px',
            30: '30px',
        },
        borderWidth: {
            half: '0.5px',
        },
        boxShadow: {
            content: '0px 0px 12px rgba(0, 0, 0, 0.04)',
        },
    },
};
const idpPortalTheme = {
    name: 'idpPortal',
    selectors: [`[data-theme="idpPortal"]`],
    extend: {
        lineHeight: {
            "16p": "16px",
            "17p": "17px",
            "14p": "14px",
        },
        fontFamily: {
            body: [
                "Roboto",
                "Microsoft JhengHei UI",
                "Microsoft JhengHei",
                "Heiti TC Light",
                "Arial",
                "Helvetica",
                "sans-serif",
            ],
        },
        colors: {
            tPrimary: "#222222",
            tSecondary: "#555555",
            tLink: "#0074E8",
            tNote: "#8E8E8E",
            tSafe: "#00A91D",
            tDanger: "#ED0008",
            tWhite: "#FFF",
            bgGray: {
                light: "#F6F6F6",
                dark: "#303030",
                H0S0L96: "#F6F6F6",
                H0S0L19: "#303030",
            },
            tDisabled: "#ADADAD",
            borderRed: "#D71920",
            borderOrange: "#FF7708",
            borderPurple: "#8E78FF",
            borderPrimary: "#C9C9C9",
            borderSecondary: "#8E8E8E",
            bgPink: "#8E78FF",
            bgBlue: "#2E96FF",
            bgLightRiver: "#E5F2FF",
            bgWhite: "#FFF",
            blue50: "#2E96FF", // for PWM pages
            gray20: "#F2F2F2", // for PWM pages
            gray30: "#C9C9C9", // for PWM pages
            gray40: "#ADADAD", // for PWM pages
            gray50: "#8E8E8E", // for PWM pages
            gray60: "#555555", // for PWM pages
            gray90: "#222222", // for PWM pages
            toast: "rgba(34, 34, 34, 0.9)", // for PWM pages
            trendRed: "#D71920", // for PWM pages
            errorRed: "#ED0008", // for PWM pages
            warning: "#F26500", // for PWM pages
        },
        boxShadow: {
            "card-hover": "0px 8px 16px 4px rgba(0, 0, 0, 0.16), 0px 0px 4px rgba(0, 0, 0, 0.06)",
            content: "0px 0px 12px rgba(0, 0, 0, 0.04)", // for PWM pages
        },
        gridTemplateColumns: {
            fluid: "repeat(auto-fill, minmax(236px, 1fr))",
        },
        keyframes: {
            fadeIn: {
                "0%": { opacity: 0 },
                "100%": { opacity: 1 },
            },
            slideInRight: {
                "0%": { transform: "translateX(100%)" },
                "100%": { transform: "translateX(0)" },
            },
        },
        animation: {
            "fade-in": "fadeIn 0.5s ease-in-out",
        },
        screens: {
            phone: "640px",
            tablet: "800px",
            desktop: "960px",
            "large-desktop": "1024px",
            "larger-desktop": "1280px",
            "pwm-sm": { max: "375px" }, // for PWM pages
            "pwm-md": "880px", // for PWM pages
            "pwm-tablet": { max: "880px" }, // For PWM password check
            "pwm-lg": "1280px", // for PWM pages
            "pwm-xl": "2560px", // for PWM pages
        },
        fontSize: {
            base: "1rem", // for PWM pages
            H1B: [
                // for PWM pages
                "3rem", // 48px
                {
                    fontWeight: "700",
                    lineHeight: "56px",
                },
            ],
            H1SB: [
                // for PWM pages
                "3rem", // 48px
                {
                    fontWeight: "600", // SemiBold
                    lineHeight: "3.515625rem", // 56.25px
                },
            ],
            H3B: [
                // for PWM pages
                "2.25rem", // 36px
                {
                    fontWeight: "700", // Bold
                    lineHeight: "2.636875rem", // 42.19px
                },
            ],
            H4R: [
                // for PWM pages
                "2rem", // 32px
                {
                    fontWeight: "400",
                    lineHeight: "37.5px",
                },
            ],
            H4B: [
                // for PWM pages
                "2rem", // 32px
                {
                    fontWeight: "700",
                    lineHeight: "37.5px",
                },
            ],
            H5SB: [
                // for PWM pages
                "1.75rem", // 28px
                {
                    fontWeight: "600",
                    lineHeight: "32.81px",
                },
            ],
            H5B: [
                // for PWM pages
                "1.75rem", // 28px
                {
                    fontWeight: "700",
                    lineHeight: "32.81px",
                },
            ],
            H6R: [
                // for PWM pages
                "1.5rem", // 24px
                {
                    fontWeight: "400",
                    lineHeight: "1.758125rem",
                },
            ],
            H6B: [
                // for PWM pages
                "1.5rem", // 24px
                {
                    fontWeight: "700",
                    lineHeight: "1.758125rem",
                },
            ],
            H6SB: [
                // for PWM pages
                "1.5rem", // 24px
                {
                    fontWeight: "600", // SemiBold
                    lineHeight: "1.758125rem", // 28.13px
                },
            ],
            P12R: [
                // for PWM pages
                "0.75rem", // 12px
                {
                    fontWeight: "400",
                    lineHeight: "0.87875rem", // 14.06px
                },
            ],
            P12SB: [
                // for PWM pages
                "0.75rem", // 12px
                {
                    fontWeight: "600",
                    lineHeight: "0.87875rem", // 14.06px
                },
            ],
            P12B: [
                // for PWM pages
                "0.75rem", // 12px
                {
                    fontWeight: "700",
                    lineHeight: "0.87875rem", // 14.06px
                },
            ],
            P14R: [
                // for PWM pages
                "0.875rem", // 14px
                {
                    fontWeight: "400",
                    lineHeight: "1.025625rem", // 16.41px
                },
            ],
            P14B: [
                // for PWM pages
                "0.875rem", // 14px
                {
                    fontWeight: "700",
                    lineHeight: "1.025625rem", // 16.41px
                },
            ],
            P16R: [
                // for PWM pages
                "1rem", // 16px
                {
                    fontWeight: "400",
                    lineHeight: "1.17875rem",
                },
            ],
            P16SB: [
                // for PWM pages
                "1rem", // 16px
                {
                    fontWeight: "600",
                    lineHeight: "1.17875rem",
                },
            ],
            P16B: [
                // for PWM pages
                "1rem", // 16px
                {
                    fontWeight: "700",
                    lineHeight: "1.17875rem",
                },
            ],
            P18R: [
                // for PWM pages
                "1.125rem", // 18px
                {
                    fontWeight: "400",
                    lineHeight: "1.3125rem",
                },
            ],
            P18SB: [
                // for PWM pages
                "1.125rem", // 18px
                {
                    fontWeight: "600",
                    lineHeight: "21px",
                },
            ],
            P18B: [
                // for PWM pages
                "1.125rem", // 18px
                {
                    fontWeight: "700",
                    lineHeight: "21px",
                },
            ],
            P20R: [
                // for PWM pages
                "1.25rem", // 20px
                {
                    fontWeight: "400",
                    lineHeight: "28px",
                },
            ],
            P20SB: [
                // for PWM pages
                "1.25rem", // 20px
                {
                    fontWeight: "600",
                    lineHeight: "28px",
                },
            ],
            P20B: [
                // for PWM pages
                "1.25rem", // 20px
                {
                    fontWeight: "700",
                    lineHeight: "28px",
                },
            ],
            P20BLH: [
                // for PWM pages
                "1.25rem", // 20px
                {
                    fontWeight: "700",
                    lineHeight: "28px",
                },
            ],
        },
    },
};
const idpExtensionDarkTheme = {
    name: 'idpExtensionDark',
    selectors: [`[data-theme="idpExtensionDark"]`],
    mediaQuery: '@media (prefers-color-scheme: dark)',
    extend: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '24px'],
            lg: ['18px', '28px'],
            xl: ['20px', '28px'],
            '2xl': ['24px', '32px'],
            '2.5xl': ['28px', 'normal'],
            '3xl': ['30px', '36px'],
            '4xl': ['36px', '40px'],
            '5xl': ['48px', 1],
            '6xl': ['60px', 1],
            '7xl': ['72px', 1],
            '8xl': ['96px', 1],
            '9xl': ['128px', 1],
        },
        spacing: {
            0.5: '2px',
            1: '4px',
            1.5: '6px',
            2: '8px',
            2.5: '10px',
            3: '12px',
            3.5: '14px',
            4: '16px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px',
            10: '40px',
            11: '44px',
            12: '48px',
            14: '56px',
            16: '64px',
            20: '80px',
            24: '96px',
            28: '112px',
            32: '128px',
            36: '144px',
            40: '160px',
            44: '176px',
            48: '192px',
            50: '200px',
            52: '208px',
            56: '224px',
            60: '240px',
            64: '256px',
            72: '288px',
            80: '320px',
            96: '384px',
        },
        lineHeight: {
            normal: '16px',
            3: '12px',
            4: '16px',
            4.5: '18px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px',
            10: '40px',
        },
        borderRadius: {
            none: '0px',
            sm: '2px',
            DEFAULT: '4px',
            md: '6px',
            lg: '8px',
            xl: '12px',
            '2xl': '16px',
            '3xl': '24px',
            full: '9999px',
        },
        colors: {
            primary: '#222',
            secondary: '#555',
            tertiary: '#8E8E8E',
            'gray-80': '#303030',
            'trend-red': '#D71920',
        },
        keyframes: {
            completeIconAnimation: {
                '50%': { transform: 'scale(1.2)' },
                '100%': { transform: 'scale(1)' },
            },
            completeFadeInAnimation: {
                from: {
                    height: '0px',
                    opacity: 0,
                    visibility: 'hidden',
                },
                to: {
                    height: 'auto',
                    opacity: 1,
                    visibility: 'visible',
                },
            },
            popupFadeInAnimation: {
                from: {
                    transform: 'translateX(10px)',
                    opacity: 0,
                },
                to: {
                    transform: 'translateX(0px)',
                    opacity: 1,
                },
            },
        },
        animation: {
            'complete-icon': 'completeIconAnimation 0.3s linear 0.6s',
            'complete-my-browser': 'completeFadeInAnimation 1s ease-in-out 1s',
            'popup-fade-in': 'popupFadeInAnimation 0.5s ease',
        },
    },
};
const idpExtensionJaTheme = {
    name: 'idpExtensionJa',
    selectors: [`[data-theme="idpExtensionJa"]`, '.idpExtensionJa'],
    extend: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
        fontSize: {
            xs: ['10px', '16px'],
            sm: ['12px', '20px'],
            base: ['14px', '24px'],
            lg: ['16px', '28px'],
            xl: ['18px', '28px'],
            '2xl': ['22px', '32px'],
            '2.5xl': ['26px', 'normal'],
            '3xl': ['28px', '36px'],
            '4xl': ['34px', '40px'],
            '5xl': ['46px', 1],
            '6xl': ['58px', 1],
            '7xl': ['70px', 1],
            '8xl': ['94px', 1],
            '9xl': ['126px', 1],
        },
        spacing: {
            0.5: '2px',
            1: '4px',
            1.5: '6px',
            2: '8px',
            2.5: '10px',
            3: '12px',
            3.5: '14px',
            4: '16px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px',
            10: '40px',
            11: '44px',
            12: '48px',
            14: '56px',
            16: '64px',
            20: '80px',
            24: '96px',
            28: '112px',
            32: '128px',
            36: '144px',
            40: '160px',
            44: '176px',
            48: '192px',
            50: '200px',
            52: '208px',
            56: '224px',
            60: '240px',
            64: '256px',
            72: '288px',
            80: '320px',
            96: '384px',
        },
        lineHeight: {
            normal: '16px',
            3: '12px',
            4: '16px',
            4.5: '18px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px',
            10: '40px',
        },
        borderRadius: {
            none: '0px',
            sm: '2px',
            DEFAULT: '4px',
            md: '6px',
            lg: '8px',
            xl: '12px',
            '2xl': '16px',
            '3xl': '24px',
            full: '9999px',
        },
        colors: {
            primary: '#222',
            secondary: '#555',
            tertiary: '#8E8E8E',
            'gray-80': '#303030',
            'trend-red': '#D71920',
        },
        keyframes: {
            completeIconAnimation: {
                '50%': { transform: 'scale(1.2)' },
                '100%': { transform: 'scale(1)' },
            },
            completeFadeInAnimation: {
                from: {
                    height: '0px',
                    opacity: 0,
                    visibility: 'hidden',
                },
                to: {
                    height: 'auto',
                    opacity: 1,
                    visibility: 'visible',
                },
            },
            popupFadeInAnimation: {
                from: {
                    transform: 'translateX(10px)',
                    opacity: 0,
                },
                to: {
                    transform: 'translateX(0px)',
                    opacity: 1,
                },
            },
        },
        animation: {
            'complete-icon': 'completeIconAnimation 0.3s linear 0.6s',
            'complete-my-browser': 'completeFadeInAnimation 1s ease-in-out 1s',
            'popup-fade-in': 'popupFadeInAnimation 0.5s ease',
        },
    },
};
const newsTheme = {
    name: 'news',
    selectors: [`[data-theme="news"]`],
    extend: {
        gradientColorStops: {
            categoryPageFrom: '#E1005F',
            categoryPageTo: '#ED3742',
        },
        fontFamily: {
            'IBM-plex-sans': 'IBM Plex Sans',
        },
        colors: {
            linkedin: '#007bb5',
            twitter: '#55acee',
            facebook: '#3b5998',
            whatsapp: '#42d366',
            like: '#3acd20',
            dislike: '#f66058',
            222222: '#222222',
            333333: '#333333',
            555555: '#555555',
            777777: '#777777',
            959595: '#959595',
            bebebe: '#bebebe',
            f2f2f2: '#f2f2f2',
            bgGray: '#F0F0F0',
            textGray: '#8E8E8E',
        },
        spacing: {
            28: '7rem',
            19: '4.875rem',
        },
        letterSpacing: {
            tighter: '-.04em',
        },
        lineHeight: {
            1.2: 1.2,
            1.3: 1.3,
        },
        fontSize: {
            '2base': '2rem',
            '5xl': '2.5rem',
            '6xl': '2.75rem',
            '3base': '3rem',
            '7xl': '4.5rem',
            '8xl': '6.25rem',
            // Visual Designer defined FontSize with LightHeight
            // ref: https://www.figma.com/file/OAP5nxLps0vMSCtLgugNZ9/TM.com-Templates?node-id=2310%3A17828
            48: [
                '3rem',
                {
                    lineHeight: '1.1',
                },
            ],
            32: [
                '2rem',
                {
                    lineHeight: '1.1',
                },
            ],
            24: [
                '1.5rem',
                {
                    lineHeight: '1.1',
                },
            ],
            18: [
                '1.125rem',
                {
                    lineHeight: '1.5',
                },
            ],
            16: [
                '1rem',
                {
                    lineHeight: '1.5',
                },
            ],
            14: [
                '14px',
                {
                    lineHeight: '16px',
                },
            ],
            12.5: [
                '12.5px',
                {
                    lineHeight: '17.02px',
                },
            ],
        },
        boxShadow: {
            small: '0 5px 10px rgba(0, 0, 0, 0.12)',
            medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
        textColor: {
            topicHover: '#9A0106',
            titleHover: '#9A0106',
            link: '#D71920',
        },
        borderColor: {
            topicHover: '#9A0106',
            link: '#D71920',
            textGray: '#8E8E8E',
        },
        borderRadius: {
            '4xl': '2rem',
        },
        borderWidth: {
            half: '0.5px',
        },
        maxWidth: {
            infinityContent: '1360px',
            largeContent: '1040px',
            smallContent: '560px',
        },
        minWidth: {
            300: '300px',
        },
        screens: {
            'sm-mobile': { max: '340px' },
            'mobile-f': { max: '720px' },
            mobile: { max: '640px' },
            tablet: { max: '1150px' },
            sm: { max: '1280px', min: '641px' },
            xl: { min: '1281px' },
        },
        ringColor: {
            gray: '#C9C9C9',
        },
        aspectRatio: {
            21: '21',
        },
    },
};
const consumerDefaultTheme = {
    name: 'consumerDefault',
    selectors: [':root', ':host'],
    extend: {
        height: {
            'btn-xs': default_button_gen_float["tcsmd-comp-button-size-xs"],
            'btn-sm': default_button_gen_float["tcsmd-comp-button-size-sm"],
            'btn-md': default_button_gen_float["tcsmd-comp-button-size-md"],
            'btn-lg': default_button_gen_float["tcsmd-comp-button-size-lg"],
        },
        minHeight: {
            'btn-xs': default_button_gen_float["tcsmd-comp-button-size-xs"],
            'btn-sm': default_button_gen_float["tcsmd-comp-button-size-sm"],
            'btn-md': default_button_gen_float["tcsmd-comp-button-size-md"],
            'btn-lg': default_button_gen_float["tcsmd-comp-button-size-lg"],
        },
        borderRadius: {
            none: '0px',
            xs: default_gen_float["tcsmd-ref-radius-xs"],
            DEFAULT: default_gen_float["tcsmd-ref-radius-sm"],
            sm: default_gen_float["tcsmd-ref-radius-sm"],
            md: default_gen_float["tcsmd-ref-radius-md"],
            lg: default_gen_float["tcsmd-ref-radius-lg"],
            full: default_gen_float["tcsmd-ref-radius-circle"],
        },
        borderWidth: {
            'extra-thin': default_gen_float["tcsmd-ref-border-extra-thin"],
            'thin': default_gen_float["tcsmd-ref-border-thin"],
            'thick': default_gen_float["tcsmd-ref-border-thick"],
        },
        colors: {
            'transparent': 'transparent',
            'current': 'currentColor',
            'primary': '#343232',
            'loading': 'var(--colors--tcsmd-ref-palette-gray-28)',
            'enabled-primary-start': 'var(--colors--tcsmd-ref-palette-red-60)',
            'enabled-primary-end': 'var(--colors--tcsmd-ref-palette-red-70)',
            'hover-primary-start': 'var(--colors--tcsmd-ref-palette-red-70)',
            'hover-primary-end': 'var(--colors--tcsmd-ref-palette-red-80)',
            'active-primary-start': 'var(--colors--tcsmd-ref-palette-red-80)',
            'active-primary-end': 'var(--colors--tcsmd-ref-palette-red-90)',
            'enabled-default-start': 'var(--colors--tcsmd-ref-palette-gray-10)',
            'enabled-default-end': 'var(--colors--tcsmd-ref-palette-gray-20)',
            'hover-default-start': 'var(--colors--tcsmd-ref-palette-gray-22)',
            'hover-default-end': 'var(--colors--tcsmd-ref-palette-gray-24)',
            'active-default-start': 'var(--colors--tcsmd-ref-palette-gray-26)',
            'active-default-end': 'var(--colors--tcsmd-ref-palette-gray-28)',
            'enabled-emphasis-start': 'var(--colors--tcsmd-ref-palette-blue-60)',
            'enabled-emphasis-end': 'var(--colors--tcsmd-ref-palette-blue-70)',
            'hover-emphasis-start': 'var(--colors--tcsmd-ref-palette-blue-70)',
            'hover-emphasis-end': 'var(--colors--tcsmd-ref-palette-blue-80)',
            'active-emphasis-start': 'var(--colors--tcsmd-ref-palette-blue-80)',
            'active-emphasis-end': 'var(--colors--tcsmd-ref-palette-blue-90)',
            'hover-ghost-start': '#ececec',
            'hover-ghost-end': '#e7e7e7',
            'active-ghost-start': '#DBDBDB',
            'active-ghost-end': '#D6D6D6',
            // generated
            ...gen_default_theme,
            ...default_button_gen_default_theme
        },
    },
};
const consumerDarkTheme = {
    name: 'consumerDark',
    selectors: [':root', ':host', `[data-theme="consumerDark"]`],
    // mediaQuery: '@media (prefers-color-scheme: dark)',
    extend: {
        colors: {
            ...dark_default_theme
        }
    },
};
module.exports = {
    pwmTheme,
    idpPortalTheme,
    idpExtensionDarkTheme,
    idpExtensionJaTheme,
    newsTheme,
    consumerDefaultTheme,
    consumerDarkTheme
};
