export const homifyCode1 = `
// app/javascript/controllers/swipe_controller.js

import { Controller } from "@hotwired/stimulus"
import '../swipe_animation'

// Connects to data-controller="swipe"
export default class extends Controller {
    static targets = ["match", "like", "nope"]
    
    // modal pop-up with show listing
    toggle(event) {
        document.getElementById(\`button\${event.path[2].dataset.id}\`).click()
    }
    
    
    connect() {
        // Swiping function is made with Hammer.JS, see below.
        
        /*! Hammer.JS - v2.0.8 - 2016-04-23
        * https://hammerjs.github.io/
        *
        * Copyright (c) 2016 Jorik Tangelder;
        * Licensed under the MIT license */
        
        // function to show match-animation for a set time
        let matchCounter = 0;
        let matchAnimation = () => {
            matchCounter += 1;
            if (matchCounter > 2) {
                const match = document.getElementById("match-animation");
                match.classList.remove('d-none');
                setTimeout(() => {
                    match.classList.add('d-none')
                }, 2300);
            }
        }
        
        
        //function to fade in/out "like"
        let fadeInOutLike = () => {
            const like = document.getElementById("fade-in-out-like");
            like.classList.remove('d-none');
            setTimeout(() => {
                like.classList.add('d-none');
            },2000);
        }
        
        //function to fade in/out "like"
        let fadeInOutNope = () => {
            const nope = document.getElementById("fade-in-out-nope");
            nope.classList.remove('d-none');
            setTimeout(() => {
                nope.classList.add('d-none');
            }, 2000);
        }
        
        // selecting element with class profile to let profiles
        let profiles = document.querySelectorAll('.profile');
        
        const maxAngle = 42;
        const smooth = 0.3;
        const threshold = 42;
        const thresholdMatch = 150;
        profiles.forEach(setupDragAndDrop);
        
        function setupDragAndDrop(profile) {
            const hammertime = new Hammer(profile);
            
            hammertime.on('pan', function (e) {
                profile.classList.remove('profile--back');
                let posX = e.deltaX;
                let posY = Math.max(0, Math.abs(posX * smooth) - 42);
                let angle = Math.min(Math.abs(e.deltaX * smooth / 100), 1) * maxAngle;
                if (e.deltaX < 0) {
                    angle *= -1;
                }
                
                // user is selecting and holding the card and can move it left or right, back and forth.
                profile.style.transform = \`translateX(\${posX}px) translateY(\${posY}px) rotate(\${angle}deg)\`;
                profile.classList.remove('profile--matching');
                profile.classList.remove('profile--nexting');
                if (posX > thresholdMatch) {
                    profile.classList.add('profile--matching');
                    console.log('✅ User is about to swipe yes')
                    
                    fadeInOutLike();
                } else if (posX < -thresholdMatch) {
                    profile.classList.add('profile--nexting');
                    console.log('⛔ User is about to swipe no');
                    
                    fadeInOutNope();
                }
                
                // user releases card on the left (nope),
                // near the middle (back to middle, no action),
                // or on the right (yes)
                if (e.isFinal) {
                    // right side, yes.
                    profile.style.transform = \`\`;
                    if (posX > thresholdMatch) {
                        profile.classList.add('profile--match');
                        console.log('✅ Yes (user is created in matches table)');
                        
                        matchAnimation();
                        
                        if (matchCounter > 2) {
                            // creating a new match in matches-table.
                            console.log( \`matchCounter is \${matchCounter}\`);
                            console.dir(document.location.search.split('=')[1]);
                            const searchId = document.location.search.split('=')[1];
                            const url =  \`/listings/\${profile.dataset.id}/matches\`;
                            const body = {match: {listing_id: profile.dataset.id, search_id: searchId}};
                            fetch(url, {
                                method: "POST",
                                body: JSON.stringify(body),
                                headers: {
                                    'Content-Type': 'application/json',
                                    "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content}
                                })
                            }
                            
                            // left side, nope
                    } else if (posX < -thresholdMatch) {
                        profile.classList.add('profile--next');
                        console.log('⛔ No!');
                    } else {
                        profile.classList.add('profile--back');
                    }
                }
            });
        }
    }
}
`;

