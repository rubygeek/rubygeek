/**
 * 
 */
package com.hangman.game.dao;

import java.util.List;

/**
 * @author nstowe
 *
 */
public class Game {
	private String word;
	private List<String> guesses;

	public void addGuess(String guess) {
		this.guesses.add(guess);
	}
	public List<String> getGuesses() {
		return guesses;
	}
	public void setWord(String word) {
		this.word = word;
	}
	public String getWord() {
		return word;
	}
	

}
