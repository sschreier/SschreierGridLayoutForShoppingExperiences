# An extension to providing additional cms blocks with different column arrangements within a layout for Shopware 6

The extension _provides additional cms blocks_ with different column arrangements _under the block category **Text**_ within a layout. 

The cms blocks are _based on the 12-column grid layout of **Bootstrap**_. 

As soon as the cms block has been placed in the layout, the _respective cms element with the type **Text** can be replaced_ if required as usual _using the corresponding icon_.

## Additional cms blocks
- One column
- Two columns from 768px
- Two columns from 768px (25%, 75%)
- Two columns from 768px (75%, 25%)
- Two columns from 768px (33.3%, 66.3%)
- Two columns from 768px (66.6%, 33.3%)
- Three columns from 768px
- Three columns from 768px (25%, 50%, 25%)
- Three columns from 768px (16.6%, 66.6%, 16.6%)
- Four columns from 768px
- Six columns from 768px

## How to install the extension
### via zip and console (recommended)
1. Download the latest _SschreierGridLayoutForShoppingExperiences-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierGridLayoutForShoppingExperiences_.
3. Move the folder to the project folder _custom/plugins/_ .
4. Connect to the console via ssh:

```
bin/console plugin:refresh
bin/console plugin:install --activate SschreierGridLayoutForShoppingExperiences
```

### via composer
1. Add the repository URL to the composer.json of the project
```
"repositories": [
    ...,
    {
        "type": "vcs",
        "url": "https://github.com/sschreier/SschreierGridLayoutForShoppingExperiences"
    }
],
```

2. Connect to the console via ssh and install the plugin via the command
```
composer require sschreier/sschreiergridlayoutforshoppingexperiences
bin/console plugin:refresh
bin/console plugin:install --activate SschreierGridLayoutForShoppingExperiences
```

### via https://packagist.org
 - Connect to the console via ssh and install the plugin via the command

 ```
composer require sschreier/sschreiergridlayoutforshoppingexperiences
bin/console plugin:refresh
bin/console plugin:install --activate SschreierGridLayoutForShoppingExperiences
```

### via zip upload
1. Download the latest _SschreierGridLayoutForShoppingExperiences-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierGridLayoutForShoppingExperiences_.
3. Zip the folder to _SschreierGridLayoutForShoppingExperiences.zip_.
4. Upload the zip in the Shopware Administration.
5. Install & Activate the extension.

#### extension update (zip)
1. Download the latest _SschreierGridLayoutForShoppingExperiences-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierGridLayoutForShoppingExperiences_.
3. Zip the folder to _SschreierGridLayoutForShoppingExperiences.zip_.
4. Upload the zip in the Shopware Administration.
5. Update the extension.

## Images

###  additional cms blocks part 1

![additional cms blocks part 1](https://www.sebastianschreier.de/plugins/SschreierGridLayoutForShoppingExperiences/SschreierGridLayoutForShoppingExperiences-Image1.jpg)

###  additional cms blocks part 2

![additional cms blocks part 2](https://www.sebastianschreier.de/plugins/SschreierGridLayoutForShoppingExperiences/SschreierGridLayoutForShoppingExperiences-Image2.jpg)

###  additional cms blocks part 3

![additional cms blocks part 3](https://www.sebastianschreier.de/plugins/SschreierGridLayoutForShoppingExperiences/SschreierGridLayoutForShoppingExperiences-Image3.jpg)

###  additional cms blocks part 4

![additional cms blocks part 4](https://www.sebastianschreier.de/plugins/SschreierGridLayoutForShoppingExperiences/SschreierGridLayoutForShoppingExperiences-Image4.jpg)
