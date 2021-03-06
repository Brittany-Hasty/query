Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]  
    resources :topics, only: [:create, :show, :index]
    resources :questions
    resources :comments, except: [:show, :index]
  end

  root to: 'root#root'
end
