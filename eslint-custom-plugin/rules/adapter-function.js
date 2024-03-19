module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "Name of function, which will return map array, must starts with 'adapter' and be in camelCase",
    },
    fixable: "code",
    schema: [], // no options
    messages: {
      startWithAdapter: "Function name should be started with 'adapter'"
    }
  },
  create: function(context) {
    return {
      FunctionDeclaration(node) {
        if(node.id.name.match(/adapter/i)?.index > 0) {
          context.report({
            node,
            messageId: "startWithAdapter",
          })
        }
      },
    };
  }
};
