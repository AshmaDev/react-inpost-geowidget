# react-inpost-geowidget
A simple React.js component for Inpost Geowidget

[![Tests](https://github.com/AshmaDev/react-inpost-geowidget/actions/workflows/node.js.yml/badge.svg)](https://github.com/AshmaDev/react-inpost-geowidget/actions/workflows/node.js.yml)

## Getting Started

This package includes a simple React.js Component for Inpost Geowidget (v5 Beta). See [docs](https://dokumentacja-inpost.atlassian.net/wiki/spaces/PL/pages/50069505/Geowidget+v5+Beta) for more details.

### Installation

```sh
npm i react-inpost-geowidget
# or
yarn add react-inpost-geowidget
```

### Usage

First, obtain the token to the API:
- [Production](https://manager.paczkomaty.pl)
- [Sanbox](https://sandbox-manager.paczkomaty.pl)

```ts
import { InpostGeowidget } from "react-inpost-geowidget";

function App() {
  const onPointCallback = (e) => {
    console.log(e);
  }
  
  return (
    <div className="App">
      <InpostGeowidget 
        token={YOUR_API_TOKEN}
        onpoint={onPointCallback}
      />
    </div>
  );
}

export default App;
```

Optional component props:
- language (default 'pl')
- config (default 'parcelCollect')

Read more about config parameter in the [docs](https://dokumentacja-inpost.atlassian.net/wiki/spaces/PL/pages/50069505/Geowidget+v5+Beta).

## License

This project is licensed under the MIT License.
