var app = new Vue({
    el: '#main',
    data: {
      message: 'Welcome to I WANT FLOWERS where the freshness of our flowers fills you with happiness and serenity. We aim to deliver with brightening your day, so go ahead and express your love, we can do all through the message of such beauty a flower can bring. Have a look below where you can search an arrange of beautiful flowers.'
    }
  })

  new Vue({
    el: '...',
    data: {
      choosetheflower: ''
    }
  })

  var locationlist = new Vue({
    el: '#list',
    data: {
      items: [
        { message: 'I Want Flowers Sydney(8 Gerrard St 0000-000-000)' },
        { message: 'I Want Flowers Melbourne(25 Reina St 1111-111-111)' },
        { message: 'I Want Flowers Hobart(9 Torres St 2222-222-222)' },
        { message: 'I Want Flowers Perth(37 Skrtel St 3333-333-333)' },
        { message: 'I Want Flowers Darwin(12 Laura St 6666-555-777)' }
      ]
    }
  })