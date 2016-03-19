Contributors = new Mongo.Collection('contributors');
Contributors.attachSchema(new SimpleSchema({
	phone_number:{
		type: String,
		max:10,
		label: 'Enter phone number'
	}, 
	name: {
		type: String,
		label: 'Enter the amount you want to donate'
	}
}))