import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import {
    Avatar, Card, CardContent, Stack, SvgIcon, Typography,
} from '@mui/material';
import cls from './OverviewCard.module.scss';

interface OverviewCardProps {
    className?: string;
    label?: string;
    value?: string;
    sx?: React.CSSProperties;
}

export const OverviewCard = memo((props: OverviewCardProps) => {
    const { t } = useTranslation('main');
    const {
        className, label, value, sx,
    } = props;

    return (
        <div className={classNames(cls.OverviewCard, {}, [className])}>
            <Card sx={sx}>
                <CardContent>
                    <Stack
                        alignItems="flex-start"
                        direction="row"
                        justifyContent="space-between"
                        spacing={3}
                    >
                        <Stack spacing={1}>
                            <Typography color="text.secondary" variant="overline">
                                {label}
                            </Typography>
                            <Typography variant="h4">{value}</Typography>
                        </Stack>
                        <Avatar sx={{ backgroundColor: 'primary.main', height: 56, width: 56 }}>
                            <SvgIcon>
                                <ShoppingCartCheckoutIcon />
                            </SvgIcon>
                        </Avatar>
                    </Stack>
                </CardContent>
            </Card>
        </div>
    );
});
