package com.rubygeek.sandbox.client;

import java.util.ArrayList;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;


public class LanguageList extends Composite {

  interface MyUiBinder extends UiBinder<Widget, LanguageList> {}
  private static MyUiBinder uiBinder = GWT.create(MyUiBinder.class);

  @UiField CheckBox rubyCheck;
  @UiField CheckBox pythonCheck;
  @UiField CheckBox javaCheck;
  @UiField CheckBox phpCheck;
  @UiField Button button;
  
  public LanguageList() {
	  // bind XML file of same name of this class to this class
	  initWidget(uiBinder.createAndBindUi(this));
	  
	  final ArrayList<CheckBox> boxes = new ArrayList<CheckBox>();
	  boxes.add(rubyCheck);
	  boxes.add(pythonCheck);
	  boxes.add(javaCheck);
	  boxes.add(phpCheck);
		
	    // add button and handler to alert the values of checkboxes
		button.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				String output = "";
				for(CheckBox box : boxes) {
					if (box.getValue()) {
						output += box.getFormValue() + ", ";
					}
				}
				Window.alert("You checked: "+ output);
			}
		});

  }
}