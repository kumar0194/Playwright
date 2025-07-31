
const config = ({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 4000
  }, 
  reporter: 'html',
use:{ 
  browserName: 'chromium',
  headless: false
} 
});
module.exports = config;
