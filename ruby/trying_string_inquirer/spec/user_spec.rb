require 'spec_helper'
require_relative '../user'

describe User do
  it "should return status of user" do
    user = User.new(status: "active", language: 'english')
    expect(user.status.active?).to be_true
  end

  it "should return true for language if english" do
    user = User.new(status: 'active', language: 'english')
    expect(user.language.english?).to be_true
  end

  it "should return false for language if its not spanish" do
    user = User.new(status: 'active', language: 'english')
    expect(user.language.spanish?).to be_false
  end

  context "should change the value and still work" do
    before do
      @user = User.new(status: 'active', language: 'english')
    end
    it "should start out as english" do
      expect(@user.language.english?).to be_true
    end
    it "should change to spanish" do
      @user.language = "spanish"
      expect(@user.language.spanish?).to be_true
    end
    it "should not be english anymore" do
      @user.language = "spanish"
      expect(@user.language.english?).to be_false
    end
  end
end
