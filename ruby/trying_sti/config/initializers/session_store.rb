# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_trying_sti_session',
  :secret      => '053ccb21ef62847741c0abc2139bd8ad2bc1cfe945698fb16fd3f1598115ad6d665964866d6ed43488a1edbbf0286607494bbebe402855bd6037d8d13671f47e'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
