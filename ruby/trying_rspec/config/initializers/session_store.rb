# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_trying_rspec_session',
  :secret      => 'd2c63b9a22e02f6b0149c793c9b5cdc68b2f4bee2571739af55f187e1f4dcd8ca82f4ab8df7f2f39dcea3bb4bceda9bad807a7746824a5beb12fd122f43bd203'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
