# 🟦 Visual Logic Playground

An interactive, hands-on teaching tool designed to help students understand fundamental programming concepts—coordinate systems, conditional logic, and event-driven programming—**before they write their first line of code**.

## 🎯 Purpose

This web application bridges the gap between abstract programming concepts and tangible, visual understanding. Students interact with a draggable box on a game screen, observe real-time coordinate updates, and see the underlying Python code dynamically generated based on their actions.

Perfect for **Week 3: The Moving Square** in introductory programming courses.

## ✨ Features

### 1. **Interactive Coordinate Map**
- Drag a box around a 400×400 pixel game screen
- Real-time display of `x`, `y`, `top`, `bottom`, `left`, and `right` coordinates
- Visual demonstration of why **Y increases downward** (a common point of confusion)

### 2. **Human Keyboard Simulator**
- Four directional buttons (↑, ↓, ←, →) that simulate keyboard input
- Each button click displays the mathematical operation being performed (e.g., `box.x = box.x + 5`)
- Helps students understand the relationship between user input and code execution

### 3. **Boundary "Force Field" Visualizer**
- Toggle to enable/disable boundary checking
- When enabled, shows the specific Python condition that prevents movement (e.g., `box.right < WIDTH`)
- Teaches conditional logic in a visual, intuitive way

### 4. **Live Python Code Preview**
- A side panel that dynamically generates Python code based on student interactions
- Shows the exact code structure they will write: `WIDTH`, `HEIGHT`, `box = Rect(...)`, `def draw():`, `def update():`
- Creates a direct link between visual interaction and code understanding

## 🚀 Getting Started

### Option 1: GitHub Pages (Recommended for Classroom)

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/visual-logic-playground.git
   cd visual-logic-playground
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages"
   - Select "Deploy from a branch"
   - Choose the `main` branch and save
   - Your app will be live at `https://YOUR_USERNAME.github.io/visual-logic-playground/`

3. **Share the link with your students!**

### Option 2: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/visual-logic-playground.git
   cd visual-logic-playground
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Or using Node.js (if you have http-server installed)
   npx http-server
   ```

3. **Open in your browser**
   - Navigate to `http://localhost:8000`

## 📖 How to Use in Class

### Before Coding
1. **Have students explore the coordinate system** by dragging the box around
   - Ask: "What happens to `x` when you move right?"
   - Ask: "Why does `y` increase when you move down?"

2. **Click the direction buttons** to see operations displayed
   - Observe: "When I click Right, `box.x = box.x + 5`"
   - Connect: "This is the code we'll write!"

3. **Enable boundaries** to see conditional logic in action
   - Ask: "What stops the box at the edge?"
   - Show: "The condition `box.right < WIDTH` prevents further movement"

4. **Study the Live Code Preview** to see the complete program structure
   - Highlight the `def update():` function
   - Explain how keyboard input triggers the conditionals

### After Exploration
Students now have **visual, tactile understanding** of:
- Coordinate systems and why Y is inverted
- Variable assignment and arithmetic operations
- Conditional statements and boundary checking
- The structure of a game loop (`draw()` and `update()`)

They're ready to write the actual Python code with confidence!

## 🛠️ Customization

You can easily modify the app for different scenarios:

### Change the box size
In `script.js`, modify the `box` object:
```javascript
let box = {
    x: 100,
    y: 100,
    width: 50,    // ← Change this
    height: 50,   // ← And this
    // ...
};
```

### Change the speed
```javascript
let speed = 5;  // ← Increase for faster movement, decrease for slower
```

### Change colors
In `index.html`, modify the `screen.fill()` and `screen.draw.filled_rect()` colors in the code preview, or update the CSS:
```css
#game-screen {
    background-color: darkblue;  /* ← Change this */
}

#player-box {
    background-color: lime;  /* ← Change this */
}
```

### Add more features
- Add a score display
- Add obstacles or other objects
- Add sound effects
- Extend the code preview to show more complex logic

## 📁 File Structure

```
visual-logic-playground/
├── index.html       # Main HTML structure
├── styles.css       # All styling
├── script.js        # Interactive logic and code generation
├── README.md        # This file
└── .gitignore       # (Optional) Git ignore file
```

## 🎓 Learning Outcomes

After using this tool, students will understand:

1. **Coordinate Systems**: How 2D positions are represented with `(x, y)` and why Y increases downward in screen coordinates
2. **Variables and Assignment**: How `box.x += speed` modifies state
3. **Conditional Logic**: How `if` statements with conditions like `box.right < WIDTH` control program flow
4. **Event-Driven Programming**: How user input (keyboard) triggers code execution
5. **Game Loop Structure**: The separation of `draw()` (rendering) and `update()` (logic) functions

## 🔧 Technical Details

- **No frameworks**: Pure HTML, CSS, and vanilla JavaScript
- **No dependencies**: Works offline, no npm required
- **Lightweight**: ~8 KB total (HTML + CSS + JS)
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Keyboard and mouse input support

## 📝 License

This project is open source and available under the MIT License. Feel free to modify and share with your students!

## 💡 Tips for Teachers

1. **Project on a screen** while students follow along
2. **Ask guiding questions**: "What do you think will happen if we increase the speed?"
3. **Let students experiment** with the customization options
4. **Connect to the code**: Show them the actual Python code after they've explored
5. **Encourage modification**: Have them suggest changes to colors, speeds, or box sizes

## 🤝 Contributing

Have ideas for improvements? Found a bug? Feel free to open an issue or submit a pull request!

## 📧 Questions?

If you have questions or feedback, please open an issue on GitHub or reach out to the project maintainers.

---

**Happy teaching! 🎉**
