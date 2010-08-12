require 'test_helper'

class FriendsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:friends)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create friend" do
    assert_difference('Friend.count') do
      post :create, :friend => { }
    end

    assert_redirected_to friend_path(assigns(:friend))
  end

  test "should show friend" do
    get :show, :id => friends(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => friends(:one).to_param
    assert_response :success
  end

  test "should update friend" do
    put :update, :id => friends(:one).to_param, :friend => { }
    assert_redirected_to friend_path(assigns(:friend))
  end

  test "should destroy friend" do
    assert_difference('Friend.count', -1) do
      delete :destroy, :id => friends(:one).to_param
    end

    assert_redirected_to friends_path
  end
end