export const homifyCode2 = `
# app/controllers/listings_controller.rb

class ListingsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  
  def index
    # user cannot see and swipe on own listings.
    @listings = Listing.where.not(user_id: current_user.id)

    if params[:search].present?
      @search = Search.find(params[:search])

      ["price",
      "bedrooms",
      "bathrooms",
      "address",
      "city",
      "country",
      "street",
      "postcode",
      "district",
      "photos",
      "description",
      "property_type",
      "area_size",
      "floor",
      "garden",
      "balcony",
      "parking",
      "family_status",
      "occupation",
      "pets",
      "lift",
      "furnished"].each do |column|
        value = @search.send(column.to_sym)
        if value.present?
          if column == "price"
            query = "#{column} > :min AND #{column} < :max"
          else
            query = "#{column} = :value"
          end
          p query, value
          @listings = @listings.where(query, value: value, min: @search.price, max: @search.price_max)
        end
      end
    else
      @listings = @listings.global_search(params[:city]) if params[:city].present?

      if params[:min_price].present? && params[:max_price].present?
        @listings = @listings.where(price: params[:min_price]..params[:max_price])
      elsif params[:min_price].present?
        @listings = @listings.where('price >= ?', params[:min_price])
      elsif params[:max_price].present?
        @listings = @listings.where('price <= ?', params[:max_price])
      end

      @listings = @listings.where(bedrooms: params[:bedrooms]) if params[:bedrooms].present?
    end

    # for creating the maps in the info windows
    @markers = @listings.geocoded.map do |listing|
      {
        lat: listing.latitude,
        lng: listing.longitude,
        id: listing.id,
        info_window: render_to_string(partial: "info_window", locals: {listing: listing})
      }
    end
  end

  def show
    @listing = Listing.find(params[:id])
    @viewing = Viewing.new
    @match = current_user.matches.find_by(listing: @listing)
    @listings = Listing.where(id: @listing.id)
    @markers = @listings.geocoded.map do |listing|
      {
        lat: listing.latitude,
        lng: listing.longitude,
        id: listing.id,
        info_window: render_to_string(partial: "info_window", locals: {listing: listing})
      }
    end
  end

  def new
    @listing = Listing.new
  end

  def create
    @user = current_user
    @listing = Listing.new(listing_params)
    @listing.user = current_user
    @listing.save

    if @listing.save!
      redirect_to listing_path(@listing.id)
    else
      render :new
    end
  end

  def edit
    @listing = Listing.find(params[:id])
  end

  def update
    @user = current_user
    @listing = Listing.find(params[:id])
    @listing.update!(listing_params)
    redirect_to listing_path(@listing.id)
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    redirect_to profile_path
  end

  private

  def listing_params
    params.require(:listing).permit(:price, :bedrooms, :bathrooms, :address, :description, :property_type, :area_size, :floor, :garden, :balcony, :parking, :family_status, :occupation, :pets, :lift, :furnished, :user_id, :city, :district, :postcode, :street, :country, photos: [])
  end
end
`;

