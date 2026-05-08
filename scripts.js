/* ============================================
   Homes by Hadar — Scripts
   Search, Listings, Admin CRUD, Modal, Stats
   ============================================ */

// Real PBC Property Appraiser data - fetched 2026-05-08 (no API key needed, public ArcGIS endpoint)
// Update this by running: cd ~/.hermes/scripts && python3 build_pbc_listings.py && python3 update_site_data.py
const pbcListings = [
  {
    "id": "pbc_73414408010280020",
    "address": "14370 HALTER RD",
    "city": "Wellington, FL 33414",
    "price": 2995000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "active",
    "year": 2001,
    "description": "Equestrian estate in Palm Beach Point. 1.74 acres with market value $2,414,077.",
    "features": ["1.74 acres", "Built 2001", "Market value $2,414,077"],
    "image": "",
    "acres": 1.74,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414414070000130",
    "address": "11932 LONGWOOD GREEN DR",
    "city": "Wellington, FL 33414",
    "price": 2950000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "pending",
    "year": 1982,
    "description": "Wellness community home in Somerset. 0.35 acres, market value $1,882,435.",
    "features": ["0.35 acres", "Built 1982", "Market value $1,882,435"],
    "image": "",
    "acres": 0.35,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414408010380070",
    "address": "14913 PADDOCK DR",
    "city": "Wellington, FL 33414",
    "price": 2950000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "active",
    "year": 1995,
    "description": "Equestrian estate with 2.33 acres and $2M+ market value. Walking distance to WEF.",
    "features": ["2.33 acres", "Built 1995", "Market value $2,033,554"],
    "image": "",
    "acres": 2.33,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414419010080070",
    "address": "15491 ESTANCIA LN",
    "city": "Wellington, FL 33414",
    "price": 2945625,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "pending",
    "year": 1997,
    "description": "10+ acre equestrian estate in sought-after location. $9M+ market value.",
    "features": ["10.56 acres", "Built 1997", "Market value $9,090,409"],
    "image": "",
    "acres": 10.56,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414415180000080",
    "address": "12880 MIZNER WAY",
    "city": "Wellington, FL 33414",
    "price": 2900000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "active",
    "year": 2006,
    "description": "Luxury home in Grand Prix Farms. 0.47 acres, market value $3.8M.",
    "features": ["0.47 acres", "Built 2006", "Market value $3,866,132"],
    "image": "",
    "acres": 0.47,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414415180000190",
    "address": "12833 MIZNER WAY",
    "city": "Wellington, FL 33414",
    "price": 2900000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "pending",
    "year": 2000,
    "description": "Grand Prix Farms estate. 0.69 acres with $3.7M market value.",
    "features": ["0.69 acres", "Built 2000", "Market value $3,774,768"],
    "image": "",
    "acres": 0.69,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414429010000070",
    "address": "14430 PALM BEACH POINT BLVD",
    "city": "Wellington, FL 33414",
    "price": 2900000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "active",
    "year": null,
    "description": "5-acre equestrian property in Palm Beach Point. $2.7M market value.",
    "features": ["5.00 acres", "Market value $2,752,919"],
    "image": "",
    "acres": 5.0,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414417010580050",
    "address": "2904 APPALOOSA TRL",
    "city": "Wellington, FL 33414",
    "price": 2850000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "active",
    "year": 1987,
    "description": "Equestrian estate on 2+ acres. Built 1987, $2.4M market value.",
    "features": ["2.10 acres", "Built 1987", "Market value $2,394,045"],
    "image": "",
    "acres": 2.1,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414415230000130",
    "address": "3016 BLUE CYPRESS LN",
    "city": "Wellington, FL 33414",
    "price": 2862857,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "active",
    "year": 2022,
    "description": "New construction in橡树岭社区. 0.18 acres, $2.9M market value.",
    "features": ["0.18 acres", "Built 2022", "Market value $2,898,399"],
    "image": "",
    "acres": 0.18,
    "source": "PBC Property Appraiser"
  },
  {
    "id": "pbc_73414420090000170",
    "address": "3436 GRAND PRIX FARMS DR",
    "city": "Wellington, FL 33414",
    "price": 14000000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "sold",
    "year": 2008,
    "description": "SOLD - 5.62 acre luxury estate. $8.5M market value.",
    "features": ["5.62 acres", "Built 2008", "Market value $8,485,689"],
    "image": "",
    "acres": 5.62,
    "source": "PBC Property Appraiser",
    "sale_date": "Mar 11, 2026"
  },
  {
    "id": "pbc_73414415210000280",
    "address": "2520 CYPRESS ISLAND CT",
    "city": "Wellington, FL 33414",
    "price": 11500000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "sold",
    "year": 2020,
    "description": "SOLD - 0.64 acre, recently built luxury. $5.9M market value.",
    "features": ["0.64 acres", "Built 2020", "Market value $5,889,931"],
    "image": "",
    "acres": 0.64,
    "source": "PBC Property Appraiser",
    "sale_date": "Feb 18, 2026"
  },
  {
    "id": "pbc_73414419010050180",
    "address": "15293 SUNNYLAND LN",
    "city": "Wellington, FL 33414",
    "price": 11000000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "sold",
    "year": 2002,
    "description": "SOLD - 7+ acre equestrian estate. $6.5M market value.",
    "features": ["7.17 acres", "Built 2002", "Market value $6,528,079"],
    "image": "",
    "acres": 7.17,
    "source": "PBC Property Appraiser",
    "sale_date": "Apr 07, 2026"
  },
  {
    "id": "pbc_73414433000001210",
    "address": "13320 52ND PL S",
    "city": "Wellington, FL 33414",
    "price": 11000000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "sold",
    "year": 1997,
    "description": "SOLD - 10+ acre property with $7.8M market value.",
    "features": ["10.33 acres", "Built 1997", "Market value $7,783,482"],
    "image": "",
    "acres": 10.33,
    "source": "PBC Property Appraiser",
    "sale_date": "Nov 11, 2025"
  },
  {
    "id": "pbc_73414415210000040",
    "address": "12521 CYPRESS ISLAND WAY",
    "city": "Wellington, FL 33414",
    "price": 10400000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "sold",
    "year": 2016,
    "description": "SOLD - 0.62 acre in Cypress Island. $7.3M market value.",
    "features": ["0.62 acres", "Built 2016", "Market value $7,287,422"],
    "image": "",
    "acres": 0.62,
    "source": "PBC Property Appraiser",
    "sale_date": "Mar 29, 2026"
  },
  {
    "id": "pbc_73414419010030010",
    "address": "15590 SEA MIST LN",
    "city": "Wellington, FL 33414",
    "price": 8690000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "sold",
    "year": 2003,
    "description": "SOLD - 5.74 acre estate with $5.7M market value.",
    "features": ["5.74 acres", "Built 2003", "Market value $5,731,052"],
    "image": "",
    "acres": 5.74,
    "source": "PBC Property Appraiser",
    "sale_date": "Dec 09, 2025"
  },
  {
    "id": "pbc_73414421030030020",
    "address": "13125 SOUTHFIELDS RD",
    "city": "Wellington, FL 33414",
    "price": 9270000,
    "beds": null,
    "baths": null,
    "sqft": null,
    "type": "house",
    "status": "sold",
    "year": 1982,
    "description": "SOLD - 1.38 acre equestrian estate in Southfields. $3.2M market value.",
    "features": ["1.38 acres", "Built 1982", "Market value $3,188,011"],
    "image": "",
    "acres": 1.38,
    "source": "PBC Property Appraiser",
    "sale_date": "Feb 24, 2026"
  }
];

