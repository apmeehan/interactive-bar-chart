import { useState } from 'react';
import classNames from 'classnames/bind';
import { BarChart, StepperButton } from './components';
import styles from './InteractiveBarChart.module.scss';

const cx = classNames.bind(styles);

export default function InteractiveBarChart({
  categories = [],
  initialValues,
  color,
  max,
}: {
  categories?: {
    label: string;
    pictogram?: JSX.Element;
  }[];
  initialValues?: number[];
  color?: string;
  max?: number;
}) {
  const [values, setValues] = useState(
    initialValues == null ? categories.map(() => 0) : initialValues
  );

  const handleValueChange = (index: number, newValue: number) => {
    setValues((values) => values.map((v, i) => (i === index ? newValue : v)));
  };

  return (
    <div className={cx('root')}>
      <div className={cx('chart')}>
        <BarChart
          categories={categories.map((category) => category.label)}
          pictograms={categories.map((category) => category.pictogram)}
          series={[
            {
              values: values,
              color: color,
            },
          ]}
          max={max}
        />
      </div>

      <div className={cx('buttons')}>
        {categories.map((_, i) => (
          <StepperButton
            onChange={(value) => handleValueChange(i, value)}
            value={values[i]}
            max={max}
          />
        ))}
      </div>
    </div>
  );
}
