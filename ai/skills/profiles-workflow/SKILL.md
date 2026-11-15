---
name: profiles-workflow
description: How work is done in the `profiles/` folder of the Webship Workspace — which `cmd-build-profiles-<name>.sh` builds which Drupal installation profile or distribution, what a builder does and removes, why the builders take no argument and have no `--help`, which commands use `sudo` or the host and are never run unasked, how a build is checked and removed, with the flags of each tool and the settings keys of the folder. Use when asked to "build a profile", "which distributions can be built here", "remove the profile build", or when a command of `profiles/` is about to be run.
argument-hint: '[what you are about to do in profiles]'
---

# profiles-workflow

`~/workspace/profiles` is the Profiles folder of a Webship Workspace (container-based, DDEV by default).
Profiles are Drupal installation profiles and distributions, built one per folder to look at, compare and work on. It comes with the Profiles plugin (`@webship.co/workspace-drupal-profiles`), which places the commands below in the folder. Every command finds the workspace from its own path; run it from the folder, and read `bash <command> --help` before quoting a flag.

## The order of work

1. **Pick** the profile: `grep -h "^# workspace-name:" cmd-build-profiles-*.sh`.
2. **Make sure nobody works in it**: `ls -d ~/workspace/profiles/webship`. A builder removes that
   folder and its container project first.
3. **Build**: `bash cmd-build-profiles-webship.sh`. No argument; nothing typed after it is read.
4. **Install** in the build's folder when a site is wanted: `ddev drush site:install`, or the
   installer at `https://webship.ddev.site`.
5. **Clear** it, after asking: `bash cmd-tools-remove.sh webship`.

## Commands

| Command | What it does | Flags |
| --- | --- | --- |
| `cmd-build-profiles-bear.sh` | Builds Bear in `profiles/bear`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-commerce.sh` | Builds Commerce in `profiles/commerce`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-cucumber.sh` | Builds Cucumber in `profiles/cucumber`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-degov.sh` | Builds degov in `profiles/degov`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-droopler.sh` | Builds Droopler in `profiles/droopler`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-dropsolid_rocketship.sh` | Builds Dropsolid Rocketship in `profiles/dropsolid_rocketship`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-drupal_demo_umami.sh` | Builds Drupal demo umami in `profiles/drupal_demo_umami`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-drupal_minimal.sh` | Builds Drupal minimal in `profiles/drupal_minimal`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-drupal_standard.sh` | Builds Drupal standard in `profiles/drupal_standard`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-drustack.sh` | Builds DruStack in `profiles/drustack`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-drutopia.sh` | Builds Drutopia in `profiles/drutopia`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-govcms8.sh` | Builds Base in `profiles/govcms8`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-lightning.sh` | Builds Lightning in `profiles/lightning`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-mandatory.sh` | Builds Mandatory in `profiles/mandatory`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-openedu.sh` | Builds Openedu in `profiles/openedu`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-openfed.sh` | Builds Openfed in `profiles/openfed`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-openlucius.sh` | Builds OpenLucius in `profiles/openlucius`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-openrestaurant.sh` | Builds OpenRestaurant in `profiles/openrestaurant`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-openy.sh` | Builds OpenY in `profiles/openy`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-opigno_lms.sh` | Builds Opigno LMS in `profiles/opigno_lms`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-orange_ecom_profile.sh` | Builds Orange Ecom Profile in `profiles/orange_ecom_profile`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-panopoly.sh` | Builds Panopoly in `profiles/panopoly`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-paragon.sh` | Builds Paragon in `profiles/paragon`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-pino.sh` | Builds Pino in `profiles/pino`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-presto.sh` | Builds Presto! -  Commerce Integration in `profiles/presto`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-quick_start.sh` | Builds Quick Start in `profiles/quick_start`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-sector.sh` | Builds Sector in `profiles/sector`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-seeds.sh` | Builds Seeds in `profiles/seeds`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-sm_dev_portal.sh` | Builds Stratus Meridian Developer Portal in `profiles/sm_dev_portal`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-social.sh` | Builds Open Social in `profiles/social`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-splashawards.sh` | Builds SplashAwards in `profiles/splashawards`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-thunder.sh` | Builds Thunder in `profiles/thunder`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-university.sh` | Builds University in `profiles/university`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-webship.sh` | Builds Webship in `profiles/webship`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles-wxt.sh` | Builds WXT in `profiles/wxt`, after removing that folder and its container project. No argument | none |
| `cmd-build-profiles.sh` | **With `sudo`.** Removes the folder of every profile on the `profiles` list, builds each one, then changes owners. Never unasked | none |
| `cmd-tools-checks.sh` | Runs the code-quality checks an item's `package.json` declares; `--list` prints the plan and runs nothing | `--browser` `--e2e` `--fail-fast` `--install` `--list` `--only` `--runner` `--skip` |
| `cmd-tools-clone.sh` | Folder and database under a new name, here or in another folder | `--branch` `--extra-hostname` `--no-build-copy` `--no-db` `--target-workspace` `--to` `--with-workspace-hostname` `--worktree` |
| `cmd-tools-gitlab-ci-local.sh` | Runs an item's GitLab CI pipeline on this machine, before a push | `--doctor` `--list` `--slim` `--variable` |
| `cmd-tools-reclaim.sh` | Disk held by projects whose folder is gone: a dry run unless `--apply` | `--apply` `--keep-days` `--list-protected` `--only` |
| `cmd-tools-remove.sh` | Containers, volumes and folder together; refuses work that is on no remote unless `--force` | `--backup` `--force` `--orphans` |
| `cmd-tools-screen.sh` | A detached session with a log the dashboard follows | `--follow` `--list` `--log` `--run` `--stop` |
| `cmd-tools-update-all.sh` | **On the host.** `composer update` in every folder. Do not run it unasked | none |

