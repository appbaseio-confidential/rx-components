# rx-components 🤘

Wild reactive app components

# Components

## Banner

An image banner

| prop |  type  | default  | description                |
| ---- | :----: | :------: | :------------------------- |
| src  | string | required | image url                  |
| href | string | required | links the image to this ur |

Also includes `style`, `className`, `target` and other properties of `a` tag.

```js
<Banner
    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/movies/1103933_750x600_gps_cn_qifq.jpg"
    href="movies/oscars"
    target="_blank"
/>
```
