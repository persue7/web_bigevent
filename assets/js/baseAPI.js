$.ajaxPrefilter(function(options) {
    // Modify options, control originalOptions, store jqXHR, etc 
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url);
});