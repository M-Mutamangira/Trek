import Database from 'better-sqlite3';
import crypto from 'crypto';

// bcrypt cost factor for the seeded admin password — kept in sync with authService.
const BCRYPT_COST = 12;

// Seeds run at startup before the DB admin panel can be used, so only env vars
// are checked here. The granular password_login/password_registration DB toggles
// are only relevant after the first user exists; at that point seeds have already
// finished and skip via the userCount > 0 guard above.
function isOidcOnlyConfigured(): boolean {
  if (process.env.OIDC_ONLY?.toLowerCase() !== 'true') return false;
  return !!(process.env.OIDC_ISSUER && process.env.OIDC_CLIENT_ID);
}

function seedAdminAccount(db: Database.Database): void {
  try {
    const env_admin_email = process.env.ADMIN_EMAIL;
    const env_admin_pw = process.env.ADMIN_PASSWORD;
    const adminEnvProvided = !!(env_admin_email || env_admin_pw);

    const userCount = (db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number }).count;
    if (userCount > 0) {
      // ADMIN_EMAIL/ADMIN_PASSWORD only take effect on the first run (empty database). Once a
      // user exists they are silently ignored — a common trip-up: people add the vars after the
      // fact, restart, nothing changes, and there is no hint why. Say so instead of staying silent.
      if (adminEnvProvided) {
        console.warn('[admin] ADMIN_EMAIL/ADMIN_PASSWORD are set, but users already exist — these only apply on first run (empty database) and are being ignored.');
        console.warn('[admin] Change an existing password from Settings after signing in, reset the admin (see the Troubleshooting wiki), or start with an empty data volume to re-run setup.');
      }
      return;
    }

    // Demo mode seeds its own admin (admin@trek.app, username 'admin') right after this.
    // Creating a first-run admin here would grab username 'admin' first and make the demo
    // seeder fail on the UNIQUE(username) constraint, leaving the demo user uncreated.
    if (process.env.DEMO_MODE?.toLowerCase() === 'true') return;

    if (isOidcOnlyConfigured()) {
      console.log('');
      console.log('╔══════════════════════════════════════════════╗');
      console.log('║  TREK — OIDC-Only Mode                       ║');
      console.log('║  First SSO login will become admin.           ║');
      console.log('╚══════════════════════════════════════════════╝');
      console.log('');
      return;
    }

    const bcrypt = require('bcryptjs');

    let password: string;
    let email: string;
    if (env_admin_email && env_admin_pw) {
      password = env_admin_pw;
      email = env_admin_email;
    } else {
      // A partial config (only one of the two) is an easy mistake: neither value is used and a
      // generated password is created instead. Flag it so the chosen credentials silently not
      // working isn't a surprise.
      if (adminEnvProvided) {
        console.warn('[admin] Only one of ADMIN_EMAIL/ADMIN_PASSWORD is set — both are required for a custom admin. Falling back to admin@trek.local with a generated password (shown below).');
      }
      password = crypto.randomBytes(12).toString('base64url');
      email = 'admin@trek.local';
    }

    const hash = bcrypt.hashSync(password, BCRYPT_COST);
    const username = 'admin';

    db.prepare('INSERT INTO users (username, email, password_hash, role, must_change_password) VALUES (?, ?, ?, ?, 1)').run(username, email, hash, 'admin');

    console.log('');
    console.log('╔══════════════════════════════════════════════╗');
    console.log('║  TREK — First Run: Admin Account Created     ║');
    console.log('╠══════════════════════════════════════════════╣');
    console.log(`║  Email:    ${email.padEnd(33)}║`);
    console.log(`║  Password: ${password.padEnd(33)}║`);
    console.log('╚══════════════════════════════════════════════╝');
    console.log('');
  } catch (err: unknown) {
    console.error('[ERROR] Error seeding admin account:', err instanceof Error ? err.message : err);
  }
}