export const homifyCode3 = `
<!-- app/views/listings/index.html.erb -->

<div data-controller="swipe">
  <div class="background-text">
    <p>There are no more listings that match your criteria. Go back and edit your search.</p>
  </div>
  <%# iterating through all the listings to create the swipe-cards %>
  <div class="profiles">
    <% @listings.each do |listing| %>

      <!-- Modal -->
      <button
              data-swipe-target="modal"
              type="button"
              class="btn btn-primary d-none"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal<%= listing.id %>"
              id="button<%= listing.id %>"
              >
      </button>
      <div class="bg-modal modal fade" id="exampleModal<%= listing.id %>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <i type="button" class="fa-solid fa-xmark btn-close-custom" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>
            <div class="modal-body">

              <%# listing show page %>
              <div>
                <div class="apartment_name">
                  <h3><%="#{listing.district}"%></h3>
                </div>
                <div class="show_image">
                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <% listing.photos.each_with_index do |photo, index| %>
                      <div class="carousel-item <%="active" if index == 0%>">
                      <%= cl_image_tag photo.key, height: 400, width: 400, crop: :fill %>
                      </div>
                    <% end %>
                    </div>
                  </div>
                </div>
                <div class="apartment_information_card mt-4">
                  <h2 class="listing-price">€<%= listing.price.to_s.gsub(/\B(?=(...)*\b)/, '.') %></h2>
                </div>
                <div class="d-flex flex-row mt-4">
                  <ul class="d-flex flex-column col-6" style="list-style: none; margin: 0px; padding: 0px">
                    <li><p><i class="fa-solid fa-bed me-4"></i><%="#{listing.bedrooms}"%></p></li>
                    <li><p><i class="fa-solid fa-shower me-4"></i><%="#{listing.bathrooms}"%></p></li>
                    <li><p><i class="fa-solid fa-square me-4"></i><%="#{listing.area_size} sqm"%></p></li>
                    <li><p><i class="fa-solid fa-stairs me-4"></i><%="#{listing.floor}"%></p></li>
                    <li><p><i class="fa-solid fa-sun me-4"></i><%="#{listing.balcony}"%></p></li>
                  </ul>
                  <ul class="d-flex flex-column col-6" style="list-style: none; margin: 0px; padding: 0px">
                    <li><p><i class="fa-solid fa-house me-4"></i><%="#{listing.property_type}"%></p></li>
                    <li><p><i class="fa-solid fa-chair me-4"></i><%= listing.furnished ? "yes" : "no" %></p></li>
                    <li><p><i class="fa-solid fa-car me-4"></i><%= listing.parking ? "yes" : "no" %></p></li>
                    <li><p><i class="fa-solid fa-tree me-4"></i><%= listing.garden ? "yes" : "no" %></p></li>
                    <li><p><i class="fa-solid fa-elevator me-4"></i><%= listing.lift ? "yes" : "no" %></p></li>
                  </ul>
                </div>


                <div style="width: 100%; height: 300px; border-radius: 10px;"
                  data-controller="map"
                  data-map-markers-value="<%= @markers.select { |marker| marker[:id] == listing.id }.to_json %>"
                  data-map-api-key-value="<%= ENV['MAPBOX_API_KEY'] %>">
                </div>

                <div class="apartment_information_card mt-4">
                  <p><%="#{listing.description}"%></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

        <%# Swipe card %>
        <div
          class="profile"
          data-id="<%= listing.id %>"
          data-action="click->swipe#toggle"
          >
          <div class="swipe_card mb-5">
            <div class="match-percentage"><p><%= rand(69..97) %>% match</p></div>
            <div class="swipe_card_image"
                style="background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8)),
                          url(<%= cl_image_path listing.photos.first.key %>);
                        display: flex; align-items: end">
              <div class="swipe_card_header ms-3">
                <h2><%= "#{listing.district}" %></h2>
                <h3><%= "#{listing.city}" %></h3>
                <h2 class="listing-price">€ <%= listing.price.to_s.gsub(/\B(?=(...)*\b)/, '.') %></h2>
              </div>
            </div>
            <div class="swipe_card_description mt-4 ms-3">

              <div class="d-flex flex-row mt-4">
                <ul class="d-flex flex-column col-6" style="list-style: none; margin: 0px; padding: 0px">
                  <li><p><i class="fa-solid fa-square me-4"></i><%="#{listing.area_size} sqm"%></p></li>
                  <li><p><i class="fa-solid fa-bed me-4"></i><%="#{listing.bedrooms}"%></p></li>
                  <li><p><i class="fa-solid fa-shower me-4"></i><%="#{listing.bathrooms}"%></p></li>
                  <li><p><i class="fa-solid fa-stairs me-4"></i><%="#{listing.floor}"%></p></li>
                </ul>
                <ul class="d-flex flex-column col-6" style="list-style: none; margin: 0px; padding: 0px">
                  <li><p><i class="fa-solid fa-house me-4"></i><%="#{listing.property_type}"%></p></li>
                  <li><p><i class="fa-solid fa-chair me-4"></i><%="#{listing.furnished ? 'yes' : 'no'}"%></p></li>
                  <li><p><i class="fa-solid fa-elevator me-4"></i><%="#{listing.lift ? 'yes' : 'no'}"%></p></li>
                  <li><p><i class="fa-solid fa-car me-4"></i><%="#{listing.parking ? 'yes' : 'no'}"%></p></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
    <% end %>
  </div>

  <%# match_animation %>
  <div id="match-animation" class="d-none" data-swipe-target="match">
  <div class="blur"></div>
    <div class="container-animation">
      <div class="coast">
        <div class="wave-rel-wrap">
          <div class="wave"></div>
        </div>
      </div>
      <div class="coast delay">
        <div class="wave-rel-wrap">
          <div class="wave delay"></div>
        </div>
      </div>
      <div class="text text-m">m</div>
      <div class="text text-a">a</div>
      <div class="text text-t">t</div>
      <div class="text text-c">c</div>
      <div class="text text-h">h</div>
    </div>
  </div>

  <%# like_nope_animation %>
  <%# like %>
  <div class="fade-in-out d-none" id="fade-in-out-like" data-swipe-target="like">
    <div class="fade-in-out-container">
      <h1 class="fade-in-out-text">like</h1>
    </div>
  </div>

  <%# nope %>
  <div class="fade-in-out-nope d-none" id="fade-in-out-nope" data-swipe-target="nope">
    <div class="fade-in-out-container-nope">
      <h1 class="fade-in-out-text-nope">nope</h1>
    </div>
  </div>

</div>
`;

