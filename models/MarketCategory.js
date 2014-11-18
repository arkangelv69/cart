var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * ProductCategory Model
 * ==================
 */

var MarketCategory = new keystone.List('MarketCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

MarketCategory.add({
	name: { type: String, required: true }
});

MarketCategory.relationship({ ref: 'Product', path: 'categories' });

MarketCategory.register();