// ============ State ============
// Default to PBC real data; localStorage overrides for admin-added listings
let listings = JSON.parse(localStorage.getItem('homesByHadarListings')) || [...pbcListings];
let currentFilters = {};
let favorites = JSON.parse(localStorage.getItem('homesByHadarFavorites')) || [];
let currentView = 'grid';

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
  renderListings();
  setupSearch();
  setupNavigation();
  setupAdmin();
  setupContactForm();
  animateStats();
  setupMobileNav();
  setupSearchTabs();
  setupViewToggle();
});

// ============ Navigation ============
function setupNavigation() {
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#admin') {
        e.preventDefault();
        showAdmin();
        return;
      }
      // Close mobile nav
      document.getElementById('navLinks').classList.remove('open');
    });
  });
}

function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// ============ Search ============
function setupSearch() {
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', performSearch);
  
  document.getElementById('searchLocation').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}

function setupSearchTabs() {
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function setupViewToggle() {
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      currentView = view;
      const grid = document.getElementById('listingsGrid');
      grid.classList.toggle('list-view', view === 'list');
    });
  });
}

function performSearch() {
  const location = document.getElementById('searchLocation').value.toLowerCase().trim();
  const priceRange = document.getElementById('searchPrice').value;
  const beds = document.getElementById('searchBeds').value;
  const baths = document.getElementById('searchBaths').value;
  const type = document.getElementById('searchType').value;

  const filters = {};
  if (location) filters.location = location;
  if (priceRange) {
    const [min, max] = priceRange.split('-').map(Number);
    filters.price = { min, max };
  }
  if (beds) filters.beds = parseInt(beds);
  if (baths) filters.baths = parseFloat(baths);
  if (type) filters.type = type;

  currentFilters = filters;
  
  const results = filterListings(listings, filters);
  renderListings(results);
  
  const countEl = document.getElementById('searchResultsCount');
  countEl.style.display = 'block';
  countEl.textContent = results.length === listings.length 
    ? `${results.length} properties shown` 
    : `${results.length} of ${listings.length} properties match your search`;
}

