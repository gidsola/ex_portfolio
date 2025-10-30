
import esbuild from 'esbuild';
import { resolve } from 'path';


try {

  await esbuild.build({
    entryPoints: [resolve(process.cwd(), 'client/src/ssr.jsx')],
    bundle: true,
    outfile: resolve(process.cwd(), 'server/dist/ssr.js'),
    platform: 'node',
    format: 'esm',
    target: 'node20',
    plugins: [
      {
        name: 'externalize-static-assets',
        setup(build) {
          build.onResolve({ filter: /^\/images\/.*/ }, (args) => ({
            path: args.path,
            external: true
          }));
        }
      }
    ]
  });


}
catch (e) {
  console.error('Build failed:', e);
  process.exit(1);
};
