require 'test_helper'

class SnippitsControllerTest < ActionController::TestCase
  setup do
    @snippit = snippits(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:snippits)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create snippit" do
    assert_difference('Snippit.count') do
      post :create, :snippit => @snippit.attributes
    end

    assert_redirected_to snippit_path(assigns(:snippit))
  end

  test "should show snippit" do
    get :show, :id => @snippit.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @snippit.to_param
    assert_response :success
  end

  test "should update snippit" do
    put :update, :id => @snippit.to_param, :snippit => @snippit.attributes
    assert_redirected_to snippit_path(assigns(:snippit))
  end

  test "should destroy snippit" do
    assert_difference('Snippit.count', -1) do
      delete :destroy, :id => @snippit.to_param
    end

    assert_redirected_to snippits_path
  end
end
