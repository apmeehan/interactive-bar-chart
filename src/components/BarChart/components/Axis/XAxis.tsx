import classNames from 'classnames/bind';
import styles from './XAxis.module.scss';
const cx = classNames.bind(styles);

export function XAxis({ labels }: { labels: React.ReactNode[] }) {
  return (
    <div className={cx('axis', 'x-axis')}>
      {labels.map((label, i) => (
        <div key={i} className={cx('x-axis-label')}>
          {label}
        </div>
      ))}
    </div>
  );
}
