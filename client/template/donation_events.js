Template.contribute_modal.events({
	'click #donateNow': function () {
		Meteor.call('getTokenMessage', function (error, result) {});
		Router.go('list_of_projects')
		// $('#myModal').modal('hide');
		// $('#tokenModal').modal('show');
	}

});

