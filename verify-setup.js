#!/usr/bin/env node

/**
 * Pre-installation verification script
 * Checks for common issues before npm install
 */

import fs from 'fs';
import path from 'path';

console.log('🔍 Verifying Zeelogics Website Setup...\n');

let hasErrors = false;

// Check 1: package.json exists and is valid
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('✅ package.json is valid');
  
  // Check required dependencies
  const requiredDeps = ['react', 'react-dom', 'framer-motion', 'lucide-react'];
  const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
  
  if (missingDeps.length > 0) {
    console.log(`❌ Missing dependencies: ${missingDeps.join(', ')}`);
    hasErrors = true;
  } else {
    console.log('✅ All required dependencies listed');
  }
} catch (error) {
  console.log('❌ package.json is invalid or missing');
  hasErrors = true;
}

// Check 2: Required config files exist
const configFiles = [
  'tailwind.config.js',
  'vite.config.ts',
  'tsconfig.json',
  'index.html'
];

configFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} is missing`);
    hasErrors = true;
  }
});

// Check 3: Source directory structure
const requiredDirs = [
  'src',
  'src/components',
  'src/components/ui',
  'src/components/sections',
  'src/components/layout',
  'src/components/shared',
  'src/constants',
  'src/types'
];

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✅ ${dir}/ exists`);
  } else {
    console.log(`❌ ${dir}/ is missing`);
    hasErrors = true;
  }
});

// Check 4: Key component files exist
const keyFiles = [
  'src/App.tsx',
  'src/main.tsx',
  'src/index.css',
  'src/types/index.ts',
  'src/constants/content.ts',
  'src/components/sections/Hero.tsx',
  'src/components/layout/Footer.tsx'
];

keyFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} is missing`);
    hasErrors = true;
  }
});

// Check 5: Verify no syntax errors in key files
try {
  const appContent = fs.readFileSync('src/App.tsx', 'utf8');
  if (appContent.includes('export default App')) {
    console.log('✅ App.tsx has default export');
  } else {
    console.log('❌ App.tsx missing default export');
    hasErrors = true;
  }
} catch (error) {
  console.log('❌ Cannot read App.tsx');
  hasErrors = true;
}

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('❌ Setup verification FAILED');
  console.log('Please fix the errors above before running npm install');
  process.exit(1);
} else {
  console.log('✅ Setup verification PASSED');
  console.log('\nYou can now run:');
  console.log('  npm install');
  console.log('  npm run dev');
  process.exit(0);
}
