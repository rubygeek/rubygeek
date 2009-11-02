package com.rubygeek.sandbox.client;

public class FriendModel {
	private String name;
	private String email;
	private String phone;
	
	private FriendPresenter presenter;
	
	public FriendModel() {
		
	}

	public void setPresenter(FriendPresenter presenter) {
	  this.presenter = presenter;	
	}
	
	public void save() {
		presenter.displayData(this.toString());
	}
	
	public void update(String name, String email, String phone) {
		//  update this data
		this.setName(name);
		this.setEmail(email);
		this.setPhone(phone);
	}
	
	protected boolean isValid() {
	  boolean valid = isName() & isEmail() & isPhone();
	  if (!valid) {
		  //eventBus.publish("error")
	  } 
		  return valid;
	}
	// when testing use visible for testing
	protected boolean isName() {
		return (this.name != "") || (this.name != null);
	}
	
	protected boolean isEmail() {
		return (this.email != "") || (this.email != null);
	}
	
	protected boolean isPhone() {
		return (this.phone != "") || (this.phone != null);
	}
	
	
	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPhone() {
		return phone;
	}
	
	public String toString() {
		return "Name: " + getName() + " Email: " + getEmail() + " Phone: " + getPhone();
	}
	
}