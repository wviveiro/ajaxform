# Ajax Form

Submit a form without having to add it to DOM. Works like a ajax function, but you can set the tab target instead of receiving a return on the function.

## Install

```
npm i @wviveiro/ajaxform
```

## Usage

```javascript
import ajaxform from 'ajaxform';

const onClick = () => {
    ajaxform({
        url: 'https://foo.bar',
        data: {
            foo: 'bar',
            lorem: 'ipsum'
        },
        target: '_blank'
    });
}
```