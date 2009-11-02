package com.rubygeek.sandbox.client;

public class FriendPresenter {
  private FriendWidget view;
  private FriendModel model;
  
  public FriendPresenter(FriendModel model, FriendWidget view) {
	  this.view = view;
	  this.model = model;
  }

  public void init() {
	  model.setPresenter(this);
	  view.setPresenter(this);
	  
	  view.setName("Nola");
	  view.setEmail("nola@rubygeek.com");
	  view.setPhone("555-333-2222");
  }
  public void save() {
	  updateModel();
	  if (model.isValid()) {
		  model.save();
	  }
  }
  private void updateModel() {
	  model.update(view.getName().trim(), view.getEmail().trim(), view.getPhone().trim());
  }

  public void displayData(String data) {
	  view.displayData(data);
  }
  //pass services here
  public static FriendWidget createFriendWidget() {
	FriendWidget view = new FriendWidget();
	FriendPresenter presenter = new FriendPresenter(new FriendModel(), view);
	presenter.init();
	return view;
  }
  

}