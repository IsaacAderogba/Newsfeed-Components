// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.expandButton.textContent = this.expandButton.textContent === 'Click to Expand' ? 'Click to Close' : 'Click to Expand';
    
    if (this.domElement.classList.contains('article-open')) {
      TweenMax.from('.article-open', 2, { height: 400 });
      TweenMax.to('.article-open', 2, { height: 50 });
    } else {
      this.domElement.classList.toggle('article-open');
      TweenMax.from('.article-open', 2, { height: 0 });
      TweenMax.to('.article-open', 2, { height: 400 });
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/




// add articles
const articleData = [
  {
    heading: 'Big',
    date: 'Nov 5th, 2017',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'Mighty',
    date: 'Nov 5th, 2017',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'Sheep',
    date: 'Nov 5th, 2017',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

// append to articles - Component Constructor Stretch
class ArticleGenerator {
  constructor(data) {
    // Create article structure
    let pageArticles = document.querySelector('.articles');
    this.articleDiv = document.createElement('div');
    this.articleDiv.classList.add('article');
    pageArticles.appendChild(this.articleDiv);

    // pass in key article data
    this.data = data;

    // call helper methods
    this.appendHeading();
    this.appendDate();
    this.appendParagraphs();
    this.appendButton();
  }

  appendHeading() {
    const heading = document.createElement('h2');
    heading.textContent = this.data.heading;
    this.articleDiv.append(heading);
  }

  appendDate(){
    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = this.data.date;
    this.articleDiv.append(date);
  }

  appendParagraphs() {
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = this.data.paragraph1;
    this.articleDiv.append(paragraph1);

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = this.data.paragraph2;
    this.articleDiv.append(paragraph2);

    const paragraph3 = document.createElement('p');
    paragraph3.textContent = this.data.paragraph3;
    this.articleDiv.append(paragraph3);
  }

  appendButton() {
    const span = document.createElement('span');
    span.classList.add('expandButton');
    this.articleDiv.append(span);
  }
}

new ArticleGenerator(articleData[0]);
new ArticleGenerator(articleData[1]);
new ArticleGenerator(articleData[2]);

class CloseButton {
  constructor(article) {
    this.article = article;

    this.appendCloseButton();
  }

  appendCloseButton() {
    const span = document.createElement('span');
    span.textContent = 'Close';
    span.classList.add('closeButton');
    span.setAttribute('style', 'position: absolute; top: 7%; right: 2%; font-size: 12px; color: grey; cursor: pointer; transform: translate(-50%); background-color: white;');
    span.addEventListener('click', () => {
      this.article.setAttribute('style', 'display: none;');
    })
    this.article.prepend(span);
  }
}

let articles = document.querySelectorAll('.article');

articles.forEach(article => {
  new Article(article);
  new CloseButton(article);
});



