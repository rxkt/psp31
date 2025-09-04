# Client Skills Organization

This document explains the organization of skill files in the `skills_client` directory.

## Overview

The `skills_client` directory contains JSON files that were split from the main `skills_client.json` file. Each file represents a specific combination of race and class, with the file name indicating which race and class it belongs to.

## File Naming Convention

The file names follow this pattern: `XRRCC.json`

Where:
- `X`: A constant (1)
- `RR`: Two-digit race ID
- `CC`: Two-digit class ID

## Race and Class IDs

### Race IDs
Based on the calculation: `race = Math.floor(templateId / 100) % 100 - 1`

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

### Class IDs
Based on the calculation: `job = templateId % 100 - 1`

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

## File Mapping

### General Skills
- `9999.json`: General skills for all classes (basic movement, common combat actions, universal abilities)

### Race-Class Combinations
Files are named according to the formula: `templateId = 10000 + (race + 1) * 100 + (job + 1)`

#### Race 0 (Male Human)
- `10101.json`: Male Human Warrior
- `10102.json`: Male Human Lancer
- `10103.json`: Male Human Slayer
- `10104.json`: Male Human Berserker
- `10105.json`: Male Human Sorcerer
- `10106.json`: Male Human Archer
- `10107.json`: Male Human Priest
- `10108.json`: Male Human Elementalist (Mystic)
- `10111.json`: Male Human Brawler

#### Race 1 (Female Human)
- `10201.json`: Female Human Warrior
- `10202.json`: Female Human Lancer
- `10203.json`: Female Human Slayer
- `10204.json`: Female Human Berserker
- `10205.json`: Female Human Sorcerer
- `10206.json`: Female Human Archer
- `10207.json`: Female Human Priest
- `10208.json`: Female Human Elementalist (Mystic)
- `10211.json`: Female Human Brawler

#### Race 2 (Male High Elf)
- `10301.json`: Male High Elf Warrior
- `10302.json`: Male High Elf Lancer
- `10303.json`: Male High Elf Slayer
- `10304.json`: Male High Elf Berserker
- `10305.json`: Male High Elf Sorcerer
- `10306.json`: Male High Elf Archer
- `10307.json`: Male High Elf Priest
- `10308.json`: Male High Elf Elementalist (Mystic)

#### Race 3 (Female High Elf)
- `10401.json`: Female High Elf Warrior
- `10402.json`: Female High Elf Lancer
- `10403.json`: Female High Elf Slayer
- `10404.json`: Female High Elf Berserker
- `10405.json`: Female High Elf Sorcerer
- `10406.json`: Female High Elf Archer
- `10407.json`: Female High Elf Priest
- `10408.json`: Female High Elf Elementalist (Mystic)
- `10410.json`: Female High Elf Engineer (Gunner)

#### Race 4 (Male Aman)
- `10501.json`: Male Aman Warrior
- `10502.json`: Male Aman Lancer
- `10503.json`: Male Aman Slayer
- `10504.json`: Male Aman Berserker
- `10505.json`: Male Aman Sorcerer
- `10506.json`: Male Aman Archer
- `10507.json`: Male Aman Priest
- `10508.json`: Male Aman Elementalist (Mystic)

#### Race 5 (Female Aman)
- `10601.json`: Female Aman Warrior
- `10602.json`: Female Aman Lancer
- `10603.json`: Female Aman Slayer
- `10604.json`: Female Aman Berserker
- `10605.json`: Female Aman Sorcerer
- `10606.json`: Female Aman Archer
- `10607.json`: Female Aman Priest
- `10608.json`: Female Aman Elementalist (Mystic)

#### Race 6 (Male Castanic)
- `10701.json`: Male Castanic Warrior
- `10702.json`: Male Castanic Lancer
- `10703.json`: Male Castanic Slayer
- `10704.json`: Male Castanic Berserker
- `10705.json`: Male Castanic Sorcerer
- `10706.json`: Male Castanic Archer
- `10707.json`: Male Castanic Priest
- `10708.json`: Male Castanic Elementalist (Mystic)

#### Race 7 (Female Castanic)
- `10801.json`: Female Castanic Warrior
- `10802.json`: Female Castanic Lancer
- `10803.json`: Female Castanic Slayer
- `10804.json`: Female Castanic Berserker
- `10805.json`: Female Castanic Sorcerer
- `10806.json`: Female Castanic Archer
- `10807.json`: Female Castanic Priest
- `10808.json`: Female Castanic Elementalist (Mystic)
- `10810.json`: Female Castanic Engineer (Gunner)
- `10813.json`: Female Castanic Valkyrie

#### Race 8 (Popori)
- `10901.json`: Popori Warrior
- `10902.json`: Popori Lancer
- `10903.json`: Popori Slayer
- `10904.json`: Popori Berserker
- `10905.json`: Popori Sorcerer
- `10906.json`: Popori Archer
- `10907.json`: Popori Priest
- `10908.json`: Popori Elementalist (Mystic)

