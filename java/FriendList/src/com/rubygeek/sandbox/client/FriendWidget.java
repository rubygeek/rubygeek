package com.rubygeek.sandbox.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class FriendWidget extends Composite {
	  @UiField FlexTable friendList;      
	  @UiField TextBox name;
	  @UiField TextBox email;
	  @UiField TextBox phone;
	  
	  private FriendPresenter presenter;

	  @UiHandler("save")
	  void save(ClickEvent event) {
		  presenter.save();
	  }
	  
	  @UiHandler("cancel")
	  void cancel(ClickEvent event) {
		  friendList.clear(true);
	  }
	  
	  interface MyUiBinder extends UiBinder<Widget, FriendWidget> {}
	  private static MyUiBinder uiBinder = GWT.create(MyUiBinder.class);
	
	  public FriendWidget() {
		  // bind XML file of same name of this class to this class
		  initWidget(uiBinder.createAndBindUi(this));	  
	  }
	  
	  public void displayData(String data) {
		  int nextRow = friendList.getRowCount() + 1;
		  friendList.setText(nextRow, 0, data);
	  }
	  
	  public void setPresenter(FriendPresenter presenter) {
		  this.presenter = presenter;
	  }
	  
	  public String getName() {
		  return name.getText();
	  }
	  
	  public void setName(String nameText) {
		  name.setText(nameText);
	  }
	  
	  public String getEmail() {
		  return email.getText();
	  }
	  
	  public void setEmail(String emailText){
		  email.setText(emailText);
	  }
	  
	  public String getPhone() {
		  return phone.getText();
	  }
	  
	  public void setPhone(String phoneText) {
		  phone.setText(phoneText);
	  }
}
