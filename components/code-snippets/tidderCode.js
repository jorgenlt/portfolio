export const tidderCode1 = `
# app/controllers/posts_controller.rb

def upvote
    @post = Post.find(params[:id])
    if current_user.voted_up_on? @post
        @post.unvote_by current_user
    else
        @post.upvote_by current_user
    end
    redirect_to root_path
end

def downvote
    @post = Post.find(params[:id])
    if current_user.voted_down_on? @post
        @post.unvote_by current_user
    else
        @post.downvote_by current_user
    end
    redirect_to root_path
end
`;

export const tidderCode2 = `
<!-- app/views/posts/_upvote_link.html.erb -->

<%= content_tag "div", id: "upvote-#{post.id}" do %>
    <%= link_to upvote_post_path(post), method: :patch, remote: true, data: { disable_with: "voting..." } do %>
        <% if current_user.voted_up_on? post %>
            <i class="fa-solid fa-arrow-up" style="color: green;"></i>
        <% else %>
            <i class="fa-solid fa-arrow-up"></i>
        <% end %>
    <% end %>
<% end %>
`;
