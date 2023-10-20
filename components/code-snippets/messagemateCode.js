export const messagemateCode1 = `
// app/javascript/controllers/chatroom_subscription_controller.js

// when the user connects to the page a subscription to the channel is made.
connect() {
    this.channel = createConsumer().subscriptions.create(
        { channel: "ChatroomChannel", id: this.chatroomIdValue },
        { received: data => this.#insertMessageAndScrollDown(data) }
        )
        console.log(\`Subscribed to the chatroom with the id \${this.chatroomIdValue}.\`)
    }
    
#insertMessageAndScrollDown(data) {
    // logic to know if the sender is the current_user
    const currentUserIsSender = this.currentUserIdValue === data.sender_id
    
    // creating the whole message from the \`data.message\` string
    const messageElement = this.#buildMessageElement(currentUserIsSender, data.message)
    
    // inserting the \`message\` in the DOM
    this.messagesTarget.insertAdjacentHTML("beforeend", messageElement)
    window.scrollTo(0, document.body.scrollHeight);
}

// function to build a complete message with its two wrapping div,
// passing it the currentUserIsSender boolean, and the message string
// coming from the data:
#buildMessageElement(currentUserIsSender, message) {
    return \`
    <div class="message-row d-flex \${this.#justifyClass(currentUserIsSender)}">
    <div class="\${this.#userStyleClass(currentUserIsSender)}">
    \${message}
    </div>
    </div>
    \`
}

// two functions to return the relevant classes to position and style the message
// the user on the right and the recipient on the left, like other popular messaging services.
#justifyClass(currentUserIsSender) {
    return currentUserIsSender ? "justify-content-end" : "justify-content-start"
}

#userStyleClass(currentUserIsSender) {
    return currentUserIsSender ? "sender-style" : "receiver-style"
}

// reset the send message input field after the message is sent
resetForm(event) {
    event.target.reset()
}

// unsubscribe from the channel when user leaves the page
disconnect() {
    console.log("Unsubscribed from the chatroom")
    this.channel.unsubscribe()
}
`;

export const messagemateCode2 = `
# app/controllers/messages_controller.rb

def create
  @chatroom = Chatroom.find(params[:chatroom_id])
  @message = Message.new(message_params)
  @message.chatroom_id = @chatroom.id
  @message.user_id = current_user.id

  if message_params[:message_body].empty?
    # submit button 'send' does nothing.
  else
    # setting sender/receiver of the message
    if current_user.id == @chatroom.user_id
      @message.recipient_id = @chatroom.recipient_id
    else
      @message.recipient_id = @chatroom.user_id
    end

    # if the message is saved successfully the message is broadcasted to the Chatroom channel.
    if @message.save
      ChatroomChannel.broadcast_to(
        @chatroom,
        message: render_to_string(partial: "message", locals: { message: @message }),
        sender_id: @message.user.id
      )
      head :ok
    else
      render "chatrooms/show", status: :unprocessable_entity
      flash.alert = "Error. Message was not sent."
    end
  end
end

`;

export const messagemateCode3 = `
<!-- app/views/chatrooms/show.html.erb -->

<div class="chat"
  data-controller="chatroom-subscription"
  data-chatroom-subscription-chatroom-id-value="<%= @chatroom.id %>"
  data-chatroom-subscription-current-user-id-value="<%= current_user.id %>"
>
  <div class="messages" data-chatroom-subscription-target="messages">
    <% @chatroom.messages.each do |message| %>
      <div class="d-flex <%= message.sender?(current_user) ? 'justify-content-end' : 'justify-content-start' %>">
        <div class="<%= message.sender?(current_user) ? 'sender-style' : 'receiver-style' %>">
          <div data-controller="messagesent">
            <div data-messagesent-target="messagesent" class="d-none message-sent-at">
              <span>
              Sent <%= time_ago_in_words(message.created_at) %> ago.
              </span>
            </div>
            <div class="message" data-action="click->messagesent#messageSent">
              <div class="message-content">
                <p><%= message.message_body %></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <% end %>
  </div>

  <div id="new-message">
    <%= simple_form_for [@chatroom, @message],
      html: { data: { action: "turbo:submit-end->chatroom-subscription#resetForm" },
      class: "d-flex" } do |f| %>
      <div id="message-form">
        <div class="message-text">
          <%= f.input :message_body,
                      as: :text,
                      label: false,
                      placeholder: "New message",
                      input_html: { rows: 1 }
                    %>
        </div>
        <div class="send-message">
          <%= f.button :submit, 'SEND', class: "submit-button"%>
        </div>
      </div >
    <% end %>
  </div>
</div>
`;
