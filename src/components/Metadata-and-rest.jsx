// WORK IN PROGRESS, DO NOT USE //


/*
import React from 'react';
import Render from 'react-dom';
import Helmet from 'react-helmet';
import { func, shape, string, object, array } from 'prop-types';

const getDefault = {
    title: "Devan's Website", 
    description: "Website for myself, Devan!",
    keywords: "Devan, Website",
};

export const getPageMetadata = metaData => {
    const { title, description, keywords } = props;
    const defaultData = getDefault();
    return {
        title: title || this.getDefault.title,
        description: description || defaultData?.description,
        keywords: keywords || defaultData?.keywords,
    };
};

const MetaTags = props => {
    const { metaData } = props;
    const meta = getPageMetadata(metaData);
    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
        </Helmet>
    );
};

export default MetaTags;

*/