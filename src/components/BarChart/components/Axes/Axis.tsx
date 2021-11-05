import classNames from 'classnames/bind';
import styles from './Axis.module.scss';

const cx = classNames.bind(styles);

export enum Dimension {
  X = 'x',
  Y = 'y',
}

const CLASSES = {
  [Dimension.X]: {
    LAYOUT: 'x-axis-layout-wrapper',
    AXIS: 'x-axis',
    LABEL: 'x-axis-label',
  },
  [Dimension.Y]: {
    LAYOUT: 'y-axis-layout-wrapper',
    AXIS: 'y-axis',
    LABEL: 'y-axis-label',
  },
};

export function Axis({
  dimension,
  labels = [],
}: {
  dimension: Dimension;
  labels: React.ReactNode[];
}) {
  return (
    <div className={cx(CLASSES[dimension].LAYOUT)}>
      <div className={cx(CLASSES[dimension].AXIS)}>
        {labels.map((label, i) => (
          <div key={i} className={cx(CLASSES[dimension].LABEL)}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
