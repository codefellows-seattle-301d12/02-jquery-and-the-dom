var articles = [];

function Article (options) {
  this.title = options.title;

  // TODO: Use the js object passed in to complete the constructor function.
  this.category = options.category;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);

  // TODO: Use jQuery to fill in the rest of the current template clone
  $newArticle.find('h1').text(this.title);
  $newArticle.find('address a').text(this.author);
  $newArticle.find('address a').attr('href', this.authorUrl);
  $newArticle.find('.article-body').html(this.body);

  $newArticle.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  // TODO: This cloned article is no longer a template. We need to remove its class.
  $('article').removeClass('template');
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
