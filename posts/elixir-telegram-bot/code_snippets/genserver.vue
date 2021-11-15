<template>
<div>defmodule StocksBot do
  use GenServer
  @basic_url "https://api.telegram.org/bot<Токен от Botfather>

  def start_link(args) do
    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  @impl true
  def init(:ok) do
    get_updates()
    {:ok, %{}}
  end
...
</div>
</template>
