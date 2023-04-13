import classNames from 'classnames/bind';
import styles from './YAxis.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const cx = classNames.bind(styles);

export function YAxis({ labels }: { labels: React.ReactNode[] }) {
  return (
    <TransitionGroup className={cx('axis', 'y-axis')}>
      {labels.map((label, i) => (
        <CSSTransition
          key={i}
          timeout={500}
          classNames={{
            enter: cx('enter'),
            enterActive: cx('enter-active'),
            enterDone: cx('enter-done'),
            exit: cx('exit'),
            exitActive: cx('exit-active'),
            exitDone: cx('exit-done'),
          }}
        >
          <div key={i} className={cx('y-axis-label')}>
            <div className={cx('text')}>{label}</div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
