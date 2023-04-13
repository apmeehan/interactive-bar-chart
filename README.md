# Interactive Bar Chart

Built mainly as an exercise to familiarise myself with Storybook.

The fully scalable layout is implemented entirely with divs and CSS rather than SVG, just to see if I could (and also because I wanted to use the bars as containers for icons/emojis, to effectively turn it into a [pictogram chart](https://www.theschoolrun.com/what-pictogram)).

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
  initialValues={[1, 1, 1]}
  color="deeppink"
  max={10}
/>
```
