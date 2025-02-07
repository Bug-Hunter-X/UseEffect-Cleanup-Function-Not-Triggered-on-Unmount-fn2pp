# React useEffect Cleanup Function Issue

This repository demonstrates a problem with the cleanup function in React's `useEffect` hook.  The example component should log 'Component unmounted' to the console when it's removed from the DOM. However, under certain conditions (e.g., rapid component re-renders or conditional rendering), this cleanup function might not be called reliably.

## Problem Description
The provided code uses `useEffect` with an empty dependency array `[]` to simulate a situation where the effect should only run once after mount. However, the cleanup function, intended to execute before the component is unmounted, fails to run, leading to potential memory leaks or unexpected behavior. The issue is subtle and might not manifest consistently, making debugging challenging.

## Solution
The issue might stem from improper use of useEffect.  A complete solution or possible workarounds are available in the `bugSolution.js` file.