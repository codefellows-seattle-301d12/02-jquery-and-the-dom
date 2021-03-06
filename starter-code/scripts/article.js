var articles = [];

function Article (options) {
  this.title = options.title;
  // TODO: Use the js object passed in to complete the constructor function.
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);
  // TODO: Use jQuery to fill in the rest of the current template clone
  $newArticle.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  // TODO: This cloned article is no longer a template. We need to remove its class.
  return $newArticle;
};

ourLocalData.forEach(function(article) {
  articles.push(new Article(article));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});

// This function will sort articles in descending order.
ourLocalData.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});
