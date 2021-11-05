import classNames from 'classnames/bind';
import styles from './ResponsiveEmoji.module.scss';
// import GraphemeSplitter from 'grapheme-splitter';

// const splitter = new GraphemeSplitter();
// console.log(splitter.splitGraphemes('🌷🎁💩😜👍🏳️‍🌈'));

const cx = classNames.bind(styles);

// Custom hue is made possible by first converting to sepia, then rotating the hue.
// Since sepia has a non-zero hue, need to correct for this
const HUE_OFFSET = 42;

export default function ResponsiveEmoji({
  emoji,
  hue,
}: {
  emoji: string;
  hue?: number;
}) {
  const hueStyle =
    hue != null && hue > -1
      ? {
          filter: `contrast(80%) sepia(100%) hue-rotate(${
            hue - HUE_OFFSET
          }deg) saturate(500%) brightness(80%) contrast(120%)`,
        }
      : {};

  return (
    <svg viewBox="0 0 100 100" className={cx('root')}>
      <text
        x="50"
        y="50"
        className={cx('')}
        style={{
          fontSize: 100,
          textAnchor: 'middle',
          dominantBaseline: 'central',
          ...hueStyle,
        }}
      >
        {emoji}
      </text>
    </svg>
  );
}
