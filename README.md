# Azure DevOps Iterations as Nebraska Counties

Create 93 Sprint iterations in Azure DevOps based on Nebraska counties ordered by license plate number.

```
1 - Douglas
2 - Lancaster
3 - Gage
...
16 - Seward
...
93 - Hooker
```

![Nebraska county list in DevOps](https://imgur.com/lvGwUAn.png)

## Getting Started

This is a work in progress and does not currently support command line arguments. Changes to the start date and number of days in sprint can be made inline in the file `create.mjs`. The start date is hardcoded right now and likely won't be the date you want to use.

Before running, you must be logged in to your devops organization via CLI with `az login`/`az devops login` with the appropriate permissions.

### Create Iterations

```
$ npm run create
```

### Reset Iterations

This is useful if you want to change the start date after running `create` or if you're just testing things out.

```
$ npm run reset
```

These scripts run with `zx` under the hood. If you are familiar with zx and have it installed globally, you can run the scripts directly with `zx create.mjs` and `zx reset.mjs`.

## Azure CLI Documentation

If you aren't familiar with the Azure CLI, these pages may be helpful

[Getting Started](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest)

[az boards iteration project Documentation](https://docs.microsoft.com/en-us/cli/azure/boards/iteration/project?view=azure-cli-latest)

## Data Source

https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Nebraska#County_coding

## Why?

Because doing this manually would be way less fun.
