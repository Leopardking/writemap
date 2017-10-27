Writemap::Application.routes.draw do
  devise_for :users
  
  root to: "home#index"

  get 'welcome', to: :welcome, controller: 'static'
end
