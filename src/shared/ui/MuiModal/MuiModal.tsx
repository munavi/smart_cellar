import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from '@mui/material';
import { useState } from 'react';
import cls from './MuiModal.module.scss';

interface MuiModalProps {
    className?: string,

}

export const MuiModal = ({ className }: MuiModalProps) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={classNames(cls.MuiModal, {}, [className])}>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div />
            </Modal>
        </div>
    );
};
