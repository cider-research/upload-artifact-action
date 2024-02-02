
// CommonJS
const {DefaultArtifactClient} = require('@actions/artifact')
const artifact = new DefaultArtifactClient()

console.log("Starting upload...");

(async () => {
    const {id, size} = await artifact.uploadArtifact(
        // name of the artifact
        'my-artifact',
        // files to include (supports absolute and relative paths)
        ['/usr/app/file.txt'],
        {
        // optional: how long to retain the artifact
        // if unspecified, defaults to repository/org retention settings (the limit of this value)
        retentionDays: 10
        }
    )
})()
console.log("Done!");

// Add your application logic here