## Settings

| Key | File | What it says |
| --- | --- | --- |
| `doc.name` | `core/config/workspace.profiles.settings.yml` | The folder under the workspace root: `profiles` |
| `type` | `core/config/workspace.profiles.settings.yml` | `sites`: the rows of the page are built sites, with the Build, Tests, Checks, Users, Backup and Remove actions |
| `composer` | `core/config/workspace.profiles.settings.yml` | `manifest`: the COMPOSER menu only adds to `composer.json` here, and never installs |
| `profiles` | `core/config/workspace.profiles.settings.yml` | The profiles `cmd-build-profiles.sh` goes through, by name; each needs a `cmd-build-profiles-<name>.sh` |
| `assistant.name`, `assistant.placeholder` | `core/config/workspace.profiles.settings.yml` | What the assistant is called on this page; `default` takes the workspace's |
| `workspaces` | `core/config/settings.yml` | The active folders; `profiles` is on it once the plugin is activated |

## Rules

- **A profile builder takes no argument and has no `--help`.** Whatever is typed after it is
  ignored and the build starts: read the command, do not try it.
- **A builder removes the folder and the container project of that profile first.** Never run one
  for a profile somebody works in.
- **Never run `cmd-build-profiles.sh` unasked.** It removes the folder of every profile on the
  `profiles` list with `sudo`, builds them all one after the other, and changes owners with `sudo`.
- `cmd-tools-update-all.sh` runs `composer update` on the host in every folder: do not run it; use
  `ddev composer update` in one build.
- **Containers only** (DDEV by default): in a build's folder, `ddev composer …`, `ddev drush …`;
  never `composer`, `drush` or `php` on the host.
- **One build at a time**, and look at `df -h` first: a distribution is large.

The Profiles plugin places these beside this one, each in the workspace folder of its kind: the agent `profiles-builder` (`ai-agents/`), the command `/profiles-build` (`ai-commands/`) and the prompt `profiles-build-and-look` (`ai-prompts/`).
