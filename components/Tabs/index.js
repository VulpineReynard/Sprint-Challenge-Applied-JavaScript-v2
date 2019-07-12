// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then (data => {
    data.data.topics.forEach(element => {
      topics.appendChild(newTab(element));
    });
  })
  .catch(error => {
    console.log(error);
  })

function newTab(tabTopic) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = tabTopic;

tab.addEventListener('click', event => {
  console.log(event.target);
  event.target.classList.add('active-tab');
})

  return tab;
}

const tabs = document.querySelectorAll('.tab');
console.log(tabs);