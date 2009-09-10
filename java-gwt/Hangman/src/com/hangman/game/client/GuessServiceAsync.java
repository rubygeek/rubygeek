package com.hangman.game.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.hangman.game.dao.Game;

/**
 * The async counterpart of <code>GuessService</code>.
 */
public interface GuessServiceAsync {
	void sendGuess(Game game,
			AsyncCallback<Game> callback);
}
