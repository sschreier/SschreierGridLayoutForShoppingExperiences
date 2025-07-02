Shopware.Component.register('sw-cms-block-grid-md-2-2-2-2-2-2', () => import('./component'));
Shopware.Component.register('sw-cms-block-preview-grid-md-2-2-2-2-2-2', () => import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-md-2-2-2-2-2-2',
    label: 'sw-cms.blocks.grid.grid-md-2-2-2-2-2-2.label',
    category: 'text',
    component: 'sw-cms-block-grid-md-2-2-2-2-2-2',
    previewComponent: 'sw-cms-block-preview-grid-md-2-2-2-2-2-2',
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
        content4: 'text',
        content5: 'text',
        content6: 'text',
    }
});
