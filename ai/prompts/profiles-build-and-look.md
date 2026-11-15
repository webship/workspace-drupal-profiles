Build one Drupal installation profile in the profiles folder, say what it is made of, and clear it.

The launch line is for Claude Code, the default; the text between the triple quotes can be given to another AI CLI as it is.

```
claude --permission-mode bypassPermissions """
Build the profile <profile> in the profiles folder, tell me what it is made of, then clear it
# ~/workspace/profiles/<profile> · https://<profile>.ddev.site · container-based (DDEV by default)
# the builder is cmd-build-profiles-<profile>.sh: no argument, no --help, it removes the old build first
# never cmd-build-profiles.sh (every profile, with sudo) and never cmd-tools-update-all.sh (composer on the host)

1. ls -d ~/workspace/profiles/<profile>
   stop and ask me if that folder exists
2. read cmd-build-profiles-<profile>.sh and tell me what it will create
3. bash cmd-build-profiles-<profile>.sh
4. in the folder of the build: ddev composer show --direct
   tell me the packages the distribution requires, and the Drupal core version
5. bash cmd-tools-checks.sh <profile> --list
   the code-quality checks it declares

If a command fails, show the line that failed and stop. Do not retry with other flags.
Report the address, the core version and the main packages.
Then ask me whether to keep the build or remove it with: bash cmd-tools-remove.sh <profile>
"""
```