export const homifyCode4 = `
ActiveRecord::Schema[7.0].define(version: 2022_11_29_083308) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "listings", force: :cascade do |t|
    t.integer "price"
    t.integer "bedrooms"
    t.integer "bathrooms"
    t.string "address"
    t.string "photos"
    t.text "description"
    t.string "property_type"
    t.integer "area_size"
    t.integer "floor"
    t.boolean "garden"
    t.integer "balcony"
    t.boolean "parking"
    t.string "family_status"
    t.string "occupation"
    t.boolean "pets"
    t.boolean "lift"
    t.boolean "furnished"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "postcode"
    t.string "district"
    t.string "street"
    t.string "country"
    t.string "city"
    t.float "latitude"
    t.float "longitude"
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "matches", force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "pending"
    t.bigint "search_id"
    t.bigint "user_id", null: false
    t.index ["listing_id"], name: "index_matches_on_listing_id"
    t.index ["search_id"], name: "index_matches_on_search_id"
    t.index ["user_id"], name: "index_matches_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "content"
    t.bigint "user_id", null: false
    t.bigint "match_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["match_id"], name: "index_messages_on_match_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "searches", force: :cascade do |t|
    t.integer "price"
    t.integer "bedrooms"
    t.integer "bathrooms"
    t.string "address"
    t.string "photos"
    t.text "description"
    t.string "property_type"
    t.integer "area_size"
    t.integer "floor"
    t.boolean "garden"
    t.integer "balcony"
    t.boolean "parking"
    t.string "family_status"
    t.string "occupation"
    t.boolean "pets"
    t.boolean "lift"
    t.boolean "furnished"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "postcode"
    t.string "district"
    t.string "street"
    t.string "country"
    t.string "city"
    t.integer "price_max"
    t.index ["user_id"], name: "index_searches_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "profile_picture"
    t.string "gender"
    t.integer "age"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "viewings", force: :cascade do |t|
    t.date "date"
    t.time "start_time"
    t.time "end_time"
    t.bigint "match_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "pending"
    t.index ["match_id"], name: "index_viewings_on_match_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "listings", "users"
  add_foreign_key "matches", "listings"
  add_foreign_key "matches", "searches"
  add_foreign_key "matches", "users"
  add_foreign_key "messages", "matches"
  add_foreign_key "messages", "users"
  add_foreign_key "searches", "users"
  add_foreign_key "viewings", "matches"
end
`;
