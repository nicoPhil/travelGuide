App = Ember.Application.create();

App.Router.map(function() {
	this.resource('guides');
	this.resource('guide',{
        path:':guide_id'
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
			id:'1',
			title: 'Chine',
			startDate:'10 oct',
			endDate:'25 oct'
		}, {
			id:'2',
			title: 'Perou',
			startDate:'22 fev',
			endDate:'10 juin'
		}];