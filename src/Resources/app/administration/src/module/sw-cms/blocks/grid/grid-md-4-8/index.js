/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-preview-grid-md-4-8', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-grid-md-4-8', () => import('./component'));

/**
 * @private
 * @package buyers-experience
 */

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-md-4-8',
    label: 'sw-cms.blocks.grid.grid-md-4-8.label',
    category: 'text',
    component: 'sw-cms-block-grid-md-4-8',
    previewComponent: 'sw-cms-block-preview-grid-md-4-8',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        content1: 'text',
        content2: 'text'
    }
});
