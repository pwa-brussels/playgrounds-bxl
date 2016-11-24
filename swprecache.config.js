module.exports = {
    "staticFileGlobs": [
        "images/*",
        "scripts/*",
        "styles/*"
    ],
    "runtimeCaching": [{
        "urlPattern": /yahooapi/,
        "handler": "cacheFirst"
    }]
}