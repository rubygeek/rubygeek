class Address {
	private String street;
	private String street2;
	private String city;
	private String state;
	private String zip;
	private String addressType;
	
	public void setStreet(String street) {
		this.street = street;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet2(String street2) {
		this.street2 = street2;
	}

	public String getStreet2() {
		return street2;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCity() {
		return city;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getState() {
		return state;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getZip() {
		return zip;
	}


	public void setAddressType(String addressType) {
		this.addressType = addressType;
	}

	public String getAddressType() {
		return addressType;
	}

	private Address(Builder builder) {
		setStreet(builder.street);
		setCity(builder.city);
		setState(builder.state);
		setZip(builder.zip);
		setStreet2(builder.street2);
		setAddressType(builder.addressType);
	}

	
	public static class Builder {
	    // required
		private String street;
		private String city;
		private String state = "ZZ";
		private String zip = "99999";
		
		//optional
		private String street2;
		private String addressType = "HOME"; //change to enum

		public Builder() {}
		public Builder street(String val) { street = val; return this; }
		public Builder city(String val) { city = val;  return this;}
		public Builder state(String val) { state = val;  return this;}
		public Builder zip(String val) { zip = val;  return this;}
		public Builder street2(String val) { street2 = val;  return this;}
		public Builder addressType(String val) { addressType = val;  return this;}
		
		public Address build() {
			return new Address(this);
		}
		
	}
	
}