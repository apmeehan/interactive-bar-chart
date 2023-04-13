import classNames from 'classnames/bind';
import styles from './YAxis.module.scss';
const cx = classNames.bind(styles);

export function YAxis({ labels }: { labels: React.ReactNode[] }) {
  return (
    <div className={cx('axis', 'y-axis')}>
      {labels.map((label, i) => (
        <div key={i} className={cx('y-axis-label')}>
          {label}
        </div>
      ))}
    </div>
  );
}
