import classNames from 'classnames/bind';
import styles from './Bar.module.scss';

const cx = classNames.bind(styles);

export function Bar({
  length,
  color,
  pictogram = undefined,
  pictogramCount = 0,
}: {
  length: number;
  color?: string;
  pictogram?: JSX.Element;
  pictogramCount?: number;
}) {
  if (length == null || typeof length !== 'number' || length < 0) {
    return null;
  }

  return (
    <div
      className={cx('bar', { 'bar--pictograms': pictogramCount > 0 })}
      style={{
        height: `${length}%`,
        backgroundColor: !pictogram ? color : 'transparent',
      }}
    >
      {Array.from(Array(pictogramCount), (_, i) => (
        <div key={i} className={cx('pictogram', {})}>
          {pictogram}
        </div>
      ))}
    </div>
  );
}
