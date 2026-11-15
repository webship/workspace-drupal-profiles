/**
 * The Drupal profiles workspace for Webship Workspace: the `profiles/` folder as a plugin.
 *
 * What the package carries is placed by the installer from the manifest (the folder's settings file,
 * its commands, its docs and its AI items, each in the folder of its kind) and listed by --activate; the dashboard draws the workspace from the
 * settings file like any other. Nothing to register at run time yet: this is where the folder's own
 * rail buttons, row menus or assistant context would go.
 */

import type { PluginApi } from '@webship.co/workspace-plugin-api';

export const WORKSPACE_KEY = 'profiles';

/** The AI items the installer places, each in the workspace folder of its kind (ai/ in this package). */
export const AGENTS = ['profiles-builder'];
export const SKILLS = ['profiles-workflow'];
export const AI_COMMANDS = ['profiles-build'];
export const PROMPTS = ['profiles-build-and-look'];

export function register(api: PluginApi): void {
  api.addAssistantContext(() => `The profiles/ workspace is the Drupal profiles workspace (a plugin, @webship.co/workspace-drupal-profiles); its commands are the cmd-*.sh scripts in that folder. It comes with AI items for work in this folder: the agent \`profiles-builder\` (ai-agents/), the skill \`profiles-workflow\` (ai-skills/), the command \`/profiles-build\` (ai-commands/) and the prompt \`profiles-build-and-look\` (ai-prompts/).`);
}
