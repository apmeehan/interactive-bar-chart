import classNames from 'classnames/bind';
import styles from './ResizableContainer.module.scss';

const cx = classNames.bind(styles);

export default function ResizableContainer({
  height = 100,
  width = 100,
  children,
}: {
  height?: number;
  width?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className={cx('root')}>
      <div
        className={cx('inner')}
        style={{
          height: height,
          width: width,
        }}
      >
        {children}
      </div>
    </div>
  );
}
