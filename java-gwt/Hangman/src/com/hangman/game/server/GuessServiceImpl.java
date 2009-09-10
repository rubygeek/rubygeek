package com.hangman.game.server;

import java.util.HashMap;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.hangman.game.client.GuessService;
import com.hangman.game.dao.Game;

/**
 * The server side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class GuessServiceImpl extends RemoteServiceServlet implements
		GuessService {

	public Game sendGuess(String word, String guess) {
		Game game = new Game();
		game.addGuess(guess);
		game.addWord(word);
		return game;
	}
}
