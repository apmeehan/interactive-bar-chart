import classNames from 'classnames/bind';
import { Bar } from '../Bar';
import styles from './ChartArea.module.scss';

const cx = classNames.bind(styles);

export function ChartArea({
  data = [],
  maxValue,
}: {
  data: Array<{
    pictogram?: JSX.Element;
    series: Array<{
      value: number;
      placeholderValue?: number;
      color?: string;
    }>;
  }>;
  maxValue: number;
}) {
  /** Returns bar length, as a percentage of the max value of the y-axis */
  const getBarLength = (value: number): number => {
    if (value == null) {
      return 0;
    }

    return (value / maxValue) * 100;
  };

  return (
    <div className={cx('root')}>
      {data.map((category, catIdx) => (
        <div key={catIdx} className={cx('category')}>
          {category.series.map((series, seriesIdx) => (
            <div key={seriesIdx} className={cx('series')}>
              {/* The Bar elements are absolutely positioned so they can be superimposed */}

              {/**
               * PLACEHOLDER BAR
               * Only displayed if this series has a placeholder value associated with this category
               */}
              {series.placeholderValue != null && (
                <div className={cx('bar-container')}>
                  <Bar
                    isPlaceholder
                    length={getBarLength(series.placeholderValue)}
                    pictogram={category.pictogram}
                    pictogramCount={
                      category.pictogram != null
                        ? Math.min(series.placeholderValue, maxValue)
                        : undefined
                    }
                  />
                </div>
              )}

              {/**
               * NORMAL BAR
               */}
              <div className={cx('bar-container')}>
                <Bar
                  length={getBarLength(series.value)}
                  pictogram={category.pictogram}
                  pictogramCount={
                    category.pictogram != null
                      ? Math.min(series.value, maxValue)
                      : undefined
                  }
                  color={series.color}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
