// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
  console.log(data);
  console.log(data.data.articles);
  const articles = data.data.articles;
  const cardsContainer = document.querySelector('.cards-container');

  articles.bootstrap.forEach(card => {
    cardsContainer.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
  })
  articles.javascript.forEach(card => {
    cardsContainer.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
  })
  articles.jquery.forEach(card => {
    cardsContainer.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
  })
  articles.node.forEach(card => {
    cardsContainer.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
  })
  articles.technology.forEach(card => {
    cardsContainer.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
  })
})
.catch(error => {
  console.log(error);
})

function createCard(articleHeadline, authorImg, nameOfAuthor) {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const authorInfo = document.createElement('div');
  const authorImgContainer = document.createElement('div');
  const authorImage = document.createElement('img');
  const authorName = document.createElement('span');

  card.appendChild(headline);
  card.appendChild(authorInfo);
  authorInfo.appendChild(authorImgContainer);
  authorImgContainer.appendChild(authorImage);
  authorInfo.appendChild(authorName);
  
  card.classList.add('card');
  headline.classList.add('headline');
  authorInfo.classList.add('author');
  authorImgContainer.classList.add('img-container');
  authorImage.src = authorImg;

  headline.textContent = articleHeadline;
  authorName.textContent = nameOfAuthor;

  return card;
  }