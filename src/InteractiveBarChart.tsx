import { useState } from 'react';
import classNames from 'classnames/bind';
import { BarChart, StepperButton } from './components';
import styles from './InteractiveBarChart.module.scss';

const cx = classNames.bind(styles);

export default function InteractiveBarChart({
  categories = [],
  targetValues = [],
  initialValues,
  color,
  max,
}: {
  categories?: { label: string; pictogram?: JSX.Element }[];
  targetValues?: number[];
  initialValues?: number[];
  color?: string;
  max?: number;
}) {
  const [answer, setAnswer] = useState(
    initialValues == null ? categories.map(() => 0) : initialValues,
  );

  const handleChange = (answerIndex: number, newValue: number) => {
    setAnswer(answer.map((v, i) => (i === answerIndex ? newValue : v)));
  };

  return (
    <div className={cx('root-container')}>
      <div className={cx('chart-container')}>
        <BarChart
          categories={categories.map((category) => category.label)}
          pictograms={categories.map((category) => category.pictogram)}
          series={[
            {
              values: answer,
              placeholders: targetValues,
              color: color,
            },
          ]}
          max={max}
        />
      </div>

      <div className={cx('buttons-container')}>
        {categories.map((_, i) => (
          <StepperButton
            onChange={(value) => handleChange(i, value)}
            max={targetValues[i]}
            value={answer[i]}
          />
        ))}
      </div>
    </div>
  );
}
