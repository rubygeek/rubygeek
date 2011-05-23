Account = (customer, cart) ->
  @customer = customer
  @cart = cart
  
  $('.shoppin_cart').click(event) =>
    @customer.purchase @cart