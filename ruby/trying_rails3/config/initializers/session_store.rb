# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key    => '_trying_rails3_session',
  :secret => 'c4031d3211894bc109b024a982f2fb612d3e4aeb2dd85f540203746f5226e50fa45ca1f2d21c5c61dbb3a617f02e97cf9b6f6b5f9b7b925194b1682e1b116e47'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
