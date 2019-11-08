# js-uid

Simple & safe unique id generator.

NodeJS compatable but not published, get the code directly :)
```js
const uid = require('./uid');

uid(); // 16290fd3be3
```

Browser
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="uid.js"></script>
    <script>
        uid(); // 16290fd3be3
    </script>

</body>
</html>
```

..or if you are modern :)
```js
export const uid = (prev => {
    return () => {
        let date = Date.now();

        if (date <= prev) {
                date = ++prev;
        } else {
                prev = date;
        }

        return date.toString(36);
    }
})(0);
```
