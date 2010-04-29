# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_trying_ar_datastructures_session',
  :secret      => 'c19f0a7c83006270936c4ab661e62dff18af7567eac058dae3bc01d2e90b70cbfcc2d8498da3546db050a1259550dca7382eaa418b6a7fcf35d6ab8bfe9833cf'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
