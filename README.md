# HealthyRainbow - Organic Food Colors Website

A vibrant Flask web application showcasing recipes for creating organic food colors from natural ingredients.

## Project Overview

HealthyRainbow is an educational project website that demonstrates how to create natural, organic food colors using everyday fruits, vegetables, and spices. The website features a modern, colorful design with smooth animations and an intuitive user interface.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Full-Page Recipes**: Each recipe occupies a full page with scroll-snap behavior
- **Interactive Animations**: Smooth transitions and hover effects throughout
- **Color-Coded Sections**: Each recipe has its own color theme matching the food color
- **Simple 3-Step Instructions**: Easy-to-follow recipes with clear steps
- **SVG Graphics**: Custom SVG decorations and icons for visual appeal

## Technology Stack

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Fonts**: Righteous (headings), Quicksand (body text)
- **Data Storage**: CSV file for recipe data

## Project Structure

```
HealthyRainbow/
├── app.py                  # Flask application
├── recipes.csv             # Recipe data
├── templates/
│   ├── index.html          # Homepage
│   └── recipes.html        # Recipes page
├── static/
│   ├── css/
│   │   ├── style.css       # Homepage styles
│   │   └── recipes.css     # Recipes page styles
│   ├── js/
│   │   ├── script.js       # Homepage JavaScript
│   │   └── recipes.js      # Recipes page JavaScript
│   └── bg.png              # Background image (to be added)
└── README.md               # This file
```

## Installation & Setup

1. **Install Python dependencies**:
```bash
pip install flask --break-system-packages
```

2. **Add background image**:
   - Place your background image as `bg.png` in the `static/` directory
   - Recommended: A colorful, organic-themed image (fruits, vegetables, nature)

3. **Run the application**:
```bash
python app.py
```

4. **Access the website**:
   - Open your browser and navigate to `http://localhost:5000`

## CSV File Format

The `recipes.csv` file should have the following columns:
- `color_name`: Name of the color (e.g., Red, Yellow, Green)
- `ingredients`: Colon-separated list of ingredients (e.g., "Beetroot:Water:Lemon juice")
- `step1`: First preparation step
- `step2`: Second preparation step
- `step3`: Final preparation step


## Features Breakdown

### Homepage (`/`)
- Hero section with animated shapes and gradient background
- About Us section explaining the project mission
- Why Us section highlighting benefits of natural food colors
- Contact information section
- Call-to-action button linking to recipes
- Team member details
- Responsive footer

### Recipes Page (`/recipes`)
- Full-page layouts for each recipe
- Color-specific gradient backgrounds
- Animated color blobs
- Ingredients list with visual bullets
- 3-step process cards with numbers
- Pro tips section
- Scroll indicators
- Keyboard navigation (Arrow keys, Page Up/Down)
- Touch swipe support for mobile

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## License

This is an educational project created for MIT AOE, Department of Information Technology.

## Notes

- The website uses Google Fonts (Righteous and Quicksand) which require an internet connection
- Smooth scroll and snap scrolling work best on modern browsers
- For best experience, use a device with a screen width of at least 768px

---

Created with ❤️ by Vedant Desai