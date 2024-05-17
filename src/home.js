// Appends Homepage elements to the content container
export default function displayHomePage () {
  const page = document.querySelector('#content');

  // Add a name for the restaurant
  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'The Three Broomsticks';

  const customerReview = document.createElement('div');
  customerReview.classList.add('review');
  customerReview.innerHTML = '<p>A traveler\'s respite, The Three Broomsticks is where warmth embraces every corner and stories intertwine like ivy on ancient walls. Here, under the watchful gaze of the stars, strangers become friends, and laughter echoes through the night.</p><p class="reviewer">Eleanor Thistledown</p>';

  const hours = document.createElement('div');
  hours.classList.add('hours');
  hours.innerHTML = '<h2>Hours</h2><p>Open Daily: 11:00 AM - 11:00 PM</p>';

  const location = document.createElement('div');
  location.classList.add('location');
  location.innerHTML = '<h2>Location</h2><p>Hogsmeade Village, Scotland</p>';

  page.append(restaurantName, customerReview, hours, location);
}
