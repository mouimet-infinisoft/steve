export const config = {
  feature: {
    name: "Messages"
  },
  archive: {
    subscribe: /(Messages.archive.click)/
  },
  create: {
    subscribe: /(Messages.click|Cases.create.click)/
  }
};
