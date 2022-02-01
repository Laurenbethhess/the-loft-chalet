Rails.application.routes.draw do

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
