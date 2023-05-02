export const finditCode1 = `
# app/models/post.rb

class Post < ApplicationRecord
    belongs_to :user
    belongs_to :category

    validates :post_title, :post_body, :price, presence: true

    include PgSearch::Model
    
    pg_search_scope :search_posts,
        against: [ :post_title, :post_body, :category_name, :sub_category_name ],
        using: { tsearch: { prefix: true } }

    has_one_attached :photo
end
`;

export const finditCode2 = `
# app/controllers/pages_controller.rb

class PagesController < ApplicationController
    skip_before_action :authenticate_user!, only: [ :dashboard ]

    def dashboard
        if params[:query].present?
            @search_results = Post.search_posts(params[:query])
        else
            @search_results = nil
        end
    end
end
`;

export const finditCode3 = `
<!-- app/views/pages/dashboard.html.erb -->
                                    
<div class="search-results w-100">
    <% unless @search_results == nil %>
        <% if @search_results.empty? %>
            <h3 class="no-results">No results for your search.</h3>
        <% else %>
            <h2><%= @search_results.size %> results found</h2>
            <div class="row all-posts">
                <% @search_results.each do |post| %>
                    <div class="col all-posts-card">
                        <%= link_to post_path(post), class: "all-posts-link" do %>
                            <%= attached_photo(post, 400) %>
                            <div class="post-details">
                            <p class="all-posts-location">Oslo</p>
                            <p class="all-posts-description"><%= post.post_title.capitalize %></p>
                            <span>€ <%= post.price %></span>
                            </div>
                        <% end %>
                    </div>
                <% end %>
            </div>
        <% end %>
    <% end %>
</div>
`;

export const finditCode4 = `
// app/javascript/controllers/new_post_controller.js

const data = [
    {
        category: 'Bicycles',
        subcategories: ["Electrical", "Hybrid", "Offroad", "Racer", "Other"]
    },
    {
        category: 'Electronics',
        subcategories: ["Computers", "Photo", "TV", "Household", "Smartphones"]
    },
    {
        category: 'Home',
        subcategories: ["Furniture", "Lamps", "Kitchen"]
    },
    {
        category: 'Pets',
        subcategories: ["Bird", "Cat", "Dog", "Fish", "Horse"]
    },
    {
        category: 'Sports',
        subcategories: ["Ballsport", "Golf", "Outdoors", "Winter", "Water"]
    },
    {
        category: 'Vehicles',
        subcategories: ["Car", "Motorcycle", "Truck"]
    },
    {
        category: 'Work',
        subcategories: ["Fulltime", "Parttime"]
    },
    {
        category: 'Boats',
        subcategories: ["Sailboat", "Speedboat", "Yacht"]
    }
];

// Connects to data-controller="new-post"
export default class extends Controller {
    
    static targets = ["category", "subcategory"]
    
    connect() {
        data.forEach(item => {
            const option = document.createElement('option');
            option.text = item.category;
            this.categoryTarget.add(option);
        });
    }
    
    changeSub(event) {
        const category = event.target.value;
        const selectedData = data.find(item => item.category === category);
        this.subcategoryTarget.innerHTML = '';
        selectedData.subcategories.forEach(subcategory => {
            const option = document.createElement('option');
            option.text = subcategory;
            this.subcategoryTarget.add(option);
        });
    }
}
`;