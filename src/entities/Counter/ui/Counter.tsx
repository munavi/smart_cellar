import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from '@mui/material';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'shared/ui/Counter/Counter.module.scss';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation('main');

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div
            className={classNames(cls.Counter, {}, [])}
        >
            {/* <h1 data-testid="value-title">{counterValue}</h1> */}
            {/* <Button */}
            {/*    onClick={increment} */}
            {/*    data-testid="increment-btn" */}
            {/* > */}
            {/*    {t('increment')} */}
            {/* </Button> */}
            {/* <Button */}
            {/*    data-testid="decrement-btn" */}
            {/*    onClick={decrement} */}
            {/* > */}
            {/*    {t('decrement')} */}
            {/* </Button> */}
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                className={cls.btnGroup}
            >
                <Button onClick={increment}>+</Button>
                <Button disabled>{counterValue}</Button>
                <Button onClick={decrement}>-</Button>
            </ButtonGroup>
        </div>
    );
};
