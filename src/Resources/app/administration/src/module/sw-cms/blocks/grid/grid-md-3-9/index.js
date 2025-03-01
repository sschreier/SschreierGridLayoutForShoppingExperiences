/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-preview-grid-md-3-9', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-grid-md-3-9', () => import('./component'));

/**
 * @private
 * @package buyers-experience
 */

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-md-3-9',
    label: 'sw-cms.blocks.grid.grid-md-3-9.label',
    category: 'text',
    component: 'sw-cms-block-grid-md-3-9',
    previewComponent: 'sw-cms-block-preview-grid-md-3-9',
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
