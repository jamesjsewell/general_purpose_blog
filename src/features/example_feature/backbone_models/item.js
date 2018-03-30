import Backbone from "backbone";

export const Item = Backbone.Model.extend({
	urlRoot: "/api/example_route/items",
	idAttribute: "_id",
	defaults: function () {
		return {
			name: null,
			description: null
		};
	}
});

export const ItemCollection = Backbone.Collection.extend({
	comparator: function (mod) {
		return new Date(mod.get("createdAt")).getTime() * -1;
	},
	fetch: function (options) {
		
		if (options.data) {

			options.type = 'POST';
			options.url = "/api/example_route/items/filter"

		}
		else{
			options.url = "/api/example_route/items"
		}
	
		Backbone.Collection.prototype.fetch.call(this, options);
	},
	parse: function (response) {

		return response

	},
	model: Item
});