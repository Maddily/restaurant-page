// Appends the menu to the content container
export default function displayMenu () {
  const page = document.querySelector('#content');

  const menuHeading = document.createElement('h1');
  menuHeading.classList.add('menu-heading');
  menuHeading.textContent = 'Menu';

  const beverages = document.createElement('div');
  beverages.classList.add('beverages-container');
  beverages.innerHTML = `
    <h2 class='menu-section-heading'>Beverages</h2>
    <div class='menu-items'>
      <div class='menu-item'>
        <div>
          <h3>Butterbeer</h3>
          <span class='butterbeer-icon'></span>
        </div>
        <p class='description'>A frothy, sweet concoction brewed to perfection.</p>
        <p class='price'>5 Galleons</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Pumpkin Juice</h3>
          <span class='pumpkin-juice-icon'></span>
        </div>
        <p class='description'>Freshly squeezed pumpkin with a hint of spice.</p>
        <p class='price'>3 Sickles</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Phoenix Fizz</h3>
          <span class='phoenix-fizz-icon'></span>
        </div>
        <p class='description'>A sparkling potion with flavors of citrus and cinnamon, reminiscent of the mythical phoenix.</p>
        <p class='price'>4 Sickles</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Gillywater</h3>
          <span class='gillywater-icon'></span>
        </div>
        <p class='description'>Pure and refreshing water from the magical springs of Gillyweed.</p>
        <p class='price'>2 Sickles</p>
      </div>
    </div>
  `;

  const sides = document.createElement('div');
  sides.classList.add('sides-container');
  sides.innerHTML = `
    <h2 class='menu-section-heading'>Sides</h2>
    <div class='menu-items'>
      <div class='menu-item'>
        <div>
          <h3>Wizarding Wedges</h3>
          <span class='wizarding-wedges-icon'></span>
        </div>
        <p class='description'>Crispy potato wedges seasoned with magical herbs.</p>
        <p class='price'>4 Sickles</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Dragon Scale Chips</h3>
          <span class='dragon-scale-chips-icon'></span>
        </div>
        <p class='description'>Crunchy chips made from dragon scales (safe for consumption!).</p>
        <p class='price'>3 Sickles</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Floo Powder Fries</h3>
          <span class='floo-powder-fries-icon'></span>
        </div>
        <p class='description'>Thin-cut fries dusted with floo powder for an extra magical touch.</p>
        <p class='price'>3 Sickles</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Vegetarian Veela Salad</h3>
          <span class='vegetarian-veela-salad-icon'></span>
        </div>
        <p class='description'>A refreshing salad filled with crisp greens, enchanted fruits, and topped with a light vinaigrette.</p>
        <p class='price'>6 Sickles</p>
      </div>
    </div>
  `;

  const mainDishes = document.createElement('div');
  mainDishes.classList.add('main-dishes-container');
  mainDishes.innerHTML = `
    <h2 class='menu-section-heading'>Main Dishes</h2>
    <div class='menu-items'>
      <div class='menu-item'>
        <div>
          <h3>Hagrid's Hearty Stew</h3>
          <span class='hagrid-hearty-stew-icon'></span>
        </div>
        <p class='description'>A hearty stew filled with chunks of tender meat and root vegetables.</p>
        <p class='price'>8 Galleons</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Ministry Meat Pie</h3>
          <span class='ministry-meat-pie-icon'></span>
        </div>
        <p class='description'>A savory pie filled with minced meat and secret spices.</p>
        <p class='price'>6 Galleons</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Magical Macaroni & Cheese</h3>
          <span class='magical-macaroni-and-cheese-icon'></span>
        </div>
        <p class='description'>Creamy macaroni and cheese with a magical twist.</p>
        <p class='price'>5 Galleons</p>
      </div>
      <div class='menu-item'>
        <div>
          <h3>Vegetarian Veela Curry</h3>
          <span class='vegetarian-veela-curry-icon'></span>
        </div>
        <p class='description'>A spicy curry filled with vegetables and flavored with veela tears (100% consensual).</p>
        <p class='price'>7 Sickles</p>
      </div>
    </div>
  `;

  page.append(menuHeading, beverages, sides, mainDishes);
}
