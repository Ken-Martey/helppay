
Router.configure({
  layoutTemplate: "masterLayout",
  loadingTemplate: "loading",
  notFoundTemplate: '404'

});

Router.route('/index', function(){
  this.render("index");
},{

  name:"index",
  layoutTemplate:"sidebar",
  fastRender: true
})

Router.route('/list-of-projects', function(){
  this.render("list_of_projects");
},{

  name:"list_of_projects",
  layoutTemplate:"sidebar",
  fastRender: true,
  data: function () {
    return {
      listOfProjects: Projects.find().fetch()
    }
  }
})
Router.route('/project-detail/:_id', function(){
  this.render("project_details");
},{

  name:"project_details",
  layoutTemplate:"sidebar",
  fastRender: true,
  data: function () {
    var _id = this.params._id;
    return {
      projectDetails: Projects.findOne(_id)
    }
  }
})
Router.route('/add-project', function(){
  this.render("new_project");
},{

  name:"new_project",
  layoutTemplate:"sidebar",
  fastRender: true
})



/*
ADVANCE CONFIGURATION FOR ACCOUNTS ROUTES.
*/
AccountsTemplates.configureRoute('signIn', {
  name: 'atSignIn',
  path: '/sign-in',
  template: 'signIn',
  layoutTemplate: 'masterLayout',
  fastRender: true,
  redirect: "/index"
});
AccountsTemplates.configureRoute('signUp', {
  name: 'atSignUp',
  path: '/sign-up',
  template: 'signUp',
  layoutTemplate: 'masterLayout',
  fastRender: true,
  redirect: "/index"
});
