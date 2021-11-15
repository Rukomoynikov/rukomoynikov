<template>
<div>...
defp parse_messages(messages) do
  Enum.each(messages, fn message ->
    answer_to_message(message)
  end)

  messages
end

defp answer_to_message(message) do
  %{
    "message" => %{
      "chat" => %{"id" => chat_id},
      "text" => original_text
    }
  } = message

  answer = %{
    text: "Hello: #{original_text}",
    chat_id: chat_id
  }

  HTTPoison.post(
    @basic_url <> "sendMessage",
    Jason.encode!(answer),
    [{"Content-Type", "application/json"}]
  )
end
</div>
</template>
