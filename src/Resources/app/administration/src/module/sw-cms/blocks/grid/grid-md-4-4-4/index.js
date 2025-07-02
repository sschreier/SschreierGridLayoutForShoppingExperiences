Shopware.Component.register('sw-cms-block-grid-md-4-4-4', () => import('./component'));
Shopware.Component.register('sw-cms-block-preview-grid-md-4-4-4', () => import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-md-4-4-4',
    label: 'sw-cms.blocks.grid.grid-md-4-4-4.label',
    category: 'text',
    component: 'sw-cms-block-grid-md-4-4-4',
    previewComponent: 'sw-cms-block-preview-grid-md-4-4-4',
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
        content3: 'text',
    }
});
