module Admin
  class MembersController < Admin::BaseController

    crudify :member,
            :title_attribute => 'name', :xhr_paging => true

  end
end
