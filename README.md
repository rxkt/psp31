# Skill Prediction for TERA

A module for TERA Toolbox that simulates skills client-side, eliminating ping-based delays and animation locks. This module significantly improves the gameplay experience for players with higher latency by predicting skill execution locally before server confirmation.

## Overview

Skill Prediction works by:
- Intercepting skill usage packets sent to the server
- Simulating the skill execution locally on the client
- Handling server responses to maintain synchronization
- Adjusting for network conditions automatically

This creates a more responsive gameplay experience regardless of your connection quality to the game servers.

## Important Note

Skill Prediction does **not** reduce your actual ping to the server. It only mitigates the effects of high ping on skill execution and animation locks. If you wish to have lower ping in general, consider using a gaming VPN service such as:
- [Mudfish](https://mudfish.net/)
- [Pingzapper](https://pingzapper.com/)
- [WTFast](https://www.wtfast.com/)

## Features

- Eliminates ping-based delays in skill execution
- Removes animation locks caused by network latency
- Automatically adjusts to your connection quality
- Provides accurate ping measurement
- Includes debugging tools for troubleshooting

## Commands

Use these commands in-game to control the module:

- `/8 sp` - Shows available commands
- `/8 sp ping` - Displays ping statistics
- `/8 sp debug` - Toggles skill debugging
- `/8 sp debug loc` - Toggles location debugging
- `/8 sp debug abnormal` - Toggles abnormality debugging

## Configuration

The module can be configured through the `settings.json` file, which includes options for:
- Skill prediction behavior
- Ping measurement settings
- Debug options

## History

This module has a rich history in the TERA modding community:
- Originally created by Pinkie Pie
- Forked and maintained by various contributors over time
- This version was tailored to patch 31.04 by merusira
- Currently maintained as a Toolbox-compatible module

## For Developers

### Skill Data Structure

The `config/skills.js` file contains skill data specific to skill-prediction. The basic structure follows:
* `classId` → `skillGroup` → `skillSub` → `skillData` **OR**
* `classId` → `skillGroup` → `'*'` → `skillData` **OR**
* `classId` → `'*'` → `skillData` **OR**
* `'*'` → `skillId` → `skillData`

`skillGroup` and `skillSub` are derived from the skill ID, which follows this pattern for player skills:
* **XXYYZZ** where **X** = `skillGroup`, **Y** = `skillLevel`, **Z** = `skillSub`

### Skill Data Properties

`skillData` is an object containing one or more of the following properties:

- **type**: SP-specific skill type, including:
  - `'hold'`: Temporarily-held skills (Corruption Ring)
  - `'holdInfinite'`: Infinitely-held skills (Stand Fast, Axe Block, etc.)
  - `'dash'`: Fixed-speed dash using S_INSTANT_DASH
  - `'teleport'`: Fixed-distance teleport using S_INSTANT_MOVE
  - `'lockon'`: Lock-on targeting skills
  - `'lockonCast'`: Lock-on casting skills
  - `'userProjectile'`: Client-sided projectile (not a skill)
- **fixedSpeed** (boolean): Ignore attack speed
- **length**: Skill animation length before taking into account speed multipliers
- **distance**: Distance the skill moves the player in the direction it's facing
- **moveDir**: Distance rotation in half-turns (default 0)
- **noInterrupt**: List of skills that cannot be interrupted by this skill
- **projectiles**: Array of `skillSub` projectiles (requires DEBUG_PROJECTILES to be enabled)
- **triggerAbnormal**: Abnormalities this skill triggers on use
- **consumeAbnormal**: Abnormalities consumed before this skill begins
- **consumeAbnormalEnd**: Abnormalities consumed after this skill ends
- **movement**: Array of segment objects for movement control
- **glyphs**: Glyph-specific modifications to skills
- **abnormals**: Abnormality-specific modifications to skills
- **chains**: Legacy skill chaining system (deprecated)
- **userChain**: Forced initial chain for simulating serverside anti-cheat
- **abnormalChains**: Abnormality-based skill chains
- **categoryChains**: Category-based skill chains
- **inPlace**: Modifications when casting a skill without movement
- **stamina**: Stamina/resource cost of the skill
- **instantStamina**: Simulate stamina usage without waiting for server response
- **requiredBuff**: Abnormality required to use this skill
- **forceClip**: Prevents iframes from clipping through gates
- **interruptibleWithAbnormal**: Abnormality-based skill interruption
- **chainOnRelease**: Animation to play if a held button is released early
- **teleportStage**: Stage at which to apply teleport
- **partyOnly**: Restricts lock-on to party members only
- **flyingSpeed**: Projectile speed
- **flyingDistance**: Projectile curve endpoint
- **hasChains**: Flags this skill as being prone to desync
- **noRetry**: Disables automatic retries for this skill
- **race**: Race+gender specific overrides
- **level**: Skill level specific overrides

## Class IDs

- 0: Warrior
- 1: Lancer
- 2: Slayer
- 3: Berserker
- 4: Sorcerer
- 5: Archer
- 6: Priest
- 7: Elementalist (Mystic)
- 8: Soulless (Reaper)
- 9: Engineer (Gunner)
- 10: Brawler
- 11: Ninja
- 12: Valkyrie

## Race IDs

- 0: Male Human
- 1: Female Human
- 2: Male High Elf
- 3: Female High Elf
- 4: Male Aman
- 5: Female Aman
- 6: Male Castanic
- 7: Female Castanic
- 8: Popori
- 9: Elin
- 10: Baraka

## Compatibility

This module conflicts with several other modules that affect skill usage. Do not use Skill Prediction with:
- cooldowns
- lockons
- fastfire/fast-fire
- ping-compensation
- ping-remover
- other skill-prediction variants

## Credits

Many have contributed to this module over the years. This version is a fork of Pinkie Pie's original Skill Prediction for Caali's tera-proxy.
Then many have modified to be compatible with TERA Toolbox.
This final version was modded to work with Tera patch 31.04, on private server Omni, by merusira and Kasane.

## FIN