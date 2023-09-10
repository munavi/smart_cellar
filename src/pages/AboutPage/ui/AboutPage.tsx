import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            <div>
                {t('About page')}
            </div>
            <div>
                {t('AppIntro')}
            </div>

            <div>
                {t('AppDescription')}
            </div>

            <div>
                {t('WhyUseSmartCellar')}
            </div>

            <div>
                {t('FoodWasteIssue')}
            </div>

            <div>
                {t('WhatSmartCellarOffers')}
            </div>

            <div>
                {t('TrackExpiryDates')}
            </div>

            <div>
                {t('PlanYourShopping')}
            </div>
            <div>
                {t('ReduceCarbonFootprint')}
            </div>

            <div>
                {t('AccessibilityAndFree')}
            </div>
            <div>
                {t('OpenSource')}
            </div>
            <div>
                {t('JoinUsToday')}
            </div>
        </div>
    );
};

export default AboutPage;
