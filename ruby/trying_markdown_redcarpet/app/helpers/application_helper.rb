module ApplicationHelper
  def markdown(text)
    options = [:hard_wrap, :filter_html, :autolink, :fenced_code, :gh_blockcode]
    raw Redcarpet.new(text, *options).to_html.html_safe
  end
end
