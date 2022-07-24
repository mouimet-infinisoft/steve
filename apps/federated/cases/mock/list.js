import { generateUuid, generateId } from "@/helpers";

const states = [
  "todo",
  "inprogress",
  "blocked",
  "waiting",
  "suspended",
  "complete"
];

const caseslist = () =>
  new Array(10)
    .fill(0)
    .map(() => {
      const reference = "C-" + generateId("");
      return {
      // General (Header)
      id: generateUuid(),
      label: reference, // This ifled is important and must be standard. Breadcrumd use it and other may as well
      reference,
      state: states[Math.round(Math.floor(Math.random() * states.length))], // todo - inprogress - blocked - waiting - suspended - complete
      step: "request", // request - case - service - closed
      tags: ["person"],

      // Request
      services: [{ key: generateUuid(), label: "Plumber Bronze", tag: "Service" }],
      location: [{ key: generateUuid(), label: "spread contact#org#uuid", tag: "Office" }], // ordered list by  priority
      origin: "Court of Quebec", // dpj , court, volunteer
      motives: [{ key: generateUuid(), label: "violence", tag: "Motives" }],
      notes:"",

      // Meta Operation

      operation: "update", // create - update - delete
      // mutation:"full",// partial - full (create=full) update=full or partial
      timestamp: "1657479142",
      createdAt: "1657479142",
      updatedAt: "1657479142",
      username: "Jean Dupuis",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random(),

      // Meta Data
      __extra__: [
        { id: generateUuid(), key: "customfield", value: "customvalue" }
      ],
      __relation__: [
        {
          id: generateUuid(),
          key: "referent",
          value: "personUUID",
          authorizedTransport: true //Extra attributes concerned by (subject / relation)
        },
        { id: generateUuid(), key: "father", value: "personUUID" }
      ]
    }})
    .reduce((acc, props, i) => ({ ...acc, [props?.id]: props }), {});

export default caseslist;
