AutoForm.hooks({
  insertProject:{
    onSuccess: function(operation, result, template){
      Router.go('list_of_projects')
    }
  },
  onError: function(formType, error){
    console.log(error);
  },
  // updateClub:{
  //   onSuccess: function(operation, result, template){
  //     Router.go('DashboardContent');
  //     sAlert.success('You have successfully created you profile')
  //   }
  // },
  // onError: function(formType, error){
  //   console.log(error)
  // },
  // updateClubAllData:{
  //   onSuccess: function(operation, result, template){
  //     Router.go('/welcome/dashboard');
  //     sAlert.success('You have sucessfully updated your profile on NextGenius ');
  //   }
  // },
  // onError: function(formType, error){
  //   console.log(error)
  // }

})
