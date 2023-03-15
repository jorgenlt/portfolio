Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # resources :pages, only: :url_shortener, as: :url_shortener

  get '/url-shortener', to: 'pages#url_shortener'
  get '/choropleth_map', to: 'pages#choropleth_map'
  get '/currency_converter', to: 'currency_converter#currency_converter'
end
