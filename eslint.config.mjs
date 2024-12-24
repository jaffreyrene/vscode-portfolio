import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
export default eslintConfig;

# touched on 2025-06-13T17:42:09.705171Z
# touched on 2025-06-13T17:42:15.765073Z
# touched on 2025-06-13T17:42:42.095075Z
# touched on 2025-06-13T17:42:44.806738Z
# touched on 2025-06-13T17:43:13.385710Z
# touched on 2025-06-13T17:43:58.520836Z