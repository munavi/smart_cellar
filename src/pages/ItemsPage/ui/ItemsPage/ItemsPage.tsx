import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button, ListItem, ListItemText, Stack, TextField,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Counter } from 'entities/Counter';
import React, { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { DatePicker } from 'shared/ui/DatePicker/DatePicker';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { AddNewProduct } from 'features/addNewProduct';
import { CategorySelect } from 'entities/Category';
import { StorageLocationSelect } from 'entities/StorageLocation';
import cls from './ItemsPage.module.scss';

interface ItemsPageProps {
    className?: string,

}

const ItemsPage = ({ className }: ItemsPageProps) => {
    const { t } = useTranslation();
    const items = [{ name: 'Item1' }, { name: 'Item2' }, { name: 'Item3' },
        { name: 'Item4' }, { name: 'Item5' }, { name: 'Item6' }, { name: 'Item7' },
        { name: 'Item1' }, { name: 'Item2' }, { name: 'Item3' },
        { name: 'Item4' }, { name: 'Item5' }, { name: 'Item6' }, { name: 'Item7' }];
    const [isModal, setIsModal] = useState(false);
    const onShowModal = useCallback(() => {
        setIsModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setIsModal(false);
    }, []);

    // Array item should be have a such structure
    // {name: string, count: number, location: Enum value as string, date: string}
    // Product category shoul be use as a filter option

    return (
        <div className={classNames(cls.ItemsPage, {}, [className])}>
            {t('Itemspage')}
            <AddNewProduct onShowModal={onShowModal} />
            <Modal
                isOpen={isModal}
                onClose={onCloseModal}
            >
                {' '}
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('Item name')}
                    align={TextAlign.CENTER}
                />
                <TextField />
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('change a date')}
                    align={TextAlign.CENTER}
                />
                <DatePicker />
                <StorageLocationSelect />
                <CategorySelect />

            </Modal>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                {
                    items.map((item) => (
                        <ListItem className={cls.listItem}>
                            <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                            <ListItemText className={cls.listItemText}>
                                {t(item.name)}
                            </ListItemText>
                            <Counter className={cls.listItem} />
                            <ListItemText className={cls.listItemText}>
                                {t('Item location')}
                            </ListItemText>
                            {/* eslint-disable-next-line i18next/no-literal-string */}
                            <ListItemText className={cls.listItemText}>
                                2023 - 11 - 11
                            </ListItemText>
                            <Button size="small" color="error" variant="contained">
                                {t('DELETE')}
                            </Button>
                        </ListItem>
                    ))
                }
            </Stack>
        </div>
    );
};

export default ItemsPage;
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Item name')}</ListItemText> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Item location')}</ListItemText> */ }
// { /*    /!* <ButtonGroup *!/ */ }
// { /*    /!*    variant="contained" *!/ */ }
// { /*    /!*    aria-label="outlined primary button group" *!/ */ }
// { /*    /!*    size="small" *!/ */ }
// { /*    /!*    className={cls.btnGroup} *!/ */ }
// { /*    /!* > *!/ */ }
// { /*    /!*    <Button size="small" variant="contained"><RemoveIcon /></Button> *!/ */ }
// { /*    /!*    <TextField *!/ */ }
// { /*    /!*        id="outlined-basic" *!/ */ }
// { /*    /!*        variant="filled" *!/ */ }
// { /*    /!*        className={cls.txtFld} *!/ */ }
// { /*    /!*        size="medium" *!/ */ }
// { /*    /!*    /> *!/ */ }
// { /*    /!*    <Button size="small" variant="contained"><AddIcon /></Button> *!/ */ }
// { /*    /!* </ButtonGroup> *!/ */ }
// { /*    <Counter className={cls.listItem} /> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* {' '} */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* {' '} */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
// { /* <ListItem className={cls.listItem}> */ }
// { /*    <Button size="small" variant="contained"><EditOutlinedIcon /></Button> */ }
// { /*    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText> */ }
// { /*    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button> */ }
// { /* </ListItem> */ }
