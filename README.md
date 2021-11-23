# Interactive Bar Chart

Built mainly as an exercise to acquaint myself with Storybook.

Fully responsive layout implemented entirely with CSS and Flexbox rather than the more typical SVG, because I'm a glutton for punishment (and also because it meant the bars could be used as containers for the pictograms).

[Demo](https://apmeehan.github.io/interactive-bar-chart)

## Usage

```js
<InteractiveBarChart
  categories={[
    {
      label: 'Apples',
      pictogram: <img src="apple.svg" />,
    },
    {
      label: 'Oranges',
      pictogram: <img src="orange.svg" />,
    },
    {
      label: 'Pears',
      pictogram: <img src="pear.svg" />,
    },
  ]}
  targetValues={[6, 7, 8]}
  initialValues={[1, 1, 1]}
  color="deeppink"
  max={10}
/>
```
