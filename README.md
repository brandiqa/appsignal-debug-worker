# 👷 AppSignal Debug Worker

A Cloudflare Workers project demonstrating how to use [AppSignal](https://www.appsignal.com/) to debug code.

## Prerequisites

You'll need the following to run this code:

1. Sign up for a 30 day trial account at [AppSignal](https://www.appsignal.com/) and acquire an API key
2. Node version 14+ and npm version 7+
3. [Cloudflare](https://www.cloudflare.com/) account
4. [Wrangler](https://developers.cloudflare.com/workers/get-started/guide) CLI and authenticated with your Cloudflare account
5. Visual Studio Code editor with [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension installed

## Setup

Clone the repository to your workspace then execute the following:

````bash
# 1. Navigate to project folder/Open in VS Code then access terminal
cd appsignal-debug-worker/

# 2. Update wrangler.toml to reflect your account id(cloudflare workers)

# 3. Upload your AppSignal API Key
wrangler secret put APPSIGNAL_API

# 4. Install package dependencies
npm install

# 5. Launch the dev server
npm run dev

#. 6. Execute HTTP Commands located in rest.http file
```

## License

Copyright © 2021 Michael Wanyoike

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
````
