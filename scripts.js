/* ============================================
   Homes by Hadar — Scripts
   Search, Listings, Admin CRUD, Modal, Stats
   ============================================ */

// ============ Sample Data ============
const sampleListings = [
  {
    id: "l001",
    address: "14400 Wellington Trace",
    city: "Wellington, FL 33414",
    price: 875000,
    beds: 4,
    baths: 3,
    sqft: 2850,
    type: "house",
    status: "active",
    year: 2018,
    description: "Stunning 4BR home in the heart of Wellington's equestrian community. Features include a gourmet kitchen with quartz counters, impact-resistant windows throughout, and a resort-style pool with heated spa. Walking distance to WEF.",
    features: ["Pool with heated spa", "Gourmet kitchen", "Impact windows", "3-car garage", "Outdoor kitchen", "EV charging"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
  },
  {
    id: "l002",
    address: "9821 Shadow Wood Drive",
    city: "Boynton Beach, FL 33472",
    price: 549000,
    beds: 3,
    baths: 2,
    sqft: 1920,
    type: "house",
    status: "active",
    year: 2015,
    description: "Move-in ready 3BR/2BA in sought-after Valencia. High ceilings, open floor plan, and a split bedroom layout. The upgraded kitchen features stainless appliances and a large center island.",
    features: ["Open floor plan", "Split bedroom layout", "Upgraded kitchen", "Community pool", "HOA includes cable", "Gated entrance"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
  },
  {
    id: "l003",
    address: "1201 S Ocean Blvd #1806",
    city: "Delray Beach, FL 33483",
    price: 1250000,
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    type: "condo",
    status: "active",
    year: 2008,
    description: "Breathtaking ocean views from this 18th-floor 3BR corner unit. Floor-to-ceiling windows, Italian tile throughout, and a gourmet kitchen with Sub-Zero appliances. Resort amenities include tennis, pickleball, and direct beach access.",
    features: ["Direct ocean views", "Corner unit", "Floor-to-ceiling windows", "Sub-Zero appliances", "Resort amenities", "Beach access"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
  },
  {
    id: "l004",
    address: "5561 Big Blue Trace",
    city: "Loxahatchee, FL 33470",
    price: 695000,
    beds: 5,
    baths: 3,
    sqft: 3400,
    type: "house",
    status: "active",
    year: 2005,
    description: "Spacious 5-acre equestrian estate in the Acreage. Features include a custom pool, 4-stall barn with tack room, and riding arena. The main house offers a chef's kitchen and primary suite with spa-like bath.",
    features: ["5 acres", "4-stall barn", "Riding arena", "Custom pool", "Chef's kitchen", "Guest house"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  {
    id: "l005",
    address: "3300 E Atlantic Ave #PH3",
    city: "Delray Beach, FL 33483",
    price: 2150000,
    beds: 4,
    baths: 4,
    sqft: 3800,
    type: "condo",
    status: "pending",
    year: 2019,
    description: "Ultra-luxury penthouse in Downtown Delray. Private elevator entry, dual primary suites, and a wrap-around terrace with 360° views. Smart home integrated with Lutron lighting and Savant automation.",
    features: ["Private elevator", "360° terraces", "Dual primary suites", "Smart home", "Private 3-car garage", "Concierge"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
  },
  {
    id: "l006",
    address: "8803 Lake Worth Rd #102",
    city: "Lake Worth, FL 33467",
    price: 385000,
    beds: 2,
    baths: 2,
    sqft: 1350,
    type: "townhouse",
    status: "active",
    year: 2020,
    description: "Modern 2BR/2BA townhome in the gated Winn Dixie plaza area. Tile floors throughout, quartz counters, and an attached 1-car garage. Walk to shopping, dining, and A-rated schools.",
    features: ["Tile floors", "Quartz counters", "Attached garage", "Gated community", "Near shopping", "A-rated schools"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  {
    id: "l007",
    address: "4551 D Ali Baba Lane",
    city: "Palm Springs, FL 33461",
    price: 425000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    type: "house",
    status: "sold",
    year: 2012,
    description: "Charming CBS 3BR/2BA home with updated kitchen and baths. Large corner lot with room for a pool. New roof (2023) and AC (2021). Close to shopping, parks, and major highways.",
    features: ["CBS construction", "New roof 2023", "New AC 2021", "Corner lot", "Room for pool", "Close to highways"],
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800&q=80"
  },
  {
    id: "l008",
    address: "18200 Miacomet Way",
    city: "Boca Raton, FL 33498",
    price: 925000,
    beds: 4,
    baths: 3.5,
    sqft: 2900,
    type: "house",
    status: "active",
    year: 2016,
    description: "Elegant 4BR in Boca's most sought-after acreage community. Chef's kitchen with Wolf and Sub-Zero appliances, primary suite with sitting area, and a resort-style backyard with pool, summer kitchen, and fire pit.",
    features: ["Wolf/Sub-Zero kitchen", "Resort pool", "Summer kitchen", "Fire pit", "Acreage lot", "Top schools"],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
  }
];

// ============ State ============
let listings = JSON.parse(localStorage.getItem('homesByHadarListings')) || [...sampleListings];
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
        ${prop.status !== 'active' ? `<span class="listing-badge ${prop.status}">${prop.status.charAt(0).toUpperCase() + prop.status.slice(1)}</span>` : ''}
        <button class="listing-favorite" onclick="event.stopPropagation(); toggleFavorite('${prop.id}')" aria-label="Favorite">
          ${favorites.includes(prop.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="listing-body">
        <div class="listing-price">${formatPrice(prop.price)}</div>
        <div class="listing-address">${prop.address}</div>
        <div class="listing-city">${prop.city}</div>
        <div class="listing-details">
          <span class="listing-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22V8l9-6 9 6v14H3z"/><path d="M9 22V12h6v10"/></svg>
            ${prop.beds} beds
          </span>
          <span class="listing-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M4 12V5a2 2 0 012-2h3l2 2h8a2 2 0 012 2v7"/></svg>
            ${prop.baths} baths
          </span>
          ${prop.sqft ? `<span class="listing-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            ${prop.sqft.toLocaleString()} sqft
          </span>` : ''}
        </div>
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
    const data = new FormData(form);
    const name = data.get('name');
    
    // Show success
    form.innerHTML = `
      <div style="text-align:center;padding:3rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">🎉</div>
        <h3 style="font-size:1.5rem;margin-bottom:0.5rem;">Thanks, ${name}!</h3>
        <p style="color:var(--text-secondary);">I'll be in touch within 24 hours.</p>
        <p style="color:var(--text-muted);font-size:0.875rem;margin-top:1rem;">For immediate help, call <a href="tel:+15615550196">(561) 555-0196</a></p>
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