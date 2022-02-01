Rails.application.routes.draw do
  resources :comment_ratings
  resources :users
  resources :photos
  resources :amenities
  resources :properties

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
