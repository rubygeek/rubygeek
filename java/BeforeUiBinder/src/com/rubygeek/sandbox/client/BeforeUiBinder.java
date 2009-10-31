package com.rubygeek.sandbox.client;

import java.util.ArrayList;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class BeforeUiBinder implements EntryPoint {

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		// set up array list of checkboxes with values
		
		final ArrayList<CheckBox> boxes = new ArrayList<CheckBox>();
		
		CheckBox rubyCheck = new CheckBox("Ruby");
		rubyCheck.setFormValue("ruby");
		boxes.add(rubyCheck);

		CheckBox pythonCheck = new CheckBox("Python");
		pythonCheck.setFormValue("python");
		boxes.add(pythonCheck);

		CheckBox javaCheck = new CheckBox("Java");
		javaCheck.setFormValue("java");
		boxes.add(javaCheck);
		
		CheckBox phpCheck = new CheckBox("PHP");
		phpCheck.setFormValue("php");
		boxes.add(phpCheck);
		
		// set up panel
		Panel panel = new VerticalPanel();		
		panel.add(new Label("Choose a language:"));
        
		// add checkboxes to panel
		for (CheckBox box : boxes) {
			panel.add(box);
		}
		
		// add button and handler to alert the values of checkboxes
		Button button = new Button("Submit");
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
		panel.add(button);
		
		RootPanel.get("content").add(panel);
		
	}
}
