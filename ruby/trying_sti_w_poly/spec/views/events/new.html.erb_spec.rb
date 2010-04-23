require 'spec_helper'

describe "/events/new.html.erb" do
  include EventsHelper

  before(:each) do
    assigns[:event] = stub_model(Event,
      :new_record? => true,
      :name => "value for name",
      :start_at => ,
      :description => "value for description"
    )
  end

  it "renders new event form" do
    render

    response.should have_tag("form[action=?][method=post]", events_path) do
      with_tag("input#event_name[name=?]", "event[name]")
      with_tag("input#event_start_at[name=?]", "event[start_at]")
      with_tag("textarea#event_description[name=?]", "event[description]")
    end
  end
end
