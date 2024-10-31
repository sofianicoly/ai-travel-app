const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Adicionando extensões de fonte se necessário
config.resolver.sourceExts.push("js", "json", "ts", "tsx");

module.exports = config;
