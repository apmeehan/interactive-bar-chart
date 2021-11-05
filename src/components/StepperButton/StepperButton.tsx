import classNames from 'classnames/bind';
import styles from './StepperButton.module.scss';
import { SymbolCategory, BUTTON_SYMBOLS } from './constants';

const cx = classNames.bind(styles);

export default function StepperButton({
  value,
  onChange,
  step = 1,
  min = 0,
  max,
  symbolCategory = SymbolCategory.MATH,
}: {
  value: number;
  onChange: (number: number) => void;
  step?: number;
  min?: number;
  max?: number;
  symbolCategory?: SymbolCategory;
}) {
  const hasMaxBeenReached = () => {
    if (max == null) return false;

    return value >= max;
  };

  const hasMinBeenReached = () => {
    if (min == null) return false;

    return value <= min;
  };

  const handleIncrement = () => {
    const newValue = value + step;
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = value - step;
    onChange(newValue);
  };

  const getIncrementButtonSymbol = () =>
    BUTTON_SYMBOLS[symbolCategory].increment;

  const getDecrementButtonSymbol = () =>
    BUTTON_SYMBOLS[symbolCategory].decrement;

  return (
    <div className={cx('root')}>
      <div className={cx('button-container')}>
        <button
          type="button"
          className={cx(
            'button-container__button',
            'button-container__button--left',
          )}
          onClick={handleDecrement}
          disabled={hasMinBeenReached()}
        >
          {getDecrementButtonSymbol()}
        </button>

        <button
          type="button"
          className={cx(
            'button-container__button',
            'button-container__button--right',
          )}
          onClick={handleIncrement}
          disabled={hasMaxBeenReached()}
        >
          {getIncrementButtonSymbol()}
        </button>
      </div>
    </div>
  );
}
