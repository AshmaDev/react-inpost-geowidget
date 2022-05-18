import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { InpostGeowidget } from "../dist/cjs/index.js";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<InpostGeowidget />);
});
