# rx-components 🤘

Wild reactive app components

# Components

## Banner

An image banner

| prop        |  type  | default  | description                                  |
| ----------- | :----: | :------: | :------------------------------------------- |
| src         | string | required | image url                                    |
| href        | string | required | links the image to this ur                   |
| widthRatio  | number |    4     | width of the image or a proportionate number |
| heightRatio | number |    3     | width of the image or a proportionate number |

Also includes `style`, `className`, `target` and other properties of `a` tag. Needs `heightRatio` and `widthRatio` display properly. It flows to fit the available space, for a large image a container to restrict the `width` or `maxWidth` is helpful.

```js
<Banner
	src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/movies/1103933_750x600_gps_cn_qifq.jpg"
	href="movies/oscars"
	target="_blank"
	heightRatio={60}
	widthRatio={75}
/>
```

## Navbar

App navbar

| prop   | type | default | description               |
| ------ | :--: | :-----: | :------------------------ |
| sticky | bool |    -    | Fix the navbar to the top |
