import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.AboutPage, {}, [])}>
            <div className={cls.section}>
                <h2>{t('About page')}</h2>
                <h2>{t('AppIntro')}</h2>
                <h3>{t('AppDescription')}</h3>
                <h2>{t('WhyUseSmartCellar')}</h2>
                <p>{t('FoodWasteIssue')}</p>
                <h2>{t('WhatSmartCellarOffers')}</h2>
                <p>{t('TrackExpiryDates')}</p>
                <p>{t('PlanYourShopping')}</p>
                <p>{t('ReduceCarbonFootprint')}</p>
                <h2>{t('AccessibilityAndFree')}</h2>
                <p>{t('OpenSource')}</p>
                <p>{t('JoinUsToday')}</p>
            </div>
        </div>
    );
};

export default AboutPage;
