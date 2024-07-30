# Accessibility testing for Spark

To add or improve a component's accessibility testing here are the steps you should follow:

1. Create your implementation page within `./pages` directory (ex: `A11yButton.tsx`)
2. Add your implementation page to the Playwright testable routes (see `./routes/components.ts` and `./routes/elements.tsx`)
3. Run the tests using `npm run test:a11y`!
