import classNames from 'classnames/bind';
import { lighten, adjustHue } from 'polished';
import styles from './Bar.module.scss';
const cx = classNames.bind(styles);

function getBarColor(color: string | undefined, hasPictograms: boolean) {
  if (color != null) {
    return `linear-gradient(${lighten(
      0.1,
      adjustHue(45, color)
    )}, 20%, ${color})`;
  }

  if (hasPictograms) {
    return 'transparent';
  }

  return 'rgba(100%, 100%, 100%, 0.1)';
}

export function Bar({
  length,
  color,
  pictogram,
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
        background: getBarColor(color, pictogram != null),
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
