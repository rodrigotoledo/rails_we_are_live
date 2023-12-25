Rails.application.routes.draw do
  resource :example, constraints: -> { Rails.env.development? }
  # Defines the root path route ("/")
  root "home#index"
end
