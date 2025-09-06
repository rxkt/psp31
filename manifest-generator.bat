@setlocal enableextensions
@cd /d "%~dp0"
@echo off

IF "%~1"=="" GOTO NoArg

:loop
IF "%~1"=="" GOTO Continue
    node genmanifest.js "%~1"
    SHIFT
    GOTO loop

:NoArg
node genmanifest.js

:Continue