Shopware.Component.register('sw-cms-block-grid-md-6-6', () => import('./component'));
Shopware.Component.register('sw-cms-block-preview-grid-md-6-6', () => import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-md-6-6',
    label: 'sw-cms.blocks.grid.grid-md-6-6.label',
    category: 'text',
    component: 'sw-cms-block-grid-md-6-6',
    previewComponent: 'sw-cms-block-preview-grid-md-6-6',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content1: 'text',
        content2: 'text',
    }
});
