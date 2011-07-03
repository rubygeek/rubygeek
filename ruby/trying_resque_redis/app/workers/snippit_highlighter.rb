require "net/http"

class SnippitHighlighter  
  @queue = :snippits_queue  
  def self.perform(snippit_id)  
    snippit = Snippit.find(snippit_id)  
    uri = URI.parse('http://pygments.appspot.com/')  
    request = Net::HTTP.post_form(uri, {'lang' => snippit.language, 'code' => snippit.code})  
    snippit.update_attribute(:highlighted_code, request.body)  
  end  
end