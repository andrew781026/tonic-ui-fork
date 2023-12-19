"use strict";
const gen_default_theme = {
    "tcsmd-ref-palette-black": "rgba(0,0,0,1)",
    "tcsmd-ref-palette-white": "rgba(255,255,255,1)",
    "tcsmd-ref-palette-orange-100": "rgba(97,34,0,1)",
    "tcsmd-ref-palette-orange-90": "rgba(125,46,0,1)",
    "tcsmd-ref-palette-orange-80": "rgba(161,55,0,1)",
    "tcsmd-ref-palette-orange-70": "rgba(183,67,0,1)",
    "tcsmd-ref-palette-orange-60": "rgba(204,78,0,1)",
    "tcsmd-ref-palette-orange-50": "rgba(242,101,0,1)",
    "tcsmd-ref-palette-orange-40": "rgba(255,119,8,1)",
    "tcsmd-ref-palette-orange-30": "rgba(255,150,51,1)",
    "tcsmd-ref-palette-orange-20": "rgba(255,181,102,1)",
    "tcsmd-ref-palette-orange-10": "rgba(255,232,204,1)",
    "tcsmd-sys-color-brand-trend-red": "rgba(215,25,32,1)",
    "tcsmd-ref-palette-gray-100": "rgba(21,21,21,1)",
    "tcsmd-ref-palette-gray-90": "rgba(34,34,34,1)",
    "tcsmd-ref-palette-gray-80": "rgba(48,48,48,1)",
    "tcsmd-ref-palette-gray-70": "rgba(66,66,66,1)",
    "tcsmd-ref-palette-gray-60": "rgba(85,85,85,1)",
    "tcsmd-ref-palette-gray-50": "rgba(142,142,142,1)",
    "tcsmd-ref-palette-gray-40": "rgba(173,173,173,1)",
    "tcsmd-ref-palette-gray-30": "rgba(201,201,201,1)",
    "tcsmd-ref-palette-gray-20": "rgba(242,242,242,1)",
    "tcsmd-ref-palette-gray-10": "rgba(251,251,251,1)",
    "tcsmd-sys-color-text-primary": "var(--colors--tcsmd-ref-palette-gray-90)",
    "tcsmd-sys-color-text-secondary": "var(--colors--tcsmd-ref-palette-gray-60)",
    "tcsmd-sys-color-text-tertiary": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-sys-color-text-disabled": "var(--colors--tcsmd-ref-palette-gray-40)",
    "tcsmd-ref-palette-red-100": "rgba(122,5,9,1)",
    "tcsmd-ref-palette-red-90": "rgba(154,1,6,1)",
    "tcsmd-ref-palette-red-80": "rgba(184,0,6,1)",
    "tcsmd-ref-palette-red-70": "rgba(211,0,7,1)",
    "tcsmd-ref-palette-red-60": "rgba(237,0,8,1)",
    "tcsmd-ref-palette-red-50": "rgba(255,63,69,1)",
    "tcsmd-ref-palette-red-40": "rgba(255,100,105,1)",
    "tcsmd-ref-palette-red-30": "rgba(254,150,154,1)",
    "tcsmd-ref-palette-red-20": "rgba(255,194,196,1)",
    "tcsmd-ref-palette-red-10": "rgba(255,229,230,1)",
    "tcsmd-sys-color-text-emphasis": "var(--colors--tcsmd-ref-palette-black)",
    "tcsmd-ref-palette-magenta-100": "rgba(103,1,69,1)",
    "tcsmd-ref-palette-magenta-90": "rgba(124,0,82,1)",
    "tcsmd-ref-palette-magenta-80": "rgba(152,0,100,1)",
    "tcsmd-ref-palette-magenta-70": "rgba(184,1,122,1)",
    "tcsmd-ref-palette-magenta-60": "rgba(210,7,143,1)",
    "tcsmd-ref-palette-magenta-50": "rgba(237,66,180,1)",
    "tcsmd-ref-palette-magenta-40": "rgba(247,119,204,1)",
    "tcsmd-ref-palette-magenta-30": "rgba(252,169,225,1)",
    "tcsmd-ref-palette-magenta-20": "rgba(255,211,246,1)",
    "tcsmd-ref-palette-magenta-10": "rgba(255,237,251,1)",
    "tcsmd-ref-palette-purple-100": "rgba(74,0,137,1)",
    "tcsmd-ref-palette-purple-90": "rgba(90,0,167,1)",
    "tcsmd-ref-palette-purple-80": "rgba(104,1,192,1)",
    "tcsmd-ref-palette-purple-70": "rgba(123,5,216,1)",
    "tcsmd-ref-palette-purple-60": "rgba(154,34,248,1)",
    "tcsmd-ref-palette-purple-50": "rgba(180,82,255,1)",
    "tcsmd-ref-palette-purple-40": "rgba(200,149,255,1)",
    "tcsmd-ref-palette-purple-30": "rgba(200,149,255,1)",
    "tcsmd-ref-palette-purple-20": "rgba(236,222,255,1)",
    "tcsmd-ref-palette-purple-10": "rgba(245,238,255,1)",
    "tcsmd-ref-palette-green-100": "rgba(0,66,11,1)",
    "tcsmd-ref-palette-green-90": "rgba(0,86,15,1)",
    "tcsmd-ref-palette-green-80": "rgba(0,107,18,1)",
    "tcsmd-ref-palette-green-70": "rgba(0,120,20,1)",
    "tcsmd-ref-palette-green-60": "rgba(0,138,23,1)",
    "tcsmd-ref-palette-green-50": "rgba(0,169,29,1)",
    "tcsmd-ref-palette-green-40": "rgba(34,201,62,1)",
    "tcsmd-ref-palette-green-30": "rgba(110,240,132,1)",
    "tcsmd-ref-palette-green-20": "rgba(153,255,170,1)",
    "tcsmd-ref-palette-green-10": "rgba(217,255,223,1)",
    "tcsmd-ref-palette-teal-100": "rgba(2,61,66,1)",
    "tcsmd-ref-palette-teal-90": "rgba(0,76,82,1)",
    "tcsmd-ref-palette-teal-80": "rgba(0,90,94,1)",
    "tcsmd-ref-palette-teal-70": "rgba(1,110,112,1)",
    "tcsmd-ref-palette-teal-60": "rgba(0,132,132,1)",
    "tcsmd-ref-palette-teal-50": "rgba(23,164,165,1)",
    "tcsmd-ref-palette-teal-40": "rgba(45,207,206,1)",
    "tcsmd-ref-palette-teal-30": "rgba(117,230,228,1)",
    "tcsmd-ref-palette-teal-20": "rgba(180,240,240,1)",
    "tcsmd-ref-palette-teal-10": "rgba(215,247,247,1)",
    "tcsmd-ref-palette-blue-100": "rgba(1,49,99,1)",
    "tcsmd-ref-palette-blue-90": "rgba(0,67,134,1)",
    "tcsmd-ref-palette-blue-80": "rgba(1,85,169,1)",
    "tcsmd-ref-palette-blue-70": "rgba(0,107,214,1)",
    "tcsmd-ref-palette-blue-60": "rgba(0,116,232,1)",
    "tcsmd-ref-palette-blue-50": "rgba(46,150,255,1)",
    "tcsmd-ref-palette-blue-40": "rgba(107,181,255,1)",
    "tcsmd-ref-palette-blue-30": "rgba(166,211,255,1)",
    "tcsmd-ref-palette-blue-20": "rgba(204,230,255,1)",
    "tcsmd-ref-palette-blue-10": "rgba(229,242,255,1)",
    "tcsmd-ref-palette-indigo-100": "rgba(48,27,151,1)",
    "tcsmd-ref-palette-indigo-90": "rgba(55,34,184,1)",
    "tcsmd-ref-palette-indigo-80": "rgba(67,42,211,1)",
    "tcsmd-ref-palette-indigo-70": "rgba(81,56,238,1)",
    "tcsmd-ref-palette-indigo-60": "rgba(106,76,255,1)",
    "tcsmd-ref-palette-indigo-50": "rgba(142,120,255,1)",
    "tcsmd-ref-palette-indigo-40": "rgba(171,155,255,1)",
    "tcsmd-ref-palette-indigo-30": "rgba(202,192,255,1)",
    "tcsmd-ref-palette-indigo-20": "rgba(225,219,255,1)",
    "tcsmd-ref-palette-indigo-10": "rgba(240,238,255,1)",
    "tcsmd-sys-color-text-link": "var(--colors--tcsmd-ref-palette-blue-60)",
    "tcsmd-sys-color-text-error": "var(--colors--tcsmd-ref-palette-red-60)",
    "tcsmd-sys-color-text-warning": "var(--colors--tcsmd-ref-palette-orange-50)",
    "tcsmd-sys-color-text-safe": "var(--colors--tcsmd-ref-palette-green-50)",
    "tcsmd-sys-color-text-white": "var(--colors--tcsmd-ref-palette-white)",
    "tcsmd-sys-color-severity-error": "var(--colors--tcsmd-ref-palette-red-50)",
    "tcsmd-sys-color-severity-info": "var(--colors--tcsmd-ref-palette-blue-50)",
    "tcsmd-sys-color-severity-unknown": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-ref-palette-gray-22": "rgba(237,237,237,1)",
    "tcsmd-ref-palette-gray-24": "rgba(229,229,229,1)",
    "tcsmd-ref-palette-gray-26": "rgba(220,220,220,1)",
    "tcsmd-ref-palette-gray-28": "rgba(213,213,213,1)",
    "tcsmd-sys-color-severity-success": "var(--colors--tcsmd-ref-palette-green-50)",
    "tcsmd-sys-color-severity-warning": "var(--colors--tcsmd-ref-palette-orange-50)"
};
const default_button_gen_float = {
    "tcsmd-comp-button-size-lg": "60px",
    "tcsmd-comp-button-size-md": "40px",
    "tcsmd-comp-button-size-sm": "32px",
    "tcsmd-comp-button-size-xs": "24px",
    "tcsmd-comp-button-primary-enabled-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-radius-circle": "var(--tcsmd-ref-radius-circle)",
    "tcsmd-comp-button-radius-square": "var(--tcsmd-ref-radius-sm)",
    "tcsmd-comp-button-default-enabled-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-emphasis-enabled-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-ghost-enabled-border-width": "var(--tcsmd-ref-border-thin)",
    "tcsmd-comp-button-ghost-hover-border-width": "var(--tcsmd-ref-border-thin)",
    "tcsmd-comp-button-ghost-active-border-width": "var(--tcsmd-ref-border-thin)",
    "tcsmd-comp-button-ghost-disabled-border-width": "var(--tcsmd-ref-border-thin)",
    "tcsmd-comp-button-ghost-loading-border-width": "var(--tcsmd-ref-border-thin)",
    "tcsmd-comp-button-ghost-focus-border-width": "var(--tcsmd-ref-border-thick)",
    "tcsmd-comp-button-emphasis-hover-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-emphasis-active-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-emphasis-disabled-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-emphasis-loading-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-default-hover-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-default-active-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-default-disabled-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-default-loading-border-width": "var(--tcsmd-ref-border-thin)",
    "tcsmd-comp-button-default-focus-border-width": "var(--tcsmd-ref-border-thick)",
    "tcsmd-comp-button-primary-hover-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-primary-active-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-primary-disabled-border-width": "var(--tcsmd-ref-border-extra-thin)",
    "tcsmd-comp-button-primary-focus-border-width": "var(--tcsmd-ref-border-thick)",
    "tcsmd-comp-text-button-default-focus-border-width": "var(--tcsmd-ref-border-thick)",
    "tcsmd-comp-text-button-primary-focus-border-width": "var(--tcsmd-ref-border-thick)",
    "tcsmd-comp-text-button-emphasis-focus-border-width": "var(--tcsmd-ref-border-thick)"
};
const default_button_gen_default_theme = {
    "tcsmd-comp-button-primary-enabled-border-color": "var(--colors--tcsmd-ref-palette-red-60)",
    "tcsmd-comp-button-default-enabled-border-color": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-comp-button-emphasis-enabled-border-color": "var(--colors--tcsmd-ref-palette-blue-50)",
    "tcsmd-comp-button-ghost-enabled-border-color": "var(--colors--tcsmd-ref-palette-gray-26)",
    "tcsmd-comp-button-ghost-hover-border-color": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-comp-button-ghost-active-border-color": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-comp-button-ghost-disabled-border-color": "var(--colors--tcsmd-ref-palette-gray-30)",
    "tcsmd-comp-button-ghost-loading-border-color": "var(--colors--tcsmd-ref-palette-gray-30)",
    "tcsmd-comp-button-ghost-focus-border-color": "var(--colors--tcsmd-ref-palette-blue-60)",
    "tcsmd-comp-button-ghost-enabled-color": "var(--colors--tcsmd-ref-palette-white)",
    "tcsmd-comp-button-ghost-hover-color": "var(--colors--tcsmd-ref-palette-gray-22)",
    "tcsmd-comp-button-ghost-active-color": "var(--colors--tcsmd-ref-palette-gray-26)",
    "tcsmd-comp-button-ghost-disabled-color": "var(--colors--tcsmd-ref-palette-white)",
    "tcsmd-comp-button-ghost-loading-color": "var(--colors--tcsmd-ref-palette-white)",
    "tcsmd-comp-button-ghost-focus-color": "var(--colors--tcsmd-ref-palette-white)",
    "tcsmd-comp-button-emphasis-hover-border-color": "var(--colors--tcsmd-ref-palette-blue-50)",
    "tcsmd-comp-button-emphasis-active-border-color": "var(--colors--tcsmd-ref-palette-blue-50)",
    "tcsmd-comp-button-emphasis-disabled-border-color": "var(--colors--tcsmd-ref-palette-blue-50)",
    "tcsmd-comp-button-emphasis-loading-border-color": "var(--colors--tcsmd-ref-palette-blue-50)",
    "tcsmd-comp-button-emphasis-loading-color": "var(--colors--tcsmd-ref-palette-gray-28)",
    "tcsmd-comp-button-default-hover-border-color": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-comp-button-default-active-border-color": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-comp-button-default-disabled-border-color": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-comp-button-default-loading-border-color": "var(--colors--tcsmd-ref-palette-gray-50)",
    "tcsmd-comp-button-default-loading-color": "var(--colors--tcsmd-ref-palette-gray-28)",
    "tcsmd-comp-button-default-focus-color": "var(--colors--tcsmd-ref-palette-gray-28)",
    "tcsmd-comp-button-default-focus-border-color": "var(--colors--tcsmd-ref-palette-blue-60)",
    "tcsmd-comp-button-primary-hover-border-color": "var(--colors--tcsmd-ref-palette-red-60)",
    "tcsmd-comp-button-primary-active-border-color": "var(--colors--tcsmd-ref-palette-red-60)",
    "tcsmd-comp-button-primary-disabled-border-color": "var(--colors--tcsmd-ref-palette-red-60)",
    "tcsmd-comp-button-primary-loading-color": "var(--colors--tcsmd-ref-palette-gray-28)",
    "tcsmd-comp-button-primary-focus-border-color": "var(--colors--tcsmd-ref-palette-blue-60)",
    "tcsmd-comp-text-button-default-hover-color": "var(--colors--tcsmd-ref-palette-gray-22)",
    "tcsmd-comp-text-button-default-active-color": "var(--colors--tcsmd-ref-palette-gray-26)",
    "tcsmd-comp-text-button-default-focus-border-color": "var(--colors--tcsmd-ref-palette-blue-60)",
    "tcsmd-comp-text-button-primary-hover-color": "var(--colors--tcsmd-ref-palette-gray-22)",
    "tcsmd-comp-text-button-primary-active-color": "var(--colors--tcsmd-ref-palette-gray-26)",
    "tcsmd-comp-text-button-primary-focus-border-color": "var(--colors--tcsmd-ref-palette-blue-60)",
    "tcsmd-comp-text-button-emphasis-hover-color": "var(--colors--tcsmd-ref-palette-gray-22)",
    "tcsmd-comp-text-button-emphasis-active-color": "var(--colors--tcsmd-ref-palette-gray-26)",
    "tcsmd-comp-text-button-emphasis-focus-border-color": "var(--colors--tcsmd-ref-palette-blue-60)"
};
const default_gen_float = {
    "tcsmd-ref-radius-circle": "999px",
    "tcsmd-ref-radius-lg": "12px",
    "tcsmd-ref-radius-md": "8px",
    "tcsmd-ref-radius-sm": "4px",
    "tcsmd-ref-radius-xs": "2px",
    "tcsmd-ref-border-thick": "2px",
    "tcsmd-ref-border-thin": "1px",
    "tcsmd-ref-border-extra-thin": "0.5px"
};
const dark_default_theme = {
    "sys-color-text-title": "var(--colors--tcsmd-ref-palette-white)",
    "sys-color-text-subtitle": "var(--colors--tcsmd-ref-palette-gray-40)",
    "sys-color-text-body": "var(--colors--tcsmd-ref-palette-gray-30)",
    "sys-color-surface-header": "var(--colors--tcsmd-ref-palette-gray-90)",
    "sys-color-surface-footer": "var(--colors--tcsmd-ref-palette-gray-90)",
    "sys-color-surface-card": "var(--colors--tcsmd-ref-palette-gray-80)",
    "sys-color-text-hyperlink": "var(--colors--tcsmd-ref-palette-blue-50)",
    "sys-color-text-emphasis": "var(--colors--tcsmd-ref-palette-red-50)",
    "sys-color-surface-bkg": "var(--colors--tcsmd-ref-palette-gray-100)",
    "sys-color-surface-list": "var(--colors--tcsmd-ref-palette-gray-80)",
    "sys-color-surface-input": "var(--colors--tcsmd-ref-palette-gray-70)",
    "sys-color-stroke-divider": "var(--colors--tcsmd-ref-palette-gray-60)",
    "sys-color-stroke-outline": "var(--colors--tcsmd-ref-palette-gray-60)"
};
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
const idpExtraTheme = {
    name: 'idpExtra',
    selectors: [`[data-theme="idpExtra"]`],
    extend: {
        colors: {
            'enabled-primary-start': 'var(--colors--tcsmd-ref-palette-blue-60)',
            'enabled-primary-end': 'var(--colors--tcsmd-ref-palette-blue-70)',
            'hover-primary-start': 'var(--colors--tcsmd-ref-palette-blue-70)',
            'hover-primary-end': 'var(--colors--tcsmd-ref-palette-blue-80)',
            'active-primary-start': 'var(--colors--tcsmd-ref-palette-blue-80)',
            'active-primary-end': 'var(--colors--tcsmd-ref-palette-blue-90)',
            'enabled-default-start': 'var(--colors--tcsmd-ref-palette-white)',
            'enabled-default-end': 'var(--colors--tcsmd-ref-palette-white)',
            'hover-default-start': 'var(--colors--tcsmd-ref-palette-gray-22)',
            'hover-default-end': 'var(--colors--tcsmd-ref-palette-gray-22)',
            'active-default-start': 'var(--colors--tcsmd-ref-palette-gray-26)',
            'active-default-end': 'var(--colors--tcsmd-ref-palette-gray-26)',
            'enabled-emphasis-start': 'var(--colors--tcsmd-ref-palette-red-60)',
            'enabled-emphasis-end': 'var(--colors--tcsmd-ref-palette-red-70)',
            'hover-emphasis-start': 'var(--colors--tcsmd-ref-palette-red-70)',
            'hover-emphasis-end': 'var(--colors--tcsmd-ref-palette-red-80)',
            'active-emphasis-start': 'var(--colors--tcsmd-ref-palette-red-80)',
            'active-emphasis-end': 'var(--colors--tcsmd-ref-palette-red-90)',
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
        animation: {
            loader: 'progress-circular-dash 1.4s ease-in-out infinite, progress-circular-rotate 1.4s linear infinite',
        },
        keyframes: {
            'progress-circular-dash': {
                '0%': { strokeDashoffset: 10 },
                '30%': { strokeDashoffset: 55 },
                '31%': { strokeDashoffset: 55 },
                '100%': { strokeDashoffset: 10 },
            },
            'progress-circular-rotate': {
                '0%': { transform: 'rotate(0deg)' },
                '30%': { transform: 'rotate(720deg)' },
                '31%': { transform: 'rotate(720deg)' },
                '100%': { transform: 'rotate(1440deg)' },
            },
        },
        boxShadow: {
            'btn-default': 'inset 0 0 0 1.5px var(--tw-shadow-color)',
            'btn-ghost': 'inset 0 0 0 1.5px var(--tw-shadow-color)',
        },
        minHeight: {
            'btn-xs': default_button_gen_float["tcsmd-comp-button-size-xs"],
            'btn-sm': default_button_gen_float["tcsmd-comp-button-size-sm"],
            'btn-md': default_button_gen_float["tcsmd-comp-button-size-md"],
            'btn-lg': default_button_gen_float["tcsmd-comp-button-size-lg"],
        },
        minWidth: {
            'btn-xs': '60px',
            'btn-sm': '80px',
            'btn-md': '100px',
            'btn-lg': '100px',
        },
        fontSize: {
            xs: ['14px', '16px'],
            sm: ['16px', '18px'],
            base: ['16px', '18px'],
            md: ['18px', '20px'],
            lg: ['18px', '20px'],
            'tcsmd-ref-typesetting-font-size-7xl': '48px',
            'tcsmd-ref-typesetting-font-size-6xl': '40px',
            'tcsmd-ref-typesetting-font-size-5xl': '36px',
            'tcsmd-ref-typesetting-font-size-4xl': '32px',
            'tcsmd-ref-typesetting-font-size-3xl': '28px',
            'tcsmd-ref-typesetting-font-size-2xl': '24px',
            'tcsmd-ref-typesetting-font-size-xl': '20px',
            'tcsmd-ref-typesetting-font-size-lg': '18px',
            'tcsmd-ref-typesetting-font-size-md': '16px',
            'tcsmd-ref-typesetting-font-size-sm': '14px',
            'tcsmd-ref-typesetting-font-size-xs': '12px',
        },
        borderRadius: {
            none: '0px',
            // xs: default_gen_float["tcsmd-ref-radius-xs"],
            DEFAULT: default_gen_float["tcsmd-ref-radius-sm"],
            // sm: default_gen_float["tcsmd-ref-radius-sm"],
            // md: default_gen_float["tcsmd-ref-radius-md"],
            // lg: default_gen_float["tcsmd-ref-radius-lg"],
            full: default_gen_float["tcsmd-ref-radius-circle"],
            ...Object.entries(default_gen_float)
                .reduce((pre, curr = ['', '']) => {
                const [key, value] = curr;
                if (key.includes('radius') && key.split('-radius-')[1])
                    return {
                        ...pre,
                        [key.split('-radius-')[1]]: value
                    };
                else
                    return pre;
            }, {})
        },
        borderWidth: {
            // 'extra-thin': default_gen_float["tcsmd-ref-border-extra-thin"],
            // 'thin': default_gen_float["tcsmd-ref-border-thin"],
            // 'thick': default_gen_float["tcsmd-ref-border-thick"],
            ...Object.entries(default_gen_float)
                .reduce((pre, curr = ['', '']) => {
                const [key, value] = curr;
                if (key.includes('border') && key.split('-border-')[1])
                    return {
                        ...pre,
                        [key.split('-border-')[1]]: value
                    };
                else
                    return pre;
            }, {})
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
    idpExtraTheme,
    idpExtensionDarkTheme,
    idpExtensionJaTheme,
    newsTheme,
    consumerDefaultTheme,
    consumerDarkTheme
};
