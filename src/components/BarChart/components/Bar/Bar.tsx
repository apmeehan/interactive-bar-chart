import classNames from 'classnames/bind';
import styles from './Bar.module.scss';

const cx = classNames.bind(styles);

export function Bar({
  length,
  color = 'hsla(0, 0%, 100%, 0.2)',
  isPlaceholder = false,
  pictogram = undefined,
  pictogramCount = 0,
}: {
  length: number;
  color?: string;
  isPlaceholder?: boolean;
  pictogram?: JSX.Element;
  pictogramCount?: number;
}) {
  if (length == null || typeof length !== 'number' || length < 0) {
    return null;
  }

  console.log(pictogramCount > 0);

  return (
    <div
      className={cx('bar', {
        'bar--placeholder': isPlaceholder,
        'bar--pictograms': pictogramCount > 0,
      })}
      style={{
        height: `${length}%`,
        backgroundColor:
          isPlaceholder || pictogramCount > 0 ? 'transparent' : color,
      }}
    >
      {Array.from(Array(pictogramCount), (_, i) => (
        <div
          key={i}
          className={cx('pictogram', {
            'pictogram--placeholder': isPlaceholder,
          })}
        >
          {!isPlaceholder && pictogram}
        </div>
      ))}
    </div>
  );
}
