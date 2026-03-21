const React = require("react");

module.exports = {
  useTranslations: () => (key) => key,
  NextIntlClientProvider: ({ children }) => React.createElement(React.Fragment, null, children),
};
