class AddTestUsers < ActiveRecord::Migration
  def self.up
  ActiveRecord::Base.connection.execute("INSERT INTO 'users' ('name', 'updated_at', 'crypted_password', 'username', 'password_salt', 'gmt_offset', 'persistence_token', 'access_level', 'email', 'created_at') VALUES
                ('Nola Stowe', '2009-05-24 22:11:13', 'f942e42ae473782ba8c561e1588cbc14f0d4226cd7f79f9d3bbdf4ec1660c06d69b57ca4f9ed422b21fc34f314fe37fc2219609cd7bd9969294bafeb4c1c0c61', 'nola', '0wgjZaFn-9PrFu7L-MVm', -6, '7fe00bb72ee1a5cdbbf770dac87127ef6b034e9cfa7fef160ca55c0e66c669bcbe07ef0791702656fcb1710865e5e77eee17260efd29dd3760bfd4ebe57fe441', 1, 'mrnicksgirl@gmail.com', '2009-05-24 22:11:13')")
  end

  def self.down
  end
end
