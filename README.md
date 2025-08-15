Version: Alpaca

Course: SENG8120 - Modern Automated Testing Assignment #4
Author: Richmond Adadzi

Overview

This TypeScript project provides utility functions for calculating canvas sizes, required paint quantities, and painting costs. The project is built using Test-Driven Development (TDD).

You can calculate:

-Canvas area based on dimensions
-Amount of paint needed (including multiple coats)
-Estimated painting cost based on paint price

Setup Instructions
Prerequisites
-Node.js installed on your system
-Jest installed on your system
-A GitHub account and Git installed
-VS Code

Installation & Initial Setup

Since the project was downloaded as a ZIP and then pushed to GitHub, here’s how you set it up:

1. Install Node Modules: npm install
2. Install Jest Type Definitions: npm i --save-dev @types/jest. This allows Jest to support TypeScript typings, enabling better IntelliSense in the editor.

-Build the Project

bash
npm run build : This compiles TypeScript into JavaScript

-Run the App

bash
npm start : Make sure you’ve built the project first with npm run build

-Running Tests
Run all Jest unit tests:

bash
npm run test

-Watch Mode:
Continuously watch for changes and re-run tests:

bash
npm run test -- --watch

-Specific Test File:

bash
npm run test tests/paintRequiredCalculator.test.ts

-Code Coverage

Generate a code coverage report:
npm run test -- --coverage
Reports will appear in the /coverage folder.


Additional Info

-Edge cases and error handling are fully tested.
-Every test file is paired with its corresponding module.
-Invalid input (e.g., negative values or zero denominators) triggers proper errors.

Notes

-This repository was manually uploaded to GitHub after downloading the source ZIP.
-All packages and dependencies were installed locally using npm.
-You must build the project after each change to see updates.