class ApplicationController < ActionController::Base
  
  # this line of code is from the medium article (https://medium.com/quick-code/simple-rails-crud-app-with-react-frontend-using-react-rails-gem-b708b89a9419
  protect_from_forgery with: :null_session
end
