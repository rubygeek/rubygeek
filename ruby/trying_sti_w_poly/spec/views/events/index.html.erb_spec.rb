require 'spec_helper'

describe "/events/index.html.erb" do
  include EventsHelper

  before(:each) do
    assigns[:events] = [
      stub_model(Event,
        :name => "value for name",
        :start_at => ,
        :description => "value for description"
      ),
      stub_model(Event,
        :name => "value for name",
        :start_at => ,
        :description => "value for description"
      )
    ]
  end

  it "renders a list of events" do
    render
    response.should have_tag("tr>td", "value for name".to_s, 2)
    response.should have_tag("tr>td", .to_s, 2)
    response.should have_tag("tr>td", "value for description".to_s, 2)
  end
end
