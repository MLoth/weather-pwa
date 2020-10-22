const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },

    purge: [],

    theme: {
        extend: {
            colors: {
                // thunderstorm with light rain
                200: "#efefef",
                // thunderstorm with rain
                201: "#efefef",
                // thunderstorm with heavy rain
                202: "#efefef",
                // light thunderstorm
                210: "#efefef",
                // thunderstorm
                211: "#efefef",
                // heavy thunderstorm
                212: "#efefef",
                // ragged thunderstorm
                221: "#efefef",
                // thunderstorm with light drizzle
                230: "#efefef",
                // thunderstorm with drizzle
                231: "#efefef",
                // thunderstorm with heavy drizzle
                232: "#efefef",

                // light intensity drizzle
                300: "#efefef",
                // drizzle
                301: "#efefef",
                // heavy intensity drizzle
                302: "#efefef",
                // light intensity drizzle rain
                310: "#efefef",
                // drizzle rain
                311: "#efefef",
                // heavy intensity drizzle rain
                312: "#efefef",
                // shower rain and drizzle
                313: "#efefef",
                // heavy shower rain and drizzle
                314: "#efefef",
                // shower drizzle
                321: "#efefef",

                // light rain
                500: "#efefef",
                // moderate rain
                501: "#efefef",
                // heavy intensity rain
                502: "#efefef",
                // very heavy rain
                503: "#efefef",
                // extreme rain
                504: "#efefef",
                // freezing rain
                511: "#efefef",
                // light intensity shower rain
                520: "#efefef",
                // shower rain
                521: "#efefef",
                // heavy intensity shower rain
                522: "#efefef",
                // ragged shower rain
                531: "#efefef",

                // light snow
                600: "#efefef",
                // Snow
                601: "#efefef",
                // Heavy snow
                602: "#efefef",
                // Sleet
                611: "#efefef",
                // Light shower sleet
                612: "#efefef",
                // Shower sleet
                613: "#efefef",
                // Light rain and snow
                615: "#efefef",
                // Rain and snow
                616: "#efefef",
                // Light shower snow
                620: "#efefef",
                // Shower snow
                621: "#efefef",
                // Heavy shower snow
                622: "#efefef",

                // mist
                701: "#efefef",

                // Smoke
                711: "#efefef",
                // Haze
                721: "#efefef",

                // sand/ dust whirls
                731: "#efefef",
                // Fog	fog
                741: "#efefef",
                // Sand
                751: "#efefef",
                // Dust
                761: "#efefef",
                // Volcanic ash
                762: "#efefef",

                // Squall
                771: "#efefef",

                // Tornado	tornado
                781: "#efefef",

                // Clear
                800: "#efefef",

                // few clouds: 11-25%
                801: "#efefef",
                // scattered clouds: 25-50%
                802: "#efefef",
                // broken clouds: 51-84%
                803: "#efefef",
                // overcast clouds: 85-100%
                804: "#efefef"
            },

            fontFamily: {
                sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans]
            }
        }
    },

    variants: {},

    plugins: []
};