function seedCategories(db: Database.Database): void {
  try {
    const existingCats = db.prepare('SELECT COUNT(*) as count FROM categories').get() as { count: number };
    if (existingCats.count === 0) {
      const defaultCategories = [
        { name: 'Hotel', color: '#3b82f6', icon: '🏨' },
        { name: 'Restaurant', color: '#ef4444', icon: '🍽️' },
        { name: 'Attraction', color: '#8b5cf6', icon: '🏛️' },
        { name: 'Shopping', color: '#f59e0b', icon: '🛍️' },
        { name: 'Transport', color: '#6b7280', icon: '🚌' },
        { name: 'Activity', color: '#10b981', icon: '🎯' },
        { name: 'Bar/Cafe', color: '#f97316', icon: '☕' },
        { name: 'Beach', color: '#06b6d4', icon: '🏖️' },
        { name: 'Nature', color: '#84cc16', icon: '🌿' },
        { name: 'Other', color: '#6366f1', icon: '📍' },
      ];
      const insertCat = db.prepare('INSERT INTO categories (name, color, icon) VALUES (?, ?, ?)');
      for (const cat of defaultCategories) insertCat.run(cat.name, cat.color, cat.icon);
      console.log('Default categories seeded');
    }
  } catch (err: unknown) {
    console.error('Error seeding categories:', err instanceof Error ? err.message : err);
  }
}

function seedAddons(db: Database.Database): void {
  try {
    const defaultAddons = [
      { id: 'packing', name: 'Lists', description: 'Packing lists and to-do tasks for your trips', type: 'trip', icon: 'ListChecks', enabled: 1, sort_order: 0 },
      { id: 'budget', name: 'Costs', description: 'Track and split trip expenses', type: 'trip', icon: 'Wallet', enabled: 1, sort_order: 1 },
      { id: 'documents', name: 'Documents', description: 'Store and manage travel documents', type: 'trip', icon: 'FileText', enabled: 1, sort_order: 2 },
      { id: 'vacay', name: 'Vacay', description: 'Personal vacation day planner with calendar view', type: 'global', icon: 'CalendarDays', enabled: 1, sort_order: 10 },
      { id: 'atlas', name: 'Atlas', description: 'World map of your visited countries with travel stats', type: 'global', icon: 'Globe', enabled: 1, sort_order: 11 },
      { id: 'mcp', name: 'MCP', description: 'Model Context Protocol for AI assistant integration', type: 'integration', icon: 'Terminal', enabled: 0, sort_order: 12 },
      { id: 'naver_list_import', name: 'Naver List Import', description: 'Import places from shared Naver Maps lists', type: 'trip', icon: 'Link2', enabled: 1, sort_order: 13 },
      { id: 'collab', name: 'Collab', description: 'Notes, polls, and live chat for trip collaboration', type: 'trip', icon: 'Users', enabled: 1, sort_order: 6 },
      { id: 'journey', name: 'Journey', description: 'Trip tracking & travel journal — check-ins, photos, daily stories', type: 'global', icon: 'Compass', enabled: 0, sort_order: 35 },
      { id: 'airtrail', name: 'AirTrail', description: 'Sync flights from your self-hosted AirTrail instance', type: 'integration', icon: 'Plane', enabled: 0, sort_order: 14 },
      { id: 'llm_parsing', name: 'AI Parsing', description: 'LLM fallback for booking imports kitinerary cannot read', type: 'integration', icon: 'Sparkles', enabled: 0, sort_order: 15 },
      { id: 'collections', name: 'Collections', description: 'Personal place library — save places across trips into named lists, copy into any trip, share with others', type: 'global', icon: 'Bookmark', enabled: 0, sort_order: 16 },
    ];
    const insertAddon = db.prepare('INSERT OR IGNORE INTO addons (id, name, description, type, icon, enabled, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)');
    for (const a of defaultAddons) insertAddon.run(a.id, a.name, a.description, a.type, a.icon, a.enabled, a.sort_order);

    const providerRows = [
      {
        id: 'immich',
        name: 'Immich',
        description: 'Immich photo provider',
        icon: 'Image',
        enabled: 0,
        sort_order: 0,
      },
      {
        id: 'synologyphotos',
        name: 'Synology Photos',
        description: 'Synology Photos integration with separate account settings',
        icon: 'Image',
        enabled: 0,
        sort_order: 1,
      },
    ];
    const insertProvider = db.prepare('INSERT OR IGNORE INTO photo_providers (id, name, description, icon, enabled, sort_order) VALUES (?, ?, ?, ?, ?, ?)');
    for (const p of providerRows) insertProvider.run(p.id, p.name, p.description, p.icon, p.enabled, p.sort_order);

    const providerFields = [
      { provider_id: 'immich', field_key: 'immich_url', label: 'providerUrl', input_type: 'url', placeholder: 'https://immich.example.com', hint: null, required: 1, secret: 0, settings_key: 'immich_url', payload_key: 'immich_url', sort_order: 0 },
      { provider_id: 'immich', field_key: 'immich_api_key', label: 'providerApiKey', input_type: 'password', placeholder: 'API Key', hint: null, required: 1, secret: 1, settings_key: null, payload_key: 'immich_api_key', sort_order: 1 },
      { provider_id: 'synologyphotos', field_key: 'synology_url', label: 'providerUrl', input_type: 'url', placeholder: 'https://synology.example.com/photo', hint: 'providerUrlHintSynology', required: 1, secret: 0, settings_key: 'synology_url', payload_key: 'synology_url', sort_order: 0 },
      { provider_id: 'synologyphotos', field_key: 'synology_username', label: 'providerUsername', input_type: 'text', placeholder: 'Username', hint: null, required: 1, secret: 0, settings_key: 'synology_username', payload_key: 'synology_username', sort_order: 1 },
      { provider_id: 'synologyphotos', field_key: 'synology_password', label: 'providerPassword', input_type: 'password', placeholder: 'Password', hint: null, required: 1, secret: 1, settings_key: null, payload_key: 'synology_password', sort_order: 2 },
      { provider_id: 'synologyphotos', field_key: 'synology_otp', label: 'providerOTP', input_type: 'text', placeholder: '123456', hint: null, required: 0, secret: 0, settings_key: null, payload_key: 'synology_otp', sort_order: 3 },
      { provider_id: 'synologyphotos', field_key: 'synology_skip_ssl', label: 'skipSSLVerification', input_type: 'checkbox', placeholder: null, hint: null, required: 0, secret: 0, settings_key: 'synology_skip_ssl', payload_key: 'synology_skip_ssl', sort_order: 4 },
    ];
    const insertProviderField = db.prepare('INSERT OR IGNORE INTO photo_provider_fields (provider_id, field_key, label, input_type, placeholder, hint, required, secret, settings_key, payload_key, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    for (const f of providerFields) {
      insertProviderField.run(f.provider_id, f.field_key, f.label, f.input_type, f.placeholder, f.hint, f.required, f.secret, f.settings_key, f.payload_key, f.sort_order);
    }
    console.log('Default addons seeded');
  } catch (err: unknown) {
    console.error('Error seeding addons:', err instanceof Error ? err.message : err);
  }
}

