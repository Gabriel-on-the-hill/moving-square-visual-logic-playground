# 🎓 Classroom Guide: Visual Logic Playground

This guide provides step-by-step instructions for using the Visual Logic Playground in your classroom to teach Week 3: The Moving Square.

## 📋 Pre-Class Setup

### 1. Deploy to GitHub Pages
- Fork or clone the repository
- Enable GitHub Pages (see README.md for instructions)
- Test the link in your browser to ensure it works
- **Bookmark the link** for easy access during class

### 2. Prepare Your Presentation
- Have the app open on your screen before class starts
- Test all features (dragging, buttons, boundaries toggle)
- Prepare 2-3 customization examples to show students

### 3. Optional: Print the Worksheet
- Print the `Week3_Student_Worksheet.md` (if you have a physical copy)
- Or share the digital version with students

---

## 🎬 Lesson Flow (45-60 minutes)

### Phase 1: Introduction (5 minutes)

**Objective**: Frame the problem and build curiosity

**What to say:**
> "Today, we're going to understand how video games work. Specifically, how a character moves on screen. Before we write any code, we're going to play with a visual tool that shows us exactly what's happening behind the scenes."

**Show the app:**
- Display the Visual Logic Playground on the projector
- Point out the blue game screen with the green box
- Ask: "What do you think will happen if I drag this box?"

---

### Phase 2: Explore the Coordinate System (10 minutes)

**Objective**: Build intuition about 2D coordinates and the "flipped Y-axis"

**Activity 1: Dragging**
1. Drag the box to the **right**
   - Ask: "What changed? Look at the numbers on the left."
   - Expected answer: "`x` increased"
   - Reinforce: "When we move right, `x` gets bigger. This is like moving right on a number line."

2. Drag the box **down**
   - Ask: "What changed now?"
   - Expected answer: "`y` increased"
   - **Key teaching moment**: "Notice: `y` got BIGGER when we moved DOWN. This is different from math class! In screen coordinates, Y increases downward."

3. Drag the box to the **top-left corner**
   - Ask: "What are the coordinates now?"
   - Expected answer: "x is close to 0, y is close to 0"
   - Reinforce: "The top-left corner is (0, 0). Just like in math, but the Y-axis is flipped."

**Discussion Question:**
> "If I want the box to be at the center of the screen, what do you think the coordinates should be? (Hint: The screen is 400×400)"
> 
> Expected answer: Around (175, 175) — the center of the box would be at (200, 200)

---

### Phase 3: Understand Operations (10 minutes)

**Objective**: Connect button clicks to mathematical operations

**Activity 2: Button Clicking**
1. Click the **→ Right** button
   - Point to the "Operation:" display
   - Read aloud: "`box.x = box.x + 5`"
   - Explain: "This means: take the current `x` value, add 5 to it, and that becomes the new `x`."

2. Click **← Left**
   - Read: "`box.x = box.x - 5`"
   - Explain: "Subtract 5 instead."

3. Click **↑ Up**
   - Read: "`box.y = box.y - 5`"
   - **Key point**: "To move UP, we SUBTRACT from `y` because Y increases downward."

4. Click **↓ Down**
   - Read: "`box.y = box.y + 5`"
   - Reinforce: "To move DOWN, we ADD to `y`."

**Discussion Question:**
> "What if we wanted the box to move faster? What would we change?"
> 
> Expected answer: "Change the 5 to a bigger number, like 10"

---

### Phase 4: Introduce Boundaries (10 minutes)

**Objective**: Understand conditional logic and why boundaries matter

**Activity 3: Boundaries Toggle**
1. **Without boundaries enabled:**
   - Click **→ Right** button repeatedly
   - The box will move off-screen or stop at the CSS boundary
   - Ask: "What happened? The box disappeared!"

2. **Enable the "Show Boundaries" checkbox**
   - Click **→ Right** button repeatedly
   - The box stops at the edge
   - Point to the "Boundary Visualizer" message
   - Read: "`Condition: box.right < WIDTH (False)`"

3. **Explain the logic:**
   - "Before moving right, the code checks: 'Is the right edge of the box less than the screen width?'"
   - "If YES (True), it moves right."
   - "If NO (False), it doesn't move. That's why it stopped!"

4. **Try other directions:**
   - Click **← Left** at the left edge → Shows `box.left > 0 (False)`
   - Click **↑ Up** at the top edge → Shows `box.top > 0 (False)`
   - Click **↓ Down** at the bottom edge → Shows `box.bottom < HEIGHT (False)`

**Discussion Questions:**
> "Why do you think we need these boundaries?"
> 
> Expected answer: "So the box doesn't go off-screen / so the player can't escape the game"

> "What would happen if we removed these conditions?"
> 
> Expected answer: "The box would disappear off the screen"

---

### Phase 5: Study the Code (10 minutes)

**Objective**: Connect visual interactions to actual Python code

**Activity 4: Code Preview**
1. Scroll down to the "Live Python Code Preview" section
2. Read through the code structure:
   ```python
   WIDTH = 400
   HEIGHT = 400
   box = Rect(100, 100, 50, 50)
   speed = 5
   ```
   - Explain: "These are the settings for our game."

