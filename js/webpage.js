var stack = [
  {"tech":"HTML5", "svg":"html5", "desc":"", "state":2, "display":true},
  {"tech":"JavaScript", "svg":"js", "desc":"", "state":2, "display":true},
  {"tech":"CSS3", "svg":"css3", "desc":"", "state":2, "display":true},
  {"tech":"Angular", "svg":"ng", "desc":"", "state":1, "display":true},
  {"tech":"Material Design", "svg":"md", "desc":"", "state":0, "display":true},
  {"tech":"PHP", "svg":"php", "desc":"", "state":2, "display":true},
  {"tech":"MySQL", "svg":"mysql", "desc":"", "state":2, "display":true},
  {"tech":"Python", "svg":"python", "desc":"", "state":1, "display":true},
  {"tech":"Java", "svg":"java", "desc":"", "state":0, "display":true},
  {"tech":"D3", "svg":"d3", "desc":"", "state":0, "display":true},
  {"tech":"Git", "svg":"git", "desc":"", "state":2, "display":true},
  {"tech":"cpp", "svg":"cpp", "desc":"", "state":1, "display":true},

  {"tech":"Laravel", "svg":"laravel", "desc":"", "state":2, "display":true},
  {"tech":"React", "svg":"react", "desc":"", "state":0, "display":true},
  {"tech":"Apache", "svg":"apache", "desc":"", "state":0, "display":true},

  {"tech":"Sass", "svg":"sass", "desc":"", "state":1, "display":true},
];

stack.sort(compareValues('state', 'desc'));

for (var i = 0; i < stack.length; i++) {
    var object = stack[i];
    var classes = '';
    console.log(object.tech + ',' + object.svg);
    switch (object.state) {
      case 2:
        classes += ' toolkit';
        break;
      case 1:
        classes += ' focussed';
        break;
      default:
        classes += ' interest';
    }
    var logo = '<span class="logo'+classes+'"><img src="assets/img/logos/'+object.svg+'.svg" alt="'+object.tech+'"></span>';
    document.getElementById("logoSection").innerHTML += logo;
}

// function for dynamic sorting
function compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
        return 0;
    }

    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}
