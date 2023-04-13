import * as get from './getters';

/**
 * Converts the data structure used for `data` prop (which is somewhat normalised, as flatter props are easier to deal with)
 * to a more nested form closer to how the data is handled internally
 *
 * For example, this:
 * ```
 * categories = ['Apples', 'Pears', 'Bananas'];
 * pictograms = [appleIcon, pearIcon, bananaIcon];
 * series = [
 *  // Series 1 (Alice)
 *  {
 *    color: 'red',
 *    values: [1, 2, 3],
 *  },
 *  // Series 2 (Bob)
 *  {
 *    color: 'blue',
 *    values: [5, 6, 7],
 *  }
 * ];
 * ```
 *
 * becomes:
 * ```
 * data = [
 *  // Category 1 (Apples)
 *  {
 *    pictogram: appleIcon,
 *    series: [
 *      // Alice
 *      { value: 1, color: 'red' },
 *      // Bob
 *      { value: 5, color: 'blue' },
 *    ]
 *  },
 *  // Category 2 (Pears)
 *  {
 *    pictogram: pearIcon,
 *    series: [
 *      // Alice
 *      { value: 2, color: 'red' },
 *      // Bob
 *      { value: 6, color: 'blue' },
 *    ]
 *  }
 *  // Category 3 (Bananas)
 *  {
 *    pictogram: bananaIcon,
 *    series: [
 *      // Alice
 *      { value: 3, color: 'red' },
 *      // Bob
 *      { value: 7, color: 'blue' },
 *    ]
 *  }
 * ]
 * ```
 */
export function parseData(props: any) {
  const parsedData = [];

  for (
    let categoryIndex = 0;
    categoryIndex < get.getNumberOfCategories(props);
    categoryIndex += 1
  ) {
    const series = [];

    for (
      let seriesIndex = 0;
      seriesIndex < get.getNumberOfSeries(props);
      seriesIndex += 1
    ) {
      const thisSeries = {
        value: get.getSeriesValue(props, seriesIndex, categoryIndex),
        color: get.getSeriesColor(props, seriesIndex),
      };

      series.push(thisSeries);
    }

    parsedData.push({
      pictogram: get.getPictogram(props, categoryIndex),
      series,
    });
  }

  return parsedData;
}
