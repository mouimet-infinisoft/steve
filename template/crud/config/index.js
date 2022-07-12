export const config = {
  feature: {
    name: "FEATURE_NAME"
  },
  archive: {
    subscribe: /(FEATURE_NAME.archive.click)/
  },
  create: {
    subscribe: /(FEATURE_NAME.click|FEATURE_NAME.create.click)/
  }
};
