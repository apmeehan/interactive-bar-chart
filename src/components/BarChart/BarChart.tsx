import classNames from 'classnames/bind';
import { XAxis, YAxis, ChartArea } from './components';
import styles from './BarChart.module.scss';
import { parseData, getters } from './utils';

const cx = classNames.bind(styles);

export default function BarChart({
  categories = [],
  pictograms = [],
  series = [],
  max,
}: {
  /**
   * The categories whose quantitative values are represented by the bar heights. Or, "the things being counted".
   */
  categories: string[];
  /**
   * The quantitive data represented by the chart. Each series dataset can have:
   *  - A list of quantitative values corresponding to each of the data categories
   *  - A list of placeholder values, for displaying bar/pictogram placeholder outlines
   */
  series: Array<{
    values: number[];
    placeholders?: number[];
    color?: string;
  }>;
  /**
   * Array of elements representing each of the categories. Works with either images or SVGs
   */
  pictograms?: JSX.Element[];
  /**
   * The value the y-axis goes up to. Is calculated automatically if this prop isn't provided
   */
  max?: number;
}) {
  /**
   * If max value not provided as prop then use the max value found in the input data (including placeholder values)
   */
  const getMax = (): number => {
    if (max != null) {
      return max;
    }

    if (getters.getNumberOfSeries({ series }) < 1) {
      return 0;
    }

    let allValues = [];
    for (
      let seriesIndex = 0;
      seriesIndex < getters.getNumberOfSeries({ series });
      seriesIndex++
    ) {
      for (
        let categoryIndex = 0;
        categoryIndex < getters.getNumberOfCategories({ categories });
        categoryIndex++
      ) {
        allValues.push(
          getters.getSeriesValue({ series }, seriesIndex, categoryIndex) || 0,
        );

        allValues.push(
          getters.getSeriesPlaceholderValue(
            { series },
            seriesIndex,
            categoryIndex,
          ) || 0,
        );
      }
    }

    return Math.max(...allValues, 0);
  };

  const getCategoryAxisLabels = (): (string | undefined)[] =>
    Array.from(
      Array(getters.getNumberOfCategories({ categories })),
      (_, i) => i,
    ).map((index) => getters.getCategory({ categories }, index));

  const getQuantityAxisLabels = () =>
    Array.from(Array(getMax() + 1), (_, i) => i);

  const parsedData = parseData({ series, categories, pictograms });

  return (
    <div className={cx('main-container')}>
      <ChartArea data={parsedData} maxValue={getMax()} />
      <XAxis labels={getCategoryAxisLabels()} />
      <YAxis labels={getQuantityAxisLabels()} />
    </div>
  );
}
