class UserSerializer < ActiveModel::Serializer
  # attributes :id, :username, :first_name, :last_name, :email, :password_digest, :avatar_url
  attributes :id, :username, :first_name, :avatar_url, :admin

end
