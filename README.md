# @webship/workspace-drupal-profiles

The **Drupal profiles** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `profiles/` folder (type `sites`), its settings file (`core/config/workspace.profiles.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-drupal-profiles
bash core/scripts/plugins.sh --activate drupal-profiles     # puts `profiles` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install drupal-profiles      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## The commands

| Command |
| --- |
| `cmd-build-profiles-bear.sh` |
| `cmd-build-profiles-commerce.sh` |
| `cmd-build-profiles-cucumber.sh` |
| `cmd-build-profiles-degov.sh` |
| `cmd-build-profiles-droopler.sh` |
| `cmd-build-profiles-dropsolid_rocketship.sh` |
| `cmd-build-profiles-drupal_demo_umami.sh` |
| `cmd-build-profiles-drupal_minimal.sh` |
| `cmd-build-profiles-drupal_standard.sh` |
| `cmd-build-profiles-drustack.sh` |
| `cmd-build-profiles-drutopia.sh` |
| `cmd-build-profiles-govcms8.sh` |
| `cmd-build-profiles-lightning.sh` |
| `cmd-build-profiles-mandatory.sh` |
| `cmd-build-profiles-openedu.sh` |
| `cmd-build-profiles-openfed.sh` |
| `cmd-build-profiles-openlucius.sh` |
| `cmd-build-profiles-openrestaurant.sh` |
| `cmd-build-profiles-openy.sh` |
| `cmd-build-profiles-opigno_lms.sh` |
| `cmd-build-profiles-orange_ecom_profile.sh` |
| `cmd-build-profiles-panopoly.sh` |
| `cmd-build-profiles-paragon.sh` |
| `cmd-build-profiles-pino.sh` |
| `cmd-build-profiles-presto.sh` |
| `cmd-build-profiles-quick_start.sh` |
| `cmd-build-profiles-sector.sh` |
| `cmd-build-profiles-seeds.sh` |
| `cmd-build-profiles-sm_dev_portal.sh` |
| `cmd-build-profiles-social.sh` |
| `cmd-build-profiles-splashawards.sh` |
| `cmd-build-profiles-thunder.sh` |
| `cmd-build-profiles-university.sh` |
| `cmd-build-profiles-webship.sh` |
| `cmd-build-profiles-wxt.sh` |
| `cmd-build-profiles.sh` |
| `cmd-tools-checks.sh` |
| `cmd-tools-clone.sh` |
| `cmd-tools-gitlab-ci-local.sh` |
| `cmd-tools-graphify.sh` |
| `cmd-tools-obsidian.sh` |
| `cmd-tools-ragify.sh` |
| `cmd-tools-reclaim.sh` |
| `cmd-tools-remove.sh` |
| `cmd-tools-screen.sh` |
| `cmd-tools-update-all.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
