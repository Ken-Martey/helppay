
Router.configure({
  layoutTemplate: "masterLayout",
  loadingTemplate: "loading",
  notFoundTemplate: '404'

});


Router.route('static_index', {
  path: "/",
  where: 'server',
  action: function() {
    var contents;
    contents = Assets.getText('index.html');
    this.response.setHeader("Content-Type", "text/html");
    return this.response.end(contents);
  }
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
  fastRender: true
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
  redirect: function (){

  },
});
AccountsTemplates.configureRoute('signUp', {
  name: 'atSignUp',
  path: '/sign-up',
  template: 'signUp',
  layoutTemplate: 'masterLayout',
  fastRender: true,
  redirect: function () {

  },
});
