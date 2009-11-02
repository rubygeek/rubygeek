package com.rubygeek.sandbox.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class AfterUiBinder implements EntryPoint {

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		LanguageList list = new LanguageList();
		RootPanel.get().add(list);
	}
}
