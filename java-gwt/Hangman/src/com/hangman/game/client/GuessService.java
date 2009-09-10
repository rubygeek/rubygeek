package com.hangman.game.client;

import java.util.HashMap;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * The client side stub for the RPC service.
 */
@RemoteServiceRelativePath("guess")
public interface GuessService extends RemoteService {
	HashMap<String, String> sendGuess(String word, String guess);
}
