# kevwardcv.co.uk
Kev Ward CV

## About
This is a professional CV website for Kev Ward.

## Building the Site

### Prerequisites
- Node.js (v12 or higher)

### Build Instructions

1. Build the site:
```bash
npm run build
```

This will copy all files from `src/` to `dist/` directory.

2. Clean build artifacts:
```bash
npm run clean
```

## Project Structure
```
.
├── src/           # Source files
│   ├── index.html # Main CV page
│   └── style.css  # Styles
├── dist/          # Built files (generated)
├── build.js       # Build script
└── package.json   # Project configuration
```

## Deployment
The built files in the `dist/` directory can be deployed to any static hosting service.
