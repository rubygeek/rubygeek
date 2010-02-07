# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_nohands_session',
  :secret      => 'e182a8a4de536c8475cbf0cd8b4e7050b223eecb2c54f2c5b6f6f742d235e9b6079908bcc890a429a17711ec250c357a42141779997b4959a4bd4765a9031a5c'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
