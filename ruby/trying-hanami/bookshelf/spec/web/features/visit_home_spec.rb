require 'features_helper'

describe 'Visit Home' do
  it 'is successful' do
    visit '/'
    page.body.must_include('Bookshelf')
  end
end
