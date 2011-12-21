class User
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :github_login, type: String
  field :email, type: String
  field :github_url, type: String
end
