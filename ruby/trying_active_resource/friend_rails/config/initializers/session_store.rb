# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_friend_rails_session',
  :secret      => '1a6ffee772393f69843d08b7ba902f2119aeb57ffb27130f9f183f572ab68e59f147ed654919bc7d9895017c6553dbef1022944d27abbd239c73040fe0970121'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