3. Point to the `def draw():` function
   - Explain: "This runs every frame and draws things on screen."

4. Point to the `def update():` function
   - Explain: "This runs every frame and updates the game logic."

5. **Highlight the movement logic:**
   ```python
   if keyboard.right and box.right < WIDTH:
       box.x += speed
   ```
   - "If the RIGHT arrow is pressed AND the box isn't at the right edge, move it right."

**Connection Activity:**
- Click the **→ Right** button
- Point to the code: "See? This is exactly what we just did!"
- Click **↑ Up**
- Point to the code: "And this is what happens when we move up!"

---

### Phase 6: Customization Challenge (10 minutes)

**Objective**: Empower students to experiment and own the learning

**Challenge 1: Change the Speed**
1. In the code preview, find `speed = 5`
2. Ask: "What if we change this to 10?"
3. **Modify the code** (if you have access to the files):
   - Open `script.js`
   - Change `let speed = 5;` to `let speed = 10;`
   - Refresh the page
4. Click the buttons again
   - "The box moves faster now!"

**Challenge 2: Change the Colors**
1. Ask: "What if we want a different color box?"
2. Modify in `styles.css`:
   - Change `background-color: lime;` to `background-color: gold;` (or any color)
   - Refresh
3. "Now we have a gold box!"

**Challenge 3: Change the Box Size**
1. In `script.js`, modify:
   ```javascript
   width: 50,    // Change to 30 or 80
   height: 50,   // Change to 30 or 80
   ```
2. Refresh and see the box change size

**Student Challenge:**
> "For homework, I want you to think about: What if we wanted the box to WRAP AROUND the screen? When it goes off the right edge, it appears on the left. How would we do that?"

---

### Phase 7: Wrap-Up & Connection to Coding (5 minutes)

**Objective**: Prepare students for the actual coding task

**Summary:**
- "You now understand coordinate systems, operations, and conditional logic."
- "You've seen the complete Python code structure."
- "Next class, we'll write this code ourselves in Pygame Zero."

**Bridge to Next Lesson:**
> "The code you see here is EXACTLY what you'll write. The only difference is you'll type it instead of exploring it visually. You already know what it does and why it works!"

**Homework Assignment:**
1. Explore the app on your own (link provided)
2. Try different speeds and colors
3. Answer the wrap-around challenge
4. Write down 3 things you learned about coordinates

---

## 🎯 Key Teaching Points to Emphasize

| Concept | Key Point | How the App Shows It |
|---------|-----------|---------------------|
| **Coordinates** | Y increases downward on screen | Drag box down, see Y increase |
| **Operations** | `box.x += 5` means add 5 to x | Click button, see operation displayed |
| **Conditions** | `if box.right < WIDTH:` prevents overflow | Enable boundaries, see condition when blocked |
| **Game Loop** | `draw()` renders, `update()` changes state | See both functions in code preview |
| **Variables** | `speed = 5` controls how much we move | See it in the operation display |

---

## 💡 Pro Tips

1. **Use the projector effectively**: Make the app large and visible. Point to specific numbers as you explain them.

2. **Ask more questions than you answer**: Let students discover the patterns. "What do you notice?" is more powerful than "Here's how it works."

3. **Pause for processing**: After each activity, give students 30 seconds to think and write notes.

4. **Encourage prediction**: Before clicking a button, ask "What do you think will happen?"

5. **Connect to their experience**: "Have you ever played a game where a character moves? This is how it works!"

6. **Celebrate curiosity**: If a student asks "What if we...?" encourage them to try it!

---

## 📊 Assessment Ideas

### Formative Assessment (During Class)
- Ask students to predict what will happen before you interact with the app
- Have them explain what they see in their own words
- Ask them to identify which button to click to achieve a specific movement

### Summative Assessment (After Class)
- Students write pseudocode for moving the box in a specific direction
- Students predict what happens if `speed = 20`
- Students explain why `box.y -= 5` moves the box UP

---

## 🔄 Follow-Up Activities

### Activity 1: Code Prediction
Show students a piece of code and ask: "What will this do?"
```python
if keyboard.up and box.top > 0:
    box.y -= speed
```

### Activity 2: Code Writing
Ask students to write the code for moving LEFT with boundaries.

### Activity 3: Extension Challenge
"What if we wanted the box to wrap around instead of stopping at boundaries?"
(Hint: Use the modulo operator `%`)

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| App won't load | Check GitHub Pages is enabled; verify the URL is correct |
| Buttons don't work | Try refreshing the page; check browser console for errors |
| Coordinates don't update | Make sure you're dragging within the blue game screen |
| Students can't see the code | Scroll down or project the full page |

---

## 📚 Additional Resources

- **Week 3 Student Worksheet**: Included in the repository
- **Python Pygame Zero Documentation**: https://pygame-zero.readthedocs.io/
- **Coordinate System Explanation**: https://en.wikipedia.org/wiki/Screen_coordinate_system

---

## 🎉 You're Ready!

You now have everything you need to deliver an engaging, hands-on lesson that builds deep understanding before students write a single line of code. Good luck, and enjoy watching your students' "aha!" moments!

---

**Questions or feedback?** Open an issue on GitHub or reach out to the project maintainers.
