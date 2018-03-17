# @zeit/eslint-config-node

Contains a series of sensible defaults on top of the `eslint:recommended`
config to prevent common JavaScript gotchas.

It explicitly avoids and unsets any _stylistic_ rules to be
as free of opinions as possible.

## How to use

Just run...

```console
$ yarn add --dev eslint @zeit/eslint-config-node @zeit/git-hooks
$ yarn zeit-lint-init
```

... and you're (pre)set!
