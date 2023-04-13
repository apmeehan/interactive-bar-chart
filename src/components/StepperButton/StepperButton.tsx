import { useCallback } from 'react';
import { darken, lighten, desaturate } from 'polished';
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
  symbolCategory = 'maths',
  color = '#888',
}: {
  value: number;
  onChange: (number: number) => void;
  step?: number;
  min?: number;
  max?: number;
  symbolCategory?: SymbolCategory;
  color?: string;
}) {
  const handleIncrement = useCallback(() => {
    const newValue = value + step;
    onChange(newValue);
  }, [onChange, step, value]);

  const handleDecrement = useCallback(() => {
    const newValue = value - step;
    onChange(newValue);
  }, [onChange, step, value]);

  return (
    <div
      className={cx('root')}
      style={
        {
          '--primary-color': color,
          '--primary-color-dark': darken(0.2, desaturate(0.5, color)),
          '--primary-color-light': lighten(0.1, color),
        } as React.CSSProperties
      }
    >
      <div className={cx('button-container')}>
        <button
          type="button"
          className={cx(
            'button-container__button',
            'button-container__button--left'
          )}
          onClick={handleDecrement}
          disabled={min != null && hasMinBeenReached(min, value)}
        >
          {getDecrementButtonSymbol(symbolCategory)}
        </button>

        <button
          type="button"
          className={cx(
            'button-container__button',
            'button-container__button--right'
          )}
          onClick={handleIncrement}
          disabled={max != null && hasMaxBeenReached(max, value)}
        >
          {getIncrementButtonSymbol(symbolCategory)}
        </button>
      </div>
    </div>
  );
}

function getIncrementButtonSymbol(symbolCategory: SymbolCategory) {
  return BUTTON_SYMBOLS[symbolCategory].increment;
}

function getDecrementButtonSymbol(symbolCategory: SymbolCategory) {
  console.log('symbolCategory:', symbolCategory);
  return BUTTON_SYMBOLS[symbolCategory].decrement;
}

function hasMaxBeenReached(max: number, value: number) {
  if (max == null) {
    return false;
  }
  return value >= max;
}

function hasMinBeenReached(min: number, value: number) {
  if (min == null) {
    return false;
  }
  return value <= min;
}
