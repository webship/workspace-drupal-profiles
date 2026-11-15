# @webship.co/workspace-drupal-profiles

The **Drupal profiles** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `profiles/` folder (type `sites`), its settings file (`core/config/workspace.profiles.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-drupal-profiles
bash core/scripts/plugins.sh --activate drupal-profiles --with-needs     # puts `profiles` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install drupal-profiles      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## What it needs

The AI items land in the four AI folders, so the manifest needs them (`needs`): `ai-agents`, `ai-skills`, `ai-commands`, `ai-prompts`. `--activate drupal-profiles` and `--install drupal-profiles` stop while one is missing and name it; with `--with-needs` they are required, activated and installed first.

## The AI items

The plugin carries its own AI items (`ai/` in the package, the manifest's `ai` block), written for the work this folder is for. `--install` places each one in the workspace folder of its kind, when that folder is an active workspace folder; `--uninstall` removes them, and keeps one that was edited in its folder.

| Item | Kind | Lands in | What it is for |
| --- | --- | --- | --- |
| `profiles-builder` | Agent | `ai-agents/profiles-builder.md` | Builds one Drupal installation profile or distribution in `profiles/` with its builder, says where it answers, checks it and clears it; never runs the build-all command unasked |
| `profiles-workflow` | Skill | `ai-skills/profiles-workflow/` | How work is done in `profiles/`: pick, make sure nobody works in it, build, install, clear; every builder, every tool with its flags, the settings keys |
| `/profiles-build` | Command | `ai-commands/profiles-build.md` | `/profiles-build <profile>`: finds the builder, checks the folder is free, builds and says where the build answers |
| `profiles-build-and-look` | Prompt | `ai-prompts/profiles-build-and-look.md` | A new session that builds one profile, says what it is made of and clears it |

From its folder an item is installed into the AI CLI (Claude Code by default) like any other: the folder's page on the dashboard, or `bash cmd-tools-ai-items.sh <name> --install` in the AI folder (`--to dev/<project>` for one project). A prompt is not installed: the New screen form lists it as the start of a new session. The body of every item is plain Markdown any AI CLI can follow; Claude Code is the default shape (the frontmatter, the launch line of a prompt). Every command, flag, settings key and path an item names is checked by `tests/items.test.ts`; the shape of the items is the one of the reference, [`docs/plugin-items-pattern.md` of the WordPress plugin](https://github.com/webship/workspace-wordpress/blob/1.0.x/docs/plugin-items-pattern.md).

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
| `cmd-tools-reclaim.sh` |
| `cmd-tools-remove.sh` |
| `cmd-tools-screen.sh` |
| `cmd-tools-update-all.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
