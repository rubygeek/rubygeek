package com.hangman.game.client;

import java.util.HashMap;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Hangman implements EntryPoint {
	/**
	 * The message displayed to the user when the server cannot be reached or
	 * returns an error.
	 */
	private static final String SERVER_ERROR = "An error occurred while "
			+ "attempting to contact the server. Please check your network "
			+ "connection and try again.";

	/**
	 * Create a remote service proxy to talk to the server-side Greeting
	 * service.
	 */
	private final GuessServiceAsync guessService = GWT
			.create(GuessService.class);

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		final Button sendButton = new Button("Send");
		final TextBox guessField = new TextBox();
		final TextBox wordField = new TextBox();
		final HTML serverResponseLabel = new HTML();
		wordField.setText("Apple"); // sample word
		guessField.setText("");

		// We can add style names to widgets
		sendButton.addStyleName("sendButton");

		// Add the nameField and sendButton to the RootPanel
		// Use RootPanel.get() to get the entire body element
		RootPanel.get("wordContainer").add(wordField);
		RootPanel.get("guessContainer").add(guessField);
		RootPanel.get("sendButtonContainer").add(sendButton);
		RootPanel.get("status").add(serverResponseLabel);

		// Focus the cursor on the name field when the app loads
		guessField.setFocus(true);
		guessField.selectAll();

		// Create a handler for the sendButton and nameField
		class MyHandler implements ClickHandler, KeyUpHandler {
			/**
			 * Fired when the user clicks on the sendButton.
			 */
			public void onClick(ClickEvent event) {
				sendGuessToServer();
			}

			/**
			 * Fired when the user types in the guessField.
			 */
			public void onKeyUp(KeyUpEvent event) {
				if (event.getNativeKeyCode() == KeyCodes.KEY_ENTER) {
					sendGuessToServer();
				}
			}

			/**
			 * Send the letter from the guessField to the server and wait for a
			 * response.
			 */
			private void sendGuessToServer() {
				sendButton.setEnabled(false);
				String word = wordField.getText();
				String guess = guessField.getText();
				guessService.sendGuess(guess,
						new AsyncCallback<String>() {
							public void onFailure(Throwable caught) {
								// Show the RPC error message to the user
								serverResponseLabel
										.addStyleName("serverResponseLabelError");
								serverResponseLabel.setHTML(SERVER_ERROR
										+ " : " + caught);
							}

							public void onSuccess(Game result) {
								wordField.setText(result);
							}
						});
			}
		}

		// Add a handler to send the name to the server
		MyHandler handler = new MyHandler();
		sendButton.addClickHandler(handler);
		guessField.addKeyUpHandler(handler);
	}
}
