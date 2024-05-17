// Appends the contact details to the content container
export default function displayContactDetails () {
  const page = document.querySelector('#content');

  const contacUs = document.createElement('h1');
  contacUs.classList.add('contact-us');
  contacUs.textContent = 'Contact Us';

  const owlMailAddress = document.createElement('div');
  owlMailAddress.classList.add('owl-mail-address');
  owlMailAddress.innerHTML = `
    <h2>Owl Mail Address</h2>
    <p>The Three Broomsticks, Hogsmeade Village, Scotland</p>
  `;

  const flooNetworkFireplaceCode = document.createElement('div');
  flooNetworkFireplaceCode.classList.add('floo-network-fireplace-code');
  flooNetworkFireplaceCode.innerHTML = `
    <h2>Floo Network Fireplace Code</h2>
    <p>Floo Network: Diagon Alley, London</p>
  `;

  page.append(contacUs, owlMailAddress, flooNetworkFireplaceCode);
}
