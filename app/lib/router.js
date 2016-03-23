FlowRouter.route('/home', {
  name: 'home',
  action() {
    console.info('test');
  }
})

FlowRouter.route('/', {
  name: 'homepage',
  action(params, queryParams) {
    BlazeLayout.render('mainLayout', {yield: 'home'})
  }
})

FlowRouter.route('/sign-in', {
  name: 'sign-in',
  action(params, queryParams) {
    BlazeLayout.render('blankLayout', {yield: 'signIn'})
  }
})

FlowRouter.route('/sign-up', {
  name: 'sign-up',

})

FlowRouter.route('/catalogue', {
  name: 'catalogue',
  action(params, queryParams) {
    BlazeLayout.render('contentLayout', {yield: 'catalogue'});
  }
})
