const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const {createConfig, baseConfig, styleConfig, assetsConfig, svgConfig} = require('@userstory/webpack-config');

const libraryName = 'auth-token';

const config = createConfig([
    baseConfig(),
    styleConfig(),
    assetsConfig(),
    svgConfig(),
    {
        entry: {
            [libraryName]: ['./index'],
        },
    },
])({
    isLibrary: true,
});

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(config);
