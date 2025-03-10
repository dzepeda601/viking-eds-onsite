export default function decorate(block) {
  block.querySelector(':scope > div:first-of-type').classList.add('title');

  const div = document.createElement('div');
  div.classList.add('search-container');
  div.innerHTML = `
    <label for="cruise-type">CRUISE TYPE</label>
    <select id="cruise-type">
      <option value="" disabled selected>CRUISE TYPE</option>
      <option value="Rivers">Rivers</option>
      <option value="Oceans">Oceans</option>
      <option value="Expeditions">Expeditions</option>
    </select>
    
    <label for="region">REGION</label>
    <select id="region" disabled>
      <option value="" disabled selected>REGION</option>
    </select>
    
    <label for="departure-date">DEPARTURE DATE</label>
    <select id="departure-date" disabled>
      <option value="" disabled selected>DEPARTURE DATE</option>
    </select>
    
    <button type="button" class="search-button">
      <img src="/icons/search.svg" width="14px" height="14px" alt="search icon">
      <span>SEARCH</span>
    </button>
  `;

  block.append(div);
}
