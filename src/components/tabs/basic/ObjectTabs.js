import * as React from "react";
import { ArrayTabs } from "./ArrayTabs";

export const ObjectTabs = ({ tabs }) => <ArrayTabs tabs={Object.entries(tabs)} />;
