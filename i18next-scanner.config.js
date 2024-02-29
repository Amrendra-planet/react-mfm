module.exports = {
  options: {
    debug: true,
    lngs: ["en"], //can define other languages such as de (Deutsch)
    ns: ["common"],
    defaultNs: "common",
    defaultValue: "__STRING_NOT_TRANSLATED__",
    resource: {
      loadPath: "src/translations/{{lng}}/{{ns}}.json",
      savePath: "src/translations/{{lng}}/{{ns}}.json"
    },
    func: {
      list: ["t"]
    },
    nsSeparator: false, // namespace separator
    keySeparator: false // key separator
  }
};
