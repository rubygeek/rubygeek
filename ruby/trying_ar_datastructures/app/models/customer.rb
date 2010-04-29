class Customer < ActiveRecord::Base
  composed_of :name, :mapping =>
      [ # database ruby
      %w[ first_name first ],
      %w[ middle_name middle ],
      %w[ last_name last ]
      ], :converter => Proc.new { |name| Name.parse(name) }
end
