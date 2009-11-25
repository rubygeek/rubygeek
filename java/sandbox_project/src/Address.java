class Address {
	private final String street;
	private final String street2;
	private final String city;
	private final String state;
	private final String zip;
	private final String addressType;

	public String getStreet() { return this.street; }
	public String getStreet2() { return this.street2; }
	public String getCity() { return this.city; }
	public String getState() { return this.state; }
	public String getZip() { return this.zip; }
	public String getAddressType() { return this.addressType; }
	
	private Address(Builder builder) {
		street = builder.street;
		city = builder.city;
		state = builder.state;
		zip = builder.zip;
		street2 = builder.street;
		addressType = builder.addressType;
	}

	
	public static class Builder {
	    // required
		private final String city;
		private final String state;
	
		//optional
		private String street = null;
		private String zip = null;
		private String street2 = null;
		private String addressType = "HOME"; //change to enum

		public Builder(String city, String state) {
			this.city = city;
			this.state = state;
		}
		public Builder street(String val) { this. street = val; return this; }
	    public Builder zip(String val) { this.zip = val;  return this;}
		public Builder street2(String val) { this.street2 = val;  return this;}
		public Builder addressType(String val) { this.addressType = val;  return this;}
		
		public Address build() {
			return new Address(this);
		}
		
	}
	
}