Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({

  projectName: {
    type: String,
    label: "Name of Project"
  },
  projectDetails: {
    type: String,
    label: "Please provide some details about the project",
    optional: true
  },

  donationTarget: {
    type: String,
    label: "Target of the Donation"
  },
picture: { //player picture
  type: String,
  optional:true,
  autoform: {
    afFieldInput: {
      type: 'fileUpload',
      collection: 'Images',
      accept: 'image/*',
      label: 'Please Choose Picture'
    }
  }
},
// projectOwner: {
//   type: String,
//   autoform: {
//     omit: true
//   },
//   autoValue: function(){
//     if (this.isInsert){
//       return Meteor.userId();
//     }
//   }
// }
}));
