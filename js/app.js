App = Ember.Application.create();

App.Router.map(function() {
	this.resource('guides', {
		path: '/'
	});
	this.resource('guide', {
		path: ':guide_id'
	});
});

App.GuidesRoute = Ember.Route.extend({
	model: function() {
		return guides;
	}
});

App.GuideRoute = Ember.Route.extend({
	model: function(params) {
		return guides.findBy('id', params.guide_id);
	}
});


var guides = [{
	id: '1',
	title: 'Chine',
	startDate: '10 octobre',
	endDate: '25 octobre',
	steps: [{
		type: 'avion',
		fields: {
			startDate: '10 octobre',
			endDate: '11 octobre',
		}
	}, {
		type: 'train',
		fields: {
			startDate: '10 octobre',
			endDate: '11 octobre',
		},
	}]
}, {
	id: '2',
	title: 'Perou',
	startDate: '22 février',
	endDate: '10 juin'
}];