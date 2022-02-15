Rails.application.routes.draw do
  resources :response_to_comments
  resources :reservations, only: [:index, :create, :show, :destroy]
  resources :calendars, only: [:show, :index]
  resources :comment_ratings
  resources :users, only: [:show, :create]
  resources :photos, only: [:index, :show]
  resources :amenities
  resources :properties, only: [:index, :show]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Defines the root path route ("/")
  # root "articles#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", 
    to: "fallback#index", 
    constraints: ->(req) { !req.xhr? && req.format.html? }

end
