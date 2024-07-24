import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'es',
        name: 'next-link-transition'
    },
    external: ['react', 'react-dom', 'next', 'next/link', 'next/navigation'],
    plugins: [typescript({ tsconfig: 'tsconfig.json' })],
});
