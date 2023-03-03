# How to

This is a minimal reproduction of the [issue I'm experiencing using Marked v4 with Webpack 5 / CRA](https://github.com/markedjs/marked/issues/2265#issuecomment-1451124186).

To reproduce this issue please clone this repository and run:

```console
./ $ pnpm i
./ $ cd some-cra
./some-cra $ pnpm start
```

You should now see the error in question in the developer console:

![](https://i.imgur.com/SiPTlVL.png)
