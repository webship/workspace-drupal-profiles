---
description: Build one Drupal installation profile or distribution in the profiles/ folder of the Webship Workspace with its builder, after checking that nobody works in that folder, and say where it answers.
argument-hint: '<profile>'
---

# /profiles-build

Build the profile of `~/workspace/profiles` named in: `$ARGUMENTS`

The arguments are the text typed after the command: the first word is the profile, as its
builder names it (`webship`, `drupal_minimal`, `thunder`). With no profile, stop and list the
ones that can be built. The workspace is container-based (DDEV by default): the builder runs the
build in its own container.

## 1. Find the builder

```bash
cd ~/workspace/profiles
ls cmd-build-profiles-*.sh
grep -h "^# workspace-name:" cmd-build-profiles-*.sh
```

The builder is `cmd-build-profiles-<profile>.sh`. If there is none of that name, say which there
are and stop. Never use `cmd-build-profiles.sh`: it builds every profile and uses `sudo`.

## 2. Make sure nobody works in it

```bash
ls -d ~/workspace/profiles/<profile> 2>/dev/null
git -C ~/workspace/profiles/<profile> status -sb 2>/dev/null
```

The builder removes that folder and its container project first. If the folder exists, say what
is in it and ask before going on.

## 3. Build

Read the builder first; it takes no argument and has no `--help` (what is typed after it is
ignored and the build starts).

```bash
bash cmd-build-profiles-webship.sh
```

With the builder of the profile that was asked for. Run it once. If it fails, show the line that
failed and stop.

## 4. Report

The profile, the folder, the address (`https://<profile>.ddev.site`), and that the site is not
installed yet. Then the commands that go on from here:

```bash
bash cmd-tools-checks.sh <profile> --list
bash cmd-tools-remove.sh <profile>
```

For more, hand over to the `profiles-builder` agent; the `profiles-workflow` skill lists every
command of the folder.
