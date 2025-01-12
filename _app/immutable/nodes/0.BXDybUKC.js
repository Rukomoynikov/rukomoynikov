import{q as Ze,a as we,b as je}from"../chunks/legacy.kROiCmhR.js";import{P as Ke,a4 as et,D as tt,af as nt,Z as st,F as at,v as rt,E as it,f as Le,I as ot,aL as lt,s as ae,N as Re,c as ct,r as ut,n as pt}from"../chunks/utils.CrDVYUnt.js";import{C as ht,a as te,T as mt}from"../chunks/TwoColsContainer.zeqId5Fh.js";import{s as dt,a as gt}from"../chunks/props.D51blVrW.js";import{g as ft}from"../chunks/index.CKscP9ss.js";import{p as _t}from"../chunks/stores.DVkZmoYt.js";function bt(e,h,...N){var s=e,j=nt,P;Ke(()=>{j!==(j=h())&&(P&&(st(P),P=null),P=tt(()=>j(s,...N)))},et),at&&(s=rt)}const yt=`# ----------------- # BASE # -----------------
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
`,kt=`# Scaffolding application mix phx.new github_dashboard --no-ecto
mix phx.new github_dashboard --no-ecto
`,Nt=`name: Elixir CI

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
`,vt=`{
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
`,wt=`defmodule StocksBot.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [ StocksBot ]

    opts = [strategy: :one_for_one, name: StocksBot.Supervisor]
    Supervisor.start_link(children, opts)
  end
end`,Lt=`defp deps do
  [
    {:httpoison, "~> 1.8"},
    {:jason, "~> 1.2"}
  ]
end`,St=`[
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
]`,xt="mix new stocks_bot --sup",Pt=`defmodule StocksBot do
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
end`,jt=`defp parse_messages(messages) do
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
end`,At=`defmodule StocksBot do
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
end`,Tt=`defmodule StocksBot do
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
end`,Rt=`├── README.md
├── lib
│ ├── stocks_bot
│ │ └── application.ex
│ └──stocks_bot.ex
├── mix.exs
└── test
├── stocks_bot_test.exs
└── test_helper.exs`,It=`iex -S mix
StocksBot.get_updates()`,Ot=`import { MaxHeap } from './max_heap';

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
`,Et=`class MaxHeap {
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
`,Mt=`import { MinHeap } from './min_heap';

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
`,Bt=`class MinHeap {
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
`,Gt=`services:
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
`,Dt=`FROM debian:bullseye

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
`,$t="docker run --rm -it -p 3000:3000 -v /$(pwd):/app rukomoynikov/rails bash",Ct="docker run --rm -v /$(pwd):/app rukomoynikov/rails rails new .",Ft="docker run --rm -it -p 3000:3000 -v /$(pwd):/app rukomoynikov/rails rails s -b 0.0.0.0",qt=`function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
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
`,Ut=`function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
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
`,Wt=`function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p == null && q == null) return true
  if(p == null || q == null) return false
  if(p.val != q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
`,Ht=`defmodule Mix.Tasks.UploadDevReport do
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
`,Vt=`defmodule AppForArticleWeb.PageController do
  use AppForArticleWeb, :controller

  def home(conn, %{"id" => id}) do
    text conn, "Showing id #{id}"
  end
end
`,zt=`# Turned out it has a part where you should give your service a unique name
traefik.http.routers.{{uniq_name_for_application}}-https.rule
traefik.http.routers.{{uniq_name_for_application}}.rule
traefik.http.routers.{{uniq_name_for_application}}.middlewares redirect-to-https
traefik.http.routers.{{uniq_name_for_application}}-https.service {{uniq_name_for_application}}
`;var Fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qe={exports:{}};(function(e,h){(function(N,s){e.exports=s()})(Fe,()=>{return N={770:function(j,P,a){var w=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(P,"__esModule",{value:!0}),P.setDefaultDebugCall=P.createOnigScanner=P.createOnigString=P.loadWASM=P.OnigScanner=P.OnigString=void 0;const _=w(a(418));let r=null,S=!1;class L{static _utf8ByteLength(y){let k=0;for(let l=0,f=y.length;l<f;l++){const m=y.charCodeAt(l);let u=m,t=!1;if(m>=55296&&m<=56319&&l+1<f){const i=y.charCodeAt(l+1);i>=56320&&i<=57343&&(u=65536+(m-55296<<10)|i-56320,t=!0)}k+=u<=127?1:u<=2047?2:u<=65535?3:4,t&&l++}return k}constructor(y){const k=y.length,l=L._utf8ByteLength(y),f=l!==k,m=f?new Uint32Array(k+1):null;f&&(m[k]=l);const u=f?new Uint32Array(l+1):null;f&&(u[l]=k);const t=new Uint8Array(l);let i=0;for(let c=0;c<k;c++){const n=y.charCodeAt(c);let o=n,p=!1;if(n>=55296&&n<=56319&&c+1<k){const b=y.charCodeAt(c+1);b>=56320&&b<=57343&&(o=65536+(n-55296<<10)|b-56320,p=!0)}f&&(m[c]=i,p&&(m[c+1]=i),o<=127?u[i+0]=c:o<=2047?(u[i+0]=c,u[i+1]=c):o<=65535?(u[i+0]=c,u[i+1]=c,u[i+2]=c):(u[i+0]=c,u[i+1]=c,u[i+2]=c,u[i+3]=c)),o<=127?t[i++]=o:o<=2047?(t[i++]=192|(1984&o)>>>6,t[i++]=128|(63&o)>>>0):o<=65535?(t[i++]=224|(61440&o)>>>12,t[i++]=128|(4032&o)>>>6,t[i++]=128|(63&o)>>>0):(t[i++]=240|(1835008&o)>>>18,t[i++]=128|(258048&o)>>>12,t[i++]=128|(4032&o)>>>6,t[i++]=128|(63&o)>>>0),p&&c++}this.utf16Length=k,this.utf8Length=l,this.utf16Value=y,this.utf8Value=t,this.utf16OffsetToUtf8=m,this.utf8OffsetToUtf16=u}createString(y){const k=y._omalloc(this.utf8Length);return y.HEAPU8.set(this.utf8Value,k),k}}class g{constructor(y){if(this.id=++g.LAST_ID,!r)throw new Error("Must invoke loadWASM first.");this._onigBinding=r,this.content=y;const k=new L(y);this.utf16Length=k.utf16Length,this.utf8Length=k.utf8Length,this.utf16OffsetToUtf8=k.utf16OffsetToUtf8,this.utf8OffsetToUtf16=k.utf8OffsetToUtf16,this.utf8Length<1e4&&!g._sharedPtrInUse?(g._sharedPtr||(g._sharedPtr=r._omalloc(1e4)),g._sharedPtrInUse=!0,r.HEAPU8.set(k.utf8Value,g._sharedPtr),this.ptr=g._sharedPtr):this.ptr=k.createString(r)}convertUtf8OffsetToUtf16(y){return this.utf8OffsetToUtf16?y<0?0:y>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[y]:y}convertUtf16OffsetToUtf8(y){return this.utf16OffsetToUtf8?y<0?0:y>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[y]:y}dispose(){this.ptr===g._sharedPtr?g._sharedPtrInUse=!1:this._onigBinding._ofree(this.ptr)}}P.OnigString=g,g.LAST_ID=0,g._sharedPtr=0,g._sharedPtrInUse=!1;class v{constructor(y){if(!r)throw new Error("Must invoke loadWASM first.");const k=[],l=[];for(let t=0,i=y.length;t<i;t++){const c=new L(y[t]);k[t]=c.createString(r),l[t]=c.utf8Length}const f=r._omalloc(4*y.length);r.HEAPU32.set(k,f/4);const m=r._omalloc(4*y.length);r.HEAPU32.set(l,m/4);const u=r._createOnigScanner(f,m,y.length);for(let t=0,i=y.length;t<i;t++)r._ofree(k[t]);r._ofree(m),r._ofree(f),u===0&&function(t){throw new Error(t.UTF8ToString(t._getLastOnigError()))}(r),this._onigBinding=r,this._ptr=u}dispose(){this._onigBinding._freeOnigScanner(this._ptr)}findNextMatchSync(y,k,l){let f=S,m=0;if(typeof l=="number"?(8&l&&(f=!0),m=l):typeof l=="boolean"&&(f=l),typeof y=="string"){y=new g(y);const u=this._findNextMatchSync(y,k,f,m);return y.dispose(),u}return this._findNextMatchSync(y,k,f,m)}_findNextMatchSync(y,k,l,f){const m=this._onigBinding;let u;if(u=l?m._findNextOnigScannerMatchDbg(this._ptr,y.id,y.ptr,y.utf8Length,y.convertUtf16OffsetToUtf8(k),f):m._findNextOnigScannerMatch(this._ptr,y.id,y.ptr,y.utf8Length,y.convertUtf16OffsetToUtf8(k),f),u===0)return null;const t=m.HEAPU32;let i=u/4;const c=t[i++],n=t[i++];let o=[];for(let p=0;p<n;p++){const b=y.convertUtf8OffsetToUtf16(t[i++]),T=y.convertUtf8OffsetToUtf16(t[i++]);o[p]={start:b,end:T,length:T-b}}return{index:c,captureIndices:o}}}P.OnigScanner=v;let A=!1,d=null;P.loadWASM=function(x){if(A)return d;let y,k,l,f;if(A=!0,function(m){return typeof m.instantiator=="function"}(x))y=x.instantiator,k=x.print;else{let m;(function(u){return u.data!==void 0})(x)?(m=x.data,k=x.print):m=x,y=function(u){return typeof Response<"u"&&u instanceof Response}(m)?typeof WebAssembly.instantiateStreaming=="function"?function(u){return t=>WebAssembly.instantiateStreaming(u,t)}(m):function(u){return async t=>{const i=await u.arrayBuffer();return WebAssembly.instantiate(i,t)}}(m):function(u){return t=>WebAssembly.instantiate(u,t)}(m)}return d=new Promise((m,u)=>{l=m,f=u}),function(m,u,t,i){(0,_.default)({print:u,instantiateWasm:(c,n)=>{if(typeof performance>"u"){const o=()=>Date.now();c.env.emscripten_get_now=o,c.wasi_snapshot_preview1.emscripten_get_now=o}return m(c).then(o=>n(o.instance),i),{}}}).then(c=>{r=c,t()})}(y,k,l,f),d},P.createOnigString=function(x){return new g(x)},P.createOnigScanner=function(x){return new v(x)},P.setDefaultDebugCall=function(x){S=x}},418:j=>{var P=(typeof document<"u"&&document.currentScript&&document.currentScript.src,function(a){var w,_,r=(a=a||{})!==void 0?a:{};r.ready=new Promise(function(O,B){w=O,_=B});var S,L=Object.assign({},r),g="";function v(O){return r.locateFile?r.locateFile(O,g):g+O}S=function(O){let B;return typeof readbuffer=="function"?new Uint8Array(readbuffer(O)):(B=read(O,"binary"),l(typeof B=="object"),B)},typeof scriptArgs<"u"&&scriptArgs,typeof onig_print<"u"&&(typeof console>"u"&&(console={}),console.log=onig_print,console.warn=console.error=typeof printErr<"u"?printErr:onig_print);var A,d,x=r.print||console.log.bind(console),y=r.printErr||console.warn.bind(console);Object.assign(r,L),L=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit,r.wasmBinary&&(A=r.wasmBinary),r.noExitRuntime,typeof WebAssembly!="object"&&$("no native wasm support detected");var k=!1;function l(O,B){O||$(B)}var f,m,u,t=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function i(O,B,X){for(var Z=B+X,H=B;O[H]&&!(H>=Z);)++H;if(H-B>16&&O.buffer&&t)return t.decode(O.subarray(B,H));for(var V="";B<H;){var Y=O[B++];if(128&Y){var se=63&O[B++];if((224&Y)!=192){var ce=63&O[B++];if((Y=(240&Y)==224?(15&Y)<<12|se<<6|ce:(7&Y)<<18|se<<12|ce<<6|63&O[B++])<65536)V+=String.fromCharCode(Y);else{var Te=Y-65536;V+=String.fromCharCode(55296|Te>>10,56320|1023&Te)}}else V+=String.fromCharCode((31&Y)<<6|se)}else V+=String.fromCharCode(Y)}return V}function c(O,B){return O?i(m,O,B):""}function n(O){f=O,r.HEAP8=new Int8Array(O),r.HEAP16=new Int16Array(O),r.HEAP32=new Int32Array(O),r.HEAPU8=m=new Uint8Array(O),r.HEAPU16=new Uint16Array(O),r.HEAPU32=u=new Uint32Array(O),r.HEAPF32=new Float32Array(O),r.HEAPF64=new Float64Array(O)}r.INITIAL_MEMORY;var o=[],p=[],b=[];function T(){if(r.preRun)for(typeof r.preRun=="function"&&(r.preRun=[r.preRun]);r.preRun.length;)M(r.preRun.shift());oe(o)}function I(){oe(p)}function E(){if(r.postRun)for(typeof r.postRun=="function"&&(r.postRun=[r.postRun]);r.postRun.length;)F(r.postRun.shift());oe(b)}function M(O){o.unshift(O)}function W(O){p.unshift(O)}function F(O){b.unshift(O)}var G=0,C=null;function J(O){G++,r.monitorRunDependencies&&r.monitorRunDependencies(G)}function z(O){if(G--,r.monitorRunDependencies&&r.monitorRunDependencies(G),G==0&&C){var B=C;C=null,B()}}function $(O){r.onAbort&&r.onAbort(O),y(O="Aborted("+O+")"),k=!0,O+=". Build with -sASSERTIONS for more info.";var B=new WebAssembly.RuntimeError(O);throw _(B),B}var D,q,ie="data:application/octet-stream;base64,";function R(O){return O.startsWith(ie)}function Q(O){try{if(O==D&&A)return new Uint8Array(A);if(S)return S(O);throw"both async and sync fetching of the wasm failed"}catch(B){$(B)}}function U(){return Promise.resolve().then(function(){return Q(D)})}function ne(){var O={env:le,wasi_snapshot_preview1:le};function B(H,V){var Y=H.exports;r.asm=Y,n((d=r.asm.memory).buffer),r.asm.__indirect_function_table,W(r.asm.__wasm_call_ctors),z()}function X(H){B(H.instance)}function Z(H){return U().then(function(V){return WebAssembly.instantiate(V,O)}).then(function(V){return V}).then(H,function(V){y("failed to asynchronously prepare wasm: "+V),$(V)})}if(J(),r.instantiateWasm)try{return r.instantiateWasm(O,B)}catch(H){y("Module.instantiateWasm callback failed with error: "+H),_(H)}return(A||typeof WebAssembly.instantiateStreaming!="function"||R(D)||typeof fetch!="function"?Z(X):fetch(D,{credentials:"same-origin"}).then(function(H){return WebAssembly.instantiateStreaming(H,O).then(X,function(V){return y("wasm streaming compile failed: "+V),y("falling back to ArrayBuffer instantiation"),Z(X)})})).catch(_),{}}function oe(O){for(;O.length>0;)O.shift()(r)}function be(O,B,X){m.copyWithin(O,B,B+X)}function me(O){try{return d.grow(O-f.byteLength+65535>>>16),n(d.buffer),1}catch{}}function pe(O){var B,X=m.length,Z=2147483648;if((O>>>=0)>Z)return!1;for(var H=1;H<=4;H*=2){var V=X*(1+.2/H);if(V=Math.min(V,O+100663296),me(Math.min(Z,(B=Math.max(O,V))+(65536-B%65536)%65536)))return!0}return!1}R(D="onig.wasm")||(D=v(D)),q=typeof dateNow<"u"?dateNow:()=>performance.now();var fe=[null,[],[]];function de(O,B){var X=fe[O];B===0||B===10?((O===1?x:y)(i(X,0)),X.length=0):X.push(B)}function ge(O,B,X,Z){for(var H=0,V=0;V<X;V++){var Y=u[B>>2],se=u[B+4>>2];B+=8;for(var ce=0;ce<se;ce++)de(O,m[Y+ce]);H+=se}return u[Z>>2]=H,0}var re,le={emscripten_get_now:q,emscripten_memcpy_big:be,emscripten_resize_heap:pe,fd_write:ge};function ee(O){function B(){re||(re=!0,r.calledRun=!0,k||(I(),w(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),E()))}G>0||(T(),G>0||(r.setStatus?(r.setStatus("Running..."),setTimeout(function(){setTimeout(function(){r.setStatus("")},1),B()},1)):B()))}if(ne(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.__wasm_call_ctors).apply(null,arguments)},r.___errno_location=function(){return(r.___errno_location=r.asm.__errno_location).apply(null,arguments)},r._omalloc=function(){return(r._omalloc=r.asm.omalloc).apply(null,arguments)},r._ofree=function(){return(r._ofree=r.asm.ofree).apply(null,arguments)},r._getLastOnigError=function(){return(r._getLastOnigError=r.asm.getLastOnigError).apply(null,arguments)},r._createOnigScanner=function(){return(r._createOnigScanner=r.asm.createOnigScanner).apply(null,arguments)},r._freeOnigScanner=function(){return(r._freeOnigScanner=r.asm.freeOnigScanner).apply(null,arguments)},r._findNextOnigScannerMatch=function(){return(r._findNextOnigScannerMatch=r.asm.findNextOnigScannerMatch).apply(null,arguments)},r._findNextOnigScannerMatchDbg=function(){return(r._findNextOnigScannerMatchDbg=r.asm.findNextOnigScannerMatchDbg).apply(null,arguments)},r.stackSave=function(){return(r.stackSave=r.asm.stackSave).apply(null,arguments)},r.stackRestore=function(){return(r.stackRestore=r.asm.stackRestore).apply(null,arguments)},r.stackAlloc=function(){return(r.stackAlloc=r.asm.stackAlloc).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.dynCall_jiji).apply(null,arguments)},r.UTF8ToString=c,C=function O(){re||ee(),re||(C=O)},r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return ee(),a.ready});j.exports=P}},s={},function j(P){var a=s[P];if(a!==void 0)return a.exports;var w=s[P]={exports:{}};return N[P].call(w.exports,w,w.exports,j),w.exports}(770);var N,s})})(qe);var ke=qe.exports,Ue={exports:{}};(function(e,h){var N={};(function(s,j){e.exports=j()})(Fe,function(){return(()=>{var s={350:(P,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.UseOnigurumaFindOptions=a.DebugFlags=void 0,a.DebugFlags={InDebugMode:typeof process<"u"&&!!N.VSCODE_TEXTMATE_DEBUG},a.UseOnigurumaFindOptions=!1},36:(P,a)=>{var w;Object.defineProperty(a,"__esModule",{value:!0}),a.toOptionalTokenType=a.EncodedTokenAttributes=void 0,(w=a.EncodedTokenAttributes||(a.EncodedTokenAttributes={})).toBinaryStr=function(_){let r=_.toString(2);for(;r.length<32;)r="0"+r;return r},w.print=function(_){const r=w.getLanguageId(_),S=w.getTokenType(_),L=w.getFontStyle(_),g=w.getForeground(_),v=w.getBackground(_);console.log({languageId:r,tokenType:S,fontStyle:L,foreground:g,background:v})},w.getLanguageId=function(_){return(255&_)>>>0},w.getTokenType=function(_){return(768&_)>>>8},w.containsBalancedBrackets=function(_){return(1024&_)!=0},w.getFontStyle=function(_){return(30720&_)>>>11},w.getForeground=function(_){return(16744448&_)>>>15},w.getBackground=function(_){return(4278190080&_)>>>24},w.set=function(_,r,S,L,g,v,A){let d=w.getLanguageId(_),x=w.getTokenType(_),y=w.containsBalancedBrackets(_)?1:0,k=w.getFontStyle(_),l=w.getForeground(_),f=w.getBackground(_);return r!==0&&(d=r),S!==8&&(x=S),L!==null&&(y=L?1:0),g!==-1&&(k=g),v!==0&&(l=v),A!==0&&(f=A),(d<<0|x<<8|y<<10|k<<11|l<<15|f<<24)>>>0},a.toOptionalTokenType=function(_){return _}},996:(P,a,w)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.BasicScopeAttributesProvider=a.BasicScopeAttributes=void 0;const _=w(878);class r{constructor(v,A){this.languageId=v,this.tokenType=A}}a.BasicScopeAttributes=r;class S{constructor(v,A){this._getBasicScopeAttributes=new _.CachedFn(d=>{const x=this._scopeToLanguage(d),y=this._toStandardTokenType(d);return new r(x,y)}),this._defaultAttributes=new r(v,8),this._embeddedLanguagesMatcher=new L(Object.entries(A||{}))}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(v){return v===null?S._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(v)}_scopeToLanguage(v){return this._embeddedLanguagesMatcher.match(v)||0}_toStandardTokenType(v){const A=v.match(S.STANDARD_TOKEN_TYPE_REGEXP);if(!A)return 8;switch(A[1]){case"comment":return 1;case"string":return 2;case"regex":return 3;case"meta.embedded":return 0}throw new Error("Unexpected match for standard token type!")}}a.BasicScopeAttributesProvider=S,S._NULL_SCOPE_METADATA=new r(0,0),S.STANDARD_TOKEN_TYPE_REGEXP=/\b(comment|string|regex|meta\.embedded)\b/;class L{constructor(v){if(v.length===0)this.values=null,this.scopesRegExp=null;else{this.values=new Map(v);const A=v.map(([d,x])=>_.escapeRegExpCharacters(d));A.sort(),A.reverse(),this.scopesRegExp=new RegExp(`^((${A.join(")|(")}))($|\\.)`,"")}}match(v){if(!this.scopesRegExp)return;const A=v.match(this.scopesRegExp);return A?this.values.get(A[1]):void 0}}},947:(P,a,w)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.LineTokens=a.BalancedBracketSelectors=a.StateStack=a.AttributedScopeStack=a.Grammar=a.createGrammar=void 0;const _=w(350),r=w(36),S=w(736),L=w(44),g=w(792),v=w(583),A=w(878),d=w(996),x=w(47);function y(c,n,o,p,b){const T=S.createMatchers(n,k),I=g.RuleFactory.getCompiledRuleId(o,p,b.repository);for(const E of T)c.push({debugSelector:n,matcher:E.matcher,ruleId:I,grammar:b,priority:E.priority})}function k(c,n){if(n.length<c.length)return!1;let o=0;return c.every(p=>{for(let b=o;b<n.length;b++)if(l(n[b],p))return o=b+1,!0;return!1})}function l(c,n){if(!c)return!1;if(c===n)return!0;const o=n.length;return c.length>o&&c.substr(0,o)===n&&c[o]==="."}a.createGrammar=function(c,n,o,p,b,T,I,E){return new f(c,n,o,p,b,T,I,E)};class f{constructor(n,o,p,b,T,I,E,M){if(this._rootScopeName=n,this.balancedBracketSelectors=I,this._onigLib=M,this._basicScopeAttributesProvider=new d.BasicScopeAttributesProvider(p,b),this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=E,this._grammar=m(o,null),this._injections=null,this._tokenTypeMatchers=[],T)for(const W of Object.keys(T)){const F=S.createMatchers(W,k);for(const G of F)this._tokenTypeMatchers.push({matcher:G.matcher,type:T[W]})}}get themeProvider(){return this._grammarRepository}dispose(){for(const n of this._ruleId2desc)n&&n.dispose()}createOnigScanner(n){return this._onigLib.createOnigScanner(n)}createOnigString(n){return this._onigLib.createOnigString(n)}getMetadataForScope(n){return this._basicScopeAttributesProvider.getBasicScopeAttributes(n)}_collectInjections(){const n=[],o=this._rootScopeName,p=(b=>b===this._rootScopeName?this._grammar:this.getExternalGrammar(b))(o);if(p){const b=p.injections;if(b)for(let I in b)y(n,I,b[I],this,p);const T=this._grammarRepository.injections(o);T&&T.forEach(I=>{const E=this.getExternalGrammar(I);if(E){const M=E.injectionSelector;M&&y(n,M,E,this,E)}})}return n.sort((b,T)=>b.priority-T.priority),n}getInjections(){if(this._injections===null&&(this._injections=this._collectInjections(),_.DebugFlags.InDebugMode&&this._injections.length>0)){console.log(`Grammar ${this._rootScopeName} contains the following injections:`);for(const n of this._injections)console.log(`  - ${n.debugSelector}`)}return this._injections}registerRule(n){const o=++this._lastRuleId,p=n(g.ruleIdFromNumber(o));return this._ruleId2desc[o]=p,p}getRule(n){return this._ruleId2desc[g.ruleIdToNumber(n)]}getExternalGrammar(n,o){if(this._includedGrammars[n])return this._includedGrammars[n];if(this._grammarRepository){const p=this._grammarRepository.lookup(n);if(p)return this._includedGrammars[n]=m(p,o&&o.$base),this._includedGrammars[n]}}tokenizeLine(n,o,p=0){const b=this._tokenize(n,o,!1,p);return{tokens:b.lineTokens.getResult(b.ruleStack,b.lineLength),ruleStack:b.ruleStack,stoppedEarly:b.stoppedEarly}}tokenizeLine2(n,o,p=0){const b=this._tokenize(n,o,!0,p);return{tokens:b.lineTokens.getBinaryResult(b.ruleStack,b.lineLength),ruleStack:b.ruleStack,stoppedEarly:b.stoppedEarly}}_tokenize(n,o,p,b){let T;if(this._rootId===-1&&(this._rootId=g.RuleFactory.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository)),o&&o!==t.NULL)T=!1,o.reset();else{T=!0;const F=this._basicScopeAttributesProvider.getDefaultAttributes(),G=this.themeProvider.getDefaults(),C=r.EncodedTokenAttributes.set(0,F.languageId,F.tokenType,null,G.fontStyle,G.foregroundId,G.backgroundId),J=this.getRule(this._rootId).getName(null,null);let z;z=J?u.createRootAndLookUpScopeName(J,C,this):u.createRoot("unknown",C),o=new t(null,this._rootId,-1,-1,!1,null,z,z)}n+=`
`;const I=this.createOnigString(n),E=I.content.length,M=new i(p,n,this._tokenTypeMatchers,this.balancedBracketSelectors),W=x._tokenizeString(this,I,T,0,o,M,!0,b);return L.disposeOnigString(I),{lineLength:E,lineTokens:M,ruleStack:W.stack,stoppedEarly:W.stoppedEarly}}}function m(c,n){return(c=A.clone(c)).repository=c.repository||{},c.repository.$self={$vscodeTextmateLocation:c.$vscodeTextmateLocation,patterns:c.patterns,name:c.scopeName},c.repository.$base=n||c.repository.$self,c}a.Grammar=f;class u{constructor(n,o,p){this.parent=n,this.scopePath=o,this.tokenAttributes=p}static createRoot(n,o){return new u(null,new v.ScopeStack(null,n),o)}static createRootAndLookUpScopeName(n,o,p){const b=p.getMetadataForScope(n),T=new v.ScopeStack(null,n),I=p.themeProvider.themeMatch(T),E=u.mergeAttributes(o,b,I);return new u(null,T,E)}get scopeName(){return this.scopePath.scopeName}equals(n){return u._equals(this,n)}static _equals(n,o){for(;;){if(n===o||!n&&!o)return!0;if(!n||!o||n.scopeName!==o.scopeName||n.tokenAttributes!==o.tokenAttributes)return!1;n=n.parent,o=o.parent}}static mergeAttributes(n,o,p){let b=-1,T=0,I=0;return p!==null&&(b=p.fontStyle,T=p.foregroundId,I=p.backgroundId),r.EncodedTokenAttributes.set(n,o.languageId,o.tokenType,null,b,T,I)}pushAttributed(n,o){if(n===null)return this;if(n.indexOf(" ")===-1)return u._pushAttributed(this,n,o);const p=n.split(/ /g);let b=this;for(const T of p)b=u._pushAttributed(b,T,o);return b}static _pushAttributed(n,o,p){const b=p.getMetadataForScope(o),T=n.scopePath.push(o),I=p.themeProvider.themeMatch(T),E=u.mergeAttributes(n.tokenAttributes,b,I);return new u(n,T,E)}getScopeNames(){return this.scopePath.getSegments()}}a.AttributedScopeStack=u;class t{constructor(n,o,p,b,T,I,E,M){this.parent=n,this.ruleId=o,this.beginRuleCapturedEOL=T,this.endRule=I,this.nameScopesList=E,this.contentNameScopesList=M,this._stackElementBrand=void 0,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=p,this._anchorPos=b}equals(n){return n!==null&&t._equals(this,n)}static _equals(n,o){return n===o||!!this._structuralEquals(n,o)&&n.contentNameScopesList.equals(o.contentNameScopesList)}static _structuralEquals(n,o){for(;;){if(n===o||!n&&!o)return!0;if(!n||!o||n.depth!==o.depth||n.ruleId!==o.ruleId||n.endRule!==o.endRule)return!1;n=n.parent,o=o.parent}}clone(){return this}static _reset(n){for(;n;)n._enterPos=-1,n._anchorPos=-1,n=n.parent}reset(){t._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(n,o,p,b,T,I,E){return new t(this,n,o,p,b,T,I,E)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(n){return n.getRule(this.ruleId)}toString(){const n=[];return this._writeString(n,0),"["+n.join(",")+"]"}_writeString(n,o){return this.parent&&(o=this.parent._writeString(n,o)),n[o++]=`(${this.ruleId}, TODO-${this.nameScopesList}, TODO-${this.contentNameScopesList})`,o}withContentNameScopesList(n){return this.contentNameScopesList===n?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,n)}withEndRule(n){return this.endRule===n?this:new t(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,n,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(n){let o=this;for(;o&&o._enterPos===n._enterPos;){if(o.ruleId===n.ruleId)return!0;o=o.parent}return!1}}a.StateStack=t,t.NULL=new t(null,0,0,0,!1,null,null,null),a.BalancedBracketSelectors=class{constructor(c,n){this.allowAny=!1,this.balancedBracketScopes=c.flatMap(o=>o==="*"?(this.allowAny=!0,[]):S.createMatchers(o,k).map(p=>p.matcher)),this.unbalancedBracketScopes=n.flatMap(o=>S.createMatchers(o,k).map(p=>p.matcher))}get matchesAlways(){return this.allowAny&&this.unbalancedBracketScopes.length===0}get matchesNever(){return this.balancedBracketScopes.length===0&&!this.allowAny}match(c){for(const n of this.unbalancedBracketScopes)if(n(c))return!1;for(const n of this.balancedBracketScopes)if(n(c))return!0;return this.allowAny}};class i{constructor(n,o,p,b){this.balancedBracketSelectors=b,this._emitBinaryTokens=n,this._tokenTypeOverrides=p,_.DebugFlags.InDebugMode?this._lineText=o:this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0}produce(n,o){this.produceFromScopes(n.contentNameScopesList,o)}produceFromScopes(n,o){var b;if(this._lastTokenEndIndex>=o)return;if(this._emitBinaryTokens){let T=n.tokenAttributes,I=!1;if((b=this.balancedBracketSelectors)!=null&&b.matchesAlways&&(I=!0),this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever){const E=n.getScopeNames();for(const M of this._tokenTypeOverrides)M.matcher(E)&&(T=r.EncodedTokenAttributes.set(T,0,r.toOptionalTokenType(M.type),null,-1,0,0));this.balancedBracketSelectors&&(I=this.balancedBracketSelectors.match(E))}if(I&&(T=r.EncodedTokenAttributes.set(T,0,8,I,-1,0,0)),this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===T)return void(this._lastTokenEndIndex=o);if(_.DebugFlags.InDebugMode){const E=n.getScopeNames();console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,o).replace(/\n$/,"\\n")+"|");for(let M=0;M<E.length;M++)console.log("      * "+E[M])}return this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(T),void(this._lastTokenEndIndex=o)}const p=n.getScopeNames();if(_.DebugFlags.InDebugMode){console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,o).replace(/\n$/,"\\n")+"|");for(let T=0;T<p.length;T++)console.log("      * "+p[T])}this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:o,scopes:p}),this._lastTokenEndIndex=o}getResult(n,o){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===o-1&&this._tokens.pop(),this._tokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(n,o),this._tokens[this._tokens.length-1].startIndex=0),this._tokens}getBinaryResult(n,o){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===o-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),this._binaryTokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(n,o),this._binaryTokens[this._binaryTokens.length-2]=0);const p=new Uint32Array(this._binaryTokens.length);for(let b=0,T=this._binaryTokens.length;b<T;b++)p[b]=this._binaryTokens[b];return p}}a.LineTokens=i},965:(P,a,w)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.parseInclude=a.TopLevelRepositoryReference=a.TopLevelReference=a.RelativeReference=a.SelfReference=a.BaseReference=a.ScopeDependencyProcessor=a.ExternalReferenceCollector=a.TopLevelRepositoryRuleReference=a.TopLevelRuleReference=void 0;const _=w(878);class r{constructor(t){this.scopeName=t}toKey(){return this.scopeName}}a.TopLevelRuleReference=r;class S{constructor(t,i){this.scopeName=t,this.ruleName=i}toKey(){return`${this.scopeName}#${this.ruleName}`}}a.TopLevelRepositoryRuleReference=S;class L{constructor(){this._references=[],this._seenReferenceKeys=new Set,this.visitedRule=new Set}get references(){return this._references}add(t){const i=t.toKey();this._seenReferenceKeys.has(i)||(this._seenReferenceKeys.add(i),this._references.push(t))}}function g(u,t,i,c){const n=i.lookup(u.scopeName);if(!n){if(u.scopeName===t)throw new Error(`No grammar provided for <${t}>`);return}const o=i.lookup(t);u instanceof r?A({baseGrammar:o,selfGrammar:n},c):v(u.ruleName,{baseGrammar:o,selfGrammar:n,repository:n.repository},c);const p=i.injections(u.scopeName);if(p)for(const b of p)c.add(new r(b))}function v(u,t,i){t.repository&&t.repository[u]&&d([t.repository[u]],t,i)}function A(u,t){u.selfGrammar.patterns&&Array.isArray(u.selfGrammar.patterns)&&d(u.selfGrammar.patterns,{...u,repository:u.selfGrammar.repository},t),u.selfGrammar.injections&&d(Object.values(u.selfGrammar.injections),{...u,repository:u.selfGrammar.repository},t)}function d(u,t,i){for(const c of u){if(i.visitedRule.has(c))continue;i.visitedRule.add(c);const n=c.repository?_.mergeObjects({},t.repository,c.repository):t.repository;Array.isArray(c.patterns)&&d(c.patterns,{...t,repository:n},i);const o=c.include;if(!o)continue;const p=m(o);switch(p.kind){case 0:A({...t,selfGrammar:t.baseGrammar},i);break;case 1:A(t,i);break;case 2:v(p.ruleName,{...t,repository:n},i);break;case 3:case 4:const b=p.scopeName===t.selfGrammar.scopeName?t.selfGrammar:p.scopeName===t.baseGrammar.scopeName?t.baseGrammar:void 0;if(b){const T={baseGrammar:t.baseGrammar,selfGrammar:b,repository:n};p.kind===4?v(p.ruleName,T,i):A(T,i)}else p.kind===4?i.add(new S(p.scopeName,p.ruleName)):i.add(new r(p.scopeName))}}}a.ExternalReferenceCollector=L,a.ScopeDependencyProcessor=class{constructor(u,t){this.repo=u,this.initialScopeName=t,this.seenFullScopeRequests=new Set,this.seenPartialScopeRequests=new Set,this.seenFullScopeRequests.add(this.initialScopeName),this.Q=[new r(this.initialScopeName)]}processQueue(){const u=this.Q;this.Q=[];const t=new L;for(const i of u)g(i,this.initialScopeName,this.repo,t);for(const i of t.references)if(i instanceof r){if(this.seenFullScopeRequests.has(i.scopeName))continue;this.seenFullScopeRequests.add(i.scopeName),this.Q.push(i)}else{if(this.seenFullScopeRequests.has(i.scopeName)||this.seenPartialScopeRequests.has(i.toKey()))continue;this.seenPartialScopeRequests.add(i.toKey()),this.Q.push(i)}}};class x{constructor(){this.kind=0}}a.BaseReference=x;class y{constructor(){this.kind=1}}a.SelfReference=y;class k{constructor(t){this.ruleName=t,this.kind=2}}a.RelativeReference=k;class l{constructor(t){this.scopeName=t,this.kind=3}}a.TopLevelReference=l;class f{constructor(t,i){this.scopeName=t,this.ruleName=i,this.kind=4}}function m(u){if(u==="$base")return new x;if(u==="$self")return new y;const t=u.indexOf("#");if(t===-1)return new l(u);if(t===0)return new k(u.substring(1));{const i=u.substring(0,t),c=u.substring(t+1);return new f(i,c)}}a.TopLevelRepositoryReference=f,a.parseInclude=m},391:function(P,a,w){var _=this&&this.__createBinding||(Object.create?function(S,L,g,v){v===void 0&&(v=g),Object.defineProperty(S,v,{enumerable:!0,get:function(){return L[g]}})}:function(S,L,g,v){v===void 0&&(v=g),S[v]=L[g]}),r=this&&this.__exportStar||function(S,L){for(var g in S)g==="default"||Object.prototype.hasOwnProperty.call(L,g)||_(L,S,g)};Object.defineProperty(a,"__esModule",{value:!0}),r(w(947),a)},47:(P,a,w)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.LocalStackElement=a._tokenizeString=void 0;const _=w(350),r=w(44),S=w(792),L=w(878);class g{constructor(f,m){this.stack=f,this.stoppedEarly=m}}function v(l,f,m,u,t,i,c,n){const o=f.content.length;let p=!1,b=-1;if(c){const E=function(M,W,F,G,C,J){let z=C.beginRuleCapturedEOL?0:-1;const $=[];for(let D=C;D;D=D.pop()){const q=D.getRule(M);q instanceof S.BeginWhileRule&&$.push({rule:q,stack:D})}for(let D=$.pop();D;D=$.pop()){const{ruleScanner:q,findOptions:ie}=d(D.rule,M,D.stack.endRule,F,G===z),R=q.findNextMatchSync(W,G,ie);if(_.DebugFlags.InDebugMode&&(console.log("  scanning for while rule"),console.log(q.toString())),!R){_.DebugFlags.InDebugMode&&console.log("  popping "+D.rule.debugName+" - "+D.rule.debugWhileRegExp),C=D.stack.pop();break}if(R.ruleId!==S.whileRuleId){C=D.stack.pop();break}R.captureIndices&&R.captureIndices.length&&(J.produce(D.stack,R.captureIndices[0].start),y(M,W,F,D.stack,J,D.rule.whileCaptures,R.captureIndices),J.produce(D.stack,R.captureIndices[0].end),z=R.captureIndices[0].end,R.captureIndices[0].end>G&&(G=R.captureIndices[0].end,F=!1))}return{stack:C,linePos:G,anchorPosition:z,isFirstLine:F}}(l,f,m,u,t,i);t=E.stack,u=E.linePos,m=E.isFirstLine,b=E.anchorPosition}const T=Date.now();for(;!p;){if(n!==0&&Date.now()-T>n)return new g(t,!0);I()}return new g(t,!1);function I(){_.DebugFlags.InDebugMode&&(console.log(""),console.log(`@@scanNext ${u}: |${f.content.substr(u).replace(/\n$/,"\\n")}|`));const E=function(G,C,J,z,$,D){const q=function(ne,oe,be,me,pe,fe){const de=pe.getRule(ne),{ruleScanner:ge,findOptions:re}=A(de,ne,pe.endRule,be,me===fe);let le=0;_.DebugFlags.InDebugMode&&(le=L.performanceNow());const ee=ge.findNextMatchSync(oe,me,re);if(_.DebugFlags.InDebugMode){const O=L.performanceNow()-le;O>5&&console.warn(`Rule ${de.debugName} (${de.id}) matching took ${O} against '${oe}'`),console.log(`  scanning for (linePos: ${me}, anchorPosition: ${fe})`),console.log(ge.toString()),ee&&console.log(`matched rule id: ${ee.ruleId} from ${ee.captureIndices[0].start} to ${ee.captureIndices[0].end}`)}return ee?{captureIndices:ee.captureIndices,matchedRuleId:ee.ruleId}:null}(G,C,J,z,$,D),ie=G.getInjections();if(ie.length===0)return q;const R=function(ne,oe,be,me,pe,fe,de){let ge,re=Number.MAX_VALUE,le=null,ee=0;const O=fe.contentNameScopesList.getScopeNames();for(let B=0,X=ne.length;B<X;B++){const Z=ne[B];if(!Z.matcher(O))continue;const H=oe.getRule(Z.ruleId),{ruleScanner:V,findOptions:Y}=A(H,oe,null,me,pe===de),se=V.findNextMatchSync(be,pe,Y);if(!se)continue;_.DebugFlags.InDebugMode&&(console.log(`  matched injection: ${Z.debugSelector}`),console.log(V.toString()));const ce=se.captureIndices[0].start;if(!(ce>=re)&&(re=ce,le=se.captureIndices,ge=se.ruleId,ee=Z.priority,re===pe))break}return le?{priorityMatch:ee===-1,captureIndices:le,matchedRuleId:ge}:null}(ie,G,C,J,z,$,D);if(!R)return q;if(!q)return R;const Q=q.captureIndices[0].start,U=R.captureIndices[0].start;return U<Q||R.priorityMatch&&U===Q?R:q}(l,f,m,u,t,b);if(!E)return _.DebugFlags.InDebugMode&&console.log("  no more matches."),i.produce(t,o),void(p=!0);const M=E.captureIndices,W=E.matchedRuleId,F=!!(M&&M.length>0)&&M[0].end>u;if(W===S.endRuleId){const G=t.getRule(l);_.DebugFlags.InDebugMode&&console.log("  popping "+G.debugName+" - "+G.debugEndRegExp),i.produce(t,M[0].start),t=t.withContentNameScopesList(t.nameScopesList),y(l,f,m,t,i,G.endCaptures,M),i.produce(t,M[0].end);const C=t;if(t=t.parent,b=C.getAnchorPos(),!F&&C.getEnterPos()===u)return _.DebugFlags.InDebugMode&&console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"),t=C,i.produce(t,o),void(p=!0)}else{const G=l.getRule(W);i.produce(t,M[0].start);const C=t,J=G.getName(f.content,M),z=t.contentNameScopesList.pushAttributed(J,l);if(t=t.push(W,u,b,M[0].end===o,null,z,z),G instanceof S.BeginEndRule){const $=G;_.DebugFlags.InDebugMode&&console.log("  pushing "+$.debugName+" - "+$.debugBeginRegExp),y(l,f,m,t,i,$.beginCaptures,M),i.produce(t,M[0].end),b=M[0].end;const D=$.getContentName(f.content,M),q=z.pushAttributed(D,l);if(t=t.withContentNameScopesList(q),$.endHasBackReferences&&(t=t.withEndRule($.getEndWithResolvedBackReferences(f.content,M))),!F&&C.hasSameRuleAs(t))return _.DebugFlags.InDebugMode&&console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),t=t.pop(),i.produce(t,o),void(p=!0)}else if(G instanceof S.BeginWhileRule){const $=G;_.DebugFlags.InDebugMode&&console.log("  pushing "+$.debugName),y(l,f,m,t,i,$.beginCaptures,M),i.produce(t,M[0].end),b=M[0].end;const D=$.getContentName(f.content,M),q=z.pushAttributed(D,l);if(t=t.withContentNameScopesList(q),$.whileHasBackReferences&&(t=t.withEndRule($.getWhileWithResolvedBackReferences(f.content,M))),!F&&C.hasSameRuleAs(t))return _.DebugFlags.InDebugMode&&console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),t=t.pop(),i.produce(t,o),void(p=!0)}else{const $=G;if(_.DebugFlags.InDebugMode&&console.log("  matched "+$.debugName+" - "+$.debugMatchRegExp),y(l,f,m,t,i,$.captures,M),i.produce(t,M[0].end),t=t.pop(),!F)return _.DebugFlags.InDebugMode&&console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"),t=t.safePop(),i.produce(t,o),void(p=!0)}}M[0].end>u&&(u=M[0].end,m=!1)}}function A(l,f,m,u,t){return _.UseOnigurumaFindOptions?{ruleScanner:l.compile(f,m),findOptions:x(u,t)}:{ruleScanner:l.compileAG(f,m,u,t),findOptions:0}}function d(l,f,m,u,t){return _.UseOnigurumaFindOptions?{ruleScanner:l.compileWhile(f,m),findOptions:x(u,t)}:{ruleScanner:l.compileWhileAG(f,m,u,t),findOptions:0}}function x(l,f){let m=0;return l||(m|=1),f||(m|=4),m}function y(l,f,m,u,t,i,c){if(i.length===0)return;const n=f.content,o=Math.min(i.length,c.length),p=[],b=c[0].end;for(let T=0;T<o;T++){const I=i[T];if(I===null)continue;const E=c[T];if(E.length===0)continue;if(E.start>b)break;for(;p.length>0&&p[p.length-1].endPos<=E.start;)t.produceFromScopes(p[p.length-1].scopes,p[p.length-1].endPos),p.pop();if(p.length>0?t.produceFromScopes(p[p.length-1].scopes,E.start):t.produce(u,E.start),I.retokenizeCapturedWithRuleId){const W=I.getName(n,c),F=u.contentNameScopesList.pushAttributed(W,l),G=I.getContentName(n,c),C=F.pushAttributed(G,l),J=u.push(I.retokenizeCapturedWithRuleId,E.start,-1,!1,null,F,C),z=l.createOnigString(n.substring(0,E.end));v(l,z,m&&E.start===0,E.start,J,t,!1,0),r.disposeOnigString(z);continue}const M=I.getName(n,c);if(M!==null){const W=(p.length>0?p[p.length-1].scopes:u.contentNameScopesList).pushAttributed(M,l);p.push(new k(W,E.end))}}for(;p.length>0;)t.produceFromScopes(p[p.length-1].scopes,p[p.length-1].endPos),p.pop()}a._tokenizeString=v;class k{constructor(f,m){this.scopes=f,this.endPos=m}}a.LocalStackElement=k},974:(P,a)=>{function w(L,g){throw new Error("Near offset "+L.pos+": "+g+" ~~~"+L.source.substr(L.pos,50)+"~~~")}Object.defineProperty(a,"__esModule",{value:!0}),a.parseJSON=void 0,a.parseJSON=function(L,g,v){let A=new _(L),d=new r,x=0,y=null,k=[],l=[];function f(){k.push(x),l.push(y)}function m(){x=k.pop(),y=l.pop()}function u(t){w(A,t)}for(;S(A,d);){if(x===0){if(y!==null&&u("too many constructs in root"),d.type===3){y={},v&&(y.$vscodeTextmateLocation=d.toLocation(g)),f(),x=1;continue}if(d.type===2){y=[],f(),x=4;continue}u("unexpected token in root")}if(x===2){if(d.type===5){m();continue}if(d.type===7){x=3;continue}u("expected , or }")}if(x===1||x===3){if(x===1&&d.type===5){m();continue}if(d.type===1){let t=d.value;if(S(A,d)&&d.type===6||u("expected colon"),S(A,d)||u("expected value"),x=2,d.type===1){y[t]=d.value;continue}if(d.type===8){y[t]=null;continue}if(d.type===9){y[t]=!0;continue}if(d.type===10){y[t]=!1;continue}if(d.type===11){y[t]=parseFloat(d.value);continue}if(d.type===2){let i=[];y[t]=i,f(),x=4,y=i;continue}if(d.type===3){let i={};v&&(i.$vscodeTextmateLocation=d.toLocation(g)),y[t]=i,f(),x=1,y=i;continue}}u("unexpected token in dict")}if(x===5){if(d.type===4){m();continue}if(d.type===7){x=6;continue}u("expected , or ]")}if(x===4||x===6){if(x===4&&d.type===4){m();continue}if(x=5,d.type===1){y.push(d.value);continue}if(d.type===8){y.push(null);continue}if(d.type===9){y.push(!0);continue}if(d.type===10){y.push(!1);continue}if(d.type===11){y.push(parseFloat(d.value));continue}if(d.type===2){let t=[];y.push(t),f(),x=4,y=t;continue}if(d.type===3){let t={};v&&(t.$vscodeTextmateLocation=d.toLocation(g)),y.push(t),f(),x=1,y=t;continue}u("unexpected token in array")}u("unknown state")}return l.length!==0&&u("unclosed constructs"),y};class _{constructor(g){this.source=g,this.pos=0,this.len=g.length,this.line=1,this.char=0}}class r{constructor(){this.value=null,this.type=0,this.offset=-1,this.len=-1,this.line=-1,this.char=-1}toLocation(g){return{filename:g,line:this.line,char:this.char}}}function S(L,g){g.value=null,g.type=0,g.offset=-1,g.len=-1,g.line=-1,g.char=-1;let v,A=L.source,d=L.pos,x=L.len,y=L.line,k=L.char;for(;;){if(d>=x)return!1;if(v=A.charCodeAt(d),v!==32&&v!==9&&v!==13){if(v!==10)break;d++,y++,k=0}else d++,k++}if(g.offset=d,g.line=y,g.char=k,v===34){for(g.type=1,d++,k++;;){if(d>=x)return!1;if(v=A.charCodeAt(d),d++,k++,v!==92){if(v===34)break}else d++,k++}g.value=A.substring(g.offset+1,d-1).replace(/\\u([0-9A-Fa-f]{4})/g,(l,f)=>String.fromCodePoint(parseInt(f,16))).replace(/\\(.)/g,(l,f)=>{switch(f){case'"':return'"';case"\\":return"\\";case"/":return"/";case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";default:w(L,"invalid escape sequence")}throw new Error("unreachable")})}else if(v===91)g.type=2,d++,k++;else if(v===123)g.type=3,d++,k++;else if(v===93)g.type=4,d++,k++;else if(v===125)g.type=5,d++,k++;else if(v===58)g.type=6,d++,k++;else if(v===44)g.type=7,d++,k++;else if(v===110){if(g.type=8,d++,k++,v=A.charCodeAt(d),v!==117||(d++,k++,v=A.charCodeAt(d),v!==108)||(d++,k++,v=A.charCodeAt(d),v!==108))return!1;d++,k++}else if(v===116){if(g.type=9,d++,k++,v=A.charCodeAt(d),v!==114||(d++,k++,v=A.charCodeAt(d),v!==117)||(d++,k++,v=A.charCodeAt(d),v!==101))return!1;d++,k++}else if(v===102){if(g.type=10,d++,k++,v=A.charCodeAt(d),v!==97||(d++,k++,v=A.charCodeAt(d),v!==108)||(d++,k++,v=A.charCodeAt(d),v!==115)||(d++,k++,v=A.charCodeAt(d),v!==101))return!1;d++,k++}else for(g.type=11;;){if(d>=x)return!1;if(v=A.charCodeAt(d),!(v===46||v>=48&&v<=57||v===101||v===69||v===45||v===43))break;d++,k++}return g.len=d-g.offset,g.value===null&&(g.value=A.substr(g.offset,g.len)),L.pos=d,L.line=y,L.char=k,!0}},787:function(P,a,w){var _=this&&this.__createBinding||(Object.create?function(d,x,y,k){k===void 0&&(k=y),Object.defineProperty(d,k,{enumerable:!0,get:function(){return x[y]}})}:function(d,x,y,k){k===void 0&&(k=y),d[k]=x[y]}),r=this&&this.__exportStar||function(d,x){for(var y in d)y==="default"||Object.prototype.hasOwnProperty.call(x,y)||_(x,d,y)};Object.defineProperty(a,"__esModule",{value:!0}),a.parseRawGrammar=a.INITIAL=a.Registry=void 0;const S=w(391),L=w(50),g=w(652),v=w(583),A=w(965);r(w(44),a),a.Registry=class{constructor(d){this._options=d,this._syncRegistry=new g.SyncRegistry(v.Theme.createFromRawTheme(d.theme,d.colorMap),d.onigLib),this._ensureGrammarCache=new Map}dispose(){this._syncRegistry.dispose()}setTheme(d,x){this._syncRegistry.setTheme(v.Theme.createFromRawTheme(d,x))}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(d,x,y){return this.loadGrammarWithConfiguration(d,x,{embeddedLanguages:y})}loadGrammarWithConfiguration(d,x,y){return this._loadGrammar(d,x,y.embeddedLanguages,y.tokenTypes,new S.BalancedBracketSelectors(y.balancedBracketSelectors||[],y.unbalancedBracketSelectors||[]))}loadGrammar(d){return this._loadGrammar(d,0,null,null,null)}async _loadGrammar(d,x,y,k,l){const f=new A.ScopeDependencyProcessor(this._syncRegistry,d);for(;f.Q.length>0;)await Promise.all(f.Q.map(m=>this._loadSingleGrammar(m.scopeName))),f.processQueue();return this._grammarForScopeName(d,x,y,k,l)}async _loadSingleGrammar(d){return this._ensureGrammarCache.has(d)||this._ensureGrammarCache.set(d,this._doLoadSingleGrammar(d)),this._ensureGrammarCache.get(d)}async _doLoadSingleGrammar(d){const x=await this._options.loadGrammar(d);if(x){const y=typeof this._options.getInjections=="function"?this._options.getInjections(d):void 0;this._syncRegistry.addGrammar(x,y)}}async addGrammar(d,x=[],y=0,k=null){return this._syncRegistry.addGrammar(d,x),await this._grammarForScopeName(d.scopeName,y,k)}_grammarForScopeName(d,x=0,y=null,k=null,l=null){return this._syncRegistry.grammarForScopeName(d,x,y,k,l)}},a.INITIAL=S.StateStack.NULL,a.parseRawGrammar=L.parseRawGrammar},736:(P,a)=>{function w(_){return!!_&&!!_.match(/[\w\.:]+/)}Object.defineProperty(a,"__esModule",{value:!0}),a.createMatchers=void 0,a.createMatchers=function(_,r){const S=[],L=function(d){let x=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,y=x.exec(d);return{next:()=>{if(!y)return null;const k=y[0];return y=x.exec(d),k}}}(_);let g=L.next();for(;g!==null;){let d=0;if(g.length===2&&g.charAt(1)===":"){switch(g.charAt(0)){case"R":d=1;break;case"L":d=-1;break;default:console.log(`Unknown priority ${g} in scope selector`)}g=L.next()}let x=A();if(S.push({matcher:x,priority:d}),g!==",")break;g=L.next()}return S;function v(){if(g==="-"){g=L.next();const d=v();return x=>!!d&&!d(x)}if(g==="("){g=L.next();const d=function(){const x=[];let y=A();for(;y&&(x.push(y),g==="|"||g===",");){do g=L.next();while(g==="|"||g===",");y=A()}return k=>x.some(l=>l(k))}();return g===")"&&(g=L.next()),d}if(w(g)){const d=[];do d.push(g),g=L.next();while(w(g));return x=>r(d,x)}return null}function A(){const d=[];let x=v();for(;x;)d.push(x),x=v();return y=>d.every(k=>k(y))}}},44:(P,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.disposeOnigString=void 0,a.disposeOnigString=function(w){typeof w.dispose=="function"&&w.dispose()}},50:(P,a,w)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.parseRawGrammar=void 0;const _=w(69),r=w(350),S=w(974);a.parseRawGrammar=function(L,g=null){return g!==null&&/\.json$/.test(g)?(v=L,A=g,r.DebugFlags.InDebugMode?S.parseJSON(v,A,!0):JSON.parse(v)):function(d,x){return r.DebugFlags.InDebugMode?_.parseWithLocation(d,x,"$vscodeTextmateLocation"):_.parsePLIST(d)}(L,g);var v,A}},69:(P,a)=>{function w(_,r,S){const L=_.length;let g=0,v=1,A=0;function d(R){if(S===null)g+=R;else for(;R>0;)_.charCodeAt(g)===10?(g++,v++,A=0):(g++,A++),R--}function x(R){S===null?g=R:d(R-g)}function y(){for(;g<L;){let R=_.charCodeAt(g);if(R!==32&&R!==9&&R!==13&&R!==10)break;d(1)}}function k(R){return _.substr(g,R.length)===R&&(d(R.length),!0)}function l(R){let Q=_.indexOf(R,g);x(Q!==-1?Q+R.length:L)}function f(R){let Q=_.indexOf(R,g);if(Q!==-1){let U=_.substring(g,Q);return x(Q+R.length),U}{let U=_.substr(g);return x(L),U}}L>0&&_.charCodeAt(0)===65279&&(g=1);let m=0,u=null,t=[],i=[],c=null;function n(R,Q){t.push(m),i.push(u),m=R,u=Q}function o(){if(t.length===0)return p("illegal state stack");m=t.pop(),u=i.pop()}function p(R){throw new Error("Near offset "+g+": "+R+" ~~~"+_.substr(g,50)+"~~~")}const b=function(){if(c===null)return p("missing <key>");let R={};S!==null&&(R[S]={filename:r,line:v,char:A}),u[c]=R,c=null,n(1,R)},T=function(){if(c===null)return p("missing <key>");let R=[];u[c]=R,c=null,n(2,R)},I=function(){let R={};S!==null&&(R[S]={filename:r,line:v,char:A}),u.push(R),n(1,R)},E=function(){let R=[];u.push(R),n(2,R)};function M(){if(m!==1)return p("unexpected </dict>");o()}function W(){return m===1||m!==2?p("unexpected </array>"):void o()}function F(R){if(m===1){if(c===null)return p("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function G(R){if(isNaN(R))return p("cannot parse float");if(m===1){if(c===null)return p("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function C(R){if(isNaN(R))return p("cannot parse integer");if(m===1){if(c===null)return p("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function J(R){if(m===1){if(c===null)return p("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function z(R){if(m===1){if(c===null)return p("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function $(R){if(m===1){if(c===null)return p("missing <key>");u[c]=R,c=null}else m===2?u.push(R):u=R}function D(){let R=f(">"),Q=!1;return R.charCodeAt(R.length-1)===47&&(Q=!0,R=R.substring(0,R.length-1)),{name:R.trim(),isClosed:Q}}function q(R){if(R.isClosed)return"";let Q=f("</");return l(">"),Q.replace(/&#([0-9]+);/g,function(U,ne){return String.fromCodePoint(parseInt(ne,10))}).replace(/&#x([0-9a-f]+);/g,function(U,ne){return String.fromCodePoint(parseInt(ne,16))}).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g,function(U){switch(U){case"&amp;":return"&";case"&lt;":return"<";case"&gt;":return">";case"&quot;":return'"';case"&apos;":return"'"}return U})}for(;g<L&&(y(),!(g>=L));){const R=_.charCodeAt(g);if(d(1),R!==60)return p("expected <");if(g>=L)return p("unexpected end of input");const Q=_.charCodeAt(g);if(Q===63){d(1),l("?>");continue}if(Q===33){if(d(1),k("--")){l("-->");continue}l(">");continue}if(Q===47){if(d(1),y(),k("plist")){l(">");continue}if(k("dict")){l(">"),M();continue}if(k("array")){l(">"),W();continue}return p("unexpected closed tag")}let U=D();switch(U.name){case"dict":m===1?b():m===2?I():(u={},S!==null&&(u[S]={filename:r,line:v,char:A}),n(1,u)),U.isClosed&&M();continue;case"array":m===1?T():m===2?E():(u=[],n(2,u)),U.isClosed&&W();continue;case"key":ie=q(U),m!==1?p("unexpected <key>"):c!==null?p("too many <key>"):c=ie;continue;case"string":F(q(U));continue;case"real":G(parseFloat(q(U)));continue;case"integer":C(parseInt(q(U),10));continue;case"date":J(new Date(q(U)));continue;case"data":z(q(U));continue;case"true":q(U),$(!0);continue;case"false":q(U),$(!1);continue}if(!/^plist/.test(U.name))return p("unexpected opened tag "+U.name)}var ie;return u}Object.defineProperty(a,"__esModule",{value:!0}),a.parsePLIST=a.parseWithLocation=void 0,a.parseWithLocation=function(_,r,S){return w(_,r,S)},a.parsePLIST=function(_){return w(_,null,null)}},652:(P,a,w)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.SyncRegistry=void 0;const _=w(391);a.SyncRegistry=class{constructor(r,S){this._onigLibPromise=S,this._grammars=new Map,this._rawGrammars=new Map,this._injectionGrammars=new Map,this._theme=r}dispose(){for(const r of this._grammars.values())r.dispose()}setTheme(r){this._theme=r}getColorMap(){return this._theme.getColorMap()}addGrammar(r,S){this._rawGrammars.set(r.scopeName,r),S&&this._injectionGrammars.set(r.scopeName,S)}lookup(r){return this._rawGrammars.get(r)}injections(r){return this._injectionGrammars.get(r)}getDefaults(){return this._theme.getDefaults()}themeMatch(r){return this._theme.match(r)}async grammarForScopeName(r,S,L,g,v){if(!this._grammars.has(r)){let A=this._rawGrammars.get(r);if(!A)return null;this._grammars.set(r,_.createGrammar(r,A,S,L,g,v,this,await this._onigLibPromise))}return this._grammars.get(r)}}},792:(P,a,w)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.CompiledRule=a.RegExpSourceList=a.RegExpSource=a.RuleFactory=a.BeginWhileRule=a.BeginEndRule=a.IncludeOnlyRule=a.MatchRule=a.CaptureRule=a.Rule=a.ruleIdToNumber=a.ruleIdFromNumber=a.whileRuleId=a.endRuleId=void 0;const _=w(878),r=w(965),S=/\\(\d+)/,L=/\\(\d+)/g;a.endRuleId=-1,a.whileRuleId=-2,a.ruleIdFromNumber=function(u){return u},a.ruleIdToNumber=function(u){return u};class g{constructor(t,i,c,n){this.$location=t,this.id=i,this._name=c||null,this._nameIsCapturing=_.RegexSource.hasCaptures(this._name),this._contentName=n||null,this._contentNameIsCapturing=_.RegexSource.hasCaptures(this._contentName)}get debugName(){const t=this.$location?`${_.basename(this.$location.filename)}:${this.$location.line}`:"unknown";return`${this.constructor.name}#${this.id} @ ${t}`}getName(t,i){return this._nameIsCapturing&&this._name!==null&&t!==null&&i!==null?_.RegexSource.replaceCaptures(this._name,t,i):this._name}getContentName(t,i){return this._contentNameIsCapturing&&this._contentName!==null?_.RegexSource.replaceCaptures(this._contentName,t,i):this._contentName}}a.Rule=g;class v extends g{constructor(t,i,c,n,o){super(t,i,c,n),this.retokenizeCapturedWithRuleId=o}dispose(){}collectPatterns(t,i){throw new Error("Not supported!")}compile(t,i){throw new Error("Not supported!")}compileAG(t,i,c,n){throw new Error("Not supported!")}}a.CaptureRule=v;class A extends g{constructor(t,i,c,n,o){super(t,i,c,null),this._match=new l(n,this.id),this.captures=o,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugMatchRegExp(){return`${this._match.source}`}collectPatterns(t,i){i.push(this._match)}compile(t,i){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,i,c,n){return this._getCachedCompiledPatterns(t).compileAG(t,c,n)}_getCachedCompiledPatterns(t){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new f,this.collectPatterns(t,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}}a.MatchRule=A;class d extends g{constructor(t,i,c,n,o){super(t,i,c,n),this.patterns=o.patterns,this.hasMissingPatterns=o.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}collectPatterns(t,i){for(const c of this.patterns)t.getRule(c).collectPatterns(t,i)}compile(t,i){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,i,c,n){return this._getCachedCompiledPatterns(t).compileAG(t,c,n)}_getCachedCompiledPatterns(t){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new f,this.collectPatterns(t,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}}a.IncludeOnlyRule=d;class x extends g{constructor(t,i,c,n,o,p,b,T,I,E){super(t,i,c,n),this._begin=new l(o,this.id),this.beginCaptures=p,this._end=new l(b||"￿",-1),this.endHasBackReferences=this._end.hasBackReferences,this.endCaptures=T,this.applyEndPatternLast=I||!1,this.patterns=E.patterns,this.hasMissingPatterns=E.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugEndRegExp(){return`${this._end.source}`}getEndWithResolvedBackReferences(t,i){return this._end.resolveBackReferences(t,i)}collectPatterns(t,i){i.push(this._begin)}compile(t,i){return this._getCachedCompiledPatterns(t,i).compile(t)}compileAG(t,i,c,n){return this._getCachedCompiledPatterns(t,i).compileAG(t,c,n)}_getCachedCompiledPatterns(t,i){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new f;for(const c of this.patterns)t.getRule(c).collectPatterns(t,this._cachedCompiledPatterns);this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)}return this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,i):this._cachedCompiledPatterns.setSource(0,i)),this._cachedCompiledPatterns}}a.BeginEndRule=x;class y extends g{constructor(t,i,c,n,o,p,b,T,I){super(t,i,c,n),this._begin=new l(o,this.id),this.beginCaptures=p,this.whileCaptures=T,this._while=new l(b,a.whileRuleId),this.whileHasBackReferences=this._while.hasBackReferences,this.patterns=I.patterns,this.hasMissingPatterns=I.hasMissingPatterns,this._cachedCompiledPatterns=null,this._cachedCompiledWhilePatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugWhileRegExp(){return`${this._while.source}`}getWhileWithResolvedBackReferences(t,i){return this._while.resolveBackReferences(t,i)}collectPatterns(t,i){i.push(this._begin)}compile(t,i){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,i,c,n){return this._getCachedCompiledPatterns(t).compileAG(t,c,n)}_getCachedCompiledPatterns(t){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new f;for(const i of this.patterns)t.getRule(i).collectPatterns(t,this._cachedCompiledPatterns)}return this._cachedCompiledPatterns}compileWhile(t,i){return this._getCachedCompiledWhilePatterns(t,i).compile(t)}compileWhileAG(t,i,c,n){return this._getCachedCompiledWhilePatterns(t,i).compileAG(t,c,n)}_getCachedCompiledWhilePatterns(t,i){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new f,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,i||"￿"),this._cachedCompiledWhilePatterns}}a.BeginWhileRule=y;class k{static createCaptureRule(t,i,c,n,o){return t.registerRule(p=>new v(i,p,c,n,o))}static getCompiledRuleId(t,i,c){return t.id||i.registerRule(n=>{if(t.id=n,t.match)return new A(t.$vscodeTextmateLocation,t.id,t.name,t.match,k._compileCaptures(t.captures,i,c));if(t.begin===void 0){t.repository&&(c=_.mergeObjects({},c,t.repository));let o=t.patterns;return o===void 0&&t.include&&(o=[{include:t.include}]),new d(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,k._compilePatterns(o,i,c))}return t.while?new y(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,k._compileCaptures(t.beginCaptures||t.captures,i,c),t.while,k._compileCaptures(t.whileCaptures||t.captures,i,c),k._compilePatterns(t.patterns,i,c)):new x(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,k._compileCaptures(t.beginCaptures||t.captures,i,c),t.end,k._compileCaptures(t.endCaptures||t.captures,i,c),t.applyEndPatternLast,k._compilePatterns(t.patterns,i,c))}),t.id}static _compileCaptures(t,i,c){let n=[];if(t){let o=0;for(const p in t){if(p==="$vscodeTextmateLocation")continue;const b=parseInt(p,10);b>o&&(o=b)}for(let p=0;p<=o;p++)n[p]=null;for(const p in t){if(p==="$vscodeTextmateLocation")continue;const b=parseInt(p,10);let T=0;t[p].patterns&&(T=k.getCompiledRuleId(t[p],i,c)),n[b]=k.createCaptureRule(i,t[p].$vscodeTextmateLocation,t[p].name,t[p].contentName,T)}}return n}static _compilePatterns(t,i,c){let n=[];if(t)for(let o=0,p=t.length;o<p;o++){const b=t[o];let T=-1;if(b.include){const I=r.parseInclude(b.include);switch(I.kind){case 0:case 1:T=k.getCompiledRuleId(c[b.include],i,c);break;case 2:let E=c[I.ruleName];E&&(T=k.getCompiledRuleId(E,i,c));break;case 3:case 4:const M=I.scopeName,W=I.kind===4?I.ruleName:null,F=i.getExternalGrammar(M,c);if(F)if(W){let G=F.repository[W];G&&(T=k.getCompiledRuleId(G,i,F.repository))}else T=k.getCompiledRuleId(F.repository.$self,i,F.repository)}}else T=k.getCompiledRuleId(b,i,c);if(T!==-1){const I=i.getRule(T);let E=!1;if((I instanceof d||I instanceof x||I instanceof y)&&I.hasMissingPatterns&&I.patterns.length===0&&(E=!0),E)continue;n.push(T)}}return{patterns:n,hasMissingPatterns:(t?t.length:0)!==n.length}}}a.RuleFactory=k;class l{constructor(t,i){if(t){const c=t.length;let n=0,o=[],p=!1;for(let b=0;b<c;b++)if(t.charAt(b)==="\\"&&b+1<c){const T=t.charAt(b+1);T==="z"?(o.push(t.substring(n,b)),o.push("$(?!\\n)(?<!\\n)"),n=b+2):T!=="A"&&T!=="G"||(p=!0),b++}this.hasAnchor=p,n===0?this.source=t:(o.push(t.substring(n,c)),this.source=o.join(""))}else this.hasAnchor=!1,this.source=t;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=i,this.hasBackReferences=S.test(this.source)}clone(){return new l(this.source,this.ruleId)}setSource(t){this.source!==t&&(this.source=t,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()))}resolveBackReferences(t,i){let c=i.map(n=>t.substring(n.start,n.end));return L.lastIndex=0,this.source.replace(L,(n,o)=>_.escapeRegExpCharacters(c[parseInt(o,10)]||""))}_buildAnchorCache(){let t,i,c,n,o=[],p=[],b=[],T=[];for(t=0,i=this.source.length;t<i;t++)c=this.source.charAt(t),o[t]=c,p[t]=c,b[t]=c,T[t]=c,c==="\\"&&t+1<i&&(n=this.source.charAt(t+1),n==="A"?(o[t+1]="￿",p[t+1]="￿",b[t+1]="A",T[t+1]="A"):n==="G"?(o[t+1]="￿",p[t+1]="G",b[t+1]="￿",T[t+1]="G"):(o[t+1]=n,p[t+1]=n,b[t+1]=n,T[t+1]=n),t++);return{A0_G0:o.join(""),A0_G1:p.join(""),A1_G0:b.join(""),A1_G1:T.join("")}}resolveAnchors(t,i){return this.hasAnchor&&this._anchorCache?t?i?this._anchorCache.A1_G1:this._anchorCache.A1_G0:i?this._anchorCache.A0_G1:this._anchorCache.A0_G0:this.source}}a.RegExpSource=l;class f{constructor(){this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null}}dispose(){this._disposeCaches()}_disposeCaches(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null)}push(t){this._items.push(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}unshift(t){this._items.unshift(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}length(){return this._items.length}setSource(t,i){this._items[t].source!==i&&(this._disposeCaches(),this._items[t].setSource(i))}compile(t){if(!this._cached){let i=this._items.map(c=>c.source);this._cached=new m(t,i,this._items.map(c=>c.ruleId))}return this._cached}compileAG(t,i,c){return this._hasAnchors?i?c?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(t,i,c)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(t,i,c)),this._anchorCache.A1_G0):c?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(t,i,c)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(t,i,c)),this._anchorCache.A0_G0):this.compile(t)}_resolveAnchors(t,i,c){let n=this._items.map(o=>o.resolveAnchors(i,c));return new m(t,n,this._items.map(o=>o.ruleId))}}a.RegExpSourceList=f;class m{constructor(t,i,c){this.regExps=i,this.rules=c,this.scanner=t.createOnigScanner(i)}dispose(){typeof this.scanner.dispose=="function"&&this.scanner.dispose()}toString(){const t=[];for(let i=0,c=this.rules.length;i<c;i++)t.push("   - "+this.rules[i]+": "+this.regExps[i]);return t.join(`
`)}findNextMatchSync(t,i,c){const n=this.scanner.findNextMatchSync(t,i,c);return n?{ruleId:this.rules[n.index],captureIndices:n.captureIndices}:null}}a.CompiledRule=m},583:(P,a,w)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ThemeTrieElement=a.ThemeTrieElementRule=a.ColorMap=a.fontStyleToString=a.ParsedThemeRule=a.parseTheme=a.StyleAttributes=a.ScopeStack=a.Theme=void 0;const _=w(878);class r{constructor(l,f,m){this._colorMap=l,this._defaults=f,this._root=m,this._cachedMatchRoot=new _.CachedFn(u=>this._root.match(u))}static createFromRawTheme(l,f){return this.createFromParsedTheme(v(l),f)}static createFromParsedTheme(l,f){return function(m,u){m.sort((b,T)=>{let I=_.strcmp(b.scope,T.scope);return I!==0?I:(I=_.strArrCmp(b.parentScopes,T.parentScopes),I!==0?I:b.index-T.index)});let t=0,i="#000000",c="#ffffff";for(;m.length>=1&&m[0].scope==="";){let b=m.shift();b.fontStyle!==-1&&(t=b.fontStyle),b.foreground!==null&&(i=b.foreground),b.background!==null&&(c=b.background)}let n=new d(u),o=new g(t,n.getId(i),n.getId(c)),p=new y(new x(0,null,-1,0,0),[]);for(let b=0,T=m.length;b<T;b++){let I=m[b];p.insert(0,I.scope,I.parentScopes,I.fontStyle,n.getId(I.foreground),n.getId(I.background))}return new r(n,o,p)}(l,f)}getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(l){if(l===null)return this._defaults;const f=l.scopeName,m=this._cachedMatchRoot.get(f).find(u=>function(t,i){if(i===null)return!0;let c=0,n=i[c];for(;t;){if(L(t.scopeName,n)){if(c++,c===i.length)return!0;n=i[c]}t=t.parent}return!1}(l.parent,u.parentScopes));return m?new g(m.fontStyle,m.foreground,m.background):null}}a.Theme=r;class S{constructor(l,f){this.parent=l,this.scopeName=f}static from(...l){let f=null;for(let m=0;m<l.length;m++)f=new S(f,l[m]);return f}push(l){return new S(this,l)}getSegments(){let l=this;const f=[];for(;l;)f.push(l.scopeName),l=l.parent;return f.reverse(),f}toString(){return this.getSegments().join(" ")}}function L(k,l){return l===k||k.startsWith(l)&&k[l.length]==="."}a.ScopeStack=S;class g{constructor(l,f,m){this.fontStyle=l,this.foregroundId=f,this.backgroundId=m}}function v(k){if(!k)return[];if(!k.settings||!Array.isArray(k.settings))return[];let l=k.settings,f=[],m=0;for(let u=0,t=l.length;u<t;u++){let i,c=l[u];if(!c.settings)continue;if(typeof c.scope=="string"){let b=c.scope;b=b.replace(/^[,]+/,""),b=b.replace(/[,]+$/,""),i=b.split(",")}else i=Array.isArray(c.scope)?c.scope:[""];let n=-1;if(typeof c.settings.fontStyle=="string"){n=0;let b=c.settings.fontStyle.split(" ");for(let T=0,I=b.length;T<I;T++)switch(b[T]){case"italic":n|=1;break;case"bold":n|=2;break;case"underline":n|=4;break;case"strikethrough":n|=8}}let o=null;typeof c.settings.foreground=="string"&&_.isValidHexColor(c.settings.foreground)&&(o=c.settings.foreground);let p=null;typeof c.settings.background=="string"&&_.isValidHexColor(c.settings.background)&&(p=c.settings.background);for(let b=0,T=i.length;b<T;b++){let I=i[b].trim().split(" "),E=I[I.length-1],M=null;I.length>1&&(M=I.slice(0,I.length-1),M.reverse()),f[m++]=new A(E,M,u,n,o,p)}}return f}a.StyleAttributes=g,a.parseTheme=v;class A{constructor(l,f,m,u,t,i){this.scope=l,this.parentScopes=f,this.index=m,this.fontStyle=u,this.foreground=t,this.background=i}}a.ParsedThemeRule=A,a.fontStyleToString=function(k){if(k===-1)return"not set";let l="";return 1&k&&(l+="italic "),2&k&&(l+="bold "),4&k&&(l+="underline "),8&k&&(l+="strikethrough "),l===""&&(l="none"),l.trim()};class d{constructor(l){if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(l)){this._isFrozen=!0;for(let f=0,m=l.length;f<m;f++)this._color2id[l[f]]=f,this._id2color[f]=l[f]}else this._isFrozen=!1}getId(l){if(l===null)return 0;l=l.toUpperCase();let f=this._color2id[l];if(f)return f;if(this._isFrozen)throw new Error(`Missing color in color map - ${l}`);return f=++this._lastColorId,this._color2id[l]=f,this._id2color[f]=l,f}getColorMap(){return this._id2color.slice(0)}}a.ColorMap=d;class x{constructor(l,f,m,u,t){this.scopeDepth=l,this.parentScopes=f,this.fontStyle=m,this.foreground=u,this.background=t}clone(){return new x(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(l){let f=[];for(let m=0,u=l.length;m<u;m++)f[m]=l[m].clone();return f}acceptOverwrite(l,f,m,u){this.scopeDepth>l?console.log("how did this happen?"):this.scopeDepth=l,f!==-1&&(this.fontStyle=f),m!==0&&(this.foreground=m),u!==0&&(this.background=u)}}a.ThemeTrieElementRule=x;class y{constructor(l,f=[],m={}){this._mainRule=l,this._children=m,this._rulesWithParentScopes=f}static _sortBySpecificity(l){return l.length===1||l.sort(this._cmpBySpecificity),l}static _cmpBySpecificity(l,f){if(l.scopeDepth===f.scopeDepth){const m=l.parentScopes,u=f.parentScopes;let t=m===null?0:m.length,i=u===null?0:u.length;if(t===i)for(let c=0;c<t;c++){const n=m[c].length,o=u[c].length;if(n!==o)return o-n}return i-t}return f.scopeDepth-l.scopeDepth}match(l){if(l==="")return y._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));let f,m,u=l.indexOf(".");return u===-1?(f=l,m=""):(f=l.substring(0,u),m=l.substring(u+1)),this._children.hasOwnProperty(f)?this._children[f].match(m):y._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes))}insert(l,f,m,u,t,i){if(f==="")return void this._doInsertHere(l,m,u,t,i);let c,n,o,p=f.indexOf(".");p===-1?(c=f,n=""):(c=f.substring(0,p),n=f.substring(p+1)),this._children.hasOwnProperty(c)?o=this._children[c]:(o=new y(this._mainRule.clone(),x.cloneArr(this._rulesWithParentScopes)),this._children[c]=o),o.insert(l+1,n,m,u,t,i)}_doInsertHere(l,f,m,u,t){if(f!==null){for(let i=0,c=this._rulesWithParentScopes.length;i<c;i++){let n=this._rulesWithParentScopes[i];if(_.strArrCmp(n.parentScopes,f)===0)return void n.acceptOverwrite(l,m,u,t)}m===-1&&(m=this._mainRule.fontStyle),u===0&&(u=this._mainRule.foreground),t===0&&(t=this._mainRule.background),this._rulesWithParentScopes.push(new x(l,f,m,u,t))}else this._mainRule.acceptOverwrite(l,m,u,t)}}a.ThemeTrieElement=y},878:(P,a)=>{function w(S){return Array.isArray(S)?function(L){let g=[];for(let v=0,A=L.length;v<A;v++)g[v]=w(L[v]);return g}(S):typeof S=="object"?function(L){let g={};for(let v in L)g[v]=w(L[v]);return g}(S):S}Object.defineProperty(a,"__esModule",{value:!0}),a.performanceNow=a.CachedFn=a.escapeRegExpCharacters=a.isValidHexColor=a.strArrCmp=a.strcmp=a.RegexSource=a.basename=a.mergeObjects=a.clone=void 0,a.clone=function(S){return w(S)},a.mergeObjects=function(S,...L){return L.forEach(g=>{for(let v in g)S[v]=g[v]}),S},a.basename=function S(L){const g=~L.lastIndexOf("/")||~L.lastIndexOf("\\");return g===0?L:~g==L.length-1?S(L.substring(0,L.length-1)):L.substr(1+~g)};let _=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;function r(S,L){return S<L?-1:S>L?1:0}a.RegexSource=class{static hasCaptures(S){return S!==null&&(_.lastIndex=0,_.test(S))}static replaceCaptures(S,L,g){return S.replace(_,(v,A,d,x)=>{let y=g[parseInt(A||d,10)];if(!y)return v;{let k=L.substring(y.start,y.end);for(;k[0]===".";)k=k.substring(1);switch(x){case"downcase":return k.toLowerCase();case"upcase":return k.toUpperCase();default:return k}}})}},a.strcmp=r,a.strArrCmp=function(S,L){if(S===null&&L===null)return 0;if(!S)return-1;if(!L)return 1;let g=S.length,v=L.length;if(g===v){for(let A=0;A<g;A++){let d=r(S[A],L[A]);if(d!==0)return d}return 0}return g-v},a.isValidHexColor=function(S){return!!(/^#[0-9a-f]{6}$/i.test(S)||/^#[0-9a-f]{8}$/i.test(S)||/^#[0-9a-f]{3}$/i.test(S)||/^#[0-9a-f]{4}$/i.test(S))},a.escapeRegExpCharacters=function(S){return S.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")},a.CachedFn=class{constructor(S){this.fn=S,this.cache=new Map}get(S){if(this.cache.has(S))return this.cache.get(S);const L=this.fn(S);return this.cache.set(S,L),L}},a.performanceNow=typeof performance>"u"?function(){return Date.now()}:function(){return performance.now()}}},j={};return function P(a){var w=j[a];if(w!==void 0)return w.exports;var _=j[a]={exports:{}};return s[a].call(_.exports,_,_.exports,P),_.exports}(787)})()})})(Ue);var We=Ue.exports;const ve=[{id:"abap",scopeName:"source.abap",path:"abap.tmLanguage.json",displayName:"ABAP",samplePath:"abap.sample"},{id:"actionscript-3",scopeName:"source.actionscript.3",path:"actionscript-3.tmLanguage.json",displayName:"ActionScript",samplePath:"actionscript-3.sample"},{id:"ada",scopeName:"source.ada",path:"ada.tmLanguage.json",displayName:"Ada",samplePath:"ada.sample"},{id:"apache",scopeName:"source.apacheconf",path:"apache.tmLanguage.json",displayName:"Apache Conf",samplePath:"apache.sample"},{id:"apex",scopeName:"source.apex",path:"apex.tmLanguage.json",displayName:"Apex",samplePath:"apex.sample"},{id:"apl",scopeName:"source.apl",path:"apl.tmLanguage.json",displayName:"APL",samplePath:"apl.sample",embeddedLangs:["html","xml","css","javascript","json"]},{id:"applescript",scopeName:"source.applescript",path:"applescript.tmLanguage.json",displayName:"AppleScript",samplePath:"applescript.sample"},{id:"ara",scopeName:"source.ara",path:"ara.tmLanguage.json",displayName:"Ara",samplePath:"ara.sample"},{id:"asm",scopeName:"source.asm.x86_64",path:"asm.tmLanguage.json",displayName:"Assembly",samplePath:"asm.sample"},{id:"astro",scopeName:"source.astro",path:"astro.tmLanguage.json",displayName:"Astro",samplePath:"astro.sample",embeddedLangs:["json","javascript","typescript","stylus","sass","css","scss","less","postcss","tsx"]},{id:"awk",scopeName:"source.awk",path:"awk.tmLanguage.json",displayName:"AWK",samplePath:"awk.sample"},{id:"ballerina",scopeName:"source.ballerina",path:"ballerina.tmLanguage.json",displayName:"Ballerina",samplePath:"ballerina.sample"},{id:"bat",scopeName:"source.batchfile",path:"bat.tmLanguage.json",displayName:"Batch",samplePath:"bat.sample",aliases:["batch"]},{id:"beancount",scopeName:"text.beancount",path:"beancount.tmLanguage.json",displayName:"Beancount",samplePath:"beancount.sample"},{id:"berry",scopeName:"source.berry",path:"berry.tmLanguage.json",displayName:"Berry",samplePath:"berry.sample",aliases:["be"]},{id:"bibtex",scopeName:"text.bibtex",path:"bibtex.tmLanguage.json",displayName:"BibTeX",samplePath:"bibtex.sample"},{id:"bicep",scopeName:"source.bicep",path:"bicep.tmLanguage.json",displayName:"Bicep",samplePath:"bicep.sample"},{id:"blade",scopeName:"text.html.php.blade",path:"blade.tmLanguage.json",displayName:"Blade",samplePath:"blade.sample",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"c",scopeName:"source.c",path:"c.tmLanguage.json",displayName:"C",samplePath:"c.sample"},{id:"cadence",scopeName:"source.cadence",path:"cadence.tmLanguage.json",displayName:"Cadence",samplePath:"cadence.sample",aliases:["cdc"]},{id:"clarity",scopeName:"source.clar",path:"clarity.tmLanguage.json",displayName:"Clarity",samplePath:"clarity.sample"},{id:"clojure",scopeName:"source.clojure",path:"clojure.tmLanguage.json",displayName:"Clojure",samplePath:"clojure.sample",aliases:["clj"]},{id:"cmake",scopeName:"source.cmake",path:"cmake.tmLanguage.json",displayName:"CMake",samplePath:"cmake.sample"},{id:"cobol",scopeName:"source.cobol",path:"cobol.tmLanguage.json",displayName:"COBOL",samplePath:"cobol.sample",embeddedLangs:["sql","html","java"]},{id:"codeql",scopeName:"source.ql",path:"codeql.tmLanguage.json",displayName:"CodeQL",samplePath:"codeql.sample",aliases:["ql"]},{id:"coffee",scopeName:"source.coffee",path:"coffee.tmLanguage.json",displayName:"CoffeeScript",samplePath:"coffee.sample",embeddedLangs:["javascript"]},{id:"cpp",scopeName:"source.cpp",path:"cpp.tmLanguage.json",displayName:"C++",samplePath:"cpp.sample",aliases:["c++"],embeddedLangs:["glsl","sql"]},{id:"crystal",scopeName:"source.crystal",path:"crystal.tmLanguage.json",displayName:"Crystal",samplePath:"crystal.sample",embeddedLangs:["html","sql","css","c","javascript","shellscript"]},{id:"csharp",scopeName:"source.cs",path:"csharp.tmLanguage.json",displayName:"C#",samplePath:"csharp.sample",aliases:["c#","cs"]},{id:"css",scopeName:"source.css",path:"css.tmLanguage.json",displayName:"CSS",samplePath:"css.sample"},{id:"csv",scopeName:"text.csv",path:"csv.tmLanguage.json",displayName:"csv syntax",samplePath:"csv.sample"},{id:"cue",scopeName:"source.cue",path:"cue.tmLanguage.json",displayName:"CUE",samplePath:"cue.sample"},{id:"cypher",scopeName:"source.cypher",path:"cypher.tmLanguage.json",displayName:"Cypher",samplePath:"cypher.sample",aliases:["cql"]},{id:"d",scopeName:"source.d",path:"d.tmLanguage.json",displayName:"D",samplePath:"d.sample"},{id:"dart",scopeName:"source.dart",path:"dart.tmLanguage.json",displayName:"Dart",samplePath:"dart.sample"},{id:"dax",scopeName:"source.dax",path:"dax.tmLanguage.json",displayName:"DAX",samplePath:"dax.sample"},{id:"diff",scopeName:"source.diff",path:"diff.tmLanguage.json",displayName:"Diff",samplePath:"diff.sample"},{id:"docker",scopeName:"source.dockerfile",path:"docker.tmLanguage.json",displayName:"Docker",samplePath:"docker.sample",aliases:["dockerfile"]},{id:"dream-maker",scopeName:"source.dm",path:"dream-maker.tmLanguage.json",displayName:"Dream Maker",samplePath:"dream-maker.sample"},{id:"elixir",scopeName:"source.elixir",path:"elixir.tmLanguage.json",displayName:"Elixir",samplePath:"elixir.sample",embeddedLangs:["html"]},{id:"elm",scopeName:"source.elm",path:"elm.tmLanguage.json",displayName:"Elm",samplePath:"elm.sample",embeddedLangs:["glsl"]},{id:"erb",scopeName:"text.html.erb",path:"erb.tmLanguage.json",displayName:"ERB",samplePath:"erb.sample",embeddedLangs:["html","ruby"]},{id:"erlang",scopeName:"source.erlang",path:"erlang.tmLanguage.json",displayName:"Erlang",samplePath:"erlang.sample",aliases:["erl"]},{id:"fish",scopeName:"source.fish",path:"fish.tmLanguage.json",displayName:"Fish",samplePath:"fish.sample"},{id:"fsharp",scopeName:"source.fsharp",path:"fsharp.tmLanguage.json",displayName:"F#",samplePath:"fsharp.sample",aliases:["f#","fs"],embeddedLangs:["markdown"]},{id:"gdresource",scopeName:"source.gdresource",path:"gdresource.tmLanguage.json",displayName:"GDResource",samplePath:"gdresource.sample",embeddedLangs:["gdshader","gdscript"]},{id:"gdscript",scopeName:"source.gdscript",path:"gdscript.tmLanguage.json",displayName:"GDScript",samplePath:"gdscript.sample"},{id:"gdshader",scopeName:"source.gdshader",path:"gdshader.tmLanguage.json",displayName:"GDShader",samplePath:"gdshader.sample"},{id:"gherkin",scopeName:"text.gherkin.feature",path:"gherkin.tmLanguage.json",displayName:"Gherkin",samplePath:"gherkin.sample"},{id:"git-commit",scopeName:"text.git-commit",path:"git-commit.tmLanguage.json",displayName:"Git Commit Message",embeddedLangs:["diff"]},{id:"git-rebase",scopeName:"text.git-rebase",path:"git-rebase.tmLanguage.json",displayName:"Git Rebase Message",embeddedLangs:["shellscript"]},{id:"glimmer-js",scopeName:"source.gjs",path:"glimmer-js.tmLanguage.json",displayName:"Glimmer JS",aliases:["gjs"],embeddedLangs:["javascript","handlebars"]},{id:"glimmer-ts",scopeName:"source.gts",path:"glimmer-ts.tmLanguage.json",displayName:"Glimmer TS",aliases:["gts"],embeddedLangs:["typescript","handlebars"]},{id:"glsl",scopeName:"source.glsl",path:"glsl.tmLanguage.json",displayName:"GLSL",samplePath:"glsl.sample",embeddedLangs:["c"]},{id:"gnuplot",scopeName:"source.gnuplot",path:"gnuplot.tmLanguage.json",displayName:"Gnuplot",samplePath:"gnuplot.sample"},{id:"go",scopeName:"source.go",path:"go.tmLanguage.json",displayName:"Go",samplePath:"go.sample"},{id:"graphql",scopeName:"source.graphql",path:"graphql.tmLanguage.json",displayName:"GraphQL",samplePath:"graphql.sample",aliases:["gql"],embeddedLangs:["javascript","typescript","jsx","tsx"]},{id:"groovy",scopeName:"source.groovy",path:"groovy.tmLanguage.json",displayName:"Groovy",samplePath:"groovy.sample"},{id:"hack",scopeName:"source.hack",path:"hack.tmLanguage.json",displayName:"Hack",samplePath:"hack.sample",embeddedLangs:["html","sql"]},{id:"haml",scopeName:"text.haml",path:"haml.tmLanguage.json",displayName:"Ruby Haml",samplePath:"haml.sample",embeddedLangs:["ruby","javascript","sass","coffee","markdown","css"]},{id:"handlebars",scopeName:"text.html.handlebars",path:"handlebars.tmLanguage.json",displayName:"Handlebars",samplePath:"handlebars.sample",aliases:["hbs"],embeddedLangs:["html","css","javascript","yaml"]},{id:"haskell",scopeName:"source.haskell",path:"haskell.tmLanguage.json",displayName:"Haskell",samplePath:"haskell.sample",aliases:["hs"]},{id:"hcl",scopeName:"source.hcl",path:"hcl.tmLanguage.json",displayName:"HashiCorp HCL",samplePath:"hcl.sample"},{id:"hjson",scopeName:"source.hjson",path:"hjson.tmLanguage.json",displayName:"Hjson",samplePath:"hjson.sample"},{id:"hlsl",scopeName:"source.hlsl",path:"hlsl.tmLanguage.json",displayName:"HLSL",samplePath:"hlsl.sample"},{id:"html",scopeName:"text.html.basic",path:"html.tmLanguage.json",displayName:"HTML",samplePath:"html.sample",embeddedLangs:["javascript","css"]},{id:"http",scopeName:"source.http",path:"http.tmLanguage.json",displayName:"HTTP",samplePath:"http.sample",embeddedLangs:["shellscript","json","xml","graphql"]},{id:"imba",scopeName:"source.imba",path:"imba.tmLanguage.json",displayName:"Imba",samplePath:"imba.sample"},{id:"ini",scopeName:"source.ini",path:"ini.tmLanguage.json",displayName:"INI",samplePath:"ini.sample",aliases:["properties"]},{id:"java",scopeName:"source.java",path:"java.tmLanguage.json",displayName:"Java",samplePath:"java.sample"},{id:"javascript",scopeName:"source.js",path:"javascript.tmLanguage.json",displayName:"JavaScript",samplePath:"javascript.sample",aliases:["js"]},{id:"jinja-html",scopeName:"text.html.jinja",path:"jinja-html.tmLanguage.json",displayName:"Jinja",samplePath:"jinja-html.sample",embeddedLangs:["html"]},{id:"jison",scopeName:"source.jison",path:"jison.tmLanguage.json",displayName:"Jison",samplePath:"jison.sample",embeddedLangs:["javascript"]},{id:"json",scopeName:"source.json",path:"json.tmLanguage.json",displayName:"JSON",samplePath:"json.sample"},{id:"json5",scopeName:"source.json5",path:"json5.tmLanguage.json",displayName:"JSON5",samplePath:"json5.sample"},{id:"jsonc",scopeName:"source.json.comments",path:"jsonc.tmLanguage.json",displayName:"JSON with Comments",samplePath:"jsonc.sample"},{id:"jsonl",scopeName:"source.json.lines",path:"jsonl.tmLanguage.json",displayName:"JSON Lines",samplePath:"jsonl.sample"},{id:"jsonnet",scopeName:"source.jsonnet",path:"jsonnet.tmLanguage.json",displayName:"Jsonnet",samplePath:"jsonnet.sample"},{id:"jssm",scopeName:"source.jssm",path:"jssm.tmLanguage.json",displayName:"JSSM",samplePath:"jssm.sample",aliases:["fsl"]},{id:"jsx",scopeName:"source.js.jsx",path:"jsx.tmLanguage.json",displayName:"JSX",samplePath:"jsx.sample"},{id:"julia",scopeName:"source.julia",path:"julia.tmLanguage.json",displayName:"Julia",samplePath:"julia.sample",embeddedLangs:["cpp","python","javascript","r","sql"]},{id:"kotlin",scopeName:"source.kotlin",path:"kotlin.tmLanguage.json",displayName:"Kotlin",samplePath:"kotlin.sample",aliases:["kt","kts"]},{id:"kusto",scopeName:"source.kusto",path:"kusto.tmLanguage.json",displayName:"Kusto",samplePath:"kusto.sample",aliases:["kql"]},{id:"latex",scopeName:"text.tex.latex",path:"latex.tmLanguage.json",displayName:"LaTeX",samplePath:"latex.sample",embeddedLangs:["tex","css","haskell","html","xml","java","lua","julia","ruby","javascript","typescript","python","yaml","rust","scala","gnuplot"]},{id:"less",scopeName:"source.css.less",path:"less.tmLanguage.json",displayName:"Less",samplePath:"less.sample"},{id:"liquid",scopeName:"text.html.liquid",path:"liquid.tmLanguage.json",displayName:"Liquid",samplePath:"liquid.sample",embeddedLangs:["html","css","json","javascript"]},{id:"lisp",scopeName:"source.lisp",path:"lisp.tmLanguage.json",displayName:"Lisp",samplePath:"lisp.sample"},{id:"logo",scopeName:"source.logo",path:"logo.tmLanguage.json",displayName:"Logo",samplePath:"logo.sample"},{id:"lua",scopeName:"source.lua",path:"lua.tmLanguage.json",displayName:"Lua",samplePath:"lua.sample",embeddedLangs:["c"]},{id:"make",scopeName:"source.makefile",path:"make.tmLanguage.json",displayName:"Makefile",samplePath:"make.sample",aliases:["makefile"]},{id:"markdown",scopeName:"text.html.markdown",path:"markdown.tmLanguage.json",displayName:"Markdown",samplePath:"markdown.sample",aliases:["md"],embeddedLangs:["css","html","ini","java","lua","make","perl","r","ruby","php","sql","vb","xml","xsl","yaml","bat","clojure","coffee","c","cpp","diff","docker","git-commit","git-rebase","go","groovy","pug","javascript","json","jsonc","less","objective-c","swift","scss","raku","powershell","python","julia","rust","scala","shellscript","typescript","tsx","csharp","fsharp","dart","handlebars","erlang","elixir","latex","bibtex"]},{id:"marko",scopeName:"text.marko",path:"marko.tmLanguage.json",displayName:"Marko",samplePath:"marko.sample",embeddedLangs:["css","less","scss","javascript"]},{id:"matlab",scopeName:"source.matlab",path:"matlab.tmLanguage.json",displayName:"MATLAB",samplePath:"matlab.sample"},{id:"mdc",scopeName:"text.markdown.mdc",path:"mdc.tmLanguage.json",displayName:"mdc",samplePath:"mdc.sample",embeddedLangs:["markdown","yaml"]},{id:"mdx",scopeName:"source.mdx",path:"mdx.tmLanguage.json",displayName:"MDX",samplePath:"mdx.sample",embeddedLangs:["tsx","toml","yaml","c","clojure","coffee","cpp","csharp","css","diff","docker","elixir","elm","erlang","go","graphql","haskell","html","ini","java","javascript","json","julia","kotlin","less","lua","make","markdown","objective-c","perl","python","r","ruby","rust","scala","scss","shellscript","shellsession","sql","xml","swift","typescript"]},{id:"mermaid",scopeName:"source.mermaid",path:"mermaid.tmLanguage.json",displayName:"Mermaid",samplePath:"mermaid.sample"},{id:"mojo",scopeName:"source.mojo",path:"mojo.tmLanguage.json",displayName:"MagicPython",samplePath:"mojo.sample"},{id:"narrat",scopeName:"source.narrat",path:"narrat.tmLanguage.json",displayName:"Narrat Language",samplePath:"narrat.sample",aliases:["nar"]},{id:"nextflow",scopeName:"source.nextflow",path:"nextflow.tmLanguage.json",displayName:"Nextflow",samplePath:"nextflow.sample",aliases:["nf"]},{id:"nginx",scopeName:"source.nginx",path:"nginx.tmLanguage.json",displayName:"Nginx",samplePath:"nginx.sample",embeddedLangs:["lua"]},{id:"nim",scopeName:"source.nim",path:"nim.tmLanguage.json",displayName:"Nim",samplePath:"nim.sample",embeddedLangs:["c","html","xml","javascript","css","glsl","markdown"]},{id:"nix",scopeName:"source.nix",path:"nix.tmLanguage.json",displayName:"Nix",samplePath:"nix.sample"},{id:"nushell",scopeName:"source.nushell",path:"nushell.tmLanguage.json",displayName:"nushell",samplePath:"nushell.sample",aliases:["nu"]},{id:"objective-c",scopeName:"source.objc",path:"objective-c.tmLanguage.json",displayName:"Objective-C",samplePath:"objective-c.sample",aliases:["objc"]},{id:"objective-cpp",scopeName:"source.objcpp",path:"objective-cpp.tmLanguage.json",displayName:"Objective-C++",samplePath:"objective-cpp.sample"},{id:"ocaml",scopeName:"source.ocaml",path:"ocaml.tmLanguage.json",displayName:"OCaml",samplePath:"ocaml.sample"},{id:"pascal",scopeName:"source.pascal",path:"pascal.tmLanguage.json",displayName:"Pascal",samplePath:"pascal.sample"},{id:"perl",scopeName:"source.perl",path:"perl.tmLanguage.json",displayName:"Perl",samplePath:"perl.sample",embeddedLangs:["html","xml","css","javascript","sql"]},{id:"php",scopeName:"source.php",path:"php.tmLanguage.json",displayName:"PHP",samplePath:"php.sample",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"plsql",scopeName:"source.plsql.oracle",path:"plsql.tmLanguage.json",displayName:"PL/SQL",samplePath:"plsql.sample"},{id:"postcss",scopeName:"source.css.postcss",path:"postcss.tmLanguage.json",displayName:"PostCSS",samplePath:"postcss.sample"},{id:"powerquery",scopeName:"source.powerquery",path:"powerquery.tmLanguage.json",displayName:"PowerQuery",samplePath:"powerquery.sample"},{id:"powershell",scopeName:"source.powershell",path:"powershell.tmLanguage.json",displayName:"PowerShell",samplePath:"powershell.sample",aliases:["ps","ps1"]},{id:"prisma",scopeName:"source.prisma",path:"prisma.tmLanguage.json",displayName:"Prisma",samplePath:"prisma.sample"},{id:"prolog",scopeName:"source.prolog",path:"prolog.tmLanguage.json",displayName:"Prolog",samplePath:"prolog.sample"},{id:"proto",scopeName:"source.proto",path:"proto.tmLanguage.json",displayName:"Protocol Buffer 3",samplePath:"proto.sample"},{id:"pug",scopeName:"text.pug",path:"pug.tmLanguage.json",displayName:"Pug",samplePath:"pug.sample",aliases:["jade"],embeddedLangs:["javascript","css","sass","scss","stylus","coffee","html"]},{id:"puppet",scopeName:"source.puppet",path:"puppet.tmLanguage.json",displayName:"Puppet",samplePath:"puppet.sample"},{id:"purescript",scopeName:"source.purescript",path:"purescript.tmLanguage.json",displayName:"PureScript",samplePath:"purescript.sample"},{id:"python",scopeName:"source.python",path:"python.tmLanguage.json",displayName:"Python",samplePath:"python.sample",aliases:["py"]},{id:"r",scopeName:"source.r",path:"r.tmLanguage.json",displayName:"R",samplePath:"r.sample"},{id:"raku",scopeName:"source.perl.6",path:"raku.tmLanguage.json",displayName:"Raku",samplePath:"raku.sample",aliases:["perl6"]},{id:"razor",scopeName:"text.aspnetcorerazor",path:"razor.tmLanguage.json",displayName:"ASP.NET Razor",samplePath:"razor.sample",embeddedLangs:["html","csharp"]},{id:"reg",scopeName:"source.reg",path:"reg.tmLanguage.json",displayName:"Windows Registry Script",samplePath:"reg.sample"},{id:"rel",scopeName:"source.rel",path:"rel.tmLanguage.json",displayName:"Rel",samplePath:"rel.sample"},{id:"riscv",scopeName:"source.riscv",path:"riscv.tmLanguage.json",displayName:"RISC-V",samplePath:"riscv.sample"},{id:"rst",scopeName:"source.rst",path:"rst.tmLanguage.json",displayName:"reStructuredText",samplePath:"rst.sample",embeddedLangs:["cpp","python","javascript","shellscript","yaml","cmake","ruby"]},{id:"ruby",scopeName:"source.ruby",path:"ruby.tmLanguage.json",displayName:"Ruby",samplePath:"ruby.sample",aliases:["rb"],embeddedLangs:["html","xml","sql","css","c","javascript","shellscript","lua"]},{id:"rust",scopeName:"source.rust",path:"rust.tmLanguage.json",displayName:"Rust",samplePath:"rust.sample",aliases:["rs"]},{id:"sas",scopeName:"source.sas",path:"sas.tmLanguage.json",displayName:"SAS",samplePath:"sas.sample",embeddedLangs:["sql"]},{id:"sass",scopeName:"source.sass",path:"sass.tmLanguage.json",displayName:"Sass",samplePath:"sass.sample"},{id:"scala",scopeName:"source.scala",path:"scala.tmLanguage.json",displayName:"Scala",samplePath:"scala.sample"},{id:"scheme",scopeName:"source.scheme",path:"scheme.tmLanguage.json",displayName:"Scheme",samplePath:"scheme.sample"},{id:"scss",scopeName:"source.css.scss",path:"scss.tmLanguage.json",displayName:"SCSS",samplePath:"scss.sample",embeddedLangs:["css"]},{id:"shaderlab",scopeName:"source.shaderlab",path:"shaderlab.tmLanguage.json",displayName:"ShaderLab",samplePath:"shaderlab.sample",aliases:["shader"],embeddedLangs:["hlsl"]},{id:"shellscript",scopeName:"source.shell",path:"shellscript.tmLanguage.json",displayName:"Shell",samplePath:"shellscript.sample",aliases:["bash","sh","shell","zsh"]},{id:"shellsession",scopeName:"text.shell-session",path:"shellsession.tmLanguage.json",displayName:"Shell Session",samplePath:"shellsession.sample",aliases:["console"],embeddedLangs:["shellscript"]},{id:"smalltalk",scopeName:"source.smalltalk",path:"smalltalk.tmLanguage.json",displayName:"Smalltalk",samplePath:"smalltalk.sample"},{id:"solidity",scopeName:"source.solidity",path:"solidity.tmLanguage.json",displayName:"Solidity",samplePath:"solidity.sample"},{id:"sparql",scopeName:"source.sparql",path:"sparql.tmLanguage.json",displayName:"SPARQL",samplePath:"sparql.sample",embeddedLangs:["turtle"]},{id:"splunk",scopeName:"source.splunk_search",path:"splunk.tmLanguage.json",displayName:"Splunk Query Language",samplePath:"splunk.sample",aliases:["spl"]},{id:"sql",scopeName:"source.sql",path:"sql.tmLanguage.json",displayName:"SQL",samplePath:"sql.sample"},{id:"ssh-config",scopeName:"source.ssh-config",path:"ssh-config.tmLanguage.json",displayName:"SSH Config",samplePath:"ssh-config.sample"},{id:"stata",scopeName:"source.stata",path:"stata.tmLanguage.json",displayName:"Stata",samplePath:"stata.sample",embeddedLangs:["sql"]},{id:"stylus",scopeName:"source.stylus",path:"stylus.tmLanguage.json",displayName:"Stylus",samplePath:"stylus.sample",aliases:["styl"]},{id:"svelte",scopeName:"source.svelte",path:"svelte.tmLanguage.json",displayName:"Svelte",samplePath:"svelte.sample",embeddedLangs:["javascript","typescript","coffee","stylus","sass","css","scss","less","postcss","pug","markdown"]},{id:"swift",scopeName:"source.swift",path:"swift.tmLanguage.json",displayName:"Swift",samplePath:"swift.sample"},{id:"system-verilog",scopeName:"source.systemverilog",path:"system-verilog.tmLanguage.json",displayName:"SystemVerilog",samplePath:"system-verilog.sample"},{id:"tasl",scopeName:"source.tasl",path:"tasl.tmLanguage.json",displayName:"Tasl",samplePath:"tasl.sample"},{id:"tcl",scopeName:"source.tcl",path:"tcl.tmLanguage.json",displayName:"Tcl",samplePath:"tcl.sample"},{id:"tex",scopeName:"text.tex",path:"tex.tmLanguage.json",displayName:"TeX",samplePath:"tex.sample",embeddedLangs:["r"]},{id:"toml",scopeName:"source.toml",path:"toml.tmLanguage.json",displayName:"TOML",samplePath:"toml.sample"},{id:"tsx",scopeName:"source.tsx",path:"tsx.tmLanguage.json",displayName:"TSX",samplePath:"tsx.sample"},{id:"turtle",scopeName:"source.turtle",path:"turtle.tmLanguage.json",displayName:"Turtle",samplePath:"turtle.sample"},{id:"twig",scopeName:"text.html.twig",path:"twig.tmLanguage.json",displayName:"Twig",samplePath:"twig.sample",embeddedLangs:["css","javascript","scss","php","python","ruby"]},{id:"typescript",scopeName:"source.ts",path:"typescript.tmLanguage.json",displayName:"TypeScript",samplePath:"typescript.sample",aliases:["ts"]},{id:"v",scopeName:"source.v",path:"v.tmLanguage.json",displayName:"V",samplePath:"v.sample"},{id:"vb",scopeName:"source.asp.vb.net",path:"vb.tmLanguage.json",displayName:"Visual Basic",samplePath:"vb.sample",aliases:["cmd"]},{id:"verilog",scopeName:"source.verilog",path:"verilog.tmLanguage.json",displayName:"Verilog",samplePath:"verilog.sample"},{id:"vhdl",scopeName:"source.vhdl",path:"vhdl.tmLanguage.json",displayName:"VHDL",samplePath:"vhdl.sample"},{id:"viml",scopeName:"source.viml",path:"viml.tmLanguage.json",displayName:"Vim Script",samplePath:"viml.sample",aliases:["vim","vimscript"]},{id:"vue-html",scopeName:"text.html.vue-html",path:"vue-html.tmLanguage.json",displayName:"Vue HTML",samplePath:"vue-html.sample",embeddedLangs:["vue","javascript"]},{id:"vue",scopeName:"source.vue",path:"vue.tmLanguage.json",displayName:"Vue",samplePath:"vue.sample",embeddedLangs:["html","markdown","pug","stylus","sass","css","scss","less","javascript","typescript","jsx","tsx","json","jsonc","json5","yaml","toml","graphql"]},{id:"vyper",scopeName:"source.vyper",path:"vyper.tmLanguage.json",displayName:"Vyper",samplePath:"vyper.sample",aliases:["vy"]},{id:"wasm",scopeName:"source.wat",path:"wasm.tmLanguage.json",displayName:"WebAssembly",samplePath:"wasm.sample"},{id:"wenyan",scopeName:"source.wenyan",path:"wenyan.tmLanguage.json",displayName:"Wenyan",samplePath:"wenyan.sample",aliases:["文言"]},{id:"wgsl",scopeName:"source.wgsl",path:"wgsl.tmLanguage.json",displayName:"WGSL",samplePath:"wgsl.sample"},{id:"wolfram",scopeName:"source.wolfram",path:"wolfram.tmLanguage.json",displayName:"Wolfram",samplePath:"wolfram.sample",aliases:["wl"]},{id:"xml",scopeName:"text.xml",path:"xml.tmLanguage.json",displayName:"XML",samplePath:"xml.sample",embeddedLangs:["java"]},{id:"xsl",scopeName:"text.xml.xsl",path:"xsl.tmLanguage.json",displayName:"XSL",samplePath:"xsl.sample",embeddedLangs:["xml"]},{id:"yaml",scopeName:"source.yaml",path:"yaml.tmLanguage.json",displayName:"YAML",samplePath:"yaml.sample",aliases:["yml"]},{id:"zenscript",scopeName:"source.zenscript",path:"zenscript.tmLanguage.json",displayName:"ZenScript",samplePath:"zenscript.sample"},{id:"zig",scopeName:"source.zig",path:"zig.tmLanguage.json",displayName:"zig",samplePath:"zig.sample"}];var he=(e=>(e[e.NotSet=-1]="NotSet",e[e.None=0]="None",e[e.Italic=1]="Italic",e[e.Bold=2]="Bold",e[e.Underline=4]="Underline",e))(he||{});class K{static toBinaryStr(h){let N=h.toString(2);for(;N.length<32;)N="0"+N;return N}static printMetadata(h){let N=K.getLanguageId(h),s=K.getTokenType(h),j=K.getFontStyle(h),P=K.getForeground(h),a=K.getBackground(h);console.log({languageId:N,tokenType:s,fontStyle:j,foreground:P,background:a})}static getLanguageId(h){return(h&255)>>>0}static getTokenType(h){return(h&768)>>>8}static getFontStyle(h){return(h&14336)>>>11}static getForeground(h){return(h&8372224)>>>15}static getBackground(h){return(h&4286578688)>>>24}static containsBalancedBrackets(h){return(h&1024)!==0}static set(h,N,s,j,P,a){let w=K.getLanguageId(h),_=K.getTokenType(h),r=K.getFontStyle(h),S=K.getForeground(h),L=K.getBackground(h),g=K.containsBalancedBrackets(h)?1:0;return N!==0&&(w=N),s!==0&&(_=s===8?0:s),j!==-1&&(r=j),P!==0&&(S=P),a!==0&&(L=a),(w<<0|_<<8|r<<11|g<<10|S<<15|L<<24)>>>0}}function Qt(e){return e.endsWith("/")||e.endsWith("\\")?e.slice(0,-1):e}function Jt(e){return e.startsWith("./")?e.slice(2):e}function He(e){const h=e.split(/[\/\\]/g);return h.slice(0,h.length-1)}function Ve(...e){return e.map(Qt).map(Jt).join("/")}function Xt(e,h){const N=new Map;for(const s of e){const j=h(s);N.has(j)?N.get(j).push(s):N.set(j,[s])}return N}function Yt(e,h=!1){const N=e.length;let s=0,j="",P=0,a=16,w=0,_=0,r=0,S=0,L=0;function g(l,f){let m=0,u=0;for(;m<l||!f;){let t=e.charCodeAt(s);if(t>=48&&t<=57)u=u*16+t-48;else if(t>=65&&t<=70)u=u*16+t-65+10;else if(t>=97&&t<=102)u=u*16+t-97+10;else break;s++,m++}return m<l&&(u=-1),u}function v(l){s=l,j="",P=0,a=16,L=0}function A(){let l=s;if(e.charCodeAt(s)===48)s++;else for(s++;s<e.length&&_e(e.charCodeAt(s));)s++;if(s<e.length&&e.charCodeAt(s)===46)if(s++,s<e.length&&_e(e.charCodeAt(s)))for(s++;s<e.length&&_e(e.charCodeAt(s));)s++;else return L=3,e.substring(l,s);let f=s;if(s<e.length&&(e.charCodeAt(s)===69||e.charCodeAt(s)===101))if(s++,(s<e.length&&e.charCodeAt(s)===43||e.charCodeAt(s)===45)&&s++,s<e.length&&_e(e.charCodeAt(s))){for(s++;s<e.length&&_e(e.charCodeAt(s));)s++;f=s}else L=3;return e.substring(l,f)}function d(){let l="",f=s;for(;;){if(s>=N){l+=e.substring(f,s),L=2;break}const m=e.charCodeAt(s);if(m===34){l+=e.substring(f,s),s++;break}if(m===92){if(l+=e.substring(f,s),s++,s>=N){L=2;break}switch(e.charCodeAt(s++)){case 34:l+='"';break;case 92:l+="\\";break;case 47:l+="/";break;case 98:l+="\b";break;case 102:l+="\f";break;case 110:l+=`
`;break;case 114:l+="\r";break;case 116:l+="	";break;case 117:const t=g(4,!0);t>=0?l+=String.fromCharCode(t):L=4;break;default:L=5}f=s;continue}if(m>=0&&m<=31)if(ye(m)){l+=e.substring(f,s),L=2;break}else L=6;s++}return l}function x(){if(j="",L=0,P=s,_=w,S=r,s>=N)return P=N,a=17;let l=e.charCodeAt(s);if(Se(l)){do s++,j+=String.fromCharCode(l),l=e.charCodeAt(s);while(Se(l));return a=15}if(ye(l))return s++,j+=String.fromCharCode(l),l===13&&e.charCodeAt(s)===10&&(s++,j+=`
`),w++,r=s,a=14;switch(l){case 123:return s++,a=1;case 125:return s++,a=2;case 91:return s++,a=3;case 93:return s++,a=4;case 58:return s++,a=6;case 44:return s++,a=5;case 34:return s++,j=d(),a=10;case 47:const f=s-1;if(e.charCodeAt(s+1)===47){for(s+=2;s<N&&!ye(e.charCodeAt(s));)s++;return j=e.substring(f,s),a=12}if(e.charCodeAt(s+1)===42){s+=2;const m=N-1;let u=!1;for(;s<m;){const t=e.charCodeAt(s);if(t===42&&e.charCodeAt(s+1)===47){s+=2,u=!0;break}s++,ye(t)&&(t===13&&e.charCodeAt(s)===10&&s++,w++,r=s)}return u||(s++,L=1),j=e.substring(f,s),a=13}return j+=String.fromCharCode(l),s++,a=16;case 45:if(j+=String.fromCharCode(l),s++,s===N||!_e(e.charCodeAt(s)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return j+=A(),a=11;default:for(;s<N&&y(l);)s++,l=e.charCodeAt(s);if(P!==s){switch(j=e.substring(P,s),j){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return j+=String.fromCharCode(l),s++,a=16}}function y(l){if(Se(l)||ye(l))return!1;switch(l){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function k(){let l;do l=x();while(l>=12&&l<=15);return l}return{setPosition:v,getPosition:()=>s,scan:h?k:x,getToken:()=>a,getTokenValue:()=>j,getTokenOffset:()=>P,getTokenLength:()=>s-P,getTokenStartLine:()=>_,getTokenStartCharacter:()=>P-S,getTokenError:()=>L}}function Se(e){return e===32||e===9}function ye(e){return e===10||e===13}function _e(e){return e>=48&&e<=57}var Ie;(function(e){e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.space=32]="space",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.asterisk=42]="asterisk",e[e.backslash=92]="backslash",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.plus=43]="plus",e[e.slash=47]="slash",e[e.formFeed=12]="formFeed",e[e.tab=9]="tab"})(Ie||(Ie={}));var Ne;(function(e){e.DEFAULT={allowTrailingComma:!1}})(Ne||(Ne={}));function Zt(e,h=[],N=Ne.DEFAULT){let s=null,j=[];const P=[];function a(_){Array.isArray(j)?j.push(_):s!==null&&(j[s]=_)}return Kt(e,{onObjectBegin:()=>{const _={};a(_),P.push(j),j=_,s=null},onObjectProperty:_=>{s=_},onObjectEnd:()=>{j=P.pop()},onArrayBegin:()=>{const _=[];a(_),P.push(j),j=_,s=null},onArrayEnd:()=>{j=P.pop()},onLiteralValue:a,onError:(_,r,S)=>{h.push({error:_,offset:r,length:S})}},N),j[0]}function Kt(e,h,N=Ne.DEFAULT){const s=Yt(e,!1),j=[];function P(p){return p?()=>p(s.getTokenOffset(),s.getTokenLength(),s.getTokenStartLine(),s.getTokenStartCharacter()):()=>!0}function a(p){return p?()=>p(s.getTokenOffset(),s.getTokenLength(),s.getTokenStartLine(),s.getTokenStartCharacter(),()=>j.slice()):()=>!0}function w(p){return p?b=>p(b,s.getTokenOffset(),s.getTokenLength(),s.getTokenStartLine(),s.getTokenStartCharacter()):()=>!0}function _(p){return p?b=>p(b,s.getTokenOffset(),s.getTokenLength(),s.getTokenStartLine(),s.getTokenStartCharacter(),()=>j.slice()):()=>!0}const r=a(h.onObjectBegin),S=_(h.onObjectProperty),L=P(h.onObjectEnd),g=a(h.onArrayBegin),v=P(h.onArrayEnd),A=_(h.onLiteralValue),d=w(h.onSeparator),x=P(h.onComment),y=w(h.onError),k=N&&N.disallowComments,l=N&&N.allowTrailingComma;function f(){for(;;){const p=s.scan();switch(s.getTokenError()){case 4:m(14);break;case 5:m(15);break;case 3:m(13);break;case 1:k||m(11);break;case 2:m(12);break;case 6:m(16);break}switch(p){case 12:case 13:k?m(10):x();break;case 16:m(1);break;case 15:case 14:break;default:return p}}}function m(p,b=[],T=[]){if(y(p),b.length+T.length>0){let I=s.getToken();for(;I!==17;){if(b.indexOf(I)!==-1){f();break}else if(T.indexOf(I)!==-1)break;I=f()}}}function u(p){const b=s.getTokenValue();return p?A(b):(S(b),j.push(b)),f(),!0}function t(){switch(s.getToken()){case 11:const p=s.getTokenValue();let b=Number(p);isNaN(b)&&(m(2),b=0),A(b);break;case 7:A(null);break;case 8:A(!0);break;case 9:A(!1);break;default:return!1}return f(),!0}function i(){return s.getToken()!==10?(m(3,[],[2,5]),!1):(u(!1),s.getToken()===6?(d(":"),f(),o()||m(4,[],[2,5])):m(5,[],[2,5]),j.pop(),!0)}function c(){r(),f();let p=!1;for(;s.getToken()!==2&&s.getToken()!==17;){if(s.getToken()===5){if(p||m(4,[],[]),d(","),f(),s.getToken()===2&&l)break}else p&&m(6,[],[]);i()||m(4,[],[2,5]),p=!0}return L(),s.getToken()!==2?m(7,[2],[]):f(),!0}function n(){g(),f();let p=!0,b=!1;for(;s.getToken()!==4&&s.getToken()!==17;){if(s.getToken()===5){if(b||m(4,[],[]),d(","),f(),s.getToken()===4&&l)break}else b&&m(6,[],[]);p?(j.push(0),p=!1):j[j.length-1]++,o()||m(4,[],[4,5]),b=!0}return v(),p||j.pop(),s.getToken()!==4?m(8,[4],[]):f(),!0}function o(){switch(s.getToken()){case 3:return n();case 1:return c();case 10:return u(!0);default:return t()}}return f(),s.getToken()===17?N.allowEmptyContent?!0:(m(4,[],[]),!1):o()?(s.getToken()!==17&&m(9,[],[]),!0):(m(4,[],[]),!1)}var Oe;(function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",e[e.InvalidCharacter=6]="InvalidCharacter"})(Oe||(Oe={}));var Ee;(function(e){e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.Unknown=16]="Unknown",e[e.EOF=17]="EOF"})(Ee||(Ee={}));const en=Zt;var Me;(function(e){e[e.InvalidSymbol=1]="InvalidSymbol",e[e.InvalidNumberFormat=2]="InvalidNumberFormat",e[e.PropertyNameExpected=3]="PropertyNameExpected",e[e.ValueExpected=4]="ValueExpected",e[e.ColonExpected=5]="ColonExpected",e[e.CommaExpected=6]="CommaExpected",e[e.CloseBraceExpected=7]="CloseBraceExpected",e[e.CloseBracketExpected=8]="CloseBracketExpected",e[e.EndOfFileExpected=9]="EndOfFileExpected",e[e.InvalidCommentToken=10]="InvalidCommentToken",e[e.UnexpectedEndOfComment=11]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=12]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=13]="UnexpectedEndOfNumber",e[e.InvalidUnicode=14]="InvalidUnicode",e[e.InvalidEscapeCharacter=15]="InvalidEscapeCharacter",e[e.InvalidCharacter=16]="InvalidCharacter"})(Me||(Me={}));const tn=typeof self<"u"&&typeof self.WorkerGlobalScope<"u",nn="process"in globalThis&&typeof process<"u"&&typeof process.release<"u"&&process.release.name==="node",sn="process"in globalThis&&typeof process<"u"&&typeof process.release<"u"&&process.release.name==="bun",Ae=tn||!nn&&!sn;let an="";const rn="dist/";let xe=null;async function on(e){if(!xe){let h;if(Ae)h=ke.loadWASM({data:await fetch(ze(Ve(...He(e),"onig.wasm")))});else{const s=require("path").join(require.resolve("vscode-oniguruma"),"../onig.wasm"),P=require("fs").readFileSync(s).buffer;h=ke.loadWASM(P)}xe=h.then(()=>({createOnigScanner(N){return ke.createOnigScanner(N)},createOnigString(N){return ke.createOnigString(N)}}))}return xe}function ze(e){if(Ae)return`${an}${e}`;{const h=require("path");return h.isAbsolute(e)?e:h.resolve(__dirname,"..",e)}}async function ln(e){const h=ze(e);return Ae?await fetch(h).then(N=>N.text()):await require("fs").promises.readFile(h,"utf-8")}async function Qe(e){const h=[],N=await ln(e);let s;try{s=JSON.parse(N)}catch{if(s=en(N,h,{allowTrailingComma:!0}),h.length)throw h[0]}return s}async function Je(e){let h=await Qe(e);const N=Xe(h);if(N.include){const s=await Je(Ve(...He(e),N.include));s.settings&&(N.settings=s.settings.concat(N.settings)),s.bg&&!N.bg&&(N.bg=s.bg),s.colors&&(N.colors={...s.colors,...N.colors}),delete N.include}return N}async function cn(e){return await Qe(e)}function un(e){e.settings||(e.settings=[]),!(e.settings[0]&&e.settings[0].settings&&!e.settings[0].scope)&&e.settings.unshift({settings:{foreground:e.fg,background:e.bg}})}function Xe(e){const h=e.type||"dark",N={name:e.name,type:h,...e,...pn(e)};return e.include&&(N.include=e.include),e.tokenColors&&(N.settings=e.tokenColors,delete N.tokenColors),un(N),N}const Be={light:"#333333",dark:"#bbbbbb"},Ge={light:"#fffffe",dark:"#1e1e1e"};function pn(e){var P,a,w,_;let h,N,s=e.settings?e.settings:e.tokenColors;const j=s?s.find(r=>!r.name&&!r.scope):void 0;return(P=j==null?void 0:j.settings)!=null&&P.foreground&&(h=j.settings.foreground),(a=j==null?void 0:j.settings)!=null&&a.background&&(N=j.settings.background),!h&&((w=e==null?void 0:e.colors)!=null&&w["editor.foreground"])&&(h=e.colors["editor.foreground"]),!N&&((_=e==null?void 0:e.colors)!=null&&_["editor.background"])&&(N=e.colors["editor.background"]),h||(h=e.type==="light"?Be.light:Be.dark),N||(N=e.type==="light"?Ge.light:Ge.dark),{fg:h,bg:N}}class hn{constructor(h,N){this.languagesPath="languages/",this.languageMap={},this.scopeToLangMap={},this._onigLibPromise=h,this._onigLibName=N}get onigLib(){return this._onigLibPromise}getOnigLibName(){return this._onigLibName}getLangRegistration(h){return this.languageMap[h]}async loadGrammar(h){const N=this.scopeToLangMap[h];if(!N)return null;if(N.grammar)return N.grammar;const s=await cn(ve.includes(N)?`${this.languagesPath}${N.path}`:N.path);return N.grammar=s,s}addLanguage(h){this.languageMap[h.id]=h,h.aliases&&h.aliases.forEach(N=>{this.languageMap[N]=h}),this.scopeToLangMap[h.scopeName]=h}}function mn(e,h,N,s,j){let P=N.split(/\r\n|\r|\n/),a=We.INITIAL,w=[],_=[];for(let r=0,S=P.length;r<S;r++){let L=P[r];if(L===""){w=[],_.push([]);continue}let g,v,A;j.includeExplanation&&(g=s.tokenizeLine(L,a),v=g.tokens,A=0);let d=s.tokenizeLine2(L,a),x=d.tokens.length/2;for(let y=0;y<x;y++){let k=d.tokens[2*y],l=y+1<x?d.tokens[2*y+2]:L.length;if(k===l)continue;let f=d.tokens[2*y+1],m=K.getForeground(f),u=h[m],t=K.getFontStyle(f),i=[];if(j.includeExplanation){let c=0;for(;k+c<l;){let n=v[A],o=L.substring(n.startIndex,n.endIndex);c+=o.length,i.push({content:o,scopes:dn(e,n.scopes)}),A++}}w.push({content:L.substring(k,l),color:u,fontStyle:t,explanation:i})}_.push(w),w=[],a=d.ruleStack}return _}function dn(e,h){let N=[];for(let s=0,j=h.length;s<j;s++){let P=h.slice(0,s),a=h[s];N[s]={scopeName:a,themeMatches:fn(e,a,P)}}return N}function De(e,h){let N=e+".";return e===h||h.substring(0,N.length)===N}function gn(e,h,N,s){if(!De(e,N))return!1;let j=h.length-1,P=s.length-1;for(;j>=0&&P>=0;)De(h[j],s[P])&&j--,P--;return j===-1}function fn(e,h,N){let s=[],j=0;for(let P=0,a=e.settings.length;P<a;P++){let w=e.settings[P],_;if(typeof w.scope=="string")_=w.scope.split(/,/).map(r=>r.trim());else if(Array.isArray(w.scope))_=w.scope;else continue;for(let r=0,S=_.length;r<S;r++){let g=_[r].split(/ /),v=g[g.length-1],A=g.slice(0,g.length-1);gn(v,A,h,N)&&(s[j++]=w,r=S)}}return s}var ue=["black","red","green","yellow","blue","magenta","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightMagenta","brightCyan","brightWhite"],Pe={1:"bold",2:"dim",3:"italic",4:"underline",7:"reverse",9:"strikethrough"};function _n(e,h){const N=e.indexOf("\x1B",h);if(N!==-1&&e[N+1]==="["){const s=e.indexOf("m",N);return{sequence:e.substring(N+2,s).split(";"),startPosition:N,position:s+1}}return{position:e.length}}function $e(e){const h=e.shift();if(h==="2"){const N=e.splice(0,3).map(s=>Number.parseInt(s));return N.length!==3||N.some(s=>Number.isNaN(s))?void 0:{type:"rgb",rgb:N}}else if(h==="5"){const N=e.shift();if(N)return{type:"table",index:Number(N)}}}function bn(e){const h=[];for(;e.length>0;){const N=e.shift();if(!N)continue;const s=Number.parseInt(N);if(!Number.isNaN(s))if(s===0)h.push({type:"resetAll"});else if(s<=9)Pe[s]&&h.push({type:"setDecoration",value:Pe[s]});else if(s<=29){const j=Pe[s-20];j&&h.push({type:"resetDecoration",value:j})}else if(s<=37)h.push({type:"setForegroundColor",value:{type:"named",name:ue[s-30]}});else if(s===38){const j=$e(e);j&&h.push({type:"setForegroundColor",value:j})}else if(s===39)h.push({type:"resetForegroundColor"});else if(s<=47)h.push({type:"setBackgroundColor",value:{type:"named",name:ue[s-40]}});else if(s===48){const j=$e(e);j&&h.push({type:"setBackgroundColor",value:j})}else s===49?h.push({type:"resetBackgroundColor"}):s>=90&&s<=97?h.push({type:"setForegroundColor",value:{type:"named",name:ue[s-90+8]}}):s>=100&&s<=107&&h.push({type:"setBackgroundColor",value:{type:"named",name:ue[s-100+8]}})}return h}function yn(){let e=null,h=null,N=new Set;return{parse(s){const j=[];let P=0;do{const a=_n(s,P),w=a.sequence?s.substring(P,a.startPosition):s.substring(P);if(w.length>0&&j.push({value:w,foreground:e,background:h,decorations:new Set(N)}),a.sequence){const _=bn(a.sequence);for(const r of _)r.type==="resetAll"?(e=null,h=null,N.clear()):r.type==="resetForegroundColor"?e=null:r.type==="resetBackgroundColor"?h=null:r.type==="resetDecoration"&&N.delete(r.value);for(const r of _)r.type==="setForegroundColor"?e=r.value:r.type==="setBackgroundColor"?h=r.value:r.type==="setDecoration"&&N.add(r.value)}P=a.position}while(P<s.length);return j}}}var kn={black:"#000000",red:"#bb0000",green:"#00bb00",yellow:"#bbbb00",blue:"#0000bb",magenta:"#ff00ff",cyan:"#00bbbb",white:"#eeeeee",brightBlack:"#555555",brightRed:"#ff5555",brightGreen:"#00ff00",brightYellow:"#ffff55",brightBlue:"#5555ff",brightMagenta:"#ff55ff",brightCyan:"#55ffff",brightWhite:"#ffffff"};function Nn(e=kn){function h(w){return e[w]}function N(w){return`#${w.map(_=>Math.max(0,Math.min(_,255)).toString(16).padStart(2,"0")).join("")}`}let s;function j(){if(s)return s;s=[];for(let r=0;r<ue.length;r++)s.push(h(ue[r]));let w=[0,95,135,175,215,255];for(let r=0;r<6;r++)for(let S=0;S<6;S++)for(let L=0;L<6;L++)s.push(N([w[r],w[S],w[L]]));let _=8;for(let r=0;r<24;r++,_+=10)s.push(N([_,_,_]));return s}function P(w){return j()[w]}function a(w){switch(w.type){case"named":return h(w.name);case"rgb":return N(w.rgb);case"table":return P(w.index)}}return{value:a}}function vn(e,h){const N=h.split(/\r?\n/),s=Nn(Object.fromEntries(ue.map(P=>[P,e.colors[`terminal.ansi${P[0].toUpperCase()}${P.substring(1)}`]]))),j=yn();return N.map(P=>j.parse(P).map(a=>{let w;a.decorations.has("reverse")?w=a.background?s.value(a.background):e.bg:w=a.foreground?s.value(a.foreground):e.fg,a.decorations.has("dim")&&(w=wn(w));let _=he.None;return a.decorations.has("bold")&&(_|=he.Bold),a.decorations.has("italic")&&(_|=he.Italic),a.decorations.has("underline")&&(_|=he.Underline),{content:a.value,color:w,fontStyle:_}}))}function wn(e){const h=e.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);if(h)if(h[3]){const s=Math.round(Number.parseInt(h[3],16)/2).toString(16).padStart(2,"0");return`#${h[1]}${h[2]}${s}`}else return h[2]?`#${h[1]}${h[2]}80`:`#${Array.from(h[1]).map(s=>`${s}${s}`).join("")}80`;const N=e.match(/var\((--shiki-color-ansi-[\w-]+)\)/);return N?`var(${N[1]}-dim)`:e}const Ln={pre({className:e,style:h,children:N}){return`<pre class="${e}" style="${h}" tabindex="0">${N}</pre>`},code({children:e}){return`<code>${e}</code>`},line({className:e,children:h}){return`<span class="${e}">${h}</span>`},token({style:e,children:h}){return`<span style="${e}">${h}</span>`}};function Ce(e,h={}){const N=h.bg||"#fff",s=Xt(h.lineOptions??[],a=>a.line),j=h.elements||{};function P(a="",w={},_){const r=j[a]||Ln[a];return r?(_=_.filter(Boolean),r({...w,children:a==="code"?_.join(`
`):_.join("")})):""}return P("pre",{className:"shiki "+(h.themeName||""),style:`background-color: ${N}`},[h.langId?`<div class="language-id">${h.langId}</div>`:"",P("code",{},e.map((a,w)=>{const _=w+1,r=s.get(_)??[],S=Pn(r).join(" ");return P("line",{className:S,lines:e,line:a,index:w},a.map((L,g)=>{const v=[`color: ${L.color||h.fg}`];return L.fontStyle&he.Italic&&v.push("font-style: italic"),L.fontStyle&he.Bold&&v.push("font-weight: bold"),L.fontStyle&he.Underline&&v.push("text-decoration: underline"),P("token",{style:v.join("; "),tokens:a,token:L,index:g},[xn(L.content)])}))}))])}const Sn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function xn(e){return e.replace(/[&<>"']/g,h=>Sn[h])}function Pn(e){const h=new Set(["line"]);for(const N of e)for(const s of N.classes??[])h.add(s);return Array.from(h)}class jn extends We.Registry{constructor(h){super(h),this._resolver=h,this.themesPath="themes/",this._resolvedThemes={},this._resolvedGrammars={},this._langGraph=new Map,this._langMap=ve.reduce((N,s)=>(N[s.id]=s,N),{})}getTheme(h){return typeof h=="string"?this._resolvedThemes[h]:h}async loadTheme(h){return typeof h=="string"?(this._resolvedThemes[h]||(this._resolvedThemes[h]=await Je(`${this.themesPath}${h}.json`)),this._resolvedThemes[h]):(h=Xe(h),h.name&&(this._resolvedThemes[h.name]=h),h)}async loadThemes(h){return await Promise.all(h.map(N=>this.loadTheme(N)))}getLoadedThemes(){return Object.keys(this._resolvedThemes)}getGrammar(h){return this._resolvedGrammars[h]}async loadLanguage(h){var P;const s={embeddedLanguages:(P=h.embeddedLangs)==null?void 0:P.reduce(async(a,w,_)=>{if(!this.getLoadedLanguages().includes(w)&&this._resolver.getLangRegistration(w))return await this._resolver.loadGrammar(this._resolver.getLangRegistration(w).scopeName),a[this._resolver.getLangRegistration(w).scopeName]=_+2,a},{}),balancedBracketSelectors:h.balancedBracketSelectors||["*"],unbalancedBracketSelectors:h.unbalancedBracketSelectors||[]},j=await this.loadGrammarWithConfiguration(h.scopeName,1,s);this._resolvedGrammars[h.id]=j,h.aliases&&h.aliases.forEach(a=>{this._resolvedGrammars[a]=j})}async loadLanguages(h){for(const s of h)this.resolveEmbeddedLanguages(s);const N=Array.from(this._langGraph.values());for(const s of N)this._resolver.addLanguage(s);for(const s of N)await this.loadLanguage(s)}getLoadedLanguages(){return Object.keys(this._resolvedGrammars)}resolveEmbeddedLanguages(h){if(this._langGraph.has(h.id)||this._langGraph.set(h.id,h),h.embeddedLangs)for(const N of h.embeddedLangs)this._langGraph.set(N,this._langMap[N])}}function Ye(e){return typeof e=="string"?ve.find(h=>{var N;return h.id===e||((N=h.aliases)==null?void 0:N.includes(e))}):e}function An(e){var j;let h=ve,N=e.themes||[],s=(j=e.paths)!=null&&j.wasm?e.paths.wasm.endsWith("/")?e.paths.wasm:e.paths.wasm+"/":rn;return e.langs&&(h=e.langs.map(Ye)),e.theme&&N.unshift(e.theme),N.length||(N=["nord"]),{_languages:h,_themes:N,_wasmPath:s}}function Tn(){const e={"#000001":"var(--shiki-color-text)","#000002":"var(--shiki-color-background)","#000004":"var(--shiki-token-constant)","#000005":"var(--shiki-token-string)","#000006":"var(--shiki-token-comment)","#000007":"var(--shiki-token-keyword)","#000008":"var(--shiki-token-parameter)","#000009":"var(--shiki-token-function)","#000010":"var(--shiki-token-string-expression)","#000011":"var(--shiki-token-punctuation)","#000012":"var(--shiki-token-link)"};for(let h=0;h<ue.length;h++){const N=`#A${h.toString().padStart(5,"0")}`,s=ue[h].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();e[N]=`var(--shiki-color-ansi-${s})`}return e}async function Rn(e){var i,c;const{_languages:h,_themes:N,_wasmPath:s}=An(e),j=new hn(on(s),"vscode-oniguruma"),P=new jn(j);(i=e.paths)!=null&&i.themes&&(P.themesPath=e.paths.themes.endsWith("/")?e.paths.themes:e.paths.themes+"/"),(c=e.paths)!=null&&c.languages&&(j.languagesPath=e.paths.languages.endsWith("/")?e.paths.languages:e.paths.languages+"/");const w=(await P.loadThemes(N))[0];let _;await P.loadLanguages(h);let r=Tn();function S(n){r=n}function L(n,o){n.bg=r[n.bg]||n.bg,n.fg=r[n.fg]||n.fg,Object.entries(n.colors).forEach(([p,b])=>{n.colors[p]=r[b]||b}),o.forEach((p,b)=>{o[b]=r[p]||p})}function g(n){const o=n?P.getTheme(n):w;if(!o)throw Error(`No theme registration for ${n}`);(!_||_.name!==o.name)&&(P.setTheme(o),_=o);const p=P.getColorMap();return o.type==="css"&&L(o,p),{_theme:o,_colorMap:p}}function v(n){const o=P.getGrammar(n);if(!o)throw Error(`No language registration for ${n}`);return{_grammar:o}}function A(n,o="text",p,b={includeExplanation:!0}){if(In(o))return[...n.split(/\r\n|\r|\n/).map(W=>[{content:W}])];const{_grammar:T}=v(o),{_theme:I,_colorMap:E}=g(p);return mn(I,E,n,T,b)}function d(n,o){const{_theme:p}=g(o);return vn(p,n)}function x(n,o="text",p){let b;typeof o=="object"?b=o:b={lang:o,theme:p};const T=A(n,b.lang,b.theme,{includeExplanation:!1}),{_theme:I}=g(b.theme);return Ce(T,{fg:I.fg,bg:I.bg,lineOptions:b==null?void 0:b.lineOptions,themeName:I.name})}function y(n,o){const p=d(n,o==null?void 0:o.theme),{_theme:b}=g(o==null?void 0:o.theme);return Ce(p,{fg:b.fg,bg:b.bg,lineOptions:o==null?void 0:o.lineOptions,themeName:b.name})}async function k(n){await P.loadTheme(n)}async function l(n){const o=Ye(n);j.addLanguage(o),await P.loadLanguage(o)}function f(){return P.getLoadedThemes()}function m(){return P.getLoadedLanguages()}function u(n){const{_theme:o}=g(n);return o.bg}function t(n){const{_theme:o}=g(n);return o.fg}return{codeToThemedTokens:A,codeToHtml:x,ansiToThemedTokens:d,ansiToHtml:y,getTheme:n=>g(n)._theme,loadTheme:k,loadLanguage:l,getBackgroundColor:u,getForegroundColor:t,getLoadedThemes:f,getLoadedLanguages:m,setColorReplacements:S}}function In(e){return!e||["plaintext","txt","text"].includes(e)}async function On(){const e=await Rn({theme:"dark-plus",langs:["html","js","css","svelte","yml","docker","dockerfile","sh","elixir","json5","json","ts"]}),N=Object.fromEntries(Object.entries(Object.assign({"/src/lib/snippets/posts/deploy-elixir-app-on-lightsail/Dockerfile.dockerfile":yt,"/src/lib/snippets/posts/deploy-elixir-app-on-lightsail/create_new_app.sh":kt,"/src/lib/snippets/posts/deploy-elixir-app-on-lightsail/github-ci.yml":Nt,"/src/lib/snippets/posts/deploy-elixir-app-on-lightsail/iam.json":vt,"/src/lib/snippets/posts/elixir-telegran-bot/application.elixir":wt,"/src/lib/snippets/posts/elixir-telegran-bot/deps.elixir":Lt,"/src/lib/snippets/posts/elixir-telegran-bot/messages_log.elixir":St,"/src/lib/snippets/posts/elixir-telegran-bot/new_elixir_app.sh":xt,"/src/lib/snippets/posts/elixir-telegran-bot/stocks_bot.elixir":Pt,"/src/lib/snippets/posts/elixir-telegran-bot/stocks_bot_2.elixir":jt,"/src/lib/snippets/posts/elixir-telegran-bot/stocks_bot_3.elixir":At,"/src/lib/snippets/posts/elixir-telegran-bot/stocks_bot_initial.elixir":Tt,"/src/lib/snippets/posts/elixir-telegran-bot/structure.sh":Rt,"/src/lib/snippets/posts/elixir-telegran-bot/test_bot.sh":It,"/src/lib/snippets/posts/heap-it/max_heap.test.ts":Ot,"/src/lib/snippets/posts/heap-it/max_heap.ts":Et,"/src/lib/snippets/posts/heap-it/min_heap.test.ts":Mt,"/src/lib/snippets/posts/heap-it/min_heap.ts":Bt,"/src/lib/snippets/posts/rails-on-docker/docker-compose.yml":Gt,"/src/lib/snippets/posts/rails-on-docker/example.dockerfile":Dt,"/src/lib/snippets/posts/rails-on-docker/rails_bash.sh":$t,"/src/lib/snippets/posts/rails-on-docker/rails_new.sh":Ct,"/src/lib/snippets/posts/rails-on-docker/start_rails.sh":Ft,"/src/lib/snippets/posts/three-versions-of-leetcode-same-tree/bfs.ts":qt,"/src/lib/snippets/posts/three-versions-of-leetcode-same-tree/dfs_iterative.ts":Ut,"/src/lib/snippets/posts/three-versions-of-leetcode-same-tree/dfs_recursive.ts":Wt,"/src/lib/snippets/today-i-learned/how_to_test_phoenix_controllers/mix_task.elixir":Ht,"/src/lib/snippets/today-i-learned/how_to_test_phoenix_controllers/simple_action.elixir":Vt,"/src/lib/snippets/today-i-learned/traefik-label-for-router/traefik_conf.yml":zt})).map(s));function s([j,P]){const w=j.split("/").at(-1).split(".").at(-1),_=e.codeToHtml(P,{lang:w});return[j.replace("/src/lib/snippets/",""),{code:_,raw:P}]}return N}const En=async()=>({codes:await On()}),Mn=!0,Bn="always",zn=Object.freeze(Object.defineProperty({__proto__:null,load:En,prerender:Mn,trailingSlash:Bn},Symbol.toStringTag,{value:"Module"})),Gn=""+new URL("../assets/facebook_cover_1200x630.D6J1q_ov.jpg?h=630&w=1200",import.meta.url).href;var Dn=je('<meta name="description"> <link rel="canonical"> <meta name="keywords" content="rails, ruby, typescript, react, elixir, rust"> <meta name="twitter:image"> <meta name="robots" content="index,follow"> <meta name="googlebot" content="index,follow"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="@MRukomoynikov"> <meta name="twitter:description"> <meta name="twitter:image"> <meta property="og:title"> <meta property="og:description"> <meta property="og:image:url"> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="630"> <meta property="og:image:alt"> <meta property="og:url"> <meta property="og:type" content="website"> <meta property="og:site_name">',1),$n=je('<h1 class="svelte-1ckgkw7"><a class="svelte-1ckgkw7">Max Rukomoynikov</a></h1> <div>I love to create. Developer and designer. Looking forward to make cool things.</div>',1),Cn=je("<!> <!>",1);function Qn(e,h){it(h,!0);const N=dt(),s=()=>gt(_t,"$page",N),j=s().data.title?`${s().data.title}`:"Max Rukomoynikov",P=s().data.description?s().data.description:"Max Rukomoynikov. Software Engineer. Ruby, Rails, Typescript, React, Elixir, Rust";let a=s().data.image?s().data.image:Gn;a=`https://rukomoynikov.com${a}`;const w=ft(),[_,r]=w;var S=Cn();Ze(v=>{var A=Dn();lt.title=j;var d=Le(A);te(d,"content",P);var x=ae(d,2),y=ae(x,4);te(y,"content",a);var k=ae(y,10);te(k,"content",P);var l=ae(k,2);te(l,"content",a);var f=ae(l,2);te(f,"content",j);var m=ae(f,2);te(m,"content",P);var u=ae(m,2);te(u,"content",a);var t=ae(u,6);te(t,"content",j);var i=ae(t,2),c=ae(i,4);te(c,"content",j),Re(()=>{te(x,"href",s().url.pathname),te(i,"content",s().url.pathname)}),we(v,A)});var L=Le(S);ht(L,{children:(v,A)=>{mt(v,{children:(d,x)=>{var y=$n(),k=Le(y),l=ct(k);Re(()=>te(l,"href",_("/",void 0))),ut(k),pt(2),we(d,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=ae(L,2);bt(g,()=>h.children),we(e,S),ot()}export{Qn as component,zn as universal};
