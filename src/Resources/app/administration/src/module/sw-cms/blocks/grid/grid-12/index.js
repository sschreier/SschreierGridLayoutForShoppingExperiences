/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-preview-grid-12', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-grid-12', () => import('./component'));

/**
 * @private
 * @package buyers-experience
 */

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-12',
    label: 'sw-cms.blocks.grid.grid-12.label',
    category: 'text',
    component: 'sw-cms-block-grid-12',
    previewComponent: 'sw-cms-block-preview-grid-12',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        content: 'text'
    }
});
