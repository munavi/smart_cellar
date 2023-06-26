import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
    Button, ButtonGroup, Fab, ListItem, ListItemText, Stack, TextField,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import cls from './ItemsPage.module.scss';

interface ItemsPageProps {
    className?: string,

}

const ItemsPage = ({ className }: ItemsPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ItemsPage, {}, [className])}>
            {t('Itemspage')}

            <ListItem className={cls.addBtn}>
                <ListItemText>{t('Items')}</ListItemText>
                <Fab color="primary" aria-label="add" size="small">
                    <AddIcon />
                </Fab>
            </ListItem>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <ListItem className={cls.listItem}>
                    <ListItemText className={cls.listItemText}>{t('Item name')}</ListItemText>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Item location')}</ListItemText>
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                        size="small"
                        className={cls.btnGroup}
                    >
                        <Button size="small" variant="contained"><RemoveIcon /></Button>
                        <TextField
                            id="outlined-basic"
                            variant="filled"
                            className={cls.txtFld}
                        />
                        <Button size="small" variant="contained"><AddIcon /></Button>
                    </ButtonGroup>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                {' '}
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                {' '}
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
                <ListItem className={cls.listItem}>
                    <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                    <ListItemText className={cls.listItemText}>{t('Itemspage')}</ListItemText>
                    <Button size="small" color="error" variant="contained">{t('DELETE')}</Button>
                </ListItem>
            </Stack>
        </div>
    );
};

export default memo(ItemsPage);