function seedFeaturedTrips(db: Database.Database): void {
  try {
    const admin = db.prepare("SELECT id FROM users WHERE role = 'admin'").get() as { id: number } | undefined;
    if (!admin) return;

    const existing = db.prepare("SELECT COUNT(*) as count FROM share_tokens WHERE token IN ('kyoto-demo', 'amalfi-demo', 'swiss-demo')").get() as { count: number };
    if (existing.count > 0) return;

    console.log('Seeding default featured trips...');

    const insertTrip = db.prepare('INSERT INTO trips (user_id, title, description, start_date, end_date, currency, cover_image) VALUES (?, ?, ?, ?, ?, ?, ?)');
    const insertDay = db.prepare('INSERT INTO days (trip_id, day_number, date) VALUES (?, ?, ?)');
    const insertPlace = db.prepare('INSERT INTO places (trip_id, name, lat, lng, address, category_id, place_time, duration_minutes, notes, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    const insertAssignment = db.prepare('INSERT INTO day_assignments (day_id, place_id, order_index) VALUES (?, ?, ?)');
    const insertShareToken = db.prepare('INSERT INTO share_tokens (trip_id, token, created_by, share_map, share_bookings, share_packing, share_budget, share_collab) VALUES (?, ?, ?, 1, 1, 1, 1, 1)');
    const insertInviteToken = db.prepare('INSERT INTO trip_invite_tokens (trip_id, token, created_by) VALUES (?, ?, ?)');

    // 1. Kyoto Cherry Blossom Tour
    const trip1 = insertTrip.run(
      admin.id,
      'Kyoto Cherry Blossom Tour',
      'See Kyoto during cherry blossom season — temples, gardens, and the Philosopher\'s Path in full bloom.',
      '2026-04-15',
      '2026-04-24',
      'JPY',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop'
    );
    const t1Id = Number(trip1.lastInsertRowid);
    insertShareToken.run(t1Id, 'kyoto-demo', admin.id);
    insertInviteToken.run(t1Id, 'kyoto-join', admin.id);

    // Seed days & places for Kyoto
    const d1 = Number(insertDay.run(t1Id, 1, '2026-04-15').lastInsertRowid);
    const p1 = Number(insertPlace.run(t1Id, 'Hotel Granvia Kyoto', 34.9856, 135.7580, 'Kyoto Station, Kyoto, Japan', 1, '15:00', 60, 'Check in and rest after travel.', null).lastInsertRowid);
    insertAssignment.run(d1, p1, 0);

    const d2 = Number(insertDay.run(t1Id, 2, '2026-04-16').lastInsertRowid);
    const p2 = Number(insertPlace.run(t1Id, 'Fushimi Inari Taisha', 34.9671, 135.7727, '68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto, Japan', 3, '08:00', 120, 'Stroll under 10,000 torii gates.', null).lastInsertRowid);
    insertAssignment.run(d2, p2, 0);

    // 2. Amalfi Coast Explorer
    const trip2 = insertTrip.run(
      admin.id,
      'Amalfi Coast Explorer',
      'Drive the Amalfi coast, visit Positano and Ravello, and eat your way through Italy\'s most scenic stretch of coastline.',
      '2026-05-10',
      '2026-05-16',
      'EUR',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop'
    );
    const t2Id = Number(trip2.lastInsertRowid);
    insertShareToken.run(t2Id, 'amalfi-demo', admin.id);
    insertInviteToken.run(t2Id, 'amalfi-join', admin.id);

    const t2d1 = Number(insertDay.run(t2Id, 1, '2026-05-10').lastInsertRowid);
    const t2p1 = Number(insertPlace.run(t2Id, 'Villa Franca Positano', 40.6281, 14.4850, 'Positano, Italy', 1, '14:00', 60, 'Welcome to Amalfi Coast!', null).lastInsertRowid);
    insertAssignment.run(t2d1, t2p1, 0);

    // 3. Swiss Alps & Lakes
    const trip3 = insertTrip.run(
      admin.id,
      'Swiss Alps & Lakes',
      'Hike alpine trails, swim in mountain lakes, and sleep in villages that sit at the foot of glaciers.',
      '2026-07-01',
      '2026-07-12',
      'CHF',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop'
    );
    const t3Id = Number(trip3.lastInsertRowid);
    insertShareToken.run(t3Id, 'swiss-demo', admin.id);
    insertInviteToken.run(t3Id, 'swiss-join', admin.id);

    const t3d1 = Number(insertDay.run(t3Id, 1, '2026-07-01').lastInsertRowid);
    const t3p1 = Number(insertPlace.run(t3Id, 'Victoria Jungfrau Grand Hotel', 46.6863, 7.8590, 'Interlaken, Switzerland', 1, '15:00', 60, 'Stunning Alpine views.', null).lastInsertRowid);
    insertAssignment.run(t3d1, t3p1, 0);

    console.log('Default featured trips seeded successfully');
  } catch (err: unknown) {
    console.error('Error seeding featured trips:', err instanceof Error ? err.message : err);
  }
}

function runSeeds(db: Database.Database): void {
  seedAdminAccount(db);
  seedCategories(db);
  seedAddons(db);
  seedFeaturedTrips(db);
}

export { runSeeds, seedAdminAccount };
