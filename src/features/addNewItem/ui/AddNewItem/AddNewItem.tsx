import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Fab, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import cls from './AddNewItem.module.scss';

interface AddNewItemProps {
    className?: string,
    onShowModal: () => void;

}

export const AddNewItem = memo((props: AddNewItemProps) => {
    const { t } = useTranslation();
    const { className, onShowModal } = props;

    return (
        <div className={classNames(cls.AddNewItem, {}, [className])}>
            <ListItem className={cls.addBtn}>
                <ListItemText>{t('Items')}</ListItemText>
                <Fab color="primary" aria-label="add" size="small" onClick={onShowModal}>
                    <AddIcon />
                </Fab>
            </ListItem>
        </div>
    );
});
