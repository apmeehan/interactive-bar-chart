# Interactive Bar/Pictogram Chart

Initially made as an exercise to familiarise myself with recent updates to Storybook, before I got a bit carried away...

The fully scalable layout is implemented entirely with Flexbox rather than either SVG (so the bars could be used as containers for icons/emojis, to effectively turn it into a [pictogram chart](https://www.theschoolrun.com/what-pictogram)) or CSS Grid (easier to implement the dimension transitions), and [React Transition Group](https://reactcommunity.org/react-transition-group/) is used for the enter/exit transitions.

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
