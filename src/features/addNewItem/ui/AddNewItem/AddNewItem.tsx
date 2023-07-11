import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Fab, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addNewItemActions, addNewItemReducer } from '../../model/slices/addNewItemSlice';
import { getAddNewItemError, getAddNewItemText } from '../../model/selectors/addNewItemSelectors';
import cls from './AddNewItem.module.scss';

export interface AddNewItemProps {
    className?: string,
    onShowModal: () => void;
}

const reducers: ReducersList = {
    addNewItem: addNewItemReducer,
};

const AddNewItem = memo((props: AddNewItemProps) => {
    const { t } = useTranslation();
    const { className, onShowModal } = props;
    const text = useSelector(getAddNewItemText);
    const error = useSelector(getAddNewItemError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewItemActions.setText(value));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddNewItem, {}, [className])}>
                <ListItem className={cls.addBtn}>
                    <ListItemText>{t('Items')}</ListItemText>
                    <Fab color="primary" aria-label="add" size="small" onClick={onShowModal}>
                        <AddIcon />
                    </Fab>
                </ListItem>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddNewItem;