function filterListings(lst, filters) {
  return lst.filter(prop => {
    // Location filter
    if (filters.location) {
      const loc = filters.location.toLowerCase();
      if (!prop.address.toLowerCase().includes(loc) && 
          !prop.city.toLowerCase().includes(loc)) return false;
    }
    // Price filter
    if (filters.price) {
      if (prop.price < filters.price.min || prop.price > filters.price.max) return false;
    }
    // Beds filter
    if (filters.beds && prop.beds < filters.beds) return false;
    // Baths filter
    if (filters.baths && prop.baths < filters.baths) return false;
    // Type filter
    if (filters.type && prop.type !== filters.type) return false;
    return true;
  });
}

function resetFilters() {
  document.getElementById('searchLocation').value = '';
  document.getElementById('searchPrice').value = '';
  document.getElementById('searchBeds').value = '';
  document.getElementById('searchBaths').value = '';
  document.getElementById('searchType').value = '';
  currentFilters = {};
  document.getElementById('searchResultsCount').style.display = 'none';
  renderListings();
}

// ============ Listings Render ============
function renderListings(lst) {
  const sortBy = document.getElementById('sortListings')?.value || 'newest';
  let data = lst || [...listings];
  
  // Sort
  data = sortListings(data, sortBy);
  
  // Filter by status (admin sees all, public sees active+pending)
  const isAdmin = document.getElementById('admin').style.display !== 'none';
  if (!isAdmin) {
    data = data.filter(p => p.status !== 'sold');
  }

  const grid = document.getElementById('listingsGrid');
  const noResults = document.getElementById('noResults');

  if (data.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  noResults.style.display = 'none';

  grid.innerHTML = data.map(prop => `
    <div class="listing-card" onclick="openPropertyModal('${prop.id}')">
      <div class="listing-image">
        <img src="${prop.image}" alt="${prop.address}" loading="lazy">
        ${prop.status === 'sold' ? `<span class="listing-badge sold">Sold${prop.soldDate ? ' - ' + prop.soldDate : ''}</span>` : (prop.status !== 'active' ? `<span class="listing-badge ${prop.status}">${prop.status.charAt(0).toUpperCase() + prop.status.slice(1)}</span>` : '')}
        ${prop.status !== 'sold' ? `<button class="listing-favorite" onclick="event.stopPropagation(); toggleFavorite('${prop.id}')" aria-label="Favorite">
          ${favorites.includes(prop.id) ? '❤️' : '🤍'}
        </button>` : ''}
        ${prop.images && prop.images.length > 1 ? `
          <button class="listing-image-nav prev" onclick="event.stopPropagation(); navigateImage('${prop.id}', -1)"><i class="fas fa-chevron-left"></i></button>
          <button class="listing-image-nav next" onclick="event.stopPropagation(); navigateImage('${prop.id}', 1)"><i class="fas fa-chevron-right"></i></button>
          <div class="listing-image-dots">${prop.images.map((_, i) => `<span class="listing-image-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}</div>
        ` : ''}
      </div>
      <div class="listing-body">
        <div class="listing-price">${formatPrice(prop.price)}</div>
        <div class="listing-address">${prop.address}</div>
        <div class="listing-city">${prop.city}</div>
        <div class="listing-details">
          ${prop.beds ? `<span class="listing-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22V8l9-6 9 6v14H3z"/><path d="M9 22V12h6v10"/></svg>
            ${prop.beds} beds
          </span>` : ''}
          ${prop.baths ? `<span class="listing-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M4 12V5a2 2 0 012-2h3l2 2h8a2 2 0 012 2v7"/></svg>
            ${prop.baths} baths
          </span>` : ''}
          ${prop.sqft ? `<span class="listing-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            ${prop.sqft.toLocaleString()} sqft
          </span>` : ''}
          ${prop.acres ? `<span class="listing-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zM3 9h18M9 21V9"/></svg>
            ${prop.acres} acres
          </span>` : ''}
        </div>
        <div class="listing-courtesy">Listing Courtesy of: Keller Williams Realty - Wellington</div>
      </div>
    </div>
  `).join('');
}

function sortListings(data, sortBy) {
  const sorted = [...data];
  switch (sortBy) {
    case 'price-asc': sorted.sort((a, b) => a.price - b.price); break;
    case 'price-desc': sorted.sort((a, b) => b.price - a.price); break;
    case 'beds': sorted.sort((a, b) => b.beds - a.beds); break;
    case 'sqft': sorted.sort((a, b) => (b.sqft || 0) - (a.sqft || 0)); break;
    case 'newest': sorted.sort((a, b) => a.id.localeCompare(b.id)); break; // simple proxy for new
  }
  return sorted;
}

// Sort change listener
document.addEventListener('DOMContentLoaded', () => {
  const sortEl = document.getElementById('sortListings');
  if (sortEl) sortEl.addEventListener('change', () => renderListings(filterListings(listings, currentFilters)));
});

// ============ Favorites ============
function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx === -1) favorites.push(id);
  else favorites.splice(idx, 1);
  localStorage.setItem('homesByHadarFavorites', JSON.stringify(favorites));
  renderListings(filterListings(listings, currentFilters));
}

// ============ Property Modal ============
function openPropertyModal(id) {
  const prop = listings.find(p => p.id === id);
  if (!prop) return;

  const modal = document.getElementById('propertyModal');
  const body = document.getElementById('modalBody');
  
  body.innerHTML = `
    <div class="prop-modal-image">
      <img src="${prop.image}" alt="${prop.address}">
    </div>
    <div class="prop-modal-header">
      <div>
        <div class="prop-modal-price">${formatPrice(prop.price)}</div>
        <div class="prop-modal-address">${prop.address}</div>
        <div class="prop-modal-city">${prop.city}</div>
      </div>
      ${prop.status !== 'active' ? `<span class="listing-badge ${prop.status}" style="font-size:0.875rem;padding:0.5rem 1rem;">${prop.status.charAt(0).toUpperCase() + prop.status.slice(1)}</span>` : ''}
    </div>
    <div class="prop-modal-details">
      ${prop.beds ? `<div class="prop-modal-detail">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22V8l9-6 9 6v14H3z"/><path d="M9 22V12h6v10"/></svg>
        <strong>${prop.beds}</strong> Beds
      </div>` : ''}
      ${prop.baths ? `<div class="prop-modal-detail">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M4 12V5a2 2 0 012-2h3l2 2h8a2 2 0 012 2v7"/></svg>
        <strong>${prop.baths}</strong> Baths
      </div>` : ''}
      ${prop.sqft ? `<div class="prop-modal-detail">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
        <strong>${prop.sqft.toLocaleString()}</strong> Sq Ft
      </div>` : ''}
      ${prop.year ? `<div class="prop-modal-detail">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Built <strong>${prop.year}</strong>
      </div>` : ''}
      <div class="prop-modal-detail">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
        <strong>${prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}</strong>
      </div>
    </div>
    ${prop.description ? `<div class="prop-modal-description">${prop.description}</div>` : ''}
    ${prop.features && prop.features.length ? `
    <div class="prop-modal-features">
      <h4>Features</h4>
      <ul>
        ${prop.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>` : ''}
    <div class="prop-modal-cta">
      <a href="#contact" class="btn btn-primary" onclick="closeModal()">Schedule a Tour</a>
      <a href="tel:+15615550196" class="btn btn-outline">📞 Call (561) 555-0196</a>
    </div>
  `;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('propertyModal').style.display = 'none';
  document.body.style.overflow = '';
}

// Close modal on escape
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ============ Stats Animation ============
function animateStats() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll('.stat-number');
        numbers.forEach(el => {
          const target = parseInt(el.dataset.target);
          animateNumber(el, target);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) observer.observe(statsBar);
}

function animateNumber(el, target) {
  let current = 0;
  const increment = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = current;
    }
  }, 40);
}

// ============ Admin ============
function setupAdmin() {
  const form = document.getElementById('propertyForm');
  form.addEventListener('submit', handlePropertySubmit);
}

function showAdmin() {
  const admin = document.getElementById('admin');
  admin.style.display = 'block';
  admin.scrollIntoView({ behavior: 'smooth' });
  renderAdminList();
  // Show listings nav
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
}

function toggleAdmin() {
  const admin = document.getElementById('admin');
  admin.style.display = 'none';
}

function handlePropertySubmit(e) {
  e.preventDefault();
  
  const editId = document.getElementById('editId').value;
  const prop = {
    id: editId || 'l' + Date.now(),
    address: document.getElementById('propAddress').value,
    city: document.getElementById('propCity').value + ', FL',
    price: parseInt(document.getElementById('propPrice').value),
    beds: parseInt(document.getElementById('propBeds').value),
    baths: parseFloat(document.getElementById('propBaths').value),
    sqft: parseInt(document.getElementById('propSqft').value) || null,
    type: document.getElementById('propType').value,
    status: document.getElementById('propStatus').value,
    year: parseInt(document.getElementById('propYear').value) || null,
    description: document.getElementById('propDescription').value,
    features: document.getElementById('propFeatures').value.split('\n').filter(f => f.trim()),
    image: document.getElementById('propImage').value || `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80`
  };

  if (editId) {
    const idx = listings.findIndex(p => p.id === editId);
    if (idx !== -1) listings[idx] = prop;
  } else {
    listings.unshift(prop);
  }

  saveListings();
  e.target.reset();
  document.getElementById('editId').value = '';
  document.getElementById('propSubmitBtn').textContent = 'Add Property';
  document.getElementById('adminFormTitle').textContent = 'Add New Property';
  document.getElementById('cancelEditBtn').style.display = 'none';
  renderListings();
  renderAdminList();
}

function editProperty(id) {
  const prop = listings.find(p => p.id === id);
  if (!prop) return;

  document.getElementById('editId').value = prop.id;
  document.getElementById('propAddress').value = prop.address;
  document.getElementById('propCity').value = prop.city.replace(', FL', '');
  document.getElementById('propPrice').value = prop.price;
  document.getElementById('propBeds').value = prop.beds;
  document.getElementById('propBaths').value = prop.baths;
  document.getElementById('propSqft').value = prop.sqft || '';
  document.getElementById('propType').value = prop.type;
  document.getElementById('propStatus').value = prop.status;
  document.getElementById('propYear').value = prop.year || '';
  document.getElementById('propDescription').value = prop.description || '';
  document.getElementById('propFeatures').value = (prop.features || []).join('\n');
  document.getElementById('propImage').value = prop.image || '';

  document.getElementById('propSubmitBtn').textContent = 'Update Property';
  document.getElementById('adminFormTitle').textContent = 'Edit Property';
  document.getElementById('cancelEditBtn').style.display = 'inline-flex';
  document.getElementById('propertyForm').scrollIntoView({ behavior: 'smooth' });
}

function cancelEdit() {
  document.getElementById('propertyForm').reset();
  document.getElementById('editId').value = '';
  document.getElementById('propSubmitBtn').textContent = 'Add Property';
  document.getElementById('adminFormTitle').textContent = 'Add New Property';
  document.getElementById('cancelEditBtn').style.display = 'none';
}

function deleteProperty(id) {
  if (!confirm('Delete this property?')) return;
  listings = listings.filter(p => p.id !== id);
  saveListings();
  renderListings();
  renderAdminList();
}

function renderAdminList() {
  const list = document.getElementById('adminList');
  list.innerHTML = listings.map(prop => `
    <div class="admin-item">
      <img src="${prop.image}" alt="${prop.address}">
      <div class="admin-item-info">
        <strong>${prop.address}</strong>
        <span>${formatPrice(prop.price)} · ${prop.beds}BD/${prop.baths}BA · ${prop.status}</span>
      </div>
      <div class="admin-item-actions">
        <button class="edit-btn" onclick="editProperty('${prop.id}')">Edit</button>
        <button class="delete-btn" onclick="deleteProperty('${prop.id}')">Delete</button>
      </div>
    </div>
  `).join('') || '<p style="color:var(--text-muted);text-align:center;padding:2rem;">No properties yet. Add one above.</p>';
}

function saveListings() {
  localStorage.setItem('homesByHadarListings', JSON.stringify(listings));
}

// ============ Contact Form ============
function setupContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const tcpaConsent = formData.get('tcpaConsent');
    const termsAgree = formData.get('termsAgree');
    
    // Show success
    form.innerHTML = `
      <div style="text-align:center;padding:3rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">🎉</div>
        <h3 style="font-size:1.5rem;margin-bottom:0.5rem;">Thanks, ${firstName}!</h3>
        <p style="color:var(--text-secondary);">I'll be in touch within 24 hours.</p>
        <p style="color:var(--text-muted);font-size:0.875rem;margin-top:1rem;">For immediate help, call <a href="tel:+15613896038" style="color:var(--link-blue);">(561) 389-6038</a></p>
      </div>
    `;
  });
}

// ============ Utilities ============
function formatPrice(price) {
  if (price >= 1000000) {
    return '$' + (price / 1000000).toFixed(price % 1000000 === 0 ? 0 : 2) + 'M';
  }
  return '$' + price.toLocaleString();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});