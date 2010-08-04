# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_trying_local_inter_session',
  :secret      => '590b7b3a42746f208cd5636a12e71f06c705f85e7ffb6a29a8ac297f77430225dbba1ea11e592d8f6941e09375f927a11f2ce2c2530770960e98ef0579a9ffe5'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
