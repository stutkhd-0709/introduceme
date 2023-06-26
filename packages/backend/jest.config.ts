export default {
  preset: 'ts-jest/presets/js-with-ts-esm', // TSをESM構文に変換する
  transformIgnorePatterns: ["/node_modules/(?!three/examples/)"],
  transform: {
    "node_modules/three/examples/.+.(j|t)sx?$": "ts-jest",
  },
  testEnvironment: "node", // or jest-environment-jsdom
}