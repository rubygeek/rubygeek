require "minitest_helper"

class ContactControllerTest < MiniTest::Rails::Controller
  before do
    @contact = contacts(:one)
  end

  def test_index
    get :index
    assert_response :success
    assert_not_nil assigns(:contacts)
  end

  def test_new
    get :new
    assert_response :success
  end

  def test_create
    assert_difference('Contact.count') do
      post :create, contact: @contact.attributes
    end

    assert_redirected_to contact_path(assigns(:contact))
  end

  def test_show
    get :show, id: @contact.to_param
    assert_response :success
  end

  def test_edit
    get :edit, id: @contact.to_param
    assert_response :success
  end

  def test_update
    put :update, id: @contact.to_param, contact: @contact.attributes
    assert_redirected_to contact_path(assigns(:contact))
  end

  def test_destroy
    assert_difference('Contact.count', -1) do
      delete :destroy, id: @contact.to_param
    end

    assert_redirected_to contacts_path
  end
end
