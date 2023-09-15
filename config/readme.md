<!-- CONFING ESLINT -->
npm i -D eslint
npx eslint --init


<!-- ESLINT -->
npm run lint
npm run lint:fix

<!-- UNI-TESTING -->
npm run test
npm run test -- 06-person
npm run test -- --coverage

<!-- test playwright -->
npx playwright test 

<!-- E2E -->
npm run test:e2e