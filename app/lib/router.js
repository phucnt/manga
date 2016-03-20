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
