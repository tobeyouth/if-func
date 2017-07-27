# if-func

Just a  tool specifically for the following scenes

```
  if (typeof(foo) === 'function) {
    foo(args)
  } else {
    bar(args)
  }
```

Now you can use `ifFunc`, like this

```
  ifFunc(foo).call(this, args).else(bar)
```