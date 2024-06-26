import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
 
const packageJson = require("./package.json");

const rollupConfig = [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            },
        ],
        external: ['react', 'react-dom'],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
              useTsconfigDeclarationDir: true
            }),
        ],
    }
];

export default rollupConfig;