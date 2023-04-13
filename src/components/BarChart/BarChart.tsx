import classNames from 'classnames/bind';
import { Axis, ChartArea } from './components';
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
   * The quantitive data represented by the chart.
   * Each series dataset has list of quantitative values corresponding to each of the data categories.
   */
  series: Array<{
    values: number[];
    color?: string;
  }>;
  /**
   * Array of elements representing each of the categories. Works with either images or SVGs
   */
  pictograms?: Array<JSX.Element | undefined>;
  /**
   * The value the y-axis goes up to. Is calculated automatically if this prop isn't provided
   */
  max?: number;
}) {
  /**
   * If max value not provided as prop then use the max value found in the input data
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
          getters.getSeriesValue({ series }, seriesIndex, categoryIndex) || 0
        );
      }
    }

    return Math.max(...allValues, 0);
  };

  const getCategoryAxisLabels = (): (string | undefined)[] =>
    Array.from(
      Array(getters.getNumberOfCategories({ categories })),
      (_, i) => i
    ).map((index) => getters.getCategory({ categories }, index));

  const getQuantityAxisLabels = () =>
    Array.from(Array(getMax() + 1), (_, i) => i);

  const parsedData = parseData({ series, categories, pictograms });

  return (
    <div className={cx('main-container')}>
      <ChartArea data={parsedData} maxValue={getMax()} />

      <div className={cx('x-axis-layout-wrapper')}>
        <Axis dimension="x" labels={getCategoryAxisLabels()} />
      </div>

      <div className={cx('y-axis-layout-wrapper')}>
        <Axis dimension="y" labels={getQuantityAxisLabels()} />
      </div>
    </div>
  );
}
