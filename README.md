# `react-native-template-jordand`

```
react-native init NewApp --template=jordand
```

Instructions in `app/*` directories.

## Optional Filament support

This repository supports Filament CLI when using the `filament-jordandrn` package.

### Steps to install
- Install `filament` globally with `npm i -g filamentcli`
- Install `filament-jordandrn` in the project with `npm i filament-jordandrn`
- Link the package to your project by modifying `package.json` and adding the following to the top level of the file:
  ```
  "config": {
    "filament": {
      "package": "filament-jordandrn"
    }
  }
  ```

You'll now be able to use filament commands to generate screens, components, network  and redux controllers:

- `filament new component <componentName>`
- `filament new screen <screenName>`
- `filament new network <networkControllerName>`
- `filament new redux <reduxName>`