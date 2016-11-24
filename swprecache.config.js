module.exports = {
    "staticFileGlobs": [
        "images/*",
        "scripts/*",
        "src/*"
    ],
     "runtimeCaching": [{
             "urlPattern": /opendata.brussels.be/,
             "handler": "cacheFirst"
    }]
}