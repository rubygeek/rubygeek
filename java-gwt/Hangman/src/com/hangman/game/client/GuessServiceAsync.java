package com.hangman.game.client;

import java.util.HashMap;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The async counterpart of <code>GuessService</code>.
 */
public interface GuessServiceAsync {
	void sendGuess(String word, String guess,
			AsyncCallback<HashMap<String, String>> callback);
}
