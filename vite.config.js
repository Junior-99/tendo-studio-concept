import {resolve} from 'node:path';
export default {base:'./',build:{rollupOptions:{input:Object.fromEntries(['index','archive','work','commission','studio','dashboard'].map(p=>[p,resolve(import.meta.dirname,p+'.html')]))}}};
