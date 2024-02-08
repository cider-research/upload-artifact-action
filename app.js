
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

// CommonJS
const {DefaultArtifactClient} = require('@actions/artifact')
const artifact = new DefaultArtifactClient()

console.log("Starting upload...");

(async () => {
    const {id, size} = await artifact.uploadArtifact(
        // name of the artifact
        'super-linter-log',
        // files to include (supports absolute and relative paths)
        ['/usr/app/file.txt'],
        // root directory to capture file paths from
        '/usr/app',
        {
        // optional: how long to retain the artifact
        // if unspecified, defaults to repository/org retention settings (the limit of this value)
        retentionDays: 10
        }
    )
})()



(async () => {
    const {id, size} = await artifact.uploadArtifact(
        // name of the artifact
        'super-linter-log',
        // files to include (supports absolute and relative paths)
        ['/usr/app/file.txt'],
        // root directory to capture file paths from
        '/usr/app',
        {
        // optional: how long to retain the artifact
        // if unspecified, defaults to repository/org retention settings (the limit of this value)
        retentionDays: 10
        }
    )
})()
console.log("Done!");

// Add your application logic here