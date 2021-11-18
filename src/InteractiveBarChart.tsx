import { useState } from 'react';
import classNames from 'classnames/bind';
import { BarChart, StepperButton } from './components';
import styles from './InteractiveBarChart.module.scss';

const cx = classNames.bind(styles);

export default function InteractiveBarChart({
  categories = [],
  pictograms = [],
  initialValues = [],
  targetValues = [],
  color,
  max,
}: {
  categories?: string[];
  pictograms?: JSX.Element[];
  initialValues?: number[];
  targetValues?: number[];
  color?: string;
  max?: number;
}) {
  const [answer, setAnswer] = useState(initialValues);

  const handleChange = (answerIndex: number, newValue: number) => {
    setAnswer(answer.map((v, i) => (i === answerIndex ? newValue : v)));
  };

  return (
    <div className={cx('root-container')}>
      <div className={cx('chart')}>
        <BarChart
          categories={categories}
          pictograms={pictograms}
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

      <div className={cx('inputs')}>
        <StepperButton
          onChange={(value) => handleChange(0, value)}
          max={targetValues[0]}
          value={answer[0]}
        />

        <StepperButton
          onChange={(value) => handleChange(1, value)}
          max={targetValues[1]}
          value={answer[1]}
        />

        <StepperButton
          onChange={(value) => handleChange(2, value)}
          max={targetValues[2]}
          value={answer[2]}
        />
      </div>
    </div>
  );
}
