---
sidebar_position: 6
---

Import an existing Electron project to use Electron Forge.

If you already have an Electron app and want to try out Electron Forge, you can either use Forge's ```import``` script or manually configure Forge yourself.

These steps will get you set up with a basic build pipeline that can create  (Windows),  (macOS), and  (Linux) installers when running ```electron-forge make```.

## Using the import script

Importing an existing Electron app into the Electron Forge workflow can be done automatically using Forge's ```import``` command.

``` bash
cd my-app
npm install --save-dev @electron-forge/cli
npm exec --package=@electron-forge/cli -c "electron-forge import"
```
This script will set up Forge to package your app and build installers for it.

:::note
If you're already using other Electron tooling, it will try to automatically migrate the settings as much as possible, but some of it may need to be migrated manually.
:::

## Setting up forge manually

If the import script does not work for some reason, you can also install Forge manually. To get identical behavior to the script, follow the steps below.

### Install Dependencies

First, install Forge's CLI and the target Makers as devDependencies in your project.

``` bash
cd my-app
npm install --save-dev @electron-forge/cli @electron-forge/maker-squirrel @electron-forge/maker-deb @electron-forge/maker-zip
```

### Configuring Package.json
To start using Forge, add a few command scripts to your package.json file:
``` bash
{
  // ...
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make",
    "publish": "electron-forge publish"
  }
  // ... 

```

Then, set up your Forge  in the ```config.forge``` field in package.json.

``` bash
{
  // ...
  "config": {
    "forge": {
      "packagerConfig": {},
      "makers": [
        {
          "name": "@electron-forge/maker-squirrel",
          "config": {
            "name": "electron_quick_start"
          }
        },
        {
          "name": "@electron-forge/maker-zip",
          "platforms": [
            "darwin"
          ]
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {}
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {}
        }
      ]
    }
  }
  // ...
}
```

In the above object, we configure each Maker that we installed into the ```makers``` array. We also create an empty ```packagerConfig``` object that you should edit to your app's packaging needs.

### Adding Squirrel.Windows boilerplate

When distributing a [**Squirrel.Windows**](#squirrel) app, we recommend installing ```electron-squirrel-startup``` as a runtime dependency to handle Squirrel events.

``` bash
cd my-app
npm install electron-squirrel-startup
```

Then, add the following snippet as early as possible in the main process execution (before the ```app.ready``` event).

``` bash
if (require('electron-squirrel-startup')) app.quit();
```

### Optional:Publishing your app

You can also configure Forge to upload your release artifacts to a self-hosted release server such as [**Electron Release Server**](#electron)  or , or[**Nucleus**](#nucleus) cloud storage providers such as [**S3**](#S3) .

For example, for the S3 Publisher:

``` bash
cd my-app
npm install --save-dev @electron-forge/publisher-s3
```

``` bash
{
  // ...
  "config": {
    "forge": {
      "packagerConfig": {},
      "makers": [ /* ... */],
      "publishers": [
        {
        "name": "@electron-forge/publisher-s3",
        "platforms": ["darwin", "linux"],
          "config": {
            "bucket": "my-bucket",
            "folder": "my/key/prefix"
          }
        }
      ]
    }
  }
  // ...
}
```