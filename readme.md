# tabs-refactor

>  Fork of Contactlab Pattern Library tab component to test a refactor of it. 

### Install & local dev
Easy as:

```
# Install dependencies
$ yarn

# Start local dev server
$ yarn start

# Open in the browser
http://localhost:8081
```

### How to use
Since for now this is a POC there is no standalone file, you must import the main class with the [Webpack](https://webpack.github.io/) bundler + the `text-loader` module.

### Example

```html
<tabs-main labels='["One","Two"]'>
    <tab-content>
        <p>Some content for tab One</p>
    </tab-content>
    <tab-content>
        <p>Some content for tab One</p>
    </tab-content>
<tabs-main>
```

### License
[Apache 2.0](LICENSE)