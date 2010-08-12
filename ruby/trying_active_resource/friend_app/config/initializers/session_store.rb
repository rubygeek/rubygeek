# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_friend_app_session',
  :secret      => '42e07d0feaae3bce0d4f095d42ea0b01b78f505bdfef137d09e4bbb365dfcf4d8bf0aa618e34a16ba424ad0b1bdc7333931310ae25481088c2e84fc54cc3be1b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
