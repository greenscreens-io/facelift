/**
 * Install tools
 * npm install rollup -g
 * npm install terser -g
 * npm install rollup-plugin-sourcemaps --save-dev
 * npm install rollup-plugin-terser --save-dev
 * 
 * then call "rollup -c" from command line
 */

import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
// import gsExtern from './rollup-plugin-gs-extern.js'

console.log((new Date()).toLocaleString());

const devMode = (process.env.NODE_ENV === 'development');
console.log(`${devMode ? 'development' : 'production'} mode bundle`);

const minesm = terser({
    ecma: 2022,
    keep_classnames: false,
    keep_fnames: false,
    module: true,
    toplevel: false,
    mangle: {
        toplevel: true,
        keep_classnames: true,
        keep_fnames: true
    },
    compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        keep_classnames: true,
        keep_fnames: true,
        drop_console: !devMode,
        drop_debugger: !devMode
    },
    output: { quote_style: 1 }
});

const core = {
    input: 'modules/index.mjs',
    output: [
        //{ file: 'release/vanilla/io.greenscreens.facelift.core.js', format: 'esm' },
        { file: 'release/vanilla/io.greenscreens.facelift.core.min.js', format: 'esm', sourcemap: true, plugins: [minesm, sourcemaps] }
    ],
    plugins: [

    ]
};

const core_esm = {
    input: 'modules/index.esm.mjs',
    output: [
        //{ file: 'release/esm/io.greenscreens.facelift.core.esm.js', format: 'esm' },
        { file: 'release/esm/io.greenscreens.facelift.core.esm.min.js', format: 'esm', sourcemap: true, plugins: [minesm, sourcemaps] }
    ],
    plugins: [

    ]
};


export default [core, core_esm]; 

