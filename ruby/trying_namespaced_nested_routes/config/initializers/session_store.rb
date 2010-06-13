# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_trying_namespaced_nested_routes_session',
  :secret      => '5806bb0b301ccb40c987cedd17136381e5e32522c6533491ed0220c54682ea9db459e543ed2e6cd489424304186f71b597792a9b1201bb0c8d42c1e255b6f805'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
