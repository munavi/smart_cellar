import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'entities/Counter/ui/Counter.module.scss';
import { productDetailsActions } from 'entities/Product/model/slice/productDetailsSlice';
import {
    updateProductById,
} from 'entities/Product/model/services/updateProductById/updateProductById';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
    quantity: number;
    productId: number;
}

export const Counter = ({ className, quantity, productId }: CounterProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation('main');

    const increment = () => {
        dispatch(productDetailsActions.updateProductById({
            productId,
            updatedData: {
                quantity: quantity + 1,
            },
        }));
        dispatch(updateProductById(productId));
    };

    const decrement = () => {
        if (quantity > 0) {
            dispatch(productDetailsActions.updateProductById({
                productId,
                updatedData: {
                    quantity: quantity - 1,
                },
            }));
            dispatch(updateProductById(productId));
        }
    };

    return (
        <div
            className={classNames(cls.Counter, {}, [className])}
        >
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                className={cls.btnGroup}
            >
                <Button onClick={increment}>+</Button>
                <Button
                    data-testid="value-title"
                    disabled
                    className={cls.btnPlacerHolder}
                >
                    { quantity }
                </Button>
                <Button onClick={decrement}>-</Button>
            </ButtonGroup>
        </div>
    );
};
