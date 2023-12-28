defmodule StocksBot.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [ StocksBot ]

    opts = [strategy: :one_for_one, name: StocksBot.Supervisor]
    Supervisor.start_link(children, opts)
  end
end