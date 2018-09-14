 # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 Rails.application.routes.draw do 
  root to: 'home#index'
  namespace :api do 
    namespace :v1 do 
     resources :drinks, only: [:index, :create, :destroy, :update]
    end 
  end 
end
