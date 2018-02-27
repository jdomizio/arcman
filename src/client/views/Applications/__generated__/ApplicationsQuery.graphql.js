/**
 * @flow
 * @relayHash c52809ecc77d9280876992535baeb20c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ApplicationsQueryVariables = {| |};
export type ApplicationsQueryResponse = {|
  +allApplications: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +description: ?string,
  |}>,
|};
*/


/*
query ApplicationsQuery {
  allApplications {
    id
    name
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allApplications",
    "storageKey": null,
    "args": null,
    "concreteType": "Application",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ApplicationsQuery",
  "id": null,
  "text": "query ApplicationsQuery {\n  allApplications {\n    id\n    name\n    description\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ApplicationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "ApplicationsQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'f38536956e874a217ddfe860027ec00b';
module.exports = node;