#### Race 9 (Elin)
- `11001.json`: Elin Warrior
- `11002.json`: Elin Lancer
- `11003.json`: Elin Slayer
- `11004.json`: Elin Berserker
- `11005.json`: Elin Sorcerer
- `11006.json`: Elin Archer
- `11007.json`: Elin Priest
- `11008.json`: Elin Elementalist (Mystic)
- `11009.json`: Elin Soulless (Reaper)
- `11010.json`: Elin Engineer (Gunner)
- `11011.json`: Elin Brawler
- `11012.json`: Elin Ninja

#### Race 10 (Baraka)
- `11101.json`: Baraka Warrior
- `11102.json`: Baraka Lancer
- `11103.json`: Baraka Slayer
- `11104.json`: Baraka Berserker
- `11105.json`: Baraka Sorcerer
- `11106.json`: Baraka Archer
- `11107.json`: Baraka Priest
- `11108.json`: Baraka Elementalist (Mystic)

## How the Files are Used

When a player logs in, the skill prediction module:
1. Determines the player's race and class from their `templateId`
2. Loads the appropriate skill file based on the calculated race and class IDs
3. Uses the skill data to predict skill behavior and timing

### Implementation in player.js

```javascript
mod.hook('S_LOGIN', 12, HOOK_LAST, event => {
    this.reset()

    Object.assign(this, {
        gameId: event.gameId,
        templateId: event.templateId,
        race: Math.floor(event.templateId / 100) % 100 - 1,
        job: event.templateId % 100 - 1
    })
})
```

### Example Calculations

For a player with templateId 10101:
- Race: Math.floor(10101 / 100) % 100 - 1 = 0 (Male Human)
- Job: 10101 % 100 - 1 = 0 (Warrior)

For an Elin Archer (race ID 9, class ID 5):
- templateId = 10000 + (9 + 1) * 100 + (5 + 1) = 11006
- This corresponds to the file `11006.json`

## File Structure

Each file contains a JSON object with a single top-level key matching the filename (without extension). Under this key are skill IDs with their associated properties such as:
- `category`: Categories the skill belongs to
- `dcType`: Type of skill (combo, normal, etc.)
- `timeRate`: Speed multiplier
- `length`: Duration in milliseconds
- `distance`: Travel distance
- And other skill-specific properties

Example from 10101.json (Male Human Warrior):
```json
{
  "10101": {
    "10100": {
      "category": [1001, 11, 101, 9011, 10000, 560, 9999],
      "dcType": "combo",
      "timeRate": 1.1,
      "pendingStartTime": 363,
      "length": 566,
      "distance": 47.53
    },
    "10101": {
      "category": [1001, 11, 101, 9011, 10001, 560, 9999],
      "dcType": "combo",
      "timeRate": 1.1,
      "pendingStartTime": 409,
      "length": 657,
      "distance": 42.12
    }
    // More skills...
  }
}
```

**Example 1: 10101.json**
- templateId = 10101
- race = Math.floor(10101 / 100) % 100 - 1 = Math.floor(101.01) % 100 - 1 = 101 % 100 - 1 = 0
- job = 10101 % 100 - 1 = 1 - 1 = 0
- Result: Race ID 0 (Male Human), Job ID 0 (Warrior)

**Example 2: 10201.json**
- templateId = 10201
- race = Math.floor(10201 / 100) % 100 - 1 = Math.floor(102.01) % 100 - 1 = 102 % 100 - 1 = 1
- job = 10201 % 100 - 1 = 1 - 1 = 0
- Result: Race ID 1 (Female Human), Job ID 0 (Warrior)

**Example 3: 10706.json**
- templateId = 10706
- race = Math.floor(10706 / 100) % 100 - 1 = Math.floor(107.06) % 100 - 1 = 107 % 100 - 1 = 6
- job = 10706 % 100 - 1 = 6 - 1 = 5
- Result: Race ID 6 (Male Castanic), Job ID 5 (Archer)

**Example 4: 11006.json**
- templateId = 11006
- race = Math.floor(11006 / 100) % 100 - 1 = Math.floor(110.06) % 100 - 1 = 110 % 100 - 1 = 9
- job = 11006 % 100 - 1 = 6 - 1 = 5
- Result: Race ID 9 (Elin), Job ID 5 (Archer)

**Example 5: 11009.json**
- templateId = 11009
- race = Math.floor(11009 / 100) % 100 - 1 = Math.floor(110.09) % 100 - 1 = 110 % 100 - 1 = 9
- job = 11009 % 100 - 1 = 9 - 1 = 8
- Result: Race ID 9 (Elin), Job ID 8 (Reaper)

## Conclusion

The organization of skills into separate files by race and class combinations allows the skill prediction module to efficiently load only the necessary data for the current character. This approach improves performance and reduces memory usage while ensuring accurate prediction of skill behavior.

The skill prediction module uses this data to:
1. Determine the duration of skills
2. Calculate movement distances
3. Handle skill chains and combos
4. Apply appropriate animation speeds
5. Manage skill cooldowns

## FIN