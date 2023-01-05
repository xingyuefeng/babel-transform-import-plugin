const transformImport = function(babel) {
  const { types, template } = babel;
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const { opts: { libraryName, alias } } = state;
        if (!types.isStringLiteral(path.node.source, { value: libraryName })) return;
        const newImports = path.node.specifiers.map(item => {
          return types.importDeclaration([types.importDefaultSpecifier(item.local)], types.stringLiteral(`${alias}/${item.local.name}`))
        })
        path.replaceWithMultiple(newImports)
      }
    }
  }
}

module.exports = transformImport;