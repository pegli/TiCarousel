var base = Ti.UI.createWindow();

var nav = Ti.UI.iOS.createNavigationWindow({
  window: base
});


var data = [
  { title: 'Transform Types', module: require('./types') },
  { title: 'Scrolling', module: require('./scroll') },
  { title: 'Transform Options', module: require('./txopts') },
  { title: 'Viewpoint', module: require('./viewcenter') },
  { title: 'Reload Test', module: require('./reload') },
  { title: 'Custom Transform', module: require('./custom') },
  { title: 'Lots of Views', module: require('./lotsaviews') },
];

var table = Ti.UI.createTableView({
  data: data
});

table.addEventListener('click', function(e) {
  nav.openWindow(e.row.module.createWindow());
});

base.add(table);

nav.open();
