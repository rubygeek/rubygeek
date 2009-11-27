# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_readycheck_session',
  :secret      => '9c94b073e47d5c2192b67292e2f4e0eddb6f2a61c6c64161a0c241ae6e64b8a03d7a0995bd627fbfd72932dd7eb899dff56c1e0ee02a6c107bc81694ecdd5b85'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
