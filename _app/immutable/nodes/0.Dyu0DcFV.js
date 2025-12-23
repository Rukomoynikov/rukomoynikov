import{f as Ae,a as we}from"../chunks/DEdac9iz.js";import{b as He,$ as st,a as at,b4 as rt,q as Le,t as it,C as ot,J as Ie,z as Ee,k as Oe,A as lt,V as ct,f as Se,W as ut,s as ae,U as Me,b5 as pt,c as ht,r as mt,n as dt,b6 as gt}from"../chunks/BFQ7Yu01.js";import{B as ft,a as _t,s as bt}from"../chunks/CHXlRE_k.js";import{C as yt,a as te,T as kt}from"../chunks/B5-QeiDh.js";import{g as Nt}from"../chunks/oKMhzk9R.js";import{p as vt}from"../chunks/CP6adQlq.js";function wt(e,p,...k){var a=new ft(e);He(()=>{const j=p()??null;a.ensure(j,j&&(x=>j(x,...k)))},st)}function Lt(e,p){let k=null,a=Le;var j;if(Le){k=lt;for(var x=it(document.head);x!==null&&(x.nodeType!==ot||x.data!==e);)x=Ie(x);if(x===null)Ee(!1);else{var s=Ie(x);x.remove(),Oe(s)}}Le||(j=document.head.appendChild(at()));try{He(()=>p(j),rt)}finally{a&&(Ee(!0),Oe(k))}}const St=`# ----------------- # BASE # -----------------
FROM elixir:alpine AS base
WORKDIR /app
RUN mix do local.hex --force, local.rebar --force
RUN apk add npm inotify-tools

# ----------------- # BUILD #-----------------
FROM base AS build
RUN apk add curl bash git
ARG MIX_ENV=prod
ENV MIX_ENV=$MIX_ENV
COPY ../../../../routes/posts/deploy-elixir-app-on-lightsail/snippets ./

# install application
RUN mix do deps.get, compile

# ----------------- # RELEASE #-----------------
FROM build AS release
ARG MIX_ENV=prod

# digests and compresses static files RUN mix assets.deploy # generate release executable
RUN mix phx.gen.release RUN mix release

# ----------------- #PRODUCTION # -----------------
FROM elixir:alpine
WORKDIR /app
ARG MIX_ENV=prod

# install dependencies
RUN apk add ncurses-libs curl
COPY --from=release /app/_build/prod/rel/github_dashboard ./

# start application
CMD ["bin/server", "start"]
`,xt=`# Scaffolding application mix phx.new github_dashboard --no-ecto
mix phx.new github_dashboard --no-ecto
`,Pt=`name: Elixir CI

on:
push:

permissions:
contents: read

env:
CONTAINER_SERVICE_NAME: <container service name>
AWS_REGION: <aws region>
DOCKER_TAG: <some name to tag your docker images in Lightsail hub>

jobs:
build:
  name: Build and test
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    - name: Set up Elixir
      uses: erlef/setup-beam@988e02bfe678367a02564f65ca2e37726dc0268f
      with:
        elixir-version: '1.12.3' # Define the elixir version [required]
        otp-version: '24.1' # Define the OTP version [required]
    - name: Restore dependencies cache
      uses: actions/cache@v3
      with:
        path: deps
        key: \${{ runner.os }}-mix-\${{ hashFiles('**/mix.lock') }}
        restore-keys: \${{ runner.os }}-mix-
    - name: Install dependencies
      run: mix deps.get
    - name: Run tests
      run: mix test
deploy:
  name: Deploy to Lightsail
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    - name: Build docker container
      run: |
        docker build . -t $DOCKER_TAG
    # By default AWS cli is available in Github Actions environment, but not Lightsail cli. So we need to install it manualy.
    - name: Install LightSail AWS CLI plugin
      run: |
        curl "https://s3.us-west-2.amazonaws.com/lightsailctl/latest/linux-amd64/lightsailctl" -o "/usr/local/bin/lightsailctl"
        sudo chmod +x /usr/local/bin/lightsailctl
    # Please add you AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY into your Github Repo.
    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: \${{ env.AWS_REGION }}
    - name: Push new version to LightSail
      run: aws lightsail push-container-image --region $AWS_REGION --service-name $CONTAINER_SERVICE_NAME --label $DOCKER_TAG --image $DOCKER_TAG:latest
    - name: Deploy pushed container
      run: aws lightsail create-container-service-deployment --service-name $CONTAINER_SERVICE_NAME --containers file://lightsail/containers.json --public-endpoint file://lightsail/public-endpoint.json
`,jt=`{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "VisualEditor0",
			"Effect": "Allow",
			"Action": [
				"lightsail:RegisterContainerImage",
				"lightsail:CreateContainerServiceRegistryLogin",
				"lightsail:CreateContainerServiceDeployment"
			],
			"Resource": "*"
		}
	]
}
`,At=`defmodule StocksBot.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [ StocksBot ]

    opts = [strategy: :one_for_one, name: StocksBot.Supervisor]
    Supervisor.start_link(children, opts)
  end
end`,Tt=`defp deps do
  [
    {:httpoison, "~> 1.8"},
    {:jason, "~> 1.2"}
  ]
end`,Rt=`[
  %{
    "message" => %{
      "chat" => %{
        "first_name" => "Bender",
        "id" => 300011235,
        "last_name" => "Rodriguez",
        "type" => "private",
        "username" => "bender"
      },
      "date" => 1636549063,
      "from" => %{
        "first_name" => "Bender",
        "id" => 300011235,,
        "is_bot" => false,
        "language_code" => "ru",
        "last_name" => "Rodriguez",
        "username" => "bender"
      },
      "message_id" => 1142,
      "text" => "Hello"
    },
    "update_id" => 475896056
  }
]`,It="mix new stocks_bot --sup",Et=`defmodule StocksBot do
  use GenServer
  @basic_url "https://api.telegram.org/bot" <> "Token from BotFather"

  def start_link(args) do
    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  @impl true
  def init(:ok) do
    get_updates()
    {:ok, %{}}
  end
end`,Ot=`defp parse_messages(messages) do
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
    @basic_url <> "/sendMessage",
    Jason.encode!(answer),
    [{"Content-Type", "application/json"}]
  )
end`,Mt=`defmodule StocksBot do
  @basic_url "https://api.telegram.org/bot" <> "Token from BotFather"

  def get_updates(offset \\\\ nil) do
    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =
           updates_url(offset) |> HTTPoison.get(),
         {:ok, data} = Jason.decode(body) do

      parse_messages(data["result"])
      |> get_last_update_id()
      |> get_updates()
    end
  end

  defp parse_messages(messages) do
    Enum.each(messages, fn message ->
      IO.inspect(message)
    end)

    messages
  end

  defp get_last_update_id([]), do: nil

  defp get_last_update_id(messages) do
    List.last(messages) |> Map.fetch!("update_id")
  end

  defp updates_url(_offset = nil) do
    @basic_url <> "/getUpdates"
  end

  defp updates_url(offset) do
    @basic_url <> "/getUpdates?offset=#{offset + 1}"
  end
end`,Bt=`defmodule StocksBot do
  @basic_url "https://api.telegram.org/bot" <> "Token from BotFather"

  def get_updates(offset \\\\ nil) do
    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =
           updates_url(offset) |> HTTPoison.get(),
         {:ok, data} = Jason.decode(body) do
      IO.inspect(data["result"])
    end
  end

  defp updates_url(_offset = nil) do
    @basic_url <> "/getUpdates"
  end
end`,Gt=`├── README.md
├── lib
│ ├── stocks_bot
│ │ └── application.ex
│ └──stocks_bot.ex
├── mix.exs
└── test
├── stocks_bot_test.exs
└── test_helper.exs`,Dt=`iex -S mix
StocksBot.get_updates()`,$t=`import { MaxHeap } from './max_heap';

describe('Insert', () => {
	test('Basic insert', () => {
		const mh = new MaxHeap();
		mh.insert(10);
		expect(mh.heap).toStrictEqual([10]);
	});

	test('Basic sorting', () => {
		const mh = new MaxHeap();
		mh.insert(10);
		mh.insert(100);
		expect(mh.heap).toStrictEqual([100, 10]);
	});

	test('Insert with many values', () => {
		const mh = new MaxHeap();

		[10, 5, 2, 1, 100].forEach((num) => mh.insert(num));

		expect(mh.heap).toStrictEqual([100, 10, 2, 1, 5]);
	});
});

describe('Remove', () => {
	test('Basic scenario', () => {
		const mh = new MaxHeap();
		mh.insert(10);
		mh.remove();

		expect(mh.heap).toStrictEqual([]);
	});

	test('Remove all values', () => {
		const mh = new MaxHeap();

		[10, 5, 2, 1, 100].forEach((num) => mh.insert(num));
		[10, 5, 2, 1, 100].forEach((_) => mh.remove());

		expect(mh.heap).toStrictEqual([]);
	});

	test('Remove one and resort', () => {
		const mh = new MaxHeap();

		[100, 40, 70, 10, 5, 2, 25, 1].forEach((num) => mh.insert(num));
		mh.remove();

		expect(mh.heap).toStrictEqual([70, 40, 25, 10, 5, 2, 1]);
	});

	test('Leetcode', () => {
		const mh = new MaxHeap();

		[1, 2, 3, 4, 5, 6, 7].forEach((num) => mh.insert(num));

		const sortedMax = [1, 2, 3, 4, 5, 6, 7].map((_) => {
			return mh.remove();
		});

		expect(sortedMax).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);
	});

	test('Leetcode with duplicates', () => {
		const mh = new MaxHeap();

		[1, 4, 5, 1, 3, 4, 2, 6].forEach((num) => mh.insert(num));

		const sortedMax = [1, 4, 5, 1, 3, 4, 2, 6].map((_) => {
			return mh.remove();
		});

		expect(sortedMax).toStrictEqual([6, 5, 4, 4, 3, 2, 1, 1]);
	});
});
`,Ct=`class MaxHeap {
	public heap: number[] = [];

	insert(val: number): void {
		this.heap.push(val);

		if (this.heap.length > 0) this.heapifyUp(this.heap.length - 1);
		// Heapify up starting from the last element
	}

	private heapifyUp(nodeIndex: number): void {
		if (nodeIndex == 0) return;

		const nodeValue = this.heap[nodeIndex];

		const parentIndex = Math.floor((nodeIndex - 1) / 2);
		const parentValue = this.heap[parentIndex];

		// In node value is higher than parent value, we need to propogate this (node) value up.
		if (nodeValue > parentValue) {
			[this.heap[nodeIndex], this.heap[parentIndex]] = [
				this.heap[parentIndex],
				this.heap[nodeIndex]
			];
			this.heapifyUp(parentIndex);
		}
	}

	remove(): number {
		if (this.heap.length == 0) return -1;

		if (this.heap.length == 1) return this.heap.pop() as number;

		const top = this.heap[0];
		const last = this.heap.pop() as number;

		this.heap[0] = last;

		this.heapifyDown(0);

		return top;
	}

	private heapifyDown(nodeIndex: number): void {
		// Reached end of the heap
		if (nodeIndex == this.heap.length - 1) return;

		const nodeValue = this.heap[nodeIndex];

		let leftChildIndex = Math.floor(nodeIndex * 2 + 1);
		let rightChildIndex = Math.floor(nodeIndex * 2 + 2);

		const leftChildValue = this.heap[leftChildIndex];
		const rightChildValue = this.heap[rightChildIndex];

		const indexToSwap = rightChildValue >= leftChildValue ? rightChildIndex : leftChildIndex;

		if (this.heap[indexToSwap] > nodeValue) {
			[this.heap[indexToSwap], this.heap[nodeIndex]] = [
				this.heap[nodeIndex],
				this.heap[indexToSwap]
			];

			this.heapifyDown(indexToSwap);

			return;
		}
	}
}

export { MaxHeap };
`,Ft=`import { MinHeap } from './min_heap';

describe('Insert', () => {
	test('Basic insert', () => {
		const mh = new MinHeap();
		mh.insert(10);
		expect(mh.heap).toStrictEqual([10]);
	});

	test('Basic sorting', () => {
		const mh = new MinHeap();
		mh.insert(10);
		mh.insert(100);
		expect(mh.heap).toStrictEqual([10, 100]);
	});

	test('Insert with many values', () => {
		const mh = new MinHeap();

		[10, 5, 2, 1, 100].forEach((num) => mh.insert(num));

		expect(mh.heap).toStrictEqual([1, 2, 5, 10, 100]);
	});
});

describe('Remove', () => {
	test('Basic scenario', () => {
		const mh = new MinHeap();
		mh.insert(10);
		mh.remove();

		expect(mh.heap).toStrictEqual([]);
	});

	test('Remove all values', () => {
		const mh = new MinHeap();

		[10, 5, 2, 1, 100].forEach((num) => mh.insert(num));
		[10, 5, 2, 1, 100].forEach((_) => mh.remove());

		expect(mh.heap).toStrictEqual([]);
	});

	test('Remove one and resort', () => {
		const mh = new MinHeap();

		[100, 40, 70, 10, 5, 2, 25, 1].forEach((num) => mh.insert(num));
		mh.remove();

		expect(mh.heap).toStrictEqual([2, 10, 5, 100, 40, 70, 25]);
	});

	test('Leetcode', () => {
		const mh = new MinHeap();

		[1, 2, 3, 4, 5, 6, 7].forEach((num) => mh.insert(num));

		const sortedMax = [1, 2, 3, 4, 5, 6, 7].map((_) => {
			return mh.remove();
		});

		expect(sortedMax).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
	});

	test('Leetcode with duplicates', () => {
		const mh = new MinHeap();

		[1, 4, 5, 1, 3, 4, 2, 6].forEach((num) => mh.insert(num));

		const sortedMax = [1, 4, 5, 1, 3, 4, 2, 6].map((_) => {
			return mh.remove();
		});

		expect(sortedMax).toStrictEqual([1, 1, 2, 3, 4, 4, 5, 6]);
	});
});
`,qt=`class MinHeap {
	public heap: number[] = [];

	insert(val: number): void {
		this.heap.push(val);

		if (this.heap.length > 0) this.heapifyUp(this.heap.length - 1);
		// Heapify up starting from the last element
	}

	private heapifyUp(nodeIndex: number): void {
		if (nodeIndex == 0) return;

		const nodeValue = this.heap[nodeIndex];

		const parentIndex = Math.floor((nodeIndex - 1) / 2);
		const parentValue = this.heap[parentIndex];

		// In node value is higher than parent value, we need to propogate this (node) value up.
		if (nodeValue < parentValue) {
			[this.heap[nodeIndex], this.heap[parentIndex]] = [
				this.heap[parentIndex],
				this.heap[nodeIndex]
			];
			this.heapifyUp(parentIndex);
		}
	}

	remove(): number {
		if (this.heap.length == 0) return -1;

		if (this.heap.length == 1) return this.heap.pop() as number;

		const top = this.heap[0];
		const last = this.heap.pop() as number;

		this.heap[0] = last;

		this.heapifyDown(0);

		return top;
	}

	private heapifyDown(nodeIndex: number): void {
		// Reached end of the heap
		if (nodeIndex == this.heap.length - 1) return;

		const nodeValue = this.heap[nodeIndex];

		let leftChildIndex = Math.floor(nodeIndex * 2 + 1);
		let rightChildIndex = Math.floor(nodeIndex * 2 + 2);

		const leftChildValue = this.heap[leftChildIndex];
		const rightChildValue = this.heap[rightChildIndex];

		const indexToSwitch = rightChildValue <= leftChildValue ? rightChildIndex : leftChildIndex;

		if (this.heap[indexToSwitch] < nodeValue) {
			[this.heap[indexToSwitch], this.heap[nodeIndex]] = [
				this.heap[nodeIndex],
				this.heap[indexToSwitch]
			];

			this.heapifyDown(indexToSwitch);

			return;
		}
	}
}

export { MinHeap };
`,Ut=`services:
  web:
    image: rukomoynikov/rails:2.7.1
    volumes:
      - ./:/app
      - rails_cache:/app/tmp/cache
      - bundle:/usr/local/bundle
    ports:
      - 3000:3000
    tmpfs:
      - /tmp
      - /app/tmp/pids
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    command: bundle exec rails server -b 0.0.0.0
  client:
    image: rukomoynikov/rails:2.7.1
    command: yarn run build -w
    ports:
      - '3035:3035'
    volumes:
      - ./:/app:cached
      - bundle:/usr/local/bundle
      - node_modules:/app/node_modules
      - packs:/app/public/packs
    environment:
      WEBPACKER_DEV_SERVER_HOST: 0.0.0.0
  postgres:
    image: postgres:13
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      PSQL_HISTFILE: /root/log/.psql_history
      POSTGRES_PASSWORD: postgres
    ports:
      - 5432
    healthcheck:
      test: pg_isready -U postgres -h 127.0.0.1
      interval: 5s
  redis:
    image: redis:3.2-alpine
    volumes:
      - redis:/data
    ports:
      - 6379
    healthcheck:
      test: redis-cli ping
      interval: 1s
      timeout: 3s
      retries: 30

volumes:
  postgres:
  redis:
  bundle:
  rails_cache:
  node_modules:
  packs:
`,Wt=`FROM debian:bullseye

WORKDIR /app

ARG ruby_version=2.7.1
ARG PG_MAJOR=13
ARG NODE_MAJOR=14

# Installing general packages
RUN apt update \\
  && apt upgrade -y \\
  && apt install libpq-dev postgresql-client-$PG_MAJOR gnupg2 git wget curl vim build-essential libssl-dev zlib1g-dev libyaml-dev libffi-dev -y

# Installing rbenv and ruby
RUN apt install rbenv -y \\
  && echo 'eval "$(rbenv init -)"' >> ~/.bashrc \\
  && rbenv install $ruby_version \\
    && rbenv global $ruby_version \\
  && eval "$(rbenv init -)" \\
  && gem install rails

#Installing node and yarn
RUN curl -sL https://deb.nodesource.com/setup_$NODE_MAJOR.x | bash - \\
  && apt install nodejs \\
  && npm i -g yarn

ENV PATH /root/.rbenv/versions/$ruby_version/bin/:/root/.rbenv/shims:$PATH
`,Ht="docker run --rm -it -p 3000:3000 -v /$(pwd):/app rukomoynikov/rails bash",Vt="docker run --rm -v /$(pwd):/app rukomoynikov/rails rails new .",zt="docker run --rm -it -p 3000:3000 -v /$(pwd):/app rukomoynikov/rails rails s -b 0.0.0.0",Qt=`function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let node1Queue = [p]
  let node2Queue = [q]

  while(node1Queue.length && node2Queue.length) {
    let node1LevelLength = node1Queue.length
    let node2LevelLength = node2Queue.length

    for(let i = 0; i < node1LevelLength; i++) {
      let node = node1Queue.shift()
      let node2 = node2Queue.shift()

      if(node == null && node2 == null) continue
      if(node == null || node2 == null) return false
      if(node.val != node2.val) return false


      node1Queue.push(node.left)
      node1Queue.push(node.right)

      node2Queue.push(node2.left)
      node2Queue.push(node2.right)
    }

  }

  return true
}
`,Jt=`function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let stack = [[p, q]]

  while(stack.length) {
    let [node1, node2] = stack.pop()

    if(node1 == null && node2 == null) continue
    if(node1 == null || node2 == null) return false
    if(node1.val != node2.val) return false

    stack.push([node1.left, node2.left])
    stack.push([node1.right, node2.right])
  }

  return true
};
`,Xt=`function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p == null && q == null) return true
  if(p == null || q == null) return false
  if(p.val != q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
`,Yt=`defmodule Mix.Tasks.UploadDevReport do
  use Mix.Task

  @shortdoc "Uploads a development report to the local server"

  @impl Mix.Task
  def run(_args) do
    start_backend()

    %Req.Response{body: body} = Req.get!("http://localhost:4000?id=1")

    IO.puts(body)
  end

  defp phoenix_running?(address, port) do
    case :gen_tcp.connect(to_char_list(address), port, [:binary, active: false], 1000) do
      {:ok, _} -> true
      {:error, _} -> false
    end
  end

  defp start_backend do
    case phoenix_running?("localhost", 4000) do
      false ->
        Application.put_env(:phoenix, :serve_endpoints, true, persistent: true)
        Mix.Task.run("app.start", [])
      true ->
        Mix.Task.run("app.start", [])
    end
  end
end
`,Kt=`defmodule AppForArticleWeb.PageController do
  use AppForArticleWeb, :controller

  def home(conn, %{"id" => id}) do
    text conn, "Showing id #{id}"
  end
end
`,Zt=`# Turned out it has a part where you should give your service a unique name
traefik.http.routers.{{uniq_name_for_application}}-https.rule
traefik.http.routers.{{uniq_name_for_application}}.rule
traefik.http.routers.{{uniq_name_for_application}}.middlewares redirect-to-https
traefik.http.routers.{{uniq_name_for_application}}-https.service {{uniq_name_for_application}}
`;var Ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ze={exports:{}};(function(e,p){(function(k,a){e.exports=a()})(Ve,()=>{return k={770:function(j,x,s){var v=this&&this.__importDefault||function(P){return P&&P.__esModule?P:{default:P}};Object.defineProperty(x,"__esModule",{value:!0}),x.setDefaultDebugCall=x.createOnigScanner=x.createOnigString=x.loadWASM=x.OnigScanner=x.OnigString=void 0;const _=v(s(418));let r=null,S=!1;class L{static _utf8ByteLength(y){let N=0;for(let l=0,f=y.length;l<f;l++){const m=y.charCodeAt(l);let u=m,t=!1;if(m>=55296&&m<=56319&&l+1<f){const i=y.charCodeAt(l+1);i>=56320&&i<=57343&&(u=65536+(m-55296<<10)|i-56320,t=!0)}N+=u<=127?1:u<=2047?2:u<=65535?3:4,t&&l++}return N}constructor(y){const N=y.length,l=L._utf8ByteLength(y),f=l!==N,m=f?new Uint32Array(N+1):null;f&&(m[N]=l);const u=f?new Uint32Array(l+1):null;f&&(u[l]=N);const t=new Uint8Array(l);let i=0;for(let c=0;c<N;c++){const n=y.charCodeAt(c);let o=n,h=!1;if(n>=55296&&n<=56319&&c+1<N){const b=y.charCodeAt(c+1);b>=56320&&b<=57343&&(o=65536+(n-55296<<10)|b-56320,h=!0)}f&&(m[c]=i,h&&(m[c+1]=i),o<=127?u[i+0]=c:o<=2047?(u[i+0]=c,u[i+1]=c):o<=65535?(u[i+0]=c,u[i+1]=c,u[i+2]=c):(u[i+0]=c,u[i+1]=c,u[i+2]=c,u[i+3]=c)),o<=127?t[i++]=o:o<=2047?(t[i++]=192|(1984&o)>>>6,t[i++]=128|(63&o)>>>0):o<=65535?(t[i++]=224|(61440&o)>>>12,t[i++]=128|(4032&o)>>>6,t[i++]=128|(63&o)>>>0):(t[i++]=240|(1835008&o)>>>18,t[i++]=128|(258048&o)>>>12,t[i++]=128|(4032&o)>>>6,t[i++]=128|(63&o)>>>0),h&&c++}this.utf16Length=N,this.utf8Length=l,this.utf16Value=y,this.utf8Value=t,this.utf16OffsetToUtf8=m,this.utf8OffsetToUtf16=u}createString(y){const N=y._omalloc(this.utf8Length);return y.HEAPU8.set(this.utf8Value,N),N}}class g{constructor(y){if(this.id=++g.LAST_ID,!r)throw new Error("Must invoke loadWASM first.");this._onigBinding=r,this.content=y;const N=new L(y);this.utf16Length=N.utf16Length,this.utf8Length=N.utf8Length,this.utf16OffsetToUtf8=N.utf16OffsetToUtf8,this.utf8OffsetToUtf16=N.utf8OffsetToUtf16,this.utf8Length<1e4&&!g._sharedPtrInUse?(g._sharedPtr||(g._sharedPtr=r._omalloc(1e4)),g._sharedPtrInUse=!0,r.HEAPU8.set(N.utf8Value,g._sharedPtr),this.ptr=g._sharedPtr):this.ptr=N.createString(r)}convertUtf8OffsetToUtf16(y){return this.utf8OffsetToUtf16?y<0?0:y>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[y]:y}convertUtf16OffsetToUtf8(y){return this.utf16OffsetToUtf8?y<0?0:y>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[y]:y}dispose(){this.ptr===g._sharedPtr?g._sharedPtrInUse=!1:this._onigBinding._ofree(this.ptr)}}x.OnigString=g,g.LAST_ID=0,g._sharedPtr=0,g._sharedPtrInUse=!1;class w{constructor(y){if(!r)throw new Error("Must invoke loadWASM first.");const N=[],l=[];for(let t=0,i=y.length;t<i;t++){const c=new L(y[t]);N[t]=c.createString(r),l[t]=c.utf8Length}const f=r._omalloc(4*y.length);r.HEAPU32.set(N,f/4);const m=r._omalloc(4*y.length);r.HEAPU32.set(l,m/4);const u=r._createOnigScanner(f,m,y.length);for(let t=0,i=y.length;t<i;t++)r._ofree(N[t]);r._ofree(m),r._ofree(f),u===0&&function(t){throw new Error(t.UTF8ToString(t._getLastOnigError()))}(r),this._onigBinding=r,this._ptr=u}dispose(){this._onigBinding._freeOnigScanner(this._ptr)}findNextMatchSync(y,N,l){let f=S,m=0;if(typeof l=="number"?(8&l&&(f=!0),m=l):typeof l=="boolean"&&(f=l),typeof y=="string"){y=new g(y);const u=this._findNextMatchSync(y,N,f,m);return y.dispose(),u}return this._findNextMatchSync(y,N,f,m)}_findNextMatchSync(y,N,l,f){const m=this._onigBinding;let u;if(u=l?m._findNextOnigScannerMatchDbg(this._ptr,y.id,y.ptr,y.utf8Length,y.convertUtf16OffsetToUtf8(N),f):m._findNextOnigScannerMatch(this._ptr,y.id,y.ptr,y.utf8Length,y.convertUtf16OffsetToUtf8(N),f),u===0)return null;const t=m.HEAPU32;let i=u/4;const c=t[i++],n=t[i++];let o=[];for(let h=0;h<n;h++){const b=y.convertUtf8OffsetToUtf16(t[i++]),T=y.convertUtf8OffsetToUtf16(t[i++]);o[h]={start:b,end:T,length:T-b}}return{index:c,captureIndices:o}}}x.OnigScanner=w;let A=!1,d=null;x.loadWASM=function(P){if(A)return d;let y,N,l,f;if(A=!0,function(m){return typeof m.instantiator=="function"}(P))y=P.instantiator,N=P.print;else{let m;(function(u){return u.data!==void 0})(P)?(m=P.data,N=P.print):m=P,y=function(u){return typeof Response<"u"&&u instanceof Response}(m)?typeof WebAssembly.instantiateStreaming=="function"?function(u){return t=>WebAssembly.instantiateStreaming(u,t)}(m):function(u){return async t=>{const i=await u.arrayBuffer();return WebAssembly.instantiate(i,t)}}(m):function(u){return t=>WebAssembly.instantiate(u,t)}(m)}return d=new Promise((m,u)=>{l=m,f=u}),function(m,u,t,i){(0,_.default)({print:u,instantiateWasm:(c,n)=>{if(typeof performance>"u"){const o=()=>Date.now();c.env.emscripten_get_now=o,c.wasi_snapshot_preview1.emscripten_get_now=o}return m(c).then(o=>n(o.instance),i),{}}}).then(c=>{r=c,t()})}(y,N,l,f),d},x.createOnigString=function(P){return new g(P)},x.createOnigScanner=function(P){return new w(P)},x.setDefaultDebugCall=function(P){S=P}},418:j=>{var x=(typeof document<"u"&&document.currentScript&&document.currentScript.src,function(s){var v,_,r=(s=s||{})!==void 0?s:{};r.ready=new Promise(function(E,B){v=E,_=B});var S,L=Object.assign({},r),g="";function w(E){return r.locateFile?r.locateFile(E,g):g+E}S=function(E){let B;return typeof readbuffer=="function"?new Uint8Array(readbuffer(E)):(B=read(E,"binary"),l(typeof B=="object"),B)},typeof scriptArgs<"u"&&scriptArgs,typeof onig_print<"u"&&(typeof console>"u"&&(console={}),console.log=onig_print,console.warn=console.error=typeof printErr<"u"?printErr:onig_print);var A,d,P=r.print||console.log.bind(console),y=r.printErr||console.warn.bind(console);Object.assign(r,L),L=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit,r.wasmBinary&&(A=r.wasmBinary),r.noExitRuntime,typeof WebAssembly!="object"&&$("no native wasm support detected");var N=!1;function l(E,B){E||$(B)}var f,m,u,t=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function i(E,B,X){for(var K=B+X,H=B;E[H]&&!(H>=K);)++H;if(H-B>16&&E.buffer&&t)return t.decode(E.subarray(B,H));for(var V="";B<H;){var Y=E[B++];if(128&Y){var se=63&E[B++];if((224&Y)!=192){var ce=63&E[B++];if((Y=(240&Y)==224?(15&Y)<<12|se<<6|ce:(7&Y)<<18|se<<12|ce<<6|63&E[B++])<65536)V+=String.fromCharCode(Y);else{var Re=Y-65536;V+=String.fromCharCode(55296|Re>>10,56320|1023&Re)}}else V+=String.fromCharCode((31&Y)<<6|se)}else V+=String.fromCharCode(Y)}return V}function c(E,B){return E?i(m,E,B):""}function n(E){f=E,r.HEAP8=new Int8Array(E),r.HEAP16=new Int16Array(E),r.HEAP32=new Int32Array(E),r.HEAPU8=m=new Uint8Array(E),r.HEAPU16=new Uint16Array(E),r.HEAPU32=u=new Uint32Array(E),r.HEAPF32=new Float32Array(E),r.HEAPF64=new Float64Array(E)}r.INITIAL_MEMORY;var o=[],h=[],b=[];function T(){if(r.preRun)for(typeof r.preRun=="function"&&(r.preRun=[r.preRun]);r.preRun.length;)M(r.preRun.shift());oe(o)}function I(){oe(h)}function O(){if(r.postRun)for(typeof r.postRun=="function"&&(r.postRun=[r.postRun]);r.postRun.length;)F(r.postRun.shift());oe(b)}function M(E){o.unshift(E)}function W(E){h.unshift(E)}function F(E){b.unshift(E)}var G=0,C=null;function J(E){G++,r.monitorRunDependencies&&r.monitorRunDependencies(G)}function z(E){if(G--,r.monitorRunDependencies&&r.monitorRunDependencies(G),G==0&&C){var B=C;C=null,B()}}function $(E){r.onAbort&&r.onAbort(E),y(E="Aborted("+E+")"),N=!0,E+=". Build with -sASSERTIONS for more info.";var B=new WebAssembly.RuntimeError(E);throw _(B),B}var D,q,ie="data:application/octet-stream;base64,";function R(E){return E.startsWith(ie)}function Q(E){try{if(E==D&&A)return new Uint8Array(A);if(S)return S(E);throw"both async and sync fetching of the wasm failed"}catch(B){$(B)}}function U(){return Promise.resolve().then(function(){return Q(D)})}function ne(){var E={env:le,wasi_snapshot_preview1:le};function B(H,V){var Y=H.exports;r.asm=Y,n((d=r.asm.memory).buffer),r.asm.__indirect_function_table,W(r.asm.__wasm_call_ctors),z()}function X(H){B(H.instance)}function K(H){return U().then(function(V){return WebAssembly.instantiate(V,E)}).then(function(V){return V}).then(H,function(V){y("failed to asynchronously prepare wasm: "+V),$(V)})}if(J(),r.instantiateWasm)try{return r.instantiateWasm(E,B)}catch(H){y("Module.instantiateWasm callback failed with error: "+H),_(H)}return(A||typeof WebAssembly.instantiateStreaming!="function"||R(D)||typeof fetch!="function"?K(X):fetch(D,{credentials:"same-origin"}).then(function(H){return WebAssembly.instantiateStreaming(H,E).then(X,function(V){return y("wasm streaming compile failed: "+V),y("falling back to ArrayBuffer instantiation"),K(X)})})).catch(_),{}}function oe(E){for(;E.length>0;)E.shift()(r)}function be(E,B,X){m.copyWithin(E,B,B+X)}function me(E){try{return d.grow(E-f.byteLength+65535>>>16),n(d.buffer),1}catch{}}function pe(E){var B,X=m.length,K=2147483648;if((E>>>=0)>K)return!1;for(var H=1;H<=4;H*=2){var V=X*(1+.2/H);if(V=Math.min(V,E+100663296),me(Math.min(K,(B=Math.max(E,V))+(65536-B%65536)%65536)))return!0}return!1}R(D="onig.wasm")||(D=w(D)),q=typeof dateNow<"u"?dateNow:()=>performance.now();var fe=[null,[],[]];function de(E,B){var X=fe[E];B===0||B===10?((E===1?P:y)(i(X,0)),X.length=0):X.push(B)}function ge(E,B,X,K){for(var H=0,V=0;V<X;V++){var Y=u[B>>2],se=u[B+4>>2];B+=8;for(var ce=0;ce<se;ce++)de(E,m[Y+ce]);H+=se}return u[K>>2]=H,0}var re,le={emscripten_get_now:q,emscripten_memcpy_big:be,emscripten_resize_heap:pe,fd_write:ge};function ee(E){function B(){re||(re=!0,r.calledRun=!0,N||(I(),v(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),O()))}G>0||(T(),G>0||(r.setStatus?(r.setStatus("Running..."),setTimeout(function(){setTimeout(function(){r.setStatus("")},1),B()},1)):B()))}if(ne(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.__wasm_call_ctors).apply(null,arguments)},r.___errno_location=function(){return(r.___errno_location=r.asm.__errno_location).apply(null,arguments)},r._omalloc=function(){return(r._omalloc=r.asm.omalloc).apply(null,arguments)},r._ofree=function(){return(r._ofree=r.asm.ofree).apply(null,arguments)},r._getLastOnigError=function(){return(r._getLastOnigError=r.asm.getLastOnigError).apply(null,arguments)},r._createOnigScanner=function(){return(r._createOnigScanner=r.asm.createOnigScanner).apply(null,arguments)},r._freeOnigScanner=function(){return(r._freeOnigScanner=r.asm.freeOnigScanner).apply(null,arguments)},r._findNextOnigScannerMatch=function(){return(r._findNextOnigScannerMatch=r.asm.findNextOnigScannerMatch).apply(null,arguments)},r._findNextOnigScannerMatchDbg=function(){return(r._findNextOnigScannerMatchDbg=r.asm.findNextOnigScannerMatchDbg).apply(null,arguments)},r.stackSave=function(){return(r.stackSave=r.asm.stackSave).apply(null,arguments)},r.stackRestore=function(){return(r.stackRestore=r.asm.stackRestore).apply(null,arguments)},r.stackAlloc=function(){return(r.stackAlloc=r.asm.stackAlloc).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.dynCall_jiji).apply(null,arguments)},r.UTF8ToString=c,C=function E(){re||ee(),re||(C=E)},r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return ee(),s.ready});j.exports=x}},a={},function j(x){var s=a[x];if(s!==void 0)return s.exports;var v=a[x]={exports:{}};return k[x].call(v.exports,v,v.exports,j),v.exports}(770);var k,a})})(ze);var ke=ze.exports,Qe={exports:{}};(function(e,p){var k={};(function(a,j){e.exports=j()})(Ve,function(){return(()=>{var a={350:(x,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.UseOnigurumaFindOptions=s.DebugFlags=void 0,s.DebugFlags={InDebugMode:typeof process<"u"&&!!k.VSCODE_TEXTMATE_DEBUG},s.UseOnigurumaFindOptions=!1},36:(x,s)=>{var v;Object.defineProperty(s,"__esModule",{value:!0}),s.toOptionalTokenType=s.EncodedTokenAttributes=void 0,(v=s.EncodedTokenAttributes||(s.EncodedTokenAttributes={})).toBinaryStr=function(_){let r=_.toString(2);for(;r.length<32;)r="0"+r;return r},v.print=function(_){const r=v.getLanguageId(_),S=v.getTokenType(_),L=v.getFontStyle(_),g=v.getForeground(_),w=v.getBackground(_);console.log({languageId:r,tokenType:S,fontStyle:L,foreground:g,background:w})},v.getLanguageId=function(_){return(255&_)>>>0},v.getTokenType=function(_){return(768&_)>>>8},v.containsBalancedBrackets=function(_){return(1024&_)!=0},v.getFontStyle=function(_){return(30720&_)>>>11},v.getForeground=function(_){return(16744448&_)>>>15},v.getBackground=function(_){return(4278190080&_)>>>24},v.set=function(_,r,S,L,g,w,A){let d=v.getLanguageId(_),P=v.getTokenType(_),y=v.containsBalancedBrackets(_)?1:0,N=v.getFontStyle(_),l=v.getForeground(_),f=v.getBackground(_);return r!==0&&(d=r),S!==8&&(P=S),L!==null&&(y=L?1:0),g!==-1&&(N=g),w!==0&&(l=w),A!==0&&(f=A),(d<<0|P<<8|y<<10|N<<11|l<<15|f<<24)>>>0},s.toOptionalTokenType=function(_){return _}},996:(x,s,v)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.BasicScopeAttributesProvider=s.BasicScopeAttributes=void 0;const _=v(878);class r{constructor(w,A){this.languageId=w,this.tokenType=A}}s.BasicScopeAttributes=r;class S{constructor(w,A){this._getBasicScopeAttributes=new _.CachedFn(d=>{const P=this._scopeToLanguage(d),y=this._toStandardTokenType(d);return new r(P,y)}),this._defaultAttributes=new r(w,8),this._embeddedLanguagesMatcher=new L(Object.entries(A||{}))}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(w){return w===null?S._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(w)}_scopeToLanguage(w){return this._embeddedLanguagesMatcher.match(w)||0}_toStandardTokenType(w){const A=w.match(S.STANDARD_TOKEN_TYPE_REGEXP);if(!A)return 8;switch(A[1]){case"comment":return 1;case"string":return 2;case"regex":return 3;case"meta.embedded":return 0}throw new Error("Unexpected match for standard token type!")}}s.BasicScopeAttributesProvider=S,S._NULL_SCOPE_METADATA=new r(0,0),S.STANDARD_TOKEN_TYPE_REGEXP=/\b(comment|string|regex|meta\.embedded)\b/;class L{constructor(w){if(w.length===0)this.values=null,this.scopesRegExp=null;else{this.values=new Map(w);const A=w.map(([d,P])=>_.escapeRegExpCharacters(d));A.sort(),A.reverse(),this.scopesRegExp=new RegExp(`^((${A.join(")|(")}))($|\\.)`,"")}}match(w){if(!this.scopesRegExp)return;const A=w.match(this.scopesRegExp);return A?this.values.get(A[1]):void 0}}},947:(x,s,v)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.LineTokens=s.BalancedBracketSelectors=s.StateStack=s.AttributedScopeStack=s.Grammar=s.createGrammar=void 0;const _=v(350),r=v(36),S=v(736),L=v(44),g=v(792),w=v(583),A=v(878),d=v(996),P=v(47);function y(c,n,o,h,b){const T=S.createMatchers(n,N),I=g.RuleFactory.getCompiledRuleId(o,h,b.repository);for(const O of T)c.push({debugSelector:n,matcher:O.matcher,ruleId:I,grammar:b,priority:O.priority})}function N(c,n){if(n.length<c.length)return!1;let o=0;return c.every(h=>{for(let b=o;b<n.length;b++)if(l(n[b],h))return o=b+1,!0;return!1})}function l(c,n){if(!c)return!1;if(c===n)return!0;const o=n.length;return c.length>o&&c.substr(0,o)===n&&c[o]==="."}s.createGrammar=function(c,n,o,h,b,T,I,O){return new f(c,n,o,h,b,T,I,O)};class f{constructor(n,o,h,b,T,I,O,M){if(this._rootScopeName=n,this.balancedBracketSelectors=I,this._onigLib=M,this._basicScopeAttributesProvider=new d.BasicScopeAttributesProvider(h,b),this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=O,this._grammar=m(o,null),this._injections=null,this._tokenTypeMatchers=[],T)for(const W of Object.keys(T)){const F=S.createMatchers(W,N);for(const G of F)this._tokenTypeMatchers.push({matcher:G.matcher,type:T[W]})}}get themeProvider(){return this._grammarRepository}dispose(){for(const n of this._ruleId2desc)n&&n.dispose()}createOnigScanner(n){return this._onigLib.createOnigScanner(n)}createOnigString(n){return this._onigLib.createOnigString(n)}getMetadataForScope(n){return this._basicScopeAttributesProvider.getBasicScopeAttributes(n)}_collectInjections(){const n=[],o=this._rootScopeName,h=(b=>b===this._rootScopeName?this._grammar:this.getExternalGrammar(b))(o);if(h){const b=h.injections;if(b)for(let I in b)y(n,I,b[I],this,h);const T=this._grammarRepository.injections(o);T&&T.forEach(I=>{const O=this.getExternalGrammar(I);if(O){const M=O.injectionSelector;M&&y(n,M,O,this,O)}})}return n.sort((b,T)=>b.priority-T.priority),n}getInjections(){if(this._injections===null&&(this._injections=this._collectInjections(),_.DebugFlags.InDebugMode&&this._injections.length>0)){console.log(`Grammar ${this._rootScopeName} contains the following injections:`);for(const n of this._injections)console.log(`  - ${n.debugSelector}`)}return this._injections}registerRule(n){const o=++this._lastRuleId,h=n(g.ruleIdFromNumber(o));return this._ruleId2desc[o]=h,h}getRule(n){return this._ruleId2desc[g.ruleIdToNumber(n)]}getExternalGrammar(n,o){if(this._includedGrammars[n])return this._includedGrammars[n];if(this._grammarRepository){const h=this._grammarRepository.lookup(n);if(h)return this._includedGrammars[n]=m(h,o&&o.$base),this._includedGrammars[n]}}tokenizeLine(n,o,h=0){const b=this._tokenize(n,o,!1,h);return{tokens:b.lineTokens.getResult(b.ruleStack,b.lineLength),ruleStack:b.ruleStack,stoppedEarly:b.stoppedEarly}}tokenizeLine2(n,o,h=0){const b=this._tokenize(n,o,!0,h);return{tokens:b.lineTokens.getBinaryResult(b.ruleStack,b.lineLength),ruleStack:b.ruleStack,stoppedEarly:b.stoppedEarly}}_tokenize(n,o,h,b){let T;if(this._rootId===-1&&(this._rootId=g.RuleFactory.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository)),o&&o!==t.NULL)T=!1,o.reset();else{T=!0;const F=this._basicScopeAttributesProvider.getDefaultAttributes(),G=this.themeProvider.getDefaults(),C=r.EncodedTokenAttributes.set(0,F.languageId,F.tokenType,null,G.fontStyle,G.foregroundId,G.backgroundId),J=this.getRule(this._rootId).getName(null,null);let z;z=J?u.createRootAndLookUpScopeName(J,C,this):u.createRoot("unknown",C),o=new t(null,this._rootId,-1,-1,!1,null,z,z)}n+=`
`;const I=this.createOnigString(n),O=I.content.length,M=new i(h,n,this._tokenTypeMatchers,this.balancedBracketSelectors),W=P._tokenizeString(this,I,T,0,o,M,!0,b);return L.disposeOnigString(I),{lineLength:O,lineTokens:M,ruleStack:W.stack,stoppedEarly:W.stoppedEarly}}}function m(c,n){return(c=A.clone(c)).repository=c.repository||{},c.repository.$self={$vscodeTextmateLocation:c.$vscodeTextmateLocation,patterns:c.patterns,name:c.scopeName},c.repository.$base=n||c.repository.$self,c}s.Grammar=f;class u{constructor(n,o,h){this.parent=n,this.scopePath=o,this.tokenAttributes=h}static createRoot(n,o){return new u(null,new w.ScopeStack(null,n),o)}static createRootAndLookUpScopeName(n,o,h){const b=h.getMetadataForScope(n),T=new w.ScopeStack(null,n),I=h.themeProvider.themeMatch(T),O=u.mergeAttributes(o,b,I);return new u(null,T,O)}get scopeName(){return this.scopePath.scopeName}equals(n){return u._equals(this,n)}static _equals(n,o){for(;;){if(n===o||!n&&!o)return!0;if(!n||!o||n.scopeName!==o.scopeName||n.tokenAttributes!==o.tokenAttributes)return!1;n=n.parent,o=o.parent}}static mergeAttributes(n,o,h){let b=-1,T=0,I=0;return h!==null&&(b=h.fontStyle,T=h.foregroundId,I=h.backgroundId),r.EncodedTokenAttributes.set(n,o.languageId,o.tokenType,null,b,T,I)}pushAttributed(n,o){if(n===null)return this;if(n.indexOf(" ")===-1)return u._pushAttributed(this,n,o);const h=n.split(/ /g);let b=this;for(const T of h)b=u._pushAttributed(b,T,o);return b}static _pushAttributed(n,o,h){const b=h.getMetadataForScope(o),T=n.scopePath.push(o),I=h.themeProvider.themeMatch(T),O=u.mergeAttributes(n.tokenAttributes,b,I);return new u(n,T,O)}getScopeNames(){return this.scopePath.getSegments()}}s.AttributedScopeStack=u;class t{constructor(n,o,h,b,T,I,O,M){this.parent=n,this.ruleId=o,this.beginRuleCapturedEOL=T,this.endRule=I,this.nameScopesList=O,this.contentNameScopesList=M,this._stackElementBrand=void 0,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=h,this._anchorPos=b}equals(n){return n!==null&&t._equals(this,n)}static _equals(n,o){return n===o||!!this._structuralEquals(n,o)&&n.contentNameScopesList.equals(o.contentNameScopesList)}static _structuralEquals(n,o){for(;;){if(n===o||!n&&!o)return!0;if(!n||!o||n.depth!==o.depth||n.ruleId!==o.ruleId||n.endRule!==o.endRule)return!1;n=n.parent,o=o.parent}}clone(){return this}static _reset(n){for(;n;)n._enterPos=-1,n._anchorPos=-1,n=n.parent}reset(){t._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(n,o,h,b,T,I,O){return new t(this,n,o,h,b,T,I,O)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(n){return n.getRule(this.ruleId)}toString(){const n=[];return this._writeString(n,0),"["+n.join(",")+"]"}_writeString(n,o){return this.parent&&(o=this.parent._writeString(n,o)),n[o++]=`(${this.ruleId}, TODO-${this.nameScopesList}, TODO-${this.contentNameScopesList})`,o}withContentNameScopesList(n){return this.contentNameScopesList===n?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,n)}withEndRule(n){return this.endRule===n?this:new t(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,n,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(n){let o=this;for(;o&&o._enterPos===n._enterPos;){if(o.ruleId===n.ruleId)return!0;o=o.parent}return!1}}s.StateStack=t,t.NULL=new t(null,0,0,0,!1,null,null,null),s.BalancedBracketSelectors=class{constructor(c,n){this.allowAny=!1,this.balancedBracketScopes=c.flatMap(o=>o==="*"?(this.allowAny=!0,[]):S.createMatchers(o,N).map(h=>h.matcher)),this.unbalancedBracketScopes=n.flatMap(o=>S.createMatchers(o,N).map(h=>h.matcher))}get matchesAlways(){return this.allowAny&&this.unbalancedBracketScopes.length===0}get matchesNever(){return this.balancedBracketScopes.length===0&&!this.allowAny}match(c){for(const n of this.unbalancedBracketScopes)if(n(c))return!1;for(const n of this.balancedBracketScopes)if(n(c))return!0;return this.allowAny}};class i{constructor(n,o,h,b){this.balancedBracketSelectors=b,this._emitBinaryTokens=n,this._tokenTypeOverrides=h,_.DebugFlags.InDebugMode?this._lineText=o:this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0}produce(n,o){this.produceFromScopes(n.contentNameScopesList,o)}produceFromScopes(n,o){var b;if(this._lastTokenEndIndex>=o)return;if(this._emitBinaryTokens){let T=n.tokenAttributes,I=!1;if((b=this.balancedBracketSelectors)!=null&&b.matchesAlways&&(I=!0),this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever){const O=n.getScopeNames();for(const M of this._tokenTypeOverrides)M.matcher(O)&&(T=r.EncodedTokenAttributes.set(T,0,r.toOptionalTokenType(M.type),null,-1,0,0));this.balancedBracketSelectors&&(I=this.balancedBracketSelectors.match(O))}if(I&&(T=r.EncodedTokenAttributes.set(T,0,8,I,-1,0,0)),this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===T)return void(this._lastTokenEndIndex=o);if(_.DebugFlags.InDebugMode){const O=n.getScopeNames();console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,o).replace(/\n$/,"\\n")+"|");for(let M=0;M<O.length;M++)console.log("      * "+O[M])}return this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(T),void(this._lastTokenEndIndex=o)}const h=n.getScopeNames();if(_.DebugFlags.InDebugMode){console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,o).replace(/\n$/,"\\n")+"|");for(let T=0;T<h.length;T++)console.log("      * "+h[T])}this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:o,scopes:h}),this._lastTokenEndIndex=o}getResult(n,o){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===o-1&&this._tokens.pop(),this._tokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(n,o),this._tokens[this._tokens.length-1].startIndex=0),this._tokens}getBinaryResult(n,o){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===o-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),this._binaryTokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(n,o),this._binaryTokens[this._binaryTokens.length-2]=0);const h=new Uint32Array(this._binaryTokens.length);for(let b=0,T=this._binaryTokens.length;b<T;b++)h[b]=this._binaryTokens[b];return h}}s.LineTokens=i},965:(x,s,v)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.parseInclude=s.TopLevelRepositoryReference=s.TopLevelReference=s.RelativeReference=s.SelfReference=s.BaseReference=s.ScopeDependencyProcessor=s.ExternalReferenceCollector=s.TopLevelRepositoryRuleReference=s.TopLevelRuleReference=void 0;const _=v(878);class r{constructor(t){this.scopeName=t}toKey(){return this.scopeName}}s.TopLevelRuleReference=r;class S{constructor(t,i){this.scopeName=t,this.ruleName=i}toKey(){return`${this.scopeName}#${this.ruleName}`}}s.TopLevelRepositoryRuleReference=S;class L{constructor(){this._references=[],this._seenReferenceKeys=new Set,this.visitedRule=new Set}get references(){return this._references}add(t){const i=t.toKey();this._seenReferenceKeys.has(i)||(this._seenReferenceKeys.add(i),this._references.push(t))}}function g(u,t,i,c){const n=i.lookup(u.scopeName);if(!n){if(u.scopeName===t)throw new Error(`No grammar provided for <${t}>`);return}const o=i.lookup(t);u instanceof r?A({baseGrammar:o,selfGrammar:n},c):w(u.ruleName,{baseGrammar:o,selfGrammar:n,repository:n.repository},c);const h=i.injections(u.scopeName);if(h)for(const b of h)c.add(new r(b))}function w(u,t,i){t.repository&&t.repository[u]&&d([t.repository[u]],t,i)}function A(u,t){u.selfGrammar.patterns&&Array.isArray(u.selfGrammar.patterns)&&d(u.selfGrammar.patterns,{...u,repository:u.selfGrammar.repository},t),u.selfGrammar.injections&&d(Object.values(u.selfGrammar.injections),{...u,repository:u.selfGrammar.repository},t)}function d(u,t,i){for(const c of u){if(i.visitedRule.has(c))continue;i.visitedRule.add(c);const n=c.repository?_.mergeObjects({},t.repository,c.repository):t.repository;Array.isArray(c.patterns)&&d(c.patterns,{...t,repository:n},i);const o=c.include;if(!o)continue;const h=m(o);switch(h.kind){case 0:A({...t,selfGrammar:t.baseGrammar},i);break;case 1:A(t,i);break;case 2:w(h.ruleName,{...t,repository:n},i);break;case 3:case 4:const b=h.scopeName===t.selfGrammar.scopeName?t.selfGrammar:h.scopeName===t.baseGrammar.scopeName?t.baseGrammar:void 0;if(b){const T={baseGrammar:t.baseGrammar,selfGrammar:b,repository:n};h.kind===4?w(h.ruleName,T,i):A(T,i)}else h.kind===4?i.add(new S(h.scopeName,h.ruleName)):i.add(new r(h.scopeName))}}}s.ExternalReferenceCollector=L,s.ScopeDependencyProcessor=class{constructor(u,t){this.repo=u,this.initialScopeName=t,this.seenFullScopeRequests=new Set,this.seenPartialScopeRequests=new Set,this.seenFullScopeRequests.add(this.initialScopeName),this.Q=[new r(this.initialScopeName)]}processQueue(){const u=this.Q;this.Q=[];const t=new L;for(const i of u)g(i,this.initialScopeName,this.repo,t);for(const i of t.references)if(i instanceof r){if(this.seenFullScopeRequests.has(i.scopeName))continue;this.seenFullScopeRequests.add(i.scopeName),this.Q.push(i)}else{if(this.seenFullScopeRequests.has(i.scopeName)||this.seenPartialScopeRequests.has(i.toKey()))continue;this.seenPartialScopeRequests.add(i.toKey()),this.Q.push(i)}}};class P{constructor(){this.kind=0}}s.BaseReference=P;class y{constructor(){this.kind=1}}s.SelfReference=y;class N{constructor(t){this.ruleName=t,this.kind=2}}s.RelativeReference=N;class l{constructor(t){this.scopeName=t,this.kind=3}}s.TopLevelReference=l;class f{constructor(t,i){this.scopeName=t,this.ruleName=i,this.kind=4}}function m(u){if(u==="$base")return new P;if(u==="$self")return new y;const t=u.indexOf("#");if(t===-1)return new l(u);if(t===0)return new N(u.substring(1));{const i=u.substring(0,t),c=u.substring(t+1);return new f(i,c)}}s.TopLevelRepositoryReference=f,s.parseInclude=m},391:function(x,s,v){var _=this&&this.__createBinding||(Object.create?function(S,L,g,w){w===void 0&&(w=g),Object.defineProperty(S,w,{enumerable:!0,get:function(){return L[g]}})}:function(S,L,g,w){w===void 0&&(w=g),S[w]=L[g]}),r=this&&this.__exportStar||function(S,L){for(var g in S)g==="default"||Object.prototype.hasOwnProperty.call(L,g)||_(L,S,g)};Object.defineProperty(s,"__esModule",{value:!0}),r(v(947),s)},47:(x,s,v)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.LocalStackElement=s._tokenizeString=void 0;const _=v(350),r=v(44),S=v(792),L=v(878);class g{constructor(f,m){this.stack=f,this.stoppedEarly=m}}function w(l,f,m,u,t,i,c,n){const o=f.content.length;let h=!1,b=-1;if(c){const O=function(M,W,F,G,C,J){let z=C.beginRuleCapturedEOL?0:-1;const $=[];for(let D=C;D;D=D.pop()){const q=D.getRule(M);q instanceof S.BeginWhileRule&&$.push({rule:q,stack:D})}for(let D=$.pop();D;D=$.pop()){const{ruleScanner:q,findOptions:ie}=d(D.rule,M,D.stack.endRule,F,G===z),R=q.findNextMatchSync(W,G,ie);if(_.DebugFlags.InDebugMode&&(console.log("  scanning for while rule"),console.log(q.toString())),!R){_.DebugFlags.InDebugMode&&console.log("  popping "+D.rule.debugName+" - "+D.rule.debugWhileRegExp),C=D.stack.pop();break}if(R.ruleId!==S.whileRuleId){C=D.stack.pop();break}R.captureIndices&&R.captureIndices.length&&(J.produce(D.stack,R.captureIndices[0].start),y(M,W,F,D.stack,J,D.rule.whileCaptures,R.captureIndices),J.produce(D.stack,R.captureIndices[0].end),z=R.captureIndices[0].end,R.captureIndices[0].end>G&&(G=R.captureIndices[0].end,F=!1))}return{stack:C,linePos:G,anchorPosition:z,isFirstLine:F}}(l,f,m,u,t,i);t=O.stack,u=O.linePos,m=O.isFirstLine,b=O.anchorPosition}const T=Date.now();for(;!h;){if(n!==0&&Date.now()-T>n)return new g(t,!0);I()}return new g(t,!1);function I(){_.DebugFlags.InDebugMode&&(console.log(""),console.log(`@@scanNext ${u}: |${f.content.substr(u).replace(/\n$/,"\\n")}|`));const O=function(G,C,J,z,$,D){const q=function(ne,oe,be,me,pe,fe){const de=pe.getRule(ne),{ruleScanner:ge,findOptions:re}=A(de,ne,pe.endRule,be,me===fe);let le=0;_.DebugFlags.InDebugMode&&(le=L.performanceNow());const ee=ge.findNextMatchSync(oe,me,re);if(_.DebugFlags.InDebugMode){const E=L.performanceNow()-le;E>5&&console.warn(`Rule ${de.debugName} (${de.id}) matching took ${E} against '${oe}'`),console.log(`  scanning for (linePos: ${me}, anchorPosition: ${fe})`),console.log(ge.toString()),ee&&console.log(`matched rule id: ${ee.ruleId} from ${ee.captureIndices[0].start} to ${ee.captureIndices[0].end}`)}return ee?{captureIndices:ee.captureIndices,matchedRuleId:ee.ruleId}:null}(G,C,J,z,$,D),ie=G.getInjections();if(ie.length===0)return q;const R=function(ne,oe,be,me,pe,fe,de){let ge,re=Number.MAX_VALUE,le=null,ee=0;const E=fe.contentNameScopesList.getScopeNames();for(let B=0,X=ne.length;B<X;B++){const K=ne[B];if(!K.matcher(E))continue;const H=oe.getRule(K.ruleId),{ruleScanner:V,findOptions:Y}=A(H,oe,null,me,pe===de),se=V.findNextMatchSync(be,pe,Y);if(!se)continue;_.DebugFlags.InDebugMode&&(console.log(`  matched injection: ${K.debugSelector}`),console.log(V.toString()));const ce=se.captureIndices[0].start;if(!(ce>=re)&&(re=ce,le=se.captureIndices,ge=se.ruleId,ee=K.priority,re===pe))break}return le?{priorityMatch:ee===-1,captureIndices:le,matchedRuleId:ge}:null}(ie,G,C,J,z,$,D);if(!R)return q;if(!q)return R;const Q=q.captureIndices[0].start,U=R.captureIndices[0].start;return U<Q||R.priorityMatch&&U===Q?R:q}(l,f,m,u,t,b);if(!O)return _.DebugFlags.InDebugMode&&console.log("  no more matches."),i.produce(t,o),void(h=!0);const M=O.captureIndices,W=O.matchedRuleId,F=!!(M&&M.length>0)&&M[0].end>u;if(W===S.endRuleId){const G=t.getRule(l);_.DebugFlags.InDebugMode&&console.log("  popping "+G.debugName+" - "+G.debugEndRegExp),i.produce(t,M[0].start),t=t.withContentNameScopesList(t.nameScopesList),y(l,f,m,t,i,G.endCaptures,M),i.produce(t,M[0].end);const C=t;if(t=t.parent,b=C.getAnchorPos(),!F&&C.getEnterPos()===u)return _.DebugFlags.InDebugMode&&console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"),t=C,i.produce(t,o),void(h=!0)}else{const G=l.getRule(W);i.produce(t,M[0].start);const C=t,J=G.getName(f.content,M),z=t.contentNameScopesList.pushAttributed(J,l);if(t=t.push(W,u,b,M[0].end===o,null,z,z),G instanceof S.BeginEndRule){const $=G;_.DebugFlags.InDebugMode&&console.log("  pushing "+$.debugName+" - "+$.debugBeginRegExp),y(l,f,m,t,i,$.beginCaptures,M),i.produce(t,M[0].end),b=M[0].end;const D=$.getContentName(f.content,M),q=z.pushAttributed(D,l);if(t=t.withContentNameScopesList(q),$.endHasBackReferences&&(t=t.withEndRule($.getEndWithResolvedBackReferences(f.content,M))),!F&&C.hasSameRuleAs(t))return _.DebugFlags.InDebugMode&&console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),t=t.pop(),i.produce(t,o),void(h=!0)}else if(G instanceof S.BeginWhileRule){const $=G;_.DebugFlags.InDebugMode&&console.log("  pushing "+$.debugName),y(l,f,m,t,i,$.beginCaptures,M),i.produce(t,M[0].end),b=M[0].end;const D=$.getContentName(f.content,M),q=z.pushAttributed(D,l);if(t=t.withContentNameScopesList(q),$.whileHasBackReferences&&(t=t.withEndRule($.getWhileWithResolvedBackReferences(f.content,M))),!F&&C.hasSameRuleAs(t))return _.DebugFlags.InDebugMode&&console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),t=t.pop(),i.produce(t,o),void(h=!0)}else{const $=G;if(_.DebugFlags.InDebugMode&&console.log("  matched "+$.debugName+" - "+$.debugMatchRegExp),y(l,f,m,t,i,$.captures,M),i.produce(t,M[0].end),t=t.pop(),!F)return _.DebugFlags.InDebugMode&&console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"),t=t.safePop(),i.produce(t,o),void(h=!0)}}M[0].end>u&&(u=M[0].end,m=!1)}}function A(l,f,m,u,t){return _.UseOnigurumaFindOptions?{ruleScanner:l.compile(f,m),findOptions:P(u,t)}:{ruleScanner:l.compileAG(f,m,u,t),findOptions:0}}function d(l,f,m,u,t){return _.UseOnigurumaFindOptions?{ruleScanner:l.compileWhile(f,m),findOptions:P(u,t)}:{ruleScanner:l.compileWhileAG(f,m,u,t),findOptions:0}}function P(l,f){let m=0;return l||(m|=1),f||(m|=4),m}function y(l,f,m,u,t,i,c){if(i.length===0)return;const n=f.content,o=Math.min(i.length,c.length),h=[],b=c[0].end;for(let T=0;T<o;T++){const I=i[T];if(I===null)continue;const O=c[T];if(O.length===0)continue;if(O.start>b)break;for(;h.length>0&&h[h.length-1].endPos<=O.start;)t.produceFromScopes(h[h.length-1].scopes,h[h.length-1].endPos),h.pop();if(h.length>0?t.produceFromScopes(h[h.length-1].scopes,O.start):t.produce(u,O.start),I.retokenizeCapturedWithRuleId){const W=I.getName(n,c),F=u.contentNameScopesList.pushAttributed(W,l),G=I.getContentName(n,c),C=F.pushAttributed(G,l),J=u.push(I.retokenizeCapturedWithRuleId,O.start,-1,!1,null,F,C),z=l.createOnigString(n.substring(0,O.end));w(l,z,m&&O.start===0,O.start,J,t,!1,0),r.disposeOnigString(z);continue}const M=I.getName(n,c);if(M!==null){const W=(h.length>0?h[h.length-1].scopes:u.contentNameScopesList).pushAttributed(M,l);h.push(new N(W,O.end))}}for(;h.length>0;)t.produceFromScopes(h[h.length-1].scopes,h[h.length-1].endPos),h.pop()}s._tokenizeString=w;class N{constructor(f,m){this.scopes=f,this.endPos=m}}s.LocalStackElement=N},974:(x,s)=>{function v(L,g){throw new Error("Near offset "+L.pos+": "+g+" ~~~"+L.source.substr(L.pos,50)+"~~~")}Object.defineProperty(s,"__esModule",{value:!0}),s.parseJSON=void 0,s.parseJSON=function(L,g,w){let A=new _(L),d=new r,P=0,y=null,N=[],l=[];function f(){N.push(P),l.push(y)}function m(){P=N.pop(),y=l.pop()}function u(t){v(A,t)}for(;S(A,d);){if(P===0){if(y!==null&&u("too many constructs in root"),d.type===3){y={},w&&(y.$vscodeTextmateLocation=d.toLocation(g)),f(),P=1;continue}if(d.type===2){y=[],f(),P=4;continue}u("unexpected token in root")}if(P===2){if(d.type===5){m();continue}if(d.type===7){P=3;continue}u("expected , or }")}if(P===1||P===3){if(P===1&&d.type===5){m();continue}if(d.type===1){let t=d.value;if(S(A,d)&&d.type===6||u("expected colon"),S(A,d)||u("expected value"),P=2,d.type===1){y[t]=d.value;continue}if(d.type===8){y[t]=null;continue}if(d.type===9){y[t]=!0;continue}if(d.type===10){y[t]=!1;continue}if(d.type===11){y[t]=parseFloat(d.value);continue}if(d.type===2){let i=[];y[t]=i,f(),P=4,y=i;continue}if(d.type===3){let i={};w&&(i.$vscodeTextmateLocation=d.toLocation(g)),y[t]=i,f(),P=1,y=i;continue}}u("unexpected token in dict")}if(P===5){if(d.type===4){m();continue}if(d.type===7){P=6;continue}u("expected , or ]")}if(P===4||P===6){if(P===4&&d.type===4){m();continue}if(P=5,d.type===1){y.push(d.value);continue}if(d.type===8){y.push(null);continue}if(d.type===9){y.push(!0);continue}if(d.type===10){y.push(!1);continue}if(d.type===11){y.push(parseFloat(d.value));continue}if(d.type===2){let t=[];y.push(t),f(),P=4,y=t;continue}if(d.type===3){let t={};w&&(t.$vscodeTextmateLocation=d.toLocation(g)),y.push(t),f(),P=1,y=t;continue}u("unexpected token in array")}u("unknown state")}return l.length!==0&&u("unclosed constructs"),y};class _{constructor(g){this.source=g,this.pos=0,this.len=g.length,this.line=1,this.char=0}}class r{constructor(){this.value=null,this.type=0,this.offset=-1,this.len=-1,this.line=-1,this.char=-1}toLocation(g){return{filename:g,line:this.line,char:this.char}}}function S(L,g){g.value=null,g.type=0,g.offset=-1,g.len=-1,g.line=-1,g.char=-1;let w,A=L.source,d=L.pos,P=L.len,y=L.line,N=L.char;for(;;){if(d>=P)return!1;if(w=A.charCodeAt(d),w!==32&&w!==9&&w!==13){if(w!==10)break;d++,y++,N=0}else d++,N++}if(g.offset=d,g.line=y,g.char=N,w===34){for(g.type=1,d++,N++;;){if(d>=P)return!1;if(w=A.charCodeAt(d),d++,N++,w!==92){if(w===34)break}else d++,N++}g.value=A.substring(g.offset+1,d-1).replace(/\\u([0-9A-Fa-f]{4})/g,(l,f)=>String.fromCodePoint(parseInt(f,16))).replace(/\\(.)/g,(l,f)=>{switch(f){case'"':return'"';case"\\":return"\\";case"/":return"/";case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";default:v(L,"invalid escape sequence")}throw new Error("unreachable")})}else if(w===91)g.type=2,d++,N++;else if(w===123)g.type=3,d++,N++;else if(w===93)g.type=4,d++,N++;else if(w===125)g.type=5,d++,N++;else if(w===58)g.type=6,d++,N++;else if(w===44)g.type=7,d++,N++;else if(w===110){if(g.type=8,d++,N++,w=A.charCodeAt(d),w!==117||(d++,N++,w=A.charCodeAt(d),w!==108)||(d++,N++,w=A.charCodeAt(d),w!==108))return!1;d++,N++}else if(w===116){if(g.type=9,d++,N++,w=A.charCodeAt(d),w!==114||(d++,N++,w=A.charCodeAt(d),w!==117)||(d++,N++,w=A.charCodeAt(d),w!==101))return!1;d++,N++}else if(w===102){if(g.type=10,d++,N++,w=A.charCodeAt(d),w!==97||(d++,N++,w=A.charCodeAt(d),w!==108)||(d++,N++,w=A.charCodeAt(d),w!==115)||(d++,N++,w=A.charCodeAt(d),w!==101))return!1;d++,N++}else for(g.type=11;;){if(d>=P)return!1;if(w=A.charCodeAt(d),!(w===46||w>=48&&w<=57||w===101||w===69||w===45||w===43))break;d++,N++}return g.len=d-g.offset,g.value===null&&(g.value=A.substr(g.offset,g.len)),L.pos=d,L.line=y,L.char=N,!0}},787:function(x,s,v){var _=this&&this.__createBinding||(Object.create?function(d,P,y,N){N===void 0&&(N=y),Object.defineProperty(d,N,{enumerable:!0,get:function(){return P[y]}})}:function(d,P,y,N){N===void 0&&(N=y),d[N]=P[y]}),r=this&&this.__exportStar||function(d,P){for(var y in d)y==="default"||Object.prototype.hasOwnProperty.call(P,y)||_(P,d,y)};Object.defineProperty(s,"__esModule",{value:!0}),s.parseRawGrammar=s.INITIAL=s.Registry=void 0;const S=v(391),L=v(50),g=v(652),w=v(583),A=v(965);r(v(44),s),s.Registry=class{constructor(d){this._options=d,this._syncRegistry=new g.SyncRegistry(w.Theme.createFromRawTheme(d.theme,d.colorMap),d.onigLib),this._ensureGrammarCache=new Map}dispose(){this._syncRegistry.dispose()}setTheme(d,P){this._syncRegistry.setTheme(w.Theme.createFromRawTheme(d,P))}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(d,P,y){return this.loadGrammarWithConfiguration(d,P,{embeddedLanguages:y})}loadGrammarWithConfiguration(d,P,y){return this._loadGrammar(d,P,y.embeddedLanguages,y.tokenTypes,new S.BalancedBracketSelectors(y.balancedBracketSelectors||[],y.unbalancedBracketSelectors||[]))}loadGrammar(d){return this._loadGrammar(d,0,null,null,null)}async _loadGrammar(d,P,y,N,l){const f=new A.ScopeDependencyProcessor(this._syncRegistry,d);for(;f.Q.length>0;)await Promise.all(f.Q.map(m=>this._loadSingleGrammar(m.scopeName))),f.processQueue();return this._grammarForScopeName(d,P,y,N,l)}async _loadSingleGrammar(d){return this._ensureGrammarCache.has(d)||this._ensureGrammarCache.set(d,this._doLoadSingleGrammar(d)),this._ensureGrammarCache.get(d)}async _doLoadSingleGrammar(d){const P=await this._options.loadGrammar(d);if(P){const y=typeof this._options.getInjections=="function"?this._options.getInjections(d):void 0;this._syncRegistry.addGrammar(P,y)}}async addGrammar(d,P=[],y=0,N=null){return this._syncRegistry.addGrammar(d,P),await this._grammarForScopeName(d.scopeName,y,N)}_grammarForScopeName(d,P=0,y=null,N=null,l=null){return this._syncRegistry.grammarForScopeName(d,P,y,N,l)}},s.INITIAL=S.StateStack.NULL,s.parseRawGrammar=L.parseRawGrammar},736:(x,s)=>{function v(_){return!!_&&!!_.match(/[\w\.:]+/)}Object.defineProperty(s,"__esModule",{value:!0}),s.createMatchers=void 0,s.createMatchers=function(_,r){const S=[],L=function(d){let P=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,y=P.exec(d);return{next:()=>{if(!y)return null;const N=y[0];return y=P.exec(d),N}}}(_);let g=L.next();for(;g!==null;){let d=0;if(g.length===2&&g.charAt(1)===":"){switch(g.charAt(0)){case"R":d=1;break;case"L":d=-1;break;default:console.log(`Unknown priority ${g} in scope selector`)}g=L.next()}let P=A();if(S.push({matcher:P,priority:d}),g!==",")break;g=L.next()}return S;function w(){if(g==="-"){g=L.next();const d=w();return P=>!!d&&!d(P)}if(g==="("){g=L.next();const d=function(){const P=[];let y=A();for(;y&&(P.push(y),g==="|"||g===",");){do g=L.next();while(g==="|"||g===",");y=A()}return N=>P.some(l=>l(N))}();return g===")"&&(g=L.next()),d}if(v(g)){const d=[];do d.push(g),g=L.next();while(v(g));return P=>r(d,P)}return null}function A(){const d=[];let P=w();for(;P;)d.push(P),P=w();return y=>d.every(N=>N(y))}}},44:(x,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.disposeOnigString=void 0,s.disposeOnigString=function(v){typeof v.dispose=="function"&&v.dispose()}},50:(x,s,v)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.parseRawGrammar=void 0;const _=v(69),r=v(350),S=v(974);s.parseRawGrammar=function(L,g=null){return g!==null&&/\.json$/.test(g)?(w=L,A=g,r.DebugFlags.InDebugMode?S.parseJSON(w,A,!0):JSON.parse(w)):function(d,P){return r.DebugFlags.InDebugMode?_.parseWithLocation(d,P,"$vscodeTextmateLocation"):_.parsePLIST(d)}(L,g);var w,A}},69:(x,s)=>{function v(_,r,S){const L=_.length;let g=0,w=1,A=0;function d(R){if(S===null)g+=R;else for(;R>0;)_.charCodeAt(g)===10?(g++,w++,A=0):(g++,A++),R--}function P(R){S===null?g=R:d(R-g)}function y(){for(;g<L;){let R=_.charCodeAt(g);if(R!==32&&R!==9&&R!==13&&R!==10)break;d(1)}}function N(R){return _.substr(g,R.length)===R&&(d(R.length),!0)}function l(R){let Q=_.indexOf(R,g);P(Q!==-1?Q+R.length:L)}function f(R){let Q=_.indexOf(R,g);if(Q!==-1){let U=_.substring(g,Q);return P(Q+R.length),U}{let U=_.substr(g);return P(L),U}}L>0&&_.charCodeAt(0)===65279&&(g=1);let m=0,u=null,t=[],i=[],c=null;function n(R,Q){t.push(m),i.push(u),m=R,u=Q}function o(){if(t.length===0)return h("illegal state stack");m=t.pop(),u=i.pop()}function h(R){throw new Error("Near offset "+g+": "+R+" ~~~"+_.substr(g,50)+"~~~")}const b=function(){if(c===null)return h("missing <key>");let R={};S!==null&&(R[S]={filename:r,line:w,char:A}),u[c]=R,c=null,n(1,R)},T=function(){if(c===null)return h("missing <key>");let R=[];u[c]=R,c=null,n(2,R)},I=function(){let R={};S!==null&&(R[S]={filename:r,line:w,char:A}),u.push(R),n(1,R)},O=function(){let R=[];u.push(R),n(2,R)};function M(){if(m!==1)return h("unexpected </dict>");o()}function W(){return m===1||m!==2?h("unexpected </array>"):void o()}function F(R){if(m===1){if(c===null)return h("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function G(R){if(isNaN(R))return h("cannot parse float");if(m===1){if(c===null)return h("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function C(R){if(isNaN(R))return h("cannot parse integer");if(m===1){if(c===null)return h("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function J(R){if(m===1){if(c===null)return h("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function z(R){if(m===1){if(c===null)return h("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function $(R){if(m===1){if(c===null)return h("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function D(){let R=f(">"),Q=!1;return R.charCodeAt(R.length-1)===47&&(Q=!0,R=R.substring(0,R.length-1)),{name:R.trim(),isClosed:Q}}function q(R){if(R.isClosed)return"";let Q=f("</");return l(">"),Q.replace(/&#([0-9]+);/g,function(U,ne){return String.fromCodePoint(parseInt(ne,10))}).replace(/&#x([0-9a-f]+);/g,function(U,ne){return String.fromCodePoint(parseInt(ne,16))}).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g,function(U){switch(U){case"&amp;":return"&";case"&lt;":return"<";case"&gt;":return">";case"&quot;":return'"';case"&apos;":return"'"}return U})}for(;g<L&&(y(),!(g>=L));){const R=_.charCodeAt(g);if(d(1),R!==60)return h("expected <");if(g>=L)return h("unexpected end of input");const Q=_.charCodeAt(g);if(Q===63){d(1),l("?>");continue}if(Q===33){if(d(1),N("--")){l("-->");continue}l(">");continue}if(Q===47){if(d(1),y(),N("plist")){l(">");continue}if(N("dict")){l(">"),M();continue}if(N("array")){l(">"),W();continue}return h("unexpected closed tag")}let U=D();switch(U.name){case"dict":m===1?b():m===2?I():(u={},S!==null&&(u[S]={filename:r,line:w,char:A}),n(1,u)),U.isClosed&&M();continue;case"array":m===1?T():m===2?O():(u=[],n(2,u)),U.isClosed&&W();continue;case"key":ie=q(U),m!==1?h("unexpected <key>"):c!==null?h("too many <key>"):c=ie;continue;case"string":F(q(U));continue;case"real":G(parseFloat(q(U)));continue;case"integer":C(parseInt(q(U),10));continue;case"date":J(new Date(q(U)));continue;case"data":z(q(U));continue;case"true":q(U),$(!0);continue;case"false":q(U),$(!1);continue}if(!/^plist/.test(U.name))return h("unexpected opened tag "+U.name)}var ie;return u}Object.defineProperty(s,"__esModule",{value:!0}),s.parsePLIST=s.parseWithLocation=void 0,s.parseWithLocation=function(_,r,S){return v(_,r,S)},s.parsePLIST=function(_){return v(_,null,null)}},652:(x,s,v)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.SyncRegistry=void 0;const _=v(391);s.SyncRegistry=class{constructor(r,S){this._onigLibPromise=S,this._grammars=new Map,this._rawGrammars=new Map,this._injectionGrammars=new Map,this._theme=r}dispose(){for(const r of this._grammars.values())r.dispose()}setTheme(r){this._theme=r}getColorMap(){return this._theme.getColorMap()}addGrammar(r,S){this._rawGrammars.set(r.scopeName,r),S&&this._injectionGrammars.set(r.scopeName,S)}lookup(r){return this._rawGrammars.get(r)}injections(r){return this._injectionGrammars.get(r)}getDefaults(){return this._theme.getDefaults()}themeMatch(r){return this._theme.match(r)}async grammarForScopeName(r,S,L,g,w){if(!this._grammars.has(r)){let A=this._rawGrammars.get(r);if(!A)return null;this._grammars.set(r,_.createGrammar(r,A,S,L,g,w,this,await this._onigLibPromise))}return this._grammars.get(r)}}},792:(x,s,v)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.CompiledRule=s.RegExpSourceList=s.RegExpSource=s.RuleFactory=s.BeginWhileRule=s.BeginEndRule=s.IncludeOnlyRule=s.MatchRule=s.CaptureRule=s.Rule=s.ruleIdToNumber=s.ruleIdFromNumber=s.whileRuleId=s.endRuleId=void 0;const _=v(878),r=v(965),S=/\\(\d+)/,L=/\\(\d+)/g;s.endRuleId=-1,s.whileRuleId=-2,s.ruleIdFromNumber=function(u){return u},s.ruleIdToNumber=function(u){return u};class g{constructor(t,i,c,n){this.$location=t,this.id=i,this._name=c||null,this._nameIsCapturing=_.RegexSource.hasCaptures(this._name),this._contentName=n||null,this._contentNameIsCapturing=_.RegexSource.hasCaptures(this._contentName)}get debugName(){const t=this.$location?`${_.basename(this.$location.filename)}:${this.$location.line}`:"unknown";return`${this.constructor.name}#${this.id} @ ${t}`}getName(t,i){return this._nameIsCapturing&&this._name!==null&&t!==null&&i!==null?_.RegexSource.replaceCaptures(this._name,t,i):this._name}getContentName(t,i){return this._contentNameIsCapturing&&this._contentName!==null?_.RegexSource.replaceCaptures(this._contentName,t,i):this._contentName}}s.Rule=g;class w extends g{constructor(t,i,c,n,o){super(t,i,c,n),this.retokenizeCapturedWithRuleId=o}dispose(){}collectPatterns(t,i){throw new Error("Not supported!")}compile(t,i){throw new Error("Not supported!")}compileAG(t,i,c,n){throw new Error("Not supported!")}}s.CaptureRule=w;class A extends g{constructor(t,i,c,n,o){super(t,i,c,null),this._match=new l(n,this.id),this.captures=o,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugMatchRegExp(){return`${this._match.source}`}collectPatterns(t,i){i.push(this._match)}compile(t,i){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,i,c,n){return this._getCachedCompiledPatterns(t).compileAG(t,c,n)}_getCachedCompiledPatterns(t){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new f,this.collectPatterns(t,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}}s.MatchRule=A;class d extends g{constructor(t,i,c,n,o){super(t,i,c,n),this.patterns=o.patterns,this.hasMissingPatterns=o.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}collectPatterns(t,i){for(const c of this.patterns)t.getRule(c).collectPatterns(t,i)}compile(t,i){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,i,c,n){return this._getCachedCompiledPatterns(t).compileAG(t,c,n)}_getCachedCompiledPatterns(t){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new f,this.collectPatterns(t,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}}s.IncludeOnlyRule=d;class P extends g{constructor(t,i,c,n,o,h,b,T,I,O){super(t,i,c,n),this._begin=new l(o,this.id),this.beginCaptures=h,this._end=new l(b||"￿",-1),this.endHasBackReferences=this._end.hasBackReferences,this.endCaptures=T,this.applyEndPatternLast=I||!1,this.patterns=O.patterns,this.hasMissingPatterns=O.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugEndRegExp(){return`${this._end.source}`}getEndWithResolvedBackReferences(t,i){return this._end.resolveBackReferences(t,i)}collectPatterns(t,i){i.push(this._begin)}compile(t,i){return this._getCachedCompiledPatterns(t,i).compile(t)}compileAG(t,i,c,n){return this._getCachedCompiledPatterns(t,i).compileAG(t,c,n)}_getCachedCompiledPatterns(t,i){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new f;for(const c of this.patterns)t.getRule(c).collectPatterns(t,this._cachedCompiledPatterns);this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)}return this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,i):this._cachedCompiledPatterns.setSource(0,i)),this._cachedCompiledPatterns}}s.BeginEndRule=P;class y extends g{constructor(t,i,c,n,o,h,b,T,I){super(t,i,c,n),this._begin=new l(o,this.id),this.beginCaptures=h,this.whileCaptures=T,this._while=new l(b,s.whileRuleId),this.whileHasBackReferences=this._while.hasBackReferences,this.patterns=I.patterns,this.hasMissingPatterns=I.hasMissingPatterns,this._cachedCompiledPatterns=null,this._cachedCompiledWhilePatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugWhileRegExp(){return`${this._while.source}`}getWhileWithResolvedBackReferences(t,i){return this._while.resolveBackReferences(t,i)}collectPatterns(t,i){i.push(this._begin)}compile(t,i){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,i,c,n){return this._getCachedCompiledPatterns(t).compileAG(t,c,n)}_getCachedCompiledPatterns(t){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new f;for(const i of this.patterns)t.getRule(i).collectPatterns(t,this._cachedCompiledPatterns)}return this._cachedCompiledPatterns}compileWhile(t,i){return this._getCachedCompiledWhilePatterns(t,i).compile(t)}compileWhileAG(t,i,c,n){return this._getCachedCompiledWhilePatterns(t,i).compileAG(t,c,n)}_getCachedCompiledWhilePatterns(t,i){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new f,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,i||"￿"),this._cachedCompiledWhilePatterns}}s.BeginWhileRule=y;class N{static createCaptureRule(t,i,c,n,o){return t.registerRule(h=>new w(i,h,c,n,o))}static getCompiledRuleId(t,i,c){return t.id||i.registerRule(n=>{if(t.id=n,t.match)return new A(t.$vscodeTextmateLocation,t.id,t.name,t.match,N._compileCaptures(t.captures,i,c));if(t.begin===void 0){t.repository&&(c=_.mergeObjects({},c,t.repository));let o=t.patterns;return o===void 0&&t.include&&(o=[{include:t.include}]),new d(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,N._compilePatterns(o,i,c))}return t.while?new y(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,N._compileCaptures(t.beginCaptures||t.captures,i,c),t.while,N._compileCaptures(t.whileCaptures||t.captures,i,c),N._compilePatterns(t.patterns,i,c)):new P(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,N._compileCaptures(t.beginCaptures||t.captures,i,c),t.end,N._compileCaptures(t.endCaptures||t.captures,i,c),t.applyEndPatternLast,N._compilePatterns(t.patterns,i,c))}),t.id}static _compileCaptures(t,i,c){let n=[];if(t){let o=0;for(const h in t){if(h==="$vscodeTextmateLocation")continue;const b=parseInt(h,10);b>o&&(o=b)}for(let h=0;h<=o;h++)n[h]=null;for(const h in t){if(h==="$vscodeTextmateLocation")continue;const b=parseInt(h,10);let T=0;t[h].patterns&&(T=N.getCompiledRuleId(t[h],i,c)),n[b]=N.createCaptureRule(i,t[h].$vscodeTextmateLocation,t[h].name,t[h].contentName,T)}}return n}static _compilePatterns(t,i,c){let n=[];if(t)for(let o=0,h=t.length;o<h;o++){const b=t[o];let T=-1;if(b.include){const I=r.parseInclude(b.include);switch(I.kind){case 0:case 1:T=N.getCompiledRuleId(c[b.include],i,c);break;case 2:let O=c[I.ruleName];O&&(T=N.getCompiledRuleId(O,i,c));break;case 3:case 4:const M=I.scopeName,W=I.kind===4?I.ruleName:null,F=i.getExternalGrammar(M,c);if(F)if(W){let G=F.repository[W];G&&(T=N.getCompiledRuleId(G,i,F.repository))}else T=N.getCompiledRuleId(F.repository.$self,i,F.repository)}}else T=N.getCompiledRuleId(b,i,c);if(T!==-1){const I=i.getRule(T);let O=!1;if((I instanceof d||I instanceof P||I instanceof y)&&I.hasMissingPatterns&&I.patterns.length===0&&(O=!0),O)continue;n.push(T)}}return{patterns:n,hasMissingPatterns:(t?t.length:0)!==n.length}}}s.RuleFactory=N;class l{constructor(t,i){if(t){const c=t.length;let n=0,o=[],h=!1;for(let b=0;b<c;b++)if(t.charAt(b)==="\\"&&b+1<c){const T=t.charAt(b+1);T==="z"?(o.push(t.substring(n,b)),o.push("$(?!\\n)(?<!\\n)"),n=b+2):T!=="A"&&T!=="G"||(h=!0),b++}this.hasAnchor=h,n===0?this.source=t:(o.push(t.substring(n,c)),this.source=o.join(""))}else this.hasAnchor=!1,this.source=t;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=i,this.hasBackReferences=S.test(this.source)}clone(){return new l(this.source,this.ruleId)}setSource(t){this.source!==t&&(this.source=t,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()))}resolveBackReferences(t,i){let c=i.map(n=>t.substring(n.start,n.end));return L.lastIndex=0,this.source.replace(L,(n,o)=>_.escapeRegExpCharacters(c[parseInt(o,10)]||""))}_buildAnchorCache(){let t,i,c,n,o=[],h=[],b=[],T=[];for(t=0,i=this.source.length;t<i;t++)c=this.source.charAt(t),o[t]=c,h[t]=c,b[t]=c,T[t]=c,c==="\\"&&t+1<i&&(n=this.source.charAt(t+1),n==="A"?(o[t+1]="￿",h[t+1]="￿",b[t+1]="A",T[t+1]="A"):n==="G"?(o[t+1]="￿",h[t+1]="G",b[t+1]="￿",T[t+1]="G"):(o[t+1]=n,h[t+1]=n,b[t+1]=n,T[t+1]=n),t++);return{A0_G0:o.join(""),A0_G1:h.join(""),A1_G0:b.join(""),A1_G1:T.join("")}}resolveAnchors(t,i){return this.hasAnchor&&this._anchorCache?t?i?this._anchorCache.A1_G1:this._anchorCache.A1_G0:i?this._anchorCache.A0_G1:this._anchorCache.A0_G0:this.source}}s.RegExpSource=l;class f{constructor(){this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null}}dispose(){this._disposeCaches()}_disposeCaches(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null)}push(t){this._items.push(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}unshift(t){this._items.unshift(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}length(){return this._items.length}setSource(t,i){this._items[t].source!==i&&(this._disposeCaches(),this._items[t].setSource(i))}compile(t){if(!this._cached){let i=this._items.map(c=>c.source);this._cached=new m(t,i,this._items.map(c=>c.ruleId))}return this._cached}compileAG(t,i,c){return this._hasAnchors?i?c?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(t,i,c)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(t,i,c)),this._anchorCache.A1_G0):c?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(t,i,c)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(t,i,c)),this._anchorCache.A0_G0):this.compile(t)}_resolveAnchors(t,i,c){let n=this._items.map(o=>o.resolveAnchors(i,c));return new m(t,n,this._items.map(o=>o.ruleId))}}s.RegExpSourceList=f;class m{constructor(t,i,c){this.regExps=i,this.rules=c,this.scanner=t.createOnigScanner(i)}dispose(){typeof this.scanner.dispose=="function"&&this.scanner.dispose()}toString(){const t=[];for(let i=0,c=this.rules.length;i<c;i++)t.push("   - "+this.rules[i]+": "+this.regExps[i]);return t.join(`
`)}findNextMatchSync(t,i,c){const n=this.scanner.findNextMatchSync(t,i,c);return n?{ruleId:this.rules[n.index],captureIndices:n.captureIndices}:null}}s.CompiledRule=m},583:(x,s,v)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.ThemeTrieElement=s.ThemeTrieElementRule=s.ColorMap=s.fontStyleToString=s.ParsedThemeRule=s.parseTheme=s.StyleAttributes=s.ScopeStack=s.Theme=void 0;const _=v(878);class r{constructor(l,f,m){this._colorMap=l,this._defaults=f,this._root=m,this._cachedMatchRoot=new _.CachedFn(u=>this._root.match(u))}static createFromRawTheme(l,f){return this.createFromParsedTheme(w(l),f)}static createFromParsedTheme(l,f){return function(m,u){m.sort((b,T)=>{let I=_.strcmp(b.scope,T.scope);return I!==0?I:(I=_.strArrCmp(b.parentScopes,T.parentScopes),I!==0?I:b.index-T.index)});let t=0,i="#000000",c="#ffffff";for(;m.length>=1&&m[0].scope==="";){let b=m.shift();b.fontStyle!==-1&&(t=b.fontStyle),b.foreground!==null&&(i=b.foreground),b.background!==null&&(c=b.background)}let n=new d(u),o=new g(t,n.getId(i),n.getId(c)),h=new y(new P(0,null,-1,0,0),[]);for(let b=0,T=m.length;b<T;b++){let I=m[b];h.insert(0,I.scope,I.parentScopes,I.fontStyle,n.getId(I.foreground),n.getId(I.background))}return new r(n,o,h)}(l,f)}getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(l){if(l===null)return this._defaults;const f=l.scopeName,m=this._cachedMatchRoot.get(f).find(u=>function(t,i){if(i===null)return!0;let c=0,n=i[c];for(;t;){if(L(t.scopeName,n)){if(c++,c===i.length)return!0;n=i[c]}t=t.parent}return!1}(l.parent,u.parentScopes));return m?new g(m.fontStyle,m.foreground,m.background):null}}s.Theme=r;class S{constructor(l,f){this.parent=l,this.scopeName=f}static from(...l){let f=null;for(let m=0;m<l.length;m++)f=new S(f,l[m]);return f}push(l){return new S(this,l)}getSegments(){let l=this;const f=[];for(;l;)f.push(l.scopeName),l=l.parent;return f.reverse(),f}toString(){return this.getSegments().join(" ")}}function L(N,l){return l===N||N.startsWith(l)&&N[l.length]==="."}s.ScopeStack=S;class g{constructor(l,f,m){this.fontStyle=l,this.foregroundId=f,this.backgroundId=m}}function w(N){if(!N)return[];if(!N.settings||!Array.isArray(N.settings))return[];let l=N.settings,f=[],m=0;for(let u=0,t=l.length;u<t;u++){let i,c=l[u];if(!c.settings)continue;if(typeof c.scope=="string"){let b=c.scope;b=b.replace(/^[,]+/,""),b=b.replace(/[,]+$/,""),i=b.split(",")}else i=Array.isArray(c.scope)?c.scope:[""];let n=-1;if(typeof c.settings.fontStyle=="string"){n=0;let b=c.settings.fontStyle.split(" ");for(let T=0,I=b.length;T<I;T++)switch(b[T]){case"italic":n|=1;break;case"bold":n|=2;break;case"underline":n|=4;break;case"strikethrough":n|=8}}let o=null;typeof c.settings.foreground=="string"&&_.isValidHexColor(c.settings.foreground)&&(o=c.settings.foreground);let h=null;typeof c.settings.background=="string"&&_.isValidHexColor(c.settings.background)&&(h=c.settings.background);for(let b=0,T=i.length;b<T;b++){let I=i[b].trim().split(" "),O=I[I.length-1],M=null;I.length>1&&(M=I.slice(0,I.length-1),M.reverse()),f[m++]=new A(O,M,u,n,o,h)}}return f}s.StyleAttributes=g,s.parseTheme=w;class A{constructor(l,f,m,u,t,i){this.scope=l,this.parentScopes=f,this.index=m,this.fontStyle=u,this.foreground=t,this.background=i}}s.ParsedThemeRule=A,s.fontStyleToString=function(N){if(N===-1)return"not set";let l="";return 1&N&&(l+="italic "),2&N&&(l+="bold "),4&N&&(l+="underline "),8&N&&(l+="strikethrough "),l===""&&(l="none"),l.trim()};class d{constructor(l){if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(l)){this._isFrozen=!0;for(let f=0,m=l.length;f<m;f++)this._color2id[l[f]]=f,this._id2color[f]=l[f]}else this._isFrozen=!1}getId(l){if(l===null)return 0;l=l.toUpperCase();let f=this._color2id[l];if(f)return f;if(this._isFrozen)throw new Error(`Missing color in color map - ${l}`);return f=++this._lastColorId,this._color2id[l]=f,this._id2color[f]=l,f}getColorMap(){return this._id2color.slice(0)}}s.ColorMap=d;class P{constructor(l,f,m,u,t){this.scopeDepth=l,this.parentScopes=f,this.fontStyle=m,this.foreground=u,this.background=t}clone(){return new P(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(l){let f=[];for(let m=0,u=l.length;m<u;m++)f[m]=l[m].clone();return f}acceptOverwrite(l,f,m,u){this.scopeDepth>l?console.log("how did this happen?"):this.scopeDepth=l,f!==-1&&(this.fontStyle=f),m!==0&&(this.foreground=m),u!==0&&(this.background=u)}}s.ThemeTrieElementRule=P;class y{constructor(l,f=[],m={}){this._mainRule=l,this._children=m,this._rulesWithParentScopes=f}static _sortBySpecificity(l){return l.length===1||l.sort(this._cmpBySpecificity),l}static _cmpBySpecificity(l,f){if(l.scopeDepth===f.scopeDepth){const m=l.parentScopes,u=f.parentScopes;let t=m===null?0:m.length,i=u===null?0:u.length;if(t===i)for(let c=0;c<t;c++){const n=m[c].length,o=u[c].length;if(n!==o)return o-n}return i-t}return f.scopeDepth-l.scopeDepth}match(l){if(l==="")return y._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));let f,m,u=l.indexOf(".");return u===-1?(f=l,m=""):(f=l.substring(0,u),m=l.substring(u+1)),this._children.hasOwnProperty(f)?this._children[f].match(m):y._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes))}insert(l,f,m,u,t,i){if(f==="")return void this._doInsertHere(l,m,u,t,i);let c,n,o,h=f.indexOf(".");h===-1?(c=f,n=""):(c=f.substring(0,h),n=f.substring(h+1)),this._children.hasOwnProperty(c)?o=this._children[c]:(o=new y(this._mainRule.clone(),P.cloneArr(this._rulesWithParentScopes)),this._children[c]=o),o.insert(l+1,n,m,u,t,i)}_doInsertHere(l,f,m,u,t){if(f!==null){for(let i=0,c=this._rulesWithParentScopes.length;i<c;i++){let n=this._rulesWithParentScopes[i];if(_.strArrCmp(n.parentScopes,f)===0)return void n.acceptOverwrite(l,m,u,t)}m===-1&&(m=this._mainRule.fontStyle),u===0&&(u=this._mainRule.foreground),t===0&&(t=this._mainRule.background),this._rulesWithParentScopes.push(new P(l,f,m,u,t))}else this._mainRule.acceptOverwrite(l,m,u,t)}}s.ThemeTrieElement=y},878:(x,s)=>{function v(S){return Array.isArray(S)?function(L){let g=[];for(let w=0,A=L.length;w<A;w++)g[w]=v(L[w]);return g}(S):typeof S=="object"?function(L){let g={};for(let w in L)g[w]=v(L[w]);return g}(S):S}Object.defineProperty(s,"__esModule",{value:!0}),s.performanceNow=s.CachedFn=s.escapeRegExpCharacters=s.isValidHexColor=s.strArrCmp=s.strcmp=s.RegexSource=s.basename=s.mergeObjects=s.clone=void 0,s.clone=function(S){return v(S)},s.mergeObjects=function(S,...L){return L.forEach(g=>{for(let w in g)S[w]=g[w]}),S},s.basename=function S(L){const g=~L.lastIndexOf("/")||~L.lastIndexOf("\\");return g===0?L:~g==L.length-1?S(L.substring(0,L.length-1)):L.substr(1+~g)};let _=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;function r(S,L){return S<L?-1:S>L?1:0}s.RegexSource=class{static hasCaptures(S){return S!==null&&(_.lastIndex=0,_.test(S))}static replaceCaptures(S,L,g){return S.replace(_,(w,A,d,P)=>{let y=g[parseInt(A||d,10)];if(!y)return w;{let N=L.substring(y.start,y.end);for(;N[0]===".";)N=N.substring(1);switch(P){case"downcase":return N.toLowerCase();case"upcase":return N.toUpperCase();default:return N}}})}},s.strcmp=r,s.strArrCmp=function(S,L){if(S===null&&L===null)return 0;if(!S)return-1;if(!L)return 1;let g=S.length,w=L.length;if(g===w){for(let A=0;A<g;A++){let d=r(S[A],L[A]);if(d!==0)return d}return 0}return g-w},s.isValidHexColor=function(S){return!!(/^#[0-9a-f]{6}$/i.test(S)||/^#[0-9a-f]{8}$/i.test(S)||/^#[0-9a-f]{3}$/i.test(S)||/^#[0-9a-f]{4}$/i.test(S))},s.escapeRegExpCharacters=function(S){return S.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")},s.CachedFn=class{constructor(S){this.fn=S,this.cache=new Map}get(S){if(this.cache.has(S))return this.cache.get(S);const L=this.fn(S);return this.cache.set(S,L),L}},s.performanceNow=typeof performance>"u"?function(){return Date.now()}:function(){return performance.now()}}},j={};return function x(s){var v=j[s];if(v!==void 0)return v.exports;var _=j[s]={exports:{}};return a[s].call(_.exports,_,_.exports,x),_.exports}(787)})()})})(Qe);var Je=Qe.exports;const ve=[{id:"abap",scopeName:"source.abap",path:"abap.tmLanguage.json",displayName:"ABAP",samplePath:"abap.sample"},{id:"actionscript-3",scopeName:"source.actionscript.3",path:"actionscript-3.tmLanguage.json",displayName:"ActionScript",samplePath:"actionscript-3.sample"},{id:"ada",scopeName:"source.ada",path:"ada.tmLanguage.json",displayName:"Ada",samplePath:"ada.sample"},{id:"apache",scopeName:"source.apacheconf",path:"apache.tmLanguage.json",displayName:"Apache Conf",samplePath:"apache.sample"},{id:"apex",scopeName:"source.apex",path:"apex.tmLanguage.json",displayName:"Apex",samplePath:"apex.sample"},{id:"apl",scopeName:"source.apl",path:"apl.tmLanguage.json",displayName:"APL",samplePath:"apl.sample",embeddedLangs:["html","xml","css","javascript","json"]},{id:"applescript",scopeName:"source.applescript",path:"applescript.tmLanguage.json",displayName:"AppleScript",samplePath:"applescript.sample"},{id:"ara",scopeName:"source.ara",path:"ara.tmLanguage.json",displayName:"Ara",samplePath:"ara.sample"},{id:"asm",scopeName:"source.asm.x86_64",path:"asm.tmLanguage.json",displayName:"Assembly",samplePath:"asm.sample"},{id:"astro",scopeName:"source.astro",path:"astro.tmLanguage.json",displayName:"Astro",samplePath:"astro.sample",embeddedLangs:["json","javascript","typescript","stylus","sass","css","scss","less","postcss","tsx"]},{id:"awk",scopeName:"source.awk",path:"awk.tmLanguage.json",displayName:"AWK",samplePath:"awk.sample"},{id:"ballerina",scopeName:"source.ballerina",path:"ballerina.tmLanguage.json",displayName:"Ballerina",samplePath:"ballerina.sample"},{id:"bat",scopeName:"source.batchfile",path:"bat.tmLanguage.json",displayName:"Batch",samplePath:"bat.sample",aliases:["batch"]},{id:"beancount",scopeName:"text.beancount",path:"beancount.tmLanguage.json",displayName:"Beancount",samplePath:"beancount.sample"},{id:"berry",scopeName:"source.berry",path:"berry.tmLanguage.json",displayName:"Berry",samplePath:"berry.sample",aliases:["be"]},{id:"bibtex",scopeName:"text.bibtex",path:"bibtex.tmLanguage.json",displayName:"BibTeX",samplePath:"bibtex.sample"},{id:"bicep",scopeName:"source.bicep",path:"bicep.tmLanguage.json",displayName:"Bicep",samplePath:"bicep.sample"},{id:"blade",scopeName:"text.html.php.blade",path:"blade.tmLanguage.json",displayName:"Blade",samplePath:"blade.sample",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"c",scopeName:"source.c",path:"c.tmLanguage.json",displayName:"C",samplePath:"c.sample"},{id:"cadence",scopeName:"source.cadence",path:"cadence.tmLanguage.json",displayName:"Cadence",samplePath:"cadence.sample",aliases:["cdc"]},{id:"clarity",scopeName:"source.clar",path:"clarity.tmLanguage.json",displayName:"Clarity",samplePath:"clarity.sample"},{id:"clojure",scopeName:"source.clojure",path:"clojure.tmLanguage.json",displayName:"Clojure",samplePath:"clojure.sample",aliases:["clj"]},{id:"cmake",scopeName:"source.cmake",path:"cmake.tmLanguage.json",displayName:"CMake",samplePath:"cmake.sample"},{id:"cobol",scopeName:"source.cobol",path:"cobol.tmLanguage.json",displayName:"COBOL",samplePath:"cobol.sample",embeddedLangs:["sql","html","java"]},{id:"codeql",scopeName:"source.ql",path:"codeql.tmLanguage.json",displayName:"CodeQL",samplePath:"codeql.sample",aliases:["ql"]},{id:"coffee",scopeName:"source.coffee",path:"coffee.tmLanguage.json",displayName:"CoffeeScript",samplePath:"coffee.sample",embeddedLangs:["javascript"]},{id:"cpp",scopeName:"source.cpp",path:"cpp.tmLanguage.json",displayName:"C++",samplePath:"cpp.sample",aliases:["c++"],embeddedLangs:["glsl","sql"]},{id:"crystal",scopeName:"source.crystal",path:"crystal.tmLanguage.json",displayName:"Crystal",samplePath:"crystal.sample",embeddedLangs:["html","sql","css","c","javascript","shellscript"]},{id:"csharp",scopeName:"source.cs",path:"csharp.tmLanguage.json",displayName:"C#",samplePath:"csharp.sample",aliases:["c#","cs"]},{id:"css",scopeName:"source.css",path:"css.tmLanguage.json",displayName:"CSS",samplePath:"css.sample"},{id:"csv",scopeName:"text.csv",path:"csv.tmLanguage.json",displayName:"csv syntax",samplePath:"csv.sample"},{id:"cue",scopeName:"source.cue",path:"cue.tmLanguage.json",displayName:"CUE",samplePath:"cue.sample"},{id:"cypher",scopeName:"source.cypher",path:"cypher.tmLanguage.json",displayName:"Cypher",samplePath:"cypher.sample",aliases:["cql"]},{id:"d",scopeName:"source.d",path:"d.tmLanguage.json",displayName:"D",samplePath:"d.sample"},{id:"dart",scopeName:"source.dart",path:"dart.tmLanguage.json",displayName:"Dart",samplePath:"dart.sample"},{id:"dax",scopeName:"source.dax",path:"dax.tmLanguage.json",displayName:"DAX",samplePath:"dax.sample"},{id:"diff",scopeName:"source.diff",path:"diff.tmLanguage.json",displayName:"Diff",samplePath:"diff.sample"},{id:"docker",scopeName:"source.dockerfile",path:"docker.tmLanguage.json",displayName:"Docker",samplePath:"docker.sample",aliases:["dockerfile"]},{id:"dream-maker",scopeName:"source.dm",path:"dream-maker.tmLanguage.json",displayName:"Dream Maker",samplePath:"dream-maker.sample"},{id:"elixir",scopeName:"source.elixir",path:"elixir.tmLanguage.json",displayName:"Elixir",samplePath:"elixir.sample",embeddedLangs:["html"]},{id:"elm",scopeName:"source.elm",path:"elm.tmLanguage.json",displayName:"Elm",samplePath:"elm.sample",embeddedLangs:["glsl"]},{id:"erb",scopeName:"text.html.erb",path:"erb.tmLanguage.json",displayName:"ERB",samplePath:"erb.sample",embeddedLangs:["html","ruby"]},{id:"erlang",scopeName:"source.erlang",path:"erlang.tmLanguage.json",displayName:"Erlang",samplePath:"erlang.sample",aliases:["erl"]},{id:"fish",scopeName:"source.fish",path:"fish.tmLanguage.json",displayName:"Fish",samplePath:"fish.sample"},{id:"fsharp",scopeName:"source.fsharp",path:"fsharp.tmLanguage.json",displayName:"F#",samplePath:"fsharp.sample",aliases:["f#","fs"],embeddedLangs:["markdown"]},{id:"gdresource",scopeName:"source.gdresource",path:"gdresource.tmLanguage.json",displayName:"GDResource",samplePath:"gdresource.sample",embeddedLangs:["gdshader","gdscript"]},{id:"gdscript",scopeName:"source.gdscript",path:"gdscript.tmLanguage.json",displayName:"GDScript",samplePath:"gdscript.sample"},{id:"gdshader",scopeName:"source.gdshader",path:"gdshader.tmLanguage.json",displayName:"GDShader",samplePath:"gdshader.sample"},{id:"gherkin",scopeName:"text.gherkin.feature",path:"gherkin.tmLanguage.json",displayName:"Gherkin",samplePath:"gherkin.sample"},{id:"git-commit",scopeName:"text.git-commit",path:"git-commit.tmLanguage.json",displayName:"Git Commit Message",embeddedLangs:["diff"]},{id:"git-rebase",scopeName:"text.git-rebase",path:"git-rebase.tmLanguage.json",displayName:"Git Rebase Message",embeddedLangs:["shellscript"]},{id:"glimmer-js",scopeName:"source.gjs",path:"glimmer-js.tmLanguage.json",displayName:"Glimmer JS",aliases:["gjs"],embeddedLangs:["javascript","handlebars"]},{id:"glimmer-ts",scopeName:"source.gts",path:"glimmer-ts.tmLanguage.json",displayName:"Glimmer TS",aliases:["gts"],embeddedLangs:["typescript","handlebars"]},{id:"glsl",scopeName:"source.glsl",path:"glsl.tmLanguage.json",displayName:"GLSL",samplePath:"glsl.sample",embeddedLangs:["c"]},{id:"gnuplot",scopeName:"source.gnuplot",path:"gnuplot.tmLanguage.json",displayName:"Gnuplot",samplePath:"gnuplot.sample"},{id:"go",scopeName:"source.go",path:"go.tmLanguage.json",displayName:"Go",samplePath:"go.sample"},{id:"graphql",scopeName:"source.graphql",path:"graphql.tmLanguage.json",displayName:"GraphQL",samplePath:"graphql.sample",aliases:["gql"],embeddedLangs:["javascript","typescript","jsx","tsx"]},{id:"groovy",scopeName:"source.groovy",path:"groovy.tmLanguage.json",displayName:"Groovy",samplePath:"groovy.sample"},{id:"hack",scopeName:"source.hack",path:"hack.tmLanguage.json",displayName:"Hack",samplePath:"hack.sample",embeddedLangs:["html","sql"]},{id:"haml",scopeName:"text.haml",path:"haml.tmLanguage.json",displayName:"Ruby Haml",samplePath:"haml.sample",embeddedLangs:["ruby","javascript","sass","coffee","markdown","css"]},{id:"handlebars",scopeName:"text.html.handlebars",path:"handlebars.tmLanguage.json",displayName:"Handlebars",samplePath:"handlebars.sample",aliases:["hbs"],embeddedLangs:["html","css","javascript","yaml"]},{id:"haskell",scopeName:"source.haskell",path:"haskell.tmLanguage.json",displayName:"Haskell",samplePath:"haskell.sample",aliases:["hs"]},{id:"hcl",scopeName:"source.hcl",path:"hcl.tmLanguage.json",displayName:"HashiCorp HCL",samplePath:"hcl.sample"},{id:"hjson",scopeName:"source.hjson",path:"hjson.tmLanguage.json",displayName:"Hjson",samplePath:"hjson.sample"},{id:"hlsl",scopeName:"source.hlsl",path:"hlsl.tmLanguage.json",displayName:"HLSL",samplePath:"hlsl.sample"},{id:"html",scopeName:"text.html.basic",path:"html.tmLanguage.json",displayName:"HTML",samplePath:"html.sample",embeddedLangs:["javascript","css"]},{id:"http",scopeName:"source.http",path:"http.tmLanguage.json",displayName:"HTTP",samplePath:"http.sample",embeddedLangs:["shellscript","json","xml","graphql"]},{id:"imba",scopeName:"source.imba",path:"imba.tmLanguage.json",displayName:"Imba",samplePath:"imba.sample"},{id:"ini",scopeName:"source.ini",path:"ini.tmLanguage.json",displayName:"INI",samplePath:"ini.sample",aliases:["properties"]},{id:"java",scopeName:"source.java",path:"java.tmLanguage.json",displayName:"Java",samplePath:"java.sample"},{id:"javascript",scopeName:"source.js",path:"javascript.tmLanguage.json",displayName:"JavaScript",samplePath:"javascript.sample",aliases:["js"]},{id:"jinja-html",scopeName:"text.html.jinja",path:"jinja-html.tmLanguage.json",displayName:"Jinja",samplePath:"jinja-html.sample",embeddedLangs:["html"]},{id:"jison",scopeName:"source.jison",path:"jison.tmLanguage.json",displayName:"Jison",samplePath:"jison.sample",embeddedLangs:["javascript"]},{id:"json",scopeName:"source.json",path:"json.tmLanguage.json",displayName:"JSON",samplePath:"json.sample"},{id:"json5",scopeName:"source.json5",path:"json5.tmLanguage.json",displayName:"JSON5",samplePath:"json5.sample"},{id:"jsonc",scopeName:"source.json.comments",path:"jsonc.tmLanguage.json",displayName:"JSON with Comments",samplePath:"jsonc.sample"},{id:"jsonl",scopeName:"source.json.lines",path:"jsonl.tmLanguage.json",displayName:"JSON Lines",samplePath:"jsonl.sample"},{id:"jsonnet",scopeName:"source.jsonnet",path:"jsonnet.tmLanguage.json",displayName:"Jsonnet",samplePath:"jsonnet.sample"},{id:"jssm",scopeName:"source.jssm",path:"jssm.tmLanguage.json",displayName:"JSSM",samplePath:"jssm.sample",aliases:["fsl"]},{id:"jsx",scopeName:"source.js.jsx",path:"jsx.tmLanguage.json",displayName:"JSX",samplePath:"jsx.sample"},{id:"julia",scopeName:"source.julia",path:"julia.tmLanguage.json",displayName:"Julia",samplePath:"julia.sample",embeddedLangs:["cpp","python","javascript","r","sql"]},{id:"kotlin",scopeName:"source.kotlin",path:"kotlin.tmLanguage.json",displayName:"Kotlin",samplePath:"kotlin.sample",aliases:["kt","kts"]},{id:"kusto",scopeName:"source.kusto",path:"kusto.tmLanguage.json",displayName:"Kusto",samplePath:"kusto.sample",aliases:["kql"]},{id:"latex",scopeName:"text.tex.latex",path:"latex.tmLanguage.json",displayName:"LaTeX",samplePath:"latex.sample",embeddedLangs:["tex","css","haskell","html","xml","java","lua","julia","ruby","javascript","typescript","python","yaml","rust","scala","gnuplot"]},{id:"less",scopeName:"source.css.less",path:"less.tmLanguage.json",displayName:"Less",samplePath:"less.sample"},{id:"liquid",scopeName:"text.html.liquid",path:"liquid.tmLanguage.json",displayName:"Liquid",samplePath:"liquid.sample",embeddedLangs:["html","css","json","javascript"]},{id:"lisp",scopeName:"source.lisp",path:"lisp.tmLanguage.json",displayName:"Lisp",samplePath:"lisp.sample"},{id:"logo",scopeName:"source.logo",path:"logo.tmLanguage.json",displayName:"Logo",samplePath:"logo.sample"},{id:"lua",scopeName:"source.lua",path:"lua.tmLanguage.json",displayName:"Lua",samplePath:"lua.sample",embeddedLangs:["c"]},{id:"make",scopeName:"source.makefile",path:"make.tmLanguage.json",displayName:"Makefile",samplePath:"make.sample",aliases:["makefile"]},{id:"markdown",scopeName:"text.html.markdown",path:"markdown.tmLanguage.json",displayName:"Markdown",samplePath:"markdown.sample",aliases:["md"],embeddedLangs:["css","html","ini","java","lua","make","perl","r","ruby","php","sql","vb","xml","xsl","yaml","bat","clojure","coffee","c","cpp","diff","docker","git-commit","git-rebase","go","groovy","pug","javascript","json","jsonc","less","objective-c","swift","scss","raku","powershell","python","julia","rust","scala","shellscript","typescript","tsx","csharp","fsharp","dart","handlebars","erlang","elixir","latex","bibtex"]},{id:"marko",scopeName:"text.marko",path:"marko.tmLanguage.json",displayName:"Marko",samplePath:"marko.sample",embeddedLangs:["css","less","scss","javascript"]},{id:"matlab",scopeName:"source.matlab",path:"matlab.tmLanguage.json",displayName:"MATLAB",samplePath:"matlab.sample"},{id:"mdc",scopeName:"text.markdown.mdc",path:"mdc.tmLanguage.json",displayName:"mdc",samplePath:"mdc.sample",embeddedLangs:["markdown","yaml"]},{id:"mdx",scopeName:"source.mdx",path:"mdx.tmLanguage.json",displayName:"MDX",samplePath:"mdx.sample",embeddedLangs:["tsx","toml","yaml","c","clojure","coffee","cpp","csharp","css","diff","docker","elixir","elm","erlang","go","graphql","haskell","html","ini","java","javascript","json","julia","kotlin","less","lua","make","markdown","objective-c","perl","python","r","ruby","rust","scala","scss","shellscript","shellsession","sql","xml","swift","typescript"]},{id:"mermaid",scopeName:"source.mermaid",path:"mermaid.tmLanguage.json",displayName:"Mermaid",samplePath:"mermaid.sample"},{id:"mojo",scopeName:"source.mojo",path:"mojo.tmLanguage.json",displayName:"MagicPython",samplePath:"mojo.sample"},{id:"narrat",scopeName:"source.narrat",path:"narrat.tmLanguage.json",displayName:"Narrat Language",samplePath:"narrat.sample",aliases:["nar"]},{id:"nextflow",scopeName:"source.nextflow",path:"nextflow.tmLanguage.json",displayName:"Nextflow",samplePath:"nextflow.sample",aliases:["nf"]},{id:"nginx",scopeName:"source.nginx",path:"nginx.tmLanguage.json",displayName:"Nginx",samplePath:"nginx.sample",embeddedLangs:["lua"]},{id:"nim",scopeName:"source.nim",path:"nim.tmLanguage.json",displayName:"Nim",samplePath:"nim.sample",embeddedLangs:["c","html","xml","javascript","css","glsl","markdown"]},{id:"nix",scopeName:"source.nix",path:"nix.tmLanguage.json",displayName:"Nix",samplePath:"nix.sample"},{id:"nushell",scopeName:"source.nushell",path:"nushell.tmLanguage.json",displayName:"nushell",samplePath:"nushell.sample",aliases:["nu"]},{id:"objective-c",scopeName:"source.objc",path:"objective-c.tmLanguage.json",displayName:"Objective-C",samplePath:"objective-c.sample",aliases:["objc"]},{id:"objective-cpp",scopeName:"source.objcpp",path:"objective-cpp.tmLanguage.json",displayName:"Objective-C++",samplePath:"objective-cpp.sample"},{id:"ocaml",scopeName:"source.ocaml",path:"ocaml.tmLanguage.json",displayName:"OCaml",samplePath:"ocaml.sample"},{id:"pascal",scopeName:"source.pascal",path:"pascal.tmLanguage.json",displayName:"Pascal",samplePath:"pascal.sample"},{id:"perl",scopeName:"source.perl",path:"perl.tmLanguage.json",displayName:"Perl",samplePath:"perl.sample",embeddedLangs:["html","xml","css","javascript","sql"]},{id:"php",scopeName:"source.php",path:"php.tmLanguage.json",displayName:"PHP",samplePath:"php.sample",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"plsql",scopeName:"source.plsql.oracle",path:"plsql.tmLanguage.json",displayName:"PL/SQL",samplePath:"plsql.sample"},{id:"postcss",scopeName:"source.css.postcss",path:"postcss.tmLanguage.json",displayName:"PostCSS",samplePath:"postcss.sample"},{id:"powerquery",scopeName:"source.powerquery",path:"powerquery.tmLanguage.json",displayName:"PowerQuery",samplePath:"powerquery.sample"},{id:"powershell",scopeName:"source.powershell",path:"powershell.tmLanguage.json",displayName:"PowerShell",samplePath:"powershell.sample",aliases:["ps","ps1"]},{id:"prisma",scopeName:"source.prisma",path:"prisma.tmLanguage.json",displayName:"Prisma",samplePath:"prisma.sample"},{id:"prolog",scopeName:"source.prolog",path:"prolog.tmLanguage.json",displayName:"Prolog",samplePath:"prolog.sample"},{id:"proto",scopeName:"source.proto",path:"proto.tmLanguage.json",displayName:"Protocol Buffer 3",samplePath:"proto.sample"},{id:"pug",scopeName:"text.pug",path:"pug.tmLanguage.json",displayName:"Pug",samplePath:"pug.sample",aliases:["jade"],embeddedLangs:["javascript","css","sass","scss","stylus","coffee","html"]},{id:"puppet",scopeName:"source.puppet",path:"puppet.tmLanguage.json",displayName:"Puppet",samplePath:"puppet.sample"},{id:"purescript",scopeName:"source.purescript",path:"purescript.tmLanguage.json",displayName:"PureScript",samplePath:"purescript.sample"},{id:"python",scopeName:"source.python",path:"python.tmLanguage.json",displayName:"Python",samplePath:"python.sample",aliases:["py"]},{id:"r",scopeName:"source.r",path:"r.tmLanguage.json",displayName:"R",samplePath:"r.sample"},{id:"raku",scopeName:"source.perl.6",path:"raku.tmLanguage.json",displayName:"Raku",samplePath:"raku.sample",aliases:["perl6"]},{id:"razor",scopeName:"text.aspnetcorerazor",path:"razor.tmLanguage.json",displayName:"ASP.NET Razor",samplePath:"razor.sample",embeddedLangs:["html","csharp"]},{id:"reg",scopeName:"source.reg",path:"reg.tmLanguage.json",displayName:"Windows Registry Script",samplePath:"reg.sample"},{id:"rel",scopeName:"source.rel",path:"rel.tmLanguage.json",displayName:"Rel",samplePath:"rel.sample"},{id:"riscv",scopeName:"source.riscv",path:"riscv.tmLanguage.json",displayName:"RISC-V",samplePath:"riscv.sample"},{id:"rst",scopeName:"source.rst",path:"rst.tmLanguage.json",displayName:"reStructuredText",samplePath:"rst.sample",embeddedLangs:["cpp","python","javascript","shellscript","yaml","cmake","ruby"]},{id:"ruby",scopeName:"source.ruby",path:"ruby.tmLanguage.json",displayName:"Ruby",samplePath:"ruby.sample",aliases:["rb"],embeddedLangs:["html","xml","sql","css","c","javascript","shellscript","lua"]},{id:"rust",scopeName:"source.rust",path:"rust.tmLanguage.json",displayName:"Rust",samplePath:"rust.sample",aliases:["rs"]},{id:"sas",scopeName:"source.sas",path:"sas.tmLanguage.json",displayName:"SAS",samplePath:"sas.sample",embeddedLangs:["sql"]},{id:"sass",scopeName:"source.sass",path:"sass.tmLanguage.json",displayName:"Sass",samplePath:"sass.sample"},{id:"scala",scopeName:"source.scala",path:"scala.tmLanguage.json",displayName:"Scala",samplePath:"scala.sample"},{id:"scheme",scopeName:"source.scheme",path:"scheme.tmLanguage.json",displayName:"Scheme",samplePath:"scheme.sample"},{id:"scss",scopeName:"source.css.scss",path:"scss.tmLanguage.json",displayName:"SCSS",samplePath:"scss.sample",embeddedLangs:["css"]},{id:"shaderlab",scopeName:"source.shaderlab",path:"shaderlab.tmLanguage.json",displayName:"ShaderLab",samplePath:"shaderlab.sample",aliases:["shader"],embeddedLangs:["hlsl"]},{id:"shellscript",scopeName:"source.shell",path:"shellscript.tmLanguage.json",displayName:"Shell",samplePath:"shellscript.sample",aliases:["bash","sh","shell","zsh"]},{id:"shellsession",scopeName:"text.shell-session",path:"shellsession.tmLanguage.json",displayName:"Shell Session",samplePath:"shellsession.sample",aliases:["console"],embeddedLangs:["shellscript"]},{id:"smalltalk",scopeName:"source.smalltalk",path:"smalltalk.tmLanguage.json",displayName:"Smalltalk",samplePath:"smalltalk.sample"},{id:"solidity",scopeName:"source.solidity",path:"solidity.tmLanguage.json",displayName:"Solidity",samplePath:"solidity.sample"},{id:"sparql",scopeName:"source.sparql",path:"sparql.tmLanguage.json",displayName:"SPARQL",samplePath:"sparql.sample",embeddedLangs:["turtle"]},{id:"splunk",scopeName:"source.splunk_search",path:"splunk.tmLanguage.json",displayName:"Splunk Query Language",samplePath:"splunk.sample",aliases:["spl"]},{id:"sql",scopeName:"source.sql",path:"sql.tmLanguage.json",displayName:"SQL",samplePath:"sql.sample"},{id:"ssh-config",scopeName:"source.ssh-config",path:"ssh-config.tmLanguage.json",displayName:"SSH Config",samplePath:"ssh-config.sample"},{id:"stata",scopeName:"source.stata",path:"stata.tmLanguage.json",displayName:"Stata",samplePath:"stata.sample",embeddedLangs:["sql"]},{id:"stylus",scopeName:"source.stylus",path:"stylus.tmLanguage.json",displayName:"Stylus",samplePath:"stylus.sample",aliases:["styl"]},{id:"svelte",scopeName:"source.svelte",path:"svelte.tmLanguage.json",displayName:"Svelte",samplePath:"svelte.sample",embeddedLangs:["javascript","typescript","coffee","stylus","sass","css","scss","less","postcss","pug","markdown"]},{id:"swift",scopeName:"source.swift",path:"swift.tmLanguage.json",displayName:"Swift",samplePath:"swift.sample"},{id:"system-verilog",scopeName:"source.systemverilog",path:"system-verilog.tmLanguage.json",displayName:"SystemVerilog",samplePath:"system-verilog.sample"},{id:"tasl",scopeName:"source.tasl",path:"tasl.tmLanguage.json",displayName:"Tasl",samplePath:"tasl.sample"},{id:"tcl",scopeName:"source.tcl",path:"tcl.tmLanguage.json",displayName:"Tcl",samplePath:"tcl.sample"},{id:"tex",scopeName:"text.tex",path:"tex.tmLanguage.json",displayName:"TeX",samplePath:"tex.sample",embeddedLangs:["r"]},{id:"toml",scopeName:"source.toml",path:"toml.tmLanguage.json",displayName:"TOML",samplePath:"toml.sample"},{id:"tsx",scopeName:"source.tsx",path:"tsx.tmLanguage.json",displayName:"TSX",samplePath:"tsx.sample"},{id:"turtle",scopeName:"source.turtle",path:"turtle.tmLanguage.json",displayName:"Turtle",samplePath:"turtle.sample"},{id:"twig",scopeName:"text.html.twig",path:"twig.tmLanguage.json",displayName:"Twig",samplePath:"twig.sample",embeddedLangs:["css","javascript","scss","php","python","ruby"]},{id:"typescript",scopeName:"source.ts",path:"typescript.tmLanguage.json",displayName:"TypeScript",samplePath:"typescript.sample",aliases:["ts"]},{id:"v",scopeName:"source.v",path:"v.tmLanguage.json",displayName:"V",samplePath:"v.sample"},{id:"vb",scopeName:"source.asp.vb.net",path:"vb.tmLanguage.json",displayName:"Visual Basic",samplePath:"vb.sample",aliases:["cmd"]},{id:"verilog",scopeName:"source.verilog",path:"verilog.tmLanguage.json",displayName:"Verilog",samplePath:"verilog.sample"},{id:"vhdl",scopeName:"source.vhdl",path:"vhdl.tmLanguage.json",displayName:"VHDL",samplePath:"vhdl.sample"},{id:"viml",scopeName:"source.viml",path:"viml.tmLanguage.json",displayName:"Vim Script",samplePath:"viml.sample",aliases:["vim","vimscript"]},{id:"vue-html",scopeName:"text.html.vue-html",path:"vue-html.tmLanguage.json",displayName:"Vue HTML",samplePath:"vue-html.sample",embeddedLangs:["vue","javascript"]},{id:"vue",scopeName:"source.vue",path:"vue.tmLanguage.json",displayName:"Vue",samplePath:"vue.sample",embeddedLangs:["html","markdown","pug","stylus","sass","css","scss","less","javascript","typescript","jsx","tsx","json","jsonc","json5","yaml","toml","graphql"]},{id:"vyper",scopeName:"source.vyper",path:"vyper.tmLanguage.json",displayName:"Vyper",samplePath:"vyper.sample",aliases:["vy"]},{id:"wasm",scopeName:"source.wat",path:"wasm.tmLanguage.json",displayName:"WebAssembly",samplePath:"wasm.sample"},{id:"wenyan",scopeName:"source.wenyan",path:"wenyan.tmLanguage.json",displayName:"Wenyan",samplePath:"wenyan.sample",aliases:["文言"]},{id:"wgsl",scopeName:"source.wgsl",path:"wgsl.tmLanguage.json",displayName:"WGSL",samplePath:"wgsl.sample"},{id:"wolfram",scopeName:"source.wolfram",path:"wolfram.tmLanguage.json",displayName:"Wolfram",samplePath:"wolfram.sample",aliases:["wl"]},{id:"xml",scopeName:"text.xml",path:"xml.tmLanguage.json",displayName:"XML",samplePath:"xml.sample",embeddedLangs:["java"]},{id:"xsl",scopeName:"text.xml.xsl",path:"xsl.tmLanguage.json",displayName:"XSL",samplePath:"xsl.sample",embeddedLangs:["xml"]},{id:"yaml",scopeName:"source.yaml",path:"yaml.tmLanguage.json",displayName:"YAML",samplePath:"yaml.sample",aliases:["yml"]},{id:"zenscript",scopeName:"source.zenscript",path:"zenscript.tmLanguage.json",displayName:"ZenScript",samplePath:"zenscript.sample"},{id:"zig",scopeName:"source.zig",path:"zig.tmLanguage.json",displayName:"zig",samplePath:"zig.sample"}];var he=(e=>(e[e.NotSet=-1]="NotSet",e[e.None=0]="None",e[e.Italic=1]="Italic",e[e.Bold=2]="Bold",e[e.Underline=4]="Underline",e))(he||{});class Z{static toBinaryStr(p){let k=p.toString(2);for(;k.length<32;)k="0"+k;return k}static printMetadata(p){let k=Z.getLanguageId(p),a=Z.getTokenType(p),j=Z.getFontStyle(p),x=Z.getForeground(p),s=Z.getBackground(p);console.log({languageId:k,tokenType:a,fontStyle:j,foreground:x,background:s})}static getLanguageId(p){return(p&255)>>>0}static getTokenType(p){return(p&768)>>>8}static getFontStyle(p){return(p&14336)>>>11}static getForeground(p){return(p&8372224)>>>15}static getBackground(p){return(p&4286578688)>>>24}static containsBalancedBrackets(p){return(p&1024)!==0}static set(p,k,a,j,x,s){let v=Z.getLanguageId(p),_=Z.getTokenType(p),r=Z.getFontStyle(p),S=Z.getForeground(p),L=Z.getBackground(p),g=Z.containsBalancedBrackets(p)?1:0;return k!==0&&(v=k),a!==0&&(_=a===8?0:a),j!==-1&&(r=j),x!==0&&(S=x),s!==0&&(L=s),(v<<0|_<<8|r<<11|g<<10|S<<15|L<<24)>>>0}}function en(e){return e.endsWith("/")||e.endsWith("\\")?e.slice(0,-1):e}function tn(e){return e.startsWith("./")?e.slice(2):e}function Xe(e){const p=e.split(/[\/\\]/g);return p.slice(0,p.length-1)}function Ye(...e){return e.map(en).map(tn).join("/")}function nn(e,p){const k=new Map;for(const a of e){const j=p(a);k.has(j)?k.get(j).push(a):k.set(j,[a])}return k}function sn(e,p=!1){const k=e.length;let a=0,j="",x=0,s=16,v=0,_=0,r=0,S=0,L=0;function g(l,f){let m=0,u=0;for(;m<l;){let t=e.charCodeAt(a);if(t>=48&&t<=57)u=u*16+t-48;else if(t>=65&&t<=70)u=u*16+t-65+10;else if(t>=97&&t<=102)u=u*16+t-97+10;else break;a++,m++}return m<l&&(u=-1),u}function w(l){a=l,j="",x=0,s=16,L=0}function A(){let l=a;if(e.charCodeAt(a)===48)a++;else for(a++;a<e.length&&_e(e.charCodeAt(a));)a++;if(a<e.length&&e.charCodeAt(a)===46)if(a++,a<e.length&&_e(e.charCodeAt(a)))for(a++;a<e.length&&_e(e.charCodeAt(a));)a++;else return L=3,e.substring(l,a);let f=a;if(a<e.length&&(e.charCodeAt(a)===69||e.charCodeAt(a)===101))if(a++,(a<e.length&&e.charCodeAt(a)===43||e.charCodeAt(a)===45)&&a++,a<e.length&&_e(e.charCodeAt(a))){for(a++;a<e.length&&_e(e.charCodeAt(a));)a++;f=a}else L=3;return e.substring(l,f)}function d(){let l="",f=a;for(;;){if(a>=k){l+=e.substring(f,a),L=2;break}const m=e.charCodeAt(a);if(m===34){l+=e.substring(f,a),a++;break}if(m===92){if(l+=e.substring(f,a),a++,a>=k){L=2;break}switch(e.charCodeAt(a++)){case 34:l+='"';break;case 92:l+="\\";break;case 47:l+="/";break;case 98:l+="\b";break;case 102:l+="\f";break;case 110:l+=`
`;break;case 114:l+="\r";break;case 116:l+="	";break;case 117:const t=g(4);t>=0?l+=String.fromCharCode(t):L=4;break;default:L=5}f=a;continue}if(m>=0&&m<=31)if(ye(m)){l+=e.substring(f,a),L=2;break}else L=6;a++}return l}function P(){if(j="",L=0,x=a,_=v,S=r,a>=k)return x=k,s=17;let l=e.charCodeAt(a);if(xe(l)){do a++,j+=String.fromCharCode(l),l=e.charCodeAt(a);while(xe(l));return s=15}if(ye(l))return a++,j+=String.fromCharCode(l),l===13&&e.charCodeAt(a)===10&&(a++,j+=`
`),v++,r=a,s=14;switch(l){case 123:return a++,s=1;case 125:return a++,s=2;case 91:return a++,s=3;case 93:return a++,s=4;case 58:return a++,s=6;case 44:return a++,s=5;case 34:return a++,j=d(),s=10;case 47:const f=a-1;if(e.charCodeAt(a+1)===47){for(a+=2;a<k&&!ye(e.charCodeAt(a));)a++;return j=e.substring(f,a),s=12}if(e.charCodeAt(a+1)===42){a+=2;const m=k-1;let u=!1;for(;a<m;){const t=e.charCodeAt(a);if(t===42&&e.charCodeAt(a+1)===47){a+=2,u=!0;break}a++,ye(t)&&(t===13&&e.charCodeAt(a)===10&&a++,v++,r=a)}return u||(a++,L=1),j=e.substring(f,a),s=13}return j+=String.fromCharCode(l),a++,s=16;case 45:if(j+=String.fromCharCode(l),a++,a===k||!_e(e.charCodeAt(a)))return s=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return j+=A(),s=11;default:for(;a<k&&y(l);)a++,l=e.charCodeAt(a);if(x!==a){switch(j=e.substring(x,a),j){case"true":return s=8;case"false":return s=9;case"null":return s=7}return s=16}return j+=String.fromCharCode(l),a++,s=16}}function y(l){if(xe(l)||ye(l))return!1;switch(l){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function N(){let l;do l=P();while(l>=12&&l<=15);return l}return{setPosition:w,getPosition:()=>a,scan:p?N:P,getToken:()=>s,getTokenValue:()=>j,getTokenOffset:()=>x,getTokenLength:()=>a-x,getTokenStartLine:()=>_,getTokenStartCharacter:()=>x-S,getTokenError:()=>L}}function xe(e){return e===32||e===9}function ye(e){return e===10||e===13}function _e(e){return e>=48&&e<=57}var Be;(function(e){e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.space=32]="space",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.asterisk=42]="asterisk",e[e.backslash=92]="backslash",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.plus=43]="plus",e[e.slash=47]="slash",e[e.formFeed=12]="formFeed",e[e.tab=9]="tab"})(Be||(Be={}));var Ne;(function(e){e.DEFAULT={allowTrailingComma:!1}})(Ne||(Ne={}));function an(e,p=[],k=Ne.DEFAULT){let a=null,j=[];const x=[];function s(_){Array.isArray(j)?j.push(_):a!==null&&(j[a]=_)}return rn(e,{onObjectBegin:()=>{const _={};s(_),x.push(j),j=_,a=null},onObjectProperty:_=>{a=_},onObjectEnd:()=>{j=x.pop()},onArrayBegin:()=>{const _=[];s(_),x.push(j),j=_,a=null},onArrayEnd:()=>{j=x.pop()},onLiteralValue:s,onError:(_,r,S)=>{p.push({error:_,offset:r,length:S})}},k),j[0]}function rn(e,p,k=Ne.DEFAULT){const a=sn(e,!1),j=[];function x(h){return h?()=>h(a.getTokenOffset(),a.getTokenLength(),a.getTokenStartLine(),a.getTokenStartCharacter()):()=>!0}function s(h){return h?()=>h(a.getTokenOffset(),a.getTokenLength(),a.getTokenStartLine(),a.getTokenStartCharacter(),()=>j.slice()):()=>!0}function v(h){return h?b=>h(b,a.getTokenOffset(),a.getTokenLength(),a.getTokenStartLine(),a.getTokenStartCharacter()):()=>!0}function _(h){return h?b=>h(b,a.getTokenOffset(),a.getTokenLength(),a.getTokenStartLine(),a.getTokenStartCharacter(),()=>j.slice()):()=>!0}const r=s(p.onObjectBegin),S=_(p.onObjectProperty),L=x(p.onObjectEnd),g=s(p.onArrayBegin),w=x(p.onArrayEnd),A=_(p.onLiteralValue),d=v(p.onSeparator),P=x(p.onComment),y=v(p.onError),N=k&&k.disallowComments,l=k&&k.allowTrailingComma;function f(){for(;;){const h=a.scan();switch(a.getTokenError()){case 4:m(14);break;case 5:m(15);break;case 3:m(13);break;case 1:N||m(11);break;case 2:m(12);break;case 6:m(16);break}switch(h){case 12:case 13:N?m(10):P();break;case 16:m(1);break;case 15:case 14:break;default:return h}}}function m(h,b=[],T=[]){if(y(h),b.length+T.length>0){let I=a.getToken();for(;I!==17;){if(b.indexOf(I)!==-1){f();break}else if(T.indexOf(I)!==-1)break;I=f()}}}function u(h){const b=a.getTokenValue();return h?A(b):(S(b),j.push(b)),f(),!0}function t(){switch(a.getToken()){case 11:const h=a.getTokenValue();let b=Number(h);isNaN(b)&&(m(2),b=0),A(b);break;case 7:A(null);break;case 8:A(!0);break;case 9:A(!1);break;default:return!1}return f(),!0}function i(){return a.getToken()!==10?(m(3,[],[2,5]),!1):(u(!1),a.getToken()===6?(d(":"),f(),o()||m(4,[],[2,5])):m(5,[],[2,5]),j.pop(),!0)}function c(){r(),f();let h=!1;for(;a.getToken()!==2&&a.getToken()!==17;){if(a.getToken()===5){if(h||m(4,[],[]),d(","),f(),a.getToken()===2&&l)break}else h&&m(6,[],[]);i()||m(4,[],[2,5]),h=!0}return L(),a.getToken()!==2?m(7,[2],[]):f(),!0}function n(){g(),f();let h=!0,b=!1;for(;a.getToken()!==4&&a.getToken()!==17;){if(a.getToken()===5){if(b||m(4,[],[]),d(","),f(),a.getToken()===4&&l)break}else b&&m(6,[],[]);h?(j.push(0),h=!1):j[j.length-1]++,o()||m(4,[],[4,5]),b=!0}return w(),h||j.pop(),a.getToken()!==4?m(8,[4],[]):f(),!0}function o(){switch(a.getToken()){case 3:return n();case 1:return c();case 10:return u(!0);default:return t()}}return f(),a.getToken()===17?k.allowEmptyContent?!0:(m(4,[],[]),!1):o()?(a.getToken()!==17&&m(9,[],[]),!0):(m(4,[],[]),!1)}var Ge;(function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",e[e.InvalidCharacter=6]="InvalidCharacter"})(Ge||(Ge={}));var De;(function(e){e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.Unknown=16]="Unknown",e[e.EOF=17]="EOF"})(De||(De={}));const on=an;var $e;(function(e){e[e.InvalidSymbol=1]="InvalidSymbol",e[e.InvalidNumberFormat=2]="InvalidNumberFormat",e[e.PropertyNameExpected=3]="PropertyNameExpected",e[e.ValueExpected=4]="ValueExpected",e[e.ColonExpected=5]="ColonExpected",e[e.CommaExpected=6]="CommaExpected",e[e.CloseBraceExpected=7]="CloseBraceExpected",e[e.CloseBracketExpected=8]="CloseBracketExpected",e[e.EndOfFileExpected=9]="EndOfFileExpected",e[e.InvalidCommentToken=10]="InvalidCommentToken",e[e.UnexpectedEndOfComment=11]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=12]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=13]="UnexpectedEndOfNumber",e[e.InvalidUnicode=14]="InvalidUnicode",e[e.InvalidEscapeCharacter=15]="InvalidEscapeCharacter",e[e.InvalidCharacter=16]="InvalidCharacter"})($e||($e={}));const ln=typeof self<"u"&&typeof self.WorkerGlobalScope<"u",cn="process"in globalThis&&typeof process<"u"&&typeof process.release<"u"&&process.release.name==="node",un="process"in globalThis&&typeof process<"u"&&typeof process.release<"u"&&process.release.name==="bun",Te=ln||!cn&&!un;let pn="";const hn="dist/";let Pe=null;async function mn(e){if(!Pe){let p;if(Te)p=ke.loadWASM({data:await fetch(Ke(Ye(...Xe(e),"onig.wasm")))});else{const a=require("path").join(require.resolve("vscode-oniguruma"),"../onig.wasm"),x=require("fs").readFileSync(a).buffer;p=ke.loadWASM(x)}Pe=p.then(()=>({createOnigScanner(k){return ke.createOnigScanner(k)},createOnigString(k){return ke.createOnigString(k)}}))}return Pe}function Ke(e){if(Te)return`${pn}${e}`;{const p=require("path");return p.isAbsolute(e)?e:p.resolve(__dirname,"..",e)}}async function dn(e){const p=Ke(e);return Te?await fetch(p).then(k=>k.text()):await require("fs").promises.readFile(p,"utf-8")}async function Ze(e){const p=[],k=await dn(e);let a;try{a=JSON.parse(k)}catch{if(a=on(k,p,{allowTrailingComma:!0}),p.length)throw p[0]}return a}async function et(e){let p=await Ze(e);const k=tt(p);if(k.include){const a=await et(Ye(...Xe(e),k.include));a.settings&&(k.settings=a.settings.concat(k.settings)),a.bg&&!k.bg&&(k.bg=a.bg),a.colors&&(k.colors={...a.colors,...k.colors}),delete k.include}return k}async function gn(e){return await Ze(e)}function fn(e){e.settings||(e.settings=[]),!(e.settings[0]&&e.settings[0].settings&&!e.settings[0].scope)&&e.settings.unshift({settings:{foreground:e.fg,background:e.bg}})}function tt(e){const p=e.type||"dark",k={name:e.name,type:p,...e,..._n(e)};return e.include&&(k.include=e.include),e.tokenColors&&(k.settings=e.tokenColors,delete k.tokenColors),fn(k),k}const Ce={light:"#333333",dark:"#bbbbbb"},Fe={light:"#fffffe",dark:"#1e1e1e"};function _n(e){var x,s,v,_;let p,k,a=e.settings?e.settings:e.tokenColors;const j=a?a.find(r=>!r.name&&!r.scope):void 0;return(x=j==null?void 0:j.settings)!=null&&x.foreground&&(p=j.settings.foreground),(s=j==null?void 0:j.settings)!=null&&s.background&&(k=j.settings.background),!p&&((v=e==null?void 0:e.colors)!=null&&v["editor.foreground"])&&(p=e.colors["editor.foreground"]),!k&&((_=e==null?void 0:e.colors)!=null&&_["editor.background"])&&(k=e.colors["editor.background"]),p||(p=e.type==="light"?Ce.light:Ce.dark),k||(k=e.type==="light"?Fe.light:Fe.dark),{fg:p,bg:k}}class bn{constructor(p,k){this.languagesPath="languages/",this.languageMap={},this.scopeToLangMap={},this._onigLibPromise=p,this._onigLibName=k}get onigLib(){return this._onigLibPromise}getOnigLibName(){return this._onigLibName}getLangRegistration(p){return this.languageMap[p]}async loadGrammar(p){const k=this.scopeToLangMap[p];if(!k)return null;if(k.grammar)return k.grammar;const a=await gn(ve.includes(k)?`${this.languagesPath}${k.path}`:k.path);return k.grammar=a,a}addLanguage(p){this.languageMap[p.id]=p,p.aliases&&p.aliases.forEach(k=>{this.languageMap[k]=p}),this.scopeToLangMap[p.scopeName]=p}}function yn(e,p,k,a,j){let x=k.split(/\r\n|\r|\n/),s=Je.INITIAL,v=[],_=[];for(let r=0,S=x.length;r<S;r++){let L=x[r];if(L===""){v=[],_.push([]);continue}let g,w,A;j.includeExplanation&&(g=a.tokenizeLine(L,s),w=g.tokens,A=0);let d=a.tokenizeLine2(L,s),P=d.tokens.length/2;for(let y=0;y<P;y++){let N=d.tokens[2*y],l=y+1<P?d.tokens[2*y+2]:L.length;if(N===l)continue;let f=d.tokens[2*y+1],m=Z.getForeground(f),u=p[m],t=Z.getFontStyle(f),i=[];if(j.includeExplanation){let c=0;for(;N+c<l;){let n=w[A],o=L.substring(n.startIndex,n.endIndex);c+=o.length,i.push({content:o,scopes:kn(e,n.scopes)}),A++}}v.push({content:L.substring(N,l),color:u,fontStyle:t,explanation:i})}_.push(v),v=[],s=d.ruleStack}return _}function kn(e,p){let k=[];for(let a=0,j=p.length;a<j;a++){let x=p.slice(0,a),s=p[a];k[a]={scopeName:s,themeMatches:vn(e,s,x)}}return k}function qe(e,p){let k=e+".";return e===p||p.substring(0,k.length)===k}function Nn(e,p,k,a){if(!qe(e,k))return!1;let j=p.length-1,x=a.length-1;for(;j>=0&&x>=0;)qe(p[j],a[x])&&j--,x--;return j===-1}function vn(e,p,k){let a=[],j=0;for(let x=0,s=e.settings.length;x<s;x++){let v=e.settings[x],_;if(typeof v.scope=="string")_=v.scope.split(/,/).map(r=>r.trim());else if(Array.isArray(v.scope))_=v.scope;else continue;for(let r=0,S=_.length;r<S;r++){let g=_[r].split(/ /),w=g[g.length-1],A=g.slice(0,g.length-1);Nn(w,A,p,k)&&(a[j++]=v,r=S)}}return a}var ue=["black","red","green","yellow","blue","magenta","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightMagenta","brightCyan","brightWhite"],je={1:"bold",2:"dim",3:"italic",4:"underline",7:"reverse",9:"strikethrough"};function wn(e,p){const k=e.indexOf("\x1B",p);if(k!==-1&&e[k+1]==="["){const a=e.indexOf("m",k);return{sequence:e.substring(k+2,a).split(";"),startPosition:k,position:a+1}}return{position:e.length}}function Ue(e){const p=e.shift();if(p==="2"){const k=e.splice(0,3).map(a=>Number.parseInt(a));return k.length!==3||k.some(a=>Number.isNaN(a))?void 0:{type:"rgb",rgb:k}}else if(p==="5"){const k=e.shift();if(k)return{type:"table",index:Number(k)}}}function Ln(e){const p=[];for(;e.length>0;){const k=e.shift();if(!k)continue;const a=Number.parseInt(k);if(!Number.isNaN(a))if(a===0)p.push({type:"resetAll"});else if(a<=9)je[a]&&p.push({type:"setDecoration",value:je[a]});else if(a<=29){const j=je[a-20];j&&p.push({type:"resetDecoration",value:j})}else if(a<=37)p.push({type:"setForegroundColor",value:{type:"named",name:ue[a-30]}});else if(a===38){const j=Ue(e);j&&p.push({type:"setForegroundColor",value:j})}else if(a===39)p.push({type:"resetForegroundColor"});else if(a<=47)p.push({type:"setBackgroundColor",value:{type:"named",name:ue[a-40]}});else if(a===48){const j=Ue(e);j&&p.push({type:"setBackgroundColor",value:j})}else a===49?p.push({type:"resetBackgroundColor"}):a>=90&&a<=97?p.push({type:"setForegroundColor",value:{type:"named",name:ue[a-90+8]}}):a>=100&&a<=107&&p.push({type:"setBackgroundColor",value:{type:"named",name:ue[a-100+8]}})}return p}function Sn(){let e=null,p=null,k=new Set;return{parse(a){const j=[];let x=0;do{const s=wn(a,x),v=s.sequence?a.substring(x,s.startPosition):a.substring(x);if(v.length>0&&j.push({value:v,foreground:e,background:p,decorations:new Set(k)}),s.sequence){const _=Ln(s.sequence);for(const r of _)r.type==="resetAll"?(e=null,p=null,k.clear()):r.type==="resetForegroundColor"?e=null:r.type==="resetBackgroundColor"?p=null:r.type==="resetDecoration"&&k.delete(r.value);for(const r of _)r.type==="setForegroundColor"?e=r.value:r.type==="setBackgroundColor"?p=r.value:r.type==="setDecoration"&&k.add(r.value)}x=s.position}while(x<a.length);return j}}}var xn={black:"#000000",red:"#bb0000",green:"#00bb00",yellow:"#bbbb00",blue:"#0000bb",magenta:"#ff00ff",cyan:"#00bbbb",white:"#eeeeee",brightBlack:"#555555",brightRed:"#ff5555",brightGreen:"#00ff00",brightYellow:"#ffff55",brightBlue:"#5555ff",brightMagenta:"#ff55ff",brightCyan:"#55ffff",brightWhite:"#ffffff"};function Pn(e=xn){function p(v){return e[v]}function k(v){return`#${v.map(_=>Math.max(0,Math.min(_,255)).toString(16).padStart(2,"0")).join("")}`}let a;function j(){if(a)return a;a=[];for(let r=0;r<ue.length;r++)a.push(p(ue[r]));let v=[0,95,135,175,215,255];for(let r=0;r<6;r++)for(let S=0;S<6;S++)for(let L=0;L<6;L++)a.push(k([v[r],v[S],v[L]]));let _=8;for(let r=0;r<24;r++,_+=10)a.push(k([_,_,_]));return a}function x(v){return j()[v]}function s(v){switch(v.type){case"named":return p(v.name);case"rgb":return k(v.rgb);case"table":return x(v.index)}}return{value:s}}function jn(e,p){const k=p.split(/\r?\n/),a=Pn(Object.fromEntries(ue.map(x=>[x,e.colors[`terminal.ansi${x[0].toUpperCase()}${x.substring(1)}`]]))),j=Sn();return k.map(x=>j.parse(x).map(s=>{let v;s.decorations.has("reverse")?v=s.background?a.value(s.background):e.bg:v=s.foreground?a.value(s.foreground):e.fg,s.decorations.has("dim")&&(v=An(v));let _=he.None;return s.decorations.has("bold")&&(_|=he.Bold),s.decorations.has("italic")&&(_|=he.Italic),s.decorations.has("underline")&&(_|=he.Underline),{content:s.value,color:v,fontStyle:_}}))}function An(e){const p=e.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);if(p)if(p[3]){const a=Math.round(Number.parseInt(p[3],16)/2).toString(16).padStart(2,"0");return`#${p[1]}${p[2]}${a}`}else return p[2]?`#${p[1]}${p[2]}80`:`#${Array.from(p[1]).map(a=>`${a}${a}`).join("")}80`;const k=e.match(/var\((--shiki-color-ansi-[\w-]+)\)/);return k?`var(${k[1]}-dim)`:e}const Tn={pre({className:e,style:p,children:k}){return`<pre class="${e}" style="${p}" tabindex="0">${k}</pre>`},code({children:e}){return`<code>${e}</code>`},line({className:e,children:p}){return`<span class="${e}">${p}</span>`},token({style:e,children:p}){return`<span style="${e}">${p}</span>`}};function We(e,p={}){const k=p.bg||"#fff",a=nn(p.lineOptions??[],s=>s.line),j=p.elements||{};function x(s="",v={},_){const r=j[s]||Tn[s];return r?(_=_.filter(Boolean),r({...v,children:s==="code"?_.join(`
`):_.join("")})):""}return x("pre",{className:"shiki "+(p.themeName||""),style:`background-color: ${k}`},[p.langId?`<div class="language-id">${p.langId}</div>`:"",x("code",{},e.map((s,v)=>{const _=v+1,r=a.get(_)??[],S=En(r).join(" ");return x("line",{className:S,lines:e,line:s,index:v},s.map((L,g)=>{const w=[`color: ${L.color||p.fg}`];return L.fontStyle&he.Italic&&w.push("font-style: italic"),L.fontStyle&he.Bold&&w.push("font-weight: bold"),L.fontStyle&he.Underline&&w.push("text-decoration: underline"),x("token",{style:w.join("; "),tokens:s,token:L,index:g},[In(L.content)])}))}))])}const Rn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function In(e){return e.replace(/[&<>"']/g,p=>Rn[p])}function En(e){const p=new Set(["line"]);for(const k of e)for(const a of k.classes??[])p.add(a);return Array.from(p)}class On extends Je.Registry{constructor(p){super(p),this._resolver=p,this.themesPath="themes/",this._resolvedThemes={},this._resolvedGrammars={},this._langGraph=new Map,this._langMap=ve.reduce((k,a)=>(k[a.id]=a,k),{})}getTheme(p){return typeof p=="string"?this._resolvedThemes[p]:p}async loadTheme(p){return typeof p=="string"?(this._resolvedThemes[p]||(this._resolvedThemes[p]=await et(`${this.themesPath}${p}.json`)),this._resolvedThemes[p]):(p=tt(p),p.name&&(this._resolvedThemes[p.name]=p),p)}async loadThemes(p){return await Promise.all(p.map(k=>this.loadTheme(k)))}getLoadedThemes(){return Object.keys(this._resolvedThemes)}getGrammar(p){return this._resolvedGrammars[p]}async loadLanguage(p){var x;const a={embeddedLanguages:(x=p.embeddedLangs)==null?void 0:x.reduce(async(s,v,_)=>{if(!this.getLoadedLanguages().includes(v)&&this._resolver.getLangRegistration(v))return await this._resolver.loadGrammar(this._resolver.getLangRegistration(v).scopeName),s[this._resolver.getLangRegistration(v).scopeName]=_+2,s},{}),balancedBracketSelectors:p.balancedBracketSelectors||["*"],unbalancedBracketSelectors:p.unbalancedBracketSelectors||[]},j=await this.loadGrammarWithConfiguration(p.scopeName,1,a);this._resolvedGrammars[p.id]=j,p.aliases&&p.aliases.forEach(s=>{this._resolvedGrammars[s]=j})}async loadLanguages(p){for(const a of p)this.resolveEmbeddedLanguages(a);const k=Array.from(this._langGraph.values());for(const a of k)this._resolver.addLanguage(a);for(const a of k)await this.loadLanguage(a)}getLoadedLanguages(){return Object.keys(this._resolvedGrammars)}resolveEmbeddedLanguages(p){if(this._langGraph.has(p.id)||this._langGraph.set(p.id,p),p.embeddedLangs)for(const k of p.embeddedLangs)this._langGraph.set(k,this._langMap[k])}}function nt(e){return typeof e=="string"?ve.find(p=>{var k;return p.id===e||((k=p.aliases)==null?void 0:k.includes(e))}):e}function Mn(e){var j;let p=ve,k=e.themes||[],a=(j=e.paths)!=null&&j.wasm?e.paths.wasm.endsWith("/")?e.paths.wasm:e.paths.wasm+"/":hn;return e.langs&&(p=e.langs.map(nt)),e.theme&&k.unshift(e.theme),k.length||(k=["nord"]),{_languages:p,_themes:k,_wasmPath:a}}function Bn(){const e={"#000001":"var(--shiki-color-text)","#000002":"var(--shiki-color-background)","#000004":"var(--shiki-token-constant)","#000005":"var(--shiki-token-string)","#000006":"var(--shiki-token-comment)","#000007":"var(--shiki-token-keyword)","#000008":"var(--shiki-token-parameter)","#000009":"var(--shiki-token-function)","#000010":"var(--shiki-token-string-expression)","#000011":"var(--shiki-token-punctuation)","#000012":"var(--shiki-token-link)"};for(let p=0;p<ue.length;p++){const k=`#A${p.toString().padStart(5,"0")}`,a=ue[p].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();e[k]=`var(--shiki-color-ansi-${a})`}return e}async function Gn(e){var i,c;const{_languages:p,_themes:k,_wasmPath:a}=Mn(e),j=new bn(mn(a),"vscode-oniguruma"),x=new On(j);(i=e.paths)!=null&&i.themes&&(x.themesPath=e.paths.themes.endsWith("/")?e.paths.themes:e.paths.themes+"/"),(c=e.paths)!=null&&c.languages&&(j.languagesPath=e.paths.languages.endsWith("/")?e.paths.languages:e.paths.languages+"/");const v=(await x.loadThemes(k))[0];let _;await x.loadLanguages(p);let r=Bn();function S(n){r=n}function L(n,o){n.bg=r[n.bg]||n.bg,n.fg=r[n.fg]||n.fg,Object.entries(n.colors).forEach(([h,b])=>{n.colors[h]=r[b]||b}),o.forEach((h,b)=>{o[b]=r[h]||h})}function g(n){const o=n?x.getTheme(n):v;if(!o)throw Error(`No theme registration for ${n}`);(!_||_.name!==o.name)&&(x.setTheme(o),_=o);const h=x.getColorMap();return o.type==="css"&&L(o,h),{_theme:o,_colorMap:h}}function w(n){const o=x.getGrammar(n);if(!o)throw Error(`No language registration for ${n}`);return{_grammar:o}}function A(n,o="text",h,b={includeExplanation:!0}){if(Dn(o))return[...n.split(/\r\n|\r|\n/).map(W=>[{content:W}])];const{_grammar:T}=w(o),{_theme:I,_colorMap:O}=g(h);return yn(I,O,n,T,b)}function d(n,o){const{_theme:h}=g(o);return jn(h,n)}function P(n,o="text",h){let b;typeof o=="object"?b=o:b={lang:o,theme:h};const T=A(n,b.lang,b.theme,{includeExplanation:!1}),{_theme:I}=g(b.theme);return We(T,{fg:I.fg,bg:I.bg,lineOptions:b==null?void 0:b.lineOptions,themeName:I.name})}function y(n,o){const h=d(n,o==null?void 0:o.theme),{_theme:b}=g(o==null?void 0:o.theme);return We(h,{fg:b.fg,bg:b.bg,lineOptions:o==null?void 0:o.lineOptions,themeName:b.name})}async function N(n){await x.loadTheme(n)}async function l(n){const o=nt(n);j.addLanguage(o),await x.loadLanguage(o)}function f(){return x.getLoadedThemes()}function m(){return x.getLoadedLanguages()}function u(n){const{_theme:o}=g(n);return o.bg}function t(n){const{_theme:o}=g(n);return o.fg}return{codeToThemedTokens:A,codeToHtml:P,ansiToThemedTokens:d,ansiToHtml:y,getTheme:n=>g(n)._theme,loadTheme:N,loadLanguage:l,getBackgroundColor:u,getForegroundColor:t,getLoadedThemes:f,getLoadedLanguages:m,setColorReplacements:S}}function Dn(e){return!e||["plaintext","txt","text"].includes(e)}async function $n(){const e=await Gn({theme:"dark-plus",langs:["html","js","css","svelte","yml","docker","dockerfile","sh","elixir","json5","json","ts"]}),k=Object.fromEntries(Object.entries(Object.assign({"/src/lib/snippets/posts/deploy-elixir-app-on-lightsail/Dockerfile.dockerfile":St,"/src/lib/snippets/posts/deploy-elixir-app-on-lightsail/create_new_app.sh":xt,"/src/lib/snippets/posts/deploy-elixir-app-on-lightsail/github-ci.yml":Pt,"/src/lib/snippets/posts/deploy-elixir-app-on-lightsail/iam.json":jt,"/src/lib/snippets/posts/elixir-telegran-bot/application.elixir":At,"/src/lib/snippets/posts/elixir-telegran-bot/deps.elixir":Tt,"/src/lib/snippets/posts/elixir-telegran-bot/messages_log.elixir":Rt,"/src/lib/snippets/posts/elixir-telegran-bot/new_elixir_app.sh":It,"/src/lib/snippets/posts/elixir-telegran-bot/stocks_bot.elixir":Et,"/src/lib/snippets/posts/elixir-telegran-bot/stocks_bot_2.elixir":Ot,"/src/lib/snippets/posts/elixir-telegran-bot/stocks_bot_3.elixir":Mt,"/src/lib/snippets/posts/elixir-telegran-bot/stocks_bot_initial.elixir":Bt,"/src/lib/snippets/posts/elixir-telegran-bot/structure.sh":Gt,"/src/lib/snippets/posts/elixir-telegran-bot/test_bot.sh":Dt,"/src/lib/snippets/posts/heap-it/max_heap.test.ts":$t,"/src/lib/snippets/posts/heap-it/max_heap.ts":Ct,"/src/lib/snippets/posts/heap-it/min_heap.test.ts":Ft,"/src/lib/snippets/posts/heap-it/min_heap.ts":qt,"/src/lib/snippets/posts/rails-on-docker/docker-compose.yml":Ut,"/src/lib/snippets/posts/rails-on-docker/example.dockerfile":Wt,"/src/lib/snippets/posts/rails-on-docker/rails_bash.sh":Ht,"/src/lib/snippets/posts/rails-on-docker/rails_new.sh":Vt,"/src/lib/snippets/posts/rails-on-docker/start_rails.sh":zt,"/src/lib/snippets/posts/three-versions-of-leetcode-same-tree/bfs.ts":Qt,"/src/lib/snippets/posts/three-versions-of-leetcode-same-tree/dfs_iterative.ts":Jt,"/src/lib/snippets/posts/three-versions-of-leetcode-same-tree/dfs_recursive.ts":Xt,"/src/lib/snippets/today-i-learned/how_to_test_phoenix_controllers/mix_task.elixir":Yt,"/src/lib/snippets/today-i-learned/how_to_test_phoenix_controllers/simple_action.elixir":Kt,"/src/lib/snippets/today-i-learned/traefik-label-for-router/traefik_conf.yml":Zt})).map(a));function a([j,x]){const v=j.split("/").at(-1).split(".").at(-1),_=e.codeToHtml(x,{lang:v});return[j.replace("/src/lib/snippets/",""),{code:_,raw:x}]}return k}const Cn=async()=>({codes:await $n()}),Fn=!0,qn="always",Zn=Object.freeze(Object.defineProperty({__proto__:null,load:Cn,prerender:Fn,trailingSlash:qn},Symbol.toStringTag,{value:"Module"})),Un=""+new URL("../assets/facebook_cover_1200x630.D6J1q_ov.jpg?h=630&w=1200",import.meta.url).href;var Wn=Ae('<meta name="description"/> <link rel="canonical"/> <meta name="keywords" content="rails, ruby, typescript, react, elixir, rust"/> <meta name="twitter:image"/> <meta name="robots" content="index,follow"/> <meta name="googlebot" content="index,follow"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:site" content="@MRukomoynikov"/> <meta name="twitter:description"/> <meta name="twitter:image"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:image:url"/> <meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="630"/> <meta property="og:image:alt"/> <meta property="og:url"/> <meta property="og:type" content="website"/> <meta property="og:site_name"/>',1),Hn=Ae('<h1 class="svelte-12qhfyh"><a class="svelte-12qhfyh">Max Rukomoynikov</a></h1> <div>I speak several languages, but my favourite are [Java|Type]Script, Ruby and Elixir</div>',1),Vn=Ae("<!> <!>",1);function es(e,p){ct(p,!0);const k=()=>_t(vt,"$page",a),[a,j]=bt(),x=k().data.title?`${k().data.title}`:"Max Rukomoynikov",s=k().data.description?k().data.description:"Max Rukomoynikov. Software Engineer. Ruby, Rails, Typescript, React, Elixir, Rust";let v=k().data.image?k().data.image:Un;v=`https://rukomoynikov.com${v}`;const _=Nt(),[r]=_;var S=Vn();Lt("12qhfyh",w=>{var A=Wn(),d=Se(A),P=ae(d,2),y=ae(P,4),N=ae(y,10),l=ae(N,2),f=ae(l,2),m=ae(f,2),u=ae(m,2),t=ae(u,6),i=ae(t,2),c=ae(i,4);Me(()=>{te(d,"content",s),te(P,"href",k().url.pathname),te(y,"content",v),te(N,"content",s),te(l,"content",v),te(f,"content",x),te(m,"content",s),te(u,"content",v),te(t,"content",x),te(i,"content",k().url.pathname),te(c,"content",x)}),pt(()=>{gt.title=x}),we(w,A)});var L=Se(S);yt(L,{children:(w,A)=>{kt(w,{children:(d,P)=>{var y=Hn(),N=Se(y),l=ht(N);mt(N),dt(2),Me(f=>te(l,"href",f),[()=>r("/",void 0)]),we(d,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=ae(L,2);wt(g,()=>p.children),we(e,S),ut(),j()}export{es as component,Zn as universal};
