# Contribute

To add new icons to the library just simply place it into `./assets/` directory with the desired name to be served by itself:

Ex:
`./assets/<icon>.svg`

Then execute the `build` command

```bash
npm run build
```

It will create an `<Icon>.tsx` file in `./src/icons` package directory and will index it in its `./src/index.ts` file.

It will be automatically optimized documented and tested.

Track those new changes in git.


