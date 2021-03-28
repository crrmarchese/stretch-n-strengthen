module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },

  concat: function(...args) {
    console.log(args);
    return args.slice(0,-1).join('');
  },

  muscEval: function(image_main_url) {
    if (
      image_main_url === '/static/images/muscles/main/muscle-1.svg' ||
      image_main_url === '/static/images/muscles/main/muscle-2.svg' ||
      image_main_url === '/static/images/muscles/main/muscle-13.svg' ||
      image_main_url === '/static/images/muscles/main/muscle-14.svg' ||
      image_main_url === '/static/images/muscles/main/muscle-4.svg' ||
      image_main_url === '/static/images/muscles/main/muscle-10.svg' ||
      image_main_url === '/static/images/muscles/main/muscle-6.svg' ||
      image_main_url === '/static/images/muscles/main/muscle-3.svg'
    ) {
      return 'https://wger.de/static/images/muscles/muscular_system_front.svg';
    } else {
      return 'https://wger.de/static/images/muscles/muscular_system_back.svg';
    }
  }

};
