# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_admin_friend_app_session',
  :secret      => '5b5a03423e52887a43376bc26d5c62ae924eafe6428c34592064684b889b65fec230ba52460afe5b5a4fe87f497747e669fd174f29f087fa0855702201be8524'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
