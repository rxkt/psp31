'use strict'

const fs = require('fs'),
    path = require('path')

// Function to load a skill file
function loadSkillFile(templateId) {
    // Construct the file path
    const filePath = path.join(__dirname, '..', 'config', 'skills_client', `${templateId}.json`)
    
    try {
        // Check if the file exists
        if (fs.existsSync(filePath)) {
            // Load and parse the file
            return JSON.parse(fs.readFileSync(filePath, 'utf8'))
        } else {
            console.error(`[SkillPrediction] Skill file not found: ${templateId}.json`)
            return {}
        }
    } catch (error) {
        console.error(`[SkillPrediction] Error loading skill file ${templateId}.json:`, error)
        return {}
    }
}

// Function to generate the skills_client.json file
function generateSkillsClientJson(templateId) {
    console.log(`[SkillPrediction] Generating skills_client.json for templateId: ${templateId}`)
    
    // Load the common skills file (9999.json)
    const commonSkills = loadSkillFile(9999)
    
    // If the templateId is 9999, just save the common skills
    if (templateId === 9999) {
        saveSkillsClientJson(commonSkills)
        return
    }
    
    // Load the race/class specific skill file
    const raceClassSkills = loadSkillFile(templateId)
    
    // If the race/class skills don't exist, save an empty object
    if (!raceClassSkills[templateId]) {
        console.error(`[SkillPrediction] No skills found for templateId: ${templateId}`)
        saveSkillsClientJson({})
        return
    }
    
    // Create a merged object that combines common skills with race/class specific skills
    const mergedSkills = {}
    
    // Add the common skills
    mergedSkills[9999] = commonSkills[9999] || {}
    
    // Add the race/class specific skills
    mergedSkills[templateId] = {}
    
    // Copy all skills from the common skills (9999.json)
    if (commonSkills[9999]) {
        Object.assign(mergedSkills[templateId], commonSkills[9999])
    }
    
    // Copy all skills from the race/class specific skills, overriding any common skills with the same ID
    Object.assign(mergedSkills[templateId], raceClassSkills[templateId])
    
    // Save the merged skills
    saveSkillsClientJson(mergedSkills)
}

// Function to save the skills_client.json file
function saveSkillsClientJson(skills) {
    const filePath = path.join(__dirname, '..', 'config', 'skills_client.json')
    
    try {
        fs.writeFileSync(filePath, JSON.stringify(skills), 'utf8')
        console.log(`[SkillPrediction] Successfully saved skills_client.json`)
    } catch (error) {
        console.error(`[SkillPrediction] Error saving skills_client.json:`, error)
    }
}

// Export the function
module.exports = generateSkillsClientJson