var articles = [];

function Article (options) {
  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
  // DONE: Use the js object passed in to complete the constructor function.
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category, this.category');
  $newArticle.find('h1').text(this.title);
  // DONE: Use jQuery to fill in the rest of the current template clone.
  $newArticle.find('a').text(this.author); //fill this in
  $newArticle.find('a').attr('href', this.authorUrl);
  $newArticle.find('time').attr('datetime', this.publishedOn);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  // DONE: This cloned article is no longer a template. We need to remove its class.
  $newArticle.removeClass('template');
  return $newArticle;
};

ourLocalData.forEach(function(article) {
  articles.push(new Article(article));
});

// This function will sort articles in descending oder.
ourLocalData.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
