# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_trying_shoulda_session',
  :secret      => 'e01677c7f2b9c2eddb7a4d06aa0f465da7752e3acf7afd04c1901574398a78e195ca7f81e4b220ed1ef33c056dcd1d202bc341dbe681a59479da7a419da535db'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